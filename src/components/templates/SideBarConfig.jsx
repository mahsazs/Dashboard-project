import React from 'react'
import DashboardIcon from '@/assets/icons/home.png'
import PagesIcon from '../../assets/icons/layers.png'
import AuthenticationIcon from '../../assets/icons/lock.png'
import LayoutsIcon from '../../assets/icons/Layout.png'
import TablesIcon from '../../assets/icons/table.png'

export const routes =[
    {
        icon: <img src={DashboardIcon} className='w-[16px] h-[16px] mr-2'/> ,
        url:'',
        title:'Dashboard',
        Element:'',
        childs:[
            {
                title:'projects',
                url:'/',
                Element:''
            },
        ],
    },
    {
        icon: <img src={PagesIcon} className='w-[16px] h-[16px] mr-2'/>,
        url:'',
        title:'Pages',
        Element:'',
        childs:[
            {
                title:'Profile',
                url:'',
                Element:''
            
            },
            {
                title:'Accounts',
                url:"/generalSettings",
                Element:''
            
            },
            {
                title:'Invoice',
                url:'',
                Element:''
                
            },
        ],
    },
    {
        icon: <img src={AuthenticationIcon} className='w-[16px] h-[16px] mr-2'/>,
        url:'',
        title:'Authentications',
        Element:'',
    },
    {
        icon: <img src={LayoutsIcon} className='w-[16px] h-[16px] mr-2'/>,
        url:'',
        title:'Layouts',
        Element:'',
    },
    {
        icon: <img src={PagesIcon}className='w-[16px] h-[16px] mr-2' />,
        url:'',
        title:'Cards',
        Element:'',
    },
    {
        icon: <img src={TablesIcon} className='w-[16px] h-[16px] mr-2'/>,
        url:'',
        title:'Tables',
        Element:'',
    },
];

