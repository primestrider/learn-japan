import type { KanaCell } from "../models"

/** "あ:a い:i -" -> one chart row; "-" is an empty cell */
const row = (spec: string): KanaCell[] =>
  spec.split(" ").map((cell) => {
    if (cell === "-") return null
    const [kana, romaji] = cell.split(":")
    return { kana, romaji }
  })

/** Basic 46 hiragana, columns a・i・u・e・o */
export const gojuon: KanaCell[][] = [
  row("あ:a い:i う:u え:e お:o"),
  row("か:ka き:ki く:ku け:ke こ:ko"),
  row("さ:sa し:shi す:su せ:se そ:so"),
  row("た:ta ち:chi つ:tsu て:te と:to"),
  row("な:na に:ni ぬ:nu ね:ne の:no"),
  row("は:ha ひ:hi ふ:fu へ:he ほ:ho"),
  row("ま:ma み:mi む:mu め:me も:mo"),
  row("や:ya - ゆ:yu - よ:yo"),
  row("ら:ra り:ri る:ru れ:re ろ:ro"),
  row("わ:wa - - - を:o"),
  row("ん:n - - - -"),
]

/** Voiced (゛) and semi-voiced (゜) hiragana */
export const dakuon: KanaCell[][] = [
  row("が:ga ぎ:gi ぐ:gu げ:ge ご:go"),
  row("ざ:za じ:ji ず:zu ぜ:ze ぞ:zo"),
  row("だ:da ぢ:ji づ:zu で:de ど:do"),
  row("ば:ba び:bi ぶ:bu べ:be ぼ:bo"),
  row("ぱ:pa ぴ:pi ぷ:pu ぺ:pe ぽ:po"),
]

/** Combined sounds with small ゃ・ゅ・ょ, columns ya・yu・yo */
export const yoon: KanaCell[][] = [
  row("きゃ:kya きゅ:kyu きょ:kyo"),
  row("しゃ:sha しゅ:shu しょ:sho"),
  row("ちゃ:cha ちゅ:chu ちょ:cho"),
  row("にゃ:nya にゅ:nyu にょ:nyo"),
  row("ひゃ:hya ひゅ:hyu ひょ:hyo"),
  row("みゃ:mya みゅ:myu みょ:myo"),
  row("りゃ:rya りゅ:ryu りょ:ryo"),
  row("ぎゃ:gya ぎゅ:gyu ぎょ:gyo"),
  row("じゃ:ja じゅ:ju じょ:jo"),
  row("びゃ:bya びゅ:byu びょ:byo"),
  row("ぴゃ:pya ぴゅ:pyu ぴょ:pyo"),
]

/** Katakana-only combinations for foreign sounds */
export const katakanaExtended: KanaCell[][] = [
  row("ファ:fa フィ:fi フェ:fe フォ:fo"),
  row("ティ:ti ディ:di トゥ:tu ドゥ:du"),
  row("ウィ:wi ウェ:we ウォ:wo ヴ:vu"),
  row("シェ:she ジェ:je チェ:che -"),
]

// Hiragana ぁ (U+3041) – ゖ (U+3096) map 1:1 onto katakana ァ (U+30A1) – ヶ (U+30F6)
const KATAKANA_OFFSET = 0x60

const toKatakana = (text: string) =>
  text.replace(/[ぁ-ゖ]/g, (char) => String.fromCharCode(char.charCodeAt(0) + KATAKANA_OFFSET))

/** Same chart in katakana (romaji unchanged) */
export const katakanaChart = (rows: KanaCell[][]): KanaCell[][] =>
  rows.map((cells) => cells.map((cell) => cell && { ...cell, kana: toKatakana(cell.kana) }))
