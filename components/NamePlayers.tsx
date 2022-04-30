import { useState } from 'react';
import { Button, Alert, ScrollView, View } from 'react-native';
import { NamePlayersProps } from '../types/types';
import Player from './Player';

export default function NamePlayers({
    playerCount,
    startPlayers,
  }: NamePlayersProps) {
    const [players, setPlayers] = useState<string[]>(
      Array.from(Array(playerCount).keys()).map(x => ''),
    );
  
    const setPlayerName = (index: number, newName: string) => {
      setPlayers((players) => {
        const newPlayers = [...players];
        newPlayers[index] = newName;
        return newPlayers;
      });
    };
    
    const warn = () => {
        Alert.alert(
            "Warning",
            players.includes('') ? "Please ensure all players have been named" : "Please ensure each player"
        );
    };

    return (
      <>
        <ScrollView style={{padding: 50}}>
            {players.map((val, index) => (
            <Player
                index={index}
                key={index} // todo: how to fix this
                name={val}
                team=''
                setPlayerName={setPlayerName}
            />
            ))}
              <Button
                  onPress={() => players.includes('') ? warn():startPlayers(players, 0) }
                  title = "Start" 
              />
            <View style={{padding: 50}}/>
        </ScrollView>
      </>
    );
  }

