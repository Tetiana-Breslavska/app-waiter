import styles from './People.module.scss';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { useState } from 'react';
import PropTypes from 'prop-types';


const People = props => {
    const [visitorsAmount, setVisitorsAmount] = useState(props.peopleAmount);
    const [visitorsMax, setVisitorsMax] = useState(props.maxPeopleAmount);
    let statusFree;
    if(props.status === "Free" || props.status === "Cleaning"){
        statusFree=true;
    }
    
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        
        if (value >= 0 && value <= 10){
            if(name ==="maxAmount"){
                if(value  < visitorsAmount){
                    setVisitorsAmount(value);
                }
                else{
                    setVisitorsMax(value);
                }
            }
            else {
                if(value  > visitorsMax){
                    setVisitorsAmount(visitorsMax);
                }
                else{
                    setVisitorsAmount(value);
                }
            }   
        }
    }

    return (
        <div className={styles.people}>
            <span>People:</span>
            
                <Row>
                    <Col xs={2}>
                        <Form.Control 
                            type="number" 
                            name="amount"
                            value= {statusFree ? 0: visitorsAmount }
                            onChange={handleChange} 
                        />
                    </Col>
                    /
                    <Col xs={2}>
                        <Form.Control 
                            type="number" 
                            name="maxAmount"
                            value={visitorsMax} 
                            onChange={handleChange} 
                        />                        
                    </Col>
                </Row>
            
        </div>
    );

}; 

People.propTypes ={
    peopleAmount: PropTypes.string.isRequired,
    maxPeopleAmount:  PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
};

export default People;