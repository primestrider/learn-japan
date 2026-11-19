import type { Lesson } from "../../models"

const verbsMasu: Lesson = {
  slug: "verbs-masu",
  unit: "grammar",
  title: {
    id: "Kata Kerja Bentuk ます: Sekarang, Negatif, dan Lampau",
    en: "Japanese ます-Form Verbs: Present, Negative, and Past",
  },
  description: {
    id: "Belajar kata kerja bahasa Jepang bentuk sopan ます: ～ます, ～ません, ～ました, ～ませんでした, ajakan ～ませんか dan ～ましょう, beserta 15 kata kerja sehari-hari.",
    en: "Learn polite Japanese ます-form verbs for beginners: present, negative, and past forms, invitations with ～ませんか and ～ましょう, and 15 everyday verbs with examples.",
  },
  intro: {
    id: 'Bentuk ます adalah bentuk sopan kata kerja yang dipelajari pertama kali, karena bisa dipakai kepada siapa saja. Kabar baiknya, kata kerja Jepang tidak berubah menurut subjek: "saya makan", "dia makan", dan "mereka makan" semuanya たべます.',
    en: 'The ます-form is the polite verb form you learn first, because you can use it with anyone. The good news: Japanese verbs don\'t change with the subject. "I eat", "she eats", and "they eat" are all たべます.',
  },
  sections: [
    {
      type: "text",
      heading: { id: "Empat bentuk dasar", en: "The four basic forms" },
      paragraphs: {
        id: [
          "Setiap kata kerja bentuk ます punya empat bentuk dengan akhiran yang selalu sama: ～ます (sekarang/akan datang), ～ません (tidak), ～ました (sudah/lampau), dan ～ませんでした (tidak, di masa lalu).",
          'Bahasa Jepang tidak membedakan sekarang dan masa depan. たべます bisa berarti "makan" (kebiasaan) atau "akan makan"; konteks dan kata waktu yang menentukan.',
        ],
        en: [
          "Every ます-form verb has four forms with the same endings: ～ます (present/future), ～ません (negative), ～ました (past), and ～ませんでした (past negative).",
          'Japanese doesn\'t separate present and future. たべます can mean "eat" (as a habit) or "will eat"; context and time words decide.',
        ],
      },
    },
    {
      type: "pattern",
      heading: { id: "Perubahan bentuk: たべます", en: "Conjugation: たべます" },
      pattern: "～ます → ～ません → ～ました → ～ませんでした",
      explanation: {
        id: "Cukup ganti akhiran ます. Pola ini berlaku untuk semua kata kerja bentuk ます tanpa pengecualian.",
        en: "Just swap the ます ending. This pattern works for every ます-form verb without exception.",
      },
      examples: [
        {
          jp: "たべます",
          romaji: "tabemasu",
          meaning: { id: "makan; akan makan", en: "eat; will eat" },
        },
        {
          jp: "たべません",
          romaji: "tabemasen",
          meaning: { id: "tidak makan", en: "don't eat; won't eat" },
        },
        {
          jp: "たべました",
          romaji: "tabemashita",
          meaning: { id: "sudah makan; tadi makan", en: "ate" },
        },
        {
          jp: "たべませんでした",
          romaji: "tabemasen deshita",
          meaning: { id: "tidak makan (tadi)", en: "didn't eat" },
        },
      ],
    },
    {
      type: "vocab",
      heading: { id: "15 kata kerja sehari-hari", en: "15 everyday verbs" },
      items: [
        {
          jp: "いきます",
          romaji: "ikimasu",
          meaning: { id: "pergi (bentuk kamus: いく)", en: "go (dictionary form: いく)" },
        },
        { jp: "きます", romaji: "kimasu", meaning: { id: "datang (くる)", en: "come (くる)" } },
        {
          jp: "かえります",
          romaji: "kaerimasu",
          meaning: { id: "pulang (かえる)", en: "return home (かえる)" },
        },
        {
          jp: "たべます",
          romaji: "tabemasu",
          meaning: { id: "makan (たべる)", en: "eat (たべる)" },
        },
        { jp: "のみます", romaji: "nomimasu", meaning: { id: "minum (のむ)", en: "drink (のむ)" } },
        {
          jp: "みます",
          romaji: "mimasu",
          meaning: { id: "melihat; menonton (みる)", en: "see; watch (みる)" },
        },
        {
          jp: "ききます",
          romaji: "kikimasu",
          meaning: { id: "mendengar; bertanya (きく)", en: "listen; ask (きく)" },
        },
        {
          jp: "よみます",
          romaji: "yomimasu",
          meaning: { id: "membaca (よむ)", en: "read (よむ)" },
        },
        {
          jp: "かきます",
          romaji: "kakimasu",
          meaning: { id: "menulis (かく)", en: "write (かく)" },
        },
        { jp: "かいます", romaji: "kaimasu", meaning: { id: "membeli (かう)", en: "buy (かう)" } },
        { jp: "します", romaji: "shimasu", meaning: { id: "melakukan (する)", en: "do (する)" } },
        {
          jp: "おきます",
          romaji: "okimasu",
          meaning: { id: "bangun tidur (おきる)", en: "get up (おきる)" },
        },
        {
          jp: "ねます",
          romaji: "nemasu",
          meaning: { id: "tidur (ねる)", en: "sleep; go to bed (ねる)" },
        },
        {
          jp: "はたらきます",
          romaji: "hatarakimasu",
          meaning: { id: "bekerja (はたらく)", en: "work (はたらく)" },
        },
        {
          jp: "べんきょうします",
          romaji: "benkyō shimasu",
          meaning: { id: "belajar (べんきょうする)", en: "study (べんきょうする)" },
        },
      ],
    },
    {
      type: "tip",
      content: {
        id: "Kata di dalam kurung adalah bentuk kamus, yaitu bentuk yang tercantum di kamus dan dipakai dalam percakapan santai. Untuk sekarang, cukup kuasai bentuk ます; cara mengubahnya ke bentuk kamus dipelajari di tahap berikutnya.",
        en: "The word in brackets is the dictionary form: the form listed in dictionaries and used in casual speech. For now, focus on the ます-form; converting to dictionary forms comes at a later stage.",
      },
    },
    {
      type: "pattern",
      heading: { id: "Kalimat lengkap dengan partikel", en: "Full sentences with particles" },
      pattern: {
        id: "(waktu) (tempat) で N を (kata kerja)ます",
        en: "(time) (place) で N を (verb)ます",
      },
      explanation: {
        id: "Gabungkan kata kerja dengan partikel yang sudah kamu pelajari: を untuk objek, に untuk jam dan tujuan, で untuk tempat kegiatan dan alat, と untuk teman. Kata kerja selalu di akhir kalimat.",
        en: "Combine verbs with the particles you've learned: を for objects, に for clock times and destinations, で for places of action and means, と for companions. The verb always comes last.",
      },
      examples: [
        {
          jp: "まいにち ろくじに おきます。",
          romaji: "Mainichi rokuji ni okimasu.",
          meaning: { id: "Setiap hari saya bangun jam enam.", en: "I get up at six every day." },
        },
        {
          jp: "としょかんで ほんを よみました。",
          romaji: "Toshokan de hon o yomimashita.",
          meaning: {
            id: "Saya membaca buku di perpustakaan.",
            en: "I read a book at the library.",
          },
        },
        {
          jp: "きのう テレビを みませんでした。",
          romaji: "Kinō terebi o mimasen deshita.",
          meaning: { id: "Kemarin saya tidak menonton TV.", en: "I didn't watch TV yesterday." },
        },
        {
          jp: "ともだちと でんしゃで がっこうへ いきます。",
          romaji: "Tomodachi to densha de gakkō e ikimasu.",
          meaning: {
            id: "Saya pergi ke sekolah naik kereta bersama teman.",
            en: "I go to school by train with a friend.",
          },
        },
        {
          jp: "おさけを のみません。",
          romaji: "Osake o nomimasen.",
          meaning: { id: "Saya tidak minum alkohol.", en: "I don't drink alcohol." },
        },
      ],
    },
    {
      type: "pattern",
      heading: {
        id: "Mengajak: ～ませんか dan ～ましょう",
        en: "Invitations: ～ませんか and ～ましょう",
      },
      pattern: "いっしょに ～ませんか。 — ええ、～ましょう。",
      explanation: {
        id: '～ませんか ("bagaimana kalau ...?") adalah cara sopan mengajak seseorang, karena memberi ruang untuk menolak. ～ましょう berarti "ayo ..." dan dipakai untuk menerima ajakan atau mengusulkan sesuatu. いっしょに berarti "bersama-sama".',
        en: '～ませんか ("won\'t you ...?") is a polite way to invite someone, since it leaves room to decline. ～ましょう means "let\'s ..." and is used to accept an invitation or make a suggestion. いっしょに means "together".',
      },
      examples: [
        {
          jp: "A: いっしょに ひるごはんを たべませんか。 B: ええ、たべましょう。",
          romaji: "A: Issho ni hirugohan o tabemasen ka. B: Ē, tabemashō.",
          meaning: {
            id: "A: Mau makan siang bersama? B: Ya, ayo makan.",
            en: "A: Would you like to have lunch together? B: Sure, let's eat.",
          },
        },
        {
          jp: "A: どようびに えいがを みませんか。 B: すみません、どようびは ちょっと…。",
          romaji: "A: Doyōbi ni eiga o mimasen ka. B: Sumimasen, doyōbi wa chotto...",
          meaning: {
            id: "A: Mau nonton film hari Sabtu? B: Maaf, hari Sabtu agak...",
            en: "A: Would you like to see a movie on Saturday? B: Sorry, Saturday is a bit...",
          },
          note: {
            id: 'ちょっと… (agak...) adalah cara halus untuk menolak tanpa berkata "tidak".',
            en: 'ちょっと… (it\'s a bit...) is a gentle way to decline without saying "no".',
          },
        },
        {
          jp: "じゃあ、かえりましょう。",
          romaji: "Jā, kaerimashō.",
          meaning: { id: "Kalau begitu, ayo pulang.", en: "Well then, let's go home." },
        },
      ],
    },
    {
      type: "examples",
      heading: { id: "Percakapan: akhir pekan", en: "Conversation: the weekend" },
      items: [
        {
          jp: "A: にちようびに なにを しましたか。",
          romaji: "A: Nichiyōbi ni nani o shimashita ka.",
          meaning: {
            id: "A: Hari Minggu kamu melakukan apa?",
            en: "A: What did you do on Sunday?",
          },
        },
        {
          jp: "B: デパートで くつを かいました。",
          romaji: "B: Depāto de kutsu o kaimashita.",
          meaning: {
            id: "B: Saya membeli sepatu di department store.",
            en: "B: I bought shoes at a department store.",
          },
        },
        {
          jp: "B: それから、うちで にほんごを べんきょうしました。",
          romaji: "B: Sorekara, uchi de nihongo o benkyō shimashita.",
          meaning: {
            id: "B: Setelah itu, saya belajar bahasa Jepang di rumah.",
            en: "B: After that, I studied Japanese at home.",
          },
        },
        {
          jp: "A: そうですか。わたしは どこも いきませんでした。",
          romaji: "A: Sō desu ka. Watashi wa doko mo ikimasen deshita.",
          meaning: {
            id: "A: Oh begitu. Saya tidak pergi ke mana-mana.",
            en: "A: I see. I didn't go anywhere.",
          },
          note: {
            id: 'Kata tanya + も dengan kalimat negatif berarti "tidak ... sama sekali": どこも (ke mana pun), なにも (apa pun).',
            en: 'A question word + も with a negative verb means "not ... at all": どこも (anywhere), なにも (anything).',
          },
        },
      ],
    },
  ],
}

export default verbsMasu
