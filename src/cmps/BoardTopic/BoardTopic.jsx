import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import CardPreview from '../CardPreview/CardPreview';
import { Link } from 'react-router-dom';
import { CardDetials } from '../../pages/CardDetails/CardDetials'

class _BoardTopic extends Component {
    state = {
        isModalOpen: false
    }
    openModal = () => {
        let isModalOpen = true
        this.setState({ isModalOpen })
        // this.props.history.push(`/board/${id}`)
    }
    closeModal = (ev) => {
        ev.preventDefault();
        let isModalOpen = false
        let id = this.props.match.params.boardId
        this.setState({ isModalOpen })
        this.props.history.push(`/board/${id}`)
        // this.props.history.goBack()
    }
    render() {
        return (
            <div className="board-topic">
                {this.props.topic.name}
                <section className="card-preview">
                    {this.props.topic.cards.map(card => {
                        return (
                            <div key={card.id}>
                                {this.state.isModalOpen && <div className="close-modal" onClick={this.closeModal}></div>}
                                {this.state.isModalOpen && <CardDetials card={card} board={this.props.board} />}
                                <Link to={`/board/${this.props.board._id}/card/${card.id}`} key={card.id} onClick={this.openModal}>
                                    <CardPreview card={card} />
                                </Link>
                            </div>
                        )
                    })}
                </section>
            </div>
        );
    }
}

function mapStateProps(state) {
    return {
        boards: state.boardReducer.boards,
        // board: state.boardReducer.board,
    }
}

const mapDispatchToProps = {
}

const BoardTopic = connect(mapStateProps, mapDispatchToProps)(_BoardTopic)
export default withRouter(BoardTopic);


