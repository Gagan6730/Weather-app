import React, {Component} from "react"
import GoogleMapLoader from "react-google-maps-loader"
import GooglePlacesSuggest from "react-google-places-suggest"

const API_KEY = "AIzaSyDoQCJtOSj-V3nS-rDRERg_ItsforUV_D0" 
 
 class Places extends Component {
    state = {
        search: "",
        value: "",
         style1 : {
            display: 'inline-block',

          },
          style2:{
                // backgroundColor: '#282c34',
                textColor:'White',
                fontSize:'20px',
                // fontColor:'White'
                
          },
          button_style:{
            fontSize:'20px',
            display: 'inline-block',
          }

      }
    
      handleInputChange(e) {
        this.setState({search: e.target.value, value: e.target.value})
      }
    
      handleSelectSuggest(suggest) {
        console.log(suggest)
        this.setState({search: "", value: suggest.formatted_address})
      }
      
      render() {
        const {search, value} = this.state
        return (
            <div >
          <GoogleMapLoader 
            params={{
              key: API_KEY,
              libraries: "places,geocode",
            }}
            render={googleMaps =>
              googleMaps && (
                <div style={this.state.style1}>
                  <GooglePlacesSuggest
                    autocompletionRequest={{input: search}}
                    googleMaps={googleMaps}
                    onSelectSuggest={this.handleSelectSuggest.bind(this)}
                    
                  >
                    <input
                      type="text"
                      style={this.state.style2}
                      value={value}
                      placeholder="Search a location"
                      onChange={this.handleInputChange.bind(this)} 
                    />
                  </GooglePlacesSuggest>
                </div>
              )
            }
          />
          <button style={this.state.button_style}type="submit" onClick={()=>this.props.getWeather(this.state.value) }>Get Weather</button>
          </div>
        )
      }
}

export default Places;