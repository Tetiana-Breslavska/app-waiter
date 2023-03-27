import styles from './Home.module.scss';
import TableShow from '../../common/TableShow/TableShow';
import ListGroup from 'react-bootstrap/ListGroup';
import { useSelector } from 'react-redux';
import { getAllTables } from '../../../redux/tablesRedux';

const Home = props => {

    const tables = useSelector(state => getAllTables(state));
    return (
        <div>
            <h1 className={styles.title}>All tables</h1>
            <ListGroup>
            {tables.map(table => (
                <ListGroup.Item> <TableShow key={table.id}{...table}/> </ListGroup.Item>
            ))}
            </ListGroup>


        </div>
    );
};


export default Home;



