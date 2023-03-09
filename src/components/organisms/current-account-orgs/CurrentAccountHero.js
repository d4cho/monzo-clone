import Button from '@/components/atoms/Button';
import React from 'react';
import styles from '../../../styles/CurrentAccountHero.module.css';

const CurrentAccountHero = () => {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.heading}>Monzo Current Accounts</h1>
                <p className={styles.text}>
                    We’re making money work for everyone, so we have different
                    current accounts for different needs. Choose from our
                    original Monzo current account, Monzo Plus or Monzo Premium.
                </p>
                <p className={styles.text}>
                    Your eligible deposits are protected by The Financial
                    Services Compensation Scheme (FSCS) up to a value of £85,000
                    per person.
                </p>
                <div className={styles.text}>
                    <img
                        src='//images.ctfassets.net/ro61k101ee59/N8MuWQFJLYpXA6oC9C7WI/3f2bf09cef6745272ed8ce53cd1fe8b9/trust-marks-on-dark.png'
                        alt=''
                    />
                </div>
                <Button buttonText={'Get a Monzo Bank Account'} />
            </div>
            <div className={styles.image__wrapper}>
                <img
                    src='https://images.ctfassets.net/ro61k101ee59/rVk25NRNNVByNZNOnhd3A/f51ea5ee4ebd4ca153556c9859a0c880/Current_Accounts_Hero__Mobile_.png?w=750&q=75'
                    alt=''
                />
            </div>
        </div>
    );
};

export default CurrentAccountHero;
