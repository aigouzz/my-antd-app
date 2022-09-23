import React, { useEffect, useState } from 'react'
import {Input, Dropdown, Menu, message } from 'antd'
import { HomeOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'
import { debounce } from '../../util'
import { headerSearch } from '../../api/api'

const {Search} = Input;

export function Header() {
    let redirectOther = ():any => {
        
    }
    let [loading, setLoading] = useState(false);
    let [isOpenMenu, setIsOpenMenu] = useState(false);
    let [items, setItems] = useState([]);
    let Menus = (
        <Menu onClick={redirectOther} items={items}></Menu>
    );
    
    const search = debounce((value:string, event:any) => {
        if(value) {
            setLoading(true);
            headerSearch({
                value,
            }).then((result:any) => {
                setItems(result.list);
                setLoading(false);
                setIsOpenMenu(true);
            }, (error:any) => {
                message.error(error);
            });
        } else {
            message.warn('没有输入您的搜索哦～');
        }
    }, 300);
    useEffect(() => {
        let hideMenu = () => setIsOpenMenu(false);
        window.addEventListener('click', hideMenu);
        return () => {
            window.removeEventListener('click', hideMenu)
        }
    }, []);
    return (
        <div className='header-module'>
            <Link to='/list'>
                <HomeOutlined twoToneColor={'red'} className='header-module-icon'></HomeOutlined>
            </Link>
            <div className='header-right'>
                <Dropdown overlay={Menus} open={isOpenMenu}>
                    <Search placeholder='请输入搜索文案' loading={loading} enterButton='搜索'
                    onSearch={search}></Search>
                </Dropdown>
            </div>
        </div>
    );
}