// models/ChecklistItem.js

import mongoose from 'mongoose';

const checklistItemSchema = new mongoose.Schema({
  description: {
    type: String,
    required: true
  },
  completed: {
    type: Boolean,
    default: false
  }
});

const checklistmodel = mongoose.model('ChecklistItem', checklistItemSchema);
export default checklistmodel;
