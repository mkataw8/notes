import { mongoose, Schema } from "mongoose";

const topicSchema = new Schema({
  notes: String,
});

const Topic = mongoose.models.Topic || mongoose.model("Topic", topicSchema);

export default Topic;
