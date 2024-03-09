import Image from "next/image";
import {Slide} from "react-awesome-reveal";

type Event = {
    title: string,
    date: Date,
    startTime: string,
    endTime: string,
    thumbnail: string,
    address: string,
    mobile?: string,
    location: {
        lat: number,
        lng: number
    }
}
function EventItem(props: { event: Event }) {
    const { event } = props;
    return <div className="col col-lg-4 col-md-6 col-12">
        <Slide direction="up" duration={1400} triggerOnce={true}>
            <div className="wpo-event-item">
                <div className="wpo-event-img">
                    <div className="wpo-event-img-inner">
                        <img src={event.thumbnail} alt=""/>
                    </div>
                </div>
                <div className="wpo-event-text">
                    <div className="title">
                        <h2>{event.title}</h2>
                    </div>
                    <ul>
                        <li>
                            {event.date.toLocaleDateString('vi-VN', {
                                weekday: "long",
                                day: '2-digit',
                                month: 'long',
                                year: 'numeric'
                            })} <br/> {event.startTime} – {event.endTime}
                        </li>
                        <li>{event.address}</li>
                        {event.mobile ? <li>{event.mobile}</li> : <></>}
                        <li>
                            {" "}
                            <a
                                className="popup-gmaps"
                                href={`https://www.google.com/maps/place/${event.location.lat},${event.location.lng}`}
                                target="_blank"
                            >
                                Xem địa chỉ
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </Slide>
    </div>;
}

export function EventSection() {
    return <section className="wpo-event-section section-padding" id="event">
        <div className="container">
            <div className="wpo-section-title">
                <span>Our Wedding</span>
                <h2>When &amp; Where</h2>
            </div>
            <div className="wpo-event-wrap">
                <div className="row">
                    <EventItem event={
                        {
                            title: 'Tiệc cưới nhà trai',
                            date: new Date('2024-03-19'),
                            startTime: "17:00",
                            endTime: "20:00",
                            thumbnail: "/assets/images/event/le-cuoi-nha-trai.jpg",
                            address: "Gia đình nhà trai",
                            location: {
                                lat: 20.984533,
                                lng: 105.990350
                            }
                        }
                    }/>
                    <EventItem event={
                        {
                            title: 'Tiệc cưới nhà gái',
                            date: new Date('2024-03-19'),
                            startTime: "17:00",
                            endTime: "20:00",
                            thumbnail: "/assets/images/event/le-cuoi-nha-gai.jpg",
                            address: "Gia đình nhà gái",
                            location: {
                                lat: 20.9595693,
                                lng: 105.9970045,
                            }
                        }
                    }/>
                    <EventItem event={
                        {
                            title: 'Lễ thành hôn',
                            date: new Date('2024-03-20'),
                            startTime: "15:00",
                            endTime: "16:00",
                            thumbnail: "/assets/images/event/le-thanh-hon.jpg",
                            address: "Gia đình nhà trai",
                            location: {
                                lat: 20.984533,
                                lng: 105.990350
                            }
                        }
                    }/>
                </div>
            </div>
        </div>
        {/* end container */}
    </section>;
}