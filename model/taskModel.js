// models/Task.js

import mongoose from 'mongoose';

const taskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: false
  },
  category: {
    type: String,
    enum: ['Weekly', 'Daily'],
    required: true
  },
  priority: {
    type: String,
    enum: ['LOW', 'MEDIUM', 'HIGH', 'VERY HIGH'],
    default: 'MEDIUM'
  },
  color: {
    type: String,
    required: true
  },
  checklist: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'ChecklistItem'
  }],
  workload: {
    type: Number,
    min: 0,
    max: 5,
    default: 3
  }
});

const taskModel= mongoose.model('Task', taskSchema);
export default taskModel;
