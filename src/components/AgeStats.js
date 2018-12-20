import React, { Component } from 'react';
import pic from '../assets/jun.jpg';
import './App.css';


class AgeStats extends Component {
    timesince(date) {
        let today = new Date().getTime();
        let sinceDate = new Date(date).getTime();
        let difference = Math.abs(today - sinceDate);
        // const yrs = Math.floor(difference/31536000000 );
        let days = Math.floor(difference / (1000*3600*24));
        let yrs = Math.floor(days / 365);
        days -= yrs * 365;
        let months = Math.floor(days / 31);
        days -= months * 31;
 

        return `${yrs} years, ${months} months, and ${days} days.`;
    }

    render() {
        return (
            <div>
                <h3>{this.props.date}</h3>
                <h4>Congrats on {this.timesince(this.props.date)}</h4>
                <img src={pic} alt="jun" className="pop-up-pic" />
            </div>
        )
    }
}
export default AgeStats;