class CourseModel {
  constructor(id, title, description, image, price, selected, instructorId) {
    this.id = id;
    this.description = description;
    this.title = title;
    this.image = image;
    this.price = price;
    this.selected = selected;
    this.instructorId = instructorId;
  }
  toJSON() {
    return {
      id: this.id,
      description: this.description,
      title: this.title,
      image: this.image,
      price: this.price,
      selected: this.selected,
      instructorId: this.instructorId,
    };
  }
}

export default CourseModel;
