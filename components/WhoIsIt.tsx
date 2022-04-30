import React, { useState } from 'react';
import { Player } from '../types/types';
import Board from './Board';
import NamePlayers from './NamePlayers';
import PlayerCounter from './PlayerCounter';

function WhoIsIt() {
  const [screen, setScreen] = useState<number>(0);
  const [playerCount, setPlayerCount] = useState<number>(3);
  const [players, setPlayers] = useState<Player[]>([]);

  const getTeam = (index:number, rand:number) =>
  (index === rand ? 'mosquito':'fly')

  const submitPlayerCount = (counter: number) => {
    setPlayerCount(counter);
    setScreen(prevScreen => prevScreen+1);
  };

  const startPlayers = (names: string[], rand: number) => {
    rand = (Math.floor(Math.random()*(playerCount-0+1)));
    console.log(playerCount +" : "+ rand);
    setPlayers(names.map((name, index) => ({ name, selected: false, team: getTeam(index, rand) })));
    setScreen(prevScreen => prevScreen+1);
  };

  const setSelectedPlayer = (name: string, selected: boolean) => {
    setPlayers((players) => {
      return players.map((x) => ({
        name: x.name,
        selected: x.name === name && !selected, 
        team: x.team,
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
      <NamePlayers playerCount={playerCount} team='' startPlayers={startPlayers} />
    );

   if (screen === 2)
    return (
      <Board players={players} setSelectedPlayer={setSelectedPlayer}/>
    );
    return null;
}

export default WhoIsIt;