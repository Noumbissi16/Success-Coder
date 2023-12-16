import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import globalStyles from "../Styles/globalStyles";
import { MaterialIcons } from "@expo/vector-icons";

const CoursesInCart = ({ title, price, onDelete }) => {
  return (
    <View style={styles.coursesContainer}>
      <Text numberOfLines={1} style={styles.title}>
        {title}
      </Text>
      <Text style={styles.price}>{price} $</Text>
      <TouchableOpacity onPress={onDelete}>
        <MaterialIcons name="delete" size={24} color={globalStyles.green} />
      </TouchableOpacity>
    </View>
  );
};

export default CoursesInCart;

const styles = StyleSheet.create({
  coursesContainer: {
    backgroundColor: globalStyles.white,
    flexDirection: "row",
    borderRadius: 10,
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    marginBottom: 9,
  },
  title: {
    width: "60%",
  },
  price: {
    textAlign: "right",
    paddingRight: 9,
    width: "30%",
  },
});
