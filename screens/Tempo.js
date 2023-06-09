import React from "react";
import { Text, View, StyleSheet } from "react-native";

export default props => {
    return (
        <View style={style.telas}>
            <Text>Tela da ampulheta</Text>
        </View>
    )
}

const style= StyleSheet.create({
    telas: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    }
  })