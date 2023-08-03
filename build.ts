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

const iconsRemote = 'https://raw.githubusercontent.com/devicons/devicon/master/icons';
const enc = (s: string) => new TextEncoder().encode(s);

for (const iconInfo of DeviconData) {
  for (const variant of iconInfo.versions.svg) {
    const name = upperFirstCase(camelCase(iconInfo.name+'-'+variant));
    Deno.stdout.writeSync(enc(`\n🟥 ${name} building`));
    const url = `${iconsRemote}/${iconInfo.name}/${iconInfo.name}-${variant}.svg`;
    const svg = await fetch(url).then((res) => res.text());
    const jsx = svg.replace(/<svg ([^>]*)>/, (_, g: string) => `<svg ${g.replace(/xml:([^ =]+)/g, (_, p) => camelCase(`xml ${p}`))} {...props}>`);
    const fc = `export default function ${name}(props: Record<string, unknown>) { return (${jsx}) }`;
    Deno.writeFileSync(`icons/${name}.tsx`, enc(fc));
    Deno.writeFileSync('mod.ts', enc(`export { default as ${name} } from './icons/${name}.tsx';\n`), { append: true });
    Deno.stdout.writeSync(enc(`\x1B[1K\r🟦 ${name} built`));
  }
}
