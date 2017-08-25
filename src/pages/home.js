const html = require('choo/html')
const store = require('../store')
const header = require('../elements/home/header')
const popularMembers = require('../elements/home/popular-members')

module.exports = (state, emit) => {
    return html`
    <div>
    ${header()}
    ${popularMembers()}
    </div>

  `
}