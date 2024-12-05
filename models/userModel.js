import mongoose from "mongoose";
import bcrypt from "bcrypt";

const userSchema= new mongoose.Schema({
    email:{type:String, required:true, unique: true},
    password: {type: String, required:true, unique: true},
});
//hashear la contraseña antes de guardarla
userSchema.pre('save',async function (next) {
    const user=this;

    //verifica si se modificó la contraseña
    if(!user.isModified('password')) return next();

    try{
        //agregar salt (cadena aleatoria) y aplicar hash
        const salt=await bcrypt.genSalt(10);
        user.password=await bcrypt.hash(user.password, salt);
        next();
    } catch (error){
        next (error);
    }
});

//comparar contraseñas
userSchema.methods.matchPassword=async function(candidatePassword) {
    //compara la contraseña ingresada con la que está guardada en base de datos
    return await bcrypt.match(candidatePassword, this.password);
};
const User=mongoose.model("User",userSchema);

export default User;