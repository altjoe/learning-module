import React, { useState, useEffect, useRef } from 'react';

export default function Button(props) {
    return (
        <div class={props.class}>{props.label}</div>
    );
}