import React from "react";


export default class CountryList extends React.Component{

    render(){
        return(
            <div>
                { this.props.type === "unselected" ? <input type="checkbox" /> : <span>CLEAR</span> } 
                <span>685 items</span>
            </div>
        )
    }
}