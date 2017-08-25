const html = require('choo/html')
const store = require('../store')
const header = require('../elements/home/header')
const popularMembers = require('../elements/home/popular-members')
const container = require('../elements/profile/container')


module.exports = (state, emit) => {


    return html`
    <div>
    ${header()}
    ${popularMembers()}
    ${container()}
    </div>

  `
}