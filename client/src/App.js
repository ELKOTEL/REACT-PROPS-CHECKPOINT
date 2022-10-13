import './App.css';
import Profile from './Profile/Profile';
import pic from './Dental.png'

function App() {
  function handleName() {
    alert ('This is Foulen Ben Foulen')
    
  }
  return (
    <div className="App"  >
      <Profile  fullname= 'Elkotel Rabeb' bio = 'I am a half-time dentist, a full-time graphic designer ,youtuber, video editor and a web developer.My mission is to achieve my goals.I love reading,cycling and running.Knowledge is my passion.I am a human before and after all.' profession = 'Dentist' handleName = {handleName} >
        <img src={pic} alt='im'></img>
      </Profile>
    </div>
  );
}

export default App;
