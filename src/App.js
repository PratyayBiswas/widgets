import React from 'react';
// import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';


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
  return(
    <div className="container">
      {/* <Accordion items={items}/> */}
      {/* <Search /> */}
      <Dropdown options={options} />
    </div>
  );
};
// this is branch b1