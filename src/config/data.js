const globalData = {
  companyName: 'Youline',
  supportPhone: '+8801700000000',
  timeZone: 'UTC-6',
  reactionConfig: [
    { type: 1, title: 'smile', schema: 'reactionSmileCount' },
    { type: 2, title: 'love', schema: 'reactionloveCount' },
    { type: 3, title: 'haha', schema: 'reactionHahaCount' },
    { type: 4, title: 'insightful', schema: 'reactionInsightfulCount' },
    { type: 5, title: 'angry', schema: 'reactionAngryCount' },
  ],
  reportConfig: [
    {
      id: 1,
      title: 'Sexual content',
    },
    {
      id: 2,
      title: 'Violent or repulsive content',
    },
    {
      id: 3,
      title: 'Harassment or bullying',
    },
    {
      id: 4,
      title: 'Harmfull or dangerous acts',
    },
    {
      id: 5,
      title: 'Child abuse',
    },
    {
      id: 6,
      title: 'Infringes my rights',
    },
    {
      id: 7,
      title: 'Promotes terrorism',
    },
    {
      id: 8,
      title: 'Spam or misleading',
    },
  ],
}

const UsersData = [
  {
    name: 'John Smith',
    password: 'Password@1234',
    email: 'jsmith@example.com',
    mobile: '01760000005',
    about: 'I am a software engineer.',
    dob: '1990-01-01',
    gender: 'male',
  },
  {
    name: 'Jane Doe',
    password: 'Password@1234',
    email: 'jdoe@example.com',
    mobile: '01760000006',
    about: 'I am a marketing specialist.',
    dob: '1992-02-01',
    gender: 'female',
  },
  {
    name: 'David Lee',
    password: 'Password@1234',
    email: 'dlee@example.com',
    mobile: '01760000007',
    about: 'I am a business analyst.',
    dob: '1988-03-01',
    gender: 'male',
  },
  {
    name: 'Maria Rodriguez',
    password: 'Password@1234',
    email: 'mrodriguez@example.com',
    mobile: '01760000008',
    about: 'I am a graphic designer.',
    dob: '1995-04-01',
    gender: 'female',
  },
  {
    name: 'Chris Johnson',
    password: 'Password@1234',
    email: 'cjohnson@example.com',
    mobile: '01760000009',
    about: 'I am a fitness trainer.',
    dob: '1993-05-01',
    gender: 'male',
  },
  {
    name: 'Samantha Lee',
    password: 'Password@1234',
    email: 'slee@example.com',
    mobile: '01760000010',
    about: 'I am a writer.',
    dob: '1991-06-01',
    gender: 'female',
  },
  {
    name: 'Michael Kim',
    password: 'Password@1234',
    email: 'mkim@example.com',
    mobile: '01760000011',
    about: 'I am a software developer.',
    dob: '1989-07-01',
    gender: 'male',
  },
  {
    name: 'Amanda Nguyen',
    password: 'Password@1234',
    email: 'anguyen@example.com',
    mobile: '01760000012',
    about: 'I am a human resources specialist.',
    dob: '1994-08-01',
    gender: 'female',
  },
  {
    name: 'Mark Brown',
    password: 'Password@1234',
    email: 'mbrown@example.com',
    mobile: '01760000013',
    about: 'I am a sales representative.',
    dob: '1996-09-01',
    gender: 'male',
  },
  {
    name: 'Laura Martinez',
    password: 'Password@1234',
    email: 'lmartinez@example.com',
    mobile: '01760000014',
    about: 'I am a customer service representative.',
    dob: '1997-10-01',
    gender: 'female',
  },
]

