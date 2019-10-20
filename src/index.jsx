import React from "react";
import ReactDOM from "react-dom";
import Card from './components/card.jsx';
import SearchBar from "./components/searchbar.jsx";
import CountryList from "./components/countryList.jsx";
import Counter from "./components/counter.jsx";

class App extends React.Component{
    render(){
        return(
            <Card>
                <CountryList>
                    <SearchBar />
                    <Counter type="unselected" />
                    unselected
                </CountryList>
                <CountryList>
                    <Counter type="selected" />
                    selected
                </CountryList>
            </Card>
        )
    }
}

ReactDOM.render(<App />, document.getElementById("app"));