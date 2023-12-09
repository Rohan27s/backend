import EventModel from "../models/Event.js";
import multer from 'multer';
import path from 'path';


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "./uploads");
    },
    filename: function (req, file, cb) {
        const uniqueFileName = Date.now() + path.extname(file.originalname);
        cb(null, uniqueFileName);
    }
});

const upload = multer({ storage: storage });
class EventController {
    static addnew = async (req, res) => {
        try {
            const { EventName, Description, Time, Guests, Location, Duration, Attachments, Date, Notification, ReminderBefore } = req.body
            // console.log(EventName,'e')
            // const neworder = new EventModel(req.body);
            // console.log(req.body,'b')
            upload.multi('file')(req, res, async function (err) {
                if (err instanceof multer.MulterError) {
                    // A Multer error occurred when uploading.
                    console.error('Multer Error:', err);
                    return res.status(500).send('Multer Error');
                } else if (err) {
                    // An unknown error occurred.
                    console.error('Unknown Error:', err);
                    return res.status(500).send('Unknown Error');
                }

                // No errors occurred during file upload.
                const filePath = req.file ? req.file.path : null;

                const doc = new EventModel({
                    EventName: EventName,
                    Description: Description,
                    Date: Date,
                    Time: Time,
                    Duration: Duration,
                    Location: Location,
                    Guests: Guests,
                    Notification: Notification,
                    ReminderBefore: ReminderBefore,
                    Attachments: filePath ? [{ filename: req.file.filename, format: path.extname(req.file.originalname), fileUrl: `/uploads/${req.file.filename}` }] : [],
                });
                const result = await doc.save()
                res.status(201).send({ result })
            });




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
