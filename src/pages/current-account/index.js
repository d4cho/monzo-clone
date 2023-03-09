import CurrentAccountHero from '@/components/organisms/current-account-orgs/CurrentAccountHero';
import FeaturesSection from '@/components/organisms/current-account-orgs/FeaturesSection';
import React from 'react';
import styles from '../../styles/CurrentAccountPage.module.css';

const CurrentAccountPage = () => {
    return (
        <main className={styles.container}>
            <section style={{ backgroundColor: '#112231' }}>
                <CurrentAccountHero />
            </section>
            <section>
                <FeaturesSection />
            </section>
        </main>
    );
};

export default CurrentAccountPage;
