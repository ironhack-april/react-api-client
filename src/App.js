import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'


class App extends React.Component {

  state={
    allCountries:[],
    doggy:''
  }
  
  componentDidMount(){
    // Promise.all([
    //   axios.get(`http://206.189.7.127/countries`),
    //   axios.get(`http://localhost:3000`),
    //   axios.get(`http://192.168.125.100:5000`),
    //   axios.get(`https://dog.ceo/api/breeds/image/random`)
    // ]).then(responses=>{
    //   console.log(responses)
    //   this.setState({doggy: responses[3].data.message})
    // })
    axios.get(`http://206.189.7.127/countries`).then(allCountries=>{
      this.setState({allCountries:allCountries.data})
    })

    axios.get(`http://localhost:3000`).then(myData=>{
      console.log('from localhost', myData.data)
    })

    axios.get(`http://192.168.125.100:5000`).then(chrisData => {
      console.log('from chris', chrisData.data)
    })

    axios.get(`https://dog.ceo/api/breeds/image/random`).then(giffy=>{
        console.log('from giphy', giffy.data)
        this.setState({
          doggy:giffy.data.message
        })
    })

  }

  showCountries = () => {
    return this.state.allCountries.map(eachCountry=>{ 
      return <li>{eachCountry.name.common}</li>
    })
  }

  render() {
    
    return (
      <div className="App">
        React-Api
        <img src={this.state.doggy} />

        {this.showCountries()}

      </div>
    );
  }

}

export default App;
