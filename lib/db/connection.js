import mongoose from "mongoose";

mongoose.connect("mongodb://localhost/listings", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

export default mongoose;
