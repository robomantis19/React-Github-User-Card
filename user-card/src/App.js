import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import User from './components/User';
import Followers from './components/Followers'

class App extends React.Component{

    state = {
      user: "",
      Ufollowers: []
      
    }

    componentDidMount(){

      axios.get('https://api.github.com/users/robomantis19')
      .then(res => { 
        const data = res.data;
        console.log("userData", data);
        this.setState({user : [...this.state.user , {id: Date.now(), name: data.name, avatar_url : data.avatar_url, bio:  data.bio, followers: data.followers,following:  data.following, html_url: data.html_url}]})
      }).catch(err => { 
        console.log(err);
      })

      axios.get('https://api.github.com/users/robomantis19/followers')
        .then(response => { 
          console.log("followers update: " , response)
          const data1 = response.data;
          for(let item in data1){
            let data2 = data1[item];
            console.log("followers user info", data2.login)
            axios.get(`https://api.github.com/users/${data2.login}`)
            .then(res => { 
              let data2 = res.data;

              this.setState({Ufollowers: [...this.state.Ufollowers, {id: Date.now(), name: data2.name, avatar_url: data2.avatar_url, bio:  data2.bio, followers: data2.followers, following: data2.following, html_url: data2.html_url }]})
         
            })
          }
      }).catch(err => { 
        console.log(err); 
      })




    }




  render(){
    return (
      <div className="App">
        <img src = {this.state.avatar_url} />
        <div>
          <User Meuser= {this.state.user}/>
          <Followers Fuser = {this.state.Ufollowers}/>
        </div>
      </div>
    );
  }
}

export default App;
