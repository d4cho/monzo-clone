import Button from '@/components/atoms/Button';
import ComparisonCard from '@/components/molecules/ComparisonCard';
import React from 'react';
import styles from '../../../styles/CompareAccountsSection.module.css';
import cardData from '../../../../assets/data/comparison-cards-data.json';

const CompareAccountsSection = () => {
    const { monzo, monzoPlus, monzoPremium } = cardData;

    return (
        <div className={styles.container}>
            <div className={styles.comparison__cards__container}>
                <div className={styles.comparison__cards__wrapper}>
                    <ComparisonCard data={monzo} />
                </div>
                <div className={styles.comparison__cards__wrapper}>
                    <ComparisonCard data={monzoPlus} />
                </div>
                <div className={styles.comparison__cards__wrapper}>
                    <ComparisonCard data={monzoPremium} />
                </div>
            </div>
            <div className={styles.bot__content}>
                <h2 className={styles.bot__heading}>Not sure what to pick?</h2>
                <p className={styles.bot__body}>
                    Compare each account to find the right one for you
                </p>
                <Button buttonText={'Compare Accounts'} />
            </div>
        </div>
    );
};

export default CompareAccountsSection;