const TeachersData = [
  {
    teacher_name: 'John Smith',
    mobile: '01860000001',
    email: 'john.smith@example.com',
    password: 'Password@1234',
    dob: '1980-01-01',
    department: 'Mathematics',
    qualifications: [
      "Bachelor's Degree in Mathematics",
      "Master's Degree in Mathematics",
    ],
    address: {
      street: '123 Main St.',
      city: 'New York',
      state: 'NY',
      zipcode: '10001',
    },
  },
  {
    teacher_name: 'Jane Doe',
    mobile: '01860000002',
    email: 'jane.doe@example.com',
    password: 'Password@1234',
    dob: '1985-02-01',
    department: 'Science',
    qualifications: ["Bachelor's Degree in Biology", 'Ph.D. in Biology'],
    address: {
      street: '456 Elm St.',
      city: 'Boston',
      state: 'MA',
      zipcode: '02115',
    },
  },
  {
    teacher_name: 'David Lee',
    mobile: '01860000003',
    email: 'david.lee@example.com',
    password: 'Password@1234',
    dob: '1982-03-01',
    department: 'Social Studies',
    qualifications: ["Bachelor's Degree in History"],
    address: {
      street: '789 Oak St.',
      city: 'Chicago',
      state: 'IL',
      zipcode: '60601',
    },
  },
  {
    teacher_name: 'Maria Rodriguez',
    mobile: '01860000004',
    email: 'maria.rodriguez@example.com',
    password: 'Password@1234',
    dob: '1978-04-01',
    department: 'Languages',
    qualifications: [
      "Bachelor's Degree in Spanish",
      "Master's Degree in Spanish",
    ],
    address: {
      street: '321 Pine St.',
      city: 'Miami',
      state: 'FL',
      zipcode: '33131',
    },
  },
  {
    teacher_name: 'Chris Johnson',
    mobile: '01860000005',
    email: 'chris.johnson@example.com',
    password: 'Password@1234',
    dob: '1987-05-01',
    department: 'Physical Education',
    qualifications: ["Bachelor's Degree in Physical Education"],
    address: {
      street: '654 Cedar St.',
      city: 'Los Angeles',
      state: 'CA',
      zipcode: '90001',
    },
  },
  {
    teacher_name: 'Samantha Lee',
    mobile: '01860000006',
    email: 'samantha.lee@example.com',
    password: 'Password@1234',
    dob: '1984-06-01',
    department: 'Mathematics',
    qualifications: [
      "Bachelor's Degree in Mathematics",
      "Master's Degree in Mathematics",
      'Ph.D. in Mathematics',
    ],
    address: {
      street: '987 Maple St.',
      city: 'Seattle',
      state: 'WA',
      zipcode: '98101',
    },
  },
]

