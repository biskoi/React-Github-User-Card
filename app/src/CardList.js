import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Card from './Card';

export default class CardList extends React.Component {

    // constructor() {
    //     super();
    //     this.state = {
    //     followers: []
    //     }
    // }


    render() {

        return(
            <div>
                {this.props.data.map((item, index) => (
                    <Card user = {item} key = {index}/>
                ))}
            </div>
        )

    }


}