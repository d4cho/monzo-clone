import Button from '@/components/atoms/Button';
import React from 'react';
import styles from '../../../styles/CompareAccountsSection.module.css';

const CompareAccountsSection = () => {
    return (
        <div className={styles.container}>
            <div></div>
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
