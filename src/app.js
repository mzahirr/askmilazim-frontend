const html = require('choo/html')
const log = require('choo-log')
const choo = require('choo')
const indexPage = require('./pages/index')
const homePage = require('./pages/home')


const rootLayout = (child) => {
    return (state, emit) => html `
    <body>
        ${child(state, emit)}
    </body>`
}

const app = choo()

app.use(log())

app.use(require('./models/global'))
app.use(require('./models/index'))

app.route('/', rootLayout(indexPage))

app.route('/anasayfa', rootLayout(homePage))

app.route('iletisim', rootLayout(function () {
    return console.log('iletisim sayfası')
}))

app.mount('body')
