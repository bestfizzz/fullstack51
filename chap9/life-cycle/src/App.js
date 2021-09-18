import React ,{ Component} from 'react';
import './App.css';
import Header from './component/header'
import Footer from './component/footer';
import Lifecycle from './component/lifecycle';

class App extends Component{
  constructor(props){
    super(props)
    this.state={
      lifeCycleActive:true
    }
  }
  getKeywords=(event)=>{
    let keywords=event.target.value
    console.log(keywords)
    let filtered=this.state.news.filter((item)=>{
      return item.title.indexOf(keywords)>-1
    })
    this.setState({filtered})
  }
  render(){
    const {filtered}=this.state
    return(
      <>
        <header keyword={''}/>
        {this.state.lifeCycleActive ? <Lifecycle />:null}
        <button onClick={()=>this.setState({lifeCycleActive:!this.state.lifeCycleActive})}>\
        action
          </button>
        <footer footerText={this.state.footerText}/>
      </>
    )
  }
}

export default App;
