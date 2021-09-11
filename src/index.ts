import express from 'express'
import 'reflect-metadata'
import morgan from 'morgan'
import cors from 'cors'
import userRoutes from './routes/user.routes'
import { createConnection,  } from 'typeorm'

const app = express()
createConnection();

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(userRoutes);

app.listen(3000);
console.log('server on port ', 3000);
