import mongoose from "mongoose";
const { Schema, model } = mongoose;

const flightSchema = new Schema(
    {
        source: {
            type: String,
            require: true
        },
        destination: {
            type: String,
            require: true
        },
        flight: {
            type: String,
            require: true
        },
        price: {
            type: Number,
            default: 0
        }
    },
    { timestamps: true }
);
export default model("Flight", flightSchema);