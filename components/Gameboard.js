import { Text, View, Pressable } from 'react-native'
import React, { Component } from 'react'
import Entypo from '@expo/vector-icons/Entypo'
import styles from '..style/style';

const START = 'plus';
const CROSS = 'cross';
const CIRCLE = 'circle';
const NBR_OF_ROWS = 3;
const NBR_OF_COLS = 3;
let intialboard = new Array(NBR_OF_COLS * NBR_OF_ROWS).fill(START)

export default function Gameboard() {

  const [isCross, setCross] = useState(true);
  const [winner, setWinner] = useState("");
  const [board, setBoard] = useState(intialboard);

  function winGame() {
    if (board[0] != START && board[0] == board[1] && board[1] == board[2]) {
      return board[0]
    }else if (board[3] != START && board[3] && board[4] == board[4] && board[5]) {
      return board[3]
    }else if (board[6] != START && board[6] && board[7] == board[7] && board[8]) {
      return board[6]
    }else if (board[0] != START && board[0] && board[3] == board[3] && board[6]) {
      return board[0]
    }else if (board[1] != START && board[1] && board[4] == board[4] && board[7]) {
      return board[1]
    }else if (board[2] != START && board[2] && board[5] == board[5] && board[8]) {
      return board[2]
    }else if (board[0] != START && board[0] && board[4] == board[4] && board[8]) {
      return board[0]
    }else if (board[2] != START && board[2] && board[4] == board[4] && board[6]) {
      return board[2]
    } else {
      return "";
    }
  }

  function drawItem(number) {
    if (board[number] === START && winGame() === "") {
      board[number] = isCross ? CROSS : CIRCLE;
      setCross(!isCross);
      if (winGame() !== "") {
        setWinner(winGame());
      } else if (board.indexOf(START) === -1){
        setWinner('No winner');
      }
    }
  }

  return (
    <View>
      <Text>

      </Text>
    </View>
 )
}


