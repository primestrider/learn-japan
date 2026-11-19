import type { Lesson } from "../../models"
import { dakuon, gojuon, katakanaChart, katakanaExtended, yoon } from "../kana"

const katakana: Lesson = {
  slug: "katakana",
  unit: "letters",
  title: {
    id: "Katakana: Tabel Lengkap dan Contoh Kata Serapan",
    en: "Katakana: Complete Chart and Loanword Examples",
  },
  description: {
    id: "Belajar katakana dengan tabel lengkap, tanda panjang ー, gabungan bunyi asing seperti ファ dan ティ, huruf yang mirip, serta contoh kata serapan sehari-hari.",
    en: "Learn katakana with the complete chart, the long vowel mark ー, foreign sound combinations like ファ and ティ, look-alike characters, and everyday loanword examples.",
  },
  intro: {
    id: "Katakana punya bunyi yang sama persis dengan hiragana, hanya bentuknya yang berbeda. Huruf ini dipakai untuk kata serapan, nama asing, dan nama negara, jadi kamu akan sering melihatnya di menu, papan nama, dan kemasan produk.",
    en: "Katakana has exactly the same sounds as hiragana; only the shapes differ. It is used for loanwords, foreign names, and country names, so you will see it constantly on menus, signs, and product packaging.",
  },
  sections: [
    {
      type: "text",
      heading: { id: "Kapan katakana dipakai?", en: "When is katakana used?" },
      paragraphs: {
        id: [
          "Kata serapan dari bahasa asing: テレビ (terebi, televisi), パン (pan, roti).",
          "Nama orang dan tempat dari luar Jepang: インドネシア (Indoneshia), ジャカルタ (Jakaruta).",
          "Tiruan bunyi dan penekanan, mirip huruf miring dalam tulisan Latin.",
        ],
        en: [
          "Loanwords from other languages: テレビ (terebi, television), パン (pan, bread).",
          "Names of people and places outside Japan: インドネシア (Indoneshia), ジャカルタ (Jakaruta).",
          "Sound effects and emphasis, a bit like italics in English.",
        ],
      },
    },
    {
      type: "kana",
      heading: { id: "46 huruf katakana dasar", en: "The 46 basic katakana" },
      description: {
        id: "Susunannya sama dengan tabel hiragana. Bandingkan setiap huruf dengan pasangan hiragananya.",
        en: "The layout is the same as the hiragana chart. Compare each character with its hiragana partner.",
      },
      rows: katakanaChart(gojuon),
    },
    {
      type: "kana",
      heading: {
        id: "Dakuten ゛ dan handakuten ゜",
        en: "Dakuten ゛ and handakuten ゜",
      },
      rows: katakanaChart(dakuon),
    },
    {
      type: "kana",
      heading: {
        id: "Gabungan dengan ャ, ュ, ョ kecil",
        en: "Combinations with small ャ, ュ, ョ",
      },
      rows: katakanaChart(yoon),
    },
    {
      type: "pattern",
      heading: { id: "Tanda vokal panjang ー", en: "The long vowel mark ー" },
      pattern: "コ + ー + ヒ + ー = コーヒー",
      explanation: {
        id: "Di katakana, vokal panjang tidak ditulis dengan menambah huruf vokal, tetapi dengan garis ー. Garis ini memanjangkan vokal sebelumnya selama satu ketukan. Pada tulisan vertikal, garisnya ditulis tegak.",
        en: "In katakana, long vowels are not written by adding a vowel character but with a dash ー. The dash lengthens the previous vowel by one beat. In vertical writing, the dash is written vertically.",
      },
      examples: [
        { jp: "コーヒー", romaji: "kōhī", meaning: { id: "kopi", en: "coffee" } },
        { jp: "ケーキ", romaji: "kēki", meaning: { id: "kue", en: "cake" } },
        { jp: "スーパー", romaji: "sūpā", meaning: { id: "supermarket", en: "supermarket" } },
        { jp: "ビール", romaji: "bīru", meaning: { id: "bir", en: "beer" } },
      ],
    },
    {
      type: "kana",
      heading: {
        id: "Gabungan khusus untuk bunyi asing",
        en: "Special combinations for foreign sounds",
      },
      description: {
        id: 'Bunyi seperti "fa" atau "ti" tidak ada dalam bahasa Jepang asli, jadi ditulis dengan huruf kecil ァ, ィ, ゥ, ェ, ォ.',
        en: 'Sounds like "fa" or "ti" don\'t exist in native Japanese, so they are written with small ァ, ィ, ゥ, ェ, ォ.',
      },
      rows: katakanaExtended,
    },
    {
      type: "vocab",
      heading: { id: "Kata serapan sehari-hari", en: "Everyday loanwords" },
      items: [
        { jp: "テレビ", romaji: "terebi", meaning: { id: "televisi", en: "television" } },
        { jp: "パン", romaji: "pan", meaning: { id: "roti", en: "bread" } },
        { jp: "カメラ", romaji: "kamera", meaning: { id: "kamera", en: "camera" } },
        { jp: "ホテル", romaji: "hoteru", meaning: { id: "hotel", en: "hotel" } },
        { jp: "タクシー", romaji: "takushī", meaning: { id: "taksi", en: "taxi" } },
        { jp: "バス", romaji: "basu", meaning: { id: "bus", en: "bus" } },
        { jp: "ジュース", romaji: "jūsu", meaning: { id: "jus", en: "juice" } },
        { jp: "アイスクリーム", romaji: "aisukurīmu", meaning: { id: "es krim", en: "ice cream" } },
        {
          jp: "パソコン",
          romaji: "pasokon",
          meaning: { id: "komputer pribadi", en: "personal computer" },
        },
        { jp: "スマホ", romaji: "sumaho", meaning: { id: "ponsel pintar", en: "smartphone" } },
        { jp: "トイレ", romaji: "toire", meaning: { id: "toilet", en: "toilet" } },
        { jp: "レストラン", romaji: "resutoran", meaning: { id: "restoran", en: "restaurant" } },
        { jp: "インドネシア", romaji: "Indoneshia", meaning: { id: "Indonesia", en: "Indonesia" } },
        { jp: "ジャカルタ", romaji: "Jakaruta", meaning: { id: "Jakarta", en: "Jakarta" } },
        { jp: "パーティー", romaji: "pātī", meaning: { id: "pesta", en: "party" } },
        { jp: "フォーク", romaji: "fōku", meaning: { id: "garpu", en: "fork" } },
      ],
    },
    {
      type: "tip",
      content: {
        id: "Hati-hati dengan huruf yang mirip: シ (shi) dan ツ (tsu), serta ソ (so) dan ン (n). Pada シ dan ン, goresan pendek lebih mendatar dan goresan panjang ditarik dari bawah ke atas. Pada ツ dan ソ, goresan pendek lebih tegak dan goresan panjang ditarik dari atas ke bawah.",
        en: "Watch out for look-alikes: シ (shi) and ツ (tsu), and ソ (so) and ン (n). In シ and ン, the short strokes are more horizontal and the long stroke goes from bottom to top. In ツ and ソ, the short strokes are more vertical and the long stroke goes from top to bottom.",
      },
    },
    {
      type: "tip",
      content: {
        id: 'Kata serapan diucapkan dengan bunyi Jepang, bukan bunyi aslinya. Karena bahasa Jepang hampir selalu menambahkan vokal setelah konsonan, "McDonald\'s" menjadi マクドナルド (Makudonarudo). Ucapkan sesuai katakananya agar dimengerti orang Jepang.',
        en: 'Loanwords are pronounced with Japanese sounds, not their original sounds. Since Japanese almost always adds a vowel after a consonant, "McDonald\'s" becomes マクドナルド (Makudonarudo). Say it the katakana way to be understood.',
      },
    },
  ],
}

export default katakana
