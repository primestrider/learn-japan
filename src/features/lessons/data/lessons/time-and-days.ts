import type { Lesson } from "../../models"

const timeAndDays: Lesson = {
  slug: "time-and-days",
  unit: "everyday",
  title: {
    id: "Jam dan Nama Hari dalam Bahasa Jepang",
    en: "Telling Time and Days of the Week in Japanese",
  },
  description: {
    id: "Belajar menyebut jam dan menit dalam bahasa Jepang, bacaan khusus seperti よじ dan ろっぷん, ごぜん dan ごご, nama-nama hari, serta kata きょう, あした, dan きのう.",
    en: "Learn to tell the time in Japanese with hours and minutes, special readings like よじ and ろっぷん, ごぜん and ごご, the days of the week, and きょう, あした, and きのう.",
  },
  intro: {
    id: "Dengan angka yang sudah kamu pelajari, sekarang kamu bisa menyebut jam dan menit. Kamu juga akan belajar nama-nama hari dalam seminggu, yang masing-masing berasal dari unsur alam.",
    en: "With the numbers you already know, you can now tell the hours and minutes. You'll also learn the days of the week, each of which comes from an element of nature.",
  },
  sections: [
    {
      type: "pattern",
      heading: { id: "Jam: (angka) + じ", en: "Hours: (number) + じ" },
      pattern: { id: "(angka) じ", en: "(number) じ" },
      explanation: {
        id: "Tambahkan じ (時) setelah angka untuk menyebut jam. Tiga jam punya bacaan khusus: よじ (jam 4), しちじ (jam 7), dan くじ (jam 9).",
        en: "Add じ (時) after a number to say the hour. Three hours have special readings: よじ (4 o'clock), しちじ (7 o'clock), and くじ (9 o'clock).",
      },
      examples: [
        { jp: "一時", kana: "いちじ", romaji: "ichiji", meaning: { id: "jam 1", en: "1 o'clock" } },
        { jp: "四時", kana: "よじ", romaji: "yoji", meaning: { id: "jam 4", en: "4 o'clock" } },
        {
          jp: "七時",
          kana: "しちじ",
          romaji: "shichiji",
          meaning: { id: "jam 7", en: "7 o'clock" },
        },
        { jp: "九時", kana: "くじ", romaji: "kuji", meaning: { id: "jam 9", en: "9 o'clock" } },
        {
          jp: "十二時",
          kana: "じゅうにじ",
          romaji: "jūniji",
          meaning: { id: "jam 12", en: "12 o'clock" },
        },
      ],
    },
    {
      type: "vocab",
      heading: { id: "Menit: ふん atau ぷん", en: "Minutes: ふん or ぷん" },
      items: [
        {
          jp: "一分",
          kana: "いっぷん",
          romaji: "ippun",
          meaning: { id: "1 menit", en: "1 minute" },
        },
        {
          jp: "二分",
          kana: "にふん",
          romaji: "nifun",
          meaning: { id: "2 menit", en: "2 minutes" },
        },
        {
          jp: "三分",
          kana: "さんぷん",
          romaji: "sanpun",
          meaning: { id: "3 menit", en: "3 minutes" },
        },
        {
          jp: "四分",
          kana: "よんぷん",
          romaji: "yonpun",
          meaning: { id: "4 menit", en: "4 minutes" },
        },
        {
          jp: "五分",
          kana: "ごふん",
          romaji: "gofun",
          meaning: { id: "5 menit", en: "5 minutes" },
        },
        {
          jp: "六分",
          kana: "ろっぷん",
          romaji: "roppun",
          meaning: { id: "6 menit", en: "6 minutes" },
        },
        {
          jp: "七分",
          kana: "ななふん",
          romaji: "nanafun",
          meaning: { id: "7 menit", en: "7 minutes" },
        },
        {
          jp: "八分",
          kana: "はっぷん",
          romaji: "happun",
          meaning: { id: "8 menit (juga はちふん)", en: "8 minutes (also はちふん)" },
        },
        {
          jp: "九分",
          kana: "きゅうふん",
          romaji: "kyūfun",
          meaning: { id: "9 menit", en: "9 minutes" },
        },
        {
          jp: "十分",
          kana: "じゅっぷん",
          romaji: "juppun",
          meaning: { id: "10 menit (juga じっぷん)", en: "10 minutes (also じっぷん)" },
        },
        {
          jp: "十五分",
          kana: "じゅうごふん",
          romaji: "jūgofun",
          meaning: { id: "15 menit", en: "15 minutes" },
        },
        {
          jp: "三十分",
          kana: "さんじゅっぷん",
          romaji: "sanjuppun",
          meaning: { id: "30 menit", en: "30 minutes" },
        },
        {
          jp: "半",
          kana: "はん",
          romaji: "han",
          meaning: { id: "setengah (lewat 30 menit)", en: "half past" },
        },
      ],
    },
    {
      type: "tip",
      content: {
        id: "Pola mudahnya: angka yang berakhiran 1, 3, 4, 6, 8, dan 10 memakai ぷん, sedangkan 2, 5, 7, dan 9 memakai ふん. Angka puluhan mengikuti pola 10: にじゅっぷん (20 menit), よんじゅうごふん (45 menit).",
        en: "An easy pattern: numbers ending in 1, 3, 4, 6, 8, and 10 use ぷん, while 2, 5, 7, and 9 use ふん. Multiples of ten follow 10: にじゅっぷん (20 minutes), よんじゅうごふん (45 minutes).",
      },
    },
    {
      type: "pattern",
      heading: { id: "Menanyakan jam", en: "Asking the time" },
      pattern: {
        id: "いま なんじですか。 — (ごぜん/ごご) (jam) じ (menit) ふん です。",
        en: "いま なんじですか。 — (ごぜん/ごご) (hour) じ (minute) ふん です。",
      },
      explanation: {
        id: 'いま berarti "sekarang" dan なんじ berarti "jam berapa". Tambahkan ごぜん (pagi/AM) atau ごご (siang-malam/PM) di depan jam bila perlu.',
        en: 'いま means "now" and なんじ means "what time". Put ごぜん (AM) or ごご (PM) before the hour when needed.',
      },
      examples: [
        {
          jp: "A: 今何時ですか。 B: 三時です。",
          kana: "A: いま なんじですか。 B: さんじです。",
          romaji: "A: Ima nanji desu ka. B: Sanji desu.",
          meaning: {
            id: "A: Sekarang jam berapa? B: Jam tiga.",
            en: "A: What time is it now? B: It's three o'clock.",
          },
        },
        {
          jp: "午前十時半です。",
          kana: "ごぜん じゅうじ はんです。",
          romaji: "Gozen jūji han desu.",
          meaning: { id: "Jam setengah sebelas pagi.", en: "It's 10:30 a.m." },
        },
        {
          jp: "午後七時十五分です。",
          kana: "ごご しちじ じゅうごふんです。",
          romaji: "Gogo shichiji jūgofun desu.",
          meaning: { id: "Jam tujuh lewat lima belas malam.", en: "It's 7:15 p.m." },
        },
      ],
    },
    {
      type: "vocab",
      heading: { id: "Nama hari dalam seminggu", en: "Days of the week" },
      items: [
        {
          jp: "月曜日",
          kana: "げつようび",
          romaji: "getsuyōbi",
          meaning: { id: "Senin (bulan)", en: "Monday (moon)" },
        },
        {
          jp: "火曜日",
          kana: "かようび",
          romaji: "kayōbi",
          meaning: { id: "Selasa (api)", en: "Tuesday (fire)" },
        },
        {
          jp: "水曜日",
          kana: "すいようび",
          romaji: "suiyōbi",
          meaning: { id: "Rabu (air)", en: "Wednesday (water)" },
        },
        {
          jp: "木曜日",
          kana: "もくようび",
          romaji: "mokuyōbi",
          meaning: { id: "Kamis (pohon)", en: "Thursday (tree)" },
        },
        {
          jp: "金曜日",
          kana: "きんようび",
          romaji: "kin'yōbi",
          meaning: { id: "Jumat (emas/logam)", en: "Friday (gold/metal)" },
        },
        {
          jp: "土曜日",
          kana: "どようび",
          romaji: "doyōbi",
          meaning: { id: "Sabtu (tanah)", en: "Saturday (earth)" },
        },
        {
          jp: "日曜日",
          kana: "にちようび",
          romaji: "nichiyōbi",
          meaning: { id: "Minggu (matahari)", en: "Sunday (sun)" },
        },
        {
          jp: "何曜日",
          kana: "なんようび",
          romaji: "nan'yōbi",
          meaning: { id: "hari apa?", en: "what day of the week?" },
        },
      ],
    },
    {
      type: "vocab",
      heading: { id: "Kemarin, hari ini, besok", en: "Yesterday, today, tomorrow" },
      items: [
        { jp: "昨日", kana: "きのう", romaji: "kinō", meaning: { id: "kemarin", en: "yesterday" } },
        { jp: "今日", kana: "きょう", romaji: "kyō", meaning: { id: "hari ini", en: "today" } },
        { jp: "明日", kana: "あした", romaji: "ashita", meaning: { id: "besok", en: "tomorrow" } },
        { jp: "今", kana: "いま", romaji: "ima", meaning: { id: "sekarang", en: "now" } },
        {
          jp: "毎日",
          kana: "まいにち",
          romaji: "mainichi",
          meaning: { id: "setiap hari", en: "every day" },
        },
        {
          jp: "午前",
          kana: "ごぜん",
          romaji: "gozen",
          meaning: { id: "pagi; sebelum tengah hari (AM)", en: "morning; a.m." },
        },
        {
          jp: "午後",
          kana: "ごご",
          romaji: "gogo",
          meaning: { id: "siang sampai malam (PM)", en: "afternoon; p.m." },
        },
      ],
    },
    {
      type: "examples",
      heading: { id: "Contoh kalimat", en: "Example sentences" },
      items: [
        {
          jp: "A: 今日は何曜日ですか。 B: 木曜日です。",
          kana: "A: きょうは なんようびですか。 B: もくようびです。",
          romaji: "A: Kyō wa nan'yōbi desu ka. B: Mokuyōbi desu.",
          meaning: {
            id: "A: Hari ini hari apa? B: Hari Kamis.",
            en: "A: What day is it today? B: It's Thursday.",
          },
        },
        {
          jp: "明日は土曜日です。",
          kana: "あしたは どようびです。",
          romaji: "Ashita wa doyōbi desu.",
          meaning: { id: "Besok hari Sabtu.", en: "Tomorrow is Saturday." },
        },
        {
          jp: "昨日は日曜日でした。",
          kana: "きのうは にちようびでした。",
          romaji: "Kinō wa nichiyōbi deshita.",
          meaning: { id: "Kemarin hari Minggu.", en: "Yesterday was Sunday." },
          note: {
            id: "でした adalah bentuk lampau dari です.",
            en: "でした is the past form of です.",
          },
        },
      ],
    },
  ],
}

export default timeAndDays
