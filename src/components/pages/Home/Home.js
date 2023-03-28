import styles from './Home.module.scss';
import TableShow from '../../features/TableShow/TableShow';
import ListGroup from 'react-bootstrap/ListGroup';
import { useSelector } from 'react-redux';
import { getAllTables } from '../../../redux/tablesRedux';
import SpinnerLine from '../../common/SpinnerLine/SpinnerLine';


const Home = props => {

    const tables = useSelector(state => getAllTables(state));
    
    if (!tables){
        return (
            <SpinnerLine/>
        )
    }

    
    return (
        <div>
            <h1 className={styles.title}>All tables</h1>
            
            <ListGroup>
            {tables.map(table => 
            
                <TableShow key={table.id}{...table}/> 
            )}
            
            </ListGroup>
        </div>
    );
};





export default Home;




