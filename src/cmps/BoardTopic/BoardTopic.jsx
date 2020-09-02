import CardPreview from '../CardPreview/CardPreview';
import { Link } from 'react-router-dom';
import React, { Component } from 'react';

class BoardTopic extends Component {
    openModal = () =>{
        console.log('hayeדד');
    }
    closeModal=()=>{
        console.log('modal is closed');
    }
    render() {
        return (
            <div className="board-topic">
            {this.props.topic.name}
            <section className="card-preview">
                {this.props.topic.cards.map(card => {
                    return (
                        <Link to={`${this.props.board._id}/card/${card.id}`} key={card.id}  onClick={this.openModal}>
                            <CardPreview card={card} />
                        </Link>
                    )
                })}
            </section>
        </div>
        );
    }
}

export default BoardTopic;

