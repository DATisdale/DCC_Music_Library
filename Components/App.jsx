import React, {Component}from 'react';
import MusicTable from  "./MusicTable"

class App extends Componet {
    state = {
        music: []
    }


render () {
    return (
        <div className ="App">
            <h1></h1>
            <h2></h2>
            <MusicTable music ={this.state.music}/>
        </div>
    )
}

 
}
