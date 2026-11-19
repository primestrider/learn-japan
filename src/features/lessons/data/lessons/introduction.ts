import type { Lesson } from "../../models"

const introduction: Lesson = {
  slug: "introduction",
  unit: "letters",
  title: {
    id: "Pengenalan Bahasa Jepang untuk Pemula",
    en: "Introduction to Japanese for Beginners",
  },
  description: {
    id: "Mulai belajar bahasa Jepang dari nol: kenali hiragana, katakana, kanji, lima vokal, urutan kata, dan bahasa sopan sebelum masuk ke pelajaran berikutnya.",
    en: "Start learning Japanese from zero: meet hiragana, katakana, kanji, the five vowels, word order, and polite speech before moving on to the next lessons.",
  },
  intro: {
    id: "Bahasa Jepang terlihat sulit karena hurufnya berbeda, tetapi pengucapannya sederhana dan tata bahasanya teratur. Di pelajaran ini kamu akan mengenal gambaran besarnya: tiga jenis huruf, lima bunyi vokal, urutan kata, dan bentuk sopan.",
    en: "Japanese looks hard because of its scripts, but its pronunciation is simple and its grammar is regular. In this lesson you get the big picture: three scripts, five vowel sounds, word order, and polite speech.",
  },
  sections: [
    {
      type: "text",
      heading: { id: "Tiga jenis huruf", en: "Three scripts" },
      paragraphs: {
        id: [
          "Bahasa Jepang ditulis dengan tiga jenis huruf yang dipakai bersamaan dalam satu kalimat.",
          "Hiragana (ひらがな) adalah huruf dasar. Setiap huruf mewakili satu suku kata, misalnya あ (a) atau か (ka). Hiragana dipakai untuk kata asli Jepang, partikel, dan akhiran kata kerja.",
          "Katakana (カタカナ) mewakili bunyi yang sama dengan hiragana, tetapi dipakai untuk kata serapan dari bahasa asing dan nama asing, misalnya コーヒー (kōhī, kopi).",
          "Kanji (漢字) adalah huruf yang berasal dari Tiongkok. Setiap kanji punya makna, misalnya 山 (yama, gunung). Pemula tidak perlu langsung menghafal kanji; mulailah dari hiragana.",
        ],
        en: [
          "Japanese is written with three scripts that are used together in the same sentence.",
          "Hiragana (ひらがな) is the basic script. Each character stands for one syllable, such as あ (a) or か (ka). Hiragana is used for native Japanese words, particles, and verb endings.",
          "Katakana (カタカナ) represents the same sounds as hiragana, but is used for loanwords and foreign names, such as コーヒー (kōhī, coffee).",
          "Kanji (漢字) are characters that came from China. Each kanji carries a meaning, such as 山 (yama, mountain). Beginners don't need to memorize kanji right away; start with hiragana.",
        ],
      },
    },
    {
      type: "examples",
      heading: {
        id: "Contoh kalimat dengan tiga huruf",
        en: "A sentence using all three scripts",
      },
      items: [
        {
          jp: "私はコーヒーを飲みます。",
          kana: "わたしは コーヒーを のみます。",
          romaji: "Watashi wa kōhī o nomimasu.",
          meaning: { id: "Saya minum kopi.", en: "I drink coffee." },
          note: {
            id: "私 dan 飲 adalah kanji, コーヒー adalah katakana, sisanya hiragana.",
            en: "私 and 飲 are kanji, コーヒー is katakana, and the rest is hiragana.",
          },
        },
      ],
    },
    {
      type: "vocab",
      heading: { id: "Lima bunyi vokal", en: "The five vowel sounds" },
      items: [
        {
          jp: "あ",
          romaji: "a",
          meaning: { id: 'seperti "a" pada "apa"', en: 'like "a" in "father"' },
        },
        {
          jp: "い",
          romaji: "i",
          meaning: { id: 'seperti "i" pada "ini"', en: 'like "ee" in "see" (short)' },
        },
        {
          jp: "う",
          romaji: "u",
          meaning: {
            id: 'seperti "u" pada "udang", bibir tidak dibulatkan',
            en: 'like "oo" in "food" (short), lips not rounded',
          },
        },
        {
          jp: "え",
          romaji: "e",
          meaning: { id: 'seperti "e" pada "enak"', en: 'like "e" in "pet"' },
        },
        {
          jp: "お",
          romaji: "o",
          meaning: { id: 'seperti "o" pada "obat"', en: 'like "o" in "more" (short)' },
        },
      ],
    },
    {
      type: "tip",
      content: {
        id: "Kabar baik untuk penutur bahasa Indonesia: kelima vokal Jepang hampir sama dengan vokal bahasa Indonesia, dan setiap huruf selalu dibaca dengan cara yang sama.",
        en: "Good news: each Japanese vowel always has the same sound, unlike English vowels that change from word to word.",
      },
    },
    {
      type: "pattern",
      heading: { id: "Urutan kata: S-O-P", en: "Word order: S-O-V" },
      pattern: { id: "Subjek は Objek を Kata kerja", en: "Subject は Object を Verb" },
      explanation: {
        id: "Bahasa Indonesia memakai urutan Subjek-Predikat-Objek (Saya minum kopi). Bahasa Jepang meletakkan kata kerja di akhir kalimat: Saya kopi minum. Peran setiap kata ditandai dengan partikel kecil seperti は (wa) dan を (o).",
        en: "English uses Subject-Verb-Object (I drink coffee). Japanese puts the verb at the end: I coffee drink. Small particles such as は (wa) and を (o) mark the role of each word.",
      },
      examples: [
        {
          jp: "私はパンを食べます。",
          kana: "わたしは パンを たべます。",
          romaji: "Watashi wa pan o tabemasu.",
          meaning: { id: "Saya makan roti.", en: "I eat bread." },
        },
        {
          jp: "田中さんは本を読みます。",
          kana: "たなかさんは ほんを よみます。",
          romaji: "Tanaka-san wa hon o yomimasu.",
          meaning: { id: "Pak/Bu Tanaka membaca buku.", en: "Mr./Ms. Tanaka reads a book." },
        },
      ],
    },
    {
      type: "text",
      heading: { id: "Bahasa sopan: です dan ます", en: "Polite speech: です and ます" },
      paragraphs: {
        id: [
          "Bahasa Jepang punya tingkat kesopanan. Kepada orang yang baru dikenal, guru, atau rekan kerja, gunakan bentuk sopan yang berakhiran です (desu) atau ます (masu).",
          "Semua pelajaran dasar di situs ini memakai bentuk sopan, karena bentuk ini aman dipakai dengan siapa saja.",
        ],
        en: [
          "Japanese has levels of politeness. With people you have just met, teachers, or colleagues, use the polite forms ending in です (desu) or ます (masu).",
          "All beginner lessons on this site use polite forms, because they are safe to use with anyone.",
        ],
      },
    },
    {
      type: "tip",
      content: {
        id: "Romaji (huruf Latin) hanya alat bantu di awal. Usahakan segera membaca hiragana, karena orang Jepang hampir tidak pernah menulis dengan romaji.",
        en: "Romaji (Latin letters) is only a starting aid. Try to read hiragana soon, because Japanese people almost never write in romaji.",
      },
    },
  ],
}

export default introduction
