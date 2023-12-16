import { StyleSheet, Text, View } from "react-native";
import React from "react";
import globalStyles from "../Styles/globalStyles";

const EmptyMsg = ({ text }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

export default EmptyMsg;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: "center",
  },
  text: {
    color: globalStyles.green,
    fontSize: 19,
  },
});
