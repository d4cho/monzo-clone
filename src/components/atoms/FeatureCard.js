import React from 'react';
import styles from '../../styles/FeatureCard.module.css';

const FeatureCard = ({ cardData }) => {
    const { imageUrl, title, text } = cardData;
    return (
        <div className={styles.container}>
            <img src={imageUrl} alt='' />
            <h2 className={styles.title}>{title}</h2>
            <p>{text}</p>
        </div>
    );
};

export default FeatureCard;
