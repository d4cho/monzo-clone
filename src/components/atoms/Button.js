import React from 'react';
import styles from '../../styles/Button.module.css';

const Button = ({ buttonText, handleClick }) => {
    return (
        <button
            className={styles.container}
            onClick={handleClick ? () => handleClick() : () => {}}
        >
            {buttonText || 'use the buttonText prop'}
        </button>
    );
};

export default Button;
