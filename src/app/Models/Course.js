const mongoose = require('mongoose');
const mongooseDelete = require('mongoose-delete');
const slug = require('mongoose-slug-generator');
const AutoIncrement = require('mongoose-sequence')(mongoose);
mongoose.plugin(slug);

const Schema = mongoose.Schema;

const CourseSchema = new Schema(
    {
        _id: Number,
        name: { type: String, require: true },
        description: { type: String },
        image: { type: String, default: 'hahaha' },
        videoId: { type: String },
        slug: { type: String, slug: 'name', unique: true },
    },
    {
        _id: false,
        timestamps: true,
    },
);
CourseSchema.plugin(AutoIncrement);
CourseSchema.plugin(mongooseDelete, {
    deletedAt: true,
    overrideMethods: 'all',
});

CourseSchema.query.sortable = function (req) {
    if (req.query.hasOwnProperty('_sort')) {
        const isValidType = ['asc', 'desc'].includes(req.query.type);
        return this.sort({
            [req.query.column]: isValidType ? req.query.type : 'asc',
        });
    }
    return this;
};

module.exports = mongoose.model('Courses', CourseSchema);
