import './App.css';
import styled from 'styled-components';
import React from 'react';

const Title = styled.h1`
font-size: 1em;
margin: 1em;
padding: 0.25em 1em;
border: 2px solid
palevioletred;
border-radius: 3px;
`;
const Zad5 = styled.h1`
margin-left:10px;
font-size: 1em;
margin: 1em;
background-color: blue;
`;

const ListaKontaktow = styled.h1`
font-size: 1em;
margin: 1em;
background-color: pink;
`;

const Kontakt = styled.h1`
font-size: 1em;
font-style: oblique;
margin: 2em;
background-color: violet;
`;

class AppHeader extends React.Component {
  render() {const {} =
  this.props
  return (<header>
    <nav>
      <ContactsList />
      <div>
        <button>Dodaj</button>
      </div>
    </nav>
  </header>
  );
}
}

class ContactItem extends React.Component {
  render() {const {login, name, department} =
  this.props
  return(
  <li>
  <div>
  <h2>{login}</h2>
  <h4>{name}</h4>
  <div>{department}</div>
  </div>
  </li>);
  } 
}

class Zad2 extends React.Component {
  render() {
 return <button onClick={this.onClickHandler}>Kliknij! 1</button>;
  }
  onClickHandler() { alert("Kliknięto!");
  }
 } 

 class Zad2v1 extends React.Component {
  render() {
 return <button onClick={this.onClickHandler}>Kliknij! 2</button>;
  }
  onClickHandler() { alert("Kliknięto w drugi guzik!");}
 } 
 
 class Zad2v2 extends React.Component {
  render() {
    return <button onClick={this.handleClick}>Kliknij! 3</button>;
  }
    handleClick() { 
    console.log('Kliknięto w guzik.');
 } 
}

class Counter extends React.Component {
  constructor() {
    super();
    this.state = {counter: 0 }; }
    increment() {
      this.setState({
     counter: this.state.counter + 1
      })
     }
     decrement() {
      this.setState({
     counter: this.state.counter - 1
      })
     }
          
 render() { return (
  <div>
  <button onClick={this.increment.bind(this)}>+</button>
  <output>{this.state.counter}</output>
  <button onClick={this.decrement.bind(this)}>-</button>
  </div>
  );
 }
}


class Counter2 extends React.Component {
  constructor(props) {
 super(props);
  this.onIncrease = this.onIncrease.bind(this);
  this.onDecrease = this.onDecrease.bind(this);
  }
  onIncrease(e) {
    this.props.onIncrease(this.props.counterIndex);
  } 
  onDecrease(e) {
    this.props.onIncrease(this.props.counterIndex);
  } 

  render() {
    return (
      <div>
      <button onClick={this.onIncrease}>+</button>
      <span>{this.props.count}</span>
      <button onClick={this.onDecrease}>-</button></div>
    );
  }
} 


 class ContactsList extends React.Component{
  render(){ const{} = 
  this.props 
  return (
    <ListaKontaktow>
      <ContactItem
        login="Kontakt1"
        name="Jarek"
        department="JavaScript Developer"
      />
      <ContactItem
        login="Kontak2"
        name="Marek"
        department="Human Resources"
      />
      <ContactItem
        login="Kontakt3"
        name="Czarek"
        department="QA"
      />
      <ContactItem
        login="Kontakt4"
        name="Natalia"
        department="Koć"
      />
    </ListaKontaktow>
  );
 }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.onIncreaseAll = this.onIncreaseAll.bind(this);
    this.increaseCounter = this.increaseCounter.bind(this);
    this.onDecreaseAll = this.onDecreaseAll.bind(this);
    this.decreaseCounter = this.decreaseCounter.bind(this);
    this.state = {
    counter1: 0, counter2: 0, counter3: 0 };
  }
  increaseCounter(counterIndex) { 
    const counter = `counter${counterIndex}`;
    this.setState({ [counter]: this.state[counter] + 1 });
  }
  decreaseCounter(counterIndex) { 
    const counter = `counter${counterIndex}`;
    this.setState({ [counter]: this.state[counter] - 1 });
  }
  onIncreaseAll() { 
    for (let counterIndex = 1; counterIndex <= 3; counterIndex++) { 
      this.increaseCounter(counterIndex);
    } 
  }
  onDecreaseAll() { 
    for (let counterIndex = 1; counterIndex <= 3; counterIndex++) { 
      this.decreaseCounter(counterIndex);
    } 
  }
  render(){
    return (
      <div>
        <Zad2></Zad2>
        <Zad2v1></Zad2v1>
        <Zad2v2></Zad2v2>
        <Counter></Counter>
        <div>
          <Counter2
            count={this.state.counter1}
            counterIndex={1}
            onIncrease={this.increaseCounter}
            onDecrease={this.decreaseCounter}
          /> 
          <Counter2
            count={this.state.counter2}
            counterIndex={2}
            onIncrease={this.increaseCounter}
            onDecrease={this.decreaseCounter}
          /> 
          <Counter2
            count={this.state.counter3}
            counterIndex={3}
            onIncrease={this.increaseCounter}
            onDecrease={this.decreaseCounter}
          /> 
          <button onClick={this.onIncreaseAll}> + all </button>
          <button onClick={this.onDecreaseAll}> - all </button>
        </div> 
        <Zad5><AppHeader /></Zad5>
      </div>
    );
  }
}

export default App;
