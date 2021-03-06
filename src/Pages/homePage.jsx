import React from 'react'
import TopNav from '../components/topNav/topNav'
import HomeCaption from '../components/homeCaption/homeCaption'
import HomeBody from '../components/homeBody/homeBody'

import ButtonBig from '../components/buttonBig/buttonBig'

import { FooterThin, FooterWide } from '../components/footer/footer'

import './homePage.scss';

const HomePage = () => {
    return (
        <div>
            <div className='home__head'>
			    <TopNav />
                <HomeCaption />
            </div>
            <HomeBody />
            <div className='home__head_btn'>
                <ButtonBig  caption='get started today!' />
            </div>
            <FooterWide />
            <FooterThin />
        </div>
    )
}

export default HomePage
