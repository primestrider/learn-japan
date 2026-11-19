import type { Lesson } from "../../models"

const existence: Lesson = {
  slug: "existence",
  unit: "grammar",
  title: {
    id: 'あります dan います: Menyatakan "Ada" dalam Bahasa Jepang',
    en: 'あります and います: Saying "There Is" in Japanese',
  },
  description: {
    id: 'Pahami perbedaan あります dan います untuk menyatakan "ada" dalam bahasa Jepang, pola tempat に, kata posisi seperti うえ dan なか, serta cara bertanya dan menjawab.',
    en: 'Understand the difference between あります and います for saying "there is" in Japanese, the place + に pattern, position words like うえ and なか, and how to ask and answer.',
  },
  intro: {
    id: 'Bahasa Jepang punya dua kata kerja untuk "ada": あります untuk benda mati dan います untuk makhluk hidup yang bisa bergerak. Di pelajaran terakhir unit ini, kamu akan belajar menyatakan keberadaan sesuatu dan menjelaskan letaknya.',
    en: 'Japanese has two verbs for "there is": あります for inanimate things and います for living things that move. In the final lesson of this unit, you\'ll learn to say that something exists and describe where it is.',
  },
  sections: [
    {
      type: "text",
      heading: { id: "Benda mati atau makhluk hidup?", en: "Inanimate or animate?" },
      paragraphs: {
        id: [
          "あります dipakai untuk benda, tumbuhan, bangunan, dan acara: buku, pohon, stasiun, rapat.",
          "います dipakai untuk orang dan hewan: guru, teman, kucing, ikan.",
          "Bentuk negatifnya mengikuti pola ます: ありません (tidak ada, benda) dan いません (tidak ada, makhluk hidup).",
        ],
        en: [
          "あります is used for objects, plants, buildings, and events: books, trees, stations, meetings.",
          "います is used for people and animals: teachers, friends, cats, fish.",
          "The negatives follow the ます pattern: ありません (there isn't, things) and いません (there isn't, living beings).",
        ],
      },
    },
    {
      type: "pattern",
      heading: { id: "Di (tempat) ada (sesuatu)", en: "At (place) there is (something)" },
      pattern: {
        id: "(tempat) に N が あります / います。",
        en: "(place) に N が あります / います。",
      },
      explanation: {
        id: 'に menandai tempat keberadaan, dan が menandai benda atau makhluk yang ada. Pola ini dipakai untuk memperkenalkan sesuatu yang baru: "Di sana ada ...".',
        en: 'に marks the location, and が marks the thing or being that exists. This pattern introduces something new: "Over there, there is ...".',
      },
      examples: [
        {
          jp: "へやに テレビが あります。",
          romaji: "Heya ni terebi ga arimasu.",
          meaning: { id: "Di kamar ada televisi.", en: "There is a TV in the room." },
        },
        {
          jp: "こうえんに こどもが います。",
          romaji: "Kōen ni kodomo ga imasu.",
          meaning: { id: "Di taman ada anak-anak.", en: "There are children in the park." },
        },
        {
          jp: "この まちに えきが ありません。",
          romaji: "Kono machi ni eki ga arimasen.",
          meaning: {
            id: "Di kota ini tidak ada stasiun.",
            en: "There is no station in this town.",
          },
        },
      ],
    },
    {
      type: "pattern",
      heading: { id: "(Sesuatu) ada di (tempat)", en: "(Something) is at (place)" },
      pattern: {
        id: "N は (tempat) に あります / います。",
        en: "N は (place) に あります / います。",
      },
      explanation: {
        id: 'Jika benda atau orangnya sudah diketahui dan kamu ingin menjelaskan letaknya, jadikan benda itu topik dengan は. Pola ini menjawab pertanyaan "di mana?".',
        en: 'When the thing or person is already known and you want to say where it is, make it the topic with は. This pattern answers "where?".',
      },
      examples: [
        {
          jp: "A: ねこは どこに いますか。 B: にわに います。",
          romaji: "A: Neko wa doko ni imasu ka. B: Niwa ni imasu.",
          meaning: {
            id: "A: Kucingnya di mana? B: Di halaman.",
            en: "A: Where is the cat? B: It's in the garden.",
          },
        },
        {
          jp: "A: ぎんこうは どこに ありますか。 B: えきの まえに あります。",
          romaji: "A: Ginkō wa doko ni arimasu ka. B: Eki no mae ni arimasu.",
          meaning: {
            id: "A: Bank ada di mana? B: Di depan stasiun.",
            en: "A: Where is the bank? B: It's in front of the station.",
          },
        },
      ],
    },
    {
      type: "pattern",
      heading: { id: "Bertanya: apa dan siapa", en: "Asking: what and who" },
      pattern: {
        id: "(tempat) に なにが ありますか。 / だれが いますか。",
        en: "(place) に なにが ありますか。 / だれが いますか。",
      },
      explanation: {
        id: "Kata tanya なに (apa) dan だれ (siapa) selalu diikuti が. Jika tidak ada apa-apa atau siapa-siapa, jawab dengan なにも ありません atau だれも いません.",
        en: "The question words なに (what) and だれ (who) always take が. If there's nothing or nobody, answer with なにも ありません or だれも いません.",
      },
      examples: [
        {
          jp: "A: はこの なかに なにが ありますか。 B: なにも ありません。",
          romaji: "A: Hako no naka ni nani ga arimasu ka. B: Nani mo arimasen.",
          meaning: {
            id: "A: Di dalam kotak ada apa? B: Tidak ada apa-apa.",
            en: "A: What's in the box? B: There's nothing.",
          },
        },
        {
          jp: "A: きょうしつに だれが いますか。 B: せんせいが います。",
          romaji: "A: Kyōshitsu ni dare ga imasu ka. B: Sensei ga imasu.",
          meaning: {
            id: "A: Di kelas ada siapa? B: Ada guru.",
            en: "A: Who is in the classroom? B: The teacher is.",
          },
        },
        {
          jp: "いま うちに だれも いません。",
          romaji: "Ima uchi ni dare mo imasen.",
          meaning: {
            id: "Sekarang tidak ada siapa-siapa di rumah.",
            en: "Nobody is home right now.",
          },
        },
      ],
    },
    {
      type: "vocab",
      heading: { id: "Kata posisi", en: "Position words" },
      items: [
        { jp: "うえ", romaji: "ue", meaning: { id: "atas", en: "on; above" } },
        { jp: "した", romaji: "shita", meaning: { id: "bawah", en: "under; below" } },
        { jp: "なか", romaji: "naka", meaning: { id: "dalam", en: "inside" } },
        { jp: "そと", romaji: "soto", meaning: { id: "luar", en: "outside" } },
        { jp: "まえ", romaji: "mae", meaning: { id: "depan", en: "in front of" } },
        { jp: "うしろ", romaji: "ushiro", meaning: { id: "belakang", en: "behind" } },
        {
          jp: "となり",
          romaji: "tonari",
          meaning: { id: "sebelah (bersebelahan)", en: "next to (side by side)" },
        },
        { jp: "よこ", romaji: "yoko", meaning: { id: "samping", en: "beside" } },
        { jp: "ちかく", romaji: "chikaku", meaning: { id: "dekat; sekitar", en: "near" } },
      ],
    },
    {
      type: "pattern",
      heading: { id: "Menjelaskan letak", en: "Describing location" },
      pattern: {
        id: "N1 の (posisi) に N2 が あります / います。",
        en: "N1 の (position) に N2 が あります / います。",
      },
      explanation: {
        id: "Gabungkan kata benda patokan + の + kata posisi + に. Urutannya kebalikan dari bahasa Indonesia: つくえの うえ = di atas meja (meja-nya atas).",
        en: "Combine the reference noun + の + position word + に. The order is reversed compared to English: つくえの うえ = on the desk (the desk's top).",
      },
      examples: [
        {
          jp: "つくえの うえに ほんが あります。",
          romaji: "Tsukue no ue ni hon ga arimasu.",
          meaning: { id: "Di atas meja ada buku.", en: "There is a book on the desk." },
        },
        {
          jp: "いすの したに いぬが います。",
          romaji: "Isu no shita ni inu ga imasu.",
          meaning: { id: "Di bawah kursi ada anjing.", en: "There is a dog under the chair." },
        },
        {
          jp: "ゆうびんきょくは ぎんこうの となりに あります。",
          romaji: "Yūbinkyoku wa ginkō no tonari ni arimasu.",
          meaning: {
            id: "Kantor pos ada di sebelah bank.",
            en: "The post office is next to the bank.",
          },
        },
      ],
    },
    {
      type: "vocab",
      heading: { id: "Kosakata tempat dan makhluk", en: "Vocabulary: places and beings" },
      items: [
        { jp: "へや", romaji: "heya", meaning: { id: "kamar", en: "room" } },
        { jp: "うち", romaji: "uchi", meaning: { id: "rumah", en: "home; house" } },
        { jp: "にわ", romaji: "niwa", meaning: { id: "halaman; kebun", en: "garden; yard" } },
        { jp: "こうえん", romaji: "kōen", meaning: { id: "taman", en: "park" } },
        { jp: "えき", romaji: "eki", meaning: { id: "stasiun", en: "station" } },
        { jp: "ぎんこう", romaji: "ginkō", meaning: { id: "bank", en: "bank" } },
        {
          jp: "ゆうびんきょく",
          romaji: "yūbinkyoku",
          meaning: { id: "kantor pos", en: "post office" },
        },
        {
          jp: "コンビニ",
          romaji: "konbini",
          meaning: { id: "minimarket", en: "convenience store" },
        },
        { jp: "はこ", romaji: "hako", meaning: { id: "kotak", en: "box" } },
        { jp: "こども", romaji: "kodomo", meaning: { id: "anak-anak", en: "child; children" } },
        { jp: "ともだち", romaji: "tomodachi", meaning: { id: "teman", en: "friend" } },
        { jp: "いぬ", romaji: "inu", meaning: { id: "anjing", en: "dog" } },
        { jp: "ねこ", romaji: "neko", meaning: { id: "kucing", en: "cat" } },
        { jp: "き", romaji: "ki", meaning: { id: "pohon", en: "tree" } },
      ],
    },
    {
      type: "tip",
      content: {
        id: "Ingat perbedaan に dan で: に untuk tempat keberadaan (ada di), で untuk tempat kegiatan (melakukan sesuatu di). Jadi へやに います (ada di kamar), tetapi へやで べんきょうします (belajar di kamar).",
        en: "Remember に versus で: に marks where something exists (is at), で marks where an action happens (does something at). So へやに います (is in the room), but へやで べんきょうします (studies in the room).",
      },
    },
    {
      type: "tip",
      content: {
        id: "Selamat! Kamu sudah menyelesaikan materi paling dasar bahasa Jepang. Ulangi pelajaran yang terasa sulit, lalu latih dengan membuat kalimat tentang dirimu sendiri setiap hari.",
        en: "Congratulations! You've finished the most basic Japanese lessons. Review any lesson that felt hard, then practice by making sentences about yourself every day.",
      },
    },
  ],
}

export default existence
