import { DELETE_COURSE } from "../constants";

export const deleteCourse = (courseId) => ({
  type: DELETE_COURSE,
  courseId,
});
