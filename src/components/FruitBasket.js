import React  from 'react';

import Filter from './Filter';
import FilteredFruitList from './FilteredFruitList.js';

const FruitBasket = props =>
      <div className="fruit-basket">
        <Filter handleChange={props.handleFilterChange} filters={props.filters}/>
        <FilteredFruitList fruits={props.fruits} />
      </div>;

export default FruitBasket;
