import express, { Application } from 'express';
import createHttpError from 'http-errors';
import UserRoutes from './routes/UserRoutes';
import ChannelRoutes from './routes/ChannelRoutes';
import TariffplanRoutes from './routes/TariffplanRoutes';
const app: Application = express();

app.use(express.json());
app.use('/users', UserRoutes);
app.use('/channel', ChannelRoutes);
app.use('/tariffplan', TariffplanRoutes);

app.use(() => {
  throw createHttpError(404, 'NotFound');
});

app.listen(5000, () => {
  console.log('server is running');
});
