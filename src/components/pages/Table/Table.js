// import styles from './Table.module.scss';
import { useSelector } from 'react-redux';
import { getOneTable } from '../../../redux/tablesRedux'
import Button from 'react-bootstrap/Button';
import SpinnerLine from '../../common/SpinnerLine/SpinnerLine';
import { useParams } from "react-router";


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
                    <div key={table.id}{...table}>
                        <h1>Table {table.id}</h1>
                        <p>Status: {table.status} </p>
                        <p>People:{table.peopleAmount} </p>
                        <p>Bill: </p>
                        <Button variant="primary">Update</Button>{' '}

                    </div> 
                    
                )}

        </div>
    );
}; 

export default Table;

// 