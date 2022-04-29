import { useState } from 'react';
import { View } from 'react-native';
import { Button } from 'react-native';
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
    
    return (
        <View>
            {players.map((val, index) => (
            <Player
                index={index}
                key={Math.floor(Math.random()*1000)}
                name={val}
                setPlayerName={setPlayerName}
            />
            ))}
            <Button
                onPress={() => startPlayers(players)}
                title = "Start" 
            />
        </View>
    );
  }