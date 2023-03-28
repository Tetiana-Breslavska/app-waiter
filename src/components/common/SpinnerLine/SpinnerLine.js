import Spinner from 'react-bootstrap/Spinner';
import styles from './SpinnerLine.module.scss';


const SpinnerLine = props => {
    return (
        <div className={styles.spinner} >                 
            <span>Loading...</span>
            <Spinner animation="border" role="status"></Spinner>
        </div>
    );
};


export default SpinnerLine;


