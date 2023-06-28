import './App.css';

function App() {

  const title = 'Welcome to the new blog!',

  likes = 50,

  person = {

    name  : 'John',

    age: 30

  },

  isOpen = false


  return (
    <div className="App">
      
      <div className="content">

        <h1>{title}</h1>

        <p>Liked {likes} times</p>

        {/* <p>{person}</p> */}

        {/* <p>{isOpen}</p> */}

        <p>My name is {person.age} and I am {person.age} old</p>

        <p>{10}</p>

        <p>{'Hello Ninjas'}</p>

        <p>{[1, 2, 3, 4, 5]}</p>

        <p>{Math.random() * 10}</p>

      </div>

    </div>
  );
}

export default App;
