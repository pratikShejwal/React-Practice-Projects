import React from "react";

class ProfileClass extends React.Component {
    constructor() {
        super()
        this.state={
            users:null,
            count:0
        }
        console.log('constructor called');
        

    }

   async componentDidMount(){

        const req = await fetch('https://api.github.com/users/pratikShejwal')
        const parsed = await req.json()
        this.setState({
            users:parsed
        })
        console.log(parsed);
        
    }

    componentDidUpdate(prevProps,prevState)
    {
        console.log('update');
        if(this.state.count!=prevState.count){
            console.log('conditional update');
        }
    }

    componentWillUnmount(){
        console.log('unmounted ');
    }

    render(){
        if (this.state.users == null) {
              console.log('load render');
              return <h1>Loading....</h1>
          
        }
        console.log('render');
        
        return(
            <div><h1>ClassBased {this.state.count}</h1>
           <h1>Name: {this.state.users.login}</h1>
           <h2>Id: {this.state.users.id}</h2>
           <h3>Url: {this.state.users.url}</h3>
            
</div>
        )
    }
}

export default ProfileClass;