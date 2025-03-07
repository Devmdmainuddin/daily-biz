import mongoose, {Schema, model, models} from "mongoose";
import bcrypt from "bcrypt";

export interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  // type: string;
  role: "user" | "admin";
  _id?: mongoose.Types.ObjectId;
  createdAt?: Date;
  updatedAt?: Date;
}

const userSchema = new Schema<IUser>(
  {
    name: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    // type: {type: String, required: true},
    role: {type: String, enum: ["user", "admin"], default: "user"},
  },
  {timestamps: true},
);
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

const User = models?.User || model<IUser>("User", userSchema);
export default User;
