import React from 'react';

const Todo = props => <li key={props.id} id={props.id} onClick={() => props.remove(props.id)}>{props.text}</li>

export Default Todo;