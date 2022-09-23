import React, { useState } from "react"
import { Carousel } from "antd"
import image1 from '@src/assets/image1.jpg'

export function HomeSwiper() {
    let [list] = useState([
        image1, image1, image1, image1,image1
    ]);
    let onChange = (current:number) => {
        console.log(current)
    }
    let imageList = list.map((element:string, index:number) => {
        return <div className="home-swiper-index" key={index}>
            <img src={element} alt='轮播图' />
        </div>
    });
    return (
        <>
        <Carousel afterChange={onChange} autoplay={true}>
            {imageList}
        </Carousel>
        </>
    )
}