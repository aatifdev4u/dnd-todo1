import React, { Component } from 'react';
import { DragSource } from 'react-dnd';

const cardSource = {
    beginDrag: function (props, monitor) {
        return {cardId: 1}
    }
}

function collect(connect, monitor){
    return {
        connectDragSource: connect.dragSource(),
        isDragging: monitor.isDragging()
    }
}

class Card extends Component {
    render() {
        const  {
            connectDragSource,
            isDragging
        } = this.props;
        
        return connectDragSource(
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

export default DragSource('card', cardSource, collect)(Card);