import React, { Component } from 'react';

export default class Card extends Component {
    render (){
        return (
            <div style={{
                background: 'purple',
                height: '200px',
                width: '200px',
                fontSize: '200px',
                border: '5px solid black'
            }}>
                &hearts;
            </div>
        )
    }
}