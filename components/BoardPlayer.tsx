import { BoardPlayerProps } from '../types/types';
import { StyleSheet, Text, Button } from 'react-native'

export default function BoardPlayer({
  player,
  setSelectedPlayer,
  setFly,
  setMosquito,
}: BoardPlayerProps) {
  return (
    <Button
      title={player.name}
      onPress={() => {player.isMosquito ? setMosquito(player.name, player.selected) : setFly(player.name, player.selected);}}
      color={player.selected ? 'blue' : 'orange'}
    />
  );
}
