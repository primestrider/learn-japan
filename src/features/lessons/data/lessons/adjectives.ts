import type { Lesson } from "../../models"

const adjectives: Lesson = {
  slug: "adjectives",
  unit: "grammar",
  title: {
    id: "Kata Sifat Bahasa Jepang: Adjektiva い dan な",
    en: "Japanese Adjectives: い-Adjectives and な-Adjectives",
  },
  description: {
    id: "Pelajari dua jenis kata sifat bahasa Jepang, adjektiva い dan な: bentuk sopan sekarang, negatif, dan lampau, cara memakainya sebelum kata benda, serta pengecualian いい.",
    en: "Learn the two types of Japanese adjectives, い and な: polite present, negative, and past forms, how to use them before nouns, and the irregular adjective いい.",
  },
  intro: {
    id: "Kata sifat bahasa Jepang terbagi menjadi dua kelompok: adjektiva い dan adjektiva な. Keduanya punya arti yang sama-sama sederhana, tetapi cara mengubah bentuknya berbeda. Setelah pelajaran ini, kamu bisa mendeskripsikan benda, tempat, dan pengalaman.",
    en: "Japanese adjectives come in two groups: い-adjectives and な-adjectives. Both are simple in meaning, but they change form differently. After this lesson, you'll be able to describe things, places, and experiences.",
  },
  sections: [
    {
      type: "vocab",
      heading: { id: "Adjektiva い (berpasangan)", en: "い-adjectives (in pairs)" },
      items: [
        { jp: "おおきい", romaji: "ōkii", meaning: { id: "besar", en: "big" } },
        { jp: "ちいさい", romaji: "chiisai", meaning: { id: "kecil", en: "small" } },
        {
          jp: "たかい",
          romaji: "takai",
          meaning: { id: "mahal; tinggi", en: "expensive; tall, high" },
        },
        { jp: "やすい", romaji: "yasui", meaning: { id: "murah", en: "cheap" } },
        { jp: "あたらしい", romaji: "atarashii", meaning: { id: "baru", en: "new" } },
        { jp: "ふるい", romaji: "furui", meaning: { id: "lama; tua (benda)", en: "old (things)" } },
        { jp: "あつい", romaji: "atsui", meaning: { id: "panas (cuaca)", en: "hot (weather)" } },
        { jp: "さむい", romaji: "samui", meaning: { id: "dingin (cuaca)", en: "cold (weather)" } },
        { jp: "おいしい", romaji: "oishii", meaning: { id: "enak", en: "delicious" } },
        { jp: "むずかしい", romaji: "muzukashii", meaning: { id: "sulit", en: "difficult" } },
        {
          jp: "やさしい",
          romaji: "yasashii",
          meaning: { id: "mudah; baik hati", en: "easy; kind" },
        },
        {
          jp: "たのしい",
          romaji: "tanoshii",
          meaning: { id: "menyenangkan", en: "fun, enjoyable" },
        },
        { jp: "いそがしい", romaji: "isogashii", meaning: { id: "sibuk", en: "busy" } },
        { jp: "いい", romaji: "ii", meaning: { id: "baik; bagus", en: "good" } },
        { jp: "わるい", romaji: "warui", meaning: { id: "buruk; jelek", en: "bad" } },
      ],
    },
    {
      type: "pattern",
      heading: { id: "Bentuk adjektiva い", en: "い-adjective forms" },
      pattern: "～いです → ～くないです → ～かったです → ～くなかったです",
      explanation: {
        id: "Untuk bentuk negatif dan lampau, huruf い terakhir diganti: い → くない (tidak), い → かった (lampau), い → くなかった (tidak, lampau). です tetap ditambahkan di akhir agar sopan. Bentuk ～くありません juga benar untuk negatif dan terdengar lebih formal.",
        en: "For negative and past forms, the final い is replaced: い → くない (negative), い → かった (past), い → くなかった (past negative). Keep です at the end for politeness. ～くありません is also correct for the negative and sounds more formal.",
      },
      examples: [
        { jp: "たかいです", romaji: "takai desu", meaning: { id: "mahal", en: "is expensive" } },
        {
          jp: "たかくないです",
          romaji: "takakunai desu",
          meaning: { id: "tidak mahal", en: "is not expensive" },
        },
        {
          jp: "たかかったです",
          romaji: "takakatta desu",
          meaning: { id: "(tadi) mahal", en: "was expensive" },
        },
        {
          jp: "たかくなかったです",
          romaji: "takakunakatta desu",
          meaning: { id: "(tadi) tidak mahal", en: "was not expensive" },
        },
      ],
    },
    {
      type: "tip",
      content: {
        id: "いい (bagus) tidak beraturan: bentuk lainnya memakai よ. Jadi よくないです (tidak bagus), よかったです (tadi bagus), よくなかったです (tadi tidak bagus). Jangan pernah mengatakan いくない.",
        en: "いい (good) is irregular: its other forms use よ. So よくないです (not good), よかったです (was good), よくなかったです (was not good). Never say いくない.",
      },
    },
    {
      type: "vocab",
      heading: { id: "Adjektiva な", en: "な-adjectives" },
      items: [
        { jp: "しずか", romaji: "shizuka", meaning: { id: "tenang; sepi", en: "quiet" } },
        {
          jp: "にぎやか",
          romaji: "nigiyaka",
          meaning: { id: "ramai; meriah", en: "lively, busy (place)" },
        },
        {
          jp: "きれい",
          romaji: "kirei",
          meaning: { id: "cantik; bersih", en: "beautiful; clean" },
        },
        {
          jp: "げんき",
          romaji: "genki",
          meaning: { id: "sehat; bersemangat", en: "healthy; energetic" },
        },
        { jp: "ゆうめい", romaji: "yūmei", meaning: { id: "terkenal", en: "famous" } },
        { jp: "しんせつ", romaji: "shinsetsu", meaning: { id: "ramah; baik hati", en: "kind" } },
        { jp: "べんり", romaji: "benri", meaning: { id: "praktis; nyaman", en: "convenient" } },
        {
          jp: "ひま",
          romaji: "hima",
          meaning: { id: "senggang; tidak sibuk", en: "free (not busy)" },
        },
        { jp: "すき", romaji: "suki", meaning: { id: "suka", en: "liked; to like" } },
        {
          jp: "じょうず",
          romaji: "jōzu",
          meaning: { id: "pandai; mahir", en: "skilled, good at" },
        },
      ],
    },
    {
      type: "pattern",
      heading: { id: "Bentuk adjektiva な", en: "な-adjective forms" },
      pattern: "～です → ～じゃありません → ～でした → ～じゃありませんでした",
      explanation: {
        id: "Adjektiva な berubah seperti kata benda: cukup ganti です di belakangnya. Bentuk ～ではありません juga benar dan lebih formal.",
        en: "な-adjectives change like nouns: just change the です after them. ～ではありません is also correct and more formal.",
      },
      examples: [
        { jp: "しずかです", romaji: "shizuka desu", meaning: { id: "tenang", en: "is quiet" } },
        {
          jp: "しずかじゃありません",
          romaji: "shizuka ja arimasen",
          meaning: { id: "tidak tenang", en: "is not quiet" },
        },
        {
          jp: "しずかでした",
          romaji: "shizuka deshita",
          meaning: { id: "(tadi) tenang", en: "was quiet" },
        },
        {
          jp: "しずかじゃありませんでした",
          romaji: "shizuka ja arimasen deshita",
          meaning: { id: "(tadi) tidak tenang", en: "was not quiet" },
        },
      ],
    },
    {
      type: "tip",
      content: {
        id: "きれい dan ゆうめい berakhiran い, tetapi termasuk adjektiva な. Jadi bentuk negatifnya きれいじゃありません, bukan きれくないです.",
        en: "きれい and ゆうめい end in い but are な-adjectives. So the negative is きれいじゃありません, not きれくないです.",
      },
    },
    {
      type: "pattern",
      heading: { id: "Kata sifat sebelum kata benda", en: "Adjectives before nouns" },
      pattern: "～い + N / ～な + N",
      explanation: {
        id: 'Kata sifat diletakkan sebelum kata benda, kebalikan dari bahasa Indonesia. Adjektiva い langsung diikuti kata benda, sedangkan adjektiva な memerlukan な di antaranya. Dari sinilah nama "adjektiva な" berasal.',
        en: 'Adjectives come before the noun, as in English. い-adjectives go straight before the noun, while な-adjectives need な in between. That\'s where the name "な-adjective" comes from.',
      },
      examples: [
        {
          jp: "ふじさんは たかい やまです。",
          romaji: "Fujisan wa takai yama desu.",
          meaning: {
            id: "Gunung Fuji adalah gunung yang tinggi.",
            en: "Mt. Fuji is a tall mountain.",
          },
        },
        {
          jp: "ここは しずかな まちです。",
          romaji: "Koko wa shizuka na machi desu.",
          meaning: { id: "Ini kota yang tenang.", en: "This is a quiet town." },
        },
        {
          jp: "きれいな はなですね。",
          romaji: "Kirei na hana desu ne.",
          meaning: { id: "Bunga yang cantik, ya.", en: "What a beautiful flower." },
          note: {
            id: 'ね di akhir kalimat mengajak lawan bicara setuju, seperti "ya" atau "kan".',
            en: 'ね at the end of a sentence invites agreement, like "isn\'t it?".',
          },
        },
      ],
    },
    {
      type: "pattern",
      heading: { id: "とても dan あまり", en: "とても and あまり" },
      pattern: "とても ～です / あまり ～くないです",
      explanation: {
        id: 'とても berarti "sangat" dan dipakai dengan kalimat positif. あまり berarti "tidak terlalu" dan selalu dipakai dengan kalimat negatif.',
        en: 'とても means "very" and is used with positive sentences. あまり means "not very" and is always used with negative sentences.',
      },
      examples: [
        {
          jp: "この ラーメンは とても おいしいです。",
          romaji: "Kono rāmen wa totemo oishii desu.",
          meaning: { id: "Ramen ini sangat enak.", en: "This ramen is very tasty." },
        },
        {
          jp: "にほんごは あまり むずかしくないです。",
          romaji: "Nihongo wa amari muzukashikunai desu.",
          meaning: {
            id: "Bahasa Jepang tidak terlalu sulit.",
            en: "Japanese isn't very difficult.",
          },
        },
        {
          jp: "きのうは あまり さむくなかったです。",
          romaji: "Kinō wa amari samukunakatta desu.",
          meaning: { id: "Kemarin tidak terlalu dingin.", en: "It wasn't very cold yesterday." },
        },
      ],
    },
    {
      type: "examples",
      heading: { id: "Percakapan: bagaimana?", en: "Conversation: how is it?" },
      items: [
        {
          jp: "A: にほんの せいかつは どうですか。",
          romaji: "A: Nihon no seikatsu wa dō desu ka.",
          meaning: { id: "A: Bagaimana kehidupan di Jepang?", en: "A: How is life in Japan?" },
        },
        {
          jp: "B: たのしいです。でも、ちょっと いそがしいです。",
          romaji: "B: Tanoshii desu. Demo, chotto isogashii desu.",
          meaning: {
            id: "B: Menyenangkan. Tapi agak sibuk.",
            en: "B: It's fun. But it's a little busy.",
          },
        },
        {
          jp: "A: たべものは どうですか。",
          romaji: "A: Tabemono wa dō desu ka.",
          meaning: { id: "A: Makanannya bagaimana?", en: "A: How is the food?" },
        },
        {
          jp: "B: とても おいしいです。でも、あまり やすくないです。",
          romaji: "B: Totemo oishii desu. Demo, amari yasukunai desu.",
          meaning: {
            id: "B: Sangat enak. Tapi tidak terlalu murah.",
            en: "B: It's very tasty. But it's not very cheap.",
          },
        },
      ],
    },
  ],
}

export default adjectives
