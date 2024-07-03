export default class HolbertonCourse {
  /**
     * This will create a new @see {@link HolbertonCourse}.
     *
     */
  constructor(name, length, students) {
    this.name = name;
    this.length = length;
    this.students = students;
  }

  /**
     * this gets and return the name of this course.
     */
  get name() {
    return this._name;
  }

  /**
     * this will set the course name.
     */
  set name(value) {
    if (typeof value !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = value;
  }

  /**
     * this gets and returns course length.
     */
  get length() {
    return this._length;
  }

  /**
     * Sets the length of this course (in months).
     */
  set length(value) {
    if (typeof value !== 'number') {
      throw new TypeError('Length must be a number');
    }
    this._length = value;
  }

  /**
     * this will get the student names in this course.
     */
  get students() {
    return this._students;
  }

  /**
     * thiis will set the names of various students in this course.
     */
  set students(value) {
    if (!(value instanceof Array)) {
      throw new TypeError('Students must be an array of strings');
    }
    if (!value.every((student) => typeof student === 'string')) {
      throw new TypeError('Students must be an array of strings');
    }
    this._students = value;
  }
}
