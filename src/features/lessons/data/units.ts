import type { Localized, UnitId } from "../models"

export const units: { id: UnitId; title: Localized; description: Localized }[] = [
  {
    id: "letters",
    title: { id: "Huruf & Bunyi", en: "Letters & Sounds" },
    description: {
      id: "Kenali sistem tulisan Jepang dan cara membaca hiragana serta katakana.",
      en: "Get to know the Japanese writing systems and learn to read hiragana and katakana.",
    },
  },
  {
    id: "everyday",
    title: { id: "Ungkapan Sehari-hari", en: "Everyday Expressions" },
    description: {
      id: "Salam, angka, jam, dan hari yang dipakai setiap hari.",
      en: "Greetings, numbers, time, and days you will use every day.",
    },
  },
  {
    id: "grammar",
    title: { id: "Tata Bahasa Dasar", en: "Basic Grammar" },
    description: {
      id: "Pola kalimat pertama: perkenalan, partikel, kata kerja, dan kata sifat.",
      en: "Your first sentence patterns: introductions, particles, verbs, and adjectives.",
    },
  },
]
