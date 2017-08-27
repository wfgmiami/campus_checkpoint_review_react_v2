import React, { Component } from 'react';

// exporting the constructor function (dumb component).
// what is the parameter coming in here?
export default function AnimalSelect ({ submitAnimal, animals }) {
  return (
    <form>
      <label>Select an Animal: </label>
      <select onChange={(ev)=> submitAnimal(ev.target.value)}>
      {
        animals.map( animal => <option key={ animal }>{ animal }</option>)
      }
      </select>
    </form>
  );
};

