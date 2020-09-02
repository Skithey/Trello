import React, { Component } from 'react'
import './BoardNav.scss'

class BoardNav extends Component {
    render() {
        return (
            <nav className="board-nav flex">
                <span>{this.props.board.name}</span>
                <span>{JSON.stringify(this.props.board.members.map(member => member.fullName))}</span>
                <button className="invite-btn">Invite</button>
            </nav>
        )
    }
}

export default BoardNav
