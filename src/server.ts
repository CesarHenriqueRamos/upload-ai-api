import { fastify } from 'fastify';
import { GetAllPrompts } from './routes/get-all-prompts';
import { UploadVideo } from './routes/upload-video';
import { createTranscriptionRoute } from './routes/create-trascription';

const app = fastify();

app.register(GetAllPrompts);
app.register(UploadVideo);
app.register(createTranscriptionRoute);

app.listen({
    port:3333
}).then(
   () => console.log('run')
)