import './App.css';
import MyGridComponent from './myComponents/GridComponent';

function App() {
  console.log(">>App component rendered<<");

  return (
    <div className="App">
      <div className='message'> States Hook with props </div>
      <MyGridComponent></MyGridComponent>
    </div>
  );
}

export default App;
