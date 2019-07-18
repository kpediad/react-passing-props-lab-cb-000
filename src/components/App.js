import React, { Component }  from 'react';

import FruitBasket from './FruitBasket';

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      filters: [],
      items: [],
      selectedFilter: null
    };
  }

  componentWillMount() {
    this.fetchFilters();
  }

  componentDidMount() {
    fetch('/api/fruit')
      .then(response => response.json())
      .then(items => this.setState({ items }));
  }

  fetchFilters = () => {
    fetch('/api/fruit_types')
      .then(response => response.json())
      .then(filters => this.setState({ filters }));
  }

  handleFilterChange = event => {
    console.log('new filter: ', event.target.value);
    this.setState({ selectedFilter: event.target.value });
  }

  render() {
    const list = !this.state.selectedFilter || this.state.selectedFilter === 'all' ? this.state.items : this.state.items.filter(i => i.fruit_type === this.props.filter);
    return (
      <FruitBasket handleFilterChange={this.handleFilterChange} filters={this.state.filters} fruits={list}/>
    );
  }
}
