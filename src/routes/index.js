const router = require('express').Router()
const userRoutes = require('./user')
const authRoutes = require('./auth')
const publicRoutes = require('./public')
const attendanceRoutes = require('./attendance')
const classRoutes = require('./class')
const subjectRoutes = require('./subject')
const eventRoutes = require('./event')
const feesRoutes = require('./fees')
const markRoutes = require('./mark')
const examRoutes = require('./exam')
const notificationRoutes = require('./notification')
const parentRoutes = require('./parent')
const studentRoutes = require('./student')
const teacherRoutes = require('./teacher')

// Middlewares
const authenticate = require('../middlewares/auth/authenticate')

//Health Checker
router.use('/health', (_req, res) => res.status(200).json({ status: 'ok' }))

// Public Routes
router.use('/public', publicRoutes)

// Application Routes
router.use('/api/v1/auth', authRoutes)
router.use('/api/v1/users', authenticate, userRoutes)

router.use('/api/v1/parents', parentRoutes)
router.use('/api/v1/students', studentRoutes)
router.use('/api/v1/teachers', teacherRoutes)
router.use('/api/v1/classes', classRoutes)
router.use('/api/v1/subjects', subjectRoutes)
router.use('/api/v1/notifications', notificationRoutes)
router.use('/api/v1/events', eventRoutes)

router.use('/api/v1/marks', markRoutes)
router.use('/api/v1/attendances', attendanceRoutes)
router.use('/api/v1/fees', feesRoutes)
router.use('/api/v1/exams', examRoutes)

// Module Exports
module.exports = router
