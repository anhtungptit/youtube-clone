import { Avatar } from '@material-ui/core'
import React from 'react'
import "./ChannelRow.css"
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';

function ChannelRow({image, channel, verified, subs, videos, description}) {
    return (
        <div className="channelRow">
            <Avatar className="channelRow__logo" src={image}/>
            <div className="channelRow__text">
                <h4>
                    {channel}{verified && <VerifiedUserIcon />}
                </h4>
                <p>
                    {subs} subcribers • {videos} videos
                </p>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default ChannelRow
