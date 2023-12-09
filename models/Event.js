import mongoose from "mongoose";
const EventSchema = new mongoose.Schema({
    EventName: { type: String },
    Description: { type: String },
    Date: { type: String },
    Time: { type: String },
    Duration:{ type: String},
    Location:{ type: String},
    Guests:
        [
            { 
                Name: { type: String } ,email:{type:String},AvatarUrl:{type:String}
            }
        ]
    ,
    Notification: { type: String ,enum: ['email', 'slack'] },
    ReminderBefore:{ type: String },
    Attachments:
    [
        { 
            filename: { type: String } ,format:{type:String},file:{type:String}
        }
    ]
}, { timestamps: true });
mongoose.models = {}
const EventModel = mongoose.model("Event", EventSchema);

export default EventModel