import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types'


export default function Button(props) {
    return (
        <div class={props.class}>{props.label}</div>
    );
}
Button.propTypes = {
    class : PropTypes.string,
    label : PropTypes.string
}
Button.defaultProps = {
    class : "",
    label: "Button"
}