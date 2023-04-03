import styles from './Bill.module.scss';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { setDataForServer } from '../../../redux/dataForServerReduser';


const Bill = props => {
    const dispatch = useDispatch();
    const [billSum, setbillSum] = useState(props.sum);
    const handleChange = (event) => {
        setbillSum(event.target.value);
    }

    useEffect(()=>{
        dispatch(setDataForServer({bill: billSum}));
        },[billSum]);

    if (props.status === 'Busy'){
        return (
            <div>
                <div className={styles.bill}>
                    <span>Bill:</span>
                    <span>$</span>
                    
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
                    
                </div>
            </div>
        );
    }
}; 

Bill.propTypes ={
    sum: PropTypes.string.isRequired,
    status:  PropTypes.string.isRequired,
};

export default Bill;

