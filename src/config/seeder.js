const colors = require('colors')
const { mongooseConnection } = require('./db')
const {
  UsersData,
  AvailabilityConfig,
  VideosData,
  CategoryData,
  TweetsData,
  ReportData,
  ReactionsData,
} = require('./data')
const {
  randomValueFromArray,
  randomMultipleFromArray,
} = require('../utils/array')

// Configuration
require('dotenv').config()
mongooseConnection()

//Models
// const People = require('../models/people')
// const Availability = require('../models/Availability')
// const Session = require('../models/Session')
// const Creator = require('../models/Creator')
// const Video = require('../models/Video')
// const Tweet = require('../models/Tweet')
// const Category = require('../models/Category')
// const ForwardActivities = require('../models/ForwardActivities')
// const LikesActivities = require('../models/LikesActivities')
// const CommentActivities = require('../models/CommentActivities')
// const NotInterestedActivities = require('../models/NotInterestedActivities')
// const Notifications = require('../models/Notifications')
// const ReadActivities = require('../models/ReadActivities')
// const ReportActivities = require('../models/ReportActivities')
// const SearchActivities = require('../models/SearchActivities')
// const SharesActivities = require('../models/SharesActivities')
// const Supporter = require('../models/SupportActivities')
// const WatchActivities = require('../models/WatchActivities')
// const ReportConfig = require('../models/ReportConfig')
// const ReactionConfig = require('../models/ReactionConfig')

const { emptyDirectory } = require('../utils/files')

// IMPROT DATA SEEDER:
const importData = async () => {
  try {
    //DESTROY FIRST
    await People.deleteMany()
    await Session.deleteMany()
    await Creator.deleteMany()
    await Category.deleteMany()
    await Video.deleteMany()
    await Tweet.deleteMany()
    await Supporter.deleteMany()
    await Notifications.deleteMany()
    await ForwardActivities.deleteMany()
    await LikesActivities.deleteMany()
    await CommentActivities.deleteMany()
    await NotInterestedActivities.deleteMany()
    await SharesActivities.deleteMany()
    await SearchActivities.deleteMany()
    await WatchActivities.deleteMany()
    await ReportActivities.deleteMany()
    await ReadActivities.deleteMany()
    await ReportConfig.deleteMany()
    await ReactionConfig.deleteMany()

    // Empty Uploaded Files
    emptyDirectory('users')
    emptyDirectory('tweets')
    emptyDirectory('thumbnails')
    emptyDirectory('categories')
    emptyDirectory('videos')

    //IMPORT USERS
    const usersArray = await People.insertMany(UsersData)
    const usersIds = usersArray.map((user) => user._id)

    // IMPORT CREATORS
    const creatorData = usersIds.map((value) => ({
      user: value,
      availability: randomValueFromArray(AvailabilityConfig.map((v) => v.type)),
    }))
    const creatorArray = await Creator.insertMany(creatorData)

    //BULK WRITE CREATOR IDS IN USER PROFILE
    let updatedUserWithCreatorID = usersArray.map((user) => {
      let creatorID = creatorArray.find((x) => x.user === user._id)._id

      return {
        updateOne: {
          filter: {
            _id: user._id,
          },
          update: {
            creator: creatorID,
          },
        },
      }
    })
    await People.bulkWrite(updatedUserWithCreatorID)

    // IMPORT CATEGORIES
    const categoryArray = await Category.create(CategoryData)
    const categoryIds = categoryArray.map((cat) => cat._id)

    // IMPORT REPORT DATA
    const reportArray = await ReportConfig.create(ReportData)
    const reportIds = reportArray.map((item) => item._id)

    // IMPORT REACTION DATA
    const reactionArray = await ReactionConfig.create(ReactionsData)
    const reactionIds = reactionArray.map((item) => item._id)

    //IMPORT VIDEOS
    const preparedVideos = VideosData.map((video) => ({
      ...video,
      user: randomValueFromArray(usersIds),
      category: randomValueFromArray(categoryIds),
    }))
    const videosArry = await Video.insertMany(preparedVideos)

    // IMPORT TWEETS
    const preparedTweets = TweetsData.map((video) => ({
      ...video,
      user: randomValueFromArray(usersIds),
    }))
    const tweetsArry = await Tweet.insertMany(preparedTweets)

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
    await People.deleteMany()
    await Session.deleteMany()
    await Creator.deleteMany()
    await Category.deleteMany()
    await Video.deleteMany()
    await Tweet.deleteMany()
    await Supporter.deleteMany()
    await Notifications.deleteMany()
    await ForwardActivities.deleteMany()
    await LikesActivities.deleteMany()
    await CommentActivities.deleteMany()
    await NotInterestedActivities.deleteMany()
    await SharesActivities.deleteMany()
    await SearchActivities.deleteMany()
    await WatchActivities.deleteMany()
    await ReportActivities.deleteMany()
    await ReadActivities.deleteMany()
    await ReportConfig.deleteMany()
    await ReactionConfig.deleteMany()

    // Empty Uploaded Files
    emptyDirectory('users')
    emptyDirectory('tweets')
    emptyDirectory('thumbnails')
    emptyDirectory('categories')
    emptyDirectory('videos')

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
