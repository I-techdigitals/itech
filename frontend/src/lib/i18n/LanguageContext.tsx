"use client";
import { createContext, useContext, useEffect, useState } from "react";
import type { Lang } from "./translations";
import translations from "./translations";

type T = typeof translations.en | typeof translations.ar;

interface LanguageContextValue {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: T;
  isRTL: boolean;
}

const LanguageContext = createContext<LanguageContextValue>({
  lang: "en",
  setLang: () => {},
  t: translations.en as T,
  isRTL: false,
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  // Restore from localStorage on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem("itech-lang") as Lang | null;
      if (saved === "ar" || saved === "en") {
        setLangState(saved);
        applyLang(saved);
      }
    } catch {}
  }, []);

  const setLang = (newLang: Lang) => {
    setLangState(newLang);
    try { localStorage.setItem("itech-lang", newLang); } catch {}
    applyLang(newLang);
  };

  const t = translations[lang];
  const isRTL = false;

  return (
    <LanguageContext.Provider value={{ lang, setLang, t, isRTL }}>
      {children}
    </LanguageContext.Provider>
  );
}

function applyLang(lang: Lang) {
  const html = document.documentElement;
  html.setAttribute("lang", lang);
  html.setAttribute("dir", "ltr"); // Force layout to stay LTR always
}

export function useLanguage() {
  return useContext(LanguageContext);
}
