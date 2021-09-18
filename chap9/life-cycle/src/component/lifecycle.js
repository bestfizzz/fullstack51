import { Component } from "react";

class Lifecycle extends Component{
    constructor(props){
        super(props)
        this.state={action:''}
        console.log('1-constructor')
    }
    static getDerivedStaeFromProps(){
        console.log('2-getDerivedStaeFromProps');
        return null
    }
    componentDidMount(){
        console.log('4-componentDidMount')
    }
    componentWillUnmount(){
        console.log('5-componentWillUnmount')
    }
    shouldComponentUpdate(prevProps,prevState){
        
    }
    render(){
        console.log('3-render')
        return(
            <h2>
                Component Lifecycle
            </h2>
        )
    }
}
export default Lifecycle