import { PlayerProps } from '../types/types';
import { TextInput } from 'react-native';
import { View } from 'react-native';

export default function Player({ index, name, setPlayerName }: PlayerProps) {
    return (
      <View>
        <TextInput
            keyboardType="default"
            value={name}
            onChangeText={( currentTarget ) => {
            setPlayerName(index, currentTarget);
          }}
        />
      </View>
    );
  }
  