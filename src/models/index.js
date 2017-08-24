const store = require('../store')
const datetimepicker = require('eonasdan-bootstrap-datetimepicker')
const jquery = require('jquery')
const html = require('choo/html')
const select2 = require('select2')
const each = require('lodash/each')
const cookies = require('browser-cookies')

module.exports = (state, emitter) => {

    //state veri tabanı name space gibi düşünebiliriz
    state.index = {

        pageInit: false,

        registerData: {
            email: '',
            password: '',
            gender_id: 0,
            birthday: '',
            province_id: 0,
            state_id: 0,
            profession_id: '',
            marital_status_id: 0
        },

        registerForm: {
            genders: [],
            provinces: [],
            states: [],
            professions: [],
            maritalStatuses: [],

            getGenderOptions: () => {
                let options = [];
                each(state.index.registerForm.genders, (gender) => {
                    options.push(html `<option value="${gender.id}" ${gender.id == state.index.registerData.gender_id ? selected = "selected" : ''}>${gender.label}</option>`);
                })
                return options;
            },

            getProvinceOptions: () => {
                let options = [];
                each(state.index.registerForm.provinces, (province) => {
                    options.push(html `<option value="${province.id}" ${province.id == state.index.registerData.province_id ? selected = "selected" : ''}>${province.label}</option>`);
                })
                return options;
            },

            getStateOptions: () => {
                let options = [];
                each(state.index.registerForm.states, (stateItem) => {
                    options.push(html `<option value="${stateItem.id}" ${stateItem.id == state.index.registerData.state_id ? selected = "selected" : ''}>${stateItem.label}</option>`);
                })
                return options;
            },

            getProfessionOptions: () => {
                let options = [];
                each(state.index.registerForm.professions, (profession) => {
                    options.push(html `<option value="${profession.id}" ${profession.id == state.index.registerData.profession_id ? selected = "selected" : ''}>${profession.label}</option>`);
                })
                return options;
            },

            getMaritalStatusOptions: () => {
                let options = [];
                each(state.index.registerForm.maritalStatuses, (maritalStatus) => {
                    options.push(html `<option value="${maritalStatus.id}" ${maritalStatus.id == state.index.registerData.marital_status_id ? selected = "selected" : ''}>${maritalStatus.label}</option>`);
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

        state.index.registerForm.genders = data.genders
        state.index.registerForm.maritalStatuses = data.maritalStatuses
        state.index.registerForm.professions = data.professions
        state.index.registerForm.provinces = data.provinces

        state.index.pageInit = true;

        emitter.emit('render');

    });

    emitter.on('index:states', (states) => {

        state.index.registerForm.states = states;

        emitter.emit('render');

    });


    emitter.on(state.events.DOMCONTENTLOADED, () => {

        jquery('#datetimepicker1').datetimepicker({
            format: 'YYYY-MM-DD'
        });

        //select 2 city
        /*
        jquery('#province_id').select2({
            theme: "classic",
        });

        //select 2 state
        jquery('#state_id').select2({
            theme: "classic",
        });

        //select 2 meslek
        jquery('#profession_id').select2({
            theme: "classic",
        });
        */

    });

    emitter.on('index:login:attempt', () => {

        store.create('login', state.index.loginData).then((response) => {

            state.global.success('Başarılı bir şekilde giriş yaptınız.')

            cookies.set('token', response.token, {
                expires: 7 // expire in 7 days
            });

            emitter.emit('replaceState', '/anasayfa');

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