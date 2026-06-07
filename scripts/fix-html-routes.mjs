import { cp, rm } from "node:fs/promises";
import { join } from "node:path";

const distDir = new URL("../dist/", import.meta.url);

async function collapseHtmlDirectory(routeName) {
  const routeDir = new URL(`${routeName}/`, distDir);
  const source = new URL("index.html", routeDir);
  const target = new URL(routeName, distDir);
  const temp = new URL(`${routeName}.tmp`, distDir);

  await cp(source, temp);
  await rm(routeDir, { recursive: true, force: true });
  await cp(temp, target);
  await rm(temp, { force: true });

  console.log(`Fixed static route ${join("dist", routeName)}`);
}

await collapseHtmlDirectory("faccette.html");
