import { StyleSheet, Text, View } from "react-native";
import React from "react";
import globalStyles from "../Styles/globalStyles";

const CourseOverview = ({ price, title }) => {
  return (
    <View style={styles.courseContainer}>
      <Text numberOfLines={1} style={styles.title}>
        {title}
      </Text>
      <Text style={styles.price}>{price}</Text>
    </View>
  );
};

export default CourseOverview;

const styles = StyleSheet.create({
  courseContainer: {
    backgroundColor: globalStyles.white,
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    marginTop: 9,
  },
  title: {
    width: "70%",
  },
  price: {
    color: globalStyles.dimGray,
  },
});
