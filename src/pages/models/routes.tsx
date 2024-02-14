import {Hero} from "@/pages/components/hero";
import {CoupleSection} from "@/pages/components/couple";
import {StorySection} from "@/pages/components/story";
import {PortfolioSection} from "@/pages/components/portfolio";
import {EventSection} from "@/pages/components/event";

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
    {
        id: 'story',
        component: <StorySection/>,
        title: 'Chuyện tình yêu'
    },
    {
        id: 'gallery',
        component: <PortfolioSection/>,
        title: 'Album'
    },
    {
        id: 'event',
        component: <EventSection/>,
        title: 'Sự kiện'
    }
]