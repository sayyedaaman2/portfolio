export default function ThemeScript() {
  return (
    <script
      dangerouslySetInnerHTML={{
        __html: `
          try {
            const theme = localStorage.getItem("theme");

            const systemTheme = window.matchMedia(
              "(prefers-color-scheme: dark)"
            ).matches
              ? "dark"
              : "light";

            const resolvedTheme = theme || systemTheme;

            if (resolvedTheme === "dark") {
              document.documentElement.classList.add("dark");
            } else {
              document.documentElement.classList.remove("dark");
            }
          } catch (_) {}
        `,
      }}
    />
  );
}