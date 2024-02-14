export function StorySection() {
    return <section className="wpo-story-section section-padding" id="story">
        <div className="container">
            <div className="wpo-section-title">
                <span>Our Story</span>
                <h2>How it Happened</h2>
            </div>
            <div className="wpo-story-wrap">
                <div className="wpo-story-item">
                    <div className="wpo-story-img-wrap">
                        <div
                            className="wpo-story-img wow zoomIn"
                            data-wow-duration="1000ms"
                            style={{
                                visibility: "visible",
                                animationDuration: "1000ms",
                                animationName: "zoomIn"
                            }}
                        >
                            <img src="assets/images/story/1.jpg" alt=""/>
                        </div>
                        <div className="wpo-img-shape">
                            <img src="assets/images/story/shape.png" alt=""/>
                        </div>
                    </div>
                    <div className="wpo-story-content">
                        <div
                            className="wpo-story-content-inner wow fadeInRightSlow"
                            data-wow-duration="1700ms"
                            style={{
                                visibility: "visible",
                                animationDuration: "1700ms",
                                animationName: "fadeInRightSlow"
                            }}
                        >
                            <span>15 June, 2014</span>
                            <h2>How we meet</h2>
                            <p>
                                Consectetur adipiscing elit. Fringilla at risus orci, tempus
                                facilisi sed. Enim tortor, faucibus netus orci donec volutpat
                                adipiscing. Sit condimentum elit convallis libero. Nunc in eu
                                tellus ipsum placerat.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="wpo-story-item">
                    <div className="wpo-story-img-wrap">
                        <div
                            className="wpo-story-img wow zoomIn"
                            data-wow-duration="1000ms"
                            style={{
                                visibility: "visible",
                                animationDuration: "1000ms",
                                animationName: "zoomIn"
                            }}
                        >
                            <img src="assets/images/story/2.jpg" alt=""/>
                        </div>
                        <div className="clip-shape">
                            <svg
                                viewBox="0 0 382 440"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M191 0L381.526 110V330L191 440L0.474411 330V110L191 0Z"/>
                            </svg>
                        </div>
                        <div className="wpo-img-shape">
                            <img src="assets/images/story/shape2.png" alt=""/>
                        </div>
                    </div>
                    <div className="wpo-story-content">
                        <div
                            className="wpo-story-content-inner wow fadeInLeftSlow"
                            data-wow-duration="1700ms"
                            style={{
                                visibility: "visible",
                                animationDuration: "1700ms",
                                animationName: "fadeInLeftSlow"
                            }}
                        >
                            <span>02 Nov, 2020</span>
                            <h2>He proposed, I said yes</h2>
                            <p>
                                Consectetur adipiscing elit. Fringilla at risus orci, tempus
                                facilisi sed. Enim tortor, faucibus netus orci donec volutpat
                                adipiscing. Sit condimentum elit convallis libero. Nunc in eu
                                tellus ipsum placerat.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="wpo-story-item">
                    <div className="wpo-story-img-wrap">
                        <div
                            className="wpo-story-img wow zoomIn"
                            data-wow-duration="1000ms"
                            style={{
                                visibility: "visible",
                                animationDuration: "1000ms",
                                animationName: "zoomIn"
                            }}
                        >
                            <img src="assets/images/story/3.jpg" alt=""/>
                        </div>
                        <div className="wpo-img-shape">
                            <img src="assets/images/story/shape3.png" alt=""/>
                        </div>
                    </div>
                    <div className="wpo-story-content">
                        <div
                            className="wpo-story-content-inner wow fadeInRightSlow"
                            data-wow-duration="1700ms"
                            style={{
                                visibility: "visible",
                                animationDuration: "1700ms",
                                animationName: "fadeInRightSlow"
                            }}
                        >
                            <span>15 Apr, 2021</span>
                            <h2>Our Engagement Day</h2>
                            <p>
                                Consectetur adipiscing elit. Fringilla at risus orci, tempus
                                facilisi sed. Enim tortor, faucibus netus orci donec volutpat
                                adipiscing. Sit condimentum elit convallis libero. Nunc in eu
                                tellus ipsum placerat.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* end container */}
        <div className="flower-shape-1">
            <img src="assets/images/story/flower-shape1.svg" alt=""/>
        </div>
        <div className="flower-shape-2">
            <img src="assets/images/story/flower-shape2.svg" alt=""/>
        </div>
        <div className="flower-shape-3">
            <img src="assets/images/story/flower-shape3.svg" alt=""/>
        </div>
        <div className="flower-shape-4">
            <img src="assets/images/story/flower-shape4.svg" alt=""/>
        </div>
    </section>;
}