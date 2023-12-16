import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import globalStyles from "../Styles/globalStyles";
import { MaterialIcons } from "@expo/vector-icons";
import { addToCart } from "../redux/actions/addToCart";

const CourseInfo = ({ navigation, route }) => {
  const courseId = route.params.courseId;

  const selectedCourse = useSelector((state) =>
    state.courses.existingCourses.find((course) => course.id === courseId)
  );

  const dispatch = useDispatch();

  const handleAddtoCart = () => {
    dispatch(addToCart(selectedCourse));
    navigation.goBack();
    alert("Article ajouter au panier");
  };
  return (
    <View>
      <ScrollView style={styles.scrollView}>
        <Image
          source={{ uri: selectedCourse.image }}
          style={styles.courseImage}
        />

        <View style={styles.courseDetail}>
          <Text style={styles.courseDescription}>
            {selectedCourse.description}
          </Text>
          <Text style={styles.courseDescription}>
            {selectedCourse.description}
          </Text>
          <Text style={styles.courseDescription}>
            {selectedCourse.description}
          </Text>
          <Text style={styles.courseDescription}>
            {selectedCourse.description}
          </Text>
          <Text style={styles.courseDescription}>
            {selectedCourse.description}
          </Text>
        </View>
      </ScrollView>
      <View style={styles.footerContainer}>
        <View style={styles.footerTop}>
          <View style={styles.coursePriceWraper}>
            <Text style={styles.coursePrice}>
              {selectedCourse.price.toFixed(2)} $
            </Text>
          </View>
        </View>
        <View style={styles.footerBottom}>
          <MaterialIcons
            name="arrow-back-ios"
            size={24}
            color={globalStyles.white}
            onPress={() => {
              navigation.goBack();
            }}
          />

          <TouchableOpacity onPress={handleAddtoCart}>
            <View style={styles.btnAddCart}>
              <Text style={styles.btnText}>Ajouter au panier</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default CourseInfo;

const styles = StyleSheet.create({
  scrollView: { backgroundColor: globalStyles.white, height: "80%" },
  courseImage: { width: "100%", height: 250 },
  courseDetail: { padding: 20, alignItems: "center" },
  courseDescription: {
    color: globalStyles.dimGray,
    fontSize: 17,
    marginHorizontal: 20,
    marginVertical: 10,
  },
  footerContainer: {
    height: "20%",
  },
  footerTop: {
    height: "40%",
    alignItems: "flex-end",
    justifyContent: "center",
  },
  coursePriceWraper: {
    paddingRight: 40,
  },
  coursePrice: {
    fontSize: 24,
    color: globalStyles.green,
  },
  footerBottom: {
    backgroundColor: globalStyles.green,
    height: "60%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 30,
  },
  btnAddCart: {
    borderRadius: 6,
    paddingVertical: 9,
    paddingHorizontal: 25,
    backgroundColor: globalStyles.lightOrange,
  },
  btnText: {
    fontSize: 19,
  },
});
