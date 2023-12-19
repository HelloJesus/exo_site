const selectInput = document.querySelector('#selectInput')
const selectList = selectInput.querySelector('#selectList')
const input = selectInput.querySelector('p')
let listElement = selectList.querySelectorAll('li')

// create list numbers

if (input && input.id === 'selectPhone') {
    const allCountries1 = [["Afghanistan (‫افغانستان‬‎)", "af", "93"], ["Albania (Shqipëri)", "al", "355"], ["Algeria (‫الجزائر‬‎)", "dz", "213"], ["American Samoa", "as", "1", 5, ["684"]], ["Andorra", "ad", "376"], ["Angola", "ao", "244"], ["Anguilla", "ai", "1", 6, ["264"]], ["Antigua and Barbuda", "ag", "1", 7, ["268"]], ["Argentina", "ar", "54"], ["Armenia (Հայաստան)", "am", "374"], ["Aruba", "aw", "297"], ["Ascension Island", "ac", "247"], ["Australia", "au", "61", 0], ["Austria (Österreich)", "at", "43"], ["Azerbaijan (Azərbaycan)", "az", "994"], ["Bahamas", "bs", "1", 8, ["242"]], ["Bahrain (‫البحرين‬‎)", "bh", "973"], ["Bangladesh (বাংলাদেশ)", "bd", "880"], ["Barbados", "bb", "1", 9, ["246"]], ["Belarus (Беларусь)", "by", "375"], ["Belgium (België)", "be", "32"], ["Belize", "bz", "501"], ["Benin (Bénin)", "bj", "229"], ["Bermuda", "bm", "1", 10, ["441"]], ["Bhutan (འབྲུག)", "bt", "975"], ["Bolivia", "bo", "591"], ["Bosnia and Herzegovina (Босна и Херцеговина)", "ba", "387"], ["Botswana", "bw", "267"], ["Brazil (Brasil)", "br", "55"], ["British Indian Ocean Territory", "io", "246"], ["British Virgin Islands", "vg", "1", 11, ["284"]], ["Brunei", "bn", "673"], ["Bulgaria (България)", "bg", "359"], ["Burkina Faso", "bf", "226"], ["Burundi (Uburundi)", "bi", "257"], ["Cambodia (កម្ពុជា)", "kh", "855"], ["Cameroon (Cameroun)", "cm", "237"], ["Canada", "ca", "1", 1, ["204", "226", "236", "249", "250", "289", "306", "343", "365", "387", "403", "416", "418", "431", "437", "438", "450", "506", "514", "519", "548", "579", "581", "587", "604", "613", "639", "647", "672", "705", "709", "742", "778", "780", "782", "807", "819", "825", "867", "873", "902", "905"]], ["Cape Verde (Kabu Verdi)", "cv", "238"], ["Caribbean Netherlands", "bq", "599", 1, ["3", "4", "7"]], ["Cayman Islands", "ky", "1", 12, ["345"]], ["Central African Republic (République centrafricaine)", "cf", "236"], ["Chad (Tchad)", "td", "235"], ["Chile", "cl", "56"], ["China (中国)", "cn", "86"], ["Christmas Island", "cx", "61", 2, ["89164"]], ["Cocos (Keeling) Islands", "cc", "61", 1, ["89162"]], ["Colombia", "co", "57"], ["Comoros (‫جزر القمر‬‎)", "km", "269"], ["Congo (DRC) (Jamhuri ya Kidemokrasia ya Kongo)", "cd", "243"], ["Congo (Republic) (Congo-Brazzaville)", "cg", "242"], ["Cook Islands", "ck", "682"], ["Costa Rica", "cr", "506"], ["Côte d’Ivoire", "ci", "225"], ["Croatia (Hrvatska)", "hr", "385"], ["Cuba", "cu", "53"], ["Curaçao", "cw", "599", 0], ["Cyprus (Κύπρος)", "cy", "357"], ["Czech Republic (Česká republika)", "cz", "420"], ["Denmark (Danmark)", "dk", "45"], ["Djibouti", "dj", "253"], ["Dominica", "dm", "1", 13, ["767"]], ["Dominican Republic (República Dominicana)", "do", "1", 2, ["809", "829", "849"]], ["Ecuador", "ec", "593"], ["Egypt (‫مصر‬‎)", "eg", "20"], ["El Salvador", "sv", "503"], ["Equatorial Guinea (Guinea Ecuatorial)", "gq", "240"], ["Eritrea", "er", "291"], ["Estonia (Eesti)", "ee", "372"], ["Eswatini", "sz", "268"], ["Ethiopia", "et", "251"], ["Falkland Islands (Islas Malvinas)", "fk", "500"], ["Faroe Islands (Føroyar)", "fo", "298"], ["Fiji", "fj", "679"], ["Finland (Suomi)", "fi", "358", 0], ["France", "fr", "33"], ["French Guiana (Guyane française)", "gf", "594"], ["French Polynesia (Polynésie française)", "pf", "689"], ["Gabon", "ga", "241"], ["Gambia", "gm", "220"], ["Georgia (საქართველო)", "ge", "995"], ["Germany (Deutschland)", "de", "49"], ["Ghana (Gaana)", "gh", "233"], ["Gibraltar", "gi", "350"], ["Greece (Ελλάδα)", "gr", "30"], ["Greenland (Kalaallit Nunaat)", "gl", "299"], ["Grenada", "gd", "1", 14, ["473"]], ["Guadeloupe", "gp", "590", 0], ["Guam", "gu", "1", 15, ["671"]], ["Guatemala", "gt", "502"], ["Guernsey", "gg", "44", 1, ["1481", "7781", "7839", "7911"]], ["Guinea (Guinée)", "gn", "224"], ["Guinea-Bissau (Guiné Bissau)", "gw", "245"], ["Guyana", "gy", "592"], ["Haiti", "ht", "509"], ["Honduras", "hn", "504"], ["Hong Kong (香港)", "hk", "852"], ["Hungary (Magyarország)", "hu", "36"], ["Iceland (Ísland)", "is", "354"], ["India (भारत)", "in", "91"], ["Indonesia", "id", "62"], ["Iran (‫ایران‬‎)", "ir", "98"], ["Iraq (‫العراق‬‎)", "iq", "964"], ["Ireland", "ie", "353"], ["Isle of Man", "im", "44", 2, ["1624", "74576", "7524", "7924", "7624"]], ["Israel (‫ישראל‬‎)", "il", "972"], ["Italy (Italia)", "it", "39", 0], ["Jamaica", "jm", "1", 4, ["876", "658"]], ["Japan (日本)", "jp", "81"], ["Jersey", "je", "44", 3, ["1534", "7509", "7700", "7797", "7829", "7937"]], ["Jordan (‫الأردن‬‎)", "jo", "962"], ["Kazakhstan (Казахстан)", "kz", "7", 1, ["33", "7"]], ["Kenya", "ke", "254"], ["Kiribati", "ki", "686"], ["Kosovo", "xk", "383"], ["Kuwait (‫الكويت‬‎)", "kw", "965"], ["Kyrgyzstan (Кыргызстан)", "kg", "996"], ["Laos (ລາວ)", "la", "856"], ["Latvia (Latvija)", "lv", "371"], ["Lebanon (‫لبنان‬‎)", "lb", "961"], ["Lesotho", "ls", "266"], ["Liberia", "lr", "231"], ["Libya (‫ليبيا‬‎)", "ly", "218"], ["Liechtenstein", "li", "423"], ["Lithuania (Lietuva)", "lt", "370"], ["Luxembourg", "lu", "352"], ["Macau (澳門)", "mo", "853"], ["North Macedonia (Македонија)", "mk", "389"], ["Madagascar (Madagasikara)", "mg", "261"], ["Malawi", "mw", "265"], ["Malaysia", "my", "60"], ["Maldives", "mv", "960"], ["Mali", "ml", "223"], ["Malta", "mt", "356"], ["Marshall Islands", "mh", "692"], ["Martinique", "mq", "596"], ["Mauritania (‫موريتانيا‬‎)", "mr", "222"], ["Mauritius (Moris)", "mu", "230"], ["Mayotte", "yt", "262", 1, ["269", "639"]], ["Mexico (México)", "mx", "52"], ["Micronesia", "fm", "691"], ["Moldova (Republica Moldova)", "md", "373"], ["Monaco", "mc", "377"], ["Mongolia (Монгол)", "mn", "976"], ["Montenegro (Crna Gora)", "me", "382"], ["Montserrat", "ms", "1", 16, ["664"]], ["Morocco (‫المغرب‬‎)", "ma", "212", 0], ["Mozambique (Moçambique)", "mz", "258"], ["Myanmar (Burma) (မြန်မာ)", "mm", "95"], ["Namibia (Namibië)", "na", "264"], ["Nauru", "nr", "674"], ["Nepal (नेपाल)", "np", "977"], ["Netherlands (Nederland)", "nl", "31"], ["New Caledonia (Nouvelle-Calédonie)", "nc", "687"], ["New Zealand", "nz", "64"], ["Nicaragua", "ni", "505"], ["Niger (Nijar)", "ne", "227"], ["Nigeria", "ng", "234"], ["Niue", "nu", "683"], ["Norfolk Island", "nf", "672"], ["North Korea (조선 민주주의 인민 공화국)", "kp", "850"], ["Northern Mariana Islands", "mp", "1", 17, ["670"]], ["Norway (Norge)", "no", "47", 0], ["Oman (‫عُمان‬‎)", "om", "968"], ["Pakistan (‫پاکستان‬‎)", "pk", "92"], ["Palau", "pw", "680"], ["Palestine (‫فلسطين‬‎)", "ps", "970"], ["Panama (Panamá)", "pa", "507"], ["Papua New Guinea", "pg", "675"], ["Paraguay", "py", "595"], ["Peru (Perú)", "pe", "51"], ["Philippines", "ph", "63"], ["Poland (Polska)", "pl", "48"], ["Portugal", "pt", "351"], ["Puerto Rico", "pr", "1", 3, ["787", "939"]], ["Qatar (‫قطر‬‎)", "qa", "974"], ["Réunion (La Réunion)", "re", "262", 0], ["Romania (România)", "ro", "40"], ["Russia (Россия)", "ru", "7", 0], ["Rwanda", "rw", "250"], ["Saint Barthélemy", "bl", "590", 1], ["Saint Helena", "sh", "290"], ["Saint Kitts and Nevis", "kn", "1", 18, ["869"]], ["Saint Lucia", "lc", "1", 19, ["758"]], ["Saint Martin (Saint-Martin (partie française))", "mf", "590", 2], ["Saint Pierre and Miquelon (Saint-Pierre-et-Miquelon)", "pm", "508"], ["Saint Vincent and the Grenadines", "vc", "1", 20, ["784"]], ["Samoa", "ws", "685"], ["San Marino", "sm", "378"], ["São Tomé and Príncipe (São Tomé e Príncipe)", "st", "239"], ["Saudi Arabia (‫المملكة العربية السعودية‬‎)", "sa", "966"], ["Senegal (Sénégal)", "sn", "221"], ["Serbia (Србија)", "rs", "381"], ["Seychelles", "sc", "248"], ["Sierra Leone", "sl", "232"], ["Singapore", "sg", "65"], ["Sint Maarten", "sx", "1", 21, ["721"]], ["Slovakia (Slovensko)", "sk", "421"], ["Slovenia (Slovenija)", "si", "386"], ["Solomon Islands", "sb", "677"], ["Somalia (Soomaaliya)", "so", "252"], ["South Africa", "za", "27"], ["South Korea (대한민국)", "kr", "82"], ["South Sudan (‫جنوب السودان‬‎)", "ss", "211"], ["Spain (España)", "es", "34"], ["Sri Lanka (ශ්‍රී ලංකාව)", "lk", "94"], ["Sudan (‫السودان‬‎)", "sd", "249"], ["Suriname", "sr", "597"], ["Svalbard and Jan Mayen", "sj", "47", 1, ["79"]], ["Sweden (Sverige)", "se", "46"], ["Switzerland (Schweiz)", "ch", "41"], ["Syria (‫سوريا‬‎)", "sy", "963"], ["Taiwan (台灣)", "tw", "886"], ["Tajikistan", "tj", "992"], ["Tanzania", "tz", "255"], ["Thailand (ไทย)", "th", "66"], ["Timor-Leste", "tl", "670"], ["Togo", "tg", "228"], ["Tokelau", "tk", "690"], ["Tonga", "to", "676"], ["Trinidad and Tobago", "tt", "1", 22, ["868"]], ["Tunisia (‫تونس‬‎)", "tn", "216"], ["Turkey (Türkiye)", "tr", "90"], ["Turkmenistan", "tm", "993"], ["Turks and Caicos Islands", "tc", "1", 23, ["649"]], ["Tuvalu", "tv", "688"], ["U.S. Virgin Islands", "vi", "1", 24, ["340"]], ["Uganda", "ug", "256"], ["Ukraine (Україна)", "ua", "380"], ["United Arab Emirates (‫الإمارات العربية المتحدة‬‎)", "ae", "971"], ["United Kingdom", "gb", "44", 0], ["United States", "us", "1", 0], ["Uruguay", "uy", "598"], ["Uzbekistan (Oʻzbekiston)", "uz", "998"], ["Vanuatu", "vu", "678"], ["Vatican City (Città del Vaticano)", "va", "39", 1, ["06698"]], ["Venezuela", "ve", "58"], ["Vietnam (Việt Nam)", "vn", "84"], ["Wallis and Futuna (Wallis-et-Futuna)", "wf", "681"], ["Western Sahara (‫الصحراء الغربية‬‎)", "eh", "212", 1, ["5288", "5289"]], ["Yemen (‫اليمن‬‎)", "ye", "967"], ["Zambia", "zm", "260"], ["Zimbabwe", "zw", "263"], ["Åland Islands", "ax", "358", 1, ["18"]]]
    const allCountries = [
        {
            "name": "Afghanistan",
            "dial_code": "+93",
            "code": "AF"
        },
        {
            "name": "Aland Islands",
            "dial_code": "+358",
            "code": "AX"
        },
        {
            "name": "Albania",
            "dial_code": "+355",
            "code": "AL"
        },
        {
            "name": "Algeria",
            "dial_code": "+213",
            "code": "DZ"
        },
        {
            "name": "AmericanSamoa",
            "dial_code": "+1684",
            "code": "AS"
        },
        {
            "name": "Andorra",
            "dial_code": "+376",
            "code": "AD"
        },
        {
            "name": "Angola",
            "dial_code": "+244",
            "code": "AO"
        },
        {
            "name": "Anguilla",
            "dial_code": "+1264",
            "code": "AI"
        },
        {
            "name": "Antarctica",
            "dial_code": "+672",
            "code": "AQ"
        },
        {
            "name": "Antigua and Barbuda",
            "dial_code": "+1268",
            "code": "AG"
        },
        {
            "name": "Argentina",
            "dial_code": "+54",
            "code": "AR"
        },
        {
            "name": "Armenia",
            "dial_code": "+374",
            "code": "AM"
        },
        {
            "name": "Aruba",
            "dial_code": "+297",
            "code": "AW"
        },
        {
            "name": "Australia",
            "dial_code": "+61",
            "code": "AU"
        },
        {
            "name": "Austria",
            "dial_code": "+43",
            "code": "AT"
        },
        {
            "name": "Azerbaijan",
            "dial_code": "+994",
            "code": "AZ"
        },
        {
            "name": "Bahamas",
            "dial_code": "+1242",
            "code": "BS"
        },
        {
            "name": "Bahrain",
            "dial_code": "+973",
            "code": "BH"
        },
        {
            "name": "Bangladesh",
            "dial_code": "+880",
            "code": "BD"
        },
        {
            "name": "Barbados",
            "dial_code": "+1246",
            "code": "BB"
        },
        {
            "name": "Belarus",
            "dial_code": "+375",
            "code": "BY"
        },
        {
            "name": "Belgium",
            "dial_code": "+32",
            "code": "BE"
        },
        {
            "name": "Belize",
            "dial_code": "+501",
            "code": "BZ"
        },
        {
            "name": "Benin",
            "dial_code": "+229",
            "code": "BJ"
        },
        {
            "name": "Bermuda",
            "dial_code": "+1441",
            "code": "BM"
        },
        {
            "name": "Bhutan",
            "dial_code": "+975",
            "code": "BT"
        },
        {
            "name": "Bolivia, Plurinational State of",
            "dial_code": "+591",
            "code": "BO"
        },
        {
            "name": "Bosnia and Herzegovina",
            "dial_code": "+387",
            "code": "BA"
        },
        {
            "name": "Botswana",
            "dial_code": "+267",
            "code": "BW"
        },
        {
            "name": "Brazil",
            "dial_code": "+55",
            "code": "BR"
        },
        {
            "name": "British Indian Ocean Territory",
            "dial_code": "+246",
            "code": "IO"
        },
        {
            "name": "Brunei Darussalam",
            "dial_code": "+673",
            "code": "BN"
        },
        {
            "name": "Bulgaria",
            "dial_code": "+359",
            "code": "BG"
        },
        {
            "name": "Burkina Faso",
            "dial_code": "+226",
            "code": "BF"
        },
        {
            "name": "Burundi",
            "dial_code": "+257",
            "code": "BI"
        },
        {
            "name": "Cambodia",
            "dial_code": "+855",
            "code": "KH"
        },
        {
            "name": "Cameroon",
            "dial_code": "+237",
            "code": "CM"
        },
        {
            "name": "Canada",
            "dial_code": "+1",
            "code": "CA"
        },
        {
            "name": "Cape Verde",
            "dial_code": "+238",
            "code": "CV"
        },
        {
            "name": "Cayman Islands",
            "dial_code": "+ 345",
            "code": "KY"
        },
        {
            "name": "Central African Republic",
            "dial_code": "+236",
            "code": "CF"
        },
        {
            "name": "Chad",
            "dial_code": "+235",
            "code": "TD"
        },
        {
            "name": "Chile",
            "dial_code": "+56",
            "code": "CL"
        },
        {
            "name": "China",
            "dial_code": "+86",
            "code": "CN"
        },
        {
            "name": "Christmas Island",
            "dial_code": "+61",
            "code": "CX"
        },
        {
            "name": "Cocos (Keeling) Islands",
            "dial_code": "+61",
            "code": "CC"
        },
        {
            "name": "Colombia",
            "dial_code": "+57",
            "code": "CO"
        },
        {
            "name": "Comoros",
            "dial_code": "+269",
            "code": "KM"
        },
        {
            "name": "Congo",
            "dial_code": "+242",
            "code": "CG"
        },
        {
            "name": "Congo, The Democratic Republic of the Congo",
            "dial_code": "+243",
            "code": "CD"
        },
        {
            "name": "Cook Islands",
            "dial_code": "+682",
            "code": "CK"
        },
        {
            "name": "Costa Rica",
            "dial_code": "+506",
            "code": "CR"
        },
        {
            "name": "Cote d'Ivoire",
            "dial_code": "+225",
            "code": "CI"
        },
        {
            "name": "Croatia",
            "dial_code": "+385",
            "code": "HR"
        },
        {
            "name": "Cuba",
            "dial_code": "+53",
            "code": "CU"
        },
        {
            "name": "Cyprus",
            "dial_code": "+357",
            "code": "CY"
        },
        {
            "name": "Czech Republic",
            "dial_code": "+420",
            "code": "CZ"
        },
        {
            "name": "Denmark",
            "dial_code": "+45",
            "code": "DK"
        },
        {
            "name": "Djibouti",
            "dial_code": "+253",
            "code": "DJ"
        },
        {
            "name": "Dominica",
            "dial_code": "+1767",
            "code": "DM"
        },
        {
            "name": "Dominican Republic",
            "dial_code": "+1849",
            "code": "DO"
        },
        {
            "name": "Ecuador",
            "dial_code": "+593",
            "code": "EC"
        },
        {
            "name": "Egypt",
            "dial_code": "+20",
            "code": "EG"
        },
        {
            "name": "El Salvador",
            "dial_code": "+503",
            "code": "SV"
        },
        {
            "name": "Equatorial Guinea",
            "dial_code": "+240",
            "code": "GQ"
        },
        {
            "name": "Eritrea",
            "dial_code": "+291",
            "code": "ER"
        },
        {
            "name": "Estonia",
            "dial_code": "+372",
            "code": "EE"
        },
        {
            "name": "Ethiopia",
            "dial_code": "+251",
            "code": "ET"
        },
        {
            "name": "Falkland Islands (Malvinas)",
            "dial_code": "+500",
            "code": "FK"
        },
        {
            "name": "Faroe Islands",
            "dial_code": "+298",
            "code": "FO"
        },
        {
            "name": "Fiji",
            "dial_code": "+679",
            "code": "FJ"
        },
        {
            "name": "Finland",
            "dial_code": "+358",
            "code": "FI"
        },
        {
            "name": "France",
            "dial_code": "+33",
            "code": "FR"
        },
        {
            "name": "French Guiana",
            "dial_code": "+594",
            "code": "GF"
        },
        {
            "name": "French Polynesia",
            "dial_code": "+689",
            "code": "PF"
        },
        {
            "name": "Gabon",
            "dial_code": "+241",
            "code": "GA"
        },
        {
            "name": "Gambia",
            "dial_code": "+220",
            "code": "GM"
        },
        {
            "name": "Georgia",
            "dial_code": "+995",
            "code": "GE"
        },
        {
            "name": "Germany",
            "dial_code": "+49",
            "code": "DE"
        },
        {
            "name": "Ghana",
            "dial_code": "+233",
            "code": "GH"
        },
        {
            "name": "Gibraltar",
            "dial_code": "+350",
            "code": "GI"
        },
        {
            "name": "Greece",
            "dial_code": "+30",
            "code": "GR"
        },
        {
            "name": "Greenland",
            "dial_code": "+299",
            "code": "GL"
        },
        {
            "name": "Grenada",
            "dial_code": "+1473",
            "code": "GD"
        },
        {
            "name": "Guadeloupe",
            "dial_code": "+590",
            "code": "GP"
        },
        {
            "name": "Guam",
            "dial_code": "+1671",
            "code": "GU"
        },
        {
            "name": "Guatemala",
            "dial_code": "+502",
            "code": "GT"
        },
        {
            "name": "Guernsey",
            "dial_code": "+44",
            "code": "GG"
        },
        {
            "name": "Guinea",
            "dial_code": "+224",
            "code": "GN"
        },
        {
            "name": "Guinea-Bissau",
            "dial_code": "+245",
            "code": "GW"
        },
        {
            "name": "Guyana",
            "dial_code": "+595",
            "code": "GY"
        },
        {
            "name": "Haiti",
            "dial_code": "+509",
            "code": "HT"
        },
        {
            "name": "Holy See (Vatican City State)",
            "dial_code": "+379",
            "code": "VA"
        },
        {
            "name": "Honduras",
            "dial_code": "+504",
            "code": "HN"
        },
        {
            "name": "Hong Kong",
            "dial_code": "+852",
            "code": "HK"
        },
        {
            "name": "Hungary",
            "dial_code": "+36",
            "code": "HU"
        },
        {
            "name": "Iceland",
            "dial_code": "+354",
            "code": "IS"
        },
        {
            "name": "India",
            "dial_code": "+91",
            "code": "IN"
        },
        {
            "name": "Indonesia",
            "dial_code": "+62",
            "code": "ID"
        },
        {
            "name": "Iran, Islamic Republic of Persian Gulf",
            "dial_code": "+98",
            "code": "IR"
        },
        {
            "name": "Iraq",
            "dial_code": "+964",
            "code": "IQ"
        },
        {
            "name": "Ireland",
            "dial_code": "+353",
            "code": "IE"
        },
        {
            "name": "Isle of Man",
            "dial_code": "+44",
            "code": "IM"
        },
        {
            "name": "Israel",
            "dial_code": "+972",
            "code": "IL"
        },
        {
            "name": "Italy",
            "dial_code": "+39",
            "code": "IT"
        },
        {
            "name": "Jamaica",
            "dial_code": "+1876",
            "code": "JM"
        },
        {
            "name": "Japan",
            "dial_code": "+81",
            "code": "JP"
        },
        {
            "name": "Jersey",
            "dial_code": "+44",
            "code": "JE"
        },
        {
            "name": "Jordan",
            "dial_code": "+962",
            "code": "JO"
        },
        {
            "name": "Kazakhstan",
            "dial_code": "+77",
            "code": "KZ"
        },
        {
            "name": "Kenya",
            "dial_code": "+254",
            "code": "KE"
        },
        {
            "name": "Kiribati",
            "dial_code": "+686",
            "code": "KI"
        },
        {
            "name": "Korea, Democratic People's Republic of Korea",
            "dial_code": "+850",
            "code": "KP"
        },
        {
            "name": "Korea, Republic of South Korea",
            "dial_code": "+82",
            "code": "KR"
        },
        {
            "name": "Kuwait",
            "dial_code": "+965",
            "code": "KW"
        },
        {
            "name": "Kyrgyzstan",
            "dial_code": "+996",
            "code": "KG"
        },
        {
            "name": "Laos",
            "dial_code": "+856",
            "code": "LA"
        },
        {
            "name": "Latvia",
            "dial_code": "+371",
            "code": "LV"
        },
        {
            "name": "Lebanon",
            "dial_code": "+961",
            "code": "LB"
        },
        {
            "name": "Lesotho",
            "dial_code": "+266",
            "code": "LS"
        },
        {
            "name": "Liberia",
            "dial_code": "+231",
            "code": "LR"
        },
        {
            "name": "Libyan Arab Jamahiriya",
            "dial_code": "+218",
            "code": "LY"
        },
        {
            "name": "Liechtenstein",
            "dial_code": "+423",
            "code": "LI"
        },
        {
            "name": "Lithuania",
            "dial_code": "+370",
            "code": "LT"
        },
        {
            "name": "Luxembourg",
            "dial_code": "+352",
            "code": "LU"
        },
        {
            "name": "Macao",
            "dial_code": "+853",
            "code": "MO"
        },
        {
            "name": "Macedonia",
            "dial_code": "+389",
            "code": "MK"
        },
        {
            "name": "Madagascar",
            "dial_code": "+261",
            "code": "MG"
        },
        {
            "name": "Malawi",
            "dial_code": "+265",
            "code": "MW"
        },
        {
            "name": "Malaysia",
            "dial_code": "+60",
            "code": "MY"
        },
        {
            "name": "Maldives",
            "dial_code": "+960",
            "code": "MV"
        },
        {
            "name": "Mali",
            "dial_code": "+223",
            "code": "ML"
        },
        {
            "name": "Malta",
            "dial_code": "+356",
            "code": "MT"
        },
        {
            "name": "Marshall Islands",
            "dial_code": "+692",
            "code": "MH"
        },
        {
            "name": "Martinique",
            "dial_code": "+596",
            "code": "MQ"
        },
        {
            "name": "Mauritania",
            "dial_code": "+222",
            "code": "MR"
        },
        {
            "name": "Mauritius",
            "dial_code": "+230",
            "code": "MU"
        },
        {
            "name": "Mayotte",
            "dial_code": "+262",
            "code": "YT"
        },
        {
            "name": "Mexico",
            "dial_code": "+52",
            "code": "MX"
        },
        {
            "name": "Micronesia, Federated States of Micronesia",
            "dial_code": "+691",
            "code": "FM"
        },
        {
            "name": "Moldova",
            "dial_code": "+373",
            "code": "MD"
        },
        {
            "name": "Monaco",
            "dial_code": "+377",
            "code": "MC"
        },
        {
            "name": "Mongolia",
            "dial_code": "+976",
            "code": "MN"
        },
        {
            "name": "Montenegro",
            "dial_code": "+382",
            "code": "ME"
        },
        {
            "name": "Montserrat",
            "dial_code": "+1664",
            "code": "MS"
        },
        {
            "name": "Morocco",
            "dial_code": "+212",
            "code": "MA"
        },
        {
            "name": "Mozambique",
            "dial_code": "+258",
            "code": "MZ"
        },
        {
            "name": "Myanmar",
            "dial_code": "+95",
            "code": "MM"
        },
        {
            "name": "Namibia",
            "dial_code": "+264",
            "code": "NA"
        },
        {
            "name": "Nauru",
            "dial_code": "+674",
            "code": "NR"
        },
        {
            "name": "Nepal",
            "dial_code": "+977",
            "code": "NP"
        },
        {
            "name": "Netherlands",
            "dial_code": "+31",
            "code": "NL"
        },
        {
            "name": "Netherlands Antilles",
            "dial_code": "+599",
            "code": "AN"
        },
        {
            "name": "New Caledonia",
            "dial_code": "+687",
            "code": "NC"
        },
        {
            "name": "New Zealand",
            "dial_code": "+64",
            "code": "NZ"
        },
        {
            "name": "Nicaragua",
            "dial_code": "+505",
            "code": "NI"
        },
        {
            "name": "Niger",
            "dial_code": "+227",
            "code": "NE"
        },
        {
            "name": "Nigeria",
            "dial_code": "+234",
            "code": "NG"
        },
        {
            "name": "Niue",
            "dial_code": "+683",
            "code": "NU"
        },
        {
            "name": "Norfolk Island",
            "dial_code": "+672",
            "code": "NF"
        },
        {
            "name": "Northern Mariana Islands",
            "dial_code": "+1670",
            "code": "MP"
        },
        {
            "name": "Norway",
            "dial_code": "+47",
            "code": "NO"
        },
        {
            "name": "Oman",
            "dial_code": "+968",
            "code": "OM"
        },
        {
            "name": "Pakistan",
            "dial_code": "+92",
            "code": "PK"
        },
        {
            "name": "Palau",
            "dial_code": "+680",
            "code": "PW"
        },
        {
            "name": "Palestinian Territory, Occupied",
            "dial_code": "+970",
            "code": "PS"
        },
        {
            "name": "Panama",
            "dial_code": "+507",
            "code": "PA"
        },
        {
            "name": "Papua New Guinea",
            "dial_code": "+675",
            "code": "PG"
        },
        {
            "name": "Paraguay",
            "dial_code": "+595",
            "code": "PY"
        },
        {
            "name": "Peru",
            "dial_code": "+51",
            "code": "PE"
        },
        {
            "name": "Philippines",
            "dial_code": "+63",
            "code": "PH"
        },
        {
            "name": "Pitcairn",
            "dial_code": "+872",
            "code": "PN"
        },
        {
            "name": "Poland",
            "dial_code": "+48",
            "code": "PL"
        },
        {
            "name": "Portugal",
            "dial_code": "+351",
            "code": "PT"
        },
        {
            "name": "Puerto Rico",
            "dial_code": "+1939",
            "code": "PR"
        },
        {
            "name": "Qatar",
            "dial_code": "+974",
            "code": "QA"
        },
        {
            "name": "Romania",
            "dial_code": "+40",
            "code": "RO"
        },
        {
            "name": "Russia",
            "dial_code": "+7",
            "code": "RU"
        },
        {
            "name": "Rwanda",
            "dial_code": "+250",
            "code": "RW"
        },
        {
            "name": "Reunion",
            "dial_code": "+262",
            "code": "RE"
        },
        {
            "name": "Saint Barthelemy",
            "dial_code": "+590",
            "code": "BL"
        },
        {
            "name": "Saint Helena, Ascension and Tristan Da Cunha",
            "dial_code": "+290",
            "code": "SH"
        },
        {
            "name": "Saint Kitts and Nevis",
            "dial_code": "+1869",
            "code": "KN"
        },
        {
            "name": "Saint Lucia",
            "dial_code": "+1758",
            "code": "LC"
        },
        {
            "name": "Saint Martin",
            "dial_code": "+590",
            "code": "MF"
        },
        {
            "name": "Saint Pierre and Miquelon",
            "dial_code": "+508",
            "code": "PM"
        },
        {
            "name": "Saint Vincent and the Grenadines",
            "dial_code": "+1784",
            "code": "VC"
        },
        {
            "name": "Samoa",
            "dial_code": "+685",
            "code": "WS"
        },
        {
            "name": "San Marino",
            "dial_code": "+378",
            "code": "SM"
        },
        {
            "name": "Sao Tome and Principe",
            "dial_code": "+239",
            "code": "ST"
        },
        {
            "name": "Saudi Arabia",
            "dial_code": "+966",
            "code": "SA"
        },
        {
            "name": "Senegal",
            "dial_code": "+221",
            "code": "SN"
        },
        {
            "name": "Serbia",
            "dial_code": "+381",
            "code": "RS"
        },
        {
            "name": "Seychelles",
            "dial_code": "+248",
            "code": "SC"
        },
        {
            "name": "Sierra Leone",
            "dial_code": "+232",
            "code": "SL"
        },
        {
            "name": "Singapore",
            "dial_code": "+65",
            "code": "SG"
        },
        {
            "name": "Slovakia",
            "dial_code": "+421",
            "code": "SK"
        },
        {
            "name": "Slovenia",
            "dial_code": "+386",
            "code": "SI"
        },
        {
            "name": "Solomon Islands",
            "dial_code": "+677",
            "code": "SB"
        },
        {
            "name": "Somalia",
            "dial_code": "+252",
            "code": "SO"
        },
        {
            "name": "South Africa",
            "dial_code": "+27",
            "code": "ZA"
        },
        {
            "name": "South Sudan",
            "dial_code": "+211",
            "code": "SS"
        },
        {
            "name": "South Georgia and the South Sandwich Islands",
            "dial_code": "+500",
            "code": "GS"
        },
        {
            "name": "Spain",
            "dial_code": "+34",
            "code": "ES"
        },
        {
            "name": "Sri Lanka",
            "dial_code": "+94",
            "code": "LK"
        },
        {
            "name": "Sudan",
            "dial_code": "+249",
            "code": "SD"
        },
        {
            "name": "Suriname",
            "dial_code": "+597",
            "code": "SR"
        },
        {
            "name": "Svalbard and Jan Mayen",
            "dial_code": "+47",
            "code": "SJ"
        },
        {
            "name": "Swaziland",
            "dial_code": "+268",
            "code": "SZ"
        },
        {
            "name": "Sweden",
            "dial_code": "+46",
            "code": "SE"
        },
        {
            "name": "Switzerland",
            "dial_code": "+41",
            "code": "CH"
        },
        {
            "name": "Syrian Arab Republic",
            "dial_code": "+963",
            "code": "SY"
        },
        {
            "name": "Taiwan",
            "dial_code": "+886",
            "code": "TW"
        },
        {
            "name": "Tajikistan",
            "dial_code": "+992",
            "code": "TJ"
        },
        {
            "name": "Tanzania, United Republic of Tanzania",
            "dial_code": "+255",
            "code": "TZ"
        },
        {
            "name": "Thailand",
            "dial_code": "+66",
            "code": "TH"
        },
        {
            "name": "Timor-Leste",
            "dial_code": "+670",
            "code": "TL"
        },
        {
            "name": "Togo",
            "dial_code": "+228",
            "code": "TG"
        },
        {
            "name": "Tokelau",
            "dial_code": "+690",
            "code": "TK"
        },
        {
            "name": "Tonga",
            "dial_code": "+676",
            "code": "TO"
        },
        {
            "name": "Trinidad and Tobago",
            "dial_code": "+1868",
            "code": "TT"
        },
        {
            "name": "Tunisia",
            "dial_code": "+216",
            "code": "TN"
        },
        {
            "name": "Turkey",
            "dial_code": "+90",
            "code": "TR"
        },
        {
            "name": "Turkmenistan",
            "dial_code": "+993",
            "code": "TM"
        },
        {
            "name": "Turks and Caicos Islands",
            "dial_code": "+1649",
            "code": "TC"
        },
        {
            "name": "Tuvalu",
            "dial_code": "+688",
            "code": "TV"
        },
        {
            "name": "Uganda",
            "dial_code": "+256",
            "code": "UG"
        },
        {
            "name": "Ukraine",
            "dial_code": "+380",
            "code": "UA"
        },
        {
            "name": "United Arab Emirates",
            "dial_code": "+971",
            "code": "AE"
        },
        {
            "name": "United Kingdom",
            "dial_code": "+44",
            "code": "GB"
        },
        {
            "name": "United States",
            "dial_code": "+1",
            "code": "US"
        },
        {
            "name": "Uruguay",
            "dial_code": "+598",
            "code": "UY"
        },
        {
            "name": "Uzbekistan",
            "dial_code": "+998",
            "code": "UZ"
        },
        {
            "name": "Vanuatu",
            "dial_code": "+678",
            "code": "VU"
        },
        {
            "name": "Venezuela, Bolivarian Republic of Venezuela",
            "dial_code": "+58",
            "code": "VE"
        },
        {
            "name": "Vietnam",
            "dial_code": "+84",
            "code": "VN"
        },
        {
            "name": "Virgin Islands, British",
            "dial_code": "+1284",
            "code": "VG"
        },
        {
            "name": "Virgin Islands, U.S.",
            "dial_code": "+1340",
            "code": "VI"
        },
        {
            "name": "Wallis and Futuna",
            "dial_code": "+681",
            "code": "WF"
        },
        {
            "name": "Yemen",
            "dial_code": "+967",
            "code": "YE"
        },
        {
            "name": "Zambia",
            "dial_code": "+260",
            "code": "ZM"
        },
        {
            "name": "Zimbabwe",
            "dial_code": "+263",
            "code": "ZW"
        }
    ]

    let liTag

    allCountries.sort((a, b) => a.code > b.code ? 1 : -1)

    for (let i = 0; i <= allCountries.length - 1; i++) {
        liTag = `<li class="select__list-item" 
        data-number='+${allCountries[i].dial_code}'>
        ${(allCountries[i].code).toUpperCase()}(${allCountries[i].dial_code})</li>`
        selectList.insertAdjacentHTML('beforeEnd', liTag)
    }

    // for (let i = 0; i <= allCountries.length-1; i++){
    //     liTag = `<li class="select__list-item" 
    //     data-number='+${allCountries[i][2]}'>
    //     ${(allCountries[i][1]).toUpperCase()}(+${allCountries[i][2]})</li>`
    //     selectList.insertAdjacentHTML('beforeEnd', liTag)
    // }
    listElement = selectList.querySelectorAll('li')
}

// end create list numbers


selectInput.addEventListener('click', (e) => {
    // if (input.id === 'selectPhone') {
    selectList.classList.toggle('open')
    // } 
})

listElement.forEach(element => {
    element.addEventListener('click', (e) => {
        input.innerHTML = element.innerHTML
        document.querySelector('#phone').value = element.dataset.number
        // console.log(input.value)
        // if (document.querySelector('#telInput')) {
        //     document.querySelector('#telInput').value = element.dataset.number
        // }
    })
})

