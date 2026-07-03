import React from "react";

class ProfileClass extends React.Component {
    constructor() {
        super()
        this.state={
            count:0
        }
    }
    componentDidMount(){
        console.log('component mounted');
        
    }
    render(){
        return(
            <div><h1>ClassBased {this.state.count}</h1>
            <button onClick={()=>{
                 this.setState({
                    count:this.state.count+1
                 })
            }}>Click</button>
            
</div>
        )
    }
}

export default ProfileClass;