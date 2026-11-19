import type { Lesson } from "../../models"
import { dakuon, gojuon, yoon } from "../kana"

const hiragana: Lesson = {
  slug: "hiragana",
  unit: "letters",
  title: {
    id: "Hiragana: Tabel Lengkap dan Cara Membacanya",
    en: "Hiragana: Complete Chart and How to Read It",
  },
  description: {
    id: "Belajar hiragana dari nol dengan tabel lengkap 46 huruf dasar, huruf bertanda ゛ dan ゜, gabungan kecil ゃゅょ, contoh kata, dan tips menghafal yang mudah.",
    en: "Learn hiragana from scratch with the full chart of 46 basic characters, voiced ゛ and ゜ marks, small ゃゅょ combinations, example words, and easy study tips.",
  },
  intro: {
    id: "Hiragana adalah huruf pertama yang dipelajari setiap pemula. Ada 46 huruf dasar, dan setiap huruf mewakili satu suku kata. Setelah menguasai tabel di halaman ini, kamu bisa membaca kata apa pun yang ditulis dengan hiragana.",
    en: "Hiragana is the first script every beginner learns. There are 46 basic characters, and each one stands for one syllable. Once you master the charts on this page, you can read any word written in hiragana.",
  },
  sections: [
    {
      type: "text",
      heading: { id: "Cara membaca tabel", en: "How to read the chart" },
      paragraphs: {
        id: [
          "Tabel hiragana disusun dalam baris dan kolom. Kolom mengikuti lima vokal: a, i, u, e, o. Baris mengikuti konsonan: k, s, t, n, h, m, y, r, w.",
          "Jadi huruf di baris k dan kolom i adalah き (ki). Pola ini membuat hiragana lebih mudah dihafal: kamu cukup mengingat konsonan dan vokalnya.",
          "Perhatikan beberapa huruf yang bunyinya tidak mengikuti pola: し (shi), ち (chi), つ (tsu), dan ふ (fu).",
        ],
        en: [
          "The hiragana chart is arranged in rows and columns. The columns follow the five vowels: a, i, u, e, o. The rows follow the consonants: k, s, t, n, h, m, y, r, w.",
          "So the character in the k row and i column is き (ki). This pattern makes hiragana easier to memorize: you only need to remember the consonant and the vowel.",
          "Watch out for a few characters that break the pattern: し (shi), ち (chi), つ (tsu), and ふ (fu).",
        ],
      },
    },
    {
      type: "kana",
      heading: { id: "46 huruf hiragana dasar", en: "The 46 basic hiragana" },
      description: {
        id: "Hafalkan satu baris setiap hari, dimulai dari baris あ.",
        en: "Memorize one row a day, starting with the あ row.",
      },
      rows: gojuon,
    },
    {
      type: "tip",
      content: {
        id: 'Tiga huruf punya bunyi khusus saat dipakai sebagai partikel: は dibaca "wa", へ dibaca "e", dan を dibaca "o". Di dalam kata biasa, は tetap "ha" dan へ tetap "he".',
        en: 'Three characters sound different when used as particles: は is read "wa", へ is read "e", and を is read "o". Inside ordinary words, は stays "ha" and へ stays "he".',
      },
    },
    {
      type: "kana",
      heading: {
        id: "Dakuten ゛ dan handakuten ゜",
        en: "Dakuten ゛ and handakuten ゜",
      },
      description: {
        id: 'Dua garis kecil ゛ mengubah bunyi menjadi "bersuara": か (ka) menjadi が (ga). Lingkaran kecil ゜ hanya dipakai di baris は: は (ha) menjadi ぱ (pa).',
        en: 'Two small strokes ゛ make a sound "voiced": か (ka) becomes が (ga). The small circle ゜ is only used on the は row: は (ha) becomes ぱ (pa).',
      },
      rows: dakuon,
    },
    {
      type: "tip",
      content: {
        id: 'ぢ dan づ bunyinya sama dengan じ (ji) dan ず (zu). Keduanya jarang dipakai, jadi untuk mengetik "ji" dan "zu" hampir selalu gunakan じ dan ず.',
        en: 'ぢ and づ sound the same as じ (ji) and ず (zu). They are rare, so when you write "ji" and "zu" you almost always use じ and ず.',
      },
    },
    {
      type: "kana",
      heading: {
        id: "Gabungan dengan ゃ, ゅ, ょ kecil",
        en: "Combinations with small ゃ, ゅ, ょ",
      },
      description: {
        id: "Huruf berakhiran i (き, し, ち, dan seterusnya) bisa digabung dengan ゃ, ゅ, atau ょ yang ditulis lebih kecil. Gabungan ini dibaca sebagai satu suku kata: き + ゃ = きゃ (kya).",
        en: "Characters ending in i (き, し, ち, and so on) can combine with a smaller ゃ, ゅ, or ょ. The pair is read as one syllable: き + ゃ = きゃ (kya).",
      },
      rows: yoon,
    },
    {
      type: "vocab",
      heading: { id: "Latihan membaca kata pertama", en: "Reading practice: first words" },
      items: [
        { jp: "あい", romaji: "ai", meaning: { id: "cinta", en: "love" } },
        { jp: "いえ", romaji: "ie", meaning: { id: "rumah", en: "house" } },
        { jp: "いぬ", romaji: "inu", meaning: { id: "anjing", en: "dog" } },
        { jp: "ねこ", romaji: "neko", meaning: { id: "kucing", en: "cat" } },
        { jp: "さかな", romaji: "sakana", meaning: { id: "ikan", en: "fish" } },
        { jp: "すし", romaji: "sushi", meaning: { id: "sushi", en: "sushi" } },
        { jp: "やま", romaji: "yama", meaning: { id: "gunung", en: "mountain" } },
        { jp: "はな", romaji: "hana", meaning: { id: "bunga; hidung", en: "flower; nose" } },
        { jp: "みず", romaji: "mizu", meaning: { id: "air", en: "water" } },
        { jp: "そら", romaji: "sora", meaning: { id: "langit", en: "sky" } },
        { jp: "かばん", romaji: "kaban", meaning: { id: "tas", en: "bag" } },
        { jp: "ひと", romaji: "hito", meaning: { id: "orang", en: "person" } },
        { jp: "でんわ", romaji: "denwa", meaning: { id: "telepon", en: "telephone" } },
        { jp: "おちゃ", romaji: "ocha", meaning: { id: "teh hijau", en: "green tea" } },
        { jp: "でんしゃ", romaji: "densha", meaning: { id: "kereta listrik", en: "train" } },
        { jp: "きょう", romaji: "kyō", meaning: { id: "hari ini", en: "today" } },
      ],
    },
    {
      type: "tip",
      content: {
        id: "Cara cepat menghafal: tulis setiap huruf dengan tangan sambil mengucapkannya, lalu baca kata-kata pendek seperti di atas. Mengenali huruf di dalam kata lebih efektif daripada menghafal tabel saja.",
        en: "A fast way to memorize: write each character by hand while saying it aloud, then read short words like the ones above. Recognizing characters inside words works better than memorizing the chart alone.",
      },
    },
  ],
}

export default hiragana
