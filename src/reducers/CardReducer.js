const INITIAL_STATE = {
    filterBy: null,
    card: null
}

export function CardReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'SET_CARDS':
            return {
                ...state,
                cards: action.cards
            }
        case 'SET_FILTER':
            return {
                ...state,
                filterBy: action.filterBy
            }
        case 'ADD_CARD':
            return {
                ...state,
                cards: [...state.cards, action.card]
            }
        case 'REMOVE_CARD':
            return {
                ...state,
                cards: state.cards.filter(card => card._id !== action.id)
            }
        case 'UPDATE_CARD':
            return {
                ...state,
                cards: state.cards.map(card => (card._id === action.card._id) ? action.card : card)
            }
        case 'FIND_CARD':
            return {
                ...state,
                card: action.card
            }
        default:
            return state;
    }
}



