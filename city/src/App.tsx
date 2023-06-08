import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import PersonalDetails from './component/PersonalDetails'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <PersonalDetails></PersonalDetails>
      {/* <h2>bla</h2> */}
    </div>
  )
}

export default App


// app.ts

// class HomePage {
//   private name: string;
//   private photoUrl: string;
//   private score: number;

//   constructor(name: string, photoUrl: string, score: number) {
//     this.name = name;
//     this.photoUrl = photoUrl;
//     this.score = score;
//   }

//   render(): void {
//     const container = document.getElementById('app');

//     const welcomeMessage = document.createElement('h1');
//     welcomeMessage.textContent = 'Welcome to the Home Page!';
//     container.appendChild(welcomeMessage);

//     const nameElement = document.createElement('p');
//     nameElement.textContent = `Name: ${this.name}`;
//     container.appendChild(nameElement);

//     const photoElement = document.createElement('img');
//     photoElement.src = this.photoUrl;
//     photoElement.alt = 'User Photo';
//     container.appendChild(photoElement);

//     const scoreElement = document.createElement('p');
//     scoreElement.textContent = `Score: ${this.score}`;
//     container.appendChild(scoreElement);
//   }
// }

// // Usage example
// const homePage = new HomePage('John Doe', '"C:\Users\nofar\Pictures\Screenshots\Screenshot (21).png"', 100);
// homePage.render();