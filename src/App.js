import logo from './logo.svg';
import './App.css';
import React from 'react';
import Welcome from './components/Welcome';
import Student from './components/Student';

const name = 'Roony Silver';

//Create Object
const user = {
  firstName: 'Sơn',
  lastName: 'Trần'
}


function formatName(user) 
{
  return user.firstName + ' ' + user.lastName;
}

//Create Function
function sayHi(name) 
{
  if(name) {
    return <p>Xin chào, {name} !</p>
  } else {
    return <p>Xin chào bạn !</p>
  }
}

//JSX object
const object = React.createElement(
  "p",
  {className: "welcome"},
  "Please take part in this community!!!"
);

const element = <h1>Welcome {sayHi(name)} to {formatName(user)} House</h1>

//Call all component from this fuction
function App() {
  return (
    <div className="App">
      <Welcome/>
      {element}
      <p className="welcome">Please take part in this community!!!</p>
      <Student/>
    </div>
  );
}

//Export Function App
export default App;
