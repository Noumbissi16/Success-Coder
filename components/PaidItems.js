import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import globalStyles from "../Styles/globalStyles";
import { AntDesign } from "@expo/vector-icons";
import CourseOverview from "./CourseOverview";

const PaidItems = ({ totalPrice, date, courseDetails }) => {
  const [isShowing, setisShowing] = useState(false);
  const handleShow = () => {
    setisShowing((prevState) => !prevState);
  };
  return (
    <ScrollView style={styles.paidCoursesContainer}>
      <View style={styles.paidCourses}>
        <Text style={styles.total}>{totalPrice.toFixed(2)} $</Text>
        <Text style={styles.date}>{date}</Text>
      </View>
      <TouchableOpacity style={styles.iconBtn} onPress={handleShow}>
        <AntDesign
          name={isShowing ? "minuscircleo" : "pluscircleo"}
          size={24}
          color={globalStyles.green}
        />
      </TouchableOpacity>
      {isShowing && (
        <View style={styles.detailPaidCourses}>
          {courseDetails.courses.map((course) => (
            <CourseOverview
              key={course.id}
              title={course.title}
              price={course.price}
            />
          ))}
        </View>
      )}
    </ScrollView>
  );
};

export default PaidItems;

const styles = StyleSheet.create({
  paidCoursesContainer: {
    backgroundColor: globalStyles.white,
    borderRadius: 10,
    margin: 20,
    padding: 15,
  },
  paidCourses: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    marginBottom: 15,
  },
  total: {
    fontSize: 18,
  },
  date: {
    fontSize: 16,
  },
  iconBtn: {
    alignSelf: "flex-end",
  },
  detailPaidCourses: {
    marginTop: 20,
    borderTopColor: globalStyles.lightGrey,
    borderTopWidth: 1,
  },
});
