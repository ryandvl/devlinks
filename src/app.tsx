import { Footer } from "./components/footer";
import { Links } from "./components/links";
import { Profile } from "./components/profile";
import { SocialLinks } from "./components/social-links";
import { ThemeSwitcher } from "./components/theme-switcher";

export function App() {
  return (
    <main className="flex flex-col justify-center items-center py-14">
      <Profile />
      <ThemeSwitcher />
      <Links />
      <SocialLinks />
      <Footer />
    </main>
  );
}
