import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {useState} from "react";

const Portfolios = [
    {
        Pimg: 'assets/images/portfolio/1.jpg',
    },
    {
        Pimg: 'assets/images/portfolio/2.jpg',
    },
    {
        Pimg: 'assets/images/portfolio/3.jpg',
    },
    {
        Pimg: 'assets/images/portfolio/4.jpg',
    },
    {
        Pimg: 'assets/images/portfolio/5.jpg',
    },
    {
        Pimg: 'assets/images/portfolio/6.jpg',
    },
    {
        Pimg: 'assets/images/portfolio/7.jpg',
    },{
        Pimg: 'assets/images/portfolio/8.jpg',
    },{
        Pimg: 'assets/images/portfolio/9.jpg',
    },{
        Pimg: 'assets/images/portfolio/10.jpg',
    },
]
export function PortfolioSection() {
    const settings = {
        dots: false,
        arrows: true,
        speed: 1000,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: false,
        responsive: [
            {
                breakpoint: 1500,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    const [open, setOpen] = useState(false);
    return <section className="wpo-portfolio-section section-padding" id="gallery">
        <h2 className="hidden">some</h2>
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-12">
                    <div
                        className="portfolio-grids gallery-container clearfix portfolio-slide">
                            <Slider {...settings}>
                                {Portfolios.map((image, i) => (
                                    <div className="grid" key={i}>
                                        <div className="img-holder" onClick={() => setOpen(true)}>
                                            <img src={image.Pimg} alt="" className="img img-responsive"/>
                                            <div className="hover-content">
                                                <i className="ti-plus"></i>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </Slider>
                    </div>
                </div>
            </div>
        </div>
        <Lightbox
            open={open}
            close={() => setOpen(false)}
            slides={Portfolios.map(e => ({src: e.Pimg}))}
        />
        {/* end container */}
    </section>;
}