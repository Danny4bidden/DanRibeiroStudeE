import React, { useState } from "react";
import { Text, View, StyleSheet, ScrollView } from "react-native";
import { Picker } from '@react-native-picker/picker';

export default props => {
  const [selectedValue, setSelectedValue] = useState("");
  const [displayText, setDisplayText] = useState("");
  const optionTexts = {
    opcao1: "A metodologia de estudo funciona bem para aqueles que querem ter uma melhor gestão de tempo. O método consiste em fazer alternâncias entre momentos de foco e de relaxamento. Basicamente é fazer 25 minutos de estudo para cada 5 minutos de descanso. Esse processo pode ser adaptado da sua maneira, com os tempos que preferir. Mas, lembre-se que o tempo de estudo deve ser maior que o de descanso, respeitando os períodos de foco e concentração.",
    opcao2: "Texto da Opção ",
    opcao3: "Texto",
    opcao4: "Texto da Opção 4",
    opcao5: "Texto da Opção 5",
  };

  const handleValueChange = (itemValue, itemIndex) => {
    setSelectedValue(itemValue);
    setDisplayText(optionTexts[itemValue] || ""); 
  };

  return (
    <View style={styles.container}>
      <Text>Tela para métodos</Text>
      <ScrollView style={styles.scrollContainer}>
        <Picker
          selectedValue={selectedValue}
          style={styles.dropdown}
          onValueChange={handleValueChange}
        >
          <Picker.Item label="Técnica Pomodoro" value="opcao1" />
          <Picker.Item label="Opção 2" value="opcao2" />
          <Picker.Item label="Opção 3" value="opcao3" />
          <Picker.Item label="Opção 4" value="opcao4" />
          <Picker.Item label="Opção 5" value="opcao5" />
        </Picker>
      </ScrollView>
      {displayText !== "" && <Text>Método elecionado: {displayText}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  scrollContainer: {
    width: 200,
    marginTop: 20
  },
  dropdown: {
    height: 40,
  }
});