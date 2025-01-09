const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CourseSchema = new Schema({
    created: {
        type: Date,
        default: Date.now
    },
    courseCode: {
        type: String,
        default: '',
        trim: true,
        required: 'Course Code cannot be blank'
    },
    courseName: {
        type: String, default: '',
        trim: true
    },

    section: {
        type: String, default: '',
        trim: true
    },

    semester: {
        type: String, default: '',
        trim: true
    },

    students: {
        type: Schema.ObjectId,
        ref: 'Student'
    }
});

mongoose.model('Course', CourseSchema);