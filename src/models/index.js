const store = require('../store')
const datetimepicker = require('eonasdan-bootstrap-datetimepicker')
const jquery = require('jquery')
const html = require('choo/html')
const select2 = require('select2')
const each = require('lodash/each')

module.exports = (state, emitter) => {

    //state veri tabanı name space gibi düşünebiliriz
    state.index = {

        pageInit: false,

        registerData: {
            email: '',
            password: '',
            gender: '',
            birthday: '',
            city: '',
            state: '',
            profession: '',
            maritalStatus: ''
        },

        registerForm: {
            provinces: [],
            professions: [],

            getProvinceOptions: () => {

                let options = [];

                each(state.index.registerForm.provinces, (province) => {
                    options.push(html `<option value="${province.id}">${province.label}</option>`);
                })

                return options;
            },

            getProfessionOptions: () => {

                let options = [];

                each(state.index.registerForm.professions, (profession) => {
                    options.push(html `<option value="${profession.id}">${profession.label}</option>`);
                })

                return options;
            }
        },

        loginData: {
            email: 'm.zahirr@hotmail.com',
            password: '123456'
        }
    }

    emitter.on('index:page-inited', (data) => {

        state.index.pageInit = true;

        state.index.registerForm.provinces = data.provinces
        state.index.registerForm.professions = data.professions

        emitter.emit('render');

    })

    emitter.on(state.events.DOMCONTENTLOADED, () => {
        jquery('#datetimepicker1').datetimepicker({
            format: 'YYYY-MM-DD'
        });

        //select 2 city
        jquery('#city').select2({
            theme: "classic",
        });

        //select 2 state
        jquery('#state').select2({
            theme: "classic",
        });

        //select 2 meslek
        jquery('#profession').select2({
            theme: "classic",
        });


        //Meslek api
        store.findAll('api/getprofessions').then((professions) => {
            //Şehirlerin yüklenmesi
            for (var i in professions.data) {
                let opt = document.createElement('option');
                opt.value = professions.data[i].id;
                opt.innerHTML = professions.data[i].label;
                document.getElementById('profession').appendChild(opt);
            }
        }).catch((error) => {
            console.log('ERROR')
            state.global.error(error.response.data.message)

        });
    });

    emitter.on('index:login:attempt', () => {

        store.create('login', state.index.loginData).then((response) => {

            console.log(response)

            state.global.success('Başarılı bir şekilde giriş yaptınız.')

            // todo set token in cookie than redirect /anasayfa

            /*
            window.setTimeout(function () {
                document.location.href = '/anasayfa'
            }, 2000)
            */

        }).catch((error) => {
            state.global.error(error.response.data.message)

        });

    });

    emitter.on('index:register:attempt', () => {

        if (state.index.registerData.email === "") {
            alert('E posta boş geçilemez')
            return false;
        }

        if (state.index.registerData.password === "") {
            alert('Şifre boş geçilemez')
            return false;
        }

        if (state.index.registerData.gender === "") {
            alert('Cinsiyet boş geçilemez')
            return false;
        }

        if (state.index.registerData.birthday === "") {
            alert('Doğum tarihi boş geçilemez')
            return false;
        }

        if (state.index.registerData.city === "") {
            alert('Şehir boş geçilemez')
            return false;
        }


        if (state.index.registerData.state === "") {
            alert('İlçe boş geçilemez')
            return false;
        }

        if (state.index.registerData.profession === "") {
            alert('Meslek boş geçilemez')
            return false;
        }

        if (state.index.registerData.maritalStatus === "") {
            alert('Medeni durum boş geçilemez')
            return false;
        }

        store.create('register', state.index.registerData).then((user) => {
            state.global.success('Başarılı bir şekilde kayıt oldunuz. Haydi başlayalım.')

        }).catch((error) => {
            state.global.error(error.response.data.message)

        });

    });

}