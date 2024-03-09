export function BlogSection() {
    return <section
        className="wpo-blog-section section-padding"
        style={{display: "none"}}
    >
        <div className="container">
            <div className="row">
                <div className="wpo-section-title">
                    <span>Our Blog</span>
                    <h2>Our Latest Wedding News</h2>
                </div>
            </div>
            <div className="wpo-blog-items">
                <div className="row">
                    <div className="col col-lg-4 col-md-6 col-12">
                        <div
                            className="wpo-blog-item wow fadeInUp animated"
                            data-wow-duration="1000ms"
                            style={{
                                visibility: "visible",
                                animationDuration: "1000ms",
                                animationName: "fadeInUp"
                            }}
                        >
                            <div className="wpo-blog-img">
                                <img src="static/images/blog/img-1.jpg" alt=""/>
                            </div>
                            <div className="wpo-blog-content">
                                <ul>
                                    <li>
                                        By <a href="blog-single.html">Robertson Doe</a>
                                    </li>
                                    <li>25 Sep 2023</li>
                                </ul>
                                <h2>
                                    <a href="blog.html">Top 10 wedding bouquet arranging idea</a>
                                </h2>
                            </div>
                        </div>
                    </div>
                    <div className="col col-lg-4 col-md-6 col-12">
                        <div
                            className="wpo-blog-item wow fadeInUp animated"
                            data-wow-duration="1200ms"
                            style={{
                                visibility: "visible",
                                animationDuration: "1200ms",
                                animationName: "fadeInUp"
                            }}
                        >
                            <div className="wpo-blog-img">
                                <img src="static/images/blog/img-2.jpg" alt=""/>
                            </div>
                            <div className="wpo-blog-content">
                                <ul>
                                    <li>
                                        By <a href="blog-single.html">David Luis</a>
                                    </li>
                                    <li>23 Sep 2023</li>
                                </ul>
                                <h2>
                                    <a href="blog.html">You must need a great photographer.</a>
                                </h2>
                            </div>
                        </div>
                    </div>
                    <div className="col col-lg-4 col-md-6 col-12">
                        <div
                            className="wpo-blog-item wow fadeInUp animated"
                            data-wow-duration="1400ms"
                            style={{
                                visibility: "visible",
                                animationDuration: "1400ms",
                                animationName: "fadeInUp"
                            }}
                        >
                            <div className="wpo-blog-img">
                                <img src="static/images/blog/img-3.jpg" alt=""/>
                            </div>
                            <div className="wpo-blog-content">
                                <ul>
                                    <li>
                                        By <a href="blog-single.html">Aliana de</a>
                                    </li>
                                    <li>21 Sep 2023</li>
                                </ul>
                                <h2>
                                    <a href="blog.html">
                                        Make sure your wedding gown is the best one.
                                    </a>
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="b-shape-2">
                    <img src="static/images/blog/shape-2.svg" alt=""/>
                </div>
            </div>
        </div>
        {/* end container */}
        <div className="b-shape">
            <img src="static/images/blog/shape-1.svg" alt=""/>
        </div>
    </section>;
}