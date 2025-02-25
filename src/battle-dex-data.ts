/**
 * Pokemon Showdown Dex Data
 *
 * A collection of data and definitions for src/battle-dex.ts.
 *
 * Larger data has their own files in data/, so this is just for small
 * miscellaneous data that doesn't need its own file.
 *
 * Licensing note: PS's client has complicated licensing:
 * - The client as a whole is AGPLv3
 * - The battle replay/animation engine (battle-*.ts) by itself is MIT
 *
 * @author Guangcong Luo <guangcongluo@gmail.com>
 * @license MIT
 */

/**
 * String that contains only lowercase alphanumeric characters.
 */
type ID = string & {__isID: true};

const BattleNatures: {[k in NatureName]: {plus?: StatName, minus?: StatName}} = {
	Adamant: {
		plus: 'atk',
		minus: 'spa',
	},
	Bashful: {},
	Bold: {
		plus: 'def',
		minus: 'atk',
	},
	Brave: {
		plus: 'atk',
		minus: 'spe',
	},
	Calm: {
		plus: 'spd',
		minus: 'atk',
	},
	Careful: {
		plus: 'spd',
		minus: 'spa',
	},
	Docile: {},
	Gentle: {
		plus: 'spd',
		minus: 'def',
	},
	Hardy: {},
	Hasty: {
		plus: 'spe',
		minus: 'def',
	},
	Impish: {
		plus: 'def',
		minus: 'spa',
	},
	Jolly: {
		plus: 'spe',
		minus: 'spa',
	},
	Lax: {
		plus: 'def',
		minus: 'spd',
	},
	Lonely: {
		plus: 'atk',
		minus: 'def',
	},
	Mild: {
		plus: 'spa',
		minus: 'def',
	},
	Modest: {
		plus: 'spa',
		minus: 'atk',
	},
	Naive: {
		plus: 'spe',
		minus: 'spd',
	},
	Naughty: {
		plus: 'atk',
		minus: 'spd',
	},
	Quiet: {
		plus: 'spa',
		minus: 'spe',
	},
	Quirky: {},
	Rash: {
		plus: 'spa',
		minus: 'spd',
	},
	Relaxed: {
		plus: 'def',
		minus: 'spe',
	},
	Sassy: {
		plus: 'spd',
		minus: 'spe',
	},
	Serious: {},
	Timid: {
		plus: 'spe',
		minus: 'atk',
	},
};
const BattleStatIDs: {[k: string]: StatName | undefined} = {
	HP: 'hp',
	hp: 'hp',
	Atk: 'atk',
	atk: 'atk',
	Def: 'def',
	def: 'def',
	SpA: 'spa',
	SAtk: 'spa',
	SpAtk: 'spa',
	spa: 'spa',
	spc: 'spa',
	Spc: 'spa',
	SpD: 'spd',
	SDef: 'spd',
	SpDef: 'spd',
	spd: 'spd',
	Spe: 'spe',
	Spd: 'spe',
	spe: 'spe',
};
/** Stat short names */
const BattleStatNames = {
	hp: 'HP',
	atk: 'Atk',
	def: 'Def',
	spa: 'SpA',
	spd: 'SpD',
	spe: 'Spe',
} as const;

const BattleBaseSpeciesChart = [
	"unown", "burmy", "shellos", "gastrodon", "deerling", "sawsbuck", "vivillon", "flabebe", "floette", "florges", "furfrou", "minior", "alcremie", "tatsugiri", "pokestarufo", "pokestarbrycenman", "pokestarmt", "pokestarmt2", "pokestartransport", "pokestargiant", "pokestarhumanoid", "pokestarmonster", "pokestarf00", "pokestarf002", "pokestarspirit", "pokestarblackdoor", "pokestarwhitedoor", "pokestarblackbelt",
] as ID[];

