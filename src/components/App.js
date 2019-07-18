import React, { Component }  from 'react';

import FruitBasket from './FruitBasket';

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      filters: [],
      fruit: [],
      currentFilter: null
    };
  }

  componentWillMount() {
    this.fetchFilters();
  }

  componentDidMount() {
    fetch('/api/fruit')
      .then(response => response.json())
      .then(items => this.setState({ fruit }));
  }

  fetchFilters = () => {
    fetch('/api/fruit_types')
      .then(response => response.json())
      .then(filters => this.setState({ filters }));
  }

  handleFilterChange = event => {
    console.log('new filter: ', event.target.value);
    this.setState({ currentFilter: event.target.value });
  }

  render() {
    const list = !this.state.currentFilter || this.state.currentFilter === 'all' ? this.state.fruit : this.state.fruit.filter(i => i.fruit_type === this.state.currentFilter);
    return (
      <FruitBasket handleFilterChange={this.handleFilterChange} filters={this.state.filters} fruits={list}/>
    );
  }
}
