export type Lang = "en" | "rs";

export function initializeLanguage(): void {
  const language = localStorage.getItem("language");

  if (language) return;

  localStorage.setItem("language", "en");
}

export function getLanguage(): string {
  return localStorage.getItem("language") ?? 'en';
}

export function setLanguage(language: Lang): void {
  localStorage.setItem("language", language);
}
