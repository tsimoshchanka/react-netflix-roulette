import React from 'react';
import classNames from 'classnames';

const ButtonStandard = (props) => (
    <>
        <button type="button"
            className={classNames({
                'button-standard': true,
                [`button-standard__${props.classModifier}`]: props.classModifier
            })}
            onClick={props.onClick}>
            {props.title}
        </button>
    </>
)

export default ButtonStandard;
