const html = require('choo/html')
const cookies = require('browser-cookies')

module.exports = (state, emit) => {

    console.log(JSON.parse(cookies.get('member')))
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