import type { Lesson } from "../../models"

const specialSounds: Lesson = {
  slug: "special-sounds",
  unit: "letters",
  title: {
    id: "Vokal Panjang, っ Kecil, dan ん dalam Bahasa Jepang",
    en: "Long Vowels, Small っ, and ん in Japanese",
  },
  description: {
    id: "Pelajari bunyi khusus bahasa Jepang: vokal panjang, konsonan ganda dengan っ kecil, dan huruf ん, lengkap dengan pasangan kata yang artinya berubah dan tips pelafalan.",
    en: "Learn the special sounds of Japanese: long vowels, double consonants with small っ, and the letter ん, with word pairs whose meaning changes and pronunciation tips.",
  },
  intro: {
    id: "Setelah bisa membaca hiragana, ada tiga bunyi khusus yang perlu kamu kuasai. Ketiganya mengubah panjang ketukan kata, dan sering kali mengubah artinya juga. Melafalkannya dengan benar membuat bahasa Jepangmu jauh lebih mudah dipahami.",
    en: "Once you can read hiragana, there are three special sounds to master. Each one changes the number of beats in a word, and often its meaning too. Pronouncing them correctly makes your Japanese much easier to understand.",
  },
  sections: [
    {
      type: "text",
      heading: { id: "Ketukan (mora)", en: "Beats (mora)" },
      paragraphs: {
        id: [
          "Bahasa Jepang diucapkan dengan ketukan yang rata. Setiap huruf hiragana biasa bernilai satu ketukan: さ・か・な (sakana) punya tiga ketukan.",
          "Vokal panjang, っ kecil, dan ん masing-masing juga bernilai satu ketukan penuh. Karena itu kata おばあさん terdengar lebih panjang daripada おばさん, dan artinya pun berbeda.",
        ],
        en: [
          "Japanese is spoken with even beats. Each ordinary hiragana character counts as one beat: さ・か・な (sakana) has three beats.",
          "Long vowels, small っ, and ん each count as one full beat too. That is why おばあさん sounds longer than おばさん, and the two words mean different things.",
        ],
      },
    },
    {
      type: "pattern",
      heading: { id: "Vokal panjang", en: "Long vowels" },
      pattern: "あ+あ / い+い / う+う / え+い / お+う",
      explanation: {
        id: 'Vokal panjang ditulis dengan menambahkan huruf vokal. Bunyi "aa", "ii", dan "uu" ditulis dengan あ, い, dan う. Bunyi "oo" biasanya ditulis お+う, dan bunyi "ee" biasanya ditulis え+い. Di romaji, vokal panjang ditandai dengan garis di atas huruf: ā, ī, ū, ē, ō.',
        en: 'Long vowels are written by adding a vowel character. The sounds "aa", "ii", and "uu" are written with あ, い, and う. The "oo" sound is usually written お+う, and the "ee" sound is usually written え+い. In romaji, a long vowel gets a line above it: ā, ī, ū, ē, ō.',
      },
      examples: [
        {
          jp: "おかあさん",
          romaji: "okāsan",
          meaning: { id: "ibu (orang lain)", en: "mother (someone else's)" },
        },
        {
          jp: "おにいさん",
          romaji: "onīsan",
          meaning: { id: "kakak laki-laki", en: "older brother" },
        },
        {
          jp: "くうこう",
          romaji: "kūkō",
          meaning: { id: "bandara", en: "airport" },
        },
        {
          jp: "おとうさん",
          romaji: "otōsan",
          meaning: { id: "ayah (orang lain)", en: "father (someone else's)" },
        },
        {
          jp: "せんせい",
          romaji: "sensei",
          meaning: { id: "guru", en: "teacher" },
          note: {
            id: 'えい biasanya diucapkan "ee" panjang, tetapi romajinya tetap ditulis "ei".',
            en: 'えい is usually pronounced as a long "ee", but the romaji is still written "ei".',
          },
        },
      ],
    },
    {
      type: "vocab",
      heading: {
        id: "Pasangan kata: pendek atau panjang?",
        en: "Word pairs: short or long?",
      },
      items: [
        {
          jp: "おばさん",
          romaji: "obasan",
          meaning: { id: "bibi; ibu-ibu", en: "aunt; middle-aged woman" },
        },
        {
          jp: "おばあさん",
          romaji: "obāsan",
          meaning: { id: "nenek", en: "grandmother; elderly woman" },
        },
        {
          jp: "おじさん",
          romaji: "ojisan",
          meaning: { id: "paman; bapak-bapak", en: "uncle; middle-aged man" },
        },
        {
          jp: "おじいさん",
          romaji: "ojīsan",
          meaning: { id: "kakek", en: "grandfather; elderly man" },
        },
        { jp: "ゆき", romaji: "yuki", meaning: { id: "salju", en: "snow" } },
        { jp: "ゆうき", romaji: "yūki", meaning: { id: "keberanian", en: "courage" } },
        { jp: "とり", romaji: "tori", meaning: { id: "burung", en: "bird" } },
        { jp: "とおり", romaji: "tōri", meaning: { id: "jalan raya", en: "street; avenue" } },
      ],
    },
    {
      type: "pattern",
      heading: { id: "っ kecil: konsonan ganda", en: "Small っ: double consonants" },
      pattern: "か + っ + こ = かっこ",
      explanation: {
        id: 'っ yang ditulis kecil tidak dibaca "tsu". Huruf ini menandakan jeda singkat selama satu ketukan sebelum konsonan berikutnya, sehingga konsonannya terdengar ganda. Di romaji, konsonan berikutnya ditulis dua kali: きって = kitte.',
        en: 'A small っ is not read "tsu". It marks a short pause of one beat before the next consonant, so the consonant sounds doubled. In romaji, the next consonant is written twice: きって = kitte.',
      },
      examples: [
        { jp: "きって", romaji: "kitte", meaning: { id: "perangko", en: "postage stamp" } },
        { jp: "がっこう", romaji: "gakkō", meaning: { id: "sekolah", en: "school" } },
        { jp: "きっぷ", romaji: "kippu", meaning: { id: "tiket", en: "ticket" } },
        { jp: "ざっし", romaji: "zasshi", meaning: { id: "majalah", en: "magazine" } },
        {
          jp: "まって",
          romaji: "matte",
          meaning: { id: "tunggu!", en: "wait!" },
          note: {
            id: 'Sebelum ch, romajinya ditulis "tch": まっちゃ = matcha.',
            en: 'Before ch, the romaji is written "tch": まっちゃ = matcha.',
          },
        },
      ],
    },
    {
      type: "vocab",
      heading: { id: "Pasangan kata dengan っ", en: "Word pairs with っ" },
      items: [
        { jp: "かこ", romaji: "kako", meaning: { id: "masa lalu", en: "the past" } },
        {
          jp: "かっこ",
          romaji: "kakko",
          meaning: { id: "tanda kurung; penampilan", en: "brackets; appearance" },
        },
        { jp: "さか", romaji: "saka", meaning: { id: "lereng; tanjakan", en: "slope; hill" } },
        {
          jp: "さっか",
          romaji: "sakka",
          meaning: { id: "penulis; pengarang", en: "author; writer" },
        },
        { jp: "おと", romaji: "oto", meaning: { id: "suara; bunyi", en: "sound" } },
        { jp: "おっと", romaji: "otto", meaning: { id: "suami (sendiri)", en: "(my) husband" } },
      ],
    },
    {
      type: "pattern",
      heading: { id: "ん: bunyi sengau", en: "ん: the nasal sound" },
      pattern: "ほ + ん = ほん",
      explanation: {
        id: 'ん adalah satu-satunya huruf yang hanya berupa konsonan. Bunyinya menyesuaikan huruf berikutnya: sebelum p, b, atau m terdengar seperti "m" (さんぽ), sebelum k atau g terdengar seperti "ng" (りんご), dan di akhir kata terdengar seperti "ng" yang lembut (ほん). ん tidak pernah muncul di awal kata.',
        en: 'ん is the only character that is just a consonant. Its sound adapts to the next letter: before p, b, or m it sounds like "m" (さんぽ), before k or g it sounds like "ng" (りんご), and at the end of a word it is a soft nasal (ほん). ん never starts a word.',
      },
      examples: [
        { jp: "ほん", romaji: "hon", meaning: { id: "buku", en: "book" } },
        { jp: "にほん", romaji: "nihon", meaning: { id: "Jepang", en: "Japan" } },
        { jp: "さんぽ", romaji: "sanpo", meaning: { id: "jalan-jalan santai", en: "a walk" } },
        { jp: "りんご", romaji: "ringo", meaning: { id: "apel", en: "apple" } },
        { jp: "しんぶん", romaji: "shinbun", meaning: { id: "koran", en: "newspaper" } },
      ],
    },
    {
      type: "tip",
      content: {
        id: "Jika ん diikuti vokal atau y, romajinya diberi tanda petik agar tidak tertukar: きんえん (kin'en, dilarang merokok) berbeda dengan きねん (kinen, peringatan).",
        en: "When ん is followed by a vowel or y, the romaji gets an apostrophe so it isn't misread: きんえん (kin'en, no smoking) is different from きねん (kinen, commemoration).",
      },
    },
    {
      type: "text",
      heading: { id: "Vokal yang hampir tak terdengar", en: "Nearly silent vowels" },
      paragraphs: {
        id: [
          "Dalam percakapan, vokal i dan u yang berada di antara konsonan tak bersuara (k, s, t, h, p) atau di akhir kalimat sering hampir tidak terdengar.",
          'Contohnya です terdengar seperti "des", ます seperti "mas", dan すき (suka) seperti "ski". Tulisannya tetap sama; hanya pengucapannya yang lebih ringan.',
        ],
        en: [
          "In speech, the vowels i and u between voiceless consonants (k, s, t, h, p) or at the end of a sentence are often almost silent.",
          'For example, です sounds like "des", ます like "mas", and すき (to like) like "ski". The spelling stays the same; only the pronunciation gets lighter.',
        ],
      },
    },
  ],
}

export default specialSounds
