import React from 'react';
import { View, Text, Image, ScrollView, TextInput } from 'react-native';


// NOTES
/* 
We must randomly choose a type of question from the following:
  1. Mental Math or maybe Algebra
  2. Trivia (Sports, art, history, science, entertainment, geography)
  3. Riddle
  4. IQ test question
    - examples: which of following shapes is most similar to given shape?
                which of the following words doesn't belong?
  5. Logic Puzzle 

Once we've decided the category, we need to make an api call to our database of questions
  - this call should return a random question of the selected type

*/

// we shouldn't be asking the same types of questions twice

const CATEGORIES = ["Math", "Trivia", "Riddle", "IQTest", "Logic"]

function getRandomUnusedCategory(categoriesUsed) {
  // returns a random category that isn't in categoriesUsed

  // remove categories we have already used in this game from possibleCategories
  let possibleCategories = [...CATEGORIES]

  for (let i = 0; i < categoriesUsed.length; i++) {
    element = categoriesUsed[i]
    const index = possibleCategories.indexOf(element)
    possibleCategories.splice(index, 1)
  }
  
  // choose and return a random unused category
  let randomCat = possibleCategories[Math.floor(Math.random()*possibleCategories.length)]
  return randomCat
}


const Question = (props) => {
  // function that allows us to manipulate the state of the parent Game component
  // important: to prevent reloading, only change this state after the 10 seconds for the question has elapsed
  setGameState = props.setGameState

  // get list of categories that have already been used in this game (don't want to repeat)
  let categoriesUsed = props.categoriesUsed 
  let category = getRandomUnusedCategory(categoriesUsed)

  // TODO TODO TODO: make API call here to get a random question of the given category
  let question = ""
    // quesiton should be a json object with the question and the four possible answers
    // also we should have something that identifies which answer is correct

  // TODO: after 10 seconds is elapsed, use setGameState and 


  return (
    <>
      <Text> Question component </Text>
    </>
  );
};

export default Question;