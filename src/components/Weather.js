import React, {Component} from "react";

class Weather extends Component{
    
    
    render()
    {
        console.log(`${this.props.temperature1}  ${this.props.temperature2} ${this.props.temperature3} ${this.props.temperature4} ${this.props.temperature5}`)
        return(
<div className="weather__info">
	 {	
	 	this.props.city && this.props.country && <p className="weather__key"> Location: 
	 		<span className="weather__value"> { this.props.city }, { this.props.country }</span>
	 	</p> 
	 }
	 { 	
	 	this.props.temperature1 && <p className="weather__key"> Day1 temperature: 
	 		<span className="weather__value"> { this.props.temperature1 }	</span>
	 	</p> 
	 }
	 { 	
	 	this.props.temperature2 && <p className="weather__key"> Day2 temperature: 
	 		<span className="weather__value"> { this.props.temperature2 }	</span>
	 	</p> 
	 }
	 { 	
	 	this.props.temperature3 && <p className="weather__key"> Day3 temperature: 
	 		<span className="weather__value"> { this.props.temperature3 }	</span>
	 	</p> 
	 }
	 { 	
	 	this.props.temperature4 && <p className="weather__key"> Day4 temperature: 
	 		<span className="weather__value"> { this.props.temperature4 }	</span>
	 	</p> 
	 }
	 { 	
	 	this.props.temperature5 && <p className="weather__key"> Day5 temperature: 
	 		<span className="weather__value"> { this.props.temperature5 }	</span>
	 	</p> 
	 }
	 { 	
	 	this.props.humidity && <p className="weather__key"> Humidity: 
	 		<span className="weather__value"> { this.props.humidity } </span>
	 	</p> 
	 }
	 { 
	 	this.props.error && <p className="weather__error">{ this.props.error }</p>  
     }
     {/* {
         this.props.humidity && this.props.temperature1 &&
          this.props.temperature2 && this.props.temperature3 && this.props.temperature4 && 
          <Line 
            data= {this.state.data_chart}
          />
     } */}
	</div>
        )
	

    }
}

export default Weather;