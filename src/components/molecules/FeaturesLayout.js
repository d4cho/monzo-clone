import React from 'react';
import styles from '../../styles/FeaturesLayout.module.css';
import FeatureCard from '../atoms/FeatureCard';

const FeaturesLayout = ({ data }) => {
    return (
        <div className={styles.container}>
            {data.map((card, idx) => {
                return (
                    <React.Fragment key={idx}>
                        <FeatureCard cardData={card} />
                    </React.Fragment>
                );
            })}
        </div>
    );
};

export default FeaturesLayout;
