import React from 'react';
import styled from 'styled-components';
import axios from 'axios';

const CardContainer = styled.div`
width: 80%;
margin-left: auto;
margin-right: auto;
text-align: center;
border: solid black 1px;
margin-top: 2%;
margin-bottom: 2%;

`;

export default class Card extends React.Component{

    constructor() {
        super();
        this.state = {
            user: [],
        }
    }

    componentDidMount = () => {
        axios.get(`https://api.github.com/users/${this.props.user.login}`)
        .then(res => {
            this.setState({
                user: res.data
            });
        })
        .catch(err => console.log(err));
        // this.setState({
        //     user: this.props.user
        // });
        // console.log('props', this.props);
    }

    // componentDidUpdate(prevProps, prevState) {
    //     if (this.state !== prevState) {
    //         console.log(this.state);
    //     }
    // }



    render() {
        
        return(
            <CardContainer>
                <p>Name: {this.props.user.login}</p>
                <p>Number of followers: {this.state.user.followers}</p>
            </CardContainer>
        )

    }

}