import React from 'react';
import './App.css';

class App extends React.Component {
//стейт
//стейт
//стейт 
//стейт
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

        let Five = (this.state.number === 5) ? "Five" : "";
        let Inc = (this.state.number === 5) ? "Inc" : "";
        let res = (this.state.number === 0) ? "res" : "";

        return (
            <div className="App">
                <div className='container'>
                    <div className={`number ${Five}`}>
                        <span>{this.state.number}</span>
                    </div>
                    <div className='buttons'>
                        <button className={`incButton ${Inc}`} disabled={Inc} onClick={this.AddClick}>INC</button>
                        <button className={`resetButton ${res}`} disabled={res} onClick={this.resetClick}>RESET</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
