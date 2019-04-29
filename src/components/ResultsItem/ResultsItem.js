import React from 'react';
import styles from './ResultsItem.css';
import ItemImage from '../ItemImage';
import ItemTitle from '../ItemTitle';
import ItemReleaseDate from '../ItemReleaseDate';
import ItemGenres from '../ItemGenres';
import PropTypes from 'prop-types';

const ResultsItem = ({ data, onClick }) => (
    <div 
        id={'results-item-' + data.id}
        className={styles.resultsItem}
        onClick={() => onClick(data.id)}>
        <ItemImage img={data.poster_path} title={data.title}></ItemImage>
        <div className={styles.resultsItemWording}>
            <ItemTitle title={data.title}></ItemTitle>
            <ItemReleaseDate year={data.release_date}></ItemReleaseDate>
            <ItemGenres genres={data.genres}></ItemGenres>
        </div>
    </div>
)

export default ResultsItem;


ResultsItem.propTypes = {
    data: PropTypes.shape({
        id: PropTypes.number,
        poster_path: PropTypes.string,
        title: PropTypes.string,
        genres: PropTypes.array,
        release_date: PropTypes.string
    }),
    onClick: PropTypes.func
};
