import AppStoreSection from '@/components/organisms/current-account-orgs/AppStoreSection';
import CompareAccountsSection from '@/components/organisms/current-account-orgs/CompareAccountsSection';
import CurrentAccountHero from '@/components/organisms/current-account-orgs/CurrentAccountHero';
import FeaturesSection from '@/components/organisms/current-account-orgs/FeaturesSection';
import InfoSection from '@/components/organisms/current-account-orgs/InfoSection';
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
            <section>
                <InfoSection
                    headingText={'Banking that makes a statement'}
                    bodyText1={
                        'Turn heads with our white metal card. Enjoy peace of mind with extensive phone and worldwide travel insurance, interest on your balance and much more.'
                    }
                    bodyText2={
                        'Monzo Premium is £15 per month • 6 month minimum • Must be aged 18-69 • Ts&Cs apply'
                    }
                    buttonText={'Expore Monzo Premium'}
                    imgUrl={
                        '//images.ctfassets.net/ro61k101ee59/3hdGCad6Obr2PLmIF7OEMX/05750eec3af5bb5071311aa3e5d09f4e/Premium.png'
                    }
                />
            </section>
            <section>
                <InfoSection
                    headingText={'Put money in your hands'}
                    bodyText1={
                        'More financial visibility, with your other bank accounts and credit cards all in one place. Get interest on your money, personalised budgeting and much more.'
                    }
                    bodyText2={
                        'Monzo Plus is £5 per month • 3 month minimum • Must be aged 18+ • T&Cs apply'
                    }
                    buttonText={'Expore Monzo Plus'}
                    imgUrl={
                        '//images.ctfassets.net/ro61k101ee59/2eRxNCx8GXekN2CBzA1OyR/e7975b9ccb4b86c577970584cca47b2f/Plus.png'
                    }
                    imgPosition={'left'}
                />
            </section>
            <section>
                <InfoSection
                    headingText={
                        'The award-winning banking app with the hot coral debit card'
                    }
                    bodyText1={
                        'Our free current account lets you spend, save and manage your money, all in one place. Get instant notifications whenever you spend, set aside your saving and bills money into Pots and pay friends in a few taps.'
                    }
                    buttonText={'Expore Our Free Account'}
                    imgUrl={
                        '//images.ctfassets.net/ro61k101ee59/4XJfzhsY9JEI4ibNQxHZQ5/f5d800b9ab43a8d604fd48ec7a09f577/CurrentAccounts.png'
                    }
                />
            </section>
            <section className={styles.compare__accounts__section}>
                <CompareAccountsSection />
            </section>
            <section style={{ backgroundColor: '#f2f8f3' }}>
                <InfoSection
                    headingText={'Easy current account switching'}
                    bodyText1={
                        'With the Current Account Switch Service, you can move everything over to Monzo in 7 days without lifting a finger. We do everything for you, and you don’t need to deal with your old bank at all.'
                    }
                    buttonText={'Find out more'}
                    imgUrl={
                        '//images.ctfassets.net/ro61k101ee59/6wsIAKHeWhCNaH39VPJ1Fl/593f1c8f7449d2c43d411109aff0a6cf/Switch_Guarantee.svg'
                    }
                    imgPosition={'left'}
                />
            </section>
            <section>
                <AppStoreSection />
            </section>
        </main>
    );
};

export default CurrentAccountPage;
