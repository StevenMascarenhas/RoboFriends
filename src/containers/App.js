
// import logo from './logo.svg';
// import './App.css';
// import React, { Component } from 'react';

// //function App() {
//   class App extends Component{
//     render(){
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <h1 className="App=title">Welcome to React</h1>
//         </header>
//         <p className="App-intro">
//          to get started, edit <code>src/App.js</code> and save to reload.
//         </p>
        
   
//     </div>
//   );
//     }
// }

// export default App;
import React ,{ Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from'../components/Scroll';
import ErrorBoundary from'../components/ErrorBoundary';
// import {robots} from './robots';
import './App.css';

// const state ={
// robots: robots,
// searchfield: ''
// }

// const App = () => {
//   return(
//     <div className='tc'>
//    <h1>RoboFriends</h1>
//    <SearchBox/>
//     <CardList robots={robots}/>
//     </div>
 
//   );
// }
//extends component class to use state smart components because of state
//using an api json placeholder
class App extends Component {
  constructor(){
    super()
    this.state = {
      // robots: robots,
      robots: [],
      searchfield: ''
    }
    // console.log('constructor');
  }
       // in return (<CardList robots={robots}/>);
 componentDidMount(){
  // console.log('componentDidMount');
  // using json placeholder
  //fetch http request
  fetch('https://jsonplaceholder.typicode.com/users')
//receives a response
  // .then(response => {return response.json();
  // })
  .then(response => response.json())
  //get the robots
  // .then(users => {
  //   this.setState({robots: users})    
  // });
  .then(users => this.setState({robots:users}));
  
 //for loading to show on screen
  // .then(users => {});

//for static data to show from robots function
  // this.setState({robots:robots})
}

onSearchChange = (event) => {
  // console.log(event.target.value);
  //searchfield gets updated dynamically  with the searched value
  this.setState({searchfield:event.target.value})
  // )
  // console.log(filteredRobots);
}

render (){
  //restructuring in a better way
  const{  robots,searchfield }=this.state;
// const filteredRobots=this.state.robots.filter(robot=>{
  //if the name of the robots in lowercase includes (comparison )
  // return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
  const filteredRobots=robots.filter(robot=>{
    //if the name of the robots in lowercase includes (comparison )
    return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    
})
//if many users to load on screen
// if(this.state.robots.length===0){
//turn to true if no robots
  if(!robots.length){
  return <h1>Loading</h1>
}else{
//<CardList robots={this.state.robots}/>
// console.log('render');
   //scroll can use children
   return(
    <div className='tc'>
    <h1 className='f1'>RoboFriends</h1>
    <SearchBox searchChange={this.onSearchChange}/>
 
    <Scroll>
      <ErrorBoundary>
      <CardList robots={filteredRobots}/>
      </ErrorBoundary>
   
    </Scroll>

    </div>
 
 );
   }
}
}
export default App;