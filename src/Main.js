import React from 'react';
import { View, Text, Image, ScrollView, TextInput } from 'react-native';

import Game from './mainChildren/Game';
import Leaderboard from './mainChildren/Leaderbaord';
import MainNavBar from './mainChildren/MainNavBar';
import Profile from './mainChildren/Profile';

const Main = () => {
  return (
    <>
      <Text> you are logged in, main component coming soon </Text>
      <Game />
    </>
  );
};

export default Main;
