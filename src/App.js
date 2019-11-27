import React,{Component} from 'react';
import Todos from './components/Todos';
class App extends Component {
  state = {
    todos:[
      {
        id:1,
        title: 'first one',
        completed: false
      },
      {
        id:1,
        title: 'first one',
        completed: false
      },
      {
        id:1,
        title: 'first one',
        completed: false
      }
    ]
  }
  render(){
    console.log(this.state.todos)
  return (
    <div className="App">
      <Todos todos={this.state.todos}/>
    </div>
  );
}
}

export default App;
