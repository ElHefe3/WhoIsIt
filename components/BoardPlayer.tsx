import { BoardPlayerProps } from '../types/types';
import { StyleSheet, Text, Button } from 'react-native'

export default function BoardPlayer({
  player,
  setSelectedPlayer,
}: BoardPlayerProps) {
  return (
    <Button
      title={player.name}
      onPress={() => setSelectedPlayer(player.name)}
      color={player.selected ? 'blue' : 'orange'}
    />
  );
}
