export async function getGithubStars(): Promise<number> {
  const response = await fetch(`https://api.github.com/repos/pittaya-ui/ui`);
  const data = await response.json();
  return data.stargazers_count;
}