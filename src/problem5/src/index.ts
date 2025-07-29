import express from 'express';
import cors from 'cors';
import resourceRouter from './routes/resource.route';

const app = express();
app.use(cors());
app.use(express.json());

app.use("/resources", resourceRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
