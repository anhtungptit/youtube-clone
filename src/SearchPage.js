import React from 'react'
import "./SearchPage.css"
import TuneIcon from '@material-ui/icons/Tune';
import ChannelRow from './ChannelRow'
import VideoRow from './VideoRow'

function SearchPage() {
    return (
        <div className="searchPage">
            <div className="searchPage__filter">
                <TuneIcon />
                <h2>Filter</h2>
            </div>
            <hr/>
            <ChannelRow 
                image="https://nguoinoitieng.tv/images/nnt/100/0/beoj.jpg"
                channel="Ba rọi béo"
                verified
                subs="1390K"
                videos="382" 
                description="Xem stream vui vẻ nha những người anh em !!! ►Link mua bán phụ kiện Pad chuột, Ốp lưng Thầy Ba v.v.... - https://forms.gle/iE1QvCu8qoC1Ch9v5 ►https://invite.blitz.gg..." 
            />
            <hr/>
            <h4>Lastest from Ba rọi béo</h4>
            <VideoRow 
                image="https://asics-shoesoutlet.com/wp-content/uploads/2019/09/ba-roi-beo-la-ai-2.jpg"
                title="TRUNG REACTION | Top 5 Cách Để DAMWON thắng được SUNING của SOFM | meGAME eSports"
                channel="Ba rọi béo"
                subs="1390K"
                views="112.308"
                timestamp="4 days ago"
                description="►Đăng kí theo dõi Anh Ba nhé : http://metub.net/BaRoiBeo"
            />
            <VideoRow 
                image="https://asics-shoesoutlet.com/wp-content/uploads/2019/09/ba-roi-beo-la-ai-2.jpg"
                title="TRUNG REACTION | Top 5 Cách Để DAMWON thắng được SUNING của SOFM | meGAME eSports"
                channel="Ba rọi béo"
                subs="1390K"
                views="112.308"
                timestamp="4 days ago"
                description="►Đăng kí theo dõi Anh Ba nhé : http://metub.net/BaRoiBeo"
            />
            <VideoRow 
                image="https://asics-shoesoutlet.com/wp-content/uploads/2019/09/ba-roi-beo-la-ai-2.jpg"
                title="TRUNG REACTION | Top 5 Cách Để DAMWON thắng được SUNING của SOFM | meGAME eSports"
                channel="Ba rọi béo"
                subs="1390K"
                views="112.308"
                timestamp="4 days ago"
                description="►Đăng kí theo dõi Anh Ba nhé : http://metub.net/BaRoiBeo"
            />
            <VideoRow 
                image="https://asics-shoesoutlet.com/wp-content/uploads/2019/09/ba-roi-beo-la-ai-2.jpg"
                title="TRUNG REACTION | Top 5 Cách Để DAMWON thắng được SUNING của SOFM | meGAME eSports"
                channel="Ba rọi béo"
                subs="1390K"
                views="112.308"
                timestamp="4 days ago"
                description="►Đăng kí theo dõi Anh Ba nhé : http://metub.net/BaRoiBeo"
            />
        </div>
    )
}

export default SearchPage