const BattlePokemonIconIndexes: {[id: string]: number} = {
	// alt forms
	egg: 1020 + 1,
	pikachubelle: 1020 + 2,
	pikachulibre: 1020 + 3,
	pikachuphd: 1020 + 4,
	pikachupopstar: 1020 + 5,
	pikachurockstar: 1020 + 6,
	pikachucosplay: 1020 + 7,
	unownexclamation: 1020 + 8,
	unownquestion: 1020 + 9,
	unownb: 1020 + 10,
	unownc: 1020 + 11,
	unownd: 1020 + 12,
	unowne: 1020 + 13,
	unownf: 1020 + 14,
	unowng: 1020 + 15,
	unownh: 1020 + 16,
	unowni: 1020 + 17,
	unownj: 1020 + 18,
	unownk: 1020 + 19,
	unownl: 1020 + 20,
	unownm: 1020 + 21,
	unownn: 1020 + 22,
	unowno: 1020 + 23,
	unownp: 1020 + 24,
	unownq: 1020 + 25,
	unownr: 1020 + 26,
	unowns: 1020 + 27,
	unownt: 1020 + 28,
	unownu: 1020 + 29,
	unownv: 1020 + 30,
	unownw: 1020 + 31,
	unownx: 1020 + 32,
	unowny: 1020 + 33,
	unownz: 1020 + 34,
	castformrainy: 1020 + 35,
	castformsnowy: 1020 + 36,
	castformsunny: 1020 + 37,
	deoxysattack: 1020 + 38,
	deoxysdefense: 1020 + 39,
	deoxysspeed: 1020 + 40,
	burmysandy: 1020 + 41,
	burmytrash: 1020 + 42,
	wormadamsandy: 1020 + 43,
	wormadamtrash: 1020 + 44,
	cherrimsunshine: 1020 + 45,
	shelloseast: 1020 + 46,
	gastrodoneast: 1020 + 47,
	rotomfan: 1020 + 48,
	rotomfrost: 1020 + 49,
	rotomheat: 1020 + 50,
	rotommow: 1020 + 51,
	rotomwash: 1020 + 52,
	giratinaorigin: 1020 + 53,
	shayminsky: 1020 + 54,
	unfezantf: 1020 + 55,
	basculinbluestriped: 1020 + 56,
	darmanitanzen: 1020 + 57,
	deerlingautumn: 1020 + 58,
	deerlingsummer: 1020 + 59,
	deerlingwinter: 1020 + 60,
	sawsbuckautumn: 1020 + 61,
	sawsbucksummer: 1020 + 62,
	sawsbuckwinter: 1020 + 63,
	frillishf: 1020 + 64,
	jellicentf: 1020 + 65,
	tornadustherian: 1020 + 66,
	thundurustherian: 1020 + 67,
	landorustherian: 1020 + 68,
	kyuremblack: 1020 + 69,
	kyuremwhite: 1020 + 70,
	keldeoresolute: 1020 + 71,
	meloettapirouette: 1020 + 72,
	vivillonarchipelago: 1020 + 73,
	vivilloncontinental: 1020 + 74,
	vivillonelegant: 1020 + 75,
	vivillonfancy: 1020 + 76,
	vivillongarden: 1020 + 77,
	vivillonhighplains: 1020 + 78,
	vivillonicysnow: 1020 + 79,
	vivillonjungle: 1020 + 80,
	vivillonmarine: 1020 + 81,
	vivillonmodern: 1020 + 82,
	vivillonmonsoon: 1020 + 83,
	vivillonocean: 1020 + 84,
	vivillonpokeball: 1020 + 85,
	vivillonpolar: 1020 + 86,
	vivillonriver: 1020 + 87,
	vivillonsandstorm: 1020 + 88,
	vivillonsavanna: 1020 + 89,
	vivillonsun: 1020 + 90,
	vivillontundra: 1020 + 91,
	pyroarf: 1020 + 92,
	flabebeblue: 1020 + 93,
	flabebeorange: 1020 + 94,
	flabebewhite: 1020 + 95,
	flabebeyellow: 1020 + 96,
	floetteblue: 1020 + 97,
	floetteeternal: 1020 + 98,
	floetteorange: 1020 + 99,
	floettewhite: 1020 + 100,
	floetteyellow: 1020 + 101,
	florgesblue: 1020 + 102,
	florgesorange: 1020 + 103,
	florgeswhite: 1020 + 104,
	florgesyellow: 1020 + 105,
	furfroudandy: 1020 + 106,
	furfroudebutante: 1020 + 107,
	furfroudiamond: 1020 + 108,
	furfrouheart: 1020 + 109,
	furfroukabuki: 1020 + 110,
	furfroulareine: 1020 + 111,
	furfroumatron: 1020 + 112,
	furfroupharaoh: 1020 + 113,
	furfroustar: 1020 + 114,
	meowsticf: 1020 + 115,
	aegislashblade: 1020 + 116,
	xerneasneutral: 1020 + 117,
	hoopaunbound: 1020 + 118,
	rattataalola: 1020 + 119,
	raticatealola: 1020 + 120,
	raichualola: 1020 + 121,
	sandshrewalola: 1020 + 122,
	sandslashalola: 1020 + 123,
	vulpixalola: 1020 + 124,
	ninetalesalola: 1020 + 125,
	diglettalola: 1020 + 126,
	dugtrioalola: 1020 + 127,
	meowthalola: 1020 + 128,
	persianalola: 1020 + 129,
	geodudealola: 1020 + 130,
	graveleralola: 1020 + 131,
	golemalola: 1020 + 132,
	grimeralola: 1020 + 133,
	mukalola: 1020 + 134,
	exeggutoralola: 1020 + 135,
	marowakalola: 1020 + 136,
	greninjaash: 1020 + 137,
	zygarde10: 1020 + 138,
	zygardecomplete: 1020 + 139,
	oricoriopompom: 1020 + 140,
	oricoriopau: 1020 + 141,
	oricoriosensu: 1020 + 142,
	lycanrocmidnight: 1020 + 143,
	wishiwashischool: 1020 + 144,
	miniormeteor: 1020 + 145,
	miniororange: 1020 + 146,
	minioryellow: 1020 + 147,
	miniorgreen: 1020 + 148,
	miniorblue: 1020 + 149,
	miniorindigo: 1020 + 150,
	miniorviolet: 1020 + 151,
	magearnaoriginal: 1020 + 152,
	pikachuoriginal: 1020 + 153,
	pikachuhoenn: 1020 + 154,
	pikachusinnoh: 1020 + 155,
	pikachuunova: 1020 + 156,
	pikachukalos: 1020 + 157,
	pikachualola: 1020 + 158,
	pikachupartner: 1020 + 159,
	lycanrocdusk: 1020 + 160,
	necrozmaduskmane: 1020 + 161,
	necrozmadawnwings: 1020 + 162,
	necrozmaultra: 1020 + 163,
	pikachustarter: 1020 + 164,
	eeveestarter: 1020 + 165,
	meowthgalar: 1020 + 166,
	ponytagalar: 1020 + 167,
	rapidashgalar: 1020 + 168,
	farfetchdgalar: 1020 + 169,
	weezinggalar: 1020 + 170,
	mrmimegalar: 1020 + 171,
	corsolagalar: 1020 + 172,
	zigzagoongalar: 1020 + 173,
	linoonegalar: 1020 + 174,
	darumakagalar: 1020 + 175,
	darmanitangalar: 1020 + 176,
	darmanitangalarzen: 1020 + 177,
	yamaskgalar: 1020 + 178,
	stunfiskgalar: 1020 + 179,
	cramorantgulping: 1020 + 180,
	cramorantgorging: 1020 + 181,
	toxtricitylowkey: 1020 + 182,
	alcremierubycream: 1020 + 183,
	alcremiematchacream: 1020 + 184,
	alcremiemintcream: 1020 + 185,
	alcremielemoncream: 1020 + 186,
	alcremiesaltedcream: 1020 + 187,
	alcremierubyswirl: 1020 + 188,
	alcremiecaramelswirl: 1020 + 189,
	alcremierainbowswirl: 1020 + 190,
	eiscuenoice: 1020 + 191,
	indeedeef: 1020 + 192,
	morpekohangry: 1020 + 193,
	zaciancrowned: 1020 + 194,
	zamazentacrowned: 1020 + 195,
	slowpokegalar: 1020 + 196,
	slowbrogalar: 1020 + 197,
	zarudedada: 1020 + 198,
	pikachuworld: 1020 + 199,
	articunogalar: 1020 + 200,
	zapdosgalar: 1020 + 201,
	moltresgalar: 1020 + 202,
	slowkinggalar: 1020 + 203,
	calyrexice: 1020 + 204,
	calyrexshadow: 1020 + 205,
	growlithehisui: 1020 + 206,
	arcaninehisui: 1020 + 207,
	voltorbhisui: 1020 + 208,
	electrodehisui: 1020 + 209,
	typhlosionhisui: 1020 + 210,
	qwilfishhisui: 1020 + 211,
	sneaselhisui: 1020 + 212,
	samurotthisui: 1020 + 213,
	lilliganthisui: 1020 + 214,
	zoruahisui: 1020 + 215,
	zoroarkhisui: 1020 + 216,
	braviaryhisui: 1020 + 217,
	sliggoohisui: 1020 + 218,
	goodrahisui: 1020 + 219,
	avalugghisui: 1020 + 220,
	decidueyehisui: 1020 + 221,
	basculegionf: 1020 + 222,
	enamorustherian: 1020 + 223,
	taurospaldea: 1020 + 224,
	taurospaldeafire: 1020 + 225,
	taurospaldeawater: 1020 + 226,
	taurospaldeacombat: 1020 + 224,
	taurospaldeablaze: 1020 + 225,
	taurospaldeaaqua: 1020 + 226,
	wooperpaldea: 1020 + 227,
	oinkolognef: 1020 + 228,
	palafinhero: 1020 + 229,
	mausholdfour: 1020 + 230,
	tatsugiridroopy: 1020 + 231,
	tatsugiristretchy: 1020 + 232,
	squawkabillyblue: 1020 + 233,
	squawkabillyyellow: 1020 + 234,
	squawkabillywhite: 1020 + 235,
	gimmighoulroaming: 1020 + 236,
	dialgaorigin: 1020 + 237,
	palkiaorigin: 1020 + 238,
	basculinwhitestriped: 1020 + 239,
	ursalunabloodmoon: 1020 + 240,
	ogerponwellspring: 1020 + 241,
	ogerponhearthflame: 1020 + 242,
	ogerponcornerstone: 1020 + 243,

	// alt forms with duplicate icons
	greninjabond: 658,
	gumshoostotem: 735,
	raticatealolatotem: 1020 + 120,
	marowakalolatotem: 1020 + 136,
	araquanidtotem: 752,
	lurantistotem: 754,
	salazzletotem: 758,
	vikavolttotem: 738,
	togedemarutotem: 777,
	mimikyutotem: 778,
	mimikyubustedtotem: 778,
	ribombeetotem: 743,
	kommoototem: 784,
	sinisteaantique: 854,
	polteageistantique: 855,
	poltchageistartisan: 1012,
	sinistchamasterpiece: 1013,
	ogerpontealtera: 1017,
	ogerponwellspringtera: 1020 + 241,
	ogerponhearthflametera: 1020 + 242,
	ogerponcornerstonetera: 1020 + 243,

	// Mega/G-Max
	venusaurmega: 1272 + 0,
	charizardmegax: 1272 + 1,
	charizardmegay: 1272 + 2,
	blastoisemega: 1272 + 3,
	beedrillmega: 1272 + 4,
	pidgeotmega: 1272 + 5,
	alakazammega: 1272 + 6,
	slowbromega: 1272 + 7,
	gengarmega: 1272 + 8,
	kangaskhanmega: 1272 + 9,
	pinsirmega: 1272 + 10,
	gyaradosmega: 1272 + 11,
	aerodactylmega: 1272 + 12,
	mewtwomegax: 1272 + 13,
	mewtwomegay: 1272 + 14,
	ampharosmega: 1272 + 15,
	steelixmega: 1272 + 16,
	scizormega: 1272 + 17,
	heracrossmega: 1272 + 18,
	houndoommega: 1272 + 19,
	tyranitarmega: 1272 + 20,
	sceptilemega: 1272 + 21,
	blazikenmega: 1272 + 22,
	swampertmega: 1272 + 23,
	gardevoirmega: 1272 + 24,
	sableyemega: 1272 + 25,
	mawilemega: 1272 + 26,
	aggronmega: 1272 + 27,
	medichammega: 1272 + 28,
	manectricmega: 1272 + 29,
	sharpedomega: 1272 + 30,
	cameruptmega: 1272 + 31,
	altariamega: 1272 + 32,
	banettemega: 1272 + 33,
	absolmega: 1272 + 34,
	glaliemega: 1272 + 35,
	salamencemega: 1272 + 36,
	metagrossmega: 1272 + 37,
	latiasmega: 1272 + 38,
	latiosmega: 1272 + 39,
	kyogreprimal: 1272 + 40,
	groudonprimal: 1272 + 41,
	rayquazamega: 1272 + 42,
	lopunnymega: 1272 + 43,
	garchompmega: 1272 + 44,
	lucariomega: 1272 + 45,
	abomasnowmega: 1272 + 46,
	gallademega: 1272 + 47,
	audinomega: 1272 + 48,
	dianciemega: 1272 + 49,
	charizardgmax: 1272 + 50,
	butterfreegmax: 1272 + 51,
	pikachugmax: 1272 + 52,
	meowthgmax: 1272 + 53,
	machampgmax: 1272 + 54,
	gengargmax: 1272 + 55,
	kinglergmax: 1272 + 56,
	laprasgmax: 1272 + 57,
	eeveegmax: 1272 + 58,
	snorlaxgmax: 1272 + 59,
	garbodorgmax: 1272 + 60,
	melmetalgmax: 1272 + 61,
	corviknightgmax: 1272 + 62,
	orbeetlegmax: 1272 + 63,
	drednawgmax: 1272 + 64,
	coalossalgmax: 1272 + 65,
	flapplegmax: 1272 + 66,
	appletungmax: 1272 + 67,
	sandacondagmax: 1272 + 68,
	toxtricitygmax: 1272 + 69,
	toxtricitylowkeygmax: 1272 + 69,
	centiskorchgmax: 1272 + 70,
	hatterenegmax: 1272 + 71,
	grimmsnarlgmax: 1272 + 72,
	alcremiegmax: 1272 + 73,
	copperajahgmax: 1272 + 74,
	duraludongmax: 1272 + 75,
	eternatuseternamax: 1272 + 76,
	venusaurgmax: 1272 + 77,
	blastoisegmax: 1272 + 78,
	rillaboomgmax: 1272 + 79,
	cinderacegmax: 1272 + 80,
	inteleongmax: 1272 + 81,
	urshifugmax: 1272 + 82,
	urshifurapidstrikegmax: 1272 + 83,

	// CAP
	syclant: 1464 + 0,
	revenankh: 1464 + 1,
	pyroak: 1464 + 2,
	fidgit: 1464 + 3,
	stratagem: 1464 + 4,
	arghonaut: 1464 + 5,
	kitsunoh: 1464 + 6,
	cyclohm: 1464 + 7,
	colossoil: 1464 + 8,
	krilowatt: 1464 + 9,
	voodoom: 1464 + 10,
	tomohawk: 1464 + 11,
	necturna: 1464 + 12,
	mollux: 1464 + 13,
	aurumoth: 1464 + 14,
	malaconda: 1464 + 15,
	cawmodore: 1464 + 16,
	volkraken: 1464 + 17,
	plasmanta: 1464 + 18,
	naviathan: 1464 + 19,
	crucibelle: 1464 + 20,
	crucibellemega: 1464 + 21,
	kerfluffle: 1464 + 22,
	pajantom: 1464 + 23,
	jumbao: 1464 + 24,
	caribolt: 1464 + 25,
	smokomodo: 1464 + 26,
	snaelstrom: 1464 + 27,
	equilibra: 1464 + 28,
	astrolotl: 1464 + 29,
	miasmaw: 1464 + 30,
	chromera: 1464 + 31,
	venomicon: 1464 + 32,
	venomiconepilogue: 1464 + 33,
	saharaja: 1464 + 34,
	hemogoblin: 1464 + 35,

	// CAP prevos
	syclar: 1500 + 0,
	embirch: 1500 + 1,
	flarelm: 1500 + 2,
	breezi: 1500 + 3,
	scratchet: 1500 + 4,
	necturine: 1500 + 5,
	cupra: 1500 + 6,
	argalis: 1500 + 7,
	brattler: 1500 + 8,
	cawdet: 1500 + 9,
	volkritter: 1500 + 10,
	snugglow: 1500 + 11,
	floatoy: 1500 + 12,
	caimanoe: 1500 + 13,
	pluffle: 1500 + 14,
	rebble: 1500 + 15,
	tactite: 1500 + 16,
	privatyke: 1500 + 17,
	nohface: 1500 + 18,
	monohm: 1500 + 19,
	duohm: 1500 + 20,
	protowatt: 1500 + 21,
	voodoll: 1500 + 22,
	mumbao: 1500 + 23,
	fawnifer: 1500 + 24,
	electrelk: 1500 + 25,
	smogecko: 1500 + 26,
	smoguana: 1500 + 27,
	swirlpool: 1500 + 28,
	coribalis: 1500 + 29,
	justyke: 1500 + 30,
	solotl: 1500 + 31,
	miasmite: 1500 + 32,
	dorsoil: 1500 + 33,
	saharascal: 1500 + 34,
	ababo: 1500 + 35,
	scattervein: 1500 + 36,

	basiney: 1536 + 1,
	blissea: 1536 + 2,
	
	chibisanae: 1548 + 1,
	sanae: 1548 + 2,
	chibialice: 1548 + 3,
	alice: 1548 + 4,
	chibireisen: 1548 + 5,
	reisen: 1548 + 6,
	chibililywhite: 1548 + 7,
	lilywhite: 1548 + 8,
	chibililyblack: 1548 + 9,
	lilyblack: 1548 + 10,
	chibimomiji: 1548 + 11,
	momiji: 1548 + 12,
	chibishizuha: 1548 + 13,
	shizuha: 1548 + 14,
	chibimedicine: 1548 + 15,
	medicine: 1548 + 16,
	chibikoakuma: 1548 + 17,
	koakuma: 1548 + 18,
	chibinazrin: 1548 + 19,
	nazrin: 1548 + 20,
	chibitokiko: 1548 + 21,
	tokiko: 1548 + 22,
	chibiremilia: 1548 + 23,
	remilia: 1548 + 24,
	chibicirno: 1548 + 25,
	cirno: 1548 + 26,
	chibirumia: 1548 + 27,
	rumia: 1548 + 28,
	shanghai: 1548 + 29,
	chibiflandre: 1548 + 30,
	flandre: 1548 + 31,
	hourai: 1548 + 32,
	chibiyoumu: 1548 + 33,
	youmu: 1548 + 34,
	chibiyukari: 1548 + 35,
	yukari: 1548 + 36,
	chibisuika: 1548 + 37,
	suika: 1548 + 38,
	chibimystia: 1548 + 39,
	mystia: 1548 + 40,
	chibiminoriko: 1548 + 41,
	minoriko: 1548 + 42,
	chibikeine: 1548 + 43,
	keine: 1548 + 44,
	attackkeine: 1548 + 45,
	chibiiku: 1548 + 46,
	iku: 1548 + 47,
	chibikoishi: 1548 + 48,
	koishi: 1548 + 49,
	chibiyamame: 1548 + 50,
	yamame: 1548 + 51,
	chibichen: 1548 + 52,
	chen: 1548 + 53,
	chibiyorihime: 1548 + 54,
	yorihime: 1548 + 55,
	chibikaguya: 1548 + 56,
	kaguya: 1548 + 57,
	chibimokou: 1548 + 58,
	mokou: 1548 + 59,
	chibihatate: 1548 + 60,
	hatate: 1548 + 61,
	chibiletty: 1548 + 62,
	letty: 1548 + 63,
	chibipatchouli: 1548 + 64,
	patchouli: 1548 + 65,
	chibiyuugi: 1548 + 66,
	yuugi: 1548 + 67,
	chibitenshi: 1548 + 68,
	tenshi: 1548 + 69,
	chibiparsee: 1548 + 70,
	parsee: 1548 + 71,
	chibimurasa: 1548 + 72,
	murasa: 1548 + 73,
	chibikisume: 1548 + 74,
	kisume: 1548 + 75,
	chibikogasa: 1548 + 76,
	kogasa: 1548 + 77,
	chibisatori: 1548 + 78,
	satori: 1548 + 79,
	chibieirin: 1548 + 80,
	eirin: 1548 + 81,
	chibiran: 1548 + 82,
	ran: 1548 + 83,
	chibidaiyousei: 1548 + 84,
	daiyousei: 1548 + 85,
	chibinitori: 1548 + 86,
	nitori: 1548 + 87,
	chibihina: 1548 + 88,
	hina: 1548 + 89,
	chibikomachi: 1548 + 90,
	komachi: 1548 + 91,
	chibiyuyuko: 1548 + 92,
	yuyuko: 1548 + 93,
	chibimeiling: 1548 + 94,
	meiling: 1548 + 95,
	chibisakuya: 1548 + 96,
	sakuya: 1548 + 97,
	chibilunasa: 1548 + 98,
	lunasa: 1548 + 99,
	chibimerlin: 1548 + 100,
	merlin: 1548 + 101,
	chibilyrica: 1548 + 102,
	lyrica: 1548 + 103,
	chibilayla: 1548 + 104,
	layla: 1548 + 105,
	chibikanako: 1548 + 106,
	kanako: 1548 + 107,
	chibirin: 1548 + 108,
	rin: 1548 + 109,
	chibiutsuho: 1548 + 110,
	utsuho: 1548 + 111,
	chibiichirin: 1548 + 112,
	ichirin: 1548 + 113,
	chibisunnymilk: 1548 + 114,
	sunnymilk: 1548 + 115,
	chibilunachild: 1548 + 116,
	lunachild: 1548 + 117,
	chibistarsapphire: 1548 + 118,
	starsapphire: 1548 + 119,
	chibiyuuka: 1548 + 120,
	yuuka: 1548 + 121,
	chibiaya: 1548 + 122,
	aya: 1548 + 123,
	chibieiki: 1548 + 124,
	eiki: 1548 + 125,
	chibishou: 1548 + 126,
	shou: 1548 + 127,
	chibiwriggle: 1548 + 128,
	wriggle: 1548 + 129,
	chibitewi: 1548 + 130,
	tewi: 1548 + 131,
	kedama: 1548 + 132,
	chibinue: 1548 + 133,
	nue: 1548 + 134,
	chibisuwako: 1548 + 135,
	suwako: 1548 + 136,
	reisenii: 1548 + 137,
	chibimarisa: 1548 + 138,
	marisa: 1548 + 139,
	chibireimu: 1548 + 140,
	reimu: 1548 + 141,
	chibibyakuren: 1548 + 142,
	byakuren: 1548 + 143,
	konngara: 1548 + 144,
	kikuri: 1548 + 145,
	yuugenmagan: 1548 + 146,
	chibitoyohime: 1548 + 147,
	toyohime: 1548 + 148,
	goliathdoll: 1548 + 149,
	sariel: 1548 + 150,
	akyuu: 1548 + 151,
	genji: 1548 + 152,
	tori: 1548 + 153,
	namazu: 1548 + 154,
	chibielly: 1548 + 155,
	elly: 1548 + 156,
	chibiorange: 1548 + 157,
	orange: 1548 + 158,
	youki: 1548 + 159,
	chibichiyuri: 1548 + 160,
	chiyuri: 1548 + 161,
	chibiyumemi: 1548 + 162,
	yumemi: 1548 + 163,
	chibiellen: 1548 + 164,
	ellen: 1548 + 165,
	chibikazami: 1548 + 166,
	kazami: 1548 + 167,
	chibimeira: 1548 + 168,
	meira: 1548 + 169,
	chibisara: 1548 + 170,
	sara: 1548 + 171,
	chibilouise: 1548 + 172,
	louise: 1548 + 173,
	chibimargatroid: 1548 + 174,
	margatroid: 1548 + 175,
	chibikana: 1548 + 176,
	kana: 1548 + 177,
	chibihakurei: 1548 + 178,
	hakurei: 1548 + 179,
	chibikirisame: 1548 + 180,
	kirisame: 1548 + 181,
	chibikotohime: 1548 + 182,
	kotohime: 1548 + 183,
	chibiyumeko: 1548 + 184,
	yumeko: 1548 + 185,
	chibishinki: 1548 + 186,
	shinki: 1548 + 187,
	mimichan: 1548 + 188,
	ruukoto: 1548 + 189,
	chibirika: 1548 + 190,
	rika: 1548 + 191,
	chibimugetsu: 1548 + 192,
	mugetsu: 1548 + 193,
	chibigengetsu: 1548 + 194,
	gengetsu: 1548 + 195,
	chibikurumi: 1548 + 196,
	kurumi: 1548 + 197,
	chibirikako: 1548 + 198,
	rikako: 1548 + 199,
	chibiyuki: 1548 + 200,
	yuki: 1548 + 201,
	chibimai: 1548 + 202,
	mai: 1548 + 203,
	defensesunnymilk: 1548 + 204,
	technicallunachild: 1548 + 205,
	helperstarsapphire: 1548 + 206,
	attacknitori: 1548 + 207,
	technicalnitori: 1548 + 208,
	attackmokou: 1548 + 209,
	defensemokou: 1548 + 210,
	defensereisen: 1548 + 211,
	technicalreisen: 1548 + 212,
	technicalsakuya: 1548 + 213,
	helpersakuya: 1548 + 214,
	attackrumia: 1548 + 215,
	speedrumia: 1548 + 216,
	helpermystia: 1548 + 217,
	attackmystia: 1548 + 218,
	attackchen: 1548 + 219,
	technicalchen: 1548 + 220,
	defenseyoumu: 1548 + 221,
	speedyoumu: 1548 + 222,
	attackyuuka: 1548 + 223,
	technicalyuuka: 1548 + 224,
	speedaya: 1548 + 225,
	technicalaya: 1548 + 226,
	attacktenshi: 1548 + 227,
	defensetenshi: 1548 + 228,
	defenseparsee: 1548 + 229,
	technicalparsee: 1548 + 230,
	attackkoishi: 1548 + 231,
	speedkoishi: 1548 + 232,
	defensebyakuren: 1548 + 233,
	technicalbyakuren: 1548 + 234,
	defenseichirin: 1548 + 235,
	technicalichirin: 1548 + 236,
	attackkanako: 1548 + 237,
	defensekanako: 1548 + 238,
	attackkaguya: 1548 + 239,
	defensekaguya: 1548 + 240,
	shingyokuorb: 1548 + 241,
	shingyokupriest: 1548 + 242,
	shingyokupriestess: 1548 + 243,
	attackutsuho: 1548 + 244,
	speedutsuho: 1548 + 245,
	defensemomiji: 1548 + 246,
	elis: 1548 + 247,
	mima: 1548 + 248,
	speedkomachi: 1548 + 249,
	attackkomachi: 1548 + 250,
	attackeirin: 1548 + 251,
	helpereirin: 1548 + 252,
	defenseyukari: 1548 + 253,
	technicalyukari: 1548 + 254,
	attackalice: 1548 + 255,
	technicalalice: 1548 + 256,
	attackreimu: 1548 + 257,
	defensereimu: 1548 + 258,
	speedcirno: 1548 + 259,
	technicalcirno: 1548 + 260,
	defenseyuyuko: 1548 + 261,
	attackyuyuko: 1548 + 262,
	helperlunasa: 1548 + 263,
	helpermerlin: 1548 + 264,
	helperlyrica: 1548 + 265,
	attackran: 1548 + 266,
	helperran: 1548 + 267,
	attackmedicine: 1548 + 268,
	technicalmedicine: 1548 + 269,
	attackhina: 1548 + 270,
	defensehina: 1548 + 271,
	speedshizuha: 1548 + 272,
	speedrin: 1548 + 273,
	attackrin: 1548 + 274,
	zombiefairy: 1548 + 275,
	helpershizuha: 1548 + 276,
	attacksuwako: 1548 + 277,
	attackshou: 1548 + 278,
	technicalshou: 1548 + 279,
	attacktokiko: 1548 + 280,
	defensesuwako: 1548 + 281,
	speedyamame: 1548 + 282,
	speedkogasa: 1548 + 283,
	technicalkogasa: 1548 + 284,
	defenseremilia: 1548 + 285,
	speedflandre: 1548 + 286,
	defensewriggle: 1548 + 287,
	defensemeiling: 1548 + 288,
	tensoku: 1548 + 289,
	attacksunnymilk: 1548 + 290,
	attacklunachild: 1548 + 291,
	speedwriggle: 1548 + 292,
	helperkoakuma: 1548 + 293,
	speedmeiling: 1548 + 294,
	chibielis: 1548 + 295,
	chibisariel: 1548 + 296,
	adventmystia: 1548 + 297,
	technicalhatate: 1548 + 298,
	defensehatate: 1548 + 299,
	akisisters: 1548 + 300,
	defenselayla: 1548 + 301,
	defensekeine: 1548 + 302,
	attackremilia: 1548 + 303,
	defensetewi: 1548 + 304,
	attacktewi: 1548 + 305,
	defenseeiki: 1548 + 306,
	defenseminoriko: 1548 + 307,
	technicalsuika: 1548 + 308,
	attacksanae: 1548 + 309,
	technicalsanae: 1548 + 310,
	attackflandre: 1548 + 311,
	attackdaiyousei: 1548 + 312,
	attackeiki: 1548 + 313,
	technicaltoyohime: 1548 + 314,
	chibikonngara: 1548 + 315,
	chibiyuugenmagan: 1548 + 316,
	attacksuika: 1548 + 317,
	helperlilywhite: 1548 + 318,
	speedlilyblack: 1548 + 319,
	attacknue: 1548 + 320,
	technicalnue: 1548 + 321,
	defensepatchouli: 1548 + 322,
	defenseletty: 1548 + 323,
	helperletty: 1548 + 324,
	speedyorihime: 1548 + 325,
	chibishingyoku: 1548 + 326,
	attacklilyblack: 1548 + 327,
	defenseyuugi: 1548 + 328,
	technicalnazrin: 1548 + 329,
	helpernazrin: 1548 + 330,
	technicalkisume: 1548 + 331,
	attackyuugi: 1548 + 332,
	helperkeine: 1548 + 333,
	defenseiku: 1548 + 334,
	technicaliku: 1548 + 335,
	attackminoriko: 1548 + 336,
	rinnosuke: 1548 + 337,
	adventcirno: 1548 + 338,
	adventreisen: 1548 + 339,
	speedsariel: 1548 + 340,
	attacklilywhite: 1548 + 341,
	chibimima: 1548 + 342,
	chibikikuri: 1548 + 343,
	adventmeiling: 1548 + 344,
	attackpatchouli: 1548 + 345,
	speedmarisa: 1548 + 346,
	attackmarisa: 1548 + 347,
	defensemurasa: 1548 + 348,
	attackmurasa: 1548 + 349,
	attackstarsapphire: 1548 + 350,
	attackkazami: 1548 + 351,
	speedmedicine: 1548 + 352,
	defensedaiyousei: 1548 + 353,
	technicalyamame: 1548 + 354,
	technicalsatori: 1548 + 355,
	defensesatori: 1548 + 356,
	adventletty: 1548 + 357,
	adventtewi: 1548 + 358,
	adventmarisa: 1548 + 359,
	adventalice: 1548 + 360,
	adventmokou: 1548 + 361,
	adventyukari: 1548 + 362,
	adventran: 1548 + 363,
	adventchen: 1548 + 364,
	darkalice: 1548 + 365,
	tenma: 1548 + 366,
	sendai: 1548 + 367,
	chibikyouko: 1548 + 368,
	kyouko: 1548 + 369,
	chibiyoshika: 1548 + 370,
	yoshika: 1548 + 371,
	chibiseiga: 1548 + 372,
	seiga: 1548 + 373,
	chibitojiko: 1548 + 374,
	tojiko: 1548 + 375,
	chibifuto: 1548 + 376,
	futo: 1548 + 377,
	chibimiko: 1548 + 378,
	miko: 1548 + 379,
	chibimamizou: 1548 + 380,
	mamizou: 1548 + 381,
	'2hu': 1548 + 382,
	jksanae: 1548 + 383,
	magicstones: 1548 + 384,
	chibikasen: 1548 + 385,
	kasen: 1548 + 386,
	scarletwitch: 1548 + 387,
	swordmaster: 1548 + 388,
	tinyghost: 1548 + 389,
	xsuwako: 1548 + 390,
	xutsuho: 1548 + 391,
	xtenshi: 1548 + 392,
	dlruukoto: 1548 + 393,
	//customs
	turles: 2484 + 0,
	lssjbroly: 2484 + 1,
	superpiccolo: 2484 + 2,
	saibamen: 2484 + 3,
	craziney: 2484 + 4,
	miku: 2484 + 5,
	tztokjad: 2484 + 6,
	oblily: 2484 + 7,
	rubi: 2484 + 8,
	emmi: 2484 + 9,
	saffi: 2484 + 10,
	bellibolts: 2484 + 11,
	meganiumg: 2484 + 12,
	houndoomz: 2484 + 13,
	beesiney: 2484 + 14,
	wesker: 2484 + 15,
	akuma: 2484 + 16,
	koishixx: 2484 + 17,
	//1.5 revised mons
	exreimu: 3228 + 0,
	adventreimu: 3228 + 1,
	exmarisa: 3228 + 2,
	exsakuya: 3228 + 3,
	koumajousakuya: 3228 + 4,
	exsanae: 3228 + 5,
	exrumia: 3228 + 6,
	exdaiyousei: 3228 + 7,
	excirno: 3228 + 8,
	exmeiling: 3228 + 9,
	exkoakuma: 3228 + 10,
	expatchouli: 3228 + 11,
	exremilia: 3228 + 12,
	lastremilia: 3228 + 13,
	adventremilia: 3228 + 14,
	exflandre: 3228 + 15,
	lastflandre: 3228 + 16,
	exletty: 3228 + 17,
	dolls: 3228 + 18,
	exalice: 3228 + 19,
	exlilywhite: 3228 + 20,
	exlilyblack: 3228 + 21,
	exlunasa: 3228 + 22,
	exlyrica: 3228 + 23,
	exmerlin: 3228 + 24,
	exyoumu: 3228 + 25,
	exyuyuko: 3228 + 26,
	lastyuyuko: 3228 + 27,
	exchen: 3228 + 28,
	exran: 3228 + 29,
	lastran: 3228 + 30,
	exyukari: 3228 + 31,
	lastyukari: 3228 + 32,
	exwriggle: 3228 + 33,
	exmystia: 3228 + 34,
	exkeine: 3228 + 35,
	hakutakukeine: 3228 + 36,
	extewi: 3228 + 37,
	exreisen: 3228 + 38,
	spacelunatic: 3228 + 39,
	exeirin: 3228 + 40,
	lasteirin: 3228 + 41,
	adventeirin: 3228 + 42,
	exkaguya: 3228 + 43,
	lastkaguya: 3228 + 44,
	exmokou: 3228 + 45,
	lastmokou: 3228 + 46,
	exaya: 3228 + 47,
	chibihimawari: 3228 + 48,
	himawari: 3228 + 49,
	exmedicine: 3228 + 50,
	exyuuka: 3228 + 51,
	exkomachi: 3228 + 52,
	exeiki: 3228 + 53,
	lasteiki: 3228 + 54,
	exshizuha: 3228 + 55,
	exminoriko: 3228 + 56,
	exhina: 3228 + 57,
	exnitori: 3228 + 58,
	exmomiji: 3228 + 59,
	exkanako: 3228 + 60,
	lastkanako: 3228 + 61,
	exsuwako: 3228 + 62,
	lastsuwako: 3228 + 63,
	exkisume: 3228 + 64,
	exyamame: 3228 + 65,
	exparsee: 3228 + 66,
	exyuugi: 3228 + 67,
	exrin: 3228 + 68,
	exutsuho: 3228 + 69,
	lastutsuho: 3228 + 70,
	exsatori: 3228 + 71,
	exkoishi: 3228 + 72,
	lastkoishi: 3228 + 73,
	exnazrin: 3228 + 74,
	exkogasa: 3228 + 75,
	exichirin: 3228 + 76,
	unzan: 3228 + 77,
	exmurasa: 3228 + 78,
	exshou: 3228 + 79,
	exbyakuren: 3228 + 80,
	exnue: 3228 + 81,
	chibiwakasagi: 3228 + 82,
	wakasagi: 3228 + 83,
	chibisekibanki: 3228 + 84,
	sekibanki: 3228 + 85,
	chibikagerou: 3228 + 86,
	kagerou: 3228 + 87,
	chibibenben: 3228 + 88,
	benben: 3228 + 89,
	chibiyatsuhashi: 3228 + 90,
	yatsuhashi: 3228 + 91,
	chibiseija: 3228 + 92,
	seija: 3228 + 93,
	chibisukuna: 3228 + 94,
	sukuna: 3228 + 95,
	chibiraiko: 3228 + 96,
	raiko: 3228 + 97,
	shingyoku: 3228 + 98,
	exrika: 3228 + 99,
	noroiko: 3228 + 100,
	exmeira: 3228 + 101,
	matenshi: 3228 + 102,
	exellen: 3228 + 103,
	exkotohime: 3228 + 104,
	exkana: 3228 + 105,
	exrikako: 3228 + 106,
	exchiyuri: 3228 + 107,
	exyumemi: 3228 + 108,
	exorange: 3228 + 109,
	exkurumi: 3228 + 110,
	ungaikyodevil: 3228 + 111,
	exelly: 3228 + 112,
	hikariko: 3228 + 113,
	exmugetsu: 3228 + 114,
	exgengetsu: 3228 + 115,
	wayousei: 3228 + 116,
	exsara: 3228 + 117,
	ungaikyoangel: 3228 + 118,
	exlouise: 3228 + 119,
	exyuki: 3228 + 120,
	exmai: 3228 + 121,
	ayana: 3228 + 122,
	exyumeko: 3228 + 123,
	exshinki: 3228 + 124,
	exsuika: 3228 + 125,
	lastsuika: 3228 + 126,
	exiku: 3228 + 127,
	extenshi: 3228 + 128,
	lasttenshi: 3228 + 129,
	exhatate: 3228 + 130,
	exsunnymilk: 3228 + 131,
	exlunachild: 3228 + 132,
	exstarsapphire: 3228 + 133,
	chibikokoro: 3228 + 134,
	kokoro: 3228 + 135,
	exkasen: 3228 + 136,
	extokiko: 3228 + 137,
	kosuzu: 3228 + 138,
	exsendai: 3228 + 139,
	chibimitori: 3228 + 140,
	mitori: 3228 + 141,
	exmitori: 3228 + 142,
	chibisasha: 3228 + 143,
	sasha: 3228 + 144,
	exsasha: 3228 + 145,
	chibikaren: 3228 + 146,
	isami: 3228 + 147,
	vivit: 3228 + 148,
	angelvivit: 3228 + 149,
	exkyouko: 3228 + 150,
	exyoshika: 3228 + 151,
	exseiga: 3228 + 152,
	extojiko: 3228 + 153,
	exfuto: 3228 + 154,
	exmiko: 3228 + 155,
	exmamizou: 3228 + 156,
	exwakasagi: 3228 + 157,
	exsekibanki: 3228 + 158,
	exkagerou: 3228 + 159,
	exbenben: 3228 + 160,
	exyatsuhashi: 3228 + 161,
	exseija: 3228 + 162,
	exsukuna: 3228 + 163,
	exraiko: 3228 + 164,
	exkokoro: 3228 + 165,
	karen: 3228 + 166,
	xreimu: 3228 + 167,
	xmarisa: 3228 + 168,
	xsakuya: 3228 + 169,
	xsanae: 3228 + 170,
	xyoumu: 3228 + 171,
	xreisen: 3228 + 172,
	chibisendai: 3228 + 173,
	chibisatsuki: 3228 + 174,
	satsuki: 3228 + 175,

};

