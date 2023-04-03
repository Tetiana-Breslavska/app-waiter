import styles from './Table.module.scss';
import { useSelector } from 'react-redux';
import { getOneTable } from '../../../redux/tablesRedux'
import Button from 'react-bootstrap/Button';
import SpinnerLine from '../../common/SpinnerLine/SpinnerLine';
import { useParams } from "react-router";
import Bill from '../../features/Bill/Bill';
import People from '../../features/People/People';
import { useState  } from 'react';
import Form from 'react-bootstrap/Form';
import { Navigate } from 'react-router-dom';
import { getAllTables } from '../../../redux/tablesRedux';
// import { useDispatch } from 'react-redux';
// import { tableRequest } from '../../../redux/tablesRedux';
// import { setDataForServer } from '../../../redux/dataForServerReduser';


const Table = props => {
    // const dispatch = useDispatch();
    const params = useParams();
    const tableActiveId = params.id;
    const tables = useSelector(state => getAllTables(state));
    // const dataForServer = useSelector (state => state.dataForServer);

    
    const tableActiveShow = useSelector(state => getOneTable(state, parseInt(tableActiveId)));
    // console.log (tableActiveShow);
    const [formStatus, setFormStatus] = useState('not ready');

    const statusSelect = (a, b ) => {
        const result = a === 'not ready' ? b : a;
        console.log (result);
        return result;
    };
    
    const handleChange = (event) => {
        setFormStatus(event.target.value);
    }

     //console.log (formStatus); 

//     useEffect(()=>{
//     dispatch(setDataForServer({status: formStatus}));
//     },[formStatus]);
//   console.log (dataForServer);

    const handleSubmit = (event) => {
        event.preventDefault();
        // dispatch(tableRequest(dataForServer));

    };

    if (tables.length !== 0){
        const result = tables.find(table=> table.id === parseInt(tableActiveId));
        if (result===undefined){
            return <Navigate to="/" />;
        }
    };

    if (tableActiveShow.length === 0){
        return (
            <SpinnerLine/>
        )
    }

    return (
        <div>
            {tableActiveShow.map(table => 
                    <div className={styles.table_active} key={table.id}{...table}>
                        <h1 className={styles.title}>Table {table.id}</h1>
                        <Form onSubmit={handleSubmit}>
                            <div className={styles.status}>
                                <span>Status:</span>
                                <select value = {statusSelect (formStatus, table.status)} onChange={handleChange}>
                                    <option value={'Free'}>Free</option>
                                    <option value={'Reserved'}>Reserved</option>
                                    <option value={'Busy'}>Busy</option>
                                    <option value={'Cleaning'}>Cleaning</option>
                                </select>
                                
                            </div>
                            <People peopleAmount = {table.peopleAmount} maxPeopleAmount={table.maxPeopleAmount} status = {statusSelect (formStatus, table.status)}/>
                            <Bill sum = {table.bill} status = {statusSelect (formStatus, table.status)}/>
                            <Button className={styles.button}  variant="primary" type ="submit">Update</Button>
                        </Form>
                    </div> 
                    
                )}

        </div>
    );
}; 

export default Table;

