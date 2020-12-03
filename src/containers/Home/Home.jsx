import React, { Component } from 'react'
import './Home.scss'

export default class Home extends Component {

    clickProfile(){
        this.props.history.push('/profile')
    }
    render() {
        return (
            <div className="padre marginTop5">
                <div className="mainContainer">
                    <div className="headerHome marginTop4">

                    </div>

                    <div className="bodyHome marginTop4">
                        <div className="division1 card marginLeft2"></div>
                        <div className="division2 marginLeft2"></div>
                        
                    </div>

                    <button onClick={() => this.clickProfile()}>PROFILE</button>
                </div>
            </div>
        )
    }
}
