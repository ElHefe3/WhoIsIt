export type PlayerCounterProps = {
    playerCount: number;
    setPlayerCount: React.Dispatch<React.SetStateAction<number>>;
    submitPlayerCount: (counter: number) => void;
};

export type NamePlayersProps = {
    playerCount: number;
    startPlayers: (players: string[]) => void;
};

export type PlayerProps = {
    name: string;
    index: number;
    setPlayerName: (index: number, newName: string) => void;
  };

  export type BoardProps = {
    players: Player[];
    setSelectedPlayer: (name: string, selected: boolean) => void;
    setMosquito: (name: string, selected: boolean) => void;
    setFly: (name: string, selected: boolean) => void;
  };
  
  export type BoardPlayerProps = {
    player: Player;
    setSelectedPlayer: (name: string, selected: boolean) => void;
    setMosquito: (name: string, selected: boolean) => void;
    setFly: (name: string, selected: boolean) => void;
  };
  
  export interface Player {
    isMosquito: boolean;
    selected: boolean;
    name: string;
  }
  