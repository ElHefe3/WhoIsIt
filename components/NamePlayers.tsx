import { useState } from 'react';
import { Button, Alert } from 'react-native';
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

    function determineTeam(index: number) {
        const mosquitoIndex = (Math.floor(Math.random()*(playerCount-0+1)));
        return mosquitoIndex===index ? 'Mosquito':'Fly'
    }
    
    const warn = (msg: string) => {
        Alert.alert(
            "Warning",
            msg
        );
    };

    return (
        <>
            {players.map((val, index) => (
            <Player
                index={index}
                key={index} // todo: how to fix this
                name={val}
                team={determineTeam(index)}
                setPlayerName={setPlayerName}
            />
            ))}
            <Button
                onPress={() => players.includes('') ? startPlayers(players): warn("Please ensure all players are given names")}
                title = "Start" 
            />
        </>
    );
  }

