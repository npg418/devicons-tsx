import DeviconData from 'https://raw.githubusercontent.com/devicons/devicon/master/devicon.json' assert { type: 'json' };
import camelCase from 'https://deno.land/x/case@2.1.1/camelCase.ts';
import upperFirstCase from 'https://deno.land/x/case@2.1.1/upperFirstCase.ts';

try {
  Deno.removeSync('icons', { recursive: true });
  Deno.removeSync('mod.ts');
} catch (_) {
  // ignore
} finally {
  Deno.mkdirSync('icons');
}

const enc = (s: string) => new TextEncoder().encode(s);

async function buildIcon(url: string, name: string) {
  const svg = await fetch(url).then((res) => res.text());
  const jsx = svg.replace(/<svg ([^>]*)>/, (_, g) => `<svg ${g} width={w} height={h} {...props}>`).replace(/xml:([^ =]+)/g, (_, p) => camelCase(`xml ${p}`));
  const fc = `export default function ${name}({ w = 64, h = 64, ...props }) { return (${jsx}) }`;
  await Deno.writeFile(`icons/${name}.tsx`, enc(fc));
}

const iconsRemote = 'https://raw.githubusercontent.com/devicons/devicon/master/icons';
const nameVariantPair = DeviconData.map((iconInfo) => iconInfo.versions.svg.map((variant) => [iconInfo.name, variant] as const)).flat();

const total = nameVariantPair.length;
let progress = -1;
function logProgress() {
  progress++;
  const percentage = (progress / total) * 100;
  Deno.stdout.writeSync(enc(`\x1B[1K\r${`${percentage.toFixed(1)}%`.padEnd(5)} done! [${String(progress).padStart(String(total).length)}/${total}]`));
}

console.log('Building icons...');
logProgress();
await Promise.all(nameVariantPair.map(async ([name, variant]) => {
  await buildIcon(`${iconsRemote}/${name}/${name}-${variant}.svg`, upperFirstCase(camelCase(`${name}-${variant}`)));
  logProgress();
}));
console.log('\nDone!');

console.log('Writing mod.ts...');
const iconNames = nameVariantPair.map(([name, variant]) => upperFirstCase(camelCase(`${name}-${variant}`)));

for (const name of iconNames) {
  await Deno.writeTextFile('mod.ts', `export { default as ${name} } from './icons/${name}.tsx';\n`, { append: true });
}
console.log('Done!');
