import React from 'react';
import logo from './logo.svg';
import './App.css';
import { news } from './news';
import { Card } from './components/Card/Card';




// componenti
const App = () => {
  return (
    <div className="App">
        {news.map(item => {
          return <Card author={item.author} content={item.content} /> 
        }
        )}
    </div>
  );
}

export default App;
