import React from 'react';
import './Main.css';

function GreetUser() {
  const currentTime = new Date();
  const currentHour = currentTime.getHours();
  let greeting;

  if (currentHour < 12) {
    greeting = 'Good morning';
  } else if (currentHour < 18) {
    greeting = 'Good afternoon';
  } else {
    greeting = 'Good evening';
  }

  return <div className='greet-user'>{`${greeting}, Trying 🚀`}</div>;
}

export default GreetUser;
