import React, { Component } from 'react';

export default class List extends Component {
    render() {
        return (
            <div style={{
                backgroundColor: this.props.color,
                width: '300px',
                height: '600px'
            }}>
            {this.props.children}
            </div>
        )
    }
}