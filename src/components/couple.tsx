import {CoupleInfo, coupleInfos} from "@/models/couple_info";

type Props = {
    dir: "LTR" | "RTL",
    data: CoupleInfo
}
function CoupleItem(props: Props) {
    const { dir, data } = props;
    const isLTR = dir === "LTR";
    return <div className="col col-md-12 col-12">
        <div className="couple-item">
            <div
                className={`couple-img-wrap wow ${isLTR ? "fadeInLeftSlow" : "fadeInRightSlow"}
                data-wow-duration="1700ms`}
                style={{
                    visibility: "visible",
                    animationDuration: "1700ms",
                    animationName: isLTR ? "fadeInLeftSlow" : "fadeInRightSlow"
                }}
            >
                <div
                    className="couple-img"
                    style={{
                        maskImage: `url(./assets/images/couple/mask-${isLTR ? "1" : "2"}.svg)`,
                        WebkitMaskImage: `url(./assets/images/couple/mask-${isLTR ? "1" : "2"}.svg)`
                    }}
                >
                    <img src={data.image ?? 'assets/images/couple/1.jpg'} alt=""/>
                </div>
                <div className="c-shape">
                    <img src="assets/images/couple/image-bg.svg" alt=""/>
                </div>
            </div>
            <div
                className={`couple-text wow ${isLTR ? "fadeInLeftSlow" : "fadeInRightSlow"}
                data-wow-duration="1700ms`}
                style={{
                    visibility: "visible",
                    animationDuration: "1700ms",
                    animationName: isLTR ? "fadeInLeftSlow" : "fadeInRightSlow"
                }}
            >
                <h3>Phạm Quang Hoà</h3>
                <p style={{textAlign: isLTR ? 'left' : 'right'}}>
                    Con ông: <b>{data.dadName}</b><br/>
                    Con bà: <b>{data.dadName}</b><br/> Địa chỉ: <b>{data.address}</b>
                </p>
                <div className="social">
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
    </div>;
}

export function CoupleSection() {
    return <section className="wpo-couple-section section-padding" id="couple">
        <div className="container">
            <div className="couple-area clearfix">
                <div className="row align-items-center">
                    <CoupleItem data={coupleInfos[0]} dir={"LTR"}/>
                    <CoupleItem data={coupleInfos[1]} dir={"RTL"}/>
                </div>
            </div>
        </div>
        {/* end container */}
        <div className="shape-1">
            <svg
                viewBox="0 0 1920 692"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <g opacity="0.1">
                    <path
                        className="stroke-color"
                        d="M-11 689C176.333 697 609 669.4 841 495L1111 279C1263.67 154.333 1640.6 -71.0002 1927 24.9998"
                        stroke=""
                        strokeWidth={2}
                    />
                    <path
                        d="M-11 689C176.333 697 609 669.4 841 495L1111 279C1263.67 154.333 1640.6 -71.0002 1927 24.9998"
                        stroke="black"
                        strokeOpacity="0.2"
                        strokeWidth={2}
                    />
                </g>
                <g opacity="0.1">
                    <path
                        className="stroke-color"
                        d="M1927 689C1739.67 697 1307 669.4 1075 495L805 279C652.333 154.333 275.4 -71.0002 -11 24.9998"
                        stroke=""
                        strokeWidth={2}
                    />
                    <path
                        d="M1927 689C1739.67 697 1307 669.4 1075 495L805 279C652.333 154.333 275.4 -71.0002 -11 24.9998"
                        stroke="black"
                        strokeOpacity="0.2"
                        strokeWidth={2}
                    />
                </g>
                <path
                    className="fill-color"
                    d="M879 397C501.4 54.5998 135 31.6665 -1 62.9998V649C579.8 636.2 827.667 475.667 879 397Z"
                    fill=""
                />
                <path
                    className="fill-color"
                    d="M1041 397C1418.6 54.5998 1785 31.6665 1921 62.9998V649C1340.2 636.2 1092.33 475.667 1041 397Z"
                    fill=""
                />
            </svg>
        </div>
    </section>;
}