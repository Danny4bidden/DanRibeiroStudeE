

import React, { useState } from "react";
import { Text, View, StyleSheet, Switch } from "react-native";

export default function SettingsScreen() {
  const [notificationsEnabled, setNotificationsEnabled] = useState(false);
  const [contrastEnabled, setContrastEnabled] = useState(false);

  const toggleNotifications = () => {
    setNotificationsEnabled(!notificationsEnabled);
  };

  const toggleContrast = () => {
    setContrastEnabled(!contrastEnabled);
  };

  return (
    <View style={[styles.container, contrastEnabled && styles.containerContrast]}>
      <Text style={[styles.title, contrastEnabled && styles.titleContrast]}></Text>
      <View style={styles.switchContainer}>
        <Text style={[styles.switchText, contrastEnabled && styles.switchTextContrast]}>Notificações</Text>
        <Switch value={notificationsEnabled} onValueChange={toggleNotifications} />
      </View>
      <View style={styles.switchContainer}>
        <Text style={[ styles.switchText, contrastEnabled && styles.switchTextContrast]}>Contraste</Text>
        <Switch value={contrastEnabled} onValueChange={toggleContrast} />
      </View>
      <Text style={[styles.additionalText, contrastEnabled && styles.additionalTextContrast]}>
            Ao ativar esta opção, o aplicativo mudará o aspecto da cor e contraste de um modo específico, fazendo com que pessoas com certa dificuldade visual terão melhor visibilidade</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgb(121, 121, 121)",
  },
  containerContrast: {
    backgroundColor: "#000",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#333",
  },
  titleContrast: {
    color: "#fff",
  },
  switchContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    align:"Left",
    
  },
  switchText: {
    marginRight: 10,
    color: "#333",
    textAlign:"left",
    fontWeight:"bold",
  },
  switchTextContrast: {
    color: "#fff",
  },
  additionalText: {
    marginRight: 10,
    color: "rgb(220, 220, 220)",
    textAlign:"left",
    fontWeight:"bold",
  },
  additionalTextContrast: {
    color: "#fff",
  },
  
});