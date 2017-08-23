const DataStore = require('js-data').Container
const HttpAdapter = require('js-data-http').HttpAdapter

const httpAdapter = new HttpAdapter({
    basePath: 'http://askmilazimapi.app'
});

const store = new DataStore();

store.registerAdapter('http', httpAdapter, { 'default': true });

store.defineMapper('register');
store.defineMapper('login');
store.defineMapper('api/getcities');
store.defineMapper('api/getprovince');
store.defineMapper('api/getprofessions');

module.exports = store