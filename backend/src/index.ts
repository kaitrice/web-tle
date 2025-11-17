import { app } from '@azure/functions';
import { configDotenv } from 'dotenv';

configDotenv();

app.setup({
    enableHttpStream: true,
});
