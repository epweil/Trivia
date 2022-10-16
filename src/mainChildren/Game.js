import React, {useState, useEffect} from 'react';
import { View, Text, Image, ScrollView, TextInput } from 'react-native';

function minutesUntilSixPM() {
  // if we are currently before 6 pm, will return the number of minutes until 6 pm
  // if past 6 pm, will return the number of minutes since 6 pm
  var sixPM = new Date();
  sixPM.setHours( 18 );
  sixPM.setMinutes( 0 );
  sixPM.setSeconds( 0 );
  sixPM.setMilliseconds( 0 );
  return ( sixPM.getTime() - new Date().getTime() ) / 1000 / 60;
}

function hasGameOccurred() {
  const GAME_MINUTES = 2
  // determines whether the game for today has already occurred or not
  // returns 0 if game hasn't happened yet, 1 is currently happening, 2 if has already happened

  let m = minutesUntilSixPM()
  if (m > 0) {
    return 0;
  }
  else if (m <= 0 && m >= -GAME_MINUTES) {
    // game is still ongoing if we aren't more than GAME_MINUTES minutes past 6 pm
    return 1;
  }
  else {
    return 2
  }

}


const Game = () => {
  console.log(minutesUntilSixPM())

  // game_status can be either 'upcoming', 'happening', or 'occurred'
  const [state, setState] = useState({game_status: null})
  // TODO
    // possible error: should this effect only run on the first render?
    // if I'm getting wierd errors, look here first as I'm not sure this is correct
  useEffect(()=> {
    let v = hasGameOccurred()
    if (v==0) {
      setState({game_status: 'upcoming'})
    }
    else if (v==1) {
      setState({game_status: 'happening'})
    }
    else {
      setState({game_status: 'occurred'})
    }
  }, [])
  


  return (
    <>
      <Text> Game component </Text>
      <Text> Game status: {state.game_status} </Text>
    </>
  );
};

export default Game;