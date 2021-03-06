import React from 'react'
import "./VideoRow.css"

function VideoRow({image, title, channel, subs, views, timestamp, description}) {
    return (
        <div className="videoRow">
            <img src={image} alt=""/>
            <div className="videoRow__text">
                <h3>{title}</h3>
                <p className="videoRow__headLine">{channel} • <span className="videoRow__subs">{subs} Subcribers</span> • {views} views • {timestamp}</p>
                <p className="videoRow__description">{description}</p>
            </div>  
        </div>
    )
}

export default VideoRow
