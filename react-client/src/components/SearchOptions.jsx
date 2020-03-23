import React from 'react';

import checkboxes from './checkboxes.js';
import Checkbox from './Checkbox.jsx';

const SearchOptions = (props) => (
  <div className="checkbox">
    <h3>Get verified news from any of these countries .. </h3>
    <div className="checkbox">
      {
        checkboxes.map(item => (
          <label key={item.key}>
            {item.label}
            <Checkbox
              name={item.key}
              checked={props.checkedItems.get(item.name)}
              onChange={props.handleChangeCheck}
            />
          </label>
        ))
      }
    </div>
  </div>
)

export default SearchOptions;