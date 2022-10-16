/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
 
 import LoginOrSignUp from './src/LoginOrSignUp';
 import Main from './src/Main';
 
 const App: () => Node = () => {
   // state should keep track of if logged in or not
   // if it changes, the component will reload and either Login or Register will be rendered based on value of state
   const [isLoggedIn, setLoggedIn] = useState(false);
 
   // set isLoggedIn to false (only on first time App component renders)
   useEffect(() => setLoggedIn(false), []);
   console.log(isLoggedIn);
   return (
     <View>
       {isLoggedIn ? (
         <Main />
       ) : (
         <View>
           <LoginOrSignUp setLoggedIn={setLoggedIn} />
         </View>
       )}
     </View>
   );
 };
 
 const styles = StyleSheet.create({
   sectionContainer: {
     marginTop: 32,
     paddingHorizontal: 24,
   },
   sectionTitle: {
     fontSize: 24,
     fontWeight: '600',
   },
   sectionDescription: {
     marginTop: 8,
     fontSize: 18,
     fontWeight: '400',
   },
   highlight: {
     fontWeight: '700',
   },
 });
 
 export default App;
