import { BoardProps } from '../types/types';
import BoardPlayer from './BoardPlayer';

export default function Board({ players, setSelectedPlayer, setFly, setMosquito }: BoardProps) {
  return (
    <>
      {players.map((val) => (
        <BoardPlayer
          key={val.name}
          player={val}
          setSelectedPlayer={setSelectedPlayer}
          setFly={setFly}
          setMosquito={setMosquito}
        />
      ))}
    </>
  );
}
