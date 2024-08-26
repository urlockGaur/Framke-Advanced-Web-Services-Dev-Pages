import React, { Component } from 'react';
import Country from './components/Country';
import Header from './components/Header';

class App extends Component {
  state = {
    countries: [
      { id: 1, country: 'United States', gold: 3, silver: 2, bronze: 3 },
      { id: 2, country: 'China', gold: 2, silver: 1, bronze: 2 },
      { id: 3, country: 'Germany', gold: 1, silver: 1, bronze: 2 },
    ]
  };


  getOverallMedalCount = () => {
    return this.state.countries.reduce((a, country) => {
      return a + country['gold'] + country['silver'] + country['bronze']
    }, 0);
  };

  getCountryTotalMedalCount = (country) => {
    return ['gold', 'silver', 'bronze'].reduce((a, medal) => a + country[medal], 0)
  }
  handleIncrement = (countryId, medalType) => {
    const countries = [...this.state.countries]; // Create a shallow copy of the countries array
    const country = countries.find(c => c.id === countryId); // Find the country by ID
    country[medalType] += 1; // Increment the gold count
    this.setState({ countries }); // Update the state with the modified countries array
  };

  handleDecrement = (countryId, medalType) => {
    const countries = [...this.state.countries]; // Create a shallow copy of the countries array
    const country = countries.find(c => c.id === countryId); // Find the country by ID
    if (country[medalType] > 0) {
      country[medalType] -= 1; 
    }
    this.setState({ countries }) // Update the state with the modified countries array
  };

  render() {
    const totalOverallMedals = this.getOverallMedalCount();
    return (
      <div className="App">
        <Header totalOverallMedals={totalOverallMedals}/>
        <div className='countryCards'>
          { this.state.countries.map((country) => (
            <Country
              key={ country.id }
              country={ country }
              onIncrement={ this.handleIncrement }
              onDecrement={ this.handleDecrement }
              totalMedals={this.getCountryTotalMedalCount(country)}
            />
          ))}
        </div>
      </div>
    );
  }
}


export default App;
