import React from "react";
import "./card.css";

export default class Card extends React.Component{

    render(){
        return(
            <div class="cardCom">
                <section>Cities of China</section>
                {this.props.children}
            </div>
        )
    }
}