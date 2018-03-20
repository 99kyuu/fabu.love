const mongoose = require('../helper/db');
const Schema = mongoose.Schema;

var versionSchema = new Schema({
    appId:String, //该版本的应用的id
    bundleId:  {
        type: String,
        index: true
    },
    versionStr: String,
    versionCode: String,
    uploadAt: {
        type: Date,
        default: Date.now
    },
    uploader: String,
    uploaderId:String,
    size: Number,
    active:Boolean,
    downloadUrl: String,
    downloadCount: Number, 
    hidden: { type:Boolean , default:false}
});

module.exports = mongoose.model('Version', versionSchema);