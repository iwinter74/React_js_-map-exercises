import React, { Component } from 'react';
import weather from './weather';
import Day from './Day';


class Week extends Component {
    state = {  }
    render() { 
        return ( 
            <section className="week">
                {weather.map((elt,i) =>
                    <Day
                        key={i}
                        day={elt.day}
                        url={elt.url}
                        tempMin={elt.tempMin}
                        tempAv={elt.tempAv}
                        
                    />
                 
                    
                    
                    )}
            </section>
         );
    }
}
 
export default Week;