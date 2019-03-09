import React, { Component } from 'react';
import Header from './components/Navbar';
import Footer from './components/footer';
import FriendCard from './FriendCard/index';
import friends from "./friends.json";

class App extends Component {

  state = {
    friends,
    count: 0,    
    highCount: 0,
    guess: 'Click an image begin!',    
    correct: 'Your Guessed correctly!',
    incorrect: 'Your Guessed incorrectly!',
    color: 'red',
    background: '#fff',
  };

  imageClick = id => {
    rendomSelectImage(friends);

    function rendomSelectImage(o) {
      for (var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
      return o;
    };

    this.setState({
      count: this.state.count + 1,

    });

    this.state.friends.filter(friend => {
      if (id === friend.id) {
        if (friend.click === "click") {
          changeCliclEvent();
          this.setState({ 
            count: this.state.count = 0 ,
            guess: this.state.incorrect 
          })          
          // console.log("samename unclick");
        } else {
          if (this.state.count >= this.state.highCount) {
            // console.log("grather then value");
            this.setState({ highCount: this.state.highCount + 1})
          }
          this.setState({             
            guess: this.state.correct 
          })
          friend.click = "click";
          // console.log("click");
        }
      }
      
      // this.setState({
      //   // highCount: this.state.highCount+1
      // })
      return this.setState({ friends });
      
    });
    

    function changeCliclEvent() {
      friends.map(friend => {
        if (friend.click === "click") {
          friend.click = "unclick";
          // console.log("click function change ");
        }
        return friends;
      });
    }
    // this.setState({ highCount: this.state.count });
      
  };
  
  render() {
    return (
     
       <div>
        <Header
          correctorincorrect= {this.state.guess}
          onChangeComplete={ this.handleChangeComplete }
          counter={this.state.count}
          highCount={this.state.highCount}
        />
        
        {this.state.friends.map(friend => (
          <FriendCard
            imageClick={this.imageClick}
            id={friend.id}
            key={friend.id}            
            image={friend.image}
          />
        ))}
        
        {/* <Footer /> */}
      
      </div> 
    );
  }
}

export default App;
