const DataStore = require('js-data').Container
const HttpAdapter = require('js-data-http').HttpAdapter

const httpAdapter = new HttpAdapter({
    basePath: 'http://backend.askmilazim.app'
});

const store = new DataStore();

store.registerAdapter('http', httpAdapter, { 'default': true });

store.defineMapper('register');
store.defineMapper('login');
store.defineMapper('api/getcities');
store.defineMapper('api/getstates');
store.defineMapper('api/getprofessions');
store.defineMapper('api/index');

module.exports = store