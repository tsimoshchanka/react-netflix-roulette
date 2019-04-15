import React from 'react';
import styles from './ResultsItem.css';
import ItemImage from '../ItemImage';
import ItemTitle from '../ItemTitle';
import ItemReleaseDate from '../ItemReleaseDate';
import ItemGenre from '../ItemGenre';
import PropTypes from 'prop-types';

const FilmThumbnail = (props) => (
    <div 
        className={styles.resultsItem}
        onClick={props.onClick}>
        <ItemImage img={props.data.img} title={props.data.title}></ItemImage>
        <div className={styles.resultsItemWording}>
            <ItemTitle title={props.data.title}></ItemTitle>
            <ItemReleaseDate year={props.data.year}></ItemReleaseDate>
            <ItemGenre genre={props.data.genre}></ItemGenre>
        </div>
    </div>
)

export default FilmThumbnail;


FilmThumbnail.propTypes = {
    film: PropTypes.shape({
        id: PropTypes.number,
        img: PropTypes.string,
        title: PropTypes.string,
        genre: PropTypes.string,
        year: PropTypes.number
    }),
    onClick: PropTypes.func
};
