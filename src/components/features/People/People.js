import styles from './People.module.scss';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';



const People = props => {

    // if (props.status === 'Busy'){
        
        return (
            <div className={styles.people}>
                <span>People:</span>
                <Form>
                    <Row>
                        <Col xs={2}>
                            <Form.Control value={props.peopleAmount} />
                        </Col>
                        /
                        <Col xs={2}>
                            <Form.Control value={props.maxPeopleAmount}/>
                        </Col>
                    </Row>
                </Form>
            </div>
        );
    // }
}; 

export default People;