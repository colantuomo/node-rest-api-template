import express from 'express';
import helmet from 'helmet';
import { routes } from './routes';
import { health } from './controllers';

const app = express();
app.use(helmet());
app.use(express.json());
app.get('/health', health);
app.use('/api', routes);

export { app };
