import mongoose from "mongoose";

const sportsSchema= new mongoose.Schema({

    team_name: {
        type: String,
        required:true
    },
    league: {
        type: String,
        required:true
    },
    coach : {
        type: String,
        required:true
    },
    stadium: {
        type: String,
        required:true
    },
    championship_titles: {
        type: Number,
        required:true
    },

});
export default mongoose.model("sports", sportsSchema);