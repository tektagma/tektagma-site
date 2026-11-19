export default function sitemap() {
  const base = "https://tektagma.com";
  return ["", "/system", "/services", "/about", "/contact"].map((path) => ({
    url: `${base}${path || "/"}`,
    lastModified: new Date(),
  }));
}
