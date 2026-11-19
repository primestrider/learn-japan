import type { Lesson } from "../../models"

const selfIntroduction: Lesson = {
  slug: "self-introduction",
  unit: "grammar",
  title: {
    id: "Perkenalan Diri dalam Bahasa Jepang (Jikoshoukai)",
    en: "Self-Introduction in Japanese (Jikoshōkai)",
  },
  description: {
    id: "Belajar memperkenalkan diri dalam bahasa Jepang: pola わたしは〜です, kalimat negatif dan tanya, menyebut asal negara dan pekerjaan, serta contoh jikoshoukai lengkap.",
    en: "Learn to introduce yourself in Japanese: the わたしは〜です pattern, negative and question sentences, saying your country and job, plus a complete self-introduction.",
  },
  intro: {
    id: 'Perkenalan diri dalam bahasa Jepang disebut じこしょうかい (jikoshōkai). Di pelajaran ini kamu akan mempelajari pola kalimat pertamamu, "A adalah B", lalu memakainya untuk menyebut nama, asal, dan pekerjaan.',
    en: 'A self-introduction in Japanese is called じこしょうかい (jikoshōkai). In this lesson you will learn your first sentence pattern, "A is B", and use it to say your name, where you\'re from, and your job.',
  },
  sections: [
    {
      type: "pattern",
      heading: { id: "A adalah B", en: "A is B" },
      pattern: "N1 は N2 です。",
      explanation: {
        id: 'は (dibaca "wa") menandai topik kalimat, yaitu hal yang sedang dibicarakan. です di akhir kalimat berarti "adalah" dan membuat kalimat terdengar sopan. Bahasa Jepang tidak punya bentuk jamak atau kata sandang, jadi kalimatnya sederhana.',
        en: 'は (read "wa") marks the topic of the sentence: what you are talking about. です at the end means "is/am/are" and makes the sentence polite. Japanese has no plurals or articles, so the sentence stays simple.',
      },
      examples: [
        {
          jp: "わたしは アニです。",
          romaji: "Watashi wa Ani desu.",
          meaning: { id: "Saya Ani.", en: "I am Ani." },
        },
        {
          jp: "わたしは がくせいです。",
          romaji: "Watashi wa gakusei desu.",
          meaning: { id: "Saya pelajar/mahasiswa.", en: "I am a student." },
        },
        {
          jp: "たなかさんは せんせいです。",
          romaji: "Tanaka-san wa sensei desu.",
          meaning: { id: "Pak/Bu Tanaka adalah guru.", en: "Mr./Ms. Tanaka is a teacher." },
        },
      ],
    },
    {
      type: "tip",
      content: {
        id: '～さん (-san) ditambahkan setelah nama orang lain sebagai tanda hormat, mirip "Pak" atau "Bu". Jangan pernah memakai さん untuk namamu sendiri. Dalam percakapan, わたしは juga sering dihilangkan jika sudah jelas sedang membicarakan diri sendiri.',
        en: '～さん (-san) is added after other people\'s names as a sign of respect, like "Mr." or "Ms.". Never use さん with your own name. In conversation, わたしは is often dropped when it\'s clear you\'re talking about yourself.',
      },
    },
    {
      type: "pattern",
      heading: { id: "Kalimat negatif", en: "Negative sentences" },
      pattern: "N1 は N2 じゃありません。",
      explanation: {
        id: 'Untuk mengatakan "bukan", ganti です dengan じゃありません. Bentuk ではありません artinya sama, tetapi lebih formal dan sering dipakai dalam tulisan.',
        en: 'To say "is not", replace です with じゃありません. The form ではありません means the same but is more formal and common in writing.',
      },
      examples: [
        {
          jp: "わたしは せんせいじゃありません。",
          romaji: "Watashi wa sensei ja arimasen.",
          meaning: { id: "Saya bukan guru.", en: "I am not a teacher." },
        },
        {
          jp: "わたしは にほんじんではありません。",
          romaji: "Watashi wa nihonjin de wa arimasen.",
          meaning: { id: "Saya bukan orang Jepang.", en: "I am not Japanese." },
          note: {
            id: 'は dalam ではありません juga dibaca "wa".',
            en: 'The は in ではありません is also read "wa".',
          },
        },
      ],
    },
    {
      type: "pattern",
      heading: { id: "Kalimat tanya dengan か", en: "Questions with か" },
      pattern: "N1 は N2 ですか。 — はい、そうです。 / いいえ、ちがいます。",
      explanation: {
        id: 'Cukup tambahkan か di akhir kalimat untuk membuat pertanyaan; urutan kata tidak berubah. Jawab dengan はい (ya) atau いいえ (tidak). そうです berarti "benar begitu", dan ちがいます berarti "bukan/salah".',
        en: 'Just add か at the end of a sentence to make a question; the word order doesn\'t change. Answer with はい (yes) or いいえ (no). そうです means "that\'s right", and ちがいます means "that\'s not right".',
      },
      examples: [
        {
          jp: "A: リナさんは がくせいですか。 B: はい、そうです。",
          romaji: "A: Rina-san wa gakusei desu ka. B: Hai, sō desu.",
          meaning: {
            id: "A: Apakah Rina pelajar? B: Ya, benar.",
            en: "A: Is Rina a student? B: Yes, that's right.",
          },
        },
        {
          jp: "A: やまださんは いしゃですか。 B: いいえ、ちがいます。かんごしです。",
          romaji: "A: Yamada-san wa isha desu ka. B: Iie, chigaimasu. Kangoshi desu.",
          meaning: {
            id: "A: Apakah Yamada dokter? B: Bukan. Dia perawat.",
            en: "A: Is Yamada a doctor? B: No. He/She is a nurse.",
          },
        },
      ],
    },
    {
      type: "pattern",
      heading: { id: "Menyebut asal", en: "Saying where you're from" },
      pattern: { id: "(tempat) から きました。", en: "(place) から きました。" },
      explanation: {
        id: 'から berarti "dari" dan きました berarti "datang" (bentuk lampau). Untuk kebangsaan, tambahkan じん (orang) setelah nama negara: インドネシアじん = orang Indonesia.',
        en: 'から means "from" and きました means "came" (past tense). For nationality, add じん (person) after the country name: インドネシアじん = Indonesian person.',
      },
      examples: [
        {
          jp: "インドネシアから きました。",
          romaji: "Indoneshia kara kimashita.",
          meaning: { id: "Saya dari Indonesia.", en: "I'm from Indonesia." },
        },
        {
          jp: "わたしは インドネシアじんです。",
          romaji: "Watashi wa Indoneshiajin desu.",
          meaning: { id: "Saya orang Indonesia.", en: "I'm Indonesian." },
        },
        {
          jp: "A: どこから きましたか。 B: スラバヤから きました。",
          romaji: "A: Doko kara kimashita ka. B: Surabaya kara kimashita.",
          meaning: {
            id: "A: Kamu dari mana? B: Saya dari Surabaya.",
            en: "A: Where are you from? B: I'm from Surabaya.",
          },
          note: {
            id: 'どこ berarti "di mana / mana". Kata ini dibahas lebih lanjut di pelajaran kata tunjuk.',
            en: 'どこ means "where". It is covered further in the demonstratives lesson.',
          },
        },
      ],
    },
    {
      type: "vocab",
      heading: {
        id: "Negara, kebangsaan, dan pekerjaan",
        en: "Countries, nationalities, and jobs",
      },
      items: [
        { jp: "にほん", romaji: "nihon", meaning: { id: "Jepang", en: "Japan" } },
        {
          jp: "にほんじん",
          romaji: "nihonjin",
          meaning: { id: "orang Jepang", en: "Japanese person" },
        },
        { jp: "インドネシア", romaji: "Indoneshia", meaning: { id: "Indonesia", en: "Indonesia" } },
        {
          jp: "インドネシアじん",
          romaji: "Indoneshiajin",
          meaning: { id: "orang Indonesia", en: "Indonesian person" },
        },
        {
          jp: "アメリカ",
          romaji: "Amerika",
          meaning: { id: "Amerika Serikat", en: "the United States" },
        },
        { jp: "かんこく", romaji: "kankoku", meaning: { id: "Korea Selatan", en: "South Korea" } },
        { jp: "ちゅうごく", romaji: "chūgoku", meaning: { id: "Tiongkok", en: "China" } },
        { jp: "がくせい", romaji: "gakusei", meaning: { id: "pelajar; mahasiswa", en: "student" } },
        { jp: "せんせい", romaji: "sensei", meaning: { id: "guru", en: "teacher" } },
        {
          jp: "かいしゃいん",
          romaji: "kaishain",
          meaning: { id: "karyawan perusahaan", en: "company employee" },
        },
        { jp: "いしゃ", romaji: "isha", meaning: { id: "dokter", en: "doctor" } },
        { jp: "かんごし", romaji: "kangoshi", meaning: { id: "perawat", en: "nurse" } },
        { jp: "エンジニア", romaji: "enjinia", meaning: { id: "insinyur", en: "engineer" } },
        { jp: "しゅふ", romaji: "shufu", meaning: { id: "ibu rumah tangga", en: "homemaker" } },
        { jp: "わたし", romaji: "watashi", meaning: { id: "saya", en: "I; me" } },
        { jp: "あなた", romaji: "anata", meaning: { id: "kamu; Anda", en: "you" } },
      ],
    },
    {
      type: "tip",
      content: {
        id: "あなた jarang dipakai untuk menyapa orang, karena bisa terdengar kurang sopan atau terlalu akrab. Orang Jepang lebih sering memanggil dengan nama + さん, misalnya たなかさん.",
        en: "あなた is rarely used to address people, since it can sound rude or too intimate. Japanese people usually use the person's name + さん instead, such as たなかさん.",
      },
    },
    {
      type: "examples",
      heading: { id: "Contoh perkenalan diri lengkap", en: "A complete self-introduction" },
      items: [
        {
          jp: "はじめまして。",
          romaji: "Hajimemashite.",
          meaning: {
            id: "Salam kenal. (diucapkan saat pertama bertemu)",
            en: "Nice to meet you. (said when meeting for the first time)",
          },
        },
        {
          jp: "わたしは ブディです。",
          romaji: "Watashi wa Budi desu.",
          meaning: { id: "Nama saya Budi.", en: "I'm Budi." },
        },
        {
          jp: "インドネシアから きました。",
          romaji: "Indoneshia kara kimashita.",
          meaning: { id: "Saya dari Indonesia.", en: "I'm from Indonesia." },
        },
        {
          jp: "かいしゃいんです。",
          romaji: "Kaishain desu.",
          meaning: { id: "Saya karyawan perusahaan.", en: "I'm a company employee." },
        },
        {
          jp: "どうぞ よろしく おねがいします。",
          romaji: "Dōzo yoroshiku onegai shimasu.",
          meaning: {
            id: "Mohon bantuannya. (penutup perkenalan yang sopan)",
            en: "I look forward to working with you. (a polite closing)",
          },
        },
      ],
    },
  ],
}

export default selfIntroduction
