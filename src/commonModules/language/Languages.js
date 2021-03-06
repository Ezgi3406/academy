const primary = [
  { code: "en", value: "English" },
  { code: "tr", value: "Turkish" },
  { code: "fr", value: "French" },
];
const others = [
  { code: "ab", value: "Abkhazian" },
  { code: "aa", value: "Afar" },
  { code: "af", value: "Afrikaans" },
  { code: "ak", value: "Akan" },
  { code: "sq", value: "Albanian" },
  { code: "am", value: "Amharic" },
  { code: "ar", value: "Arabic" },
  { code: "an", value: "Aragonese" },
  { code: "hy", value: "Armenian" },
  { code: "as", value: "Assamese" },
  { code: "av", value: "Avaric" },
  { code: "ae", value: "Avestan" },
  { code: "ay", value: "Aymara" },
  { code: "az", value: "Azerbaijani" },
  { code: "bm", value: "Bambara" },
  { code: "ba", value: "Bashkir" },
  { code: "eu", value: "Basque" },
  { code: "be", value: "Belarusian" },
  { code: "bn", value: "Bengali" },
  { code: "bh", value: "Bihari languages" },
  { code: "bi", value: "Bislama" },
  { code: "bs", value: "Bosnian" },
  { code: "br", value: "Breton" },
  { code: "bg", value: "Bulgarian" },
  { code: "my", value: "Burmese" },
  { code: "ca", value: "Catalan, Valencian" },
  { code: "km", value: "Central Khmer" },
  { code: "ch", value: "Chamorro" },
  { code: "ce", value: "Chechen" },
  { code: "ny", value: "Chichewa, Chewa, Nyanja" },
  { code: "zh", value: "Chinese" },
  { code: "cu", value: "Church Slavonic, Old Bulgarian, Old Church Slavonic" },
  { code: "cv", value: "Chuvash" },
  { code: "kw", value: "Cornish" },
  { code: "co", value: "Corsican" },
  { code: "cr", value: "Cree" },
  { code: "hr", value: "Croatian" },
  { code: "cs", value: "Czech" },
  { code: "da", value: "Danish" },
  { code: "dv", value: "Divehi, Dhivehi, Maldivian" },
  { code: "nl", value: "Dutch, Flemish" },
  { code: "dz", value: "Dzongkha" },

  { code: "eo", value: "Esperanto" },
  { code: "et", value: "Estonian" },
  { code: "ee", value: "Ewe" },
  { code: "fo", value: "Faroese" },
  { code: "fj", value: "Fijian" },
  { code: "fi", value: "Finnish" },

  { code: "ff", value: "Fulah" },
  { code: "gd", value: "Gaelic, Scottish Gaelic" },
  { code: "gl", value: "Galician" },
  { code: "lg", value: "Ganda" },
  { code: "ka", value: "Georgian" },
  { code: "de", value: "German" },
  { code: "ki", value: "Gikuyu, Kikuyu" },
  { code: "el", value: "Greek (Modern)" },
  { code: "kl", value: "Greenlandic, Kalaallisut" },
  { code: "gn", value: "Guarani" },
  { code: "gu", value: "Gujarati" },
  { code: "ht", value: "Haitian, Haitian Creole" },
  { code: "ha", value: "Hausa" },
  { code: "he", value: "Hebrew" },
  { code: "hz", value: "Herero" },
  { code: "hi", value: "Hindi" },
  { code: "ho", value: "Hiri Motu" },
  { code: "hu", value: "Hungarian" },
  { code: "is", value: "Icelandic" },
  { code: "io", value: "Ido" },
  { code: "ig", value: "Igbo" },
  { code: "id", value: "Indonesian" },
  {
    code: "ia",
    value: "Interlingua (International Auxiliary Language Association)",
  },
  { code: "ie", value: "Interlingue" },
  { code: "iu", value: "Inuktitut" },
  { code: "ik", value: "Inupiaq" },
  { code: "ga", value: "Irish" },
  { code: "it", value: "Italian" },
  { code: "ja", value: "Japanese" },
  { code: "jv", value: "Javanese" },
  { code: "kn", value: "Kannada" },
  { code: "kr", value: "Kanuri" },
  { code: "ks", value: "Kashmiri" },
  { code: "kk", value: "Kazakh" },
  { code: "rw", value: "Kinyarwanda" },
  { code: "kv", value: "Komi" },
  { code: "kg", value: "Kongo" },
  { code: "ko", value: "Korean" },
  { code: "kj", value: "Kwanyama, Kuanyama" },
  { code: "ku", value: "Kurdish" },
  { code: "ky", value: "Kyrgyz" },
  { code: "lo", value: "Lao" },
  { code: "la", value: "Latin" },
  { code: "lv", value: "Latvian" },
  { code: "lb", value: "Letzeburgesch, Luxembourgish" },
  { code: "li", value: "Limburgish, Limburgan, Limburger" },
  { code: "ln", value: "Lingala" },
  { code: "lt", value: "Lithuanian" },
  { code: "lu", value: "Luba-Katanga" },
  { code: "mk", value: "Macedonian" },
  { code: "mg", value: "Malagasy" },
  { code: "ms", value: "Malay" },
  { code: "ml", value: "Malayalam" },
  { code: "mt", value: "Maltese" },
  { code: "gv", value: "Manx" },
  { code: "mi", value: "Maori" },
  { code: "mr", value: "Marathi" },
  { code: "mh", value: "Marshallese" },
  { code: "ro", value: "Moldovan, Moldavian, Romanian" },
  { code: "mn", value: "Mongolian" },
  { code: "na", value: "Nauru" },
  { code: "nv", value: "Navajo, Navaho" },
  { code: "nd", value: "Northern Ndebele" },
  { code: "ng", value: "Ndonga" },
  { code: "ne", value: "Nepali" },
  { code: "se", value: "Northern Sami" },
  { code: "no", value: "Norwegian" },
  { code: "nb", value: "Norwegian Bokm??l" },
  { code: "nn", value: "Norwegian Nynorsk" },
  { code: "ii", value: "Nuosu, Sichuan Yi" },
  { code: "oc", value: "Occitan (post 1500)" },
  { code: "oj", value: "Ojibwa" },
  { code: "or", value: "Oriya" },
  { code: "om", value: "Oromo" },
  { code: "os", value: "Ossetian, Ossetic" },
  { code: "pi", value: "Pali" },
  { code: "pa", value: "Panjabi, Punjabi" },
  { code: "ps", value: "Pashto, Pushto" },
  { code: "fa", value: "Persian" },
  { code: "pl", value: "Polish" },
  { code: "pt", value: "Portuguese" },
  { code: "qu", value: "Quechua" },
  { code: "rm", value: "Romansh" },
  { code: "rn", value: "Rundi" },
  { code: "ru", value: "Russian" },
  { code: "sm", value: "Samoan" },
  { code: "sg", value: "Sango" },
  { code: "sa", value: "Sanskrit" },
  { code: "sc", value: "Sardinian" },
  { code: "sr", value: "Serbian" },
  { code: "sn", value: "Shona" },
  { code: "sd", value: "Sindhi" },
  { code: "si", value: "Sinhala, Sinhalese" },
  { code: "sk", value: "Slovak" },
  { code: "sl", value: "Slovenian" },
  { code: "so", value: "Somali" },
  { code: "st", value: "Sotho, Southern" },
  { code: "nr", value: "South Ndebele" },
  { code: "es", value: "Spanish, Castilian" },
  { code: "su", value: "Sundanese" },
  { code: "sw", value: "Swahili" },
  { code: "ss", value: "Swati" },
  { code: "sv", value: "Swedish" },
  { code: "tl", value: "Tagalog" },
  { code: "ty", value: "Tahitian" },
  { code: "tg", value: "Tajik" },
  { code: "ta", value: "Tamil" },
  { code: "tt", value: "Tatar" },
  { code: "te", value: "Telugu" },
  { code: "th", value: "Thai" },
  { code: "bo", value: "Tibetan" },
  { code: "ti", value: "Tigrinya" },
  { code: "to", value: "Tonga (Tonga Islands)" },
  { code: "ts", value: "Tsonga" },
  { code: "tn", value: "Tswana" },

  { code: "tk", value: "Turkmen" },
  { code: "tw", value: "Twi" },
  { code: "ug", value: "Uighur, Uyghur" },
  { code: "uk", value: "Ukrainian" },
  { code: "ur", value: "Urdu" },
  { code: "uz", value: "Uzbek" },
  { code: "ve", value: "Venda" },
  { code: "vi", value: 'Viet"value"se' },
  { code: "vo", value: "Volap_k" },
  { code: "wa", value: "Walloon" },
  { code: "cy", value: "Welsh" },
  { code: "fy", value: "Western Frisian" },
  { code: "wo", value: "Wolof" },
  { code: "xh", value: "Xhosa" },
  { code: "yi", value: "Yiddish" },
  { code: "yo", value: "Yoruba" },
  { code: "za", value: "Zhuang, Chuang" },
  { code: "zu", value: "Zulu" },
];

const languages = [...primary, ...others];
export default languages;
