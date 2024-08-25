import React, { Component } from 'react';
import Country from './components/Country';

class App extends Component {
  state = {
    countries: [
      { id: 1, country: 'United States', gold: 9 },
      { id: 2, country: 'China', gold: 5 },
      { id: 3, country: 'Germany', gold: 2 },
    ]
  };

  handleIncrement = (countryId) => {
    const countries = [...this.state.countries]; // Create a shallow copy of the countries array
    const country = countries.find(c => c.id === countryId); // Find the country by ID
    country.gold += 1; // Increment the gold count
    this.setState({ countries }); // Update the state with the modified countries array
  };

  handleDecrement = (countryId) => {
    const countries = [...this.state.countries]; // Create a shallow copy of the countries array
    const country = countries.find(c => c.id === countryId); // Find the country by ID
    if (country.gold > 0) {
      country.gold -= 1; 
    }
    this.setState({ countries }) // Update the state with the modified countries array
  };

  render() {
    return (
      <div className="App">
        <header className="App-Header">
         
        </header>
        { this.state.countries.map((country) => (
          <Country
            key={ country.id }
            country={ country }
            onIncrement={ this.handleIncrement }
            onDecrement={ this.handleDecrement }
          />
        ))}
      </div>
    );
  }
}


export default App;
