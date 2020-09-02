import axios from 'axios'

const BASE_URL = (process.env.NODE_ENV !== 'development') ? '/api/board' : '//localhost:3000/board';

export const BoardService = {
    query,
    remove,
    save,
    getById,
}

function _getURL(id = '') {
    return `${BASE_URL}/${id}`
}

function query(filterBy) {
    return axios.get(`${_getURL()}`)
        .then(res =>{
            console.log(res.data);
            return res.data})
} 

async function getById(id) {
    console.log('id is ',id);
    const board = await axios.get(`${_getURL(id)}`)
        console.log('board iss', board);
    return board.data
}

function _makeId(length = 5) {
    var txt = '';
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (var i = 0; i < length; i++) {
        txt += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return txt;
}

function remove(id) {
    return axios.delete(`${_getURL(id)}`)
}

function save(board) {
    return (board._id) ? _update(board) : _add(board)
}

function _update(board) {
    return axios.put(`${_getURL(board._id)}`, board)
        .then(res => {
            return res.data
        })
}

function _add(board) {
    return axios.post(`${_getURL()}`, board)
        .then(res => res.data)
}