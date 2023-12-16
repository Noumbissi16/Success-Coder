import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import globalStyles from "../Styles/globalStyles";

const BtnForm = ({ btnText, active, handlePress }) => {
  return (
    <Pressable onPress={handlePress} disabled={active}>
      <View
        style={{
          ...styles.btnContainer,
          backgroundColor: active ? globalStyles.orange : globalStyles.green,
        }}
      >
        <Text
          style={{
            ...styles.btnText,
            color: active ? globalStyles.darkGrey : globalStyles.white,
          }}
        >
          {btnText}
        </Text>
      </View>
    </Pressable>
  );
};

export default BtnForm;

const styles = StyleSheet.create({
  btnContainer: {
    marginTop: 20,
    borderRadius: 6,
    paddingVertical: 9,
    paddingHorizontal: 25,
    backgroundColor: globalStyles.orange,
  },
  btnText: {
    fontSize: 19,
    textAlign: "center",
    color: globalStyles.white,
  },
});
