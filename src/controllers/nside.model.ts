import { Schema, model } from "mongoose";
// https://mongoosejs.com/docs/typescript.html
// https://mongoosejs.com/docs/validation.html

// ref: "onside" -> 1 oldali modell neve, nem kell átírni!

const nsideSchema = new Schema(
    {
        _id: Number,
        kerdes: {
            type: String,
            required: true,
            unique: true,
        },
        valasz: {
            type: Number,
            required: true,
        },
        temakor: {
            ref: "oneside",
            type: Number,
            required: true,
        },
        pont: {
            type: Number,
            required: true,
            min: [0, "Nem lehet nulla pont egy kérdés!"],
            max: [3, "Nem lehet egy kérdés 3 pontnál több!"],
        },
    },
    { versionKey: false, toJSON: { virtuals: true }, toObject: { virtuals: true } },
);

// Mongoose also supports populating virtuals.
// The ref option, which tells Mongoose which model to populate documents from.
// The localField and foreignField options. Mongoose will populate documents from the model in ref whose foreignField matches this document's localField.
// justOne says that it'll populate a single connected object, set it to false if you need to get an array
// nsideSchema.virtual("populateField", {
//     ref: "oneside",
//     localField: "temakor",
//     foreignField: "_id",
//     justOne: true,
// });
// Use virtual for populate in controller:
// const data = await this.nsideM.find().populate("populateField", "-_id field1 field2 -field3 ...");

const nsideModel = model("nside", nsideSchema, "kerdesek");

export default nsideModel;
