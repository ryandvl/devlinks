export function Links() {
  const links: { name: string; url: string }[] = [
    { name: "Website", url: "https://ryandvl.xyz" },
    { name: "GitHub", url: "https://github.com/ryandvl" },
  ];

  return (
    <ul className="list-none flex flex-col gap-4 py-6">
      {links.map((link) => (
        <li>
          <a
            href={link.url}
            className="dark:text-zinc-50 text-zinc-950 flex items-center justify-center py-4 px-6 bg-white/5 dark:bg-black/5 border border-solid border-white/50 dark:border-black/50 rounded-lg backdrop-blur no-underline font-medium transition-[background] duration-[0.2s] hover:bg-black/20 hover:border-[1.5px] hover:border-solid hover:border-zinc-50 dark:hover:border-zinc-950"
          >
            {link.name}
          </a>
        </li>
      ))}
    </ul>
  );
}
