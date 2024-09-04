import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    //console.log("Child constructor");
    // Creating state variable in class based component and updating the var
    this.state = {
      count: 0,
    };
  }
  componentDidMount() {
    console.log("Child component did mount");
  }
  render() {
    console.log("Child render method");
    const { name, location } = this.props;
    const { count } = this.state;
    return (
      <div className="p-10 border-solid border-2 border-black">
        <h1 className="font-bold">Count: {count}</h1>
        <button
          className="bg-purple-400"
          onClick={() => {
            // Never update the state variable directly it will not update
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          count increase
        </button>
        <h1>Name:{name}</h1>
        <h2>Location:{location}</h2>
        <h3>Conatact Info: firoj@gmail.com</h3>
      </div>
    );
  }
}
export default UserClass;
