import {Inter} from "next/font/google";
import {Header} from "@/pages/components/header";
import {Hero} from "@/pages/components/hero";
import {CoupleSection} from "@/pages/components/couple";
import {StorySection} from "@/pages/components/story";
import {PortfolioSection} from "@/pages/components/portfolio";
import {EventSection} from "@/pages/components/event";
import {BlogSection} from "@/pages/components/blog";
import {ContactSection} from "@/pages/components/contact";
import {sections} from "@/pages/models/routes";
import ScrollSpy from "react-ui-scrollspy";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="page-wrapper">
        {/* start preloader */}
        <div className="preloader" style={{display: "none"}}>
            <div className="vertical-centered-box">
                <div className="content">
                    <div className="loader-circle"/>
                    <div className="loader-line-mask">
                        <div className="loader-line"/>
                    </div>
                    <img src="assets/images/preloader.gif" alt=""/>
                </div>
            </div>
        </div>
        <Header routes={sections}/>
        <ScrollSpy>
            {sections.map(e => <div key={e.id} id={e.id}>{e.component}</div>)}
        </ScrollSpy>
        <footer className="wpo-site-footer">
            <div className="wpo-upper-footer">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="widget about-widget">
                            <div className="logo widget-title">
                                <a className="logo" href="index.html">
                                    Habibi
                                </a>
                            </div>
                            <p>
                                Chúng tôi rất nóng lòng được gặp lại tất cả những người bạn và người thân yêu quý của mình tại đám cưới của mình.
                            </p>
                            <ul>
                                <li>
                                    <a href="#">
                                        <i className="ti-facebook"/>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i className="ti-twitter-alt"/>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i className="ti-instagram"/>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="wpo-lower-footer">
                <div className="container">
                    <div className="row">
                        <div className="col col-xs-12">
                            <p className="copyright">
                                {" "}
                                © Copyright 2023 | <a href="index.html">Habibi</a> | All right
                                reserved.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="ft-shape-1">
                <img src="assets/images/footer-shape-1.svg" alt=""/>
            </div>
            <div className="ft-shape-2">
                <img src="assets/images/footer-shape-2.svg" alt=""/>
            </div>
        </footer>
    </div>

  );
}
