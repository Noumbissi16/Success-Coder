import CartCourse from "../../data/cartCourseModel";
import {
  ADD_PAYMENT,
  ADD_TO_CART,
  DELETE_COURSE,
  REMOVE_COURSE_CART,
} from "../constants";

const initialState = {
  cartCourses: [],
  total: 0,
};

const reducerCart = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const course = action.course;

      const newCourse = new CartCourse(
        course.id,
        course.price,
        course.title
      ).toJSON();

      return {
        ...state,
        cartCourses: state.cartCourses.concat(newCourse),
        total: state.total + course.price,
      };
    case REMOVE_COURSE_CART:
      const idResult = state.cartCourses.findIndex(
        (course) => course.id === action.productId
      );
      const newCartCourses = [...state.cartCourses];
      newCartCourses.splice(idResult, 1);
      const coursePrice = state.cartCourses[idResult].price;
      return {
        ...state,
        cartCourses: newCartCourses,
        total: state.total - coursePrice,
      };
    case ADD_PAYMENT:
      return initialState;
    case DELETE_COURSE:
      const idCourse = state.cartCourses.findIndex(
        (course) => course.id === action.courseId
      );

      const courseinfo = state.cartCourses[idCourse];
      if (idCourse >= 0) {
        const updatedCourses = [...state.cartCourses];
        updatedCourses.splice(idCourse, 1);
        return {
          ...state,
          cartCourses: updatedCourses,
          total: state.total - courseinfo.price,
        };
      }
    default:
      return state;
  }
};

export default reducerCart;
