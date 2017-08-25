const html = require('choo/html')
const log = require('choo-log')
const choo = require('choo')
const indexPage = require('./pages/index')
const homePage = require('./pages/home')
const profil = require('./pages/profile')
const cookies = require('browser-cookies')

const rootLayout = (child) => {
    return (state, emit) => html `
    <body class="backgrounded">
        ${child(state, emit)}
    </body>`
}

const app = choo()

app.use(log())

app.use(require('./models/global'))
app.use(require('./models/index'))

app.route('/', rootLayout(indexPage))
app.route('/anasayfa', rootLayout(homePage))
app.route('/profil', rootLayout(profil))
app.route('/logout', rootLayout(() => {
    cookies.erase('token');
    cookies.erase('member');
    window.location.href = '/';
}))

app.route('iletisim', rootLayout(function () {
    return console.log('iletisim sayfası')
}))

app.mount('body')
