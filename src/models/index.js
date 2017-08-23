const store = require('../store')
const datetimepicker = require('eonasdan-bootstrap-datetimepicker')
const jquery = require('jquery')
const html = require('choo/html')
const select2 = require('select2')

module.exports = (state, emitter) => {

    //state veri tabanı name space gibi düşünebiliriz
    state.index = {
        register: {
            email: '',
            password: '',
            gender: '',
            birthday: '',
            city: '',
            state: '',
            profession: '',
            maritalStatus: ''
        },

        register2: {
            cities: []
        },

        login: {
            email : '',
            password: ''
        }
    }

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

        //İl ilçe
        store.findAll('api/getcities').then((cities) => {


            console.log(cities.data)

            //Şehirlerin yüklenmesi
            state.index.register2.cities = cities.data
            emitter.emit('render');

        }).catch((error) => {
            console.log('ERROR')
            state.global.error(error.response.data.message)

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
        console.log(state.index.login)

        store.create('login', {
            'email': state.index.login.email,
            'password': state.index.login.password,

        }).then((response) => {
            console.log(response)
            state.global.success('Başarılı bir şekilde giriş yaptınız.')

            window.setTimeout(function () {
                document.location.href = '/anasayfa'
            }, 2000)

        }).catch((error) => {
            state.global.error(error.response.data.message)

        });
    });

    emitter.on('index:register:attempt', () => {
        console.log(state.index.register)

        if (state.index.register.email === "") {
            alert('E posta boş geçilemez')
            return false;
        }

        if (state.index.register.password === "") {
            alert('Şifre boş geçilemez')
            return false;
        }

        if (state.index.register.gender === "") {
            alert('Cinsiyet boş geçilemez')
            return false;
        }

        if (state.index.register.birthday === "") {
            alert('Doğum tarihi boş geçilemez')
            return false;
        }

        if (state.index.register.city === "") {
            alert('Şehir boş geçilemez')
            return false;
        }


        if (state.index.register.state === "") {
            alert('İlçe boş geçilemez')
            return false;
        }

        if (state.index.register.profession === "") {
            alert('Meslek boş geçilemez')
            return false;
        }

        if (state.index.register.maritalStatus === "") {
            alert('Medeni durum boş geçilemez')
            return false;
        }

        store.create('register', {
            'email': state.index.register.email,
            'password': state.index.register.password,
            'gender': state.index.register.gender,
            'birth_day': state.index.register.birthday,
            'city_id': state.index.register.city,
            'province_id': state.index.register.state,
            'profession_id': state.index.register.profession,
            'marital_status': state.index.register.maritalStatus

        }).then((user) => {
            state.global.success('Başarılı bir şekilde kayıt oldunuz. Haydi başlayalım.')

        }).catch((error) => {
            state.global.error(error.response.data.message)

        });

    });

}