import React from 'react';
import injectSheet from 'react-jss';
import { Router } from '../../routes';

const clickHandler = () => {
    Router.pushRoute('/');
};

const Logo = ({ classes }) => (
    <div className={classes.logo} onClick={clickHandler}>NetflixRoulette</div>
);

const styles = {
    logo: {
        display: 'inline-block',
        color: '#f55263',
        padding: '10px 0',
        textTransform: 'lowercase',
        fontSize: '12px',
        fontWeight: '600',
        cursor: 'pointer'
    }
};

const StyledLogo = injectSheet(styles)(Logo);

export default StyledLogo;
