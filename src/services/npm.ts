export async function getNpmDownloads(): Promise<number> {
  const response = await fetch(
    `https://api.npmjs.org/downloads/point/last-month/pittaya`
  );
  const data = await response.json();
  return data.downloads;
}
