import * as z from 'zod'

const userSchema = z.object({
    userName: z.string().lowercase().min(3).trim(),
    email: z.string().lowercase(),
    phoneNumber: z.string().min(10,"Phone Number Should be of 10 digits").trim(),
    password: z.string().min(8)
})

export default userSchema;
