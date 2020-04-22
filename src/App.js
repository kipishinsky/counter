import React from 'react';
import './App.css';

class App extends React.Component {
//стейт
   state = {
       number: 0
    };
// inc
    AddClick = () => {
        let tapClick = this.state.number;
        if (tapClick < 5) {
            tapClick++;
        }
        this.setState ({
            number: tapClick
        })
    };
// reset
    resetClick = () => {
        this.setState ({
            number: 0
        })
    };


    render = () => {
        // css style
        let value = (this.state.number === 5) ? "value" : "";
        let add = (this.state.number === 5) ? "add" : "";
        let res = (this.state.number === 0) ? "res" : "";

        return (
            <div className="App">
                <div className='container'>
                    <span className={value}>{this.state.number}</span>
                    <button disabled={add} onClick={this.AddClick}>Inc</button>
                    <button disabled={res} onClick={this.resetClick}>Reset</button>
                </div>
            </div>
        );
    }
}

export default App;
