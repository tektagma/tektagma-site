export default function sitemap() {
  const base = "https://tektagma.com";
  return ["", "/construction", "/system", "/services", "/about", "/contact"].map((path) => ({
    url: `${base}${path || "/"}`,
    lastModified: new Date(),
  }));
}
