import styles from './TableShow.module.scss';
import { Link } from 'react-router-dom';
import ListGroup from 'react-bootstrap/ListGroup';
import PropTypes from 'prop-types';


const TableShow = props => {

    return (
        <ListGroup.Item >
            <div className={styles.tableItem}>
                <div className={styles.tableDescr}>
                    <h2>Table {props.id}</h2>
                    <p>Status: <span>{props.status}</span> </p>
                </div>
                <div className={styles.button}>
                    <Link to = {`/table/${props.id}`} className={styles.link}> Show more</Link>
                </div>  
                
            </div>
        </ListGroup.Item>
    );
};

TableShow.propTypes ={
    table: PropTypes.object.isRequired,

};


export default TableShow;

