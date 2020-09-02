const INITIAL_STATE = {
    boards: null,
    filterBy: null
}

export function BoardReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'SET_BOARDS':
            return { 
                ...state, 
                boards: action.boards 
            }
        case 'SET_FILTER':
            return {
                ...state,
                filterBy: action.filterBy
            }
        case 'ADD_BOARD':
            return {
                ...state,
                boards: [...state.boards, action.board]
            }
        case 'REMOVE_BOARD':
            return {
                ...state,
                boards: state.boards.filter(board => board._id !== action.id)
            }
        case 'UPDATE_BOARD':
            return {
                ...state,
                boards: state.boards.map(board => (board._id === action.board._id) ? action.board : board)
            }
        default:
            return state;
    }
}



