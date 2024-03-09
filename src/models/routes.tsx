import {Hero} from "@/components/hero";
import {CoupleSection} from "@/components/couple";
import {StorySection} from "@/components/story";
import {PortfolioSection} from "@/components/portfolio";
import {EventSection} from "@/components/event";

export const sections = [
    {
        id: 'hero',
        component: <Hero/>,
        title: 'Home'
    },
    {
        id: 'couple',
        component: <CoupleSection/>,
        title: 'Cặp đôi'
    },
    // {
    //     id: 'story',
    //     component: <StorySection/>,
    //     title: 'Chuyện tình yêu'
    // },
    {
        id: 'event',
        component: <EventSection/>,
        title: 'Sự kiện'
    },
    {
        id: 'gallery',
        component: <PortfolioSection/>,
        title: 'Album'
    },
]