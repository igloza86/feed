import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Feed from './components/feed'

class App extends React.Component{
    render(){
        return(
            <div>
                <h1 className="title">News Feeed</h1>
            <Feed />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'))
