import { BoardPlayerProps } from '../types/types';
import { Text, View, Pressable } from 'react-native';

export default function BoardPlayer({
  player,
  setSelectedPlayer,
}: BoardPlayerProps) {

  return (
    <>
      <Pressable
        onPress={() => setSelectedPlayer(player.name, player.selected)}
        style={{backgroundColor: player.selected ? 'blue' : 'orange', width: 200, padding: 12, margin: 12, borderRadius: 30, alignContent: 'center'}}
      >
        <Text style={{textAlign: 'center'}}>
        {player.selected ? player.team:player.name}
        </Text>
      </Pressable>
    </>
  );
}