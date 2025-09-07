import mongoose, { Schema, Model, Document } from 'mongoose'


export interface IContract extends Document {
    name: string,
    phone: number,
    address: string,
    pinCode: number
}

const contractSchema = new Schema<IContract>({
    name: { type: String, required: true },
    phone: Number,
    address: String,
    pinCode: Number
}, { timestamps: true })
const ContractModel: Model<IContract> = mongoose.models.Contract || mongoose.model<IContract>("Contract", contractSchema)

export default ContractModel;