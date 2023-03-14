import React from 'react';
import styles from '../../styles/ComparisonListItem.module.css';

const ComparisonListItem = ({
    iconUrl,
    title,
    desc,
    withShowBtn,
    bgColor,
    bgImage,
}) => {
    if (withShowBtn) {
        return (
            <li
                className={styles.container}
                style={{
                    backgroundColor: bgColor ? bgColor : 'none',
                    backgroundImage: bgImage ? bgImage : 'none',
                }}
            >
                <div className={styles.icon__wrapper}>
                    <img
                        className={styles.icon}
                        src='https://images.ctfassets.net/ro61k101ee59/3NuLVqF26vhN4wwHVKcRIG/a034ccacf53ad1f6692ad06663b10709/paid-monzo-icon-check.svg'
                        alt=''
                    />
                </div>
                <div style={{ flexGrow: 2 }}>
                    <p className={styles.title}>{title}</p>
                </div>
                <div>
                    <button className={styles.show__btn}>show</button>
                </div>
            </li>
        );
    }

    return (
        <li className={styles.container}>
            <div className={styles.icon__wrapper}>
                <img className={styles.icon} src={iconUrl} alt='' />
            </div>
            <div>
                <p className={styles.title}>{title}</p>
                <p className={styles.desc}>{desc}</p>
            </div>
        </li>
    );
};

export default ComparisonListItem;
