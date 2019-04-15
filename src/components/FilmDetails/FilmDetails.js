import React from 'react';
import styles from './FilmDetails.css';
import FilmCover from '../FilmCover';
import FilmTitle from '../FilmTitle';
import FilmRating from '../FilmRating';
import FilmGenre from '../FilmGenre';
import FilmDurationAndYear from '../FilmDurationAndYear';
import FilmDescription from '../FilmDescription';
import PropTypes from 'prop-types';

const FilmDetails = (props) => (
    <div 
        className={styles.filmDetails}>
        <div className={styles.filmPoster}>
            <FilmCover
                src={props.film.img}
                alt={props.film.title}
            />
        </div>
        <div className={styles.filmDescription}>
            <FilmTitle title={props.film.title} /><FilmRating rating={props.film.rating} />
            <FilmGenre genre={props.film.genre} />
            <FilmDurationAndYear duration={props.film.duration} year={props.film.year} />
            <FilmDescription description={props.film.summary} />
        </div>
    </div>
)

export default FilmDetails;

FilmDetails.propTypes = {
    film: PropTypes.shape({
        id: PropTypes.number,
        img: PropTypes.string,
        title: PropTypes.string,
        genre: PropTypes.string,
        year: PropTypes.number,
        rating: PropTypes.number,
        duration: PropTypes.number,
        summary: PropTypes.string
    })
};
