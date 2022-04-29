import { PlayerProps } from '../types/types';
import { TextInput, View, StyleSheet, Text } from 'react-native';
export default function Player({ index, name, setPlayerName }: PlayerProps) {
    return (
      <View>
        <Text 
            style={stylesText.player}
            >
            Player {index + 1}:
        </Text>
        <TextInput
            style={styles.input}
            placeholder='Please enter your name here'
            keyboardType="default"
            value={name}
            onChangeText={( currentTarget ) => {
            setPlayerName(index, currentTarget);
          }}
        />
      </View>
    );
  }
  
const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderColor: '#111'
        
    },
});

const stylesText = StyleSheet.create({
    player: {
        fontSize: 28,
        color: '#111'
    },
});