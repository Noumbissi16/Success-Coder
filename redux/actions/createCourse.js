import { CREATE_COURSE } from "../constants";

const createCourse = (title, description, image, price) => ({
  type: CREATE_COURSE,
  newCourse: {
    title,
    description,
    image,
    price,
  },
});

export default createCourse;
