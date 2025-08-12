import experss from 'express'
import cors from 'cors'
import 'dotenv/config'
import { connectDB } from './config/db.js'

import userRouter from './routes/userRoute.js'
import taskRouter from './routes/taskRoute.js'

const app = experss()
const port = process.env.PORT || 4000

// MIDDLEWEAR
app.use(cors());
app.use(experss.json());
app.use(experss.urlencoded({extended: true}));

// DB CONNECT
connectDB();

// ROUTES
app.use('/api/user', userRouter)
app.use('/api/tasks', taskRouter)

app.get('/', (req, res) => {
    res.send('API WORKING')
})

app.listen(port, () => {
    console.log(`Server Started on http://localhost:${port}`)
})