const StudentData = [
  {
    student_name: 'John Smith',
    roll_number: '2023001',
    mobile: '01946000001',
    email: 'jsmith@example.com',
    password: 'Password@1234',
    dob: '2005-06-12',
    gender: 'male',
    blood_group: 'A+',
    address: {
      street: '987 Maple St.',
      city: 'Seattle',
      state: 'WA',
      zipcode: '98101',
    },
  },
  {
    student_name: 'Jane Doe',
    roll_number: '2023002',
    mobile: '01946000002',
    email: 'jdoe@example.com',
    password: 'Password@1234',
    dob: '2005-07-15',
    gender: 'female',
    blood_group: 'B+',
    address: {
      street: '987 Maple St.',
      city: 'Seattle',
      state: 'WA',
      zipcode: '98101',
    },
  },
  {
    student_name: 'Bob Johnson',
    roll_number: '2023003',
    mobile: '01946000003',
    email: 'bjohnson@example.com',
    password: 'Password@1234',
    dob: '2006-02-10',
    gender: 'male',
    blood_group: 'AB+',
    address: {
      street: '987 Maple St.',
      city: 'Seattle',
      state: 'WA',
      zipcode: '98101',
    },
  },
  {
    student_name: 'Alice Smith',
    roll_number: '2023004',
    mobile: '01946000004',
    email: 'asmith@example.com',
    password: 'Password@1234',
    dob: '2004-12-20',
    gender: 'female',
    blood_group: 'O+',
    address: {
      street: '987 Maple St.',
      city: 'Seattle',
      state: 'WA',
      zipcode: '98101',
    },
  },
  {
    student_name: 'David Jones',
    roll_number: '2023005',
    mobile: '01946000005',
    email: 'djones@example.com',
    password: 'Password@1234',
    dob: '2005-10-30',
    gender: 'male',
    blood_group: 'A-',
    address: {
      street: '987 Maple St.',
      city: 'Seattle',
      state: 'WA',
      zipcode: '98101',
    },
  },
  {
    student_name: 'Emily Davis',
    roll_number: '2023006',
    mobile: '01946000006',
    email: 'edavis@example.com',
    password: 'Password@1234',
    dob: '2006-03-25',
    gender: 'female',
    blood_group: 'B-',
    address: {
      street: '987 Maple St.',
      city: 'Seattle',
      state: 'WA',
      zipcode: '98101',
    },
  },
  {
    student_name: 'Alex Rodriguez',
    roll_number: '2023007',
    mobile: '01946000007',
    email: 'arodriguez@example.com',
    password: 'Password@1234',
    dob: '2004-11-05',
    gender: 'male',
    blood_group: 'AB-',
    address: {
      street: '987 Maple St.',
      city: 'Seattle',
      state: 'WA',
      zipcode: '98101',
    },
  },
  {
    student_name: 'Samantha Lee',
    roll_number: '2023008',
    mobile: '01946000008',
    email: 'slee@example.com',
    password: 'Password@1234',
    dob: '2005-09-15',
    gender: 'female',
    blood_group: 'O-',
    address: {
      street: '987 Maple St.',
      city: 'Seattle',
      state: 'WA',
      zipcode: '98101',
    },
  },
  {
    student_name: 'George Wilson',
    roll_number: '2023009',
    mobile: '01946000009',
    email: 'gwilson@example.com',
    password: 'Password@1234',
    dob: '2006-01-01',
    gender: 'male',
    blood_group: 'A+',
    address: {
      street: '987 Maple St.',
      city: 'Seattle',
      state: 'WA',
      zipcode: '98101',
    },
  },
  {
    student_name: 'Thiago Silva',
    roll_number: '20230010',
    mobile: '01946000010',
    email: 'thiago@example.com',
    password: 'Password@1234',
    dob: '2004-01-08',
    gender: 'male',
    blood_group: 'A-',
    address: {
      street: 'Agargaon',
      city: 'Dhaka',
      state: 'Dhaka',
      zipcode: '98109',
    },
  },
]

const ParentData = [
  {
    parent_name: 'John Smith Sr.',
    mobile: '01346000001',
    email: 'jsmithsr@example.com',
    password: 'Password@1234',
    relation: 'Father',
    children: [],
  },
  {
    parent_name: 'Jane Doe Sr.',
    mobile: '01346000002',
    email: 'jdoesr@example.com',
    password: 'Password@1234',
    relation: 'Mother',
    children: [],
  },
  {
    parent_name: 'Alex Johnson',
    mobile: '01346000003',
    email: 'ajohnson@example.com',
    password: 'Password@1234',
    relation: 'Guardian',
    children: [],
  },
  {
    parent_name: 'Maria Garcia',
    mobile: '01346000004',
    email: 'mgarcia@example.com',
    password: 'Password@1234',
    relation: 'Mother',
    children: [],
  },
  {
    parent_name: 'David Lee',
    mobile: '01346000005',
    email: 'dlee@example.com',
    password: 'Password@1234',
    relation: 'Father',
    children: [],
  },
]

