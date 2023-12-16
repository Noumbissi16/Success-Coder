import { ScrollView, StyleSheet, View } from "react-native";
import React, { useReducer } from "react";
import globalStyles from "../Styles/globalStyles";
import { useDispatch, useSelector } from "react-redux";
import { editCourse } from "../redux/actions/editCourse";
import createCourse from "../redux/actions/createCourse";
import { formReducer } from "../formData/formReducer";
import Input from "../components/Input";
import BtnForm from "../components/BtnForm";

const UserEditCourse = ({ route, navigation }) => {
  const courseId = route.params.courseId;
  const myCourse = useSelector((state) =>
    state.courses.loggedInMemberCourses.find((course) => course.id === courseId)
  );
  const dispatch = useDispatch();

  const formInitialState = {
    inputValues: {
      title: myCourse ? myCourse.title : "",
      img: myCourse ? myCourse.image : "",
      price: "",
      desc: myCourse ? myCourse.description : "",
    },
    isValidInput: {
      title: myCourse ? true : false,
      img: myCourse ? true : false,
      price: myCourse ? true : false,
      desc: myCourse ? true : false,
    },
    isValidForm: myCourse ? true : false,
  };

  const [formState, formActionsDispatch] = useReducer(
    formReducer,
    formInitialState
  );

  const handlePress = () => {
    const { title, img, price, desc } = formState.inputValues;
    if (courseId) {
      // mise a jours
      dispatch(editCourse(courseId, title, img, desc));
    } else {
      // creation
      dispatch(createCourse(title, desc, img, +price));
    }
    navigation.goBack();
  };

  const inputHandler = (inputName, text) => {
    let isValidInput = false;
    if (text.length > 0) {
      isValidInput = true;
    }
    // dispatch l'action
    formActionsDispatch({
      type: "INPUT_VALIDATION",
      value: text,
      isValid: isValidInput,
      input: inputName,
    });
  };

  return (
    <ScrollView>
      <View style={styles.formContainer}>
        <Input
          label="Titre"
          value={formState.inputValues.title}
          onKeyStroke={(text) => inputHandler("title", text)}
        />
        <Input
          label="Image (URL)"
          value={formState.inputValues.img}
          onKeyStroke={(text) => inputHandler("img", text)}
        />
        {myCourse ? null : (
          <Input
            label="Prix"
            value={formState.inputValues.price}
            onKeyStroke={(text) => inputHandler("price", text)}
            keyboardType="decimal-pad"
          />
        )}
        <Input
          label="Informations"
          value={formState.inputValues.desc}
          onKeyStroke={(text) => inputHandler("desc", text)}
          multiline
          numberOfLines={10}
        />

        <BtnForm
          btnText={
            formState.isValidForm
              ? "Valider"
              : "Veuillez remplir tous les champs"
          }
          active={formState.isValidForm ? false : true}
          handlePress={handlePress}
        />
      </View>
    </ScrollView>
  );
};

export default UserEditCourse;

const styles = StyleSheet.create({
  formContainer: {
    backgroundColor: globalStyles.white,
    borderRadius: 9,
    padding: 20,
    margin: 20,
  },
});
