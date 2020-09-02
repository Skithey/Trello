import React, { Component } from 'react'
import BoardNav from '../../cmps/BoardNav/BoardNav'
import { BoardService } from '../../services/board.service.js'

class BoardDetails extends Component {
    state = {
        board: null
    }

    async componentDidMount() {
        console.log(this.props.match.params.id);
        const board = await BoardService.getById(this.props.match.params.id)
        this.setState({ board })
    }
    render() {
        if(!this.state.board || !this.props.board) return <p>Loading..</p>
        return (
            <main>
                <BoardNav />
                <h5>This is the board details</h5>
                {this.state.board}
            </main>
        )
    }
}

export default BoardDetails
// export const HomePage= connect(mapStateProps,mapDispatchToProps)(_HomePage);

