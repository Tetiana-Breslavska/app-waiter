import styles from './Bill.module.scss';
// import { useSelector } from 'react-redux';
// import { getOneTable } from '../../../redux/tablesRedux'
// import Button from 'react-bootstrap/Button';
// import SpinnerLine from '../../common/SpinnerLine/SpinnerLine';
// import { useParams } from "react-router";
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';



const Bill = props => {

    if (props.status === 'Busy'){
        
        return (
            <div>
                <div className={styles.bill}>
                    <span>Bill:</span>
                    <span>$</span>
                    <Form>
                        <Row>
                            <Col xs={4}>
                                <Form.Control value={props.sum} />
                            </Col>
                        </Row>
                    </Form>
                </div>
            </div>
        );
    }
}; 

export default Bill;

