const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const driverSchema = new Schema({
    driver_id: {
        type: String,
        required: true,
        unique: true
    }
});

driverSchema.set('toJSON', {
    virtuals: true,
    versionKey: false,
    transform: function (doc, ret) {
        delete ret._id;
        delete ret.id;
    }
});

module.exports = mongoose.model('driver', driverSchema);
