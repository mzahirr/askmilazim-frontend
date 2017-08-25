const html = require('choo/html')
const slick = require('slick-carousel')
const jquery = require('jquery')
const Component = require('nanocomponent')

module.exports = (state, emit) => {

    class PopularMembers extends Component {
        constructor() {
            super()
        }

        createElement() {
            return html `
                <div id="popular-members-list">
                    <div><a href="#"><img src="images/popular-user.jpg" alt="Username"></a></div>
                    <div><a href="#"><img src="images/popular-user.jpg" alt="Username"></a></div>
                    <div><a href="#"><img src="images/popular-user.jpg" alt="Username"></a></div>
                    <div><a href="#"><img src="images/popular-user.jpg" alt="Username"></a></div>
                    <div><a href="#"><img src="images/popular-user.jpg" alt="Username"></a></div>
                    <div><a href="#"><img src="images/popular-user.jpg" alt="Username"></a></div>
                    <div><a href="#"><img src="images/popular-user.jpg" alt="Username"></a></div>
                    <div><a href="#"><img src="images/popular-user.jpg" alt="Username"></a></div>
                    <div><a href="#"><img src="images/popular-user.jpg" alt="Username"></a></div>
                    <div><a href="#"><img src="images/popular-user.jpg" alt="Username"></a></div>
                    <div><a href="#"><img src="images/popular-user.jpg" alt="Username"></a></div>
                    <div><a href="#"><img src="images/popular-user.jpg" alt="Username"></a></div>
                </div>
            `
        }

    }

    const popularMembers = new PopularMembers()

    popularMembers.beforerender = function (el) {

        jquery(el).slick(
            {
                nfinite: true,
                slidesToShow: 6,
                slidesToScroll: 3,
                autoplay: true,
                autoplaySpeed: 1000,
                responsive: [
                    {
                        breakpoint: 767,
                        settings: {
                            arrows: false,
                            centerMode: true,
                            centerPadding: '40px',
                            slidesToShow: 4
                        }
                    },
                ]
            }
        )

    }


    return html `
        <section id="popular-members">
            <div class="container">
                <div class="row">
                    <div class="col-md-9 col-md-offset-3 col-sm-12" >
                        <span class="title">POPÜLER ÜYELER</span>
                        <a href="#" class="add-link"><span><i class="fa fa-plus-square"></i></span></a>
                        ${popularMembers.render()}
                    </div><!-- end column -->
                </div><!-- end row -->
            </div><!-- end container -->
        </section>   
    `
}