const route = require('express').Router();
const { addMovie, getAll, getById, getByPagination } = require('../controller/index');

route.post('/add-movie', addMovie);
route.get('/get-all', getAll);
route.get('/get-single', getById);
route.get("/get-pagination", getByPagination);

module.exports = route;