import React from 'react';
import styles from '../../styles/ComparisonCard.module.css';
import Button from '../atoms/Button';
import ComparisonListItem from '../atoms/ComparisonListItem';

const ComparisonCard = ({ data }) => {
    const { headerData, listData, bottomData } = data;

    return (
        <div className={styles.container}>
            <div
                className={styles.top}
                style={{
                    backgroundImage: headerData.bgImage
                        ? headerData.bgImage
                        : 'none',
                }}
            >
                <div>
                    <h2 className={styles.heading}>{headerData.title}</h2>
                    <p className={styles.subheading}>{headerData.price}</p>
                </div>
                <div>
                    <img
                        className={styles.card__img}
                        src={headerData.cardImgUrl}
                        alt=''
                    />
                </div>
            </div>
            <div className={styles.bot}>
                <ul>
                    {listData.map((listItem, idx) => {
                        const {
                            iconUrl,
                            title,
                            desc,
                            withShowBtn,
                            bgColor,
                            bgImage,
                        } = listItem;

                        return (
                            <React.Fragment key={idx}>
                                <ComparisonListItem
                                    iconUrl={iconUrl}
                                    title={title}
                                    desc={desc}
                                    withShowBtn={withShowBtn}
                                    bgColor={bgColor}
                                    bgImage={bgImage}
                                />
                            </React.Fragment>
                        );
                    })}
                </ul>
                <div className={styles.button__wrapper}>
                    <p style={{ marginBottom: '1rem' }}>{bottomData.term}</p>
                    <Button buttonText={bottomData.buttonText} />
                </div>
            </div>
        </div>
    );
};

export default ComparisonCard;
