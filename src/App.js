import React from "react";

import Weather from "./components/Weather";

import { Bar } from "react-chartjs-2";
import Places from "./components/Places";
import './App.css'

const API_KEY = "4b5126dfda5fcb96fcbafc4f132f73bc";

class App extends React.Component {
  // constructor()
  // {
  //   super()
  // }
  state = {
    temperature1: undefined,
    temperature2: undefined,
    temperature3: undefined,
    temperature4: undefined,
    temperature5: undefined,
    city: undefined,
    humidity: undefined,
    error: undefined,
    chartData_temp:{},
    chartData_humid:{}
  }
  // omponentWillMount(){
  //   this.getChartData();
  // }

  // getChartData(){
  //   // Ajax calls here
  //   this.setState({
  //     chartData : {
  //       labels: ["Day1","Day2","Day3","Day4","Day5"],
  //       datasets:[{
  //           label: 'Temperature',
  //           data:[
  //             this.state.temperature1,
  //             this.state.temperature2,
  //             this.state.temperature3,
  //             this.state.temperature4,
  //             this.state.temperature5

  //           ]
  //       }
  //       ],
  //       backgroundColor:[
  //           'rgba(255, 99, 132, 0.6)',
  //     'rgba(54, 162, 235, 0.6)',
  //     'rgba(255, 206, 86, 0.6)',
  //     'rgba(75, 192, 192, 0.6)',
  //     'rgba(153, 102, 255, 0.6)'

  //       ]
  //   }
  //   });
  // }
  getWeather = async (city_name) => {
    // e.preventDefault();
    const city = city_name;
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
    const data = await api_call.json();
    const api_call2 = await fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`);
    const data2 = await api_call2.json();
    console.log(data2)
  
    if (city) {
      this.setState({
        temperature1: data2.list[0].main.temp,
        temperature2: data2.list[8].main.temp,
        temperature3: data2.list[16].main.temp,
        temperature4: data2.list[24].main.temp,
        temperature5: data2.list[32].main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data2.list[0].main.humidity,
        error: "",
        chartData_temp : {
          labels: ["Day1","Day2","Day3","Day4","Day5"],
          datasets:[{
              label: 'Temperature',
              data:[
                // 1,2,3,4,5
                data2.list[0].main.temp,
                data2.list[8].main.temp,
                data2.list[16].main.temp,
                data2.list[24].main.temp,
                data2.list[32].main.temp
              ],
              
              backgroundColor:[
                'rgba(255, 99, 132, 0.6)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(255, 206, 86, 0.6)',
          'rgba(75, 192, 192, 0.6)',
          'rgba(153, 102, 255, 0.6)'
              ]
    
            
          }
          ]
          
      },
      chartData_humid:{
        labels: ["Day1","Day2","Day3","Day4","Day5"],
          datasets:[{
              label: 'Humidity',
              data:[
                // 1,2,3,4,5
                data2.list[0].main.humidity,
                data2.list[8].main.humidity,
                data2.list[16].main.humidity,
                data2.list[24].main.humidity,
                data2.list[32].main.humidity,
              ],
              backgroundColor:[
                'rgba(255, 99, 132, 0.6)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(255, 206, 86, 0.6)',
          'rgba(75, 192, 192, 0.6)',
          'rgba(153, 102, 255, 0.6)'
    
            ]
          }
          ]
          
      }
      });
    } 
    else {
      this.setState({
        temperature1: undefined,
    temperature2: undefined,
    temperature3: undefined,
    temperature4: undefined,
    temperature5: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        error: "Please enter correct values."
      });
    }
    
  }
  //  data_chart = [
  //   {
  //     label: "Temperature Variation",
  //     data: [{ x: 1, y: this.state.temperature1 }, { x: 2, y: this.state.temperature2 }, { x: 3, y: this.state.temperature3 }, { x: 4, y: this.state.temperature4 }]
  //   },
  //   {
  //     label: "Series 2",
  //     data: [{ x: 1, y: 10 }, { x: 2, y: 10 }, { x: 3, y: 10 }]
  //   },
  //   {
  //     label: "Series 3",
  //     data: [{ x: 1, y: 10 }, { x: 2, y: 10 }, { x: 3, y: 10 }]
  //   }
  // ];
  render() {
    return (
      <div className="App-header">
        <h1>Weather App</h1>
                  <Places getWeather={this.getWeather}/>
                  {/* <City getWeather={this.getWeather} /> */}
                  
                  <Weather 
                    temperature1={this.state.temperature1} 
                    temperature2={this.state.temperature2}
                    temperature3={this.state.temperature3}
                    temperature4={this.state.temperature4}
                    temperature5={this.state.temperature5}   
                    humidity={this.state.humidity}
                    city={this.state.city}
                    country={this.state.country}
                    error={this.state.error}
                  />
                  {/* <p>{this.state.temperature1} {this.state.temperature2} {this.state.temperature3} {this.state.temperature4} {this.state.temperature5}</p> */}
                  {this.state.chartData_temp&&this.state.temperature1&&
                    <Bar 
                    data= {this.state.chartData_temp}
                    width={50}
                    height={20}
                    options={{
                      maintainAspectRatio: true,
                      title:{
                        display: true,
                        text: `Temperature Variation in ${this.state.city}`
                      },
                      legend:{
                        display:true,
                        position: "right"
      
                      }
                    }}
                    />
                  }
                  <br />
                  <br />
                  {this.state.chartData_humid&&this.state.humidity&&
                    <Bar 
                    data= {this.state.chartData_humid}
                    width={50}
                    height={20}
                    options={{
                      maintainAspectRatio: true,
                      title:{
                        display: true,
                        text: `Humidity Variation in ${this.state.city}`
                      },
                      legend:{
                        display:true,
                        position: "right"
      
                      }
                    }}
                    />
                  }
        </div>
                
    );
  }
};

export default App;