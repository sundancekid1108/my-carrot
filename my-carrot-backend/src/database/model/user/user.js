import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {
        type: String,
        // required: true,
        lowercase: true,
        default: 'username',
        unique: true,
    },

    avatar: {
        type: String,
        default: '',
    },

    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        default: '',
    },

    password: {
        type: String,
        required: true,
    },

    phonenumber: {
        type: String,
        unique: true,
        trim: true,
        default: '',
    },

    date: {
        type: Date,
        default: Date.now,
    },
    // comments: [{
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'Comment',
    // },],
    // posts: [{
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'Post',
    // },],

    role: {
        type: String,
        default: 'user',
        enum: ['user', 'admin', 'superadmin'],
    },

    // googleLoginProviderId: {
    //     type: String,
    // },

    // googleLoginProvider: {
    //     type: {
    //         id: String,
    //         token: String,
    //     },
    //     select: false,
    // },
}, { timestamps: true }, { versionKey: false });

const User = mongoose.model('User', userSchema);

export default User; 