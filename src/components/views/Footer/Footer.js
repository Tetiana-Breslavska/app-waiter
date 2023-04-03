import styles from './Footer.module.scss';

const Footer = props => {
    return (
        <div>
            <p className={styles.footer_text}>Copyright &copy; BlogApp 2022</p>
        </div>
    );
};

export default Footer;