import './App.css';
import Card from './components/Cards';
import SayHello from './components/SayHello';

function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
        <h1>Hello Props</h1>
        <Card
          image="http://lorempixel.com/150/150/"
          title="Title 1"
          text="Text card 1"
        />
        <Card
          image="http://lorempixel.com/150/150/"
          title="Title 2"
          text="Text card 2"
        />
        <Card
          image="http://lorempixel.com/150/150/"
          title="Title 3"
          text="Text card 3"
        />
        </div>
      </div>
      
    </div>
  );
}

export default App;
