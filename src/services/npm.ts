export async function getNpmDownloads(): Promise<number> {
  const response = await fetch(
    `https://api.npmjs.org/downloads/point/last-week/pittaya`
  );
  const data = await response.json();
  return data.downloads;
}
