import { PlayerCounterProps } from "../types/types";
import { View, Text, TextInput, Button } from 'react-native';
import React from "react";

function PlayerCounter({
    playerCount,
    setPlayerCount,
    submitPlayerCount,
}: PlayerCounterProps) {

    return (
        <>
            <TextInput
                placeholder="Please enter number of players"
                value={playerCount.toString()}
                onChangeText={(currentTarget) => {
                    setPlayerCount(parseInt(currentTarget));
                }}> 
            </TextInput>
            <Button 
                title="Next" 
                onPress={() => submitPlayerCount(playerCount)}
            />
        </>
    );
}

export default PlayerCounter;