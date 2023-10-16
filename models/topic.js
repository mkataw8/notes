import mongoose from "mongoose";

const topicSchema = new mongoose.Schema({
  notes: [{ type: String }], // Using an array for multiple notes
});

const Topic = mongoose.models.Topic || mongoose.model("Topic", topicSchema);

export default mongoose.models.Topic || mongoose.model("Topic", topicSchema);
