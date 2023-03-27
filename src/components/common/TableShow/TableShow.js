import styles from './TableShow.module.scss';
import Nav from 'react-bootstrap/Nav';

const TableShow = props => {
    return (
        <li className={styles.tableItem}>
            <div className={styles.tableDescr}>
                <h2>Table {props.id}</h2>
                <p>Status: {props.status} </p>
            </div>
            <Nav variant="pills" defaultActiveKey="/table/:id"> 
                <Nav.Item>
                    <Nav.Link href="/table/:id">Show more</Nav.Link>
                </Nav.Item>
            </Nav>
        </li>
    );
};

export default TableShow;