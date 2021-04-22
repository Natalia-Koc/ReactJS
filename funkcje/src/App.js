import './App.css';
import styled from 'styled-components';
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

function Zad2() {
  return (
    <div> <h1>Hello World!</h1> </div>
  );
}

function Zad3({ title, content }) {
  return (
    <div>
      <h1>{title}</h1>
      <p>{content}</p>
    </div>
  );
}

function Zad4({ imie, nazwisko, telefon, wiadomosc }) {
  return (
    <div>
      <ul>
        <li>{imie}</li>
        <li>{nazwisko}</li>
        <li>{telefon}</li>
      </ul>
      <p>{wiadomosc}</p>
    </div>
  );
}

function AppHeader() {
  return (<header>
    <nav>
      <ContactsList />
      <div>
        <button>Dodaj</button>
      </div>
    </nav>
  </header>);
}

function ContactItem({ login, name, department }) {
  return (<li>
    <Kontakt>
      <h4>{name}</h4>
      <div>{department}</div>
    </Kontakt>
  </li>
  );
}

function ContactsList() {
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

function App() {
  return (
    <div>
      <Title><Zad2 /></Title>
      <Zad3 title="Cześć kolego/koleżanko!" content="Natalia Koć"></Zad3>
      <Zad4 imie="Natalia" nazwisko="Koć" telefon="799817317" wiadomosc="Testowa wiadomosc dla testow"></Zad4>
      <Zad5><AppHeader /></Zad5>
    </div>
  );
}

export default App;
