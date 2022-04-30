import { ScrollView, View } from 'react-native';
import { BoardProps } from '../types/types';
import BoardPlayer from './BoardPlayer';

export default function Board({ players, setSelectedPlayer }: BoardProps) {
  return (
    <ScrollView style={{paddingTop:50}}>
      {players.map((val) => (
        <BoardPlayer
          key={val.name}
          player={val}
          setSelectedPlayer={setSelectedPlayer}
        />
      ))}
      <View style={{padding: 50}}/>
    </ScrollView>
  );
}