const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');
const Schema = mongoose.Schema;
mongoose.Promise = global.Promise;

const rolechema = new Schema({
    
    name: { type: String, required: false, unique: false },
});

rolechema.plugin(mongoosePaginate);
const Role = mongoose.model("Role", rolechema);
// const newrole = new roleModel({ name: 'admin' });
// newrole.save();

module.exports = Role;