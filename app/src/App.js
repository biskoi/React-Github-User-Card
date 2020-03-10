import React from 'react';
import styled from 'styled-components';
import './App.css';
import axios from 'axios';
import CardList from './CardList';
import Card from './Card';

const Container = styled.div`
text-align: center;
`;

export default class App extends React.Component {

  constructor() {
    super();
    this.state = {
      biskoi: [],
      followers_url: '',
      followers: []
    }
  }

  componentDidMount = () => {
    axios.get('https://api.github.com/users/biskoi')
    .then(res => {
      // console.log(res);
      this.setState({
        biskoi: res.data,
        followers_url: res.data.followers_url
      });
      axios.get(this.state.followers_url).then(res => {
        this.setState({
          followers: res.data
        })
      }).catch(err => console.log(err));
    })
    .catch(err => console.log(err));
  }




  render() {
    return (
      <Container>
      <p>{this.state.biskoi.login}'s app</p>
      <Card user = {this.state.biskoi} key = {0}/>
      <CardList data = {this.state.followers}/>
      </Container>
    )
  }

}
