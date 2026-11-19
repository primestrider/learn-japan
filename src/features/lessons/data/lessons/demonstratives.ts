import type { Lesson } from "../../models"

const demonstratives: Lesson = {
  slug: "demonstratives",
  unit: "grammar",
  title: {
    id: "Kore, Sore, Are: Kata Tunjuk dalam Bahasa Jepang",
    en: "Kore, Sore, Are: Japanese Demonstratives Explained",
  },
  description: {
    id: "Pahami kata tunjuk bahasa Jepang これ, それ, あれ, どれ, この, その, あの, dan ここ, そこ, あそこ, lengkap dengan partikel の, kata tanya なん, dan contoh kalimat.",
    en: "Understand Japanese demonstratives これ, それ, あれ, どれ, この, その, あの, and ここ, そこ, あそこ, plus the particle の, the question word なん, and example sentences.",
  },
  intro: {
    id: "Bahasa Jepang punya sistem kata tunjuk yang sangat teratur, disebut こそあど (ko-so-a-do). Awalan こ, そ, あ, dan ど selalu menunjukkan jarak yang sama, jadi sekali paham polanya, kamu bisa memakai semuanya.",
    en: "Japanese has a very regular system of demonstratives called こそあど (ko-so-a-do). The prefixes こ, そ, あ, and ど always show the same distance, so once you get the pattern, you can use all of them.",
  },
  sections: [
    {
      type: "text",
      heading: { id: "Pola こ・そ・あ・ど", en: "The こ・そ・あ・ど pattern" },
      paragraphs: {
        id: [
          'こ (ko): dekat dengan pembicara, seperti "ini".',
          'そ (so): dekat dengan lawan bicara, seperti "itu" yang ada di dekatmu.',
          'あ (a): jauh dari keduanya, seperti "itu" yang di sana.',
          'ど (do): kata tanya, seperti "yang mana".',
        ],
        en: [
          'こ (ko): near the speaker, like "this".',
          'そ (so): near the listener, like "that" (by you).',
          'あ (a): far from both, like "that" (over there).',
          'ど (do): the question word, like "which".',
        ],
      },
    },
    {
      type: "pattern",
      heading: { id: "これ・それ・あれ・どれ (benda)", en: "これ・それ・あれ・どれ (things)" },
      pattern: "これ は N です。",
      explanation: {
        id: 'これ, それ, あれ, dan どれ berdiri sendiri sebagai kata benda: "ini", "itu", "itu (di sana)", dan "yang mana". Untuk bertanya "apa", pakai なん: これは なんですか.',
        en: 'これ, それ, あれ, and どれ stand alone as nouns: "this", "that", "that over there", and "which one". To ask "what", use なん: これは なんですか.',
      },
      examples: [
        {
          jp: "これは ほんです。",
          romaji: "Kore wa hon desu.",
          meaning: { id: "Ini buku.", en: "This is a book." },
        },
        {
          jp: "A: それは なんですか。 B: これは じしょです。",
          romaji: "A: Sore wa nan desu ka. B: Kore wa jisho desu.",
          meaning: {
            id: "A: Itu apa? B: Ini kamus.",
            en: "A: What is that? B: This is a dictionary.",
          },
          note: {
            id: "Perhatikan: benda yang dekat lawan bicara (それ) menjadi これ dari sudut pandang orang yang memegangnya.",
            en: "Notice: the item near the listener (それ) becomes これ from the point of view of the person holding it.",
          },
        },
        {
          jp: "あれは がっこうです。",
          romaji: "Are wa gakkō desu.",
          meaning: { id: "Itu (di sana) sekolah.", en: "That (over there) is a school." },
        },
      ],
    },
    {
      type: "pattern",
      heading: { id: "この・その・あの・どの + kata benda", en: "この・その・あの・どの + noun" },
      pattern: "この N は ～です。",
      explanation: {
        id: "この, その, あの, dan どの tidak bisa berdiri sendiri; selalu diikuti kata benda. Bandingkan: これは ほんです (Ini buku) dan この ほんは たかいです (Buku ini mahal).",
        en: "この, その, あの, and どの can't stand alone; they are always followed by a noun. Compare: これは ほんです (This is a book) and この ほんは たかいです (This book is expensive).",
      },
      examples: [
        {
          jp: "この かばんは わたしのです。",
          romaji: "Kono kaban wa watashi no desu.",
          meaning: { id: "Tas ini milik saya.", en: "This bag is mine." },
        },
        {
          jp: "あの ひとは だれですか。",
          romaji: "Ano hito wa dare desu ka.",
          meaning: { id: "Orang itu siapa?", en: "Who is that person?" },
          note: {
            id: 'だれ berarti "siapa". Bentuk yang lebih sopan adalah どなた.',
            en: 'だれ means "who". The more polite form is どなた.',
          },
        },
        {
          jp: "どの かさですか。",
          romaji: "Dono kasa desu ka.",
          meaning: { id: "Payung yang mana?", en: "Which umbrella?" },
        },
      ],
    },
    {
      type: "pattern",
      heading: { id: "ここ・そこ・あそこ・どこ (tempat)", en: "ここ・そこ・あそこ・どこ (places)" },
      pattern: "N は ここ です。",
      explanation: {
        id: 'Untuk tempat, pakai ここ (di sini), そこ (di situ), あそこ (di sana), dan どこ (di mana). Perhatikan bahwa bentuk "a" adalah あそこ, bukan あこ.',
        en: 'For places, use ここ (here), そこ (there, near you), あそこ (over there), and どこ (where). Note that the "a" form is あそこ, not あこ.',
      },
      examples: [
        {
          jp: "A: トイレは どこですか。 B: あそこです。",
          romaji: "A: Toire wa doko desu ka. B: Asoko desu.",
          meaning: {
            id: "A: Toilet di mana? B: Di sana.",
            en: "A: Where is the toilet? B: Over there.",
          },
        },
        {
          jp: "ここは きょうしつです。",
          romaji: "Koko wa kyōshitsu desu.",
          meaning: { id: "Di sini ruang kelas.", en: "This is the classroom." },
        },
      ],
    },
    {
      type: "pattern",
      heading: {
        id: "Partikel の: milik dan keterangan",
        en: "The particle の: possession and description",
      },
      pattern: "N1 の N2",
      explanation: {
        id: "の menghubungkan dua kata benda. Kata benda pertama menerangkan yang kedua, kebalikan dari urutan bahasa Indonesia: わたしの ほん = buku saya, にほんごの ほん = buku bahasa Jepang. Jika kata benda kedua sudah jelas, boleh dihilangkan: わたしのです (milik saya).",
        en: "の links two nouns. The first noun describes the second, like \"'s\" in English: わたしの ほん = my book, にほんごの ほん = a Japanese-language book. If the second noun is obvious, it can be dropped: わたしのです (it's mine).",
      },
      examples: [
        {
          jp: "これは わたしの ほんです。",
          romaji: "Kore wa watashi no hon desu.",
          meaning: { id: "Ini buku saya.", en: "This is my book." },
        },
        {
          jp: "A: それは だれの かさですか。 B: たなかさんのです。",
          romaji: "A: Sore wa dare no kasa desu ka. B: Tanaka-san no desu.",
          meaning: {
            id: "A: Itu payung siapa? B: Punya Pak/Bu Tanaka.",
            en: "A: Whose umbrella is that? B: It's Mr./Ms. Tanaka's.",
          },
        },
        {
          jp: "これは にほんごの ざっしです。",
          romaji: "Kore wa nihongo no zasshi desu.",
          meaning: { id: "Ini majalah berbahasa Jepang.", en: "This is a Japanese magazine." },
        },
      ],
    },
    {
      type: "vocab",
      heading: { id: "Kosakata benda di sekitar kita", en: "Vocabulary: things around you" },
      items: [
        { jp: "ほん", romaji: "hon", meaning: { id: "buku", en: "book" } },
        { jp: "じしょ", romaji: "jisho", meaning: { id: "kamus", en: "dictionary" } },
        { jp: "ざっし", romaji: "zasshi", meaning: { id: "majalah", en: "magazine" } },
        { jp: "かばん", romaji: "kaban", meaning: { id: "tas", en: "bag" } },
        { jp: "かさ", romaji: "kasa", meaning: { id: "payung", en: "umbrella" } },
        {
          jp: "とけい",
          romaji: "tokei",
          meaning: { id: "jam (tangan/dinding)", en: "watch; clock" },
        },
        { jp: "えんぴつ", romaji: "enpitsu", meaning: { id: "pensil", en: "pencil" } },
        { jp: "ノート", romaji: "nōto", meaning: { id: "buku tulis", en: "notebook" } },
        { jp: "つくえ", romaji: "tsukue", meaning: { id: "meja (belajar)", en: "desk" } },
        { jp: "いす", romaji: "isu", meaning: { id: "kursi", en: "chair" } },
        { jp: "くるま", romaji: "kuruma", meaning: { id: "mobil", en: "car" } },
        { jp: "ひと", romaji: "hito", meaning: { id: "orang", en: "person" } },
        {
          jp: "にほんご",
          romaji: "nihongo",
          meaning: { id: "bahasa Jepang", en: "Japanese (language)" },
        },
        { jp: "なん / なに", romaji: "nan / nani", meaning: { id: "apa", en: "what" } },
        { jp: "だれ", romaji: "dare", meaning: { id: "siapa", en: "who" } },
      ],
    },
    {
      type: "tip",
      content: {
        id: "なに berubah menjadi なん sebelum です dan sebelum bunyi t, d, atau n: なんですか, なんじ. Dalam kebanyakan kalimat dasar, kamu akan memakai なんですか.",
        en: "なに becomes なん before です and before t, d, or n sounds: なんですか, なんじ. In most basic sentences you'll use なんですか.",
      },
    },
  ],
}

export default demonstratives
