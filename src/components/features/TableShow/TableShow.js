import styles from './TableShow.module.scss';
import Nav from 'react-bootstrap/Nav';
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
                <Nav variant="pills" defaultActiveKey={`table/${props.id}`}> 
                    <Nav.Item>
                        <Nav.Link href = {`table/${props.id}`}> Show more</Nav.Link>
                    </Nav.Item>
                </Nav>
            </div>
        </ListGroup.Item>
    );
};

TableShow.propTypes ={
    table: PropTypes.object.isRequired,

};


export default TableShow;

