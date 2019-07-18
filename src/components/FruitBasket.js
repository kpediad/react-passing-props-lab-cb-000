import React  from 'react';

import Filter from './Filter';
import FilteredFruitList from './FilteredFruitList.js';

const FruitBasket = props =>
      <div className="fruit-basket">
        <Filter handleChange={this.props.handleFilterChange} filters={this.props.filters}/>
        <FilteredFruitList fruits={this.props.fruits} filter={this.props.selectedFilter} />
      </div>;

export default FruitBasket;
