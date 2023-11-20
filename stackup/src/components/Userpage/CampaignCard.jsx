import React from 'react'
import "./CampaignCard.css"
function CampaignCard(props) {
    return (
        <div>
            <div className="card">
                <div className="thumbnail"><img src={props.thumbnail} alt="campaign-img" /></div>
                <div className="content">
                    <div className="campaign-tile"><h1>{props.title}</h1></div>
                    <div className="campaign-duration">{props.duration}</div>
                    <div>
                        <div className="rewardpool">  ${props.rewardpool}  Reward pool</div>
                        <div className="No-quest"><li>{props.No_quest} Quests</li></div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default CampaignCard