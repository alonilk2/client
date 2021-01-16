import React, {Component} from 'react';
import './App.css';
import Hp from './Views/HomePageView';

class App extends Component 
{
    render () {
        return (    
            <div className="App">
                <Hp />
            </div>
        );
    }
}
export default App;