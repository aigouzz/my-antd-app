import { Header } from '@src/components/Header'
import { BetterScroll } from '@src/components/Home/BetterScroll'
import { HomeSwiper } from '@src/components/Home/HomeSwiper';

export function Home() {
    
    return (
        <>
        <Header></Header>
        <div className='home-wrap'>
            <HomeSwiper></HomeSwiper>
            <BetterScroll></BetterScroll>
        </div>
        </>
    );
}