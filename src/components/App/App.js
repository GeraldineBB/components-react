// import logo from './logo.svg';
// import Inspi from '../src/assets/portfolio.gif'; 
import './App.css';

import Home from '../Home'; 
import Moment from '../Moment'; 
import PropTypes from '../PropTypes';
import ApiAxios from '../ApiAxios';
import UseEffectClear from '../UseEffectClear';
import ClassNoApi from '../ClassNoApi';
import ClassWithApi from '../ClassWithApi';
import ApiFetch from '../ApiFetch';

function App() {

  const functionApp = () => {
    console.log ('coucou'); 
  }

  const stringApp = 'aurevoir'; 

  const arrayApp = [
    {
      name: 'Jacques', 
      age: 25, 
    }, 
    {
      name: 'Paul', 
      age: 28, 
    },
    {
      name: 'Leo', 
      age: 27, 
    }
  ]

  return (
    <div className="App">
      <Home/>
      <Moment/>
      <ClassNoApi title='classe sans api'/>
      <UseEffectClear />
      <PropTypes functionApp={functionApp} stringApp={stringApp} arrayApp={arrayApp}/>
      <ApiAxios/>
      <ClassWithApi />
      <ApiFetch/>
    </div>
  );
}

export default App;
