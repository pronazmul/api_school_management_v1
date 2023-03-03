const peopleProjection = '_id name email mobile avatar dob gender createdAt'

const teacherProjection =
  '_id teacher_name mobile email dob department qualifications avatar address createdAt'

const studentProjection =
  '_id student_name roll_number mobile email dob gender blood_group avatar address createdAt'

const parentProjection =
  '_id parent_name mobile relation children avatar createdAt'

const classProjection = '_id class_name number_of_students schedule createdAt'

const subjectProjection = '_id subject_name syllabus createdAt'

const attendanceProjection = '_id createdAt '

const eventProjection = '_id createdAt'

const feesProjection = '_id createdAt'

const marksProjection = '_id createdAt'

const notificationProjection = '_id title message date createdAt'

module.exports = {
  peopleProjection,
  attendanceProjection,
  classProjection,
  eventProjection,
  feesProjection,
  marksProjection,
  notificationProjection,
  parentProjection,
  studentProjection,
  subjectProjection,
  teacherProjection,
}
