import styles from './People.module.scss';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { useState, useEffect } from 'react';



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





    // const [visitors, setVisitors] = useState({amount:props.peopleAmount, maxAmount: props.maxPeopleAmount});
    // console.log(visitors);
    // const handleChange = (event) => {
    //     const name = event.target.name;
    //     const value = event.target.value;
    //     console.log(visitors.maxAmount);
    //     // 
    //     if (value >= 0 && value <= 10){
            
    //         if(name ==="amount" && value  > visitors.maxAmount){
    //             setVisitors(values => ({...values, [name]: visitors.maxAmount}))
    //         }
    //         else if(name === "maxAmount" && value  < visitors.amount){
    //             // debugger
    //             setVisitors(values => ({...values, [amount]: visitors.maxAmount}))
    //         }

    //         else{

    //             setVisitors(values => ({...values, [name]: value}))}
    //         }
    //     }
    

    return (
        <div className={styles.people}>
            <span>People:</span>
            <Form>
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
            </Form>
        </div>
    );

}; 

export default People;