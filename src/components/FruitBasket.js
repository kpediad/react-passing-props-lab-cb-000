import React  from 'react';

import Filter from './Filter';
import FilteredFruitList from './FilteredFruitList.js';

const FruitBasket = props =>
      <div className="fruit-basket">
        <Filter handleChange={this.props.handleFilterChange} filters={this.props.filters}/>
        <FilteredFruitList fruits={this.props.fruits} />
      </div>;

export default FruitBasket;
