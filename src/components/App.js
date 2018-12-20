import React, { Component } from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';
import './App.css';
import AgeStats from './AgeStats';


class App extends Component {
    constructor() {
        super();
        this.state = {
            newDate: '',
            bday: '1997-06-02',
            showStats: false
        }
    }
    changeBday() {
        console.log(this.state);
        this.setState({ 
            bday: this.state.newDate,
            showStats: true
        });
    }

    render() {
        return (            
        <div className="App"> 
            <h2>Input Your Bday!</h2>
                <Form inline> 
                    <FormControl 
                    type="date"
                    onChange={ event => this.setState({ newDate: event.target.value })}
                    >
                    </FormControl>
                    {' '}
                    <Button
                    onClick={() => this.changeBday()}
                    >
                        Submit
                    </Button>
                    {
                       
                        this.state.showStats ?
                        <div className="fade age-stats">
                            <AgeStats date={this.state.bday}/>
                        </div>
                        : <div></div>
                    }
                    
                </Form>
                
            </div>
        )
    }
}
export default App;
