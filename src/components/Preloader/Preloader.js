import React from 'react'
import './Preloader.css'

const Preloader = ({isPreloader}) => {
    return (
        <div className={`preloader ${isPreloader || 'preloader_invisibility'}`}>
            <div className="preloader__container">
                <span className="preloader__round"></span>
            </div>
        </div>
    )
};

export default Preloader
