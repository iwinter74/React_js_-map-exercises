import React, { Component } from 'react';

class Day extends Component {
    state = {  }
    render() { 
        return ( 
            <figure>
                <h1>{this.props.day}</h1>
                <img src={this.props.url} alt="" />
                <figcaption><span>{`${this.props.tempAv} °C`}</span><span className="blue">{`${this.props.tempMin} °C`}</span></figcaption>
           </figure>
         );
    }
}
 
export default Day;