import { copy } from 'fs-extra';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

(async () => {
  const distDir = path.resolve(__dirname, 'dist');
  const docsDir = path.resolve(__dirname, 'docs');
  try {
    await copy(distDir, docsDir);
    console.log('Build copiado a docs.');
  } catch (err) {
    console.error('Error al copiar el build:', err);
  }
})();