import React from "react";
import ReactDOM from "react-dom";
import Card from './components/card.jsx';
import SearchBar from "./components/searchbar.jsx";

class App extends React.Component{
    render(){
        return(
            <Card>
                <SearchBar />
                
            </Card>
        )
    }
}

ReactDOM.render(<App />, document.getElementById("app"));