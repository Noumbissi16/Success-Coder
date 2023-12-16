import CourseModel from "../../data/CourseModel";
import COURSES from "../../data/testData";
import {
  ADD_TO_CART,
  CREATE_COURSE,
  DELETE_COURSE,
  EDIT_COURSE,
  REMOVE_COURSE_CART,
} from "../constants";

const initialState = {
  existingCourses: COURSES,
  loggedInMemberCourses: COURSES.filter(
    (course) => course.instructorId === "1"
  ),
};

const reducerCourses = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const idCourseToModify = state.existingCourses.findIndex(
        (course) => course.id === action.course.id
      );

      if (idCourseToModify !== -1) {
        // Create a new array with the modified course
        const updatedCourses = state.existingCourses.map((course, index) => {
          if (index === idCourseToModify) {
            return {
              ...course,
              selected: true,
            };
          }
          return course;
        });

        return {
          ...state,
          existingCourses: updatedCourses,
          loggedInMemberCourses: state.loggedInMemberCourses,
        };
      }

      return state;
    case REMOVE_COURSE_CART:
      const idCourseToDeleteFromCart = state.existingCourses.findIndex(
        (course) => course.id === action.productId
      );

      if (idCourseToDeleteFromCart) {
        // Create a new array with the modified course
        const updatedCourses = state.existingCourses.map((course, index) => {
          if (index === idCourseToDeleteFromCart) {
            return {
              ...course,
              selected: false,
            };
          }
          return course;
        });

        return {
          ...state,
          existingCourses: updatedCourses,
          loggedInMemberCourses: state.loggedInMemberCourses,
        };
      }

      return state;
    case DELETE_COURSE:
      return {
        ...state,
        existingCourses: state.existingCourses.filter(
          (course) => course.id !== action.courseId
        ),
        loggedInMemberCourses: state.loggedInMemberCourses.filter(
          (course) => course.id !== action.courseId
        ),
      };
    case EDIT_COURSE:
      const courseId = action.courseId;
      const indexCourseToUpdate = state.loggedInMemberCourses.findIndex(
        (course) => course.id === courseId
      );

      const updatedCourse = new CourseModel(
        courseId,
        action.updatedCourse.title,
        action.updatedCourse.description,
        action.updatedCourse.image,
        state.loggedInMemberCourses[indexCourseToUpdate].price,
        state.loggedInMemberCourses[indexCourseToUpdate].selected,
        state.loggedInMemberCourses[indexCourseToUpdate].instructorId
      ).toJSON();

      const newLoggedInMemberCourses = [...state.loggedInMemberCourses];

      newLoggedInMemberCourses[indexCourseToUpdate] = updatedCourse;

      const idExistingCourse = state.existingCourses.findIndex(
        (course) => course.id === courseId
      );

      const updatedExistingCourse = [...state.existingCourses];
      updatedExistingCourse[idExistingCourse] = updatedCourse;

      return {
        ...state,
        existingCourses: updatedExistingCourse,
        loggedInMemberCourses: newLoggedInMemberCourses,
      };
    case CREATE_COURSE:
      const newCourse = new CourseModel(
        Date.now().toString(),
        action.newCourse.title,
        action.newCourse.description,
        action.newCourse.image,
        action.newCourse.price,
        false,
        "1"
      ).toJSON();

      return {
        ...state,
        existingCourses: state.existingCourses.concat(newCourse),
        loggedInMemberCourses: state.loggedInMemberCourses.concat(newCourse),
      };
    default:
      return state;
  }
};

export default reducerCourses;
