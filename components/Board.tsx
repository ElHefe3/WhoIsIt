import { BoardProps } from '../types/types';
import BoardPlayer from './BoardPlayer';
import { View, StyleSheet } from 'react-native';

export default function Board({ players, setSelectedPlayer }: BoardProps) {
  return (
    <>
      {players.map((val) => (
        <View>
          <BoardPlayer
            key={val.name}
            player={val}
            setSelectedPlayer={setSelectedPlayer}
          />
        </View>
      ))}
    </>
  );
}

const styles = StyleSheet.create({
  btn: {
      marginVertical: 8,
      flex: 1
      

  },
});
