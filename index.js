// index.js

import express from 'express';
import mongoose from 'mongoose';
import taskRoutes from './route/taskRoute.js';
import checklistRoutes from './route/checkListRoute.js';

const app = express();
const PORT = process.env.PORT || 3000;

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/taskApp', 
// {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// }
)
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('Error connecting to MongoDB:', err));

// Middleware
app.use(express.json());

// Routes
app.use('/tasks', taskRoutes);
app.use('/checklist', checklistRoutes);

// Start
app.listen(PORT,()=>
{
    console.log(`server running on port ${PORT}`)
})