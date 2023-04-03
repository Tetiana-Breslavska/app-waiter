import styles from './Bill.module.scss';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { useState } from 'react';
import PropTypes from 'prop-types';

const Bill = props => {
    const [billSum, setbillSum] = useState(props.sum);
    const handleChange = (event) => {
        setbillSum(event.target.value)
    }
    if (props.status === 'Busy'){
        return (
            <div>
                <div className={styles.bill}>
                    <span>Bill:</span>
                    <span>$</span>
                    <Form>
                        <Row>
                            <Col xs={4}>
                                <Form.Control 
                                    type="number" 
                                    name="bill"
                                    value={billSum}
                                    onChange={handleChange} 
                                />
                            </Col>
                        </Row>
                    </Form>
                </div>
            </div>
        );
    }
}; 

Bill.propTypes ={
    sum: PropTypes.number.isRequired,
    status:  PropTypes.string.isRequired,
};

export default Bill;

