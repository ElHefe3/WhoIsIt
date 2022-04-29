import { BoardPlayerProps } from '../types/types';
import { StyleSheet, Text, Button, View, Pressable } from 'react-native'
import { useState } from 'react';

export default function BoardPlayer({
  player,
  setSelectedPlayer,
}: BoardPlayerProps) {

  return (
    <View>
      <Pressable
        onPress={() => setSelectedPlayer(player.name, player.selected,)}
        style={{backgroundColor: player.selected ? 'blue' : 'orange', width: 200, padding: 12, margin: 12, borderRadius: 30, alignContent: 'center'}}
      >
        <Text style={{textAlign: 'center'}}>
        {player.name}
          
        </Text>
      </Pressable>
    </View>
  );
}