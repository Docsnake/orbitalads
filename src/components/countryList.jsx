import React from "react";


export default class CountryList extends React.Component{

    render(){
        return(
            <div>
                {this.props.children}
            </div>
        )
    }
}