const ClassData = [
  {
    class_name: 1,
    number_of_students: 20,
    schedule: [
      {
        day: '2023-02-14',
        start_time: '08:30',
        end_time: '10:00',
      },
      {
        day: '2023-02-16',
        start_time: '09:00',
        end_time: '11:00',
      },
    ],
  },
  {
    class_name: 2,
    number_of_students: 18,
    schedule: [
      {
        day: '2023-02-13',
        start_time: '10:00',
        end_time: '11:30',
      },
      {
        day: '2023-02-15',
        start_time: '11:00',
        end_time: '13:00',
      },
    ],
  },
  {
    class_name: 3,
    number_of_students: 25,
    schedule: [
      {
        day: '2023-02-14',
        start_time: '11:00',
        end_time: '12:30',
      },
      {
        day: '2023-02-16',
        start_time: '10:30',
        end_time: '12:00',
      },
    ],
  },
  {
    class_name: 4,
    number_of_students: 22,
    schedule: [
      {
        day: '2023-02-12',
        start_time: '09:30',
        end_time: '11:00',
      },
      {
        day: '2023-02-14',
        start_time: '10:00',
        end_time: '12:00',
      },
    ],
  },
  {
    class_name: 5,
    number_of_students: 19,
    schedule: [
      {
        day: '2023-02-13',
        start_time: '13:00',
        end_time: '14:30',
      },
      {
        day: '2023-02-15',
        start_time: '14:00',
        end_time: '16:00',
      },
    ],
  },
  {
    class_name: 6,
    number_of_students: 21,
    schedule: [
      {
        day: '2023-02-12',
        start_time: '13:30',
        end_time: '15:00',
      },
      {
        day: '2023-02-14',
        start_time: '14:00',
        end_time: '16:00',
      },
    ],
  },
  {
    class_name: 7,
    number_of_students: 23,
    schedule: [
      {
        day: '2023-02-13',
        start_time: '09:30',
        end_time: '11:00',
      },
      {
        day: '2023-02-15',
        start_time: '10:00',
        end_time: '12:00',
      },
    ],
  },
]

const SubjectData = [
  {
    subject_name: 'Mathematics',
    syllabus: ['Algebra', 'Geometry', 'Trigonometry', 'Calculus'],
  },
  {
    subject_name: 'English',
    syllabus: ['Grammar', 'Literature', 'Writing'],
  },
  {
    subject_name: 'Science',
    syllabus: ['Biology', 'Chemistry', 'Physics'],
  },
  {
    subject_name: 'Social Studies',
    syllabus: ['History', 'Geography', 'Civics'],
  },
  {
    subject_name: 'Computer Science',
    syllabus: ['Programming', 'Data Structures', 'Algorithms'],
  },
  {
    subject_name: 'Art',
    syllabus: ['Drawing', 'Painting', 'Sculpture'],
  },
  {
    subject_name: 'Music',
    syllabus: ['Theory', 'Composition', 'Performance'],
  },
  {
    subject_name: 'Physical Education',
    syllabus: ['Sports', 'Fitness', 'Health'],
  },
  {
    subject_name: 'Languages',
    syllabus: ['French', 'Spanish', 'German'],
  },
  {
    subject_name: 'Economics',
    syllabus: ['Microeconomics', 'Macroeconomics', 'International Trade'],
  },
]

const AttendanceData = [
  {
    date: '2023-02-12',
    class: '',
    attendance: [
      {
        student: '',
        status: 'present',
      },
      {
        student: '',
        status: 'absent',
      },
    ],
  },
  {
    date: '2023-02-11',
    class: '',
    attendance: [
      {
        student: '',
        status: 'present',
      },
      {
        student: '',
        status: 'present',
      },
    ],
  },
  {
    date: '2023-02-10',
    class: '',
    attendance: [
      {
        student: '',
        status: 'absent',
      },
      {
        student: '',
        status: 'present',
      },
    ],
  },
  {
    date: '2023-02-09',
    class: '',
    attendance: [
      {
        student: '',
        status: 'absent',
      },
      {
        student: '',
        status: 'absent',
      },
    ],
  },
  {
    date: '2023-02-08',
    class: '',
    attendance: [
      {
        student: '',
        status: 'present',
      },
      {
        student: '',
        status: 'present',
      },
    ],
  },
  {
    date: '2023-02-07',
    class: '',
    attendance: [
      {
        student: '',
        status: 'absent',
      },
      {
        student: '',
        status: 'present',
      },
    ],
  },
]

