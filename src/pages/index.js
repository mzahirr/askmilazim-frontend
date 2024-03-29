const html = require('choo/html')
const store = require('../store')
const registerForm = require('../elements/register-form')

module.exports = (state, emit) => {

    if ( ! state.index.pageInit) {

        store.findAll('index').then((data) => {

            emit('index:page-inited', data)

        }).catch((error) => {
            console.log('ERROR')
            state.global.error(error.response.data.message)
        });

    }

    function onInputLogin(e) {
        state.index.loginData[event.target.id] = event.target.value
    }

    function handleLogin() {
        event.preventDefault()
        emit('index:login:attempt')
    }

    return html`
   
    <div id="root-div">
        <section id="home"><div class="container">
            <div class="row top">
                <div class="col-sm-5">
                    <a href="#" id="home-logo"><img src="images/home-logo.png" alt="Askmilazim.com"></a>
                </div><!-- end column -->
                <div class="col-sm-7 text-right">
                    <form action="" id="login-form" class="form-inline">
                        <div class="form-group">
                            <input type="email" class="form-control" id="email" name="email" value="${state.index.loginData.email}" oninput=${onInputLogin} placeholder="Email">
                        </div><!-- end form-group -->
                        <div class="form-group">
                            <input type="password" class="form-control" id="password" name="password" value="${state.index.loginData.password}" oninput=${onInputLogin} placeholder="Şifre">
                        </div><!-- end form-group -->
                        <button type="submit" onclick=${handleLogin} class="btn btn-default">GİRİŞ</button>
                        <div class="next-line">
                            <a href="#" class="forget-password">Şifrenizi mi unuttunuz?</a>
                            <div class="checkbox">
                                <label for="rememberme" class="css-label">
                                    Beni Hatırla
                                    <input type="checkbox" name="rememberme" class="css-checkbox" id="rememberme">
                                    <div class="checkbox-image"></div>
                                </label>
                            </div><!-- end checkbox -->
                        </div><!-- end next-line -->
                    </form>
                </div><!-- end column -->
            </div><!-- end row -->

            <div class="row main">
                <div class="col-sm-5">
                    <div class="user-counter">
                        <div class="users man">
                            <i class="man"></i>
                            <b>4171</b>
                            <span>Erkek Kullanıcı</span>
                        </div><!-- end users -->
                        <div class="users woman">
                            <i class="woman"></i>
                            <b>6418</b>
                            <span>Bayan Kullanıcı</span>
                        </div><!-- end users -->
                        <span class="desc"><i class="online"></i> Şu anda sistemde aktif olan</span>
                    </div><!-- end user-counter -->

                    <div class="home-text">
                        <div class="title-image"><img src="images/home-text-title.png" alt="Onlarin Hikayesi"></div>
                        <h2>Onların Hikayesi</h2>
                        <p>Zeynep ve Kerem askmilazim.com üzerinden birbirlerini buldular. Çok fazla zaman geçmeden birbirleri ile kaynaştılar. Yeni nişan yaptılar, bu yaza evlenmek için düğün salonlarını araştırıyorlar.</p>
                        <p>Burada seni de arayan birileri olabilir, fazla vakit kaybetmeden bul onu!</p>
                    </div><!-- end home-text -->
                </div><!-- end column -->
                <div class="col-sm-7 text-right register-area">
                    ${registerForm(state, emit)}
                </div><!-- end column -->
            </div><!-- end row -->
        </div></section>
        <footer id="main-footer"> 
            <div class="container">
                <div class="row">
                    <div class="col-sm-3 col-md-4">
                        <a href="#" class="application-link android"><img src="images/android.png" alt="Android icin indir"></a>
                        <a href="#" class="application-link ios"><img src="images/ios.png" alt="IOS icin indir"></a>
                    </div><!-- end column -->
                    <div class="col-sm-9 text-right col-md-8">
                        <nav id="footer-menu">
                            <a href="#">Hakkımızda</a>
                            <a href="#">Basın</a>
                            <a href="#">Mağaza</a>
                            <a href="#">Reklam</a>
                            <a href="#">Kariyer</a>
                            <a href="#">Social Theater</a>
                            <a href="#">Sıkça Sorulan Sorular</a>
                            <a href="#">Öneriler?</a>
                        </nav>
                        <nav id="footer-nav">
                            <a href="#">&copy; 2017 askmilazim.com</a>
                            <a href="#">Koşullar</a>
                            <a href="#">Gizlilik</a>
                            <a href="#">Çevrimiçi Güvenlik</a>
                        </nav>
                        <nav id="footer-social">
                            <a href="#" class="facebook"><i class="fa fa-facebook"></i></a>
                            <a href="#" class="twitter"><i class="fa fa-twitter"></i></a>
                            <a href="#" class="instagram"><i class="fa fa-instagram"></i></a>
                        </nav>
                    </div><!-- end column -->
                </div><!-- end row -->
            </div><!-- end container -->
        </footer>

    </div>
  `
}