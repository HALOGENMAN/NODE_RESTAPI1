const mongoose = require("mongoose")

const Schema = mongoose.Schema

var urlPattern = /(http|ftp|https):\/\/[\w-]+(\.[\w-]+)+([\w.,@?^=%&amp;:\/~+#-]*[\w@?^=%&amp;\/~+#-])?/
var regxEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const bootcampSchema = new Schema({
    name:{
        type:String,
        required:[true,'please add a name to your bootcamp'],
        unique:true,
        trim:true,
        maxlength:[50,'max length of your bootcamp should be 50 letters'] 
    },
    slug:String,
    description:{
        type:String,
        required:[true,'please add a name to your description'],
        maxlength:[500,'max length of your description should be 500 letters']     
    },
    website:{
        type:String,
        match:[
            urlPattern,
            'please use valid URL HTTP of HTTPS'
        ]
    },
    phone:{
        type:String,
        maxlength:[20,'phone no cn=ant be longer than 20 character']
    },
    email:{
        type:String,
        match:[
            regxEmail,
            'please add valid email'
        ]
    },
    address:{
        type:String,
        required:[true,'please enter your address']
    },
    // location:{
    //     //geoJSON  Point
    //     type: {
    //         type: String, // Don't do `{ location: { type: String } }`
    //         enum: ['Point'], // 'location.type' must be 'Point'
    //         required: true
    //     },
    //     coordinates: {
    //         type: [Number],
    //         required: true,
    //         index:'2dsphere'
    //     },
    //     formattedAddress:String,
    //     street:String,
    //     city:String,
    //     zipcode:String,
    //     country:String,
    // },
    careers:{
        //array of strings
        type:[String],
        required:true,
        enum:[
            'Web Development',
            'Mobile Development',
            'UI/UX',
            'Data Science',
            'Business',
            'Other'
        ]
    },
    averageRating:{
        type:Number,
        min:[1,'rating must be atleast 1'],
        max:[10,'rating cannot be mote than 10']
    },
    averageCost:Number,
    photo:{
        type:String,
        default:"no-photo.jpg",
    },
    housing:{
        type:String,
        default:false
    },
    jobAssistance:{
        type:String,
        default:false
    },
    jobGurantee:{
        type:String,
        default:false
    },
    acceptGi:{
        type:String,
        default:false
    },
    createdAt:{
        type:Date,
        default : Date.now()
    }
})

module.exports = mongoose.model('Bootcamp',bootcampSchema);