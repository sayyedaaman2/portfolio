export default function ThemeScript() {
  return (
    <script dangerouslySetInnerHTML={{
      __html: `
        (function() {
          var storedTheme = localStorage.getItem('theme');
          var systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
          var initialTheme = storedTheme || systemTheme;
          if (initialTheme === 'dark') {
            document.documentElement.classList.add('dark');
          }
        })();
      `,
    }} />
  )
}