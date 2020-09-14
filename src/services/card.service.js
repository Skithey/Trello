import axios from 'axios'
import { storageService } from './storage.service';
const KEY = 'boards'
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
    // console.log('loading boards');
    return axios.get(`${_getURL()}`)
        .then(res => {
            storageService.store(KEY, res.data)
            return res.data
        })
}

async function getById(id) {
    return new Promise((resolve, reject) => {
        let boards = storageService.load(KEY)
        if(!boards) boards = query()
        const board = boards.find(board => {
            return board._id === id
        })
        board ? resolve(board) : reject(`Board id ${id} not found!`)
    })
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