import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'

const About = ({ setPlayState }) => {
    return (
        <div className='about'>
            <div className="about-left">
                <img src={about_img} alt="" className='about-img' />
                <img src={play_icon} alt="" className='play-icon'
                    onClick={() => { setPlayState(true) }} />
            </div>
            <div className="about-right">
                <h3>ABOUT UNIVERSITY</h3>
                <h2>Nurturing Tomorrow's Leaders Today</h2>
                <p>The dream of its founder, Sri M. Anantha Ramudu,
                    took shape in 2008 in the form of Anantha Lakshmi
                    Institute of Technology & Sciences. It is located in the scenic
                    and Pleasant locality of Ananthapur and is ideally located on a
                    sprawling 54 acres campus on Ananthapur - Chennai highway near
                    Itikalapalli, about 10 km away from Anantapur. ALITS, originated
                    under the patronage of Anantha Lakshmi Educational Society under
                    the hands-on leadership of Sri. M. Anantha Ramudu. ALITS is governed
                    by a progressive management that never rests on laurels and has been
                    striving conscientiously to develop it as one of the best centres of
                    Academic Excellence in India. The Institution’s profile is firmly based
                    on strategies and action plans that match shifting demands of the nation
                    and the student fraternity. It has always made its presence felt in
                    the educational arena through its accomplishments. A huge campus
                    amidst the lush green fields, a vibrant population of over 1600 students
                    and over 130 teaching faculty has made ALITS a landmark
                    in the academic excellence.</p>
                
            </div>
        </div>
    )
}

export default About