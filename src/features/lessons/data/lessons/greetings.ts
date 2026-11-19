import type { Lesson } from "../../models"

const greetings: Lesson = {
  slug: "greetings",
  unit: "everyday",
  title: {
    id: "Salam dalam Bahasa Jepang dan Ungkapan Sehari-hari",
    en: "Japanese Greetings and Everyday Expressions",
  },
  description: {
    id: "Pelajari salam bahasa Jepang dari pagi sampai malam, cara berterima kasih dan minta maaf, serta ungkapan sehari-hari seperti いただきます dan ただいま beserta artinya.",
    en: "Learn Japanese greetings from morning to night, how to say thank you and sorry, and everyday phrases like いただきます and ただいま with their meanings and usage.",
  },
  intro: {
    id: "Salam adalah bagian paling penting dari sopan santun Jepang. Di pelajaran ini kamu akan belajar salam sesuai waktu, ungkapan terima kasih dan maaf, serta kalimat-kalimat tetap yang diucapkan orang Jepang setiap hari.",
    en: "Greetings are the heart of Japanese manners. In this lesson you will learn greetings for each time of day, ways to say thank you and sorry, and the set phrases Japanese people say every day.",
  },
  sections: [
    {
      type: "vocab",
      heading: { id: "Salam sesuai waktu", en: "Greetings by time of day" },
      items: [
        {
          jp: "おはようございます",
          romaji: "ohayō gozaimasu",
          meaning: { id: "selamat pagi (sopan)", en: "good morning (polite)" },
        },
        {
          jp: "おはよう",
          romaji: "ohayō",
          meaning: {
            id: "pagi! (santai, ke teman/keluarga)",
            en: "morning! (casual, to friends/family)",
          },
        },
        {
          jp: "こんにちは",
          romaji: "konnichiwa",
          meaning: { id: "halo; selamat siang", en: "hello; good afternoon" },
        },
        {
          jp: "こんばんは",
          romaji: "konbanwa",
          meaning: { id: "selamat malam (saat bertemu)", en: "good evening (when meeting)" },
        },
        {
          jp: "おやすみなさい",
          romaji: "oyasuminasai",
          meaning: { id: "selamat tidur", en: "good night (before sleeping)" },
        },
        {
          jp: "おやすみ",
          romaji: "oyasumi",
          meaning: { id: "selamat tidur (santai)", en: "good night (casual)" },
        },
      ],
    },
    {
      type: "tip",
      content: {
        id: 'は di akhir こんにちは dan こんばんは dibaca "wa", karena aslinya adalah partikel. Ingat juga: こんばんは dipakai saat bertemu di malam hari, sedangkan おやすみなさい dipakai sebelum tidur atau saat berpisah larut malam.',
        en: 'The は at the end of こんにちは and こんばんは is read "wa", because it is originally a particle. Also remember: こんばんは is for meeting someone in the evening, while おやすみなさい is said before bed or when parting late at night.',
      },
    },
    {
      type: "vocab",
      heading: { id: "Terima kasih dan maaf", en: "Thank you and sorry" },
      items: [
        {
          jp: "ありがとうございます",
          romaji: "arigatō gozaimasu",
          meaning: { id: "terima kasih (sopan)", en: "thank you (polite)" },
        },
        {
          jp: "ありがとう",
          romaji: "arigatō",
          meaning: { id: "makasih (santai)", en: "thanks (casual)" },
        },
        {
          jp: "どういたしまして",
          romaji: "dō itashimashite",
          meaning: { id: "sama-sama", en: "you're welcome" },
        },
        {
          jp: "すみません",
          romaji: "sumimasen",
          meaning: {
            id: "maaf; permisi; terima kasih (atas kerepotannya)",
            en: "excuse me; sorry; thank you (for the trouble)",
          },
        },
        {
          jp: "ごめんなさい",
          romaji: "gomennasai",
          meaning: { id: "maaf (atas kesalahan sendiri)", en: "I'm sorry (for my mistake)" },
        },
        {
          jp: "だいじょうぶです",
          romaji: "daijōbu desu",
          meaning: { id: "tidak apa-apa", en: "it's okay; I'm fine" },
        },
      ],
    },
    {
      type: "text",
      heading: { id: "Serba guna: すみません", en: "The all-purpose すみません" },
      paragraphs: {
        id: [
          "すみません adalah salah satu kata paling berguna. Kata ini dipakai untuk memanggil pelayan di restoran, meminta jalan di kereta yang penuh, meminta maaf atas hal kecil, dan bahkan berterima kasih saat seseorang sudah repot membantumu.",
          "ごめんなさい lebih personal dan dipakai untuk meminta maaf atas kesalahan sendiri, biasanya kepada teman atau keluarga. Di tempat kerja atau kepada orang yang tidak dikenal, すみません lebih umum.",
        ],
        en: [
          "すみません is one of the most useful words there is. It is used to call a waiter in a restaurant, to squeeze past people on a crowded train, to apologize for small things, and even to thank someone who went to the trouble of helping you.",
          "ごめんなさい is more personal and is used to apologize for your own mistake, usually to friends or family. At work or with strangers, すみません is more common.",
        ],
      },
    },
    {
      type: "vocab",
      heading: { id: "Ungkapan tetap sehari-hari", en: "Everyday set phrases" },
      items: [
        {
          jp: "いただきます",
          romaji: "itadakimasu",
          meaning: { id: "diucapkan sebelum makan", en: "said before eating" },
        },
        {
          jp: "ごちそうさまでした",
          romaji: "gochisōsama deshita",
          meaning: {
            id: "diucapkan setelah makan (terima kasih atas makanannya)",
            en: "said after eating (thanks for the meal)",
          },
        },
        {
          jp: "いってきます",
          romaji: "ittekimasu",
          meaning: { id: "saya berangkat (saat keluar rumah)", en: "I'm off (when leaving home)" },
        },
        {
          jp: "いってらっしゃい",
          romaji: "itterasshai",
          meaning: { id: "hati-hati di jalan (jawaban)", en: "see you, take care (the reply)" },
        },
        {
          jp: "ただいま",
          romaji: "tadaima",
          meaning: { id: "aku pulang (saat tiba di rumah)", en: "I'm home (when arriving home)" },
        },
        {
          jp: "おかえりなさい",
          romaji: "okaerinasai",
          meaning: { id: "selamat datang kembali (jawaban)", en: "welcome back (the reply)" },
        },
        {
          jp: "さようなら",
          romaji: "sayōnara",
          meaning: {
            id: "selamat tinggal (untuk perpisahan agak lama)",
            en: "goodbye (for a longer parting)",
          },
        },
        {
          jp: "じゃあね",
          romaji: "jā ne",
          meaning: { id: "dah, sampai nanti (santai)", en: "see you, bye (casual)" },
        },
        {
          jp: "おげんきですか",
          romaji: "ogenki desu ka",
          meaning: { id: "apa kabar?", en: "how are you?" },
        },
        {
          jp: "げんきです",
          romaji: "genki desu",
          meaning: { id: "saya baik-baik saja", en: "I'm fine" },
        },
      ],
    },
    {
      type: "tip",
      content: {
        id: "さようなら terdengar seperti perpisahan yang lama, jadi jarang dipakai kepada teman yang akan kamu temui besok. Untuk teman, pakai じゃあね atau じゃあ、また. Di kantor, orang yang pulang lebih dulu biasanya mengucapkan おさきに しつれいします (osaki ni shitsurei shimasu).",
        en: "さようなら sounds like a long goodbye, so it is rarely used with friends you'll see tomorrow. With friends, use じゃあね or じゃあ、また. At the office, someone leaving early usually says おさきに しつれいします (osaki ni shitsurei shimasu).",
      },
    },
    {
      type: "examples",
      heading: { id: "Contoh percakapan", en: "Example conversations" },
      items: [
        {
          jp: "A: おはようございます。 B: おはようございます。",
          romaji: "A: Ohayō gozaimasu. B: Ohayō gozaimasu.",
          meaning: {
            id: "A: Selamat pagi. B: Selamat pagi.",
            en: "A: Good morning. B: Good morning.",
          },
        },
        {
          jp: "A: ありがとうございます。 B: どういたしまして。",
          romaji: "A: Arigatō gozaimasu. B: Dō itashimashite.",
          meaning: { id: "A: Terima kasih. B: Sama-sama.", en: "A: Thank you. B: You're welcome." },
        },
        {
          jp: "A: いってきます。 B: いってらっしゃい。",
          romaji: "A: Ittekimasu. B: Itterasshai.",
          meaning: {
            id: "A: Aku berangkat. B: Hati-hati di jalan.",
            en: "A: I'm off. B: Take care.",
          },
        },
        {
          jp: "A: ただいま。 B: おかえりなさい。",
          romaji: "A: Tadaima. B: Okaerinasai.",
          meaning: {
            id: "A: Aku pulang. B: Selamat datang kembali.",
            en: "A: I'm home. B: Welcome back.",
          },
        },
        {
          jp: "A: おげんきですか。 B: はい、げんきです。",
          romaji: "A: Ogenki desu ka. B: Hai, genki desu.",
          meaning: {
            id: "A: Apa kabar? B: Ya, saya baik-baik saja.",
            en: "A: How are you? B: Yes, I'm fine.",
          },
          note: {
            id: "おげんきですか biasanya ditanyakan kepada orang yang sudah lama tidak ditemui, bukan setiap hari.",
            en: "おげんきですか is usually asked of someone you haven't seen for a while, not every day.",
          },
        },
        {
          jp: "A: すみません！ B: はい。",
          romaji: "A: Sumimasen! B: Hai.",
          meaning: {
            id: "A: Permisi! (memanggil pelayan) B: Ya.",
            en: "A: Excuse me! (calling a waiter) B: Yes?",
          },
        },
      ],
    },
  ],
}

export default greetings
