import React from 'react';
import { connect } from 'react-redux';
import Header from '../../components/Header';
import { HEADER_VIEW_MODES } from '../../constants';
import { closeFilm } from '../../actions/navigationActions';

const getHeaderMode = openedFilmId => openedFilmId === null ? HEADER_VIEW_MODES.SEARCH_FORM : HEADER_VIEW_MODES.FILM_DETAILS;

const mapStateToProps = ({ navigation }) => ({
    headerViewMode: getHeaderMode(navigation.openedFilmId)
});

const mapDispatchToProps = dispatch => ({
    closeFilmHandler: () => dispatch(closeFilm())
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
