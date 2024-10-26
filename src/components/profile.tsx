import { getGithub } from "../utils/get-github";

export function Profile() {
  const { url, username } = getGithub();

  return (
    <div className="flex flex-col justify-center items-center p-4 text-center">
      <img
        src={`${url}.png`}
        alt={`Github profile picture of ${username}`}
        className="w-28 rounded-full border-2 border-sky-300 hover:animate-pulse"
      />
      <a
        className="text-zinc-950 dark:text-zinc-50 mt-2 hover:text-sky-300"
        href={url}
      >
        @{username}
      </a>
    </div>
  );
}
