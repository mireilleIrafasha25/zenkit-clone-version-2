// index.js

import express from 'express';
import mongoose from 'mongoose';
import taskRoutes from './route/taskRoute.js';
import checklistRoutes from './route/checkListRoute.js';
import errorHandler from './middleware/ErrorHandler.js';
import { notfound } from './middleware/notfound.js';

const app = express();
const PORT = process.env.PORT || 3001;

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/taskApp' )
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('Error connecting to MongoDB:', err));
// Middleware
app.use(express.json());
// Routes
app.use('/tasks', taskRoutes);
app.use('/checklist', checklistRoutes);

app.use(notfound);
// Start
app.listen(PORT,()=>
{
    console.log(`server running on port ${PORT}`)
})
app.use(errorHandler)