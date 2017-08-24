const html = require('choo/html')
const store = require('../store')

module.exports = (state, emit) => {

    function onInput(event) {

        state.index.registerData[event.target.id] = event.target.value
    }

    function onChangeProvince(event) {

        state.index.registerData[event.target.id] = event.target.value

        if (event.target.value > 0) {

            store.findAll('states', {
                province_id: this.value
            }).then((states) => {

                emit('index:states', states)

            }).catch((error) => {
                console.log('ERROR')
                state.global.error(error.response.data.message)

            });

        } else {

            state.index.registerForm.states = []
            emit('render')
        }
    }

    function handleSubmit(event) {

        event.preventDefault()

        var datetimepickerSelector = document.getElementById('birthday');
        state.index.registerData['birthday'] = datetimepickerSelector.value

        emit('index:register:attempt')
    }

    return html `
    <div class="register-form-box">
        <a href="#" id="facebook-register-link">
            <i class="fa fa-facebook"></i>
            Facebook ile Kayıt Ol
        </a>
        <span class="middle-desc">veya e-posta ile kayıt ol</span>
        <form id="register-form">
            <div class="form-group">
                <input type="email" id="email" name="email" value="${state.index.registerData.email}" oninput=${onInput} class="form-control" placeholder="E-Posta Adresiniz">
            </div><!-- end form-group -->
            <div class="form-group">
                <input type="password" id="password" value="${state.index.registerData.password}" oninput=${onInput} name="password" class="form-control" placeholder="Parolanız">
            </div><!-- end form-group -->
            <div class="form-group">
                <div class="select-wrapper">
                    <select class="form-control" name="gender_id" id="gender_id" onchange=${onInput}>
                        <option value="0">Cinsiyetiniz</option>
                        ${state.index.registerForm.getGenderOptions()}
                    </select>
                </div><!-- end select-wrapper -->
            </div><!-- end form-group -->
            <div class="form-group">
                <div class="input-group date" id="datetimepicker1">
                    <input type="text" id="birthday" name="birthday" value="${state.index.registerData.birthday}" oninput=${onInput} class="form-control" />
                    <span class="input-group-addon">
                        <span class="glyphicon glyphicon-calendar"></span>
                    </span>
                </div>
            </div>      
            <div class="form-group divide">
                <div class="select-wrapper">
                    <select class="form-control" name="province_id" id="province_id" onchange=${onChangeProvince}>
                        <option value="0">İl</option>
                        ${state.index.registerForm.getProvinceOptions()}
                    </select>
                </div><!-- end select-wrapper -->
                <div class="select-wrapper">
                    <select class="form-control" name="state_id" id="state_id" onchange=${onInput}>
                        <option value="0">İlçe</option>
                        ${state.index.registerForm.getStateOptions()}
                    </select>
                </div><!-- end select-wrapper -->
            </div><!-- end form-group -->
            <div class="form-group">
                <div class="select-wrapper">
                    <select class="form-control" name="profession_id" id="profession_id" onchange=${onInput}>
                        <option value="0">Mesleğiniz</option>
                        ${state.index.registerForm.getProfessionOptions()}
                    </select>
                </div><!-- end select-wrapper -->
            </div><!-- end form-group -->
            <div class="form-group">
                <div class="select-wrapper">
                    <select class="form-control" name="marital_status_id" id="marital_status_id" onchange=${onInput}>
                        <option value="0">Medeni Haliniz</option>
                        ${state.index.registerForm.getMaritalStatusOptions()}
                    </select>
                </div><!-- end select-wrapper -->
            </div><!-- end form-group -->
            <p>Ücretsiz Üye Ol’a tıklayarak, <a href="#">Şartları</a> ve askmilazim.com’dan e-posta almayı kabul ediyorsun. Ayrıca, profiline girdiğin bilgileri başkalarının görebileceğini de kabul ediyorsun.</p>
            <button type="submit" onclick=${handleSubmit} class="btn btn-success">ÜCRETSİZ ÜYE OL</button>
        </form>
        <!-- end register-form -->
    </div>
    
    `

}