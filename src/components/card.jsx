import React from "react";


export default class Card extends React.Component{

    render(){
        return(
            <div>
                <section>Cities of China</section>
                {this.props.children}
            </div>
        )
    }
}