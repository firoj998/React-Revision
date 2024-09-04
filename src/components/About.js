import React from "react";
import User from "./User";
import UserClass from "./UserClass";

class About extends React.Component {
  constructor(props) {
    super(props);
    console.log("Parent constructor");
  }
  componentDidMount() {
    console.log("Parent component did mount");
  }
  render() {
    console.log("Parent render method");
    return (
      <div className="">
        <h1>About</h1>
        <h2>This is my Exmaple of Class based component</h2>
        <UserClass name={"Mohd Firoj (class)"} location={"Gonda (class)"} />
      </div>
    );
  }
}

export default About;
