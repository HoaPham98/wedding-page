import {Countdown} from "@/components/countdown";

export function Hero() {
    return <section className="static-hero">
        <div className="hero-container">
            <div className="hero-inner">
                <div className="container-fluid">
                    <div className="row align-items-center">
                        <div className="col-xl-6 col-lg-6 col-12">
                            <div className="wpo-static-hero-inner">
                                <div
                                    className="shape-1 wow fadeInUp"
                                    data-wow-duration="1400ms"
                                    style={{
                                        visibility: "visible",
                                        animationDuration: "1400ms",
                                        animationName: "fadeInUp"
                                    }}
                                >
                                    <img src="static/images/slider/shape1.svg" alt=""/>
                                </div>
                                <div
                                    className="slide-title wow fadeInUp"
                                    data-wow-duration="1500ms"
                                    style={{
                                        visibility: "visible",
                                        animationDuration: "1500ms",
                                        animationName: "fadeInUp"
                                    }}
                                >
                                    <h2>Quang Hoà &amp; Kiều Trang</h2>
                                </div>
                                <div
                                    data-swiper-parallax={400}
                                    className="slide-text wow fadeInUp"
                                    data-wow-duration="1600ms"
                                    style={{
                                        visibility: "visible",
                                        animationDuration: "1600ms",
                                        animationName: "fadeInUp"
                                    }}
                                >
                                    <p>Save the date<br/>20/03/2024</p>
                                </div>
                                <div
                                    className="wpo-wedding-date wow fadeInUp"
                                    data-wow-duration="1700ms"
                                    style={{
                                        visibility: "visible",
                                        animationDuration: "1700ms",
                                        animationName: "fadeInUp"
                                    }}
                                >
                                    <Countdown date={new Date("03/20/2024")}/>
                                </div>
                                <div
                                    className="shape-2 wow fadeInUp"
                                    data-wow-duration="1800ms"
                                    style={{
                                        visibility: "visible",
                                        animationDuration: "1800ms",
                                        animationName: "fadeInUp"
                                    }}
                                >
                                    <img src="static/images/slider/shape2.svg" alt=""/>
                                </div>
                                <div className="clearfix"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="static-hero-right">
            <div
                className="static-hero-img scene"
                id="scene"
                style={{
                    transform: "translate3d(0px, 0px, 0px)",
                    transformStyle: "preserve-3d",
                    backfaceVisibility: "hidden",
                    position: "relative"
                }}
            >
                <div className="static-hero-img-inner">
                    <img src="static/images/slider/couple.jpg" alt=""/>
                </div>
                <div
                    className="static-hero-shape-1 wow fadeInDown"
                    data-wow-delay=".5s"
                    style={{
                        visibility: "visible",
                        animationDelay: "0.5s",
                        animationName: "fadeInDown"
                    }}
                >
          <span
              className="layer"
              data-depth="0.25"
              style={{
                  transform: "translate3d(-7.8973px, -9.59118px, 0px)",
                  transformStyle: "preserve-3d",
                  backfaceVisibility: "hidden",
                  position: "relative",
                  display: "block",
                  left: 0,
                  top: 0
              }}
          >
            <img src="static/images/slider/shape3.svg" alt=""/>
          </span>
                </div>
                <div
                    className="static-hero-shape-2 wow fadeInDown"
                    data-wow-delay=".5s"
                    style={{
                        visibility: "visible",
                        animationDelay: "0.5s",
                        animationName: "fadeInDown"
                    }}
                >
          <span
              className="layer"
              data-depth="0.45"
              style={{
                  transform: "translate3d(-14.2151px, -17.2641px, 0px)",
                  transformStyle: "preserve-3d",
                  backfaceVisibility: "hidden",
                  position: "absolute",
                  display: "block",
                  left: 0,
                  top: 0
              }}
          >
            <img src="static/images/slider/shape4.svg" alt=""/>
          </span>
                </div>
                <div className="static-hero-shape-3">
          <span
              className="layer"
              data-depth="0.65"
              style={{
                  transform: "translate3d(-20.533px, -24.9371px, 0px)",
                  transformStyle: "preserve-3d",
                  backfaceVisibility: "hidden",
                  position: "absolute",
                  display: "block",
                  left: 0,
                  top: 0
              }}
          >
            <img src="static/images/slider/shape5.svg" alt=""/>
          </span>
                </div>
                <div
                    className="static-hero-shape-4 wow fadeInUp"
                    data-wow-delay=".5s"
                    style={{
                        visibility: "visible",
                        animationDelay: "0.5s",
                        animationName: "fadeInUp"
                    }}
                >
                    <img src="static/images/slider/shape6.svg" alt=""/>
                </div>
            </div>
            <div className="static-hero-img-bg">
                <img src="static/images/slider/bg-shape.png" alt=""/>
            </div>
        </div>
        <div className="right-shape">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 650 597" fill="none">
                <path
                    d="M717 0C717 0 527.91 0 475.696 129.736C423.481 259.472 501.092 358.185 396.683 423.034C292.274 487.902 74.9839 485.573 26.2847 646.096C-22.3947 806.598 11.4538 863 11.4538 863L653.509 803.776L717 0Z"/>
            </svg>
        </div>
    </section>;
}