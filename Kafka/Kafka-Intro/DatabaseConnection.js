const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/HomeAway');

var Userdetails = mongoose.model('Userdetails',{

    'Username' : {
        type: String
    },
    'Password' : {
        type: String
    },
    'FirstName' : {
        type: String
    },
    'LastName' : {
        type : String
    },
    'Email' : {
        type : String
    },
    'Aboutme' :  {
        type : String
    },
    'Country' : {
        type : String
    },
    'City' : { 
        type : String
    },
    'Gender' : {
        type : String
    },
    'Hometown' : {
        type : String
    },
    'School' : {
        type : String
    },
    'Company' : {
        type : String
    },
    'Language' : {
        type : String
    },
    'ProfileImage' : {
        type : String
    },
    'PhoneNumber' : {
        type : String
    },
    'Accounttype' : {
        type : Number
    },
    'PropertyDetails' : {
        type: Array
    }
});


var PropertyDetails = mongoose.model('PropertyDetails',{
    'PropertyId' : Number,
    'Headline' : String,
    'StreetAddress' :String,
    'City' : String,
    'PropertyType' :String,
    'Bedrooms' : Number,
    'Accomodates' :Number,
    'Bathrooms': Number,
    'Photos' : String,
    'Currency' : String,
    'Baserate' : String,
    'AvailabilityStartDate': Date,
    'AvailabilityEndDate': Date,
    'Ownername' : String

});
module.exports = {
    Userdetails,
    PropertyDetails
};
