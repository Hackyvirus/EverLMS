import mongoose, { model, Schema, Document } from 'mongoose';

export interface IUser extends Document {
       userName : string,
       email: string,
       phoneNumber : number,
       password : string
}

const userSchema = new Schema<IUser>({
    userName: {
        type: String,
        trim: true,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    phoneNumber:{
        type: Number,
        required: true
    },
    password:{
        type: String,
        required: true
    }
},{timestamps: true})

const userModel = mongoose.models.User ||  model<IUser>("User",userSchema);

export default userModel;