import React from 'react';
import injectSheet from 'react-jss';
import Logo from '../Logo';

const Footer = ({ classes }) => (
    <footer className={classes.footer}>
        <Logo />
    </footer>
);

const styles = {
    footer: {
        background: '#414141',
        padding: '0 50px'
    }
};

const StyledFooter = injectSheet(styles)(Footer);

export default StyledFooter;
