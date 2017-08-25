const html = require('choo/html')


module.exports = (state, emit) => {

    return html `
    <div>
                <header id="main-header">
            <nav class="navbar navbar-default">
                <div class="container">
                    <div class="navbar-header">
                        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#main-menu">
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                        </button>
                        <a href="#" class="navbar-brand"><img src="images/header-logo.png" alt="Askmilazim"></a>
                    </div><!-- end navbar-header -->

                    <div class="collapse navbar-collapse" id="main-menu">
                        <ul class="nav navbar-nav navbar-right">
                            <li><a href="#a">
                                <span class="icon"><i class="fa fa-user-plus"></i></span>
                                <span class="text">Arkadaşlık <br>İstekleri</span>
                            </a></li>
                            <li><a href="#m">
                                <span class="icon"><i class="fa fa-envelope"></i></span>
                                <span class="text">Mesajlar</span>
                            </a></li>
                            <li><a href="#g">
                                <span class="icon"><i class="fa fa-eye"></i></span>
                                <span class="text">Göz <br>Kırpanlar</span>
                            </a></li>
                            <li><a href="#o">
                                <span class="icon"><i class="fa fa-podcast"></i></span>
                                <span class="text">Online <br>Üyeler</span>
                            </a></li>
                            <li><a href="#i">
                                <span class="icon"><i class="fa fa-search"></i></span>
                                <span class="text">Arama</span>
                            </a></li>
                            <li><a href="/logout">
                                <span class="icon"><i class="fa fa-sign-out"></i></span>
                                <span class="text">Çıkış <br>Yap</span>
                            </a></li>
                        </ul>
                    </div>
                </div><!-- end container -->
            </nav>
        </header>

</div>
    `

}