import { Schema, model } from "mongoose";
import bcrypt from "bcryptjs";
import mongoosePaginate from "mongoose-paginate-v2";
import jwt from "jsonwebtoken";

const UserSchema = new Schema(
  {
    name: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true,
      unique: true
    },
    password: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true
  }
);

UserSchema.pre("save", async function() {
  this.password = await bcrypt.hash(this.password, 8);
});

UserSchema.statics = {
  generateToken({ id }) {
    return jwt.sign({ id }, process.env.APP_SECRET, {
      expiresIn: "7d"
    });
  }
};

UserSchema.plugin(mongoosePaginate);

export default new model("User", UserSchema);
