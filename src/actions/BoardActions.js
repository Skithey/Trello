import { BoardService } from '../services/board.service'

// Action Creators ----------------------------------------------------
const _setBoards = (boards) => ({ type: 'SET_BOARDS', boards });
const _removeBoard = (id) => ({ type: 'REMOVE_BOARD', id });
const _addBoard = (board) => ({ type: 'ADD_BOARD', board });
const _findById = (board) => ({ type: 'FIND_BOARD', board })
const _updateBoard = (board) => ({ type: 'UPDATE_BOARD', board });
const _setFilter = (filterBy) => ({ type: 'SET_FILTER', filterBy });
// --------------------------------------------------------------------

// Action Dispatchers -------------------------------------------------
export function loadBoards() {
    return async (dispatch, getState) => {
        const boards = await BoardService.query(getState().boardReducer.filterBy);
        console.log('boards :', boards);
        dispatch(_setBoards(boards))
    }
}

export function findById(id) {
    return dispatch => {
        return BoardService.getById(id)
            .then(board => dispatch(_findById(board)))
    }
}

export function removeBoard(id) {
    return dispatch => {
        return BoardService.deleteBoard(id)
            .then(() => dispatch(_removeBoard(id)))
    }
}

export function saveBoard(board) {
    return async dispatch => {
        return BoardService.saveBoard(board)
            .then(() => board._id ? dispatch(_updateBoard(board)) : dispatch(_addBoard(board)))
    }
}

export function setFilter(filterBy) {
    return dispatch => {
        dispatch(_setFilter(filterBy));
    }
}
// --------------------------------------------------------------------