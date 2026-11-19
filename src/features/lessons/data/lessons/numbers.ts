import type { Lesson } from "../../models"

const numbers: Lesson = {
  slug: "numbers",
  unit: "everyday",
  title: {
    id: "Angka dalam Bahasa Jepang: Cara Menghitung 1 sampai 10.000",
    en: "Japanese Numbers: How to Count from 1 to 10,000",
  },
  description: {
    id: "Belajar angka bahasa Jepang dari 0 sampai 10.000: cara baca, angka 4, 7, dan 9 yang punya dua bacaan, perubahan bunyi ratusan dan ribuan, serta menyebut harga.",
    en: "Learn Japanese numbers from 0 to 10,000: correct readings, why 4, 7, and 9 have two readings, sound changes in hundreds and thousands, and how to say prices.",
  },
  intro: {
    id: "Sistem angka Jepang sangat teratur: setelah hafal 1 sampai 10, kamu bisa menyusun hampir semua angka lain. Yang perlu diperhatikan hanya beberapa bacaan khusus dan perubahan bunyi pada ratusan dan ribuan.",
    en: "The Japanese number system is very regular: once you know 1 to 10, you can build almost every other number. You only need to watch out for a few special readings and sound changes in the hundreds and thousands.",
  },
  sections: [
    {
      type: "vocab",
      heading: { id: "Angka 0 sampai 10", en: "Numbers 0 to 10" },
      items: [
        {
          jp: "ゼロ",
          romaji: "zero",
          meaning: { id: "0 (juga れい / rei)", en: "0 (also れい / rei)" },
        },
        { jp: "一", kana: "いち", romaji: "ichi", meaning: { id: "1", en: "1" } },
        { jp: "二", kana: "に", romaji: "ni", meaning: { id: "2", en: "2" } },
        { jp: "三", kana: "さん", romaji: "san", meaning: { id: "3", en: "3" } },
        {
          jp: "四",
          kana: "よん",
          romaji: "yon",
          meaning: { id: "4 (juga し / shi)", en: "4 (also し / shi)" },
        },
        { jp: "五", kana: "ご", romaji: "go", meaning: { id: "5", en: "5" } },
        { jp: "六", kana: "ろく", romaji: "roku", meaning: { id: "6", en: "6" } },
        {
          jp: "七",
          kana: "なな",
          romaji: "nana",
          meaning: { id: "7 (juga しち / shichi)", en: "7 (also しち / shichi)" },
        },
        { jp: "八", kana: "はち", romaji: "hachi", meaning: { id: "8", en: "8" } },
        {
          jp: "九",
          kana: "きゅう",
          romaji: "kyū",
          meaning: { id: "9 (juga く / ku)", en: "9 (also く / ku)" },
        },
        { jp: "十", kana: "じゅう", romaji: "jū", meaning: { id: "10", en: "10" } },
      ],
    },
    {
      type: "tip",
      content: {
        id: 'Saat berhitung biasa, pakai よん, なな, dan きゅう. Bacaan し (4) jarang dipakai karena bunyinya sama dengan kata "mati", dan く (9) mirip kata "penderitaan". Bacaan lain tetap muncul pada kata tertentu, misalnya jam: よじ (jam 4), しちじ (jam 7), くじ (jam 9).',
        en: 'When counting normally, use よん, なな, and きゅう. The reading し (4) is avoided because it sounds like the word for "death", and く (9) sounds like "suffering". The other readings still appear in certain words, such as clock times: よじ (4 o\'clock), しちじ (7 o\'clock), くじ (9 o\'clock).',
      },
    },
    {
      type: "pattern",
      heading: { id: "Angka 11 sampai 99", en: "Numbers 11 to 99" },
      pattern: { id: "(puluhan) じゅう (satuan)", en: "(tens) じゅう (ones)" },
      explanation: {
        id: "Angka belasan dibentuk dengan じゅう + satuan: 11 = じゅういち (sepuluh-satu). Puluhan dibentuk dengan angka + じゅう: 20 = にじゅう (dua-sepuluh). Gabungkan keduanya untuk angka lain: 35 = さんじゅうご.",
        en: "The teens are じゅう + the unit: 11 = じゅういち (ten-one). Tens are a number + じゅう: 20 = にじゅう (two-ten). Combine both for other numbers: 35 = さんじゅうご.",
      },
      examples: [
        { jp: "十一", kana: "じゅういち", romaji: "jūichi", meaning: { id: "11", en: "11" } },
        { jp: "十九", kana: "じゅうきゅう", romaji: "jūkyū", meaning: { id: "19", en: "19" } },
        { jp: "二十", kana: "にじゅう", romaji: "nijū", meaning: { id: "20", en: "20" } },
        { jp: "四十二", kana: "よんじゅうに", romaji: "yonjūni", meaning: { id: "42", en: "42" } },
        {
          jp: "七十七",
          kana: "ななじゅうなな",
          romaji: "nanajūnana",
          meaning: { id: "77", en: "77" },
        },
        {
          jp: "九十九",
          kana: "きゅうじゅうきゅう",
          romaji: "kyūjūkyū",
          meaning: { id: "99", en: "99" },
        },
      ],
    },
    {
      type: "vocab",
      heading: {
        id: "Ratusan: perhatikan perubahan bunyi",
        en: "Hundreds: watch the sound changes",
      },
      items: [
        { jp: "百", kana: "ひゃく", romaji: "hyaku", meaning: { id: "100", en: "100" } },
        { jp: "二百", kana: "にひゃく", romaji: "nihyaku", meaning: { id: "200", en: "200" } },
        {
          jp: "三百",
          kana: "さんびゃく",
          romaji: "sanbyaku",
          meaning: { id: "300 (berubah: びゃく)", en: "300 (changes to びゃく)" },
        },
        { jp: "四百", kana: "よんひゃく", romaji: "yonhyaku", meaning: { id: "400", en: "400" } },
        { jp: "五百", kana: "ごひゃく", romaji: "gohyaku", meaning: { id: "500", en: "500" } },
        {
          jp: "六百",
          kana: "ろっぴゃく",
          romaji: "roppyaku",
          meaning: { id: "600 (berubah: ろっぴゃく)", en: "600 (changes to ろっぴゃく)" },
        },
        { jp: "七百", kana: "ななひゃく", romaji: "nanahyaku", meaning: { id: "700", en: "700" } },
        {
          jp: "八百",
          kana: "はっぴゃく",
          romaji: "happyaku",
          meaning: { id: "800 (berubah: はっぴゃく)", en: "800 (changes to はっぴゃく)" },
        },
        { jp: "九百", kana: "きゅうひゃく", romaji: "kyūhyaku", meaning: { id: "900", en: "900" } },
      ],
    },
    {
      type: "vocab",
      heading: { id: "Ribuan dan puluh ribuan", en: "Thousands and ten thousands" },
      items: [
        { jp: "千", kana: "せん", romaji: "sen", meaning: { id: "1.000", en: "1,000" } },
        { jp: "二千", kana: "にせん", romaji: "nisen", meaning: { id: "2.000", en: "2,000" } },
        {
          jp: "三千",
          kana: "さんぜん",
          romaji: "sanzen",
          meaning: { id: "3.000 (berubah: ぜん)", en: "3,000 (changes to ぜん)" },
        },
        {
          jp: "八千",
          kana: "はっせん",
          romaji: "hassen",
          meaning: { id: "8.000 (berubah: はっせん)", en: "8,000 (changes to はっせん)" },
        },
        {
          jp: "一万",
          kana: "いちまん",
          romaji: "ichiman",
          meaning: { id: "10.000", en: "10,000" },
        },
        {
          jp: "十万",
          kana: "じゅうまん",
          romaji: "jūman",
          meaning: { id: "100.000", en: "100,000" },
        },
      ],
    },
    {
      type: "text",
      heading: { id: "まん: satuan sepuluh ribu", en: "まん: the ten-thousand unit" },
      paragraphs: {
        id: [
          "Untuk 100 dan 1.000 cukup sebut ひゃく dan せん, tanpa いち. Tetapi 10.000 harus disebut いちまん.",
          'Bahasa Jepang mengelompokkan angka besar per empat digit (per まん), bukan per tiga digit seperti bahasa Indonesia. Jadi 100.000 adalah じゅうまん (sepuluh まん), bukan "seratus ribu".',
        ],
        en: [
          "For 100 and 1,000 just say ひゃく and せん, without いち. But 10,000 must be いちまん.",
          'Japanese groups large numbers in fours (by まん), not in threes like English. So 100,000 is じゅうまん (ten まん), not "a hundred thousand".',
        ],
      },
    },
    {
      type: "examples",
      heading: { id: "Membaca angka besar", en: "Reading larger numbers" },
      items: [
        {
          jp: "365",
          kana: "さんびゃく ろくじゅうご",
          romaji: "sanbyaku rokujūgo",
          meaning: { id: "365", en: "365" },
        },
        {
          jp: "2026",
          kana: "にせん にじゅうろく",
          romaji: "nisen nijūroku",
          meaning: { id: "2026", en: "2026" },
        },
        {
          jp: "3800",
          kana: "さんぜん はっぴゃく",
          romaji: "sanzen happyaku",
          meaning: { id: "3.800", en: "3,800" },
        },
        {
          jp: "15000",
          kana: "いちまん ごせん",
          romaji: "ichiman gosen",
          meaning: { id: "15.000", en: "15,000" },
        },
      ],
    },
    {
      type: "pattern",
      heading: { id: "Menanyakan harga", en: "Asking the price" },
      pattern: {
        id: "いくらですか。 — (angka) えんです。",
        en: "いくらですか。 — (number) えんです。",
      },
      explanation: {
        id: 'いくら berarti "berapa (harganya)". Mata uang Jepang adalah えん (en, yen), yang ditulis 円. Ingat satu pengecualian: 4 yen dibaca よえん, bukan よんえん.',
        en: 'いくら means "how much". The Japanese currency is えん (en, yen), written 円. Remember one exception: 4 yen is read よえん, not よんえん.',
      },
      examples: [
        {
          jp: "A: いくらですか。 B: 500円です。",
          kana: "A: いくらですか。 B: ごひゃくえんです。",
          romaji: "A: Ikura desu ka. B: Gohyaku en desu.",
          meaning: {
            id: "A: Berapa harganya? B: 500 yen.",
            en: "A: How much is it? B: It's 500 yen.",
          },
        },
        {
          jp: "1200円です。",
          kana: "せん にひゃくえんです。",
          romaji: "Sen nihyaku en desu.",
          meaning: { id: "Harganya 1.200 yen.", en: "It's 1,200 yen." },
        },
        {
          jp: "8000円です。",
          kana: "はっせんえんです。",
          romaji: "Hassen en desu.",
          meaning: { id: "Harganya 8.000 yen.", en: "It's 8,000 yen." },
        },
      ],
    },
  ],
}

export default numbers
