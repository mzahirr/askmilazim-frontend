const html = require('choo/html')
const slick = require('slick-carousel')
const jquery = require('jquery')
const profile = require('../home/components/profile')


module.exports = (state, emit) => {

    return html `
    <div>
                <div class="container" id="content">
                     <div class="row">
                    <div class="col-sm-4 col-md-3"><div class="sidebar">
                        
                    ${profile()}

                    <div class="widget friend-requests">
                        <h3><i class="fa fa-user-plus"></i> ARKADAŞLIK İSTEKLERİ</h3>
                        <div class="buttons">
                            <img src="images/friend-request.jpg" alt="Username">
                            <a href="#" class="accept">
                                <i class="fa fa-check"></i>
                                <span>Kabul Et</span>
                            </a>
                            <a href="#" class="decline">
                                <i class="fa fa-times"></i>
                                <span>Reddet</span>
                            </a>
                        </div><!-- end buttons -->
                        <span class="username">"Arzu Çetindağ"</span>
                        <span class="request">Sizinle Arkadaş Olmak İstiyor</span>
                    </div><!-- end widget -->

                    <div class="widget messages">
                        <h3><i class="fa fa-envelope"></i> MESAJLAR</h3>
                        <span>Yeni Gelen</span>
                        <span class="big">"8 Adet Mesajınız"</span>
                        <span>Bulunmaktadır.</span>
                        <a href="#">Mesajları Görüntüle</a>
                    </div><!-- end messages -->

                    <div class="widget blinks">
                        <h3><i class="fa fa-eye"></i> GÖZ KIRPANLAR</h3>
                        <span>Son 24 Saat İçinde</span>
                        <span class="big">"2 Yeni Göz Kırpması Aldınız"</span>
                        <a href="#">Kimler Olduğuna Bak</a>
                    </div><!-- end widget -->

                    <div class="widget premium-ad">
                        <span class="icon"><i class="fa fa-star"></i></span>
                        <span class="title">PREMIUM<br>ÜYELİK EDİNİN</span>
                        <span class="desc">Premium Üyeliğin Tüm Avantajlarından Faydalanın. Profilinizi Güçlendirmenin Alternatif Yöntemleri</span>
                    </div><!-- end widget -->

                    <div class="widget favourites">
                        <h3><i class="fa fa-heartbeat"></i> FAVORİLERİNE EKLEYENLER</h3>
                        <ul class="users">
                            <li>
                                <div class="image"><img src="images/favourite-user.jpg" alt="Username"></div>
                                <span class="name">Merve Altıngil</span>
                                <span class="desc">Sizi Favorisine Ekledi - 10.05.2017</span>
                            </li>
                            <li>
                                <div class="image"><img src="images/favourite-user.jpg" alt="Username"></div>
                                <span class="name">Merve Altıngil</span>
                                <span class="desc">Sizi Favorisine Ekledi - 10.05.2017</span>
                            </li>
                            <li>
                                <div class="image"><img src="images/favourite-user.jpg" alt="Username"></div>
                                <span class="name">Merve Altıngil</span>
                                <span class="desc">Sizi Favorisine Ekledi - 10.05.2017</span>
                            </li>
                            <li>
                                <div class="image"><img src="images/favourite-user.jpg" alt="Username"></div>
                                <span class="name">Merve Altıngil</span>
                                <span class="desc">Sizi Favorisine Ekledi - 10.05.2017</span>
                            </li>
                            <li>
                                <div class="image"><img src="images/favourite-user.jpg" alt="Username"></div>
                                <span class="name">Merve Altıngil</span>
                                <span class="desc">Sizi Favorisine Ekledi - 10.05.2017</span>
                            </li>
                        </ul>
                        <a href="#">Tümünü Görüntüle</a>
                    </div><!-- end widget -->
                </div></div><!-- end column -->

                <div class="col-sm-8 col-md-9"><div class="page-content">
                    <div class="user-suggestions">
                        <h2><i class="fa fa-crosshairs"></i> ÜYE ÖNERİLERİ</h2>
                        <div class="user-list">
                            <div class="row">
                                <div class="col-md-3 col-xs-6"><a href="#">
                                    <div class="image"><img src="images/user-suggest.jpg" alt="Username"></div>
                                    <h5>8N8FJYP7</h5>
                                    <span class="detail">24 Yasinda, 159cm, Bosanmis</span>
                                    <span class="detail">Grafik Tasarimci</span>
                                    <span class="detail">Cankaya, Ankara</span>
                                </a></div>
                                <div class="col-md-3 col-xs-6"><a href="#">
                                    <div class="image"><img src="images/user-suggest.jpg" alt="Username"></div>
                                    <h5>8N8FJYP7</h5>
                                    <span class="detail">24 Yasinda, 159cm, Bosanmis</span>
                                    <span class="detail">Grafik Tasarimci</span>
                                    <span class="detail">Cankaya, Ankara</span>
                                </a></div>
                                <div class="col-md-3 col-xs-6"><a href="#">
                                    <div class="image"><img src="images/user-suggest.jpg" alt="Username"></div>
                                    <h5>8N8FJYP7</h5>
                                    <span class="detail">24 Yasinda, 159cm, Bosanmis</span>
                                    <span class="detail">Grafik Tasarimci</span>
                                    <span class="detail">Cankaya, Ankara</span>
                                </a></div>
                                <div class="col-md-3 col-xs-6"><a href="#">
                                    <div class="image"><img src="images/user-suggest.jpg" alt="Username"></div>
                                    <h5>8N8FJYP7</h5>
                                    <span class="detail">24 Yasinda, 159cm, Bosanmis</span>
                                    <span class="detail">Grafik Tasarimci</span>
                                    <span class="detail">Cankaya, Ankara</span>
                                </a></div>
                            </div><!-- end row -->
                            <div class="row">
                                <div class="col-md-3 col-xs-6"><a href="#">
                                    <div class="image"><img src="images/user-suggest.jpg" alt="Username"></div>
                                    <h5>8N8FJYP7</h5>
                                    <span class="detail">24 Yasinda, 159cm, Bosanmis</span>
                                    <span class="detail">Grafik Tasarimci</span>
                                    <span class="detail">Cankaya, Ankara</span>
                                </a></div>
                                <div class="col-md-3 col-xs-6"><a href="#">
                                    <div class="image"><img src="images/user-suggest.jpg" alt="Username"></div>
                                    <h5>8N8FJYP7</h5>
                                    <span class="detail">24 Yasinda, 159cm, Bosanmis</span>
                                    <span class="detail">Grafik Tasarimci</span>
                                    <span class="detail">Cankaya, Ankara</span>
                                </a></div>
                                <div class="col-md-3 col-xs-6"><a href="#">
                                    <div class="image"><img src="images/user-suggest.jpg" alt="Username"></div>
                                    <h5>8N8FJYP7</h5>
                                    <span class="detail">24 Yasinda, 159cm, Bosanmis</span>
                                    <span class="detail">Grafik Tasarimci</span>
                                    <span class="detail">Cankaya, Ankara</span>
                                </a></div>
                                <div class="col-md-3 col-xs-6"><a href="#">
                                    <div class="image"><img src="images/user-suggest.jpg" alt="Username"></div>
                                    <h5>8N8FJYP7</h5>
                                    <span class="detail">24 Yasinda, 159cm, Bosanmis</span>
                                    <span class="detail">Grafik Tasarimci</span>
                                    <span class="detail">Cankaya, Ankara</span>
                                </a></div>
                            </div><!-- end row -->
                            <div class="row">
                                <div class="col-md-3 col-xs-6"><a href="#">
                                    <div class="image"><img src="images/user-suggest.jpg" alt="Username"></div>
                                    <h5>8N8FJYP7</h5>
                                    <span class="detail">24 Yasinda, 159cm, Bosanmis</span>
                                    <span class="detail">Grafik Tasarimci</span>
                                    <span class="detail">Cankaya, Ankara</span>
                                </a></div>
                                <div class="col-md-3 col-xs-6"><a href="#">
                                    <div class="image"><img src="images/user-suggest.jpg" alt="Username"></div>
                                    <h5>8N8FJYP7</h5>
                                    <span class="detail">24 Yasinda, 159cm, Bosanmis</span>
                                    <span class="detail">Grafik Tasarimci</span>
                                    <span class="detail">Cankaya, Ankara</span>
                                </a></div>
                                <div class="col-md-3 col-xs-6"><a href="#">
                                    <div class="image"><img src="images/user-suggest.jpg" alt="Username"></div>
                                    <h5>8N8FJYP7</h5>
                                    <span class="detail">24 Yasinda, 159cm, Bosanmis</span>
                                    <span class="detail">Grafik Tasarimci</span>
                                    <span class="detail">Cankaya, Ankara</span>
                                </a></div>
                                <div class="col-md-3 col-xs-6"><a href="#">
                                    <div class="image"><img src="images/user-suggest.jpg" alt="Username"></div>
                                    <h5>8N8FJYP7</h5>
                                    <span class="detail">24 Yasinda, 159cm, Bosanmis</span>
                                    <span class="detail">Grafik Tasarimci</span>
                                    <span class="detail">Cankaya, Ankara</span>
                                </a></div>
                            </div><!-- end row -->
                        </div><!-- end user-list -->
                        <div class="buttons">
                            <a href="#" class="right">Tüm Üyeleri Görün</a>
                            <a href="#" class="right">Arama Kriterlerinizi Değiştirin</a>
                            <a href="#" class="center">Daha Fazla Göster</a>
                        </div><!-- end buttons -->
                    </div><!-- end user-suggestions -->

                    <div class="user-wall">
                        <h2><i class="fa fa-newspaper-o"></i> AKTİVİTELER</h2>
                        <form action="" class="status-form">
                            <textarea name="text"></textarea>
                            <label for="user-image-selector" id="user-image-selector-btn"><i class="fa fa-image"></i> Fotoğraf Ekleyin</label>
                            <input type="file" name="user-image-selector" id="user-image-selector">
                            <button type="submit" class="publish-btn">Paylaşın</button>
                        </form>
                        <ul class="status-list">
                            <li>
                                <span class="date">04.05.2017</span>
                                <div class="title">
                                    <div class="image"><img src="images/status-user.jpg" alt="Username"></div>
                                    <span class="name">Sevgi Etkiler /</span>
                                    <span class="detail">Bir Söz Paylaştı</span>
                                </div><!-- end title -->
                                <p>“Hakkımızda hayırlı, hadi bakalım belki kısmetimiz buradadır kim bilir”</p>
                                <a href="#" class="like-btn"><i class="fa fa-heart-o"></i><i class="fa fa-heart"></i></a>
                            </li>
                            <li>
                                <span class="date">04.05.2017</span>
                                <div class="title">
                                    <div class="image"><img src="images/status-user.jpg" alt="Username"></div>
                                    <span class="name">Merve Altingil /</span>
                                    <span class="detail">Bir Söz Paylaştı</span>
                                </div><!-- end title -->
                                <p>“Beyaz atlı prens burada da değilse bence gerçekten yok öyle bir şey”</p>
                                <a href="#" class="like-btn"><i class="fa fa-heart-o"></i><i class="fa fa-heart"></i></a>
                            </li>
                            <li class="has-photo">
                                <span class="date">04.05.2017</span>
                                <div class="title">
                                    <div class="image"><img src="images/status-user.jpg" alt="Username"></div>
                                    <span class="name">Gizem Dagci /</span>
                                    <span class="detail">Bir Fotoğraf Paylaştı</span>
                                </div><!-- end title -->
                                <div class="user-photo">
                                    <img src="images/user-published-photo.jpg" alt="User Photo">
                                </div>
                                <a href="#" class="like-btn"><i class="fa fa-heart-o"></i><i class="fa fa-heart"></i></a>
                            </li>
                            <li>
                                <span class="date">04.05.2017</span>
                                <div class="title">
                                    <div class="image"><img src="images/status-user.jpg" alt="Username"></div>
                                    <span class="name">Sevgi Etkiler /</span>
                                    <span class="detail">Bir Söz Paylaştı</span>
                                </div><!-- end title -->
                                <p>“Hakkımızda hayırlı, hadi bakalım belki kısmetimiz buradadır kim bilir”</p>
                                <a href="#" class="like-btn"><i class="fa fa-heart-o"></i><i class="fa fa-heart"></i></a>
                            </li>
                            <li>
                                <span class="date">04.05.2017</span>
                                <div class="title">
                                    <div class="image"><img src="images/status-user.jpg" alt="Username"></div>
                                    <span class="name">Merve Altingil /</span>
                                    <span class="detail">Bir Söz Paylaştı</span>
                                </div><!-- end title -->
                                <p>“Beyaz atlı prens burada da değilse bence gerçekten yok öyle bir şey”</p>
                                <a href="#" class="like-btn"><i class="fa fa-heart-o"></i><i class="fa fa-heart"></i></a>
                            </li>
                        </ul>
                    </div><!-- end user-wall -->
                </div></div><!-- end column -->
            </div><!-- end row -->
        </div>
        </div>

    `
}