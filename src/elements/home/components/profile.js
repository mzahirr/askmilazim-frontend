const html = require('choo/html')
const cookies = require('browser-cookies')
const Component = require('nanocomponent')

module.exports = (state, emit) => {

    class Profile extends Component {
        constructor() {
            super()
        }

        createElement() {
            return html `
                <div class="widget profile">
                        <div class="image"><img src="images/my-image.jpg" alt="Username"></div>
                        <span class="name">8N8FJYP7</span>
                        <span class="premium-until"><i class="fa fa-star"></i> Premium Kalan 28 / 30 Gün</span>
                        <div class="profile-status">
                            <h3>PROFİL DURUMUNUZ</h3>
                            <a href="/profil" class="edit">Düzenleyin</a>
                            <span class="status">"İyi Gözüküyor"</span>
                            <span class="details">%80 Tamamlanmış Gözüküyor</span>
                            <div class="progress">
                                <div class="progress-bar progress-bar-success" style="width:80%;"></div>
                            </div>
                        </div><!-- end profile-status -->
                    </div>
            `
        }
    }

    const profile = new Profile()


    return html `${profile.render()}`
}