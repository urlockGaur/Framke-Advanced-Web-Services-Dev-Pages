import React, { Component } from 'react';
import Country from './components/Country';
import Header from './components/Header';
import NewCountry from './components/NewCountry';

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

  handleAdd = (country, gold, silver, bronze) => {
    const { countries } = this.state;
    const id = countries.length === 0 ? 1 : Math.max(...countries.map(country => country.id)) + 1;
    const mutableWords = countries.concat({ id: id, country: country, gold: gold, silver: silver, bronze: bronze });
    this.setState({ countries:mutableWords });
  }

  handleDelete = (countryId) => {
    const countries = this.state.countries.filter(w => w.id !== countryId);
    this.setState({ countries:countries });
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
              onDelete={ this.handleDelete }
            />
            
          ))}
        </div>
        <NewCountry onAdd={ this.handleAdd }/>
      </div>
    );
  }
}


export default App;
