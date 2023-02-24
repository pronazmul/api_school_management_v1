const colors = require('colors')
let bcrypt = require('bcrypt')
const { mongooseConnection } = require('./db')
const {
  UsersData,
  TeachersData,
  ParentData,
  StudentData,
  SubjectData,
  ClassData,
  EventData,
  NotificationData,
  FeesData,
} = require('./data')
const {
  randomValueFromArray,
  randomMultipleFromArray,
} = require('../utils/array')

// Configuration
require('dotenv').config()
mongooseConnection()

//Models
const SessionModel = require('./../models/Session')
const UserModel = require('./../models/People')
const TeacherModel = require('./../models/Teacher')
const StudentModel = require('./../models/Student')
const ParentModel = require('./../models/Parent')
const ClassModel = require('./../models/Class')
const AttendanceModel = require('./../models/Attendance')
const SubjectModel = require('./../models/Subject')
const MarkModel = require('./../models/Mark')
const FeesModel = require('./../models/Fees')
const EventModel = require('./../models/Event')
const NotificationModel = require('./../models/Notification')
const { emptyDirectory } = require('../utils/files')

// IMPROT DATA SEEDER:
const importData = async () => {
  try {
    //DESTROY FIRST
    await SessionModel.deleteMany()
    await UserModel.deleteMany()
    await TeacherModel.deleteMany()
    await StudentModel.deleteMany()
    await ParentModel.deleteMany()
    await ClassModel.deleteMany()
    await AttendanceModel.deleteMany()
    await SubjectModel.deleteMany()
    await MarkModel.deleteMany()
    await FeesModel.deleteMany()
    await EventModel.deleteMany()
    await NotificationModel.deleteMany()

    // Empty Uploaded Files
    emptyDirectory('users')
    emptyDirectory('students')
    emptyDirectory('teachers')
    emptyDirectory('events')
    emptyDirectory('parents')

    //IMPORT USERS

    const hashedUser = await Promise.all(
      UsersData.map(async (doc) => {
        return { ...doc, password: await bcrypt.hash(doc.password, 10) }
      })
    )
    const usersArray = await UserModel.insertMany(hashedUser)
    const usersIds = usersArray.map((data) => data._id)

    //IMPORT TEACHERS
    const hashedTeacher = await Promise.all(
      TeachersData.map(async (doc) => {
        return { ...doc, password: await bcrypt.hash(doc.password, 10) }
      })
    )
    const teacherArray = await TeacherModel.insertMany(hashedTeacher)
    const teacherIds = teacherArray.map((data) => data._id)

    //IMPORT STUDENTS

    const hashedStudents = await Promise.all(
      StudentData.map(async (doc) => {
        return { ...doc, password: await bcrypt.hash(doc.password, 10) }
      })
    )
    const studentArray = await StudentModel.insertMany(hashedStudents)
    const studentIds = studentArray.map((data) => data._id)

    //IMPORT PARENTS
    const hashedParents = await Promise.all(
      ParentData.map(async (doc) => {
        return { ...doc, password: await bcrypt.hash(doc.password, 10) }
      })
    )
    const prepareParents = hashedParents.map((item) => {
      let children = studentIds.splice(0, 2)
      return {
        ...item,
        children,
      }
    })
    const parentArray = await ParentModel.insertMany(prepareParents)
    const parentIds = parentArray.map((data) => data._id)

    // IMPORT SUBJECTS
    const prepareSubjects = SubjectData.map((item) => {
      let teacher_in_charge = randomValueFromArray(teacherIds)
      return {
        ...item,
        teacher_in_charge,
      }
    })
    const subjectArray = await SubjectModel.insertMany(prepareSubjects)
    const subjectIds = subjectArray.map((data) => data._id)

    // IMPORT CLASSES
    const prepareClasses = ClassData.map((item) => {
      let teacher_in_charge = randomValueFromArray(teacherIds)
      return {
        ...item,
        teacher_in_charge,
      }
    })
    const classArray = await ClassModel.insertMany(prepareClasses)
    const classIds = classArray.map((data) => data._id)

    // IMPORT FEES DATA
    const prepareFees = FeesData.map((item) => {
      let student = studentIds.splice(0, 1)[0]
      return {
        ...item,
        student,
      }
    })
    const feesArray = await FeesModel.insertMany(prepareFees)
    const feesIds = feesArray.map((data) => data._id)

    //IMPORT EVENTS
    const eventsArray = await EventModel.insertMany(EventData)
    const eventIds = eventsArray.map((data) => data._id)

    //IMPORT NOTIFICATIONS
    const notificationArray = await NotificationModel.insertMany(
      NotificationData
    )
    const notificationIds = notificationArray.map((data) => data._id)

    console.log('Data Inserted'.magenta.inverse)
    process.exit()
  } catch (error) {
    console.log(`Error: ${error}`.red.inverse)
    process.exit(1)
  }
}

// DESTROY DATA SEEDER
const destroyData = async () => {
  try {
    await SessionModel.deleteMany()
    await UserModel.deleteMany()
    await TeacherModel.deleteMany()
    await StudentModel.deleteMany()
    await ParentModel.deleteMany()
    await ClassModel.deleteMany()
    await AttendanceModel.deleteMany()
    await SubjectModel.deleteMany()
    await MarkModel.deleteMany()
    await FeesModel.deleteMany()
    await EventModel.deleteMany()
    await NotificationModel.deleteMany()

    // Empty Uploaded Files
    emptyDirectory('users')
    emptyDirectory('students')
    emptyDirectory('teachers')
    emptyDirectory('events')
    emptyDirectory('parents')

    console.log('Data Destroyed Successfully'.rainbow.bold)
    process.exit()
  } catch (error) {
    console.log(`Error ${error.message}`.red.bold)
    process.exit(1)
  }
}

// SEEDER COMMAND PREFIXER
if (process.argv[2] === '-d') {
  destroyData()
} else {
  importData()
}