const EventData = [
  {
    event_name: 'Annual Sports Day',
    date: '2023-02-28',
    startsAt: '09:00:00',
    endsAt: '15:00:00',
    venue: 'School Playground',
    description: 'A day full of exciting sports events for all students.',
  },
  {
    event_name: 'Parent-Teacher Meeting',
    date: '2023-03-10',
    startsAt: '16:00:00',
    endsAt: '19:00:00',
    venue: 'School Auditorium',
    description:
      "Opportunity for parents to meet their child's teachers and discuss academic progress.",
  },
  {
    event_name: 'Science Fair',
    date: '2023-04-15',
    startsAt: '10:00:00',
    endsAt: '14:00:00',
    venue: 'School Science Lab',
    description:
      'Students showcase their innovative and creative science projects.',
  },
  {
    event_name: 'Annual Day Celebration',
    date: '2023-05-20',
    startsAt: '17:00:00',
    endsAt: '21:00:00',
    venue: 'School Auditorium',
    description:
      'A cultural extravaganza showcasing the talents of our students.',
  },
  {
    event_name: 'Field Trip',
    date: '2023-06-05',
    startsAt: '08:00:00',
    endsAt: '16:00:00',
    venue: 'City Zoo',
    description:
      'An educational and fun-filled trip to the zoo for our students.',
  },
  {
    event_name: "Teacher's Day",
    date: '2023-09-05',
    startsAt: '10:00:00',
    endsAt: '11:30:00',
    venue: 'School Auditorium',
    description:
      'A special event to express gratitude and appreciation towards our teachers.',
  },
  {
    event_name: 'Independence Day Celebration',
    date: '2023-08-15',
    startsAt: '09:00:00',
    endsAt: '10:30:00',
    venue: 'School Ground',
    description: "A patriotic event to celebrate India's Independence Day.",
  },
  {
    event_name: 'Christmas Celebration',
    date: '2023-12-25',
    startsAt: '11:00:00',
    endsAt: '13:00:00',
    venue: 'School Auditorium',
    description:
      'A festive event to celebrate Christmas and spread joy and happiness.',
  },
  {
    event_name: 'Inter-School Debate Competition',
    date: '2023-07-10',
    startsAt: '10:00:00',
    endsAt: '14:00:00',
    venue: 'School Auditorium',
    description:
      'Students participate in a debating competition with other schools.',
  },
]

const NotificationData = [
  {
    title: 'Website maintenance',
    message: 'Our website will be down for maintenance tomorrow',
    date: '2022-03-16T02:00:00.000Z',
  },
  {
    title: 'New order',
    message: 'You have a new order from John',
    date: '2022-03-14T18:15:00.000Z',
  },
  {
    title: 'Meeting reminder',
    message: 'Your meeting with Jane is in 30 minutes',
    date: '2022-03-15T11:30:00.000Z',
  },
  {
    title: 'Product update',
    message: "We've released a new version of our app",
    date: '2022-03-13T16:30:00.000Z',
  },
  {
    title: 'New follower',
    message: 'You have a new follower on Twitter',
    date: '2022-03-14T09:15:00.000Z',
  },
  {
    title: 'Payment received',
    message: 'Your payment of $50.00 has been received',
    date: '2022-03-15T11:45:00.000Z',
  },
  {
    title: 'Reminder',
    message: 'Your appointment is tomorrow at 2:00 PM',
    date: '2022-03-16T14:00:00.000Z',
  },
  {
    title: 'New message',
    message: 'You have a new message from John',
    date: '2022-03-15T10:30:00.000Z',
  },
]

const MarksData = [
  {
    date: '2023-02-10',
    subject: '61a12a34b567890cde123456',
    marks_records: [
      {
        student: '12a34b567890cde123456789',
        marks_obtained: 80,
      },
      {
        student: '23b45c678901def234567890',
        marks_obtained: 90,
      },
      {
        student: '34c56d78901efa3456789012',
        marks_obtained: 75,
      },
    ],
  },
  {
    date: '2023-02-11',
    subject: '12a34b567890cde123456789',
    marks_records: [
      {
        student: '23b45c678901def234567890',
        marks_obtained: 65,
      },
      {
        student: '34c56d78901efa3456789012',
        marks_obtained: 70,
      },
      {
        student: '45d67e8901fab45678901234',
        marks_obtained: 85,
      },
    ],
  },
  {
    date: '2023-02-12',
    subject: '23b45c678901def234567890',
    marks_records: [
      {
        student: '34c56d78901efa3456789012',
        marks_obtained: 92,
      },
      {
        student: '45d67e8901fab45678901234',
        marks_obtained: 88,
      },
      {
        student: '56e78f9012abc56789012345',
        marks_obtained: 78,
      },
    ],
  },
  {
    date: '2023-02-13',
    subject: '34c56d78901efa3456789012',
    marks_records: [
      {
        student: '45d67e8901fab45678901234',
        marks_obtained: 65,
      },
      {
        student: '56e78f9012abc56789012345',
        marks_obtained: 75,
      },
      {
        student: '67f89a012bcd67890123456',
        marks_obtained: 85,
      },
    ],
  },
  {
    date: '2023-02-14',
    subject: '45d67e8901fab45678901234',
    marks_records: [
      {
        student: '56e78f9012abc56789012345',
        marks_obtained: 82,
      },
      {
        student: '67f89a012bcd67890123456',
        marks_obtained: 90,
      },
      {
        student: '78a01b234c56789012345678',
        marks_obtained: 72,
      },
    ],
  },
]

const FeesData = [
  {
    student: '60dbf9d57f750bb9ac8c6b91',
    date: '2023-02-12T00:00:00.000Z',
    amount_paid: 1500,
    payment_mode: 'cash',
  },
  {
    student: '60dbf9d57f750bb9ac8c6b92',
    date: '2023-02-10T00:00:00.000Z',
    amount_paid: 2000,
    payment_mode: 'online',
  },
  {
    student: '60dbf9d57f750bb9ac8c6b93',
    date: '2023-02-08T00:00:00.000Z',
    amount_paid: 1000,
    payment_mode: 'cash',
  },
  {
    student: '60dbf9d57f750bb9ac8c6b94',
    date: '2023-02-06T00:00:00.000Z',
    amount_paid: 500,
    payment_mode: 'online',
  },
  {
    student: '60dbf9d57f750bb9ac8c6b95',
    date: '2023-02-04T00:00:00.000Z',
    amount_paid: 2500,
    payment_mode: 'cash',
  },
  {
    student: '60dbf9d57f750bb9ac8c6b96',
    date: '2023-02-02T00:00:00.000Z',
    amount_paid: 3000,
    payment_mode: 'online',
  },
  {
    student: '60dbf9d57f750bb9ac8c6b97',
    date: '2023-01-31T00:00:00.000Z',
    amount_paid: 1500,
    payment_mode: 'cash',
  },
  {
    student: '60dbf9d57f750bb9ac8c6b98',
    date: '2023-01-29T00:00:00.000Z',
    amount_paid: 1000,
    payment_mode: 'online',
  },
  {
    student: '60dbf9d57f750bb9ac8c6b99',
    date: '2023-01-27T00:00:00.000Z',
    amount_paid: 500,
    payment_mode: 'cash',
  },
  {
    student: '60dbf9d57f750bb9ac8c6b9a',
    date: '2023-01-25T00:00:00.000Z',
    amount_paid: 2000,
    payment_mode: 'online',
  },
]

module.exports = {
  globalData,
  UsersData,
  TeachersData,
  StudentData,
  ParentData,
  SubjectData,
  ClassData,
  AttendanceData,
  EventData,
  FeesData,
  MarksData,
  NotificationData,
}
