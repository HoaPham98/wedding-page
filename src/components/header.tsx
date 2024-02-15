import {useEffect, useState} from "react";

export function Header(props: { routes: {id: string, title: string, component: any}[]}) {
    const { routes } = props;
    const onPress = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        e.preventDefault();
        const target = window.document.getElementById(
            e.currentTarget.href.split("#")[1]
        );
        if (target) {
            target.scrollIntoView({ behavior: "smooth" });
        }
    };
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
                                                <a onClick={(e) => onPress(e)} data-to-scrollspy-id={e.id}
                                                   href={`#${e.id}`}>
                                                    {e.title}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                {/* end of nav-collapse */}
                            </div>
                            <div className="col-lg-2 col-md-2 col-2" style={{display: 'none'}}>
                                <div className="header-right">
                                    <div className="header-search-form-wrapper">
                                        <div className="cart-search-contact">
                                            <button className="search-toggle-btn">
                                                <i className="fi flaticon-search"/>
                                            </button>
                                            <div className="header-search-form">
                                                <form>
                                                    <div>
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            placeholder="Search here..."
                                                        />
                                                        <button type="submit">
                                                            <i className="fi flaticon-search"/>
                                                        </button>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mini-cart">
                                        <button className="cart-toggle-btn">
                                            {" "}
                                            <i className="fi flaticon-shopping-cart"/>
                                            <span className="cart-count">2</span>
                                        </button>
                                        <div className="mini-cart-content">
                                            <button className="mini-cart-close">
                                                <i className="ti-close"/>
                                            </button>
                                            <div className="mini-cart-items">
                                                <div className="mini-cart-item clearfix">
                                                    <div className="mini-cart-item-image">
                                                        <a href="shop.html">
                                                            <img
                                                                src="assets/images/shop/mini-cart/img-1.jpg"
                                                                alt=""
                                                            />
                                                        </a>
                                                    </div>
                                                    <div className="mini-cart-item-des">
                                                        <a href="shop.html">Wedding Gown</a>
                                                        <span className="mini-cart-item-price">
                            $20.15 x 1
                          </span>
                                                        <span className="mini-cart-item-quantity">
                            <a href="#">
                              <i className="ti-close"/>
                            </a>
                          </span>
                                                    </div>
                                                </div>
                                                <div className="mini-cart-item clearfix">
                                                    <div className="mini-cart-item-image">
                                                        <a href="shop.html">
                                                            <img
                                                                src="assets/images/shop/mini-cart/img-2.jpg"
                                                                alt=""
                                                            />
                                                        </a>
                                                    </div>
                                                    <div className="mini-cart-item-des">
                                                        <a href="shop.html">Bridal Flower</a>
                                                        <span className="mini-cart-item-price">
                            $13.25 x 2
                          </span>
                                                        <span className="mini-cart-item-quantity">
                            <a href="#">
                              <i className="ti-close"/>
                            </a>
                          </span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="mini-cart-action clearfix">
                      <span className="mini-checkout-price">
                        Subtotal:
                        <span>$215.14</span>
                      </span>
                                                <div className="mini-btn">
                                                    <a href="checkout.html" className="view-cart-btn s1">
                                                        Checkout
                                                    </a>
                                                    <a href="cart.html" className="view-cart-btn">
                                                        View Cart
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
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