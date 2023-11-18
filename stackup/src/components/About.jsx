import React from 'react'

function About() {
    return (
        <div>
            <div className="container">
                <div className="image-card"></div>
                <div className="content">
                    <div className="content-header">
                        <div className="order"><h1>1</h1></div>
                        <div><h2>Learn</h2></div>
                        <div className="icon">icon</div>
                    </div>
                    <div className="content-text">
                        <p>
                            Kick-start your learning journey with our Learn courses on the latest and hottest development technologies. You’ll be able to ramp up with ample skills to tackle our Campaigns and Quests in Earn.

                            Some languages that we have covered in our courses so far are Python, Rust, Golang.
                        </p>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="content">
                    <div className="content-header">
                        <div className="order"><h1>2</h1></div>
                        <div><h2>Earn</h2></div>
                        <div className="icon">icon</div>
                    </div>
                    <div className="content-text">
                        <p>
                            Participate in our Campaigns and Quests - where you get to put your skills to the test and enhance your dev knowledge!

                            If your Quest submission meets the deliverable requirements, you may be rewarded money (in USD) that you can withdraw and use for your own purposes - be it learning, saving, or even spending on that next server hosting subscription.
                        </p>
                    </div>
                    <button className='btn'>Veiw Campaigns</button>
                </div>
                <div className="image-card"></div>

            </div>
            <div className="container">
                <div className="image-card"></div>
                <div className="content">
                    <div className="content-header">
                        <div className="order"><h1>3</h1></div>
                        <div><h2>Connects</h2></div>
                        <div className="icon">icon</div>
                    </div>
                    <div className="content-text">
                        <p>
                            Our users get to meet like-minded people and network with a diverse group of developers, each with different experiences and stories.

                            Get help from fellow developers if you are stuck while coding, or share your new skills and expertise.
                        </p>
                    </div>
                    <button className='btn'>Join Discord</button>

                </div>
            </div>
            <div className="container">
                <div className="content">
                    <div className="content-header">
                        <div className="order"><h1>4</h1></div>
                        <div><h2>Events</h2></div>
                        <div className="icon">icon</div>
                    </div>
                    <div className="content-text">
                        <p>
                            We host events like seminars, sharings, panel talks and workshops that are exclusive to players on StackUp.

                            You get to meet and network with knowledgable developers who will share their expertise, tips and best practices (or even about new technologies).
                        </p>
                    </div>
                </div>
                <div className="image-card"></div>

            </div>
            <div className="container">
                <div className="image-card"></div>
                <div className="content">
                    <div className="content-header">
                        <div className="order"><h1>5</h1></div>
                        <div><h2>Level Up</h2></div>
                        <div className="icon">icon</div>
                    </div>
                    <div className="content-text">
                        <p>
                            Gain experience points by participating in all the activities above! More rewards will be available to you as you level up during your time on StackUp.
                        </p>
                    </div>
                </div>
            </div>
            <div className="highlights">
                <div className="highlight-header">
                    <h1>Highlights</h1>
                    <p>Check out some content we have now!
                    </p>
                </div>
                <div className="highlight-content">
                    <div className="content">
                        <button className="btn-link">Learn</button>
                        <h3>Web3 Developement</h3>
                        <p>Web3 development is the future of the internet. With the rise of blockchain technology and dApps, the demand for Web3 developers is only going to increase. Not only is it a highly sought-after skill in the job market, but it also... </p>

                    </div>
                    <div className="content">
                        <button className="btn-link">Earn</button>
                        <h3>Navigating Web3 with DeFiChain</h3>
                        <h4>StackUp</h4>
                        <div className="date">17 Nov 2023 - 27 Nov 2023</div>
                        <div>$5000 Reward pool
                            <li>5 Quests</li>
                        </div>

                    </div>
                </div>
            </div>


        </div>
    )
}

export default About