import mongoose from "mongoose"

mongoose.connect("mongodb://localhost/notOFFERUP"),
{useNewUrlParser:true,
    useUnifiedTopology:true}


export default mongoose