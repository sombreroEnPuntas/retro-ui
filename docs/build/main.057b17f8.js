(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{171:function(t,i,n){"use strict";n.r(i),n.d(i,"BoxWrapper",(function(){return p})),n.d(i,"MessageWrapper",(function(){return j})),n.d(i,"Box",(function(){return _}));var r=n(39),s=n(2),e=n.n(s),a=n(26);function o(){var t=Object(r.a)(["\n  ","\n"]);return o=function(){return t},t}function c(){var t=Object(r.a)(["\n  ","\n"]);return c=function(){return t},t}var p=a.b.pre(c(),(function(t){var i=t.theme.colors,n=t.type;return"\n    background-color: ".concat(i[n].background,";\n    box-shadow: 4px 0 ").concat(i[n].shadow,",\n      0 -4px ").concat(i[n].shadow,",\n      -4px 0 ").concat(i[n].shadow,",\n      0 4px ").concat(i[n].shadow,";\n    display: block;\n    margin: 0.5em;\n    overflow-x: auto;\n    padding: 0.5em;\n    white-space: pre-wrap;\n    max-width: 450px;")})),j=a.b.code(o(),(function(t){var i=t.theme,n=i.colors,r=i.fonts,s=t.type;return"\n    font-family: ".concat(r.fontFamily,";\n    color: ").concat(n[s].outline,";\n    font-size: 0.65em;\n    font-weight: bold;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;")})),_=function(t){var i=t.children,n=t.error;return e.a.createElement(p,{type:n?"error":"black"},e.a.createElement(j,{type:n?"error":"black"},i))};i.default=_},174:function(t,i,n){"use strict";n.r(i),n.d(i,"Button",(function(){return e}));var r=n(39);function s(){var t=Object(r.a)(["\n  ","\n"]);return s=function(){return t},t}var e=n(26).b.button(s(),(function(t){var i=t.theme.colors;return"\n    background-color: ".concat(i.black.background,";\n    box-shadow: 4px 0 ").concat(i.black.shadow,",\n      0 -4px ").concat(i.black.shadow,",\n      -4px 0 ").concat(i.black.shadow,",\n      0 4px ").concat(i.black.shadow,";\n    display: block;\n    margin: 0.5em;\n    padding: 0.5em;\n    color: ").concat(i.black.outline,";\n    font-size: 0.65em;\n    font-weight: bold;\n    cursor: pointer;\n    height: 100%;")}));i.default=e},192:function(t,i,n){"use strict";var r=n(193),s=n(2),e=n.n(s),a=n(26),o=n(39);function c(){var t=Object(o.a)(["\n  0% {\n    opacity: .2;\n  }\n  20% {\n    opacity: 1;\n  }\n  100% {\n    opacity: .2;\n  }\n  "]);return c=function(){return t},t}var p={animations:{blink:Object(a.c)(c())},colors:{black:{background:"white",backgroundAlt:"papayawhip",outline:"#212529",shadow:"#4d5256"},error:{background:"#ffd7cf",outline:"#ce372b",shadow:"#e76e55"}},fonts:{fontFamily:"'Press Start 2P', monospace",lineHeight:"1.5em"}};a.b,i.a=function(t){var i=t.children,n=t.customTheme;return e.a.createElement(a.a,{theme:Object(r.a)({},p,{},n)},i)}},194:function(t,i,n){t.exports=n(774)},347:function(t,i,n){var r={"./Binary_Property/ASCII.js":348,"./Binary_Property/ASCII_Hex_Digit.js":349,"./Binary_Property/Alphabetic.js":350,"./Binary_Property/Any.js":351,"./Binary_Property/Assigned.js":352,"./Binary_Property/Bidi_Control.js":353,"./Binary_Property/Bidi_Mirrored.js":354,"./Binary_Property/Case_Ignorable.js":355,"./Binary_Property/Cased.js":356,"./Binary_Property/Changes_When_Casefolded.js":357,"./Binary_Property/Changes_When_Casemapped.js":358,"./Binary_Property/Changes_When_Lowercased.js":359,"./Binary_Property/Changes_When_NFKC_Casefolded.js":360,"./Binary_Property/Changes_When_Titlecased.js":361,"./Binary_Property/Changes_When_Uppercased.js":362,"./Binary_Property/Dash.js":363,"./Binary_Property/Default_Ignorable_Code_Point.js":364,"./Binary_Property/Deprecated.js":365,"./Binary_Property/Diacritic.js":366,"./Binary_Property/Emoji.js":367,"./Binary_Property/Emoji_Component.js":368,"./Binary_Property/Emoji_Modifier.js":369,"./Binary_Property/Emoji_Modifier_Base.js":370,"./Binary_Property/Emoji_Presentation.js":371,"./Binary_Property/Extended_Pictographic.js":372,"./Binary_Property/Extender.js":373,"./Binary_Property/Grapheme_Base.js":374,"./Binary_Property/Grapheme_Extend.js":375,"./Binary_Property/Hex_Digit.js":376,"./Binary_Property/IDS_Binary_Operator.js":377,"./Binary_Property/IDS_Trinary_Operator.js":378,"./Binary_Property/ID_Continue.js":379,"./Binary_Property/ID_Start.js":380,"./Binary_Property/Ideographic.js":381,"./Binary_Property/Join_Control.js":382,"./Binary_Property/Logical_Order_Exception.js":383,"./Binary_Property/Lowercase.js":384,"./Binary_Property/Math.js":385,"./Binary_Property/Noncharacter_Code_Point.js":386,"./Binary_Property/Pattern_Syntax.js":387,"./Binary_Property/Pattern_White_Space.js":388,"./Binary_Property/Quotation_Mark.js":389,"./Binary_Property/Radical.js":390,"./Binary_Property/Regional_Indicator.js":391,"./Binary_Property/Sentence_Terminal.js":392,"./Binary_Property/Soft_Dotted.js":393,"./Binary_Property/Terminal_Punctuation.js":394,"./Binary_Property/Unified_Ideograph.js":395,"./Binary_Property/Uppercase.js":396,"./Binary_Property/Variation_Selector.js":397,"./Binary_Property/White_Space.js":398,"./Binary_Property/XID_Continue.js":399,"./Binary_Property/XID_Start.js":400,"./General_Category/Cased_Letter.js":401,"./General_Category/Close_Punctuation.js":402,"./General_Category/Connector_Punctuation.js":403,"./General_Category/Control.js":404,"./General_Category/Currency_Symbol.js":405,"./General_Category/Dash_Punctuation.js":406,"./General_Category/Decimal_Number.js":407,"./General_Category/Enclosing_Mark.js":408,"./General_Category/Final_Punctuation.js":409,"./General_Category/Format.js":410,"./General_Category/Initial_Punctuation.js":411,"./General_Category/Letter.js":412,"./General_Category/Letter_Number.js":413,"./General_Category/Line_Separator.js":414,"./General_Category/Lowercase_Letter.js":415,"./General_Category/Mark.js":416,"./General_Category/Math_Symbol.js":417,"./General_Category/Modifier_Letter.js":418,"./General_Category/Modifier_Symbol.js":419,"./General_Category/Nonspacing_Mark.js":420,"./General_Category/Number.js":421,"./General_Category/Open_Punctuation.js":422,"./General_Category/Other.js":423,"./General_Category/Other_Letter.js":424,"./General_Category/Other_Number.js":425,"./General_Category/Other_Punctuation.js":426,"./General_Category/Other_Symbol.js":427,"./General_Category/Paragraph_Separator.js":428,"./General_Category/Private_Use.js":429,"./General_Category/Punctuation.js":430,"./General_Category/Separator.js":431,"./General_Category/Space_Separator.js":432,"./General_Category/Spacing_Mark.js":433,"./General_Category/Surrogate.js":434,"./General_Category/Symbol.js":435,"./General_Category/Titlecase_Letter.js":436,"./General_Category/Unassigned.js":437,"./General_Category/Uppercase_Letter.js":438,"./Script/Adlam.js":439,"./Script/Ahom.js":440,"./Script/Anatolian_Hieroglyphs.js":441,"./Script/Arabic.js":442,"./Script/Armenian.js":443,"./Script/Avestan.js":444,"./Script/Balinese.js":445,"./Script/Bamum.js":446,"./Script/Bassa_Vah.js":447,"./Script/Batak.js":448,"./Script/Bengali.js":449,"./Script/Bhaiksuki.js":450,"./Script/Bopomofo.js":451,"./Script/Brahmi.js":452,"./Script/Braille.js":453,"./Script/Buginese.js":454,"./Script/Buhid.js":455,"./Script/Canadian_Aboriginal.js":456,"./Script/Carian.js":457,"./Script/Caucasian_Albanian.js":458,"./Script/Chakma.js":459,"./Script/Cham.js":460,"./Script/Cherokee.js":461,"./Script/Common.js":462,"./Script/Coptic.js":463,"./Script/Cuneiform.js":464,"./Script/Cypriot.js":465,"./Script/Cyrillic.js":466,"./Script/Deseret.js":467,"./Script/Devanagari.js":468,"./Script/Dogra.js":469,"./Script/Duployan.js":470,"./Script/Egyptian_Hieroglyphs.js":471,"./Script/Elbasan.js":472,"./Script/Elymaic.js":473,"./Script/Ethiopic.js":474,"./Script/Georgian.js":475,"./Script/Glagolitic.js":476,"./Script/Gothic.js":477,"./Script/Grantha.js":478,"./Script/Greek.js":479,"./Script/Gujarati.js":480,"./Script/Gunjala_Gondi.js":481,"./Script/Gurmukhi.js":482,"./Script/Han.js":483,"./Script/Hangul.js":484,"./Script/Hanifi_Rohingya.js":485,"./Script/Hanunoo.js":486,"./Script/Hatran.js":487,"./Script/Hebrew.js":488,"./Script/Hiragana.js":489,"./Script/Imperial_Aramaic.js":490,"./Script/Inherited.js":491,"./Script/Inscriptional_Pahlavi.js":492,"./Script/Inscriptional_Parthian.js":493,"./Script/Javanese.js":494,"./Script/Kaithi.js":495,"./Script/Kannada.js":496,"./Script/Katakana.js":497,"./Script/Kayah_Li.js":498,"./Script/Kharoshthi.js":499,"./Script/Khmer.js":500,"./Script/Khojki.js":501,"./Script/Khudawadi.js":502,"./Script/Lao.js":503,"./Script/Latin.js":504,"./Script/Lepcha.js":505,"./Script/Limbu.js":506,"./Script/Linear_A.js":507,"./Script/Linear_B.js":508,"./Script/Lisu.js":509,"./Script/Lycian.js":510,"./Script/Lydian.js":511,"./Script/Mahajani.js":512,"./Script/Makasar.js":513,"./Script/Malayalam.js":514,"./Script/Mandaic.js":515,"./Script/Manichaean.js":516,"./Script/Marchen.js":517,"./Script/Masaram_Gondi.js":518,"./Script/Medefaidrin.js":519,"./Script/Meetei_Mayek.js":520,"./Script/Mende_Kikakui.js":521,"./Script/Meroitic_Cursive.js":522,"./Script/Meroitic_Hieroglyphs.js":523,"./Script/Miao.js":524,"./Script/Modi.js":525,"./Script/Mongolian.js":526,"./Script/Mro.js":527,"./Script/Multani.js":528,"./Script/Myanmar.js":529,"./Script/Nabataean.js":530,"./Script/Nandinagari.js":531,"./Script/New_Tai_Lue.js":532,"./Script/Newa.js":533,"./Script/Nko.js":534,"./Script/Nushu.js":535,"./Script/Nyiakeng_Puachue_Hmong.js":536,"./Script/Ogham.js":537,"./Script/Ol_Chiki.js":538,"./Script/Old_Hungarian.js":539,"./Script/Old_Italic.js":540,"./Script/Old_North_Arabian.js":541,"./Script/Old_Permic.js":542,"./Script/Old_Persian.js":543,"./Script/Old_Sogdian.js":544,"./Script/Old_South_Arabian.js":545,"./Script/Old_Turkic.js":546,"./Script/Oriya.js":547,"./Script/Osage.js":548,"./Script/Osmanya.js":549,"./Script/Pahawh_Hmong.js":550,"./Script/Palmyrene.js":551,"./Script/Pau_Cin_Hau.js":552,"./Script/Phags_Pa.js":553,"./Script/Phoenician.js":554,"./Script/Psalter_Pahlavi.js":555,"./Script/Rejang.js":556,"./Script/Runic.js":557,"./Script/Samaritan.js":558,"./Script/Saurashtra.js":559,"./Script/Sharada.js":560,"./Script/Shavian.js":561,"./Script/Siddham.js":562,"./Script/SignWriting.js":563,"./Script/Sinhala.js":564,"./Script/Sogdian.js":565,"./Script/Sora_Sompeng.js":566,"./Script/Soyombo.js":567,"./Script/Sundanese.js":568,"./Script/Syloti_Nagri.js":569,"./Script/Syriac.js":570,"./Script/Tagalog.js":571,"./Script/Tagbanwa.js":572,"./Script/Tai_Le.js":573,"./Script/Tai_Tham.js":574,"./Script/Tai_Viet.js":575,"./Script/Takri.js":576,"./Script/Tamil.js":577,"./Script/Tangut.js":578,"./Script/Telugu.js":579,"./Script/Thaana.js":580,"./Script/Thai.js":581,"./Script/Tibetan.js":582,"./Script/Tifinagh.js":583,"./Script/Tirhuta.js":584,"./Script/Ugaritic.js":585,"./Script/Vai.js":586,"./Script/Wancho.js":587,"./Script/Warang_Citi.js":588,"./Script/Yi.js":589,"./Script/Zanabazar_Square.js":590,"./Script_Extensions/Adlam.js":591,"./Script_Extensions/Ahom.js":592,"./Script_Extensions/Anatolian_Hieroglyphs.js":593,"./Script_Extensions/Arabic.js":594,"./Script_Extensions/Armenian.js":595,"./Script_Extensions/Avestan.js":596,"./Script_Extensions/Balinese.js":597,"./Script_Extensions/Bamum.js":598,"./Script_Extensions/Bassa_Vah.js":599,"./Script_Extensions/Batak.js":600,"./Script_Extensions/Bengali.js":601,"./Script_Extensions/Bhaiksuki.js":602,"./Script_Extensions/Bopomofo.js":603,"./Script_Extensions/Brahmi.js":604,"./Script_Extensions/Braille.js":605,"./Script_Extensions/Buginese.js":606,"./Script_Extensions/Buhid.js":607,"./Script_Extensions/Canadian_Aboriginal.js":608,"./Script_Extensions/Carian.js":609,"./Script_Extensions/Caucasian_Albanian.js":610,"./Script_Extensions/Chakma.js":611,"./Script_Extensions/Cham.js":612,"./Script_Extensions/Cherokee.js":613,"./Script_Extensions/Common.js":614,"./Script_Extensions/Coptic.js":615,"./Script_Extensions/Cuneiform.js":616,"./Script_Extensions/Cypriot.js":617,"./Script_Extensions/Cyrillic.js":618,"./Script_Extensions/Deseret.js":619,"./Script_Extensions/Devanagari.js":620,"./Script_Extensions/Dogra.js":621,"./Script_Extensions/Duployan.js":622,"./Script_Extensions/Egyptian_Hieroglyphs.js":623,"./Script_Extensions/Elbasan.js":624,"./Script_Extensions/Elymaic.js":625,"./Script_Extensions/Ethiopic.js":626,"./Script_Extensions/Georgian.js":627,"./Script_Extensions/Glagolitic.js":628,"./Script_Extensions/Gothic.js":629,"./Script_Extensions/Grantha.js":630,"./Script_Extensions/Greek.js":631,"./Script_Extensions/Gujarati.js":632,"./Script_Extensions/Gunjala_Gondi.js":633,"./Script_Extensions/Gurmukhi.js":634,"./Script_Extensions/Han.js":635,"./Script_Extensions/Hangul.js":636,"./Script_Extensions/Hanifi_Rohingya.js":637,"./Script_Extensions/Hanunoo.js":638,"./Script_Extensions/Hatran.js":639,"./Script_Extensions/Hebrew.js":640,"./Script_Extensions/Hiragana.js":641,"./Script_Extensions/Imperial_Aramaic.js":642,"./Script_Extensions/Inherited.js":643,"./Script_Extensions/Inscriptional_Pahlavi.js":644,"./Script_Extensions/Inscriptional_Parthian.js":645,"./Script_Extensions/Javanese.js":646,"./Script_Extensions/Kaithi.js":647,"./Script_Extensions/Kannada.js":648,"./Script_Extensions/Katakana.js":649,"./Script_Extensions/Kayah_Li.js":650,"./Script_Extensions/Kharoshthi.js":651,"./Script_Extensions/Khmer.js":652,"./Script_Extensions/Khojki.js":653,"./Script_Extensions/Khudawadi.js":654,"./Script_Extensions/Lao.js":655,"./Script_Extensions/Latin.js":656,"./Script_Extensions/Lepcha.js":657,"./Script_Extensions/Limbu.js":658,"./Script_Extensions/Linear_A.js":659,"./Script_Extensions/Linear_B.js":660,"./Script_Extensions/Lisu.js":661,"./Script_Extensions/Lycian.js":662,"./Script_Extensions/Lydian.js":663,"./Script_Extensions/Mahajani.js":664,"./Script_Extensions/Makasar.js":665,"./Script_Extensions/Malayalam.js":666,"./Script_Extensions/Mandaic.js":667,"./Script_Extensions/Manichaean.js":668,"./Script_Extensions/Marchen.js":669,"./Script_Extensions/Masaram_Gondi.js":670,"./Script_Extensions/Medefaidrin.js":671,"./Script_Extensions/Meetei_Mayek.js":672,"./Script_Extensions/Mende_Kikakui.js":673,"./Script_Extensions/Meroitic_Cursive.js":674,"./Script_Extensions/Meroitic_Hieroglyphs.js":675,"./Script_Extensions/Miao.js":676,"./Script_Extensions/Modi.js":677,"./Script_Extensions/Mongolian.js":678,"./Script_Extensions/Mro.js":679,"./Script_Extensions/Multani.js":680,"./Script_Extensions/Myanmar.js":681,"./Script_Extensions/Nabataean.js":682,"./Script_Extensions/Nandinagari.js":683,"./Script_Extensions/New_Tai_Lue.js":684,"./Script_Extensions/Newa.js":685,"./Script_Extensions/Nko.js":686,"./Script_Extensions/Nushu.js":687,"./Script_Extensions/Nyiakeng_Puachue_Hmong.js":688,"./Script_Extensions/Ogham.js":689,"./Script_Extensions/Ol_Chiki.js":690,"./Script_Extensions/Old_Hungarian.js":691,"./Script_Extensions/Old_Italic.js":692,"./Script_Extensions/Old_North_Arabian.js":693,"./Script_Extensions/Old_Permic.js":694,"./Script_Extensions/Old_Persian.js":695,"./Script_Extensions/Old_Sogdian.js":696,"./Script_Extensions/Old_South_Arabian.js":697,"./Script_Extensions/Old_Turkic.js":698,"./Script_Extensions/Oriya.js":699,"./Script_Extensions/Osage.js":700,"./Script_Extensions/Osmanya.js":701,"./Script_Extensions/Pahawh_Hmong.js":702,"./Script_Extensions/Palmyrene.js":703,"./Script_Extensions/Pau_Cin_Hau.js":704,"./Script_Extensions/Phags_Pa.js":705,"./Script_Extensions/Phoenician.js":706,"./Script_Extensions/Psalter_Pahlavi.js":707,"./Script_Extensions/Rejang.js":708,"./Script_Extensions/Runic.js":709,"./Script_Extensions/Samaritan.js":710,"./Script_Extensions/Saurashtra.js":711,"./Script_Extensions/Sharada.js":712,"./Script_Extensions/Shavian.js":713,"./Script_Extensions/Siddham.js":714,"./Script_Extensions/SignWriting.js":715,"./Script_Extensions/Sinhala.js":716,"./Script_Extensions/Sogdian.js":717,"./Script_Extensions/Sora_Sompeng.js":718,"./Script_Extensions/Soyombo.js":719,"./Script_Extensions/Sundanese.js":720,"./Script_Extensions/Syloti_Nagri.js":721,"./Script_Extensions/Syriac.js":722,"./Script_Extensions/Tagalog.js":723,"./Script_Extensions/Tagbanwa.js":724,"./Script_Extensions/Tai_Le.js":725,"./Script_Extensions/Tai_Tham.js":726,"./Script_Extensions/Tai_Viet.js":727,"./Script_Extensions/Takri.js":728,"./Script_Extensions/Tamil.js":729,"./Script_Extensions/Tangut.js":730,"./Script_Extensions/Telugu.js":731,"./Script_Extensions/Thaana.js":732,"./Script_Extensions/Thai.js":733,"./Script_Extensions/Tibetan.js":734,"./Script_Extensions/Tifinagh.js":735,"./Script_Extensions/Tirhuta.js":736,"./Script_Extensions/Ugaritic.js":737,"./Script_Extensions/Vai.js":738,"./Script_Extensions/Wancho.js":739,"./Script_Extensions/Warang_Citi.js":740,"./Script_Extensions/Yi.js":741,"./Script_Extensions/Zanabazar_Square.js":742,"./index.js":743,"./unicode-version.js":744};function s(t){var i=e(t);return n(i)}function e(t){if(!n.o(r,t)){var i=new Error("Cannot find module '"+t+"'");throw i.code="MODULE_NOT_FOUND",i}return r[t]}s.keys=function(){return Object.keys(r)},s.resolve=e,t.exports=s,s.id=347},770:function(t,i,n){t.exports={doclets:{},displayName:"Box",description:"",methods:[],props:[],examples:n(771)}},771:function(t,i,n){var r={react:n(2),"./Box.tsx":n(171)},s=n(172).default.bind(null,r),e=n(173).default.bind(null,"const React$0 = require('react');\nconst React = React$0['React'] || (React$0.default || React$0);\nconst Box$0 = require('./Box.tsx');\nconst Box = Box$0['Box'] || (Box$0.default || Box$0);",s);t.exports=[{type:"markdown",content:"Box"},{type:"code",content:"<Box>{':)'}</Box>",settings:{},evalInContext:e},{type:"markdown",content:"Box error"},{type:"code",content:'<Box error>{"418: I\'m a teapot"}</Box>',settings:{},evalInContext:e}]},772:function(t,i,n){t.exports={doclets:{},displayName:"Button",description:"",methods:[],props:[],examples:n(773)}},773:function(t,i,n){var r={react:n(2),"./Button.tsx":n(174)},s=n(172).default.bind(null,r),e=n(173).default.bind(null,"const React$0 = require('react');\nconst React = React$0['React'] || (React$0.default || React$0);\nconst Button$0 = require('./Button.tsx');\nconst Button = Button$0['Button'] || (Button$0.default || Button$0);",s);t.exports=[{type:"markdown",content:"Button"},{type:"code",content:"<Button>{'Rawr!'}</Button>",settings:{},evalInContext:e}]}},[[194,1,2]]]);