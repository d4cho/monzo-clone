import React from 'react';
import styles from '../../styles/Button.module.css';

const Button = ({ buttonText }) => {
    return (
        <button className={styles.container}>
            {buttonText || 'use the buttonText prop'}
        </button>
    );
};

export default Button;
