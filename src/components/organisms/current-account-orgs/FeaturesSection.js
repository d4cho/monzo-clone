import Button from '@/components/atoms/Button';
import FeaturesLayout from '@/components/molecules/FeaturesLayout';
import React from 'react';
import styles from '../../../styles/FeaturesSection.module.css';
import cardData from '../../../../assets/data/features-cards-data.json';

const FeaturesSection = () => {
    return (
        <div className={styles.container}>
            <div className={styles.heading__wrapper}>
                <h1 className={styles.heading}>
                    Packed with the best of Monzo
                </h1>
                <Button buttonText={'Compare Accounts'} />
            </div>
            <div style={{ marginTop: '1rem' }}>
                <FeaturesLayout data={cardData.cards} />
            </div>
        </div>
    );
};

export default FeaturesSection;
