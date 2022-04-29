import React, { useState } from 'react';
import { Player } from '../types/types';
import Board from './Board';
import NamePlayers from './NamePlayers';
import PlayerCounter from './PlayerCounter'

function WhoIsIt() {
  const [screen, setScreen] = useState<number>(0);
  const [playerCount, setPlayerCount] = useState<number>(3);
  const [players, setPlayers] = useState<Player[]>([]);
  const[team, setTeam] = useState<Player[]>([]);

  const submitPlayerCount = (counter: number) => {
    setPlayerCount(counter);
    setScreen(prevScreen => prevScreen+1);
  };

  const startPlayers = (names: string[]) => {
    setPlayers(names.map((name) => ({ name, selected: false, isMosquito: false})));
    setScreen(prevScreen => prevScreen+1);
  };

  const setSelectedPlayer = (name: string, selected: boolean) => {
    setPlayers((players) => {
      return players.map((x) => ({
        name: x.name,
        selected: x.name === name && !selected,
        isMosquito: x.isMosquito,
      }));
    });
  };

  if (screen === 0)
    return (
      <PlayerCounter
        playerCount={playerCount}
        setPlayerCount={setPlayerCount}
        submitPlayerCount={submitPlayerCount}
      ></PlayerCounter>
    );

   if (screen === 1)
    return (
      <NamePlayers playerCount={playerCount} startPlayers={startPlayers} />
    );

   if (screen === 2)
    return (
      <Board players={players} setSelectedPlayer={setSelectedPlayer}/>
    );
    return null;
}

export default WhoIsIt;