import type { Lesson } from "../../models"

const particles: Lesson = {
  slug: "particles",
  unit: "grammar",
  title: {
    id: "Partikel Dasar Bahasa Jepang: は, が, を, に, で, dan Lainnya",
    en: "Basic Japanese Particles: は, が, を, に, で, and More",
  },
  description: {
    id: "Panduan partikel dasar bahasa Jepang untuk pemula: fungsi は, が, を, に, へ, で, と, dan も, cara membacanya, perbedaan に dan で, serta contoh kalimat sederhana.",
    en: "A beginner's guide to basic Japanese particles: what は, が, を, に, へ, で, と, and も do, how to pronounce them, the difference between に and で, and simple examples.",
  },
  intro: {
    id: "Partikel adalah kata kecil yang diletakkan setelah kata untuk menunjukkan perannya dalam kalimat, misalnya subjek, objek, tempat, atau waktu. Karena partikel yang menunjukkan peran, urutan kata dalam bahasa Jepang bisa cukup fleksibel, asalkan kata kerja tetap di akhir.",
    en: "Particles are small words placed after a word to show its role in the sentence, such as subject, object, place, or time. Because particles show the roles, Japanese word order can be fairly flexible, as long as the verb stays at the end.",
  },
  sections: [
    {
      type: "tip",
      content: {
        id: "Contoh di pelajaran ini memakai beberapa kata kerja bentuk ます, misalnya たべます (makan), のみます (minum), dan いきます (pergi). Bentuk ini dijelaskan lengkap di pelajaran berikutnya; untuk sekarang, cukup pahami artinya.",
        en: "The examples in this lesson use a few ます-form verbs, such as たべます (eat), のみます (drink), and いきます (go). This form is fully explained in the next lesson; for now, just note their meanings.",
      },
    },
    {
      type: "pattern",
      heading: { id: 'は: penanda topik (dibaca "wa")', en: 'は: topic marker (read "wa")' },
      pattern: "N は ～",
      explanation: {
        id: 'は menandai topik, yaitu hal yang sedang dibicarakan: "mengenai N, ...". Kamu sudah memakainya di pola わたしは ～です.',
        en: 'は marks the topic, the thing being talked about: "as for N, ...". You\'ve already used it in わたしは ～です.',
      },
      examples: [
        {
          jp: "わたしは がくせいです。",
          romaji: "Watashi wa gakusei desu.",
          meaning: { id: "Saya pelajar.", en: "I am a student." },
        },
        {
          jp: "きょうは げつようびです。",
          romaji: "Kyō wa getsuyōbi desu.",
          meaning: { id: "Hari ini hari Senin.", en: "Today is Monday." },
        },
      ],
    },
    {
      type: "pattern",
      heading: { id: "が: penanda subjek", en: "が: subject marker" },
      pattern: "N が ～",
      explanation: {
        id: "が menandai subjek, terutama saat subjek itu informasi baru atau jawaban dari pertanyaan. Kata tanya seperti だれ (siapa) selalu memakai が, bukan は. が juga dipakai dengan すき (suka): わたしは すしが すきです.",
        en: "が marks the subject, especially when it's new information or the answer to a question. Question words like だれ (who) always take が, not は. が is also used with すき (to like): わたしは すしが すきです.",
      },
      examples: [
        {
          jp: "A: だれが せんせいですか。 B: やまださんが せんせいです。",
          romaji: "A: Dare ga sensei desu ka. B: Yamada-san ga sensei desu.",
          meaning: {
            id: "A: Siapa gurunya? B: Pak/Bu Yamada-lah gurunya.",
            en: "A: Who is the teacher? B: Mr./Ms. Yamada is the teacher.",
          },
        },
        {
          jp: "わたしは すしが すきです。",
          romaji: "Watashi wa sushi ga suki desu.",
          meaning: { id: "Saya suka sushi.", en: "I like sushi." },
        },
      ],
    },
    {
      type: "pattern",
      heading: { id: 'を: penanda objek (dibaca "o")', en: 'を: object marker (read "o")' },
      pattern: { id: "N を (kata kerja)", en: "N を (verb)" },
      explanation: {
        id: "を menandai objek langsung, yaitu benda yang dikenai tindakan: apa yang dimakan, diminum, dibaca, atau dibeli.",
        en: "を marks the direct object: the thing the action is done to, such as what you eat, drink, read, or buy.",
      },
      examples: [
        {
          jp: "パンを たべます。",
          romaji: "Pan o tabemasu.",
          meaning: { id: "Saya makan roti.", en: "I eat bread." },
        },
        {
          jp: "コーヒーを のみます。",
          romaji: "Kōhī o nomimasu.",
          meaning: { id: "Saya minum kopi.", en: "I drink coffee." },
        },
      ],
    },
    {
      type: "pattern",
      heading: { id: "に: waktu dan tujuan", en: "に: time and destination" },
      pattern: {
        id: "(waktu) に ～ / (tempat) に いきます",
        en: "(time) に ～ / (place) に いきます",
      },
      explanation: {
        id: "に menandai titik waktu yang tepat (jam, hari) dan tempat tujuan. Kata waktu relatif seperti きょう, あした, まいにち, dan いま tidak memakai に.",
        en: "に marks a specific point in time (clock times, days) and a destination. Relative time words like きょう, あした, まいにち, and いま don't take に.",
      },
      examples: [
        {
          jp: "しちじに おきます。",
          romaji: "Shichiji ni okimasu.",
          meaning: { id: "Saya bangun jam tujuh.", en: "I get up at seven." },
        },
        {
          jp: "にほんに いきます。",
          romaji: "Nihon ni ikimasu.",
          meaning: { id: "Saya pergi ke Jepang.", en: "I'm going to Japan." },
        },
        {
          jp: "あした がっこうに いきます。",
          romaji: "Ashita gakkō ni ikimasu.",
          meaning: { id: "Besok saya pergi ke sekolah.", en: "I'm going to school tomorrow." },
          note: {
            id: "あした tidak memakai に.",
            en: "あした doesn't take に.",
          },
        },
      ],
    },
    {
      type: "pattern",
      heading: { id: 'へ: arah (dibaca "e")', en: 'へ: direction (read "e")' },
      pattern: {
        id: "(tempat) へ いきます / きます / かえります",
        en: "(place) へ いきます / きます / かえります",
      },
      explanation: {
        id: 'へ menunjukkan arah gerakan, "menuju ke". Dengan kata kerja いきます (pergi), きます (datang), dan かえります (pulang), へ dan に hampir selalu bisa saling menggantikan.',
        en: 'へ shows the direction of movement, "toward". With いきます (go), きます (come), and かえります (return home), へ and に are almost always interchangeable.',
      },
      examples: [
        {
          jp: "とうきょうへ いきます。",
          romaji: "Tōkyō e ikimasu.",
          meaning: { id: "Saya pergi ke Tokyo.", en: "I'm going to Tokyo." },
        },
        {
          jp: "うちへ かえります。",
          romaji: "Uchi e kaerimasu.",
          meaning: { id: "Saya pulang ke rumah.", en: "I'm going home." },
        },
      ],
    },
    {
      type: "pattern",
      heading: { id: "で: tempat kegiatan dan alat", en: "で: place of action and means" },
      pattern: {
        id: "(tempat) で (kegiatan) / (alat) で ～",
        en: "(place) で (activity) / (means) で ～",
      },
      explanation: {
        id: 'で menandai tempat terjadinya kegiatan ("di") dan alat atau cara ("dengan, naik"). Bandingkan dengan に: に untuk tujuan atau keberadaan, で untuk tempat melakukan sesuatu.',
        en: 'で marks where an action happens ("at, in") and the means or tool ("by, with"). Compare it with に: に is for destinations or existence, で is for where you do something.',
      },
      examples: [
        {
          jp: "レストランで たべます。",
          romaji: "Resutoran de tabemasu.",
          meaning: { id: "Saya makan di restoran.", en: "I eat at a restaurant." },
        },
        {
          jp: "バスで いきます。",
          romaji: "Basu de ikimasu.",
          meaning: { id: "Saya pergi naik bus.", en: "I go by bus." },
        },
        {
          jp: "はしで たべます。",
          romaji: "Hashi de tabemasu.",
          meaning: { id: "Saya makan dengan sumpit.", en: "I eat with chopsticks." },
        },
      ],
    },
    {
      type: "pattern",
      heading: { id: 'と: "dan" serta "bersama"', en: 'と: "and" and "with"' },
      pattern: { id: "N1 と N2 / (orang) と ～", en: "N1 と N2 / (person) と ～" },
      explanation: {
        id: 'と menghubungkan kata benda ("dan") dan menunjukkan orang yang bersama kita melakukan sesuatu ("bersama"). と hanya menghubungkan kata benda, bukan kalimat.',
        en: 'と joins nouns ("and") and marks the person you do something with ("with"). と only joins nouns, not sentences.',
      },
      examples: [
        {
          jp: "パンと たまごを たべます。",
          romaji: "Pan to tamago o tabemasu.",
          meaning: { id: "Saya makan roti dan telur.", en: "I eat bread and eggs." },
        },
        {
          jp: "ともだちと いきます。",
          romaji: "Tomodachi to ikimasu.",
          meaning: { id: "Saya pergi bersama teman.", en: "I'm going with a friend." },
        },
      ],
    },
    {
      type: "pattern",
      heading: { id: 'も: "juga"', en: 'も: "also"' },
      pattern: "N も ～",
      explanation: {
        id: 'も berarti "juga" dan menggantikan は, が, atau を, bukan ditambahkan setelahnya.',
        en: 'も means "also, too" and replaces は, が, or を rather than being added after them.',
      },
      examples: [
        {
          jp: "A: わたしは がくせいです。 B: わたしも がくせいです。",
          romaji: "A: Watashi wa gakusei desu. B: Watashi mo gakusei desu.",
          meaning: {
            id: "A: Saya pelajar. B: Saya juga pelajar.",
            en: "A: I'm a student. B: I'm a student too.",
          },
        },
        {
          jp: "おちゃも のみます。",
          romaji: "Ocha mo nomimasu.",
          meaning: { id: "Saya minum teh juga.", en: "I drink tea too." },
        },
      ],
    },
    {
      type: "vocab",
      heading: { id: "Ringkasan partikel", en: "Particle summary" },
      items: [
        { jp: "は", romaji: "wa", meaning: { id: "topik: mengenai ...", en: "topic: as for ..." } },
        {
          jp: "が",
          romaji: "ga",
          meaning: { id: "subjek (informasi baru)", en: "subject (new information)" },
        },
        { jp: "を", romaji: "o", meaning: { id: "objek langsung", en: "direct object" } },
        {
          jp: "に",
          romaji: "ni",
          meaning: { id: "waktu tertentu; tujuan", en: "specific time; destination" },
        },
        { jp: "へ", romaji: "e", meaning: { id: "arah: menuju", en: "direction: toward" } },
        {
          jp: "で",
          romaji: "de",
          meaning: { id: "tempat kegiatan; alat/cara", en: "place of action; means" },
        },
        {
          jp: "と",
          romaji: "to",
          meaning: { id: "dan (kata benda); bersama", en: "and (nouns); with" },
        },
        { jp: "も", romaji: "mo", meaning: { id: "juga", en: "also, too" } },
        {
          jp: "の",
          romaji: "no",
          meaning: { id: "milik; keterangan", en: "possession; description" },
        },
        { jp: "か", romaji: "ka", meaning: { id: "penanda pertanyaan", en: "question marker" } },
      ],
    },
  ],
}

export default particles
