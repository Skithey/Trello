import React from 'react'
import { Link } from 'react-router-dom';
import  BoardPreview  from '../BoardPreview/BoardPreview';
export default function BoardList(props) {
    return (
        <div className="board-list flex">
            {props.boards.map(board => {
                return (
                    <Link to={`board/${board._id}`} key={board._id}>
                    <BoardPreview board={board} />
                        </Link>
    )
            })}
        </div >
    )
}

