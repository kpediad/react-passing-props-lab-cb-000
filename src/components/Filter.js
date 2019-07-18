import React from 'react';

const Filter = props =>
      <select onChange={this.props.handleChange} defaultValue='all'>
        <option value='all'>All</option>
        {this.props.filters.map(filter =>
          <option key={filter} value={filter}>{filter}</option>
        )}
      </select>;

export default Filter;
