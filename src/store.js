const DataStore = require('js-data').Container
const HttpAdapter = require('js-data-http').HttpAdapter

const httpAdapter = new HttpAdapter({
    basePath: 'http://backend.askmilazim.app/site'
});

const store = new DataStore();

store.registerAdapter('http', httpAdapter, {'default': true});

store.defineMapper('register');
store.defineMapper('login');
store.defineMapper('states');
store.defineMapper('index');

module.exports = store