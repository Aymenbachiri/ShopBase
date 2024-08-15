import LocaleMenuButton from "./LocaleMenuBtn";
import LocaleMenuList from "./LocaleMenuList";

export default function LocaleMenu() {
  return (
    <main className="relative inline-block text-left">
      <section className="group">
        <LocaleMenuButton />
        <LocaleMenuList />
      </section>
    </main>
  );
}
