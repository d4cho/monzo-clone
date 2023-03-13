import AppStoreSvg from '@/components/atoms/AppStoreSvg';
import PlayStoreSvg from '@/components/atoms/PlayStoreSvg';
import React from 'react';
import styles from '../../../styles/AppStoreSection.module.css';

const AppStoreSection = () => {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <h2 className={styles.header}>
                    Sign up for a Monzo current account in less than 15 minutes
                </h2>
                <p className={styles.text}>
                    And join more than 7 million people who’ve already changed
                    the way they bank.
                </p>
            </div>
            <div className={styles.buttons_wrapper}>
                <button style={{ marginRight: '16px' }}>
                    <AppStoreSvg />
                </button>
                <button>
                    <PlayStoreSvg />
                </button>
            </div>
        </div>
    );
};

export default AppStoreSection;
