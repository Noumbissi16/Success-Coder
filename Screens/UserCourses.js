import {
  Alert,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import EmptyMsg from "../components/EmptyMsg";
import globalStyles from "../Styles/globalStyles";
import { AntDesign } from "@expo/vector-icons";
import { deleteCourse } from "../redux/actions/deleteCourse";

const UserCourses = ({ navigation }) => {
  const loggedInMemberCourses = useSelector(
    (state) => state.courses.loggedInMemberCourses
  );
  const dispatch = useDispatch();
  const handleDeleteCourse = (courseId) => {
    Alert.alert("ATTENTION", "Voulez-vous supprimer ce cours?", [
      { text: "NON" },
      { text: "OUI", onPress: () => dispatch(deleteCourse(courseId)) },
    ]);
  };

  if (loggedInMemberCourses) {
    return (
      <FlatList
        data={loggedInMemberCourses}
        renderItem={({ item }) => (
          <View style={styles.courseContainer}>
            <View style={styles.courseInfo}>
              <Text style={styles.courseTitle} numberOfLines={1}>
                {item.title}
              </Text>
              <Text style={styles.coursePrice}>{item.price} $</Text>
            </View>
            <View style={styles.btnIcons}>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("Edit", {
                    courseId: item.id,
                  })
                }
              >
                <AntDesign name="edit" size={24} color={globalStyles.green} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleDeleteCourse(item.id)}>
                <AntDesign name="delete" size={24} color={globalStyles.green} />
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
    );
  }
  return <EmptyMsg text={"Pas de cours a afficher"} />;
};

export default UserCourses;

const styles = StyleSheet.create({
  courseContainer: {
    backgroundColor: globalStyles.white,
    borderRadius: 10,
    marginVertical: 9,
    marginHorizontal: 17,
    paddingTop: 15,
    paddingBottom: 15,
    paddingRight: 9,
    paddingLeft: 9,
  },
  courseInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 9,
    paddingHorizontal: 9,
  },
  courseTitle: {
    width: "80%",
  },
  coursePrice: {
    color: globalStyles.green,
  },
  btnIcons: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",

    paddingTop: 12,
  },
});
