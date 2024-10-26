export function getGithub() {
  const githubURL: string =
    import.meta.env.VITE_GITHUB_URL ?? "https://github.com/ryandvl";
  const githubUsername = githubURL.split("/").pop() ?? "ryandvl";

  return { url: githubURL, username: githubUsername };
}
