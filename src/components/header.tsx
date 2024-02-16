import {useEffect, useState} from "react";
// @ts-ignore
import ScrollspyNav from "react-scrollspy-nav";

export function Header(props: { routes: {id: string, title: string, component: any}[]}) {
    const { routes } = props;
    const [scroll, setScroll] = useState(0);

    const handleScroll = () => setScroll(document.documentElement.scrollTop);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const className = scroll > 80 ? "fixed-navbar active" : "fixed-navbar";
    return <div className={className}>
        <header id="header">
            <div className="wpo-site-header">
                <nav className="navigation navbar navbar-expand-lg navbar-light original">
                    <div className="container-fluid">
                        <div className="row align-items-center">
                            <div className="col-lg-3 col-md-3 col-3 d-lg-none dl-block">
                                <div className="mobail-menu">
                                    <button type="button" className="navbar-toggler open-btn">
                                        <span className="sr-only">Toggle navigation</span>
                                        <span className="icon-bar first-angle"/>
                                        <span className="icon-bar middle-angle"/>
                                        <span className="icon-bar last-angle"/>
                                    </button>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-6 col-6">
                                <div className="navbar-header">
                                    <a className="navbar-brand" href="index.html">
                                        QH{" "}
                                        <i
                                            className="fa fa-heart"
                                            style={{margin: "5px 5px 5px 10px", color: "red"}}
                                        />{" "}
                                        KT
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-8 col-md-1 col-1">
                                <ScrollspyNav
                                    scrollTargetIds={routes.map(e => e.id)}
                                    offset={100}
                                    activeNavClass="active"
                                    scrollDuration="1000"
                                    headerBackground="true"
                                >
                                    <div
                                        id="navbar"
                                        className="collapse navbar-collapse navigation-holder"
                                    >
                                        <button className="menu-close">
                                            <i className="ti-close"/>
                                        </button>

                                            <ul className="nav navbar-nav mb-2 mb-lg-0">
                                                {routes.map(e => (
                                                    <li key={e.id} className="menu-item-has-children">
                                                        <a
                                                           href={`#${e.id}`}>
                                                            {e.title}
                                                        </a>
                                                    </li>
                                                ))}
                                            </ul>

                                    </div>
                                </ScrollspyNav>
                                {/* end of nav-collapse */}
                            </div>
                        </div>
                    </div>
                    {/* end of container */}
                </nav>
            </div>
        </header>
    </div>
        ;
        }