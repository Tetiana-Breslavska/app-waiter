import styles from './Status.module.scss';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';




const Status = props => {
    const [formStatus, setFormStatus] = useState(props.status);

    const handleChange = (event) => {
        setFormStatus(event.target.value)
        
    }



    return (
        <div className={styles.status}>
            <span>Status:</span>
            <Form.Select value={formStatus} onChange={handleChange}>
                <option value={'Free'}>Free</option>
                <option value={'Reserved'}>Reserved</option>
                <option value={'Busy'}>Busy</option>
                <option value={'Cleaning'}>Cleaning</option>
            </Form.Select> 
        </div>
    );
    
}; 

export default Status;