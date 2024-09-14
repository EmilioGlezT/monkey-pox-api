import mongoose from 'mongoose';

const caseSchema = new mongoose.Schema({
    latitude: {
        type: String,
        required: true
    },
    longitude: {
        type: String,
        required: true
    },
    isSent:{
        type: Boolean,
        required: true,
        default: false
    },
    genre:{
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true,
         default: 0
    },
    creationDate: {
        type: Date,
        required: true,
        
    }
});

export const CaseModel = mongoose.model('case', caseSchema);