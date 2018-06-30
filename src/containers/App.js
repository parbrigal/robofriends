import React,{ Component } from 'react';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import CardList from '../components/CardList';
import { robots } from '../robots';
import './App.css';

class App extends Component
{
    constructor() {
      super();
      this.state = {
        robots: [],
        searchfield: ''
      }
    }

    componentDidMount() {
      this.setState({robots : robots});
    }

    onSearchChange =event => {
      this.setState( {searchfield : event.target.value});
    }

    render() {
      const filteredRobots = this.state.robots.filter(robot => {
        return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
      });
      return !robots.length ? <h1>Loading</h1> :
      (
        <div className='tc'>
          <h1 className='f2'>RoboFriends</h1>
          <SearchBox searchChange={this.onSearchChange}/>
          <Scroll>
            <CardList robots={filteredRobots}/>
          </Scroll>
        </div>
    );
  }
}

export default App;
