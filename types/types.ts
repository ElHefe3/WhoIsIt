export type PlayerCounterProps = {
    playerCount: number;
    setPlayerCount: React.Dispatch<React.SetStateAction<number>>;
    submitPlayerCount: (counter: number) => void;
};

export type NamePlayersProps = {
    playerCount: number;
    team: string;
    startPlayers: (players: string[], rand: number) => void;
};

export type PlayerProps = {
    name: string;
    index: number;
    team: String;
    setPlayerName: (index: number, newName: string) => void;
  };

  export type BoardProps = {
    players: Player[];
    setSelectedPlayer: (name: string, selected: boolean) => void;
  };
  
  export type BoardPlayerProps = {
    player: Player;
    setSelectedPlayer: (name: string, selected: boolean) => void;
  };
  
  export interface Player {
    selected: boolean;
    name: string;
    team: string;
  }
  