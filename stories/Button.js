import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Button from '../components/Button';

storiesOf('Button', module)
    .add('standard', () => (
        <Button title="Button" onClick={action('clicked')} />
    ))
    .add('buttonInverted class', () => (
        <Button
            title="Button"
            customClass="buttonInverted"
            onClick={action('clicked')}
        />
    ))
    .add('buttonChecked class', () => (
        <Button
            title="buttonChecked"
            customClass="buttonChecked"
            onClick={action('clicked')}
        />
    ))
    .add('buttonAction class', () => (
        <Button
            title="Button"
            customClass="buttonAction"
            onClick={action('clicked')}
        />
    ))
    .add('buttonBack class', () => (
        <Button
            title="Button"
            customClass="buttonBack"
            onClick={action('clicked')}
        />
    ));
