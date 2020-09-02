import React from 'react'

export default function BoardPreview(props) {
    return (
        <div className="board-preview template flex-center">
            <h5>{props.board.name}</h5>
        </div>
    )
}
