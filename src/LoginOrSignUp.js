import React, {useState, useEffect} from 'react';
import type {Node} from 'react';
import {View, Text, Image, ScrollView, TextInput, Button} from 'react-native';

function loginUser(setLoggedIn) {
  // TODO
  // takes the input in phone number and password boxes and attempts to log the user in
  // should do setLoggedIn(true) if able to log in
  // else should display an error message to user and do nothing (leave them on login screen)
  console.log('called loginUser');
  return 0;
}

function registerUser() {
  // TODO
  // takes the input in phone num, username, and password boxes and creates an account
  // if phone num is not hooked up to account already, create account and redirect to login screen
  // else: throw an error message telling user that phone number is already hooked up to an account
  console.log('called registerUser');
  return 0;
}

const LoginOrSignUp = props => {
  const setLoggedIn = props.setLoggedIn;
  const [buttonPress, setButtonPress] = useState(false);

  // setLoggedIn(true);
  return (
    <View>
      {buttonPress ? (
        <ScrollView>
          <Text> Create Account </Text>
          <TextInput placeholder="Phone Number" />
          <TextInput placeholder="Username" />
          <TextInput placeholder="Password" />
          <Button onPress={registerUser} title="Register" />
          <Button
            onPress={() => setButtonPress(!buttonPress)}
            title="Go back to Login"
          />
        </ScrollView>
      ) : (
        <ScrollView>
          <Text> Log In </Text>
          <TextInput placeholder="Phone Number" />
          <TextInput placeholder="Password" />
          <Button onPress={() => loginUser(setLoggedIn)} title="Login" />
          <Button
            onPress={() => setButtonPress(!buttonPress)}
            title="No account? Create one here"
          />
        </ScrollView>
      )}
    </View>
  );
};

export default LoginOrSignUp;
