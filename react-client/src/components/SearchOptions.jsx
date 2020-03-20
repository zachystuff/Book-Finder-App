import React from 'react';

import checkboxes from './checkboxes.js';
import Checkbox from './Checkbox.jsx';

const SearchOptions = (props) => (
  <div>
    {
      checkboxes.map(item => (
        <label key={item.key}>
          {item.name}
          <Checkbox
            name={item.name}
            checked={props.checkedItems.get(item.name)}
            onChange={props.handleChangeCheck}
          />
        </label>
      ))
    }
  </div>
)

export default SearchOptions;