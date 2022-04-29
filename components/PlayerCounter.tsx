import { PlayerCounterProps } from "../types/types";
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import React from "react";
import Icon from 'react-native-vector-icons/FontAwesome';

function PlayerCounter({
    playerCount,
    setPlayerCount,
    submitPlayerCount,
}: PlayerCounterProps) {

    const decreasePlayers = () => {
        if (playerCount > 3) {
            setPlayerCount(prevCount => prevCount - 1);
        }
      }
    
      const increasePlayers = () => {
          setPlayerCount(prevCount => prevCount + 1);
      }

    return (
        <>
            <Icon 
                name="chevron-up" 
                size={70} color="#111" 
                onPress={() => {increasePlayers()}} 
                style={styles2.arrow}
            />
            <TextInput
                style={styles.input}
                editable={false}
                value={playerCount.toString()}
                onChangeText={(currentTarget) => {
                    setPlayerCount(parseInt(currentTarget));
                }}> 
            </TextInput>
            <Icon 
                name="chevron-down" 
                size={70} 
                color="#111" 
                onPress={() => {decreasePlayers()}} 
                style={styles2.arrow} 
            />
            <Button 
                title="Next" 
                onPress={() => submitPlayerCount(playerCount)}
            />
        </>
    );
};

const styles = StyleSheet.create({
    input: {
        fontSize: 70,
        padding: 10,
    },
});

const styles2 = StyleSheet.create({
    arrow: {
        padding: 20,
    },
});

export default PlayerCounter;