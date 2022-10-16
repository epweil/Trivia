import React, { useState, useEffect} from 'react'
import {
  StyleSheet,
  Text,
  View,
} from 'react-native'


const styles = StyleSheet.create({
  text: {
    textAlign: 'center',
    color: 'white',
    fontSize: 40
  },
  container:{
    backgroundColor: "purple"
  }
  
})

function timer(){
  let hours = new Date().getUTCHours();
  let minutes = new Date().getUTCMinutes();
  let seconds = new Date().getUTCSeconds();
  let secLeft = (60 -seconds) %60;
  let minLeft = 59-minutes;
  if(secLeft == 0){
    minLeft = (60-minutes)%60;
  }
  let hourLeft = 23-hours;
  if(minLeft == 0){
    hourLeft = (24-hours)%24;
  }
  
  return ("" + hourLeft + " hours, " + minLeft + " minutes, " + secLeft + " seconds");
}

const Timing = () =>{
  const[state, setState] = useState("Countdown")
  useEffect(() => {
    const interval = setInterval(() => {
      setState(timer())}, 1000);
      return() => clearInterval(interval);

    },[]);

    return(
      <View style={styles.container}> 
      <Text style = {styles.text}> {"\n"}Time until Game: {"\n"} </Text>  
    
      <Text style = {styles.text}> {state} </Text>  
      </View>
    );

  };

  export default Timing;
