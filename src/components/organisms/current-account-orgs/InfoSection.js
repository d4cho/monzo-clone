import Button from '@/components/atoms/Button';
import React from 'react';
import styles from '../../../styles/InfoSection.module.css';

const InfoSection = ({
    headingText,
    bodyText1,
    bodyText2,
    buttonText,
    imgUrl,
    imgPosition,
}) => {
    if (imgPosition === 'left') {
        return (
            <div className={styles.container}>
                <div className={styles.image__wrapper}>
                    <img src={imgUrl} alt='' />
                </div>
                <div className={styles.text__content}>
                    <h1 className={styles.heading}>{headingText}</h1>
                    <p className={styles.body}>{bodyText1}</p>
                    {bodyText2 && <p className={styles.body}>{bodyText2}</p>}
                    <div className={styles.button__wrapper}>
                        <Button buttonText={buttonText} />
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className={styles.container}>
            <div className={styles.text__content}>
                <h1 className={styles.heading}>{headingText}</h1>
                <p className={styles.body}>{bodyText1}</p>
                {bodyText2 && <p className={styles.body}>{bodyText2}</p>}
                <div className={styles.button__wrapper}>
                    <Button buttonText={buttonText} />
                </div>
            </div>
            <div className={styles.image__wrapper}>
                <img src={imgUrl} alt='' />
            </div>
        </div>
    );
};

export default InfoSection;
