import styles from './Table.module.scss';
import { useSelector } from 'react-redux';
import { getOneTable } from '../../../redux/tablesRedux'
import Button from 'react-bootstrap/Button';
import SpinnerLine from '../../common/SpinnerLine/SpinnerLine';
import { useParams } from "react-router";
import Bill from '../../features/Bill/Bill';
import People from '../../features/People/People';
// import Status from '../../features/Status/Status';
import { useState, useEffect  } from 'react';
import Form from 'react-bootstrap/Form';



const Table = props => {
    const params = useParams();
    const tableActiveId = params.id;
    console.log (tableActiveId);
    
    const tableActiveShow = useSelector(state => getOneTable(state, parseInt(tableActiveId)));
    console.log (tableActiveShow);
    // const [statusFromState, setStatusFromState] = useState('');
    
    // useEffect(() => {
    //     const fetchData = async()=>{
    //         const result = await tableActiveShow[0].status;
    //         setStatusFromState(result);
    //     }
    //     fetchData();

    // }, [tableActiveShow]);

    // console.log (statusFromState);

    // debugger;
    const [formStatus, setFormStatus] = useState('not ready');

    console.log (formStatus);

    const statusSelect = (a, b ) => {
        const result = a === 'not ready' ? b : a;
        console.log (result);
        return result;
    };
    
    const handleChange = (event) => {
        setFormStatus(event.target.value)
    }

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
                        
                        {/* <Status status = {table.status}/> */}

                        <div className={styles.status}>
                            <span>Status:</span>
                            <Form.Select value = {statusSelect (formStatus, table.status)} onChange={handleChange}>
                                <option value={'Free'}>Free</option>
                                <option value={'Reserved'}>Reserved</option>
                                <option value={'Busy'}>Busy</option>
                                <option value={'Cleaning'}>Cleaning</option>
                            </Form.Select> 
                        </div>

                        <People peopleAmount = {table.peopleAmount} maxPeopleAmount={table.maxPeopleAmount} status = {statusSelect (formStatus, table.status)}/>
                        
                        <Bill sum = {table.bill} status = {statusSelect (formStatus, table.status)}/>

                        <Button className={styles.button}  variant="primary">Update</Button>

                    </div> 
                    
                )}

        </div>
    );
}; 

export default Table;

