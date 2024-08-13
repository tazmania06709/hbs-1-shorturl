const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');

const { Schema } = mongoose;

const urlSchema = new Schema({
    origin: { type: String, unique: true, required: true },
    shortUrl: { type: String, required: true, unique: true, default: uuidv4(6) }
    // clicks: { type: Number, default: 0 },
    // createdBy: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    // createdAt: { type: Date, default: Date.now },
    // updatedAt: { type: Date, default: Date.now }
});

// const userSchema = new Schema({
//     name: { type: String, required: true },
//     email: { type: String, required: true, unique: true },
//     password: { type: String, required: true },
//     role: { type: String, enum: ['user', 'admin'], default: 'user' },
//     createdAt: { type: Date, default: Date.now },
//     updatedAt: { type: Date, default: Date.now }
// });

const Url = mongoose.model('Url', urlSchema);

module.exports = Url;