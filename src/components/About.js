import React from "react";
import User from "./User";
import UserClass from "./UserClass";

class About extends React.Component {
  constructor(props) {
    super(props);
    //console.log("Parent constructor");
  }
  componentDidMount() {
   // console.log("Parent component did mount");
  }
  render() {
    //console.log("Parent render method");
    return (
      <div className="">
        <h1>About</h1>
        <h2>This is my Exmaple of Class based component</h2>
        <User/>
        {/* <UserClass name={"First"} location={"Gonda (class)"} /> */}
        {/* <UserClass name={"Second"} location={"Gonda (class)"} /> */}
      </div>
    );
  }
}

/*
-Parent constructor
-Parent render
  - First constructor
  - First render

  -Second constructor
  -Second render

  <DOM UPDATED - IN SINGLE BATCH>
  -First ComponentDidMount
  -Second ComponentDidMount

-Parent ComponentDidMount
*/

export default About;
