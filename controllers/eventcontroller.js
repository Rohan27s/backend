import EventModel from "../models/Event.js";

class EventController {
    static addnew = async (req, res) => {
        try {
            const { EventName, Description, Time,Guests, Location,Duration,Attachments,Date, Notification, ReminderBefore } = req.body
            // console.log(EventName,'e')
            // const neworder = new EventModel(req.body);
            console.log(req.body,'b')
            const doc = new EventModel({
                EventName: EventName,
                Description: Description, 
                Date:Date,
                Time: Time,
                Duration:Duration,
                Location:Location,
                Guests: Guests,
                Notification: Notification,
                ReminderBefore: ReminderBefore,
                Attachments:Attachments,
               
            })
            const result = await doc.save()
            res.status(201).send({result})
        }
        catch (error) {
            console.log(error)
        }
    }
    static allevent = async (req, res) => {
        try {
            const result = await EventModel.find().sort({ createdAt: -1 })
            res.send(result)
        }
       catch (error) {
            console.log(error)
        }
    }
 
    
    static eventget = async (req, res) => {
        try {
            const result = await EventModel.findById(req.params.id)
            res.send(result)
        }
        catch (error) {
            console.log(error)
        }
    }
  
}
export default EventController
