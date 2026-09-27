import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import fs from 'fs';
import { defineConfig } from 'vite';

export default defineConfig(() => {
  return {
    plugins: [
      react(),
      tailwindcss(),
      {
        name: 'photo-upload-handler',
        configureServer(server) {
          server.middlewares.use('/api/upload-photo', (req, res, next) => {
            if (req.method === 'POST') {
              let body = '';
              req.on('data', chunk => { body += chunk; });
              req.on('end', () => {
                try {
                  const { filename, base64Data } = JSON.parse(body);
                  if (filename && base64Data) {
                    const cleanBase64 = base64Data.replace(/^data:image\/\w+;base64,/, '');
                    const buffer = Buffer.from(cleanBase64, 'base64');
                    const publicDir = path.resolve(__dirname, 'public');
                    if (!fs.existsSync(publicDir)) {
                      fs.mkdirSync(publicDir, { recursive: true });
                    }
                    const filePath = path.join(publicDir, filename);
                    fs.writeFileSync(filePath, buffer);
                    res.setHeader('Content-Type', 'application/json');
                    res.end(JSON.stringify({ success: true, path: `/${filename}` }));
                    return;
                  }
                } catch (e) {
                  res.statusCode = 500;
                  res.end(JSON.stringify({ error: String(e) }));
                  return;
                }
                res.statusCode = 400;
                res.end(JSON.stringify({ error: 'Invalid payload' }));
              });
            } else {
              next();
            }
          });
        },
      },
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      hmr: process.env.DISABLE_HMR !== 'true',
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
