const html = require('choo/html')
const store = require('../store')
const each = require('lodash/each')

module.exports = (state, emit) => {

    function uyeolClick(event) {
        event.preventDefault()

        var datetimepickerSelector = document.getElementById('birthday');
        state.index.register['birthday'] = datetimepickerSelector.value

        emit('index:register:attempt')
    }

    function onInput(event) {
        state.index.register[event.target.id] = event.target.value
    }

    function onStates(event) {
        state.index.register[event.target.id] = event.target.value

        store.find('api/getprovince', this.value).then((province) => {
            //İlçelerin yüklenmesi

            document.getElementById('state').innerHTML = '';

            let opt = document.createElement('option');
            opt.value = '0';
            opt.innerHTML = 'İlçe';
            document.getElementById('state').appendChild(opt);

            for (var i in province.data) {
                let opt = document.createElement('option');
                opt.value = province.data[i].id;
                opt.innerHTML = province.data[i].label;
                document.getElementById('state').appendChild(opt);
            }

        }).catch((error) => {
            console.log('ERROR')
            state.global.error(error.response.data.message)

        });
    }

    function onInputLogin(e) {
        state.index.login[event.target.id] = event.target.value
    }

    function login() {
        event.preventDefault()
        emit('index:login:attempt')
    }

    function getCitiesHTML() {
        let options = []
        console.log('get')
        each(state.index.register2.cities, (city) => {
            options.push('<option value="' + city.id + '">' + city.label + '</option>')
        })

        return options.join("\n")
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
                            <input type="email" class="form-control" id="email" name="email" oninput=${onInputLogin} placeholder="Email">
                        </div><!-- end form-group -->
                        <div class="form-group">
                            <input type="password" class="form-control" id="password" name="password" oninput=${onInputLogin} placeholder="Şifre">
                        </div><!-- end form-group -->
                        <button type="submit" onclick=${login} class="btn btn-default">GİRİŞ</button>
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
                    <div class="register-form-box">
                        <a href="#" id="facebook-register-link">
                            <i class="fa fa-facebook"></i>
                            Facebook ile Kayıt Ol
                        </a>
                        <span class="middle-desc">veya e-posta ile kayıt ol</span>
                        <form id="register-form">
                            <div class="form-group">
                                <input type="email" id="email" name="email" value="${state.index.register.email}" oninput=${onInput} class="form-control" placeholder="E-Posta Adresiniz">
                            </div><!-- end form-group -->
                            <div class="form-group">
                                <input type="password" id="password" value="${state.index.register.password}" oninput=${onInput} name="password" class="form-control" placeholder="Parolanız">
                            </div><!-- end form-group -->
                            <div class="form-group">
                                <div class="select-wrapper">
                                    <select class="form-control" name="gender" id="gender" onchange=${onInput}>
                                        <option value="" disabled selected>Cinsiyetiniz</option>
                                        <option value="1">Erkek</option>
                                        <option value="0">Bayan</option>
                                    </select>
                                </div><!-- end select-wrapper -->
                            </div><!-- end form-group -->
                            <div class="form-group">
                                <div class="input-group date" id="datetimepicker1">
                                    <input type="text" id="birthday" name="birthday" value="${state.index.register.birthday}" oninput=${onInput} class="form-control" />
                                    <span class="input-group-addon">
                                        <span class="glyphicon glyphicon-calendar"></span>
                                    </span>
                                </div>
                            </div>      
                            <div class="form-group divide">
                                <div class="select-wrapper">
                                    <select class="form-control" name="city" id="city" onchange=${onStates}>
                                        <option value="" disabled selected>İl</option>
                                        ${getCitiesHTML()}
                                    </select>
                                </div><!-- end select-wrapper -->
                                <div class="select-wrapper">
                                    <select class="form-control" name="state" id="state" onchange=${onInput}>
                                        <option value="" disabled selected>İlçe</option>
                                    </select>
                                </div><!-- end select-wrapper -->
                            </div><!-- end form-group -->
                            <div class="form-group">
                                <div class="select-wrapper">
                                    <select class="form-control" name="profession" id="profession" onchange=${onInput}>
                                        <option value="" disabled selected>Mesleğiniz</option>
                                        <option value="34">Yazilimci</option>
                                        <option value="06">Tasarimci</option>
                                        <option value="35">Muhendis</option>
                                    </select>
                                </div><!-- end select-wrapper -->
                            </div><!-- end form-group -->
                            <div class="form-group">
                                <div class="select-wrapper">
                                    <select class="form-control" name="maritalStatus" id="maritalStatus" onchange=${onInput}>
                                        <option value="" disabled selected>Medeni Haliniz</option>
                                        <option value="0">Bekar</option>
                                        <option value="1">Evli</option>
                                    </select>
                                </div><!-- end select-wrapper -->
                            </div><!-- end form-group -->
                            <p>Ücretsiz Üye Ol’a tıklayarak, <a href="#">Şartları</a> ve askmilazim.com’dan e-posta almayı kabul ediyorsun. Ayrıca, profiline girdiğin bilgileri başkalarının görebileceğini de kabul ediyorsun.</p>
                            <button type="submit" onclick=${uyeolClick} class="btn btn-success">ÜCRETSİZ ÜYE OL</button>
                        </form>
                    </div><!-- end register-form -->
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