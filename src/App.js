import React, { useState } from 'react';
// import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';


const items = [
  {
    title: "What is React?",
    content: "React is front end javascript framework."
  },
  {
    title: "Why is React?",
    content: "React is a favourite JS library among enginners"
  },
  {
    title: "How do you use React?",
    content: "You use React by creating components"
  },
];

const options = [
  {
    label: "Red",
    value: "red"
  },
  {
    label: "Blue",
    value: "blue"
  },
  {
    label: "Green",
    value: "green"
  }
];

export default () => {

  const [selected, setSelected] = useState(options[0]);
  const [showDropdown, setShowDropdown] = useState(true);

  return (
    <div className="container">
      {/* <Accordion items={items}/> */}
      {/* <Search /> */}
      {/* <button onClick={() => setShowDropdown(!showDropdown)}>Toggle Dropdown</button>
      {showDropdown ? (
        <Dropdown
          selected={selected}
          onSelectedChange={setSelected}
          options={options}
        />
      ) : null} */}
      <Translate />
      {/* <div style={{ color: `${selected.value}`}}>The coloured TEXT!!!</div> */}
    </div>
  );
};
// this is branch b1