// import styles from './Home.module.scss';
import TableShow from '../../common/TableShow/TableShow';
import ListGroup from 'react-bootstrap/ListGroup';

const Home = props => {
    return (
        <div>
            <h1>Home</h1>
            <ListGroup>
                <ListGroup.Item> <TableShow/> </ListGroup.Item>
                <ListGroup.Item> <TableShow/> </ListGroup.Item>
                <ListGroup.Item> <TableShow/> </ListGroup.Item>
                <ListGroup.Item> <TableShow/> </ListGroup.Item>
                <ListGroup.Item> <TableShow/> </ListGroup.Item>
                </ListGroup>
          


        </div>
    );
};

export default Home;