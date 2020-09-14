import { BoardService } from '../services/board.service'

// Action Creators ----------------------------------------------------
const _setCards = (cards) => ({ type: 'SET_CARDS', cards });
const _removeCard = (id) => ({ type: 'REMOVE_CARD', id });
const _addCard = (card) => ({ type: 'ADD_CARD', card });
const _findById = (card) => ({ type: 'FIND_CARD', card })
const _updateCard = (card) => ({ type: 'UPDATE_CARD', card });
const _setFilter = (filterBy) => ({ type: 'SET_FILTER', filterBy });
// --------------------------------------------------------------------

// Action Dispatchers -------------------------------------------------
export function loadCards() {
    return async (dispatch, getState) => {
        const cards = await BoardService.query(getState().cardReducer.filterBy);
        console.log('cards :', cards);
        dispatch(_setCards(cards))
    }
}

export function findById(id) {
    return dispatch => {
        return BoardService.getById(id)
            .then(card => dispatch(_findById(card)))
    }
}

export function removeCard(id) {
    return dispatch => {
        return BoardService.deleteCard(id)
            .then(() => dispatch(_removeCard(id)))
    }
}
//TODO save card in the service
export function saveCard(card) {
    return async dispatch => {
        return BoardService.saveCard(card)
            .then(() => card._id ? dispatch(_updateCard(card)) : dispatch(_addCard(card)))
    }
}

export function setFilter(filterBy) {
    return dispatch => {
        dispatch(_setFilter(filterBy));
    }
}
// --------------------------------------------------------------------