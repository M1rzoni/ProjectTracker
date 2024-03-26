import mongoose from "mongoose";

const EventShema = mongoose.Schema({
    start: Date,
    end: Date,
    title: String
});

const Event = mongoose.model("Event", EventShema);


export default Event;