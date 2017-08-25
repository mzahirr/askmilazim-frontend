const html = require('choo/html')
const slick = require('slick-carousel')
const jquery = require('jquery')
const profile = require('../home/components/profile')


module.exports = (state, emit) => {


    return html `
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
                    <div id="my-profile">
                        <h2><i class="fa fa-envelope"></i> PROFİLİM</h2>
                        <a href="#" class="profile-settings">Hesap Ayarlarını Düzenle</a>
                        <div class="row">
                            <div class="col-md-6 col-sm-4">
                                <div id="profile-info" class="clearfix">
                                    <div class="image"><img src="images/profile-info-image.jpg" alt="Username"></div>
                                    <div class="text">
                                        <span class="name">8N8FJYP7</span>
                                        <span class="info">28 Yasinda</span>
                                        <span class="info">183 cm</span>
                                        <span class="info">Bekar</span>
                                        <span class="info">Grafik Tasarimci</span>
                                        <span class="info">Cankaya, Ankara</span>
                                        <a href="#" class="edit">Bilgileri Duzenle</a>
                                    </div>
                                </div>
                            </div><!-- end column -->
                            <div class="col-md-6 col-sm-8">
                                <div id="profile-photos">
                                    <a href="#" class="others">Diğer Fotoğraflarım</a>
                                    <a href="#" class="all">Tümünü Göster</a>
                                    <div class="photos">
                                        <a href="#"><img src="images/friend-requests.jpg" alt=""></a>
                                        <a href="#"><img src="images/friend-requests.jpg" alt=""></a>
                                        <a href="#"><img src="images/friend-requests.jpg" alt=""></a>
                                        <a href="#"><img src="images/friend-requests.jpg" alt=""></a>
                                        <a href="#"><img src="images/friend-requests.jpg" alt=""></a>
                                        <a href="#"><img src="images/friend-requests.jpg" alt=""></a>
                                        <a href="#"><img src="images/friend-requests.jpg" alt=""></a>
                                        <a href="#" class="add"><i class="fa fa-plus-square"></i></a>
                                    </div>
                                </div>
                            </div><!-- end column -->
                        </div><!-- end row -->
                        <h2><i class="fa fa-quote-left"></i> PROFİL NOTUNUZ</h2>
                        <form action="">
                        <textarea name="profile-note" class="profile-note">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae harum suscipit, quod dolores. Aliquam suscipit officiis saepe maiores eaque ratione aspernatur, omnis quas perferendis iure, debitis amet sint, hic. Laboriosam?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum maxime at, consequuntur nisi ratione, obcaecati. Ipsum error magni corrupti dicta itaque rerum numquam, rem id odit, omnis provident, sit modi.</textarea>
                        <h2><i class="fa fa-envelope"></i> FİZİKSEL ÖZELLİKLERİM</h2>
                        <div class="form-list">
                            <div class="form-item">
                                <label for="boy">Boyunuz</label>
                                <input type="text" name="boy" value="183 cm" class="focus">
                                <a href="#" class="icon"><i class="fa fa-pencil-square-o"></i></a>
                            </div>
                            <div class="form-item">
                                <label for="kilo">Kilonuz</label>
                                <input type="text" name="kilo" value="58 kg" class="focus">
                                <a href="#" class="icon"><i class="fa fa-pencil-square-o"></i></a>
                            </div>
                            <div class="form-item">
                                <label for="yapi">Vücut Yapınız</label>
                                <input type="text" name="yapi" value="İnce" class="focus">
                                <a href="#" class="icon"><i class="fa fa-pencil-square-o"></i></a>
                            </div>
                            <div class="form-item">
                                <label for="grenk">Göz Renginiz</label>
                                <input type="text" name="grenk" value="Kahverengi" class="focus">
                                <a href="#" class="icon"><i class="fa fa-pencil-square-o"></i></a>
                            </div>
                            <div class="form-item">
                                <label for="sac">Saç Renginiz</label>
                                <select name="sac" class="focus">
                                    <option value="siyah">Siyah</option>
                                    <option value="kahverengi">Kahverengi</option>
                                    <option value="kizil">Kizil</option>
                                </select>
                                <a href="#" class="icon"><i class="fa fa-pencil-square-o"></i></a>
                            </div>
                        </div>
                        <h2><i class="fa fa-envelope"></i> GENEL BİLGİLERİM</h2>
                        <div class="form-list">
                            <div class="form-item">
                                <label for="aylik">Aylık Geliriniz</label>
                                <input type="text" name="aylik" value="7500 - 10000 TL" class="focus">
                                <a href="#" class="icon"><i class="fa fa-pencil-square-o"></i></a>
                            </div>
                            <div class="form-item">
                                <label for="egitim">Eğitiminiz</label>
                                <input type="text" name="egitim" value="Üniversite (Lisans)" class="focus">
                                <a href="#" class="icon"><i class="fa fa-pencil-square-o"></i></a>
                            </div>
                            <div class="form-item">
                                <label for="politik">Politik Görüşünüz</label>
                                <input type="text" name="politik" value="" class="focus">
                                <a href="#" class="icon"><i class="fa fa-pencil-square-o"></i></a>
                            </div>
                            <div class="form-item">
                                <label for="din">Dini İnancınız</label>
                                <input type="text" name="din" value="" class="focus">
                                <a href="#" class="icon"><i class="fa fa-pencil-square-o"></i></a>
                            </div>
                            <div class="form-item">
                                <label for="etnik">Etnik Kökeniniz</label>
                                <input type="text" name="etnik" value="Türk" class="focus">
                                <a href="#" class="icon"><i class="fa fa-pencil-square-o"></i></a>
                            </div>
                            <div class="form-item">
                                <label for="cocuk">Çocuk Durumunuz</label>
                                <input type="text" name="cocuk" value="Yok" class="focus">
                                <a href="#" class="icon"><i class="fa fa-pencil-square-o"></i></a>
                            </div>
                            <div class="form-item">
                                <label for="kimyas">Kiminle Yaşıyorsunuz</label>
                                <input type="text" name="kimyas" value="Yalnız" class="focus">
                                <a href="#" class="icon"><i class="fa fa-pencil-square-o"></i></a>
                            </div>
                            <div class="form-item">
                                <label for="sigara">Sigara Alışkanlığınız</label>
                                <input type="text" name="sigara" value="Günde Bir Kaç Kere" class="focus">
                                <a href="#" class="icon"><i class="fa fa-pencil-square-o"></i></a>
                            </div>
                            <div class="form-item">
                                <label for="icki">İçki Alışkanlığınız</label>
                                <input type="text" name="icki" value="Ayda Bir Kaç Kere" class="focus">
                                <a href="#" class="icon"><i class="fa fa-pencil-square-o"></i></a>
                            </div>
                            <div class="form-item">
                                <label for="takim">Tuttuğunuz Takım</label>
                                <input type="text" name="takim" value="Beşiktaş" class="focus">
                                <a href="#" class="icon"><i class="fa fa-pencil-square-o"></i></a>
                            </div>
                            <div class="form-item">
                                <label for="ilgi">İlgi alanlarınız</label>
                                <input type="text" name="ilgi" value="" class="focus">
                                <a href="#" class="icon"><i class="fa fa-pencil-square-o"></i></a>
                            </div>
                            <div class="form-item">
                                <label for="diller">Bildiğiniz Diller</label>
                                <input type="text" name="diller" value="" class="focus">
                                <a href="#" class="icon"><i class="fa fa-pencil-square-o"></i></a>
                            </div>
                        </div>
                        <div class="save-button">
                            <button type="submit">Bilgileri Kaydet</button>
                        </div>
                        </form>
                    </div><!-- end my-profile -->
                </div></div><!-- end column -->
            </div><!-- end row -->
        </div>
    `
}