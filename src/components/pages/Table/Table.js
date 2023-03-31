import styles from './Table.module.scss';
import { useSelector } from 'react-redux';
import { getOneTable } from '../../../redux/tablesRedux'
import Button from 'react-bootstrap/Button';
import SpinnerLine from '../../common/SpinnerLine/SpinnerLine';
import { useParams } from "react-router";
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Bill from '../../features/Bill/Bill';
import People from '../../features/People/People';


const Table = props => {
    const params = useParams();
    const tableActiveId = params.id;
    console.log (tableActiveId);


    const tableActiveShow = useSelector(state => getOneTable(state, parseInt(tableActiveId)));
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
                        <div className={styles.status}>
                            <span>Status:</span>
                            <Form.Select value={table.status}>
                                <option>Free</option>
                                <option>Reserved</option>
                                <option>Busy</option>
                                <option>Cleaning</option>
                            </Form.Select> 
                        </div>
                        <People peopleAmount = {table.peopleAmount} maxPeopleAmount={table.maxPeopleAmount}/>
                      
                        <Bill sum = {table.bill} status = {table.status}/>

                        <Button variant="primary">Update</Button>

                    </div> 
                    
                )}

        </div>
    );
}; 

export default Table;

