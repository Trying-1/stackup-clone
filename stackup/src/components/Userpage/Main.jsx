import React from 'react'
import Greetuser from './Greetuser'
import CampaignCard from './CampaignCard'
import "./Main.css"
function Main() {
    return (
        <div className='userpage-main'>
            <div className="leftside">
                <Greetuser />
                <div className="latest-update">
                    <div className="title">🧳🪄✨we are here</div>
                    <CampaignCard
                        title="circle"
                        thumbnail="https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2F1ba6ce27946d04daf60a668665de63d2.cdn.bubble.io%2Ff1699320356868x703607882582127200%2Fcampaign_banner.png?w=256&h=128&auto=compress&dpr=1&fit=max"
                        duration="12 nov 2023 - 22 nov 2023"
                        rewardpool={2000}
                        No_quest={5} />
                    <CampaignCard
                        title="web3"
                        thumbnail="https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2F1ba6ce27946d04daf60a668665de63d2.cdn.bubble.io%2Ff1698244715465x826042786275194500%2FDefichain%2520-%2520StackUp%2520Platform.png?w=256&h=128&auto=compress&dpr=1&fit=max"
                        duration="24 nov 2023 - 04 Dec 2023"
                        rewardpool={5000}
                        No_quest={4} />
                </div>
            </div>
            <div className="rightside">
                <div className="discord">Connect with Discord</div>
                <div className="updates">
                    <div className="update-title"><h3>📆whats happening?</h3></div>
                    <div className="list">
                        <li>Earn</li>
                        <li>Learn</li>
                        <li>Community</li>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main