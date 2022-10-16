import React from 'react';
import { View, Text, Image, ScrollView, TextInput } from 'react-native';


// when inside of component definition, this code will update the component
// every second with the amount of minutes until / after 6 pm
// note: this needs the minutesUntilSixPM() function from Game.js to work

// const [state, setState] = useState(0.0)
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setState(minutesUntilSixPM())
//       console.log('running');
//     }, 1000);
//     return () => clearInterval(interval);
//   }, []);


const CountdownTimer = () => {
  return (
    <>
      <Text> CountdownTimer component </Text>
    </>
  );
};

export default CountdownTimer;