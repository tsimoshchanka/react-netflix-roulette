import React from 'react';
import styles from './FilmDetails.css';
import FilmCover from '../FilmCover';
import FilmTitle from '../FilmTitle';
import FilmRating from '../FilmRating';
import FilmGenres from '../FilmGenres';
import FilmDurationAndYear from '../FilmDurationAndYear';
import FilmDescription from '../FilmDescription';
import PropTypes from 'prop-types';

const FilmDetails = ({ film }) => (
    <div 
        className={styles.filmDetails}>
        <div className={styles.filmPoster}>
            <FilmCover
                src={film.poster_path}
                alt={film.title}
            />
        </div>
        <div className={styles.filmDescription}>
            <FilmTitle title={film.title} /><FilmRating rating={film.vote_count} />
            <FilmGenres genres={film.genres} />
            <FilmDurationAndYear duration={99} year={film.release_date} />
            <FilmDescription description={film.overview} />
        </div>
    </div>
)

FilmDetails.propTypes = {
    film: PropTypes.shape({
        id: PropTypes.number,
        img: PropTypes.string,
        title: PropTypes.string,
        genres: PropTypes.array,
        year: PropTypes.number,
        rating: PropTypes.number,
        duration: PropTypes.number,
        summary: PropTypes.string
    })
};

export default FilmDetails;
