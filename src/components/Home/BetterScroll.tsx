import React, { useEffect, useState } from "react"
import BScroll, {PullDownRefresh} from 'better-scroll'
import { Button } from 'antd'

BScroll.use(PullDownRefresh);

function CreateChildren(props: any): any {
    let array: Array<string> = new Array(60).fill('爱不爱我');
    return array.map((item, index) => {
        return <li key={item + index}>
            <Button type='primary'>{props.title}</Button>
        </li>
    }
    )
}

export function BetterScroll() {
    let [title, setTitle] = useState('爱我呀');
    useEffect(() => {
        let bscroll = new BScroll('.bscroll-wrap', {
            bounce: true,
            pullDownRefresh: true,
            outOfBoundaryDampingFactor: 0.6
        });
        bscroll.on('pullingDown', () => {
            let changedTitle = String((Math.random()*60).toFixed(2));
            setTitle(changedTitle);
            console.log(changedTitle)
            bscroll.finishPullDown();
        });
    }, []);

    return (
        <>
        <div className='bscroll-wrap'>
            <ul>
                <CreateChildren title={title}></CreateChildren>
            </ul>
        </div>
        </>
    )
}