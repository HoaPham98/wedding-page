import sImg1 from '../../public/assets/images/story/1.jpg'
import sImg2 from '../../public/assets/images/story/2.jpg'
import sImg3 from '../../public/assets/images/story/3.jpg'

import shape1 from '../../public/assets/images/story/shape.png'
import shape2 from '../../public/assets/images/story/shape2.png'
import shape3 from '../../public/assets/images/story/shape3.png'


import bshape1 from '../../public/assets/images/story/flower-shape1.svg'
import bshape2 from '../../public/assets/images/story/flower-shape2.svg'
import bshape3 from '../../public/assets/images/story/flower-shape3.svg'
import bshape4 from '../../public/assets/images/story/flower-shape4.svg'
import { Zoom } from "react-awesome-reveal";




const Storys = [
    {
        sImg: sImg1,
        shape: shape1,
        title: 'How we meet',
        date: '23 Nov 2020',
        description: 'Consectetur adipiscing elit. Fringilla at risus orci, tempus facilisi sed. Enim tortor, faucibus netus orci donec volutpat adipiscing. Sit condimentum elit convallis libero. Nunc in eu tellus ipsum placerat.',
    },
    {
        sImg: sImg2,
        shape: shape2,
        title: 'He proposed, I said yes',
        date: '16 Jan 2024',
        description: 'Consectetur adipiscing elit. Fringilla at risus orci, tempus facilisi sed. Enim tortor, faucibus netus orci donec volutpat adipiscing. Sit condimentum elit convallis libero. Nunc in eu tellus ipsum placerat.',
        order1: 'order-lg-2 order-1',
        order2: 'order-lg-1 order-2',
    },
    {
        sImg: sImg3,
        shape: shape3,
        title: 'Our Engagement Day',
        date: '18 Jan 2024',
        description: 'Consectetur adipiscing elit. Fringilla at risus orci, tempus facilisi sed. Enim tortor, faucibus netus orci donec volutpat adipiscing. Sit condimentum elit convallis libero. Nunc in eu tellus ipsum placerat.',
    }

]

export function StorySection() {
    return <section className="wpo-story-section section-padding" id="story">
        <div className="container">
            <div className="wpo-section-title">
                <span>Our Story</span>
                <h2>How it Happened</h2>
            </div>
            <div className="wpo-story-wrap">
                {
                    Storys.map((story, st) => (
                        <div className="wpo-story-item" key={st}>
                            <div className="wpo-story-img-wrap">
                                <Zoom direction="up" duration={1000} triggerOnce={true}>
                                    <div className="wpo-story-img">
                                        <img src={story.sImg.src} alt=""/>
                                    </div>
                                </Zoom>
                                <div className="clip-shape">
                                    <svg viewBox="0 0 382 440" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M191 0L381.526 110V330L191 440L0.474411 330V110L191 0Z"/>
                                    </svg>
                                </div>
                                <div className="wpo-img-shape">
                                    <img src={story.shape.src} alt=""/>
                                </div>
                            </div>
                            <div className="wpo-story-content">
                                <div className="wpo-story-content-inner">
                                    <span>{story.date}</span>
                                    <h2>{story.title}</h2>
                                    <p>{story.description}</p>
                                </div>
                            </div>
                        </div>
                    ))

                }
            </div>
        </div>
        {/* end container */}
        <div className="flower-shape-1">
            <img src={bshape1} alt=""/>
        </div>
        <div className="flower-shape-2">
            <img src={bshape2} alt=""/>
        </div>
        <div className="flower-shape-3">
            <img src={bshape3} alt=""/>
        </div>
        <div className="flower-shape-4">
            <img src={bshape4} alt=""/>
        </div>
    </section>;
}