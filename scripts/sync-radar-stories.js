import fs from 'node:fs';
import path from 'node:path';

const projectRoot = process.cwd();
const defaultSource = path.resolve(projectRoot, '../radar-briefings-v2/content/stories');
const sourceDirectory = path.resolve(process.env.RADAR_CONTENT_DIR || defaultSource);
const targetDirectory = path.join(projectRoot, 'src/content/radar-stories');
const stagingDirectory = path.join(projectRoot, 'src/content/.radar-stories-staging');

function markdownFiles(directory, relativeDirectory = '') {
  if (!fs.existsSync(directory)) return [];
  return fs.readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const relativePath = path.join(relativeDirectory, entry.name);
    const absolutePath = path.join(directory, entry.name);
    if (entry.isDirectory()) {
      return markdownFiles(absolutePath, relativePath);
    }
    return entry.isFile() && entry.name.endsWith('.md') ? [relativePath] : [];
  }).sort();
}

const sourceFiles = markdownFiles(sourceDirectory);
if (sourceFiles.length === 0) {
  const snapshotFiles = markdownFiles(targetDirectory);
  if (snapshotFiles.length > 0) {
    console.warn(`Radar source unavailable at ${sourceDirectory}; using ${snapshotFiles.length} synced stories.`);
    process.exit(0);
  }
  throw new Error(`No Radar Briefings Markdown stories found at ${sourceDirectory}`);
}

fs.rmSync(stagingDirectory, { recursive: true, force: true });
fs.mkdirSync(stagingDirectory, { recursive: true });

for (const relativePath of sourceFiles) {
  const [editionDate] = relativePath.split(path.sep);
  if (!editionDate || !/^\d{4}-\d{2}-\d{2}$/.test(editionDate)) {
    throw new Error(`Radar story ${relativePath} is not inside a YYYY-MM-DD edition folder`);
  }
  const sourcePath = path.join(sourceDirectory, relativePath);
  const destination = path.join(stagingDirectory, relativePath);
  fs.mkdirSync(path.dirname(destination), { recursive: true });
  fs.copyFileSync(sourcePath, destination);
}

fs.rmSync(targetDirectory, { recursive: true, force: true });
fs.renameSync(stagingDirectory, targetDirectory);
console.log(`Synced ${sourceFiles.length} Radar Briefings stories from ${sourceDirectory}`);
