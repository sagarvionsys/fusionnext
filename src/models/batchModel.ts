import mongoose, { Schema, Document } from "mongoose";

export interface Batch extends Document {
  batchName: string;
  batchDate: string;
  batchType: string;
  batchTime: string;
  batchStatus: string;
}

const batchScheama: Schema<Batch> = new Schema({
  batchName: {
    type: String,
    required: [true, "BatchName is required"],
  },
  batchDate: {
    type: String,
    required: [true, "BatchDate is required"],
  },
  batchType: {
    type: String,
    enum: ["Online", "Offline"],
    required: [true, "BatchType is required"],
  },
  batchStatus: {
    type: String,
    enum: ["Ongoing", "Upcoming"],
    required: [true, "BatchStatus is required"],
  },
  batchTime: {
    type: String,
    required: [true, "BatchTime is required"],
  },
});

const batchModel =
  (mongoose.models.Batch as mongoose.Model<Batch>) ||
  mongoose.model<Batch>("Batch", batchScheama);

export default batchModel;
