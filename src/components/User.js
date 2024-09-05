import { useEffect, useState } from "react";

const User = ({ name }) => {
  const [count] = useState(0);
  const [count2] = useState(1);

  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     console.log("Hello useEffect() setInterval");
  //   }, 1000);
  //   return () => {
  //     // this will only called when we leave this page or navigate to other page similar like ComponentWillUnMount method
  //     clearInterval(timer);
  //   };
  // }, []);

  return (
    <div className="p-10 border-solid border-2 border-black">
      <h1 className="font-bold">Count: {count}</h1>
      <h1 className="font-bold">Count2: {count2}</h1>
      <h1>Name:{name}</h1>
      <h2>Location:Gonda</h2>
      <h3>Conatact Info: firoj@gmail.com</h3>
    </div>
  );
};
export default User;
