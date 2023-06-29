import './App.css';

const Person = (props) => {
  return (
    <>
    <h1>Name: {props.name}</h1>
    <h2>second line: {props.secondLine}</h2>
    <h2>Age: {props.age}</h2>
    </>
  )
}


const App = () => {

  return (
    <div className="App">
      <Person name='Apo' secondLine='Nattawin' age='24'/>
      <Person />
      <Person />
      <Person />
      <Person />
      <Person />
    
    </div>
  );
}

export default App;
