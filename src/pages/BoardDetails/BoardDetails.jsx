import React, { Component } from 'react'
import BoardNav from '../../cmps/BoardNav/BoardNav'
import { BoardService } from '../../services/board.service.js'
import  BoardTopic  from '../../cmps/BoardTopic/BoardTopic'
import { connect } from 'react-redux';
import { loadBoards } from '../../actions/BoardActions';
class _BoardDetails extends Component {
    state = {
        board: null,
    }
    async componentDidMount() {
        const board = await BoardService.getById(this.props.match.params.boardId)
        this.setState({ board })
    }
    render() {
        if (!this.state.board) return <p>Loading..</p>
        return (
            <main className="board-details">
                <BoardNav board={this.state.board} />
                <h5>This is the board details</h5>
                <section className="topics-list flex wrap">
                    {this.state.board.topics.map(topic => {
                        return (
                            <BoardTopic topic={topic} board={this.state.board} key={topic.id} />
                        )
                    })}
                </section>
            </main>
        )
    }
}
function mapStateProps(state) {
    return {
        boards: state.boardReducer.boards
    }
}

const mapDispatchToProps = {
    loadBoards
}

export const BoardDetails = connect(mapStateProps, mapDispatchToProps)(_BoardDetails)
// export default BoardDetails
// export const HomePage= connect(mapStateProps,mapDispatchToProps)(_HomePage);

