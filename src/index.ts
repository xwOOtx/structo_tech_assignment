import cors from 'cors';
import express from 'express';
import * as dotenv from "dotenv";
import helmet from "helmet";
import { userRouter } from './user/user.router';

dotenv.config();

if (!process.env.PORT) {
  console.log(`Error to get ports`);
    process.exit(1);
 }

 const PORT: number = parseInt(process.env.PORT as string);
 
 const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());

const server = app.listen(PORT, () => {
    console.log(`[Server]: running at http://localhost:${PORT}`);
});

// Send message for default URL
app.get('/', (req, res) => res.send('Structo Technical Assignment'));
app.use(userRouter);