const BattlePokemonIconIndexesLeft: {[id: string]: number} = {
	pikachubelle: 1356 + 0,
	pikachupopstar: 1356 + 1,
	clefairy: 1356 + 2,
	clefable: 1356 + 3,
	jigglypuff: 1356 + 4,
	wigglytuff: 1356 + 5,
	dugtrioalola: 1356 + 6,
	poliwhirl: 1356 + 7,
	poliwrath: 1356 + 8,
	mukalola: 1356 + 9,
	kingler: 1356 + 10,
	croconaw: 1356 + 11,
	cleffa: 1356 + 12,
	igglybuff: 1356 + 13,
	politoed: 1356 + 14,
	unownb: 1356 + 15,
	unownc: 1356 + 16,
	unownd: 1356 + 17,
	unowne: 1356 + 18,
	unownf: 1356 + 19,
	unowng: 1356 + 20,
	unownh: 1356 + 21,
	unownj: 1356 + 22,
	unownk: 1356 + 23,
	unownl: 1356 + 24,
	unownm: 1356 + 25,
	unownn: 1356 + 26,
	unownp: 1356 + 27,
	unownq: 1356 + 28,
	unownquestion: 1356 + 29,
	unownr: 1356 + 30,
	unowns: 1356 + 31,
	unownt: 1356 + 32,
	unownv: 1356 + 33,
	unownz: 1356 + 34,
	sneasel: 1356 + 35,
	teddiursa: 1356 + 36,
	roselia: 1356 + 37,
	zangoose: 1356 + 38,
	seviper: 1356 + 39,
	castformsnowy: 1356 + 40,
	absolmega: 1356 + 41,
	absol: 1356 + 42,
	regirock: 1356 + 43,
	torterra: 1356 + 44,
	budew: 1356 + 45,
	roserade: 1356 + 46,
	magmortar: 1356 + 47,
	togekiss: 1356 + 48,
	rotomwash: 1356 + 49,
	shayminsky: 1356 + 50,
	emboar: 1356 + 51,
	pansear: 1356 + 52,
	simisear: 1356 + 53,
	drilbur: 1356 + 54,
	excadrill: 1356 + 55,
	sawk: 1356 + 56,
	lilligant: 1356 + 57,
	garbodor: 1356 + 58,
	solosis: 1356 + 59,
	vanilluxe: 1356 + 60,
	amoonguss: 1356 + 61,
	klink: 1356 + 62,
	klang: 1356 + 63,
	klinklang: 1356 + 64,
	litwick: 1356 + 65,
	golett: 1356 + 66,
	golurk: 1356 + 67,
	kyuremblack: 1356 + 68,
	kyuremwhite: 1356 + 69,
	kyurem: 1356 + 70,
	keldeoresolute: 1356 + 71,
	meloetta: 1356 + 72,
	greninja: 1356 + 73,
	greninjabond: 1356 + 73,
	greninjaash: 1356 + 74,
	furfroudebutante: 1356 + 75,
	barbaracle: 1356 + 76,
	clauncher: 1356 + 77,
	clawitzer: 1356 + 78,
	sylveon: 1356 + 79,
	klefki: 1356 + 80,
	zygarde: 1356 + 81,
	zygarde10: 1356 + 82,
	zygardecomplete: 1356 + 83,
	dartrix: 1356 + 84,
	steenee: 1356 + 85,
	tsareena: 1356 + 86,
	comfey: 1356 + 87,
	miniormeteor: 1356 + 88,
	minior: 1356 + 89,
	miniororange: 1356 + 90,
	minioryellow: 1356 + 91,
	miniorgreen: 1356 + 92,
	miniorblue: 1356 + 93,
	miniorviolet: 1356 + 94,
	miniorindigo: 1356 + 95,
	dhelmise: 1356 + 96,
	necrozma: 1356 + 97,
	marshadow: 1356 + 98,
	pikachuoriginal: 1356 + 99,
	pikachupartner: 1356 + 100,
	necrozmaduskmane: 1356 + 101,
	necrozmadawnwings: 1356 + 102,
	necrozmaultra: 1356 + 103,
	stakataka: 1356 + 104,
	blacephalon: 1356 + 105,
	
	chibisanae: 2004 + 1,
	sanae: 2004 + 2,
	chibialice: 2004 + 3,
	alice: 2004 + 4,
	chibireisen: 2004 + 5,
	reisen: 2004 + 6,
	chibililywhite: 2004 + 7,
	lilywhite: 2004 + 8,
	chibililyblack: 2004 + 9,
	lilyblack: 2004 + 10,
	chibimomiji: 2004 + 11,
	momiji: 2004 + 12,
	chibishizuha: 2004 + 13,
	shizuha: 2004 + 14,
	chibimedicine: 2004 + 15,
	medicine: 2004 + 16,
	chibikoakuma: 2004 + 17,
	koakuma: 2004 + 18,
	chibinazrin: 2004 + 19,
	nazrin: 2004 + 20,
	chibitokiko: 2004 + 21,
	tokiko: 2004 + 22,
	chibiremilia: 2004 + 23,
	remilia: 2004 + 24,
	chibicirno: 2004 + 25,
	cirno: 2004 + 26,
	chibirumia: 2004 + 27,
	rumia: 2004 + 28,
	shanghai: 2004 + 29,
	chibiflandre: 2004 + 30,
	flandre: 2004 + 31,
	hourai: 2004 + 32,
	chibiyoumu: 2004 + 33,
	youmu: 2004 + 34,
	chibiyukari: 2004 + 35,
	yukari: 2004 + 36,
	chibisuika: 2004 + 37,
	suika: 2004 + 38,
	chibimystia: 2004 + 39,
	mystia: 2004 + 40,
	chibiminoriko: 2004 + 41,
	minoriko: 2004 + 42,
	chibikeine: 2004 + 43,
	keine: 2004 + 44,
	attackkeine: 2004 + 45,
	chibiiku: 2004 + 46,
	iku: 2004 + 47,
	chibikoishi: 2004 + 48,
	koishi: 2004 + 49,
	chibiyamame: 2004 + 50,
	yamame: 2004 + 51,
	chibichen: 2004 + 52,
	chen: 2004 + 53,
	chibiyorihime: 2004 + 54,
	yorihime: 2004 + 55,
	chibikaguya: 2004 + 56,
	kaguya: 2004 + 57,
	chibimokou: 2004 + 58,
	mokou: 2004 + 59,
	chibihatate: 2004 + 60,
	hatate: 2004 + 61,
	chibiletty: 2004 + 62,
	letty: 2004 + 63,
	chibipatchouli: 2004 + 64,
	patchouli: 2004 + 65,
	chibiyuugi: 2004 + 66,
	yuugi: 2004 + 67,
	chibitenshi: 2004 + 68,
	tenshi: 2004 + 69,
	chibiparsee: 2004 + 70,
	parsee: 2004 + 71,
	chibimurasa: 2004 + 72,
	murasa: 2004 + 73,
	chibikisume: 2004 + 74,
	kisume: 2004 + 75,
	chibikogasa: 2004 + 76,
	kogasa: 2004 + 77,
	chibisatori: 2004 + 78,
	satori: 2004 + 79,
	chibieirin: 2004 + 80,
	eirin: 2004 + 81,
	chibiran: 2004 + 82,
	ran: 2004 + 83,
	chibidaiyousei: 2004 + 84,
	daiyousei: 2004 + 85,
	chibinitori: 2004 + 86,
	nitori: 2004 + 87,
	chibihina: 2004 + 88,
	hina: 2004 + 89,
	chibikomachi: 2004 + 90,
	komachi: 2004 + 91,
	chibiyuyuko: 2004 + 92,
	yuyuko: 2004 + 93,
	chibimeiling: 2004 + 94,
	meiling: 2004 + 95,
	chibisakuya: 2004 + 96,
	sakuya: 2004 + 97,
	chibilunasa: 2004 + 98,
	lunasa: 2004 + 99,
	chibimerlin: 2004 + 100,
	merlin: 2004 + 101,
	chibilyrica: 2004 + 102,
	lyrica: 2004 + 103,
	chibilayla: 2004 + 104,
	layla: 2004 + 105,
	chibikanako: 2004 + 106,
	kanako: 2004 + 107,
	chibirin: 2004 + 108,
	rin: 2004 + 109,
	chibiutsuho: 2004 + 110,
	utsuho: 2004 + 111,
	chibiichirin: 2004 + 112,
	ichirin: 2004 + 113,
	chibisunnymilk: 2004 + 114,
	sunnymilk: 2004 + 115,
	chibilunachild: 2004 + 116,
	lunachild: 2004 + 117,
	chibistarsapphire: 2004 + 118,
	starsapphire: 2004 + 119,
	chibiyuuka: 2004 + 120,
	yuuka: 2004 + 121,
	chibiaya: 2004 + 122,
	aya: 2004 + 123,
	chibieiki: 2004 + 124,
	eiki: 2004 + 125,
	chibishou: 2004 + 126,
	shou: 2004 + 127,
	chibiwriggle: 2004 + 128,
	wriggle: 2004 + 129,
	chibitewi: 2004 + 130,
	tewi: 2004 + 131,
	kedama: 2004 + 132,
	chibinue: 2004 + 133,
	nue: 2004 + 134,
	chibisuwako: 2004 + 135,
	suwako: 2004 + 136,
	reisenii: 2004 + 137,
	chibimarisa: 2004 + 138,
	marisa: 2004 + 139,
	chibireimu: 2004 + 140,
	reimu: 2004 + 141,
	chibibyakuren: 2004 + 142,
	byakuren: 2004 + 143,
	konngara: 2004 + 144,
	kikuri: 2004 + 145,
	yuugenmagan: 2004 + 146,
	chibitoyohime: 2004 + 147,
	toyohime: 2004 + 148,
	goliathdoll: 2004 + 149,
	sariel: 2004 + 150,
	akyuu: 2004 + 151,
	genji: 2004 + 152,
	tori: 2004 + 153,
	namazu: 2004 + 154,
	chibielly: 2004 + 155,
	elly: 2004 + 156,
	chibiorange: 2004 + 157,
	orange: 2004 + 158,
	youki: 2004 + 159,
	chibichiyuri: 2004 + 160,
	chiyuri: 2004 + 161,
	chibiyumemi: 2004 + 162,
	yumemi: 2004 + 163,
	chibiellen: 2004 + 164,
	ellen: 2004 + 165,
	chibikazami: 2004 + 166,
	kazami: 2004 + 167,
	chibimeira: 2004 + 168,
	meira: 2004 + 169,
	chibisara: 2004 + 170,
	sara: 2004 + 171,
	chibilouise: 2004 + 172,
	louise: 2004 + 173,
	chibimargatroid: 2004 + 174,
	margatroid: 2004 + 175,
	chibikana: 2004 + 176,
	kana: 2004 + 177,
	chibihakurei: 2004 + 178,
	hakurei: 2004 + 179,
	chibikirisame: 2004 + 180,
	kirisame: 2004 + 181,
	chibikotohime: 2004 + 182,
	kotohime: 2004 + 183,
	chibiyumeko: 2004 + 184,
	yumeko: 2004 + 185,
	chibishinki: 2004 + 186,
	shinki: 2004 + 187,
	mimichan: 2004 + 188,
	ruukoto: 2004 + 189,
	chibirika: 2004 + 190,
	rika: 2004 + 191,
	chibimugetsu: 2004 + 192,
	mugetsu: 2004 + 193,
	chibigengetsu: 2004 + 194,
	gengetsu: 2004 + 195,
	chibikurumi: 2004 + 196,
	kurumi: 2004 + 197,
	chibirikako: 2004 + 198,
	rikako: 2004 + 199,
	chibiyuki: 2004 + 200,
	yuki: 2004 + 201,
	chibimai: 2004 + 202,
	mai: 2004 + 203,
	defensesunnymilk: 2004 + 204,
	technicallunachild: 2004 + 205,
	helperstarsapphire: 2004 + 206,
	attacknitori: 2004 + 207,
	technicalnitori: 2004 + 208,
	attackmokou: 2004 + 209,
	defensemokou: 2004 + 210,
	defensereisen: 2004 + 211,
	technicalreisen: 2004 + 212,
	technicalsakuya: 2004 + 213,
	helpersakuya: 2004 + 214,
	attackrumia: 2004 + 215,
	speedrumia: 2004 + 216,
	helpermystia: 2004 + 217,
	attackmystia: 2004 + 218,
	attackchen: 2004 + 219,
	technicalchen: 2004 + 220,
	defenseyoumu: 2004 + 221,
	speedyoumu: 2004 + 222,
	attackyuuka: 2004 + 223,
	technicalyuuka: 2004 + 224,
	speedaya: 2004 + 225,
	technicalaya: 2004 + 226,
	attacktenshi: 2004 + 227,
	defensetenshi: 2004 + 228,
	defenseparsee: 2004 + 229,
	technicalparsee: 2004 + 230,
	attackkoishi: 2004 + 231,
	speedkoishi: 2004 + 232,
	defensebyakuren: 2004 + 233,
	technicalbyakuren: 2004 + 234,
	defenseichirin: 2004 + 235,
	technicalichirin: 2004 + 236,
	attackkanako: 2004 + 237,
	defensekanako: 2004 + 238,
	attackkaguya: 2004 + 239,
	defensekaguya: 2004 + 240,
	shingyokuorb: 2004 + 241,
	shingyokupriest: 2004 + 242,
	shingyokupriestess: 2004 + 243,
	attackutsuho: 2004 + 244,
	speedutsuho: 2004 + 245,
	defensemomiji: 2004 + 246,
	elis: 2004 + 247,
	mima: 2004 + 248,
	speedkomachi: 2004 + 249,
	attackkomachi: 2004 + 250,
	attackeirin: 2004 + 251,
	helpereirin: 2004 + 252,
	defenseyukari: 2004 + 253,
	technicalyukari: 2004 + 254,
	attackalice: 2004 + 255,
	technicalalice: 2004 + 256,
	attackreimu: 2004 + 257,
	defensereimu: 2004 + 258,
	speedcirno: 2004 + 259,
	technicalcirno: 2004 + 260,
	defenseyuyuko: 2004 + 261,
	attackyuyuko: 2004 + 262,
	helperlunasa: 2004 + 263,
	helpermerlin: 2004 + 264,
	helperlyrica: 2004 + 265,
	attackran: 2004 + 266,
	helperran: 2004 + 267,
	attackmedicine: 2004 + 268,
	technicalmedicine: 2004 + 269,
	attackhina: 2004 + 270,
	defensehina: 2004 + 271,
	speedshizuha: 2004 + 272,
	speedrin: 2004 + 273,
	attackrin: 2004 + 274,
	zombiefairy: 2004 + 275,
	helpershizuha: 2004 + 276,
	attacksuwako: 2004 + 277,
	attackshou: 2004 + 278,
	technicalshou: 2004 + 279,
	attacktokiko: 2004 + 280,
	defensesuwako: 2004 + 281,
	speedyamame: 2004 + 282,
	speedkogasa: 2004 + 283,
	technicalkogasa: 2004 + 284,
	defenseremilia: 2004 + 285,
	speedflandre: 2004 + 286,
	defensewriggle: 2004 + 287,
	defensemeiling: 2004 + 288,
	tensoku: 2004 + 289,
	attacksunnymilk: 2004 + 290,
	attacklunachild: 2004 + 291,
	speedwriggle: 2004 + 292,
	helperkoakuma: 2004 + 293,
	speedmeiling: 2004 + 294,
	chibielis: 2004 + 295,
	chibisariel: 2004 + 296,
	adventmystia: 2004 + 297,
	technicalhatate: 2004 + 298,
	defensehatate: 2004 + 299,
	akisisters: 2004 + 300,
	defenselayla: 2004 + 301,
	defensekeine: 2004 + 302,
	attackremilia: 2004 + 303,
	defensetewi: 2004 + 304,
	attacktewi: 2004 + 305,
	defenseeiki: 2004 + 306,
	defenseminoriko: 2004 + 307,
	technicalsuika: 2004 + 308,
	attacksanae: 2004 + 309,
	technicalsanae: 2004 + 310,
	attackflandre: 2004 + 311,
	attackdaiyousei: 2004 + 312,
	attackeiki: 2004 + 313,
	technicaltoyohime: 2004 + 314,
	chibikonngara: 2004 + 315,
	chibiyuugenmagan: 2004 + 316,
	attacksuika: 2004 + 317,
	helperlilywhite: 2004 + 318,
	speedlilyblack: 2004 + 319,
	attacknue: 2004 + 320,
	technicalnue: 2004 + 321,
	defensepatchouli: 2004 + 322,
	defenseletty: 2004 + 323,
	helperletty: 2004 + 324,
	speedyorihime: 2004 + 325,
	chibishingyoku: 2004 + 326,
	attacklilyblack: 2004 + 327,
	defenseyuugi: 2004 + 328,
	technicalnazrin: 2004 + 329,
	helpernazrin: 2004 + 330,
	technicalkisume: 2004 + 331,
	attackyuugi: 2004 + 332,
	helperkeine: 2004 + 333,
	defenseiku: 2004 + 334,
	technicaliku: 2004 + 335,
	attackminoriko: 2004 + 336,
	rinnosuke: 2004 + 337,
	adventcirno: 2004 + 338,
	adventreisen: 2004 + 339,
	speedsariel: 2004 + 340,
	attacklilywhite: 2004 + 341,
	chibimima: 2004 + 342,
	chibikikuri: 2004 + 343,
	adventmeiling: 2004 + 344,
	attackpatchouli: 2004 + 345,
	speedmarisa: 2004 + 346,
	attackmarisa: 2004 + 347,
	defensemurasa: 2004 + 348,
	attackmurasa: 2004 + 349,
	attackstarsapphire: 2004 + 350,
	attackkazami: 2004 + 351,
	speedmedicine: 2004 + 352,
	defensedaiyousei: 2004 + 353,
	technicalyamame: 2004 + 354,
	technicalsatori: 2004 + 355,
	defensesatori: 2004 + 356,
	adventletty: 2004 + 357,
	adventtewi: 2004 + 358,
	adventmarisa: 2004 + 359,
	adventalice: 2004 + 360,
	adventmokou: 2004 + 361,
	adventyukari: 2004 + 362,
	adventran: 2004 + 363,
	adventchen: 2004 + 364,
	darkalice: 2004 + 365,
	tenma: 2004 + 366,
	sendai: 2004 + 367,
	chibikyouko: 2004 + 368,
	kyouko: 2004 + 369,
	chibiyoshika: 2004 + 370,
	yoshika: 2004 + 371,
	chibiseiga: 2004 + 372,
	seiga: 2004 + 373,
	chibitojiko: 2004 + 374,
	tojiko: 2004 + 375,
	chibifuto: 2004 + 376,
	futo: 2004 + 377,
	chibimiko: 2004 + 378,
	miko: 2004 + 379,
	chibimamizou: 2004 + 380,
	mamizou: 2004 + 381,
	'2hu': 2004 + 382,
	jksanae: 2004 + 383,
	magicstones: 2004 + 384,
	chibikasen: 2004 + 385,
	kasen: 2004 + 386,
	scarletwitch: 2004 + 387,
	swordmaster: 2004 + 388,
	tinyghost: 2004 + 389,
	xsuwako: 2004 + 390,
	xutsuho: 2004 + 391,
	xtenshi: 2004 + 392,
	
	exreimu: 3420 + 0,
	adventreimu: 3420 + 1,
	exmarisa: 3420 + 2,
	exsakuya: 3420 + 3,
	koumajousakuya: 3420 + 4,
	exsanae: 3420 + 5,
	exrumia: 3420 + 6,
	exdaiyousei: 3420 + 7,
	excirno: 3420 + 8,
	exmeiling: 3420 + 9,
	exkoakuma: 3420 + 10,
	expatchouli: 3420 + 11,
	exremilia: 3420 + 12,
	lastremilia: 3420 + 13,
	adventremilia: 3420 + 14,
	exflandre: 3420 + 15,
	lastflandre: 3420 + 16,
	exletty: 3420 + 17,
	dolls: 3420 + 18,
	exalice: 3420 + 19,
	exlilywhite: 3420 + 20,
	exlilyblack: 3420 + 21,
	exlunasa: 3420 + 22,
	exlyrica: 3420 + 23,
	exmerlin: 3420 + 24,
	exyoumu: 3420 + 25,
	exyuyuko: 3420 + 26,
	lastyuyuko: 3420 + 27,
	exchen: 3420 + 28,
	exran: 3420 + 29,
	lastran: 3420 + 30,
	exyukari: 3420 + 31,
	lastyukari: 3420 + 32,
	exwriggle: 3420 + 33,
	exmystia: 3420 + 34,
	exkeine: 3420 + 35,
	hakutakukeine: 3420 + 36,
	extewi: 3420 + 37,
	exreisen: 3420 + 38,
	spacelunatic: 3420 + 39,
	exeirin: 3420 + 40,
	lasteirin: 3420 + 41,
	adventeirin: 3420 + 42,
	exkaguya: 3420 + 43,
	lastkaguya: 3420 + 44,
	exmokou: 3420 + 45,
	lastmokou: 3420 + 46,
	exaya: 3420 + 47,
	chibihimawari: 3420 + 48,
	himawari: 3420 + 49,
	exmedicine: 3420 + 50,
	exyuuka: 3420 + 51,
	exkomachi: 3420 + 52,
	exeiki: 3420 + 53,
	lasteiki: 3420 + 54,
	exshizuha: 3420 + 55,
	exminoriko: 3420 + 56,
	exhina: 3420 + 57,
	exnitori: 3420 + 58,
	exmomiji: 3420 + 59,
	exkanako: 3420 + 60,
	lastkanako: 3420 + 61,
	exsuwako: 3420 + 62,
	lastsuwako: 3420 + 63,
	exkisume: 3420 + 64,
	exyamame: 3420 + 65,
	exparsee: 3420 + 66,
	exyuugi: 3420 + 67,
	exrin: 3420 + 68,
	exutsuho: 3420 + 69,
	lastutsuho: 3420 + 70,
	exsatori: 3420 + 71,
	exkoishi: 3420 + 72,
	lastkoishi: 3420 + 73,
	exnazrin: 3420 + 74,
	exkogasa: 3420 + 75,
	exichirin: 3420 + 76,
	unzan: 3420 + 77,
	exmurasa: 3420 + 78,
	exshou: 3420 + 79,
	exbyakuren: 3420 + 80,
	exnue: 3420 + 81,
	chibiwakasagi: 3420 + 82,
	wakasagi: 3420 + 83,
	chibisekibanki: 3420 + 84,
	sekibanki: 3420 + 85,
	chibikagerou: 3420 + 86,
	kagerou: 3420 + 87,
	chibibenben: 3420 + 88,
	benben: 3420 + 89,
	chibiyatsuhashi: 3420 + 90,
	yatsuhashi: 3420 + 91,
	chibiseija: 3420 + 92,
	seija: 3420 + 93,
	chibisukuna: 3420 + 94,
	sukuna: 3420 + 95,
	chibiraiko: 3420 + 96,
	raiko: 3420 + 97,
	shingyoku: 3420 + 98,
	exrika: 3420 + 99,
	noroiko: 3420 + 100,
	exmeira: 3420 + 101,
	matenshi: 3420 + 102,
	exellen: 3420 + 103,
	exkotohime: 3420 + 104,
	exkana: 3420 + 105,
	exrikako: 3420 + 106,
	exchiyuri: 3420 + 107,
	exyumemi: 3420 + 108,
	exorange: 3420 + 109,
	exkurumi: 3420 + 110,
	ungaikyodevil: 3420 + 111,
	exelly: 3420 + 112,
	hikariko: 3420 + 113,
	exmugetsu: 3420 + 114,
	exgengetsu: 3420 + 115,
	wayousei: 3420 + 116,
	exsara: 3420 + 117,
	ungaikyoangel: 3420 + 118,
	exlouise: 3420 + 119,
	exyuki: 3420 + 120,
	exmai: 3420 + 121,
	ayana: 3420 + 122,
	exyumeko: 3420 + 123,
	exshinki: 3420 + 124,
	exsuika: 3420 + 125,
	lastsuika: 3420 + 126,
	exiku: 3420 + 127,
	extenshi: 3420 + 128,
	lasttenshi: 3420 + 129,
	exhatate: 3420 + 130,
	exsunnymilk: 3420 + 131,
	exlunachild: 3420 + 132,
	exstarsapphire: 3420 + 133,
	chibikokoro: 3420 + 134,
	kokoro: 3420 + 135,
	exkasen: 3420 + 136,
	extokiko: 3420 + 137,
	kosuzu: 3420 + 138,
	exsendai: 3420 + 139,
	chibimitori: 3420 + 140,
	mitori: 3420 + 141,
	exmitori: 3420 + 142,
	chibisasha: 3420 + 143,
	sasha: 3420 + 144,
	exsasha: 3420 + 145,
	chibikaren: 3420 + 146,
	isami: 3420 + 147,
	vivit: 3420 + 148,
	angelvivit: 3420 + 149,
	exkyouko: 3420 + 150,
	exyoshika: 3420 + 151,
	exseiga: 3420 + 152,
	extojiko: 3420 + 153,
	exfuto: 3420 + 154,
	exmiko: 3420 + 155,
	exmamizou: 3420 + 156,
	exwakasagi: 3420 + 157,
	exsekibanki: 3420 + 158,
	exkagerou: 3420 + 159,
	exbenben: 3420 + 160,
	exyatsuhashi: 3420 + 161,
	exseija: 3420 + 162,
	exsukuna: 3420 + 163,
	exraiko: 3420 + 164,
	exkokoro: 3420 + 165,
	karen: 3420 + 166,
	xreimu: 3420 + 167,
	xmarisa: 3420 + 168,
	xsakuya: 3420 + 169,
	xsanae: 3420 + 170,
	xyoumu: 3420 + 171,
	xreisen: 3420 + 172,
	chibisendai: 3420 + 173,
	chibisatsuki: 3420 + 174,
	satsuki: 3420 + 175,

};

const BattleAvatarNumbers: {[k: string]: string} = {
	1: 'lucas',
	2: 'dawn',
	3: 'youngster-gen4dp',
	4: 'lass-gen4dp',
	5: 'camper',
	6: 'picnicker',
	7: 'bugcatcher-gen4dp',
	8: 'aromalady',
	9: 'twins-gen4dp',
	10: 'hiker-gen4',
	11: 'battlegirl-gen4',
	12: 'fisherman-gen4',
	13: 'cyclist-gen4',
	14: 'cyclistf-gen4',
	15: 'blackbelt-gen4dp',
	16: 'artist-gen4',
	17: 'pokemonbreeder-gen4',
	18: 'pokemonbreederf-gen4',
	19: 'cowgirl',
	20: 'jogger',
	21: 'pokefan-gen4',
	22: 'pokefanf-gen4',
	23: 'pokekid',
	24: 'youngcouple-gen4dp',
	25: 'acetrainer-gen4dp',
	26: 'acetrainerf-gen4dp',
	27: 'waitress-gen4',
	28: 'veteran-gen4',
	29: 'ninjaboy',
	30: 'dragontamer',
	31: 'birdkeeper-gen4dp',
	32: 'doubleteam',
	33: 'richboy-gen4',
	34: 'lady-gen4',
	35: 'gentleman-gen4dp',
	36: 'madame-gen4dp',
	37: 'beauty-gen4dp',
	38: 'collector',
	39: 'policeman-gen4',
	40: 'pokemonranger-gen4',
	41: 'pokemonrangerf-gen4',
	42: 'scientist-gen4dp',
	43: 'swimmer-gen4dp',
	44: 'swimmerf-gen4dp',
	45: 'tuber',
	46: 'tuberf',
	47: 'sailor',
	48: 'sisandbro',
	49: 'ruinmaniac',
	50: 'psychic-gen4',
	51: 'psychicf-gen4',
	52: 'gambler',
	53: 'guitarist-gen4',
	54: 'acetrainersnow',
	55: 'acetrainersnowf',
	56: 'skier',
	57: 'skierf-gen4dp',
	58: 'roughneck-gen4',
	59: 'clown',
	60: 'worker-gen4',
	61: 'schoolkid-gen4dp',
	62: 'schoolkidf-gen4',
	63: 'roark',
	64: 'barry',
	65: 'byron',
	66: 'aaron',
	67: 'bertha',
	68: 'flint',
	69: 'lucian',
	70: 'cynthia-gen4',
	71: 'bellepa',
	72: 'rancher',
	73: 'mars',
	74: 'galacticgrunt',
	75: 'gardenia',
	76: 'crasherwake',
	77: 'maylene',
	78: 'fantina',
	79: 'candice',
	80: 'volkner',
	81: 'parasollady-gen4',
	82: 'waiter-gen4dp',
	83: 'interviewers',
	84: 'cameraman',
	85: 'reporter',
	86: 'idol',
	87: 'cyrus',
	88: 'jupiter',
	89: 'saturn',
	90: 'galacticgruntf',
	91: 'argenta',
	92: 'palmer',
	93: 'thorton',
	94: 'buck',
	95: 'darach-caitlin',
	96: 'marley',
	97: 'mira',
	98: 'cheryl',
	99: 'riley',
	100: 'dahlia',
	101: 'ethan',
	102: 'lyra',
	103: 'twins-gen4',
	104: 'lass-gen4',
	105: 'acetrainer-gen4',
	106: 'acetrainerf-gen4',
	107: 'juggler',
	108: 'sage',
	109: 'li',
	110: 'gentleman-gen4',
	111: 'teacher',
	112: 'beauty',
	113: 'birdkeeper',
	114: 'swimmer-gen4',
	115: 'swimmerf-gen4',
	116: 'kimonogirl',
	117: 'scientist-gen4',
	118: 'acetrainercouple',
	119: 'youngcouple',
	120: 'supernerd',
	121: 'medium',
	122: 'schoolkid-gen4',
	123: 'blackbelt-gen4',
	124: 'pokemaniac',
	125: 'firebreather',
	126: 'burglar',
	127: 'biker-gen4',
	128: 'skierf',
	129: 'boarder',
	130: 'rocketgrunt',
	131: 'rocketgruntf',
	132: 'archer',
	133: 'ariana',
	134: 'proton',
	135: 'petrel',
	136: 'eusine',
	137: 'lucas-gen4pt',
	138: 'dawn-gen4pt',
	139: 'madame-gen4',
	140: 'waiter-gen4',
	141: 'falkner',
	142: 'bugsy',
	143: 'whitney',
	144: 'morty',
	145: 'chuck',
	146: 'jasmine',
	147: 'pryce',
	148: 'clair',
	149: 'will',
	150: 'koga',
	151: 'bruno',
	152: 'karen',
	153: 'lance',
	154: 'brock',
	155: 'misty',
	156: 'ltsurge',
	157: 'erika',
	158: 'janine',
	159: 'sabrina',
	160: 'blaine',
	161: 'blue',
	162: 'red',
	163: 'red',
	164: 'silver',
	165: 'giovanni',
	166: 'unknownf',
	167: 'unknown',
	168: 'unknown',
	169: 'hilbert',
	170: 'hilda',
	171: 'youngster',
	172: 'lass',
	173: 'schoolkid',
	174: 'schoolkidf',
	175: 'smasher',
	176: 'linebacker',
	177: 'waiter',
	178: 'waitress',
	179: 'chili',
	180: 'cilan',
	181: 'cress',
	182: 'nurseryaide',
	183: 'preschoolerf',
	184: 'preschooler',
	185: 'twins',
	186: 'pokemonbreeder',
	187: 'pokemonbreederf',
	188: 'lenora',
	189: 'burgh',
	190: 'elesa',
	191: 'clay',
	192: 'skyla',
	193: 'pokemonranger',
	194: 'pokemonrangerf',
	195: 'worker',
	196: 'backpacker',
	197: 'backpackerf',
	198: 'fisherman',
	199: 'musician',
	200: 'dancer',
	201: 'harlequin',
	202: 'artist',
	203: 'baker',
	204: 'psychic',
	205: 'psychicf',
	206: 'cheren',
	207: 'bianca',
	208: 'plasmagrunt-gen5bw',
	209: 'n',
	210: 'richboy',
	211: 'lady',
	212: 'pilot',
	213: 'workerice',
	214: 'hoopster',
	215: 'scientistf',
	216: 'clerkf',
	217: 'acetrainerf',
	218: 'acetrainer',
	219: 'blackbelt',
	220: 'scientist',
	221: 'striker',
	222: 'brycen',
	223: 'iris',
	224: 'drayden',
	225: 'roughneck',
	226: 'janitor',
	227: 'pokefan',
	228: 'pokefanf',
	229: 'doctor',
	230: 'nurse',
	231: 'hooligans',
	232: 'battlegirl',
	233: 'parasollady',
	234: 'clerk',
	235: 'clerk-boss',
	236: 'backers',
	237: 'backersf',
	238: 'veteran',
	239: 'veteranf',
	240: 'biker',
	241: 'infielder',
	242: 'hiker',
	243: 'madame',
	244: 'gentleman',
	245: 'plasmagruntf-gen5bw',
	246: 'shauntal',
	247: 'marshal',
	248: 'grimsley',
	249: 'caitlin',
	250: 'ghetsis-gen5bw',
	251: 'depotagent',
	252: 'swimmer',
	253: 'swimmerf',
	254: 'policeman',
	255: 'maid',
	256: 'ingo',
	257: 'alder',
	258: 'cyclist',
	259: 'cyclistf',
	260: 'cynthia',
	261: 'emmet',
	262: 'hilbert-wonderlauncher',
	263: 'hilda-wonderlauncher',
	264: 'hugh',
	265: 'rosa',
	266: 'nate',
	267: 'colress',
	268: 'beauty-gen5bw2',
	269: 'ghetsis',
	270: 'plasmagrunt',
	271: 'plasmagruntf',
	272: 'iris-gen5bw2',
	273: 'brycenman',
	274: 'shadowtriad',
	275: 'rood',
	276: 'zinzolin',
	277: 'cheren-gen5bw2',
	278: 'marlon',
	279: 'roxie',
	280: 'roxanne',
	281: 'brawly',
	282: 'wattson',
	283: 'flannery',
	284: 'norman',
	285: 'winona',
	286: 'tate',
	287: 'liza',
	288: 'juan',
	289: 'guitarist',
	290: 'steven',
	291: 'wallace',
	292: 'bellelba',
	293: 'benga',
	294: 'evilmario',
	295: 'naruto',
	296: 'sasuke',
	297: 'spongebob',
	298: 'patrick',
	299: 'maribel',
	300: 'renko',
	301: 'spearman',
	302: 'militia',
	303: 'scout',
	304: 'petard',
	305: 'rsbot',
	'#bw2elesa': 'elesa-gen5bw2',
	'#teamrocket': 'teamrocket',
	'#yellow': 'yellow',
	'#zinnia': 'zinnia',
	'#clemont': 'clemont',
	'#wally': 'wally',
	breeder: 'pokemonbreeder',
	breederf: 'pokemonbreederf',
	'hilbert-dueldisk': 'hilbert-wonderlauncher',
	'hilda-dueldisk': 'hilda-wonderlauncher',
	'nate-dueldisk': 'nate-wonderlauncher',
	'rosa-dueldisk': 'rosa-wonderlauncher',

	1001: '#1001',
	1002: '#1002',
	1003: '#1003',
	1005: '#1005',
	1010: '#1010',
};

type StatName = 'hp' | 'atk' | 'def' | 'spa' | 'spd' | 'spe';
type NatureName = 'Adamant' | 'Bashful' | 'Bold' | 'Brave' | 'Calm' | 'Careful' | 'Docile' | 'Gentle' |
	'Hardy' | 'Hasty' | 'Impish' | 'Jolly' | 'Lax' | 'Lonely' | 'Mild' | 'Modest' | 'Naive' | 'Naughty' |
	'Quiet' | 'Quirky' | 'Rash' | 'Relaxed' | 'Sassy' | 'Serious' | 'Timid';
type StatNameExceptHP = 'atk' | 'def' | 'spa' | 'spd' | 'spe';
type TypeName = 'Normal' | 'Fighting' | 'Flying' | 'Poison' | 'Ground' | 'Rock' | 'Bug' | 'Ghost' | 'Steel' |
	'Fire' | 'Water' | 'Grass' | 'Electric' | 'Psychic' | 'Ice' | 'Dragon' | 'Dark' | 'Fairy' | '???';
type StatusName = 'par' | 'psn' | 'frz' | 'slp' | 'brn';
type BoostStatName = 'atk' | 'def' | 'spa' | 'spd' | 'spe' | 'evasion' | 'accuracy' | 'spc';
type GenderName = 'M' | 'F' | 'N';

interface Effect {
	readonly id: ID;
	readonly name: string;
	readonly gen: number;
	readonly effectType: 'Item' | 'Move' | 'Ability' | 'Species' | 'PureEffect';
	/**
	 * Do we have data on this item/move/ability/species?
	 * WARNING: Always false if the relevant data files aren't loaded.
	 */
	readonly exists: boolean;
}

class PureEffect implements Effect {
	readonly effectType = 'PureEffect';
	readonly id: ID;
	readonly name: string;
	readonly gen: number;
	readonly exists: boolean;
	constructor(id: ID, name: string) {
		this.id = id;
		this.name = name;
		this.gen = 0;
		this.exists = false;
	}
}

class Item implements Effect {
	// effect
	readonly effectType = 'Item';
	readonly id: ID;
	readonly name: string;
	readonly gen: number;
	readonly exists: boolean;

	readonly num: number;
	readonly spritenum: number;
	readonly desc: string;
	readonly shortDesc: string;

	readonly megaStone: string;
	readonly megaEvolves: string;
	readonly zMove: string | true | null;
	readonly zMoveType: TypeName | '';
	readonly zMoveFrom: string;
	readonly zMoveUser: readonly string[] | null;
	readonly onPlate: TypeName;
	readonly onMemory: TypeName;
	readonly onDrive: TypeName;
	readonly fling: any;
	readonly naturalGift: any;
	readonly isPokeball: boolean;
	readonly itemUser?: readonly string[];

	constructor(id: ID, name: string, data: any) {
		if (!data || typeof data !== 'object') data = {};
		if (data.name) name = data.name;
		this.name = Dex.sanitizeName(name);
		this.id = id;
		this.gen = data.gen || 0;
		this.exists = ('exists' in data ? !!data.exists : true);

		this.num = data.num || 0;
		this.spritenum = data.spritenum || 0;
		this.desc = data.desc || data.shortDesc || '';
		this.shortDesc = data.shortDesc || this.desc;

		this.megaStone = data.megaStone || '';
		this.megaEvolves = data.megaEvolves || '';
		this.zMove = data.zMove || null;
		this.zMoveType = data.zMoveType || '';
		this.zMoveFrom = data.zMoveFrom || '';
		this.zMoveUser = data.zMoveUser || null;
		this.onPlate = data.onPlate || '';
		this.onMemory = data.onMemory || '';
		this.onDrive = data.onDrive || '';
		this.fling = data.fling || null;
		this.naturalGift = data.naturalGift || null;
		this.isPokeball = !!data.isPokeball;
		this.itemUser = data.itemUser;

		if (!this.gen) {
			if (this.num >= 577) {
				this.gen = 6;
			} else if (this.num >= 537) {
				this.gen = 5;
			} else if (this.num >= 377) {
				this.gen = 4;
			} else {
				this.gen = 3;
			}
		}
	}
}

interface MoveFlags {
	/** The move has an animation when used on an ally. */
	allyanim?: 1 | 0;
	/** Power is multiplied by 1.5 when used by a Pokemon with the Strong Jaw Ability. */
	bite?: 1 | 0;
	/** Has no effect on Pokemon with the Bulletproof Ability. */
	bullet?: 1 | 0;
	/** Ignores a target's substitute. */
	bypasssub?: 1 | 0;
	/** The user is unable to make a move between turns. */
	charge?: 1 | 0;
	/** Makes contact. */
	contact?: 1 | 0;
	/** When used by a Pokemon, other Pokemon with the Dancer Ability can attempt to execute the same move. */
	dance?: 1 | 0;
	/** Thaws the user if executed successfully while the user is frozen. */
	defrost?: 1 | 0;
	/** Can target a Pokemon positioned anywhere in a Triple Battle. */
	distance?: 1 | 0;
	/** Prevented from being executed or selected during Gravity's effect. */
	gravity?: 1 | 0;
	/** Prevented from being executed or selected during Heal Block's effect. */
	heal?: 1 | 0;
	/** Can be copied by Mirror Move. */
	mirror?: 1 | 0;
	/** Prevented from being executed or selected in a Sky Battle. */
	nonsky?: 1 | 0;
	/** Has no effect on Grass-type Pokemon, Pokemon with the Overcoat Ability, and Pokemon holding Safety Goggles. */
	powder?: 1 | 0;
	/** Blocked by Detect, Protect, Spiky Shield, and if not a Status move, King's Shield. */
	protect?: 1 | 0;
	/** Power is multiplied by 1.5 when used by a Pokemon with the Mega Launcher Ability. */
	pulse?: 1 | 0;
	/** Power is multiplied by 1.2 when used by a Pokemon with the Iron Fist Ability. */
	punch?: 1 | 0;
	/** If this move is successful, the user must recharge on the following turn and cannot make a move. */
	recharge?: 1 | 0;
	/** Bounced back to the original user by Magic Coat or the Magic Bounce Ability. */
	reflectable?: 1 | 0;
	/** Power is multiplied by 1.5 when used by a Pokemon with the Sharpness Ability. */
	slicing?: 1 | 0;
	/** Can be stolen from the original user and instead used by another Pokemon using Snatch. */
	snatch?: 1 | 0;
	/** Has no effect on Pokemon with the Soundproof Ability. */
	sound?: 1 | 0;
	/** Activates the effects of the Wind Power and Wind Rider Abilities. */
	wind?: 1 | 0;
}

type MoveTarget = 'normal' | 'any' | 'adjacentAlly' | 'adjacentFoe' | 'adjacentAllyOrSelf' | 'anyAlly' | // single-target
	'self' | 'randomNormal' | // single-target, automatic
	'allAdjacent' | 'allAdjacentFoes' | // spread
	'allySide' | 'foeSide' | 'all'; // side and field

class Move implements Effect {
	// effect
	readonly effectType = 'Move';
	readonly id: ID;
	readonly name: string;
	readonly gen: number;
	readonly exists: boolean;

	readonly basePower: number;
	readonly accuracy: number | true;
	readonly pp: number;
	readonly type: TypeName;
	readonly category: 'Physical' | 'Special' | 'Status';
	readonly priority: number;
	readonly target: MoveTarget;
	readonly pressureTarget: MoveTarget;
	readonly flags: Readonly<MoveFlags>;
	readonly critRatio: number;

	readonly desc: string;
	readonly shortDesc: string;
	readonly isNonstandard: string | null;
	readonly isZ: ID;
	readonly zMove?: {
		basePower?: number,
		effect?: string,
		boost?: {[stat in StatName]?: number},
	};
	readonly isMax: boolean | string;
	readonly maxMove: {basePower: number};
	readonly ohko: true | 'Ice' | null;
	readonly recoil: number[] | null;
	readonly heal: number[] | null;
	readonly multihit: number[] | number | null;
	readonly hasCrashDamage: boolean;
	readonly noPPBoosts: boolean;
	readonly secondaries: ReadonlyArray<any> | null;
	readonly noSketch: boolean;
	readonly num: number;

	constructor(id: ID, name: string, data: any) {
		if (!data || typeof data !== 'object') data = {};
		if (data.name) name = data.name;
		this.name = Dex.sanitizeName(name);
		this.id = id;
		this.gen = data.gen || 0;
		this.exists = ('exists' in data ? !!data.exists : true);

		this.basePower = data.basePower || 0;
		this.accuracy = data.accuracy || 0;
		this.pp = data.pp || 1;
		this.type = data.type || '???';
		this.category = data.category || 'Physical';
		this.priority = data.priority || 0;
		this.target = data.target || 'normal';
		this.pressureTarget = data.pressureTarget || this.target;
		this.flags = data.flags || {};
		this.critRatio = data.critRatio === 0 ? 0 : (data.critRatio || 1);

		// TODO: move to text.js
		this.desc = data.desc;
		this.shortDesc = data.shortDesc;
		this.isNonstandard = data.isNonstandard || null;
		this.isZ = data.isZ || '';
		this.zMove = data.zMove || {};
		this.ohko = data.ohko || null;
		this.recoil = data.recoil || null;
		this.heal = data.heal || null;
		this.multihit = data.multihit || null;
		this.hasCrashDamage = data.hasCrashDamage || false;
		this.noPPBoosts = data.noPPBoosts || false;
		this.secondaries = data.secondaries || (data.secondary ? [data.secondary] : null);
		this.noSketch = !!data.noSketch;

		this.isMax = data.isMax || false;
		this.maxMove = data.maxMove || {basePower: 0};
		if (this.category !== 'Status' && !this.maxMove?.basePower) {
			if (this.isZ || this.isMax) {
				this.maxMove = {basePower: 1};
			} else if (!this.basePower) {
				this.maxMove = {basePower: 100};
			} else if (['Fighting', 'Poison'].includes(this.type)) {
				if (this.basePower >= 150) {
					this.maxMove = {basePower: 100};
				} else if (this.basePower >= 110) {
					this.maxMove = {basePower: 95};
				} else if (this.basePower >= 75) {
					this.maxMove = {basePower: 90};
				} else if (this.basePower >= 65) {
					this.maxMove = {basePower: 85};
				} else if (this.basePower >= 55) {
					this.maxMove = {basePower: 80};
				} else if (this.basePower >= 45) {
					this.maxMove = {basePower: 75};
				} else  {
					this.maxMove = {basePower: 70};
				}
			} else {
				if (this.basePower >= 150) {
					this.maxMove = {basePower: 150};
				} else if (this.basePower >= 110) {
					this.maxMove = {basePower: 140};
				} else if (this.basePower >= 75) {
					this.maxMove = {basePower: 130};
				} else if (this.basePower >= 65) {
					this.maxMove = {basePower: 120};
				} else if (this.basePower >= 55) {
					this.maxMove = {basePower: 110};
				} else if (this.basePower >= 45) {
					this.maxMove = {basePower: 100};
				} else  {
					this.maxMove = {basePower: 90};
				}
			}
		}

		if (this.category !== 'Status' && !this.isZ && !this.isMax) {
			let basePower = this.basePower;
			this.zMove = {};
			if (Array.isArray(this.multihit)) basePower *= 3;
			if (!basePower) {
				this.zMove.basePower = 100;
			} else if (basePower >= 140) {
				this.zMove.basePower = 200;
			} else if (basePower >= 130) {
				this.zMove.basePower = 195;
			} else if (basePower >= 120) {
				this.zMove.basePower = 190;
			} else if (basePower >= 110) {
				this.zMove.basePower = 185;
			} else if (basePower >= 100) {
				this.zMove.basePower = 180;
			} else if (basePower >= 90) {
				this.zMove.basePower = 175;
			} else if (basePower >= 80) {
				this.zMove.basePower = 160;
			} else if (basePower >= 70) {
				this.zMove.basePower = 140;
			} else if (basePower >= 60) {
				this.zMove.basePower = 120;
			} else {
				this.zMove.basePower = 100;
			}
			if (data.zMove) this.zMove.basePower = data.zMove.basePower;
		}

		this.num = data.num || 0;
		if (!this.gen) {
			if (this.num >= 743 && this.num < 1199) {
				this.gen = 8;
			} else if (this.num >= 622 && this.num < 1199) {
				this.gen = 7;
			} else if (this.num >= 560 && this.num < 1199) {
				this.gen = 6;
			} else if (this.num >= 468 && this.num < 1199) {
				this.gen = 5;
			} else if (this.num >= 355 && this.num < 1199) {
				this.gen = 4;
			} else if (this.num >= 252 || this.num >= 1199) {
				this.gen = 3;
			} else if (this.num >= 166) {
				this.gen = 2;
			} else if (this.num >= 1) {
				this.gen = 1;
			}
		}
	}
}

class Ability implements Effect {
	// effect
	readonly effectType = 'Ability';
	readonly id: ID;
	readonly name: string;
	readonly gen: number;
	readonly exists: boolean;

	readonly num: number;
	readonly shortDesc: string;
	readonly desc: string;

	readonly rating: number;
	readonly isPermanent: boolean;
	readonly isNonstandard: boolean;

	constructor(id: ID, name: string, data: any) {
		if (!data || typeof data !== 'object') data = {};
		if (data.name) name = data.name;
		this.name = Dex.sanitizeName(name);
		this.id = id;
		this.gen = data.gen || 0;
		this.exists = ('exists' in data ? !!data.exists : true);
		this.num = data.num || 0;
		this.shortDesc = data.shortDesc || data.desc || '';
		this.desc = data.desc || data.shortDesc || '';
		this.rating = data.rating || 1;
		this.isPermanent = !!data.isPermanent;
		this.isNonstandard = !!data.isNonstandard;
		if (!this.gen) {
			if (this.num >= 234) {
				this.gen = 8;
			} else if (this.num >= 192) {
				this.gen = 7;
			} else if (this.num >= 165) {
				this.gen = 6;
			} else if (this.num >= 124) {
				this.gen = 5;
			} else if (this.num >= 77) {
				this.gen = 4;
			} else if (this.num >= 1) {
				this.gen = 3;
			}
		}
	}
}

class Species implements Effect {
	// effect
	readonly effectType = 'Species';
	readonly id: ID;
	readonly name: string;
	readonly gen: number;
	readonly exists: boolean;

	// name
	readonly baseSpecies: string;
	readonly forme: string;
	readonly formeid: string;
	readonly spriteid: string;
	readonly baseForme: string;

	// basic data
	readonly num: number;
	readonly types: ReadonlyArray<TypeName>;
	readonly abilities: Readonly<{
		0: string, 1?: string, H?: string, S?: string,
	}>;
	readonly baseStats: Readonly<{
		hp: number, atk: number, def: number, spa: number, spd: number, spe: number,
	}>;
	readonly bst: number;
	readonly weightkg: number;

	// flavor data
	readonly heightm: number;
	readonly gender: GenderName;
	readonly color: string;
	readonly genderRatio: Readonly<{M: number, F: number}> | null;
	readonly eggGroups: ReadonlyArray<string>;
	readonly tags: ReadonlyArray<string>;

	// format data
	readonly otherFormes: ReadonlyArray<string> | null;
	readonly cosmeticFormes: ReadonlyArray<string> | null;
	readonly evos: ReadonlyArray<string> | null;
	readonly prevo: string;
	readonly evoType: 'trade' | 'useItem' | 'levelMove' | 'levelExtra' | 'levelFriendship' | 'levelHold' | 'other' | '';
	readonly evoLevel: number;
	readonly evoMove: string;
	readonly evoItem: string;
	readonly evoCondition: string;
	readonly requiredItems: ReadonlyArray<string>;
	readonly tier: string;
	readonly isTotem: boolean;
	readonly isMega: boolean;
	readonly isPrimal: boolean;
	readonly canGigantamax: boolean;
	readonly cannotDynamax: boolean;
	readonly forceTeraType: TypeName;
	readonly battleOnly: string | string[] | undefined;
	readonly isNonstandard: string | null;
	readonly unreleasedHidden: boolean | 'Past';
	readonly changesFrom: string | undefined;

	constructor(id: ID, name: string, data: any) {
		if (!data || typeof data !== 'object') data = {};
		if (data.name) name = data.name;
		this.name = Dex.sanitizeName(name);
		this.id = id;
		this.gen = data.gen || 0;
		this.exists = ('exists' in data ? !!data.exists : true);
		this.baseSpecies = data.baseSpecies || name;
		this.forme = data.forme || '';
		const baseId = toID(this.baseSpecies);
		this.formeid = (baseId === this.id ? '' : '-' + toID(this.forme));
		this.spriteid = baseId + this.formeid;
		if (this.spriteid.slice(-5) === 'totem') this.spriteid = this.spriteid.slice(0, -5);
		if (this.spriteid === 'greninja-bond') this.spriteid = 'greninja';
		if (this.spriteid.slice(-1) === '-') this.spriteid = this.spriteid.slice(0, -1);
		this.baseForme = data.baseForme || '';

		this.num = data.num || 0;
		this.types = data.types || ['???'];
		this.abilities = data.abilities || {0: "No Ability"};
		this.baseStats = data.baseStats || {hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 0};
		this.bst = this.baseStats.hp + this.baseStats.atk + this.baseStats.def +
			this.baseStats.spa + this.baseStats.spd + this.baseStats.spe;
		this.weightkg = data.weightkg || 0;

		this.heightm = data.heightm || 0;
		this.gender = data.gender || '';
		this.color = data.color || '';
		this.genderRatio = data.genderRatio || null;
		this.eggGroups = data.eggGroups || [];
		this.tags = data.tags || [];

		this.otherFormes = data.otherFormes || null;
		this.cosmeticFormes = data.cosmeticFormes || null;
		this.evos = data.evos || null;
		this.prevo = data.prevo || '';
		this.evoType = data.evoType || '';
		this.evoLevel = data.evoLevel || 0;
		this.evoMove = data.evoMove || '';
		this.evoItem = data.evoItem || '';
		this.evoCondition = data.evoCondition || '';
		this.requiredItems = data.requiredItems || (data.requiredItem ? [data.requiredItem] : []);
		this.tier = data.tier || '';

		this.isTotem = false;
		this.isMega = !!(this.forme && ['-mega', '-megax', '-megay'].includes(this.formeid));
		this.isPrimal = !!(this.forme && this.formeid === '-primal');
		this.canGigantamax = !!data.canGigantamax;
		this.cannotDynamax = !!data.cannotDynamax;
		this.forceTeraType = data.forceTeraType || '';
		this.battleOnly = data.battleOnly || undefined;
		this.isNonstandard = data.isNonstandard || null;
		this.unreleasedHidden = data.unreleasedHidden || false;
		this.changesFrom = data.changesFrom || undefined;
		if (!this.gen) {
			if (this.num >= 906 || this.formeid.startsWith('-paldea')) {
				this.gen = 9;
			} else if (this.num >= 810 || this.formeid.startsWith('-galar') || this.formeid.startsWith('-hisui')) {
				this.gen = 8;
			} else if (this.num >= 722 || this.formeid === '-alola' || this.formeid === '-starter') {
				this.gen = 7;
			} else if (this.isMega || this.isPrimal) {
				this.gen = 6;
				this.battleOnly = this.baseSpecies;
			} else if (this.formeid === '-totem' || this.formeid === '-alolatotem') {
				this.gen = 7;
				this.isTotem = true;
			} else if (this.num >= 650) {
				this.gen = 6;
			} else if (this.num >= 494) {
				this.gen = 5;
			} else if (this.num >= 387) {
				this.gen = 4;
			} else if (this.num >= 252) {
				this.gen = 3;
			} else if (this.num >= 152) {
				this.gen = 2;
			} else if (this.num >= 1) {
				this.gen = 1;
			}
		}
	}
}

interface Type extends Effect {
	damageTaken?: AnyObject;
	HPivs?: Partial<StatsTable>;
	HPdvs?: Partial<StatsTable>;
}

if (typeof require === 'function') {
	// in Node
	(global as any).BattleBaseSpeciesChart = BattleBaseSpeciesChart;
	(global as any).BattleNatures = BattleNatures;
	(global as any).PureEffect = PureEffect;
	(global as any).Species = Species;
	(global as any).Ability = Ability;
	(global as any).Item = Item;
	(global as any).Move = Move;
}
