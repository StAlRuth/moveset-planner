'use strict';

let BattlePokedex = {
	bulbasaur: {
		species: "Bulbasaur",
		eggGroups: ["Monster", "Grass"],
	},
	ivysaur: {
		species: "Ivysaur",
		prevo: "bulbasaur",
		eggGroups: ["Monster", "Grass"],
	},
	venusaur: {
		species: "Venusaur",
		prevo: "ivysaur",
		eggGroups: ["Monster", "Grass"],
	},
	venusaurmega: {
		species: "Venusaur-Mega",
		baseSpecies: "Venusaur",
		eggGroups: ["Monster", "Grass"],
	},
	charmander: {
		species: "Charmander",
		eggGroups: ["Monster", "Dragon"],
	},
	charmeleon: {
		species: "Charmeleon",
		prevo: "charmander",
		eggGroups: ["Monster", "Dragon"],
	},
	charizard: {
		species: "Charizard",
		prevo: "charmeleon",
		eggGroups: ["Monster", "Dragon"],
	},
	charizardmegax: {
		species: "Charizard-Mega-X",
		baseSpecies: "Charizard",
		eggGroups: ["Monster", "Dragon"],
	},
	charizardmegay: {
		species: "Charizard-Mega-Y",
		baseSpecies: "Charizard",
		eggGroups: ["Monster", "Dragon"],
	},
	charizardgmax: {
		species: "Charizard-Gmax",
		baseSpecies: "Charizard",
		eggGroups: ["Monster", "Dragon"],
	},
	squirtle: {
		species: "Squirtle",
		eggGroups: ["Monster", "Water 1"],
	},
	wartortle: {
		species: "Wartortle",
		prevo: "squirtle",
		eggGroups: ["Monster", "Water 1"],
	},
	blastoise: {
		species: "Blastoise",
		prevo: "wartortle",
		eggGroups: ["Monster", "Water 1"],
	},
	blastoisemega: {
		species: "Blastoise-Mega",
		baseSpecies: "Blastoise",
		eggGroups: ["Monster", "Water 1"],
	},
	caterpie: {
		species: "Caterpie",
		eggGroups: ["Bug"],
	},
	metapod: {
		species: "Metapod",
		prevo: "caterpie",
		eggGroups: ["Bug"],
	},
	butterfree: {
		species: "Butterfree",
		prevo: "metapod",
		eggGroups: ["Bug"],
	},
	butterfreegmax: {
		species: "Butterfree-Gmax",
		baseSpecies: "Butterfree",
		eggGroups: ["Bug"],
	},
	weedle: {
		species: "Weedle",
		eggGroups: ["Bug"],
	},
	kakuna: {
		species: "Kakuna",
		prevo: "weedle",
		eggGroups: ["Bug"],
	},
	beedrill: {
		species: "Beedrill",
		prevo: "kakuna",
		eggGroups: ["Bug"],
	},
	beedrillmega: {
		species: "Beedrill-Mega",
		baseSpecies: "Beedrill",
		eggGroups: ["Bug"],
	},
	pidgey: {
		species: "Pidgey",
		eggGroups: ["Flying"],
	},
	pidgeotto: {
		species: "Pidgeotto",
		prevo: "pidgey",
		eggGroups: ["Flying"],
	},
	pidgeot: {
		species: "Pidgeot",
		prevo: "pidgeotto",
		eggGroups: ["Flying"],
	},
	pidgeotmega: {
		species: "Pidgeot-Mega",
		baseSpecies: "Pidgeot",
		eggGroups: ["Flying"],
	},
	rattata: {
		species: "Rattata",
		eggGroups: ["Field"],
	},
	rattataalola: {
		species: "Rattata-Alola",
		baseSpecies: "Rattata",
		eggGroups: ["Field"],
	},
	raticate: {
		species: "Raticate",
		prevo: "rattata",
		eggGroups: ["Field"],
	},
	raticatealola: {
		species: "Raticate-Alola",
		prevo: "rattataalola",
		eggGroups: ["Field"],
	},
	raticatealolatotem: {
		species: "Raticate-Alola-Totem",
		baseSpecies: "Raticate-Alola",
		eggGroups: ["Field"],
	},
	spearow: {
		species: "Spearow",
		eggGroups: ["Flying"],
	},
	fearow: {
		species: "Fearow",
		prevo: "spearow",
		eggGroups: ["Flying"],
	},
	ekans: {
		species: "Ekans",
		eggGroups: ["Field", "Dragon"],
	},
	arbok: {
		species: "Arbok",
		prevo: "ekans",
		eggGroups: ["Field", "Dragon"],
	},
	pikachu: {
		species: "Pikachu",
		prevo: "pichu",
		evoType: "levelFriendship",
		eggGroups: ["Field", "Fairy"],
	},
	pikachugmax: {
		species: "Pikachu-Gmax",
		baseSpecies: "Pikachu",
		eggGroups: ["Field", "Fairy"],
	},
	raichu: {
		species: "Raichu",
		prevo: "pikachu",
		evoItem: "Thunder Stone",
		evoType: "useItem",
		eggGroups: ["Field", "Fairy"],
	},
	raichualola: {
		species: "Raichu-Alola",
		prevo: "pikachu",
		evoType: "useItem",
		evoItem: "Thunder Stone",
		eggGroups: ["Field", "Fairy"],
	},
	sandshrew: {
		species: "Sandshrew",
		eggGroups: ["Field"],
	},
	sandshrewalola: {
		species: "Sandshrew-Alola",
		eggGroups: ["Field"],
	},
	sandslash: {
		species: "Sandslash",
		prevo: "sandshrew",
		eggGroups: ["Field"],
	},
	sandslashalola: {
		species: "Sandslash-Alola",
		prevo: "sandshrewalola",
		evoType: "useItem",
		evoItem: "Ice Stone",
		eggGroups: ["Field"],
	},
	nidoranf: {
		species: "Nidoran-F",
		eggGroups: ["Monster", "Field"],
	},
	nidorina: {
		species: "Nidorina",
		prevo: "nidoranf",
		eggGroups: ["Undiscovered"],
	},
	nidoqueen: {
		species: "Nidoqueen",
		prevo: "nidorina",
		evoType: "useItem",
		evoItem: "Moon Stone",
		eggGroups: ["Undiscovered"],
	},
	nidoranm: {
		species: "Nidoran-M",
		eggGroups: ["Monster", "Field"],
	},
	nidorino: {
		species: "Nidorino",
		prevo: "nidoranm",
		eggGroups: ["Monster", "Field"],
	},
	nidoking: {
		species: "Nidoking",
		prevo: "nidorino",
		evoType: "useItem",
		evoItem: "Moon Stone",
		eggGroups: ["Monster", "Field"],
	},
	clefairy: {
		species: "Clefairy",
		prevo: "cleffa",
		evoType: "levelFriendship",
		eggGroups: ["Fairy"],
	},
	clefable: {
		species: "Clefable",
		prevo: "clefairy",
		evoType: "useItem",
		evoItem: "Moon Stone",
		eggGroups: ["Fairy"],
	},
	vulpix: {
		species: "Vulpix",
		eggGroups: ["Field"],
	},
	vulpixalola: {
		species: "Vulpix-Alola",
		eggGroups: ["Field"],
	},
	ninetales: {
		species: "Ninetales",
		prevo: "vulpix",
		evoType: "useItem",
		evoItem: "Fire Stone",
		eggGroups: ["Field"],
	},
	ninetalesalola: {
		species: "Ninetales-Alola",
		prevo: "vulpixalola",
		evoType: "useItem",
		evoItem: "Ice Stone",
		eggGroups: ["Field"],
	},
	jigglypuff: {
		species: "Jigglypuff",
		prevo: "igglybuff",
		evoType: "levelFriendship",
		eggGroups: ["Fairy"],
	},
	wigglytuff: {
		species: "Wigglytuff",
		prevo: "jigglypuff",
		evoType: "useItem",
		evoItem: "Moon Stone",
		eggGroups: ["Fairy"],
	},
	zubat: {
		species: "Zubat",
		eggGroups: ["Flying"],
	},
	golbat: {
		species: "Golbat",
		prevo: "zubat",
		eggGroups: ["Flying"],
	},
	oddish: {
		species: "Oddish",
		eggGroups: ["Grass"],
	},
	gloom: {
		species: "Gloom",
		prevo: "oddish",
		eggGroups: ["Grass"],
	},
	vileplume: {
		species: "Vileplume",
		prevo: "gloom",
		evoType: "useItem",
		evoItem: "Leaf Stone",
		eggGroups: ["Grass"],
	},
	paras: {
		species: "Paras",
		eggGroups: ["Bug", "Grass"],
	},
	parasect: {
		species: "Parasect",
		prevo: "paras",
		eggGroups: ["Bug", "Grass"],
	},
	venonat: {
		species: "Venonat",
		eggGroups: ["Bug"],
	},
	venomoth: {
		species: "Venomoth",
		prevo: "venonat",
		eggGroups: ["Bug"],
	},
	diglett: {
		species: "Diglett",
		eggGroups: ["Field"],
	},
	diglettalola: {
		species: "Diglett-Alola",
		eggGroups: ["Field"],
	},
	dugtrio: {
		species: "Dugtrio",
		prevo: "diglett",
		eggGroups: ["Field"],
	},
	dugtrioalola: {
		species: "Dugtrio-Alola",
		prevo: "diglettalola",
		eggGroups: ["Field"],
	},
	meowth: {
		species: "Meowth",
		eggGroups: ["Field"],
	},
	meowthalola: {
		species: "Meowth-Alola",
		eggGroups: ["Field"],
	},
	meowthgalar: {
		species: "Meowth-Galar",
		eggGroups: ["Field"],
	},
	meowthgmax: {
		species: "Meowth-Gmax",
		baseSpecies: "Meowth",
		eggGroups: ["Field"],
	},
	persian: {
		species: "Persian",
		prevo: "meowth",
		eggGroups: ["Field"],
	},
	persianalola: {
		species: "Persian-Alola",
		prevo: "meowthalola",
		evoType: "levelFriendship",
		eggGroups: ["Field"],
	},
	psyduck: {
		species: "Psyduck",
		eggGroups: ["Water 1", "Field"],
	},
	golduck: {
		species: "Golduck",
		prevo: "psyduck",
		eggGroups: ["Water 1", "Field"],
	},
	mankey: {
		species: "Mankey",
		eggGroups: ["Field"],
	},
	primeape: {
		species: "Primeape",
		prevo: "mankey",
		eggGroups: ["Field"],
	},
	growlithe: {
		species: "Growlithe",
		eggGroups: ["Field"],
	},
	arcanine: {
		species: "Arcanine",
		prevo: "growlithe",
		evoType: "useItem",
		evoItem: "Fire Stone",
		eggGroups: ["Field"],
	},
	poliwag: {
		species: "Poliwag",
		eggGroups: ["Water 1"],
	},
	poliwhirl: {
		species: "Poliwhirl",
		prevo: "poliwag",
		eggGroups: ["Water 1"],
	},
	poliwrath: {
		species: "Poliwrath",
		prevo: "poliwhirl",
		evoType: "useItem",
		evoItem: "Water Stone",
		eggGroups: ["Water 1"],
	},
	abra: {
		species: "Abra",
		eggGroups: ["Human-Like"],
	},
	kadabra: {
		species: "Kadabra",
		prevo: "abra",
		eggGroups: ["Human-Like"],
	},
	alakazam: {
		species: "Alakazam",
		prevo: "kadabra",
		evoType: "trade",
		eggGroups: ["Human-Like"],
	},
	alakazammega: {
		species: "Alakazam-Mega",
		baseSpecies: "Alakazam",
		eggGroups: ["Human-Like"],
	},
	machop: {
		species: "Machop",
		eggGroups: ["Human-Like"],
	},
	machoke: {
		species: "Machoke",
		prevo: "machop",
		eggGroups: ["Human-Like"],
	},
	machamp: {
		species: "Machamp",
		prevo: "machoke",
		evoType: "trade",
		eggGroups: ["Human-Like"],
	},
	machampgmax: {
		species: "Machamp-Gmax",
		baseSpecies: "Machamp",
		eggGroups: ["Human-Like"],
	},
	bellsprout: {
		species: "Bellsprout",
		eggGroups: ["Grass"],
	},
	weepinbell: {
		species: "Weepinbell",
		prevo: "bellsprout",
		eggGroups: ["Grass"],
	},
	victreebel: {
		species: "Victreebel",
		prevo: "weepinbell",
		evoType: "useItem",
		evoItem: "Leaf Stone",
		eggGroups: ["Grass"],
	},
	tentacool: {
		species: "Tentacool",
		eggGroups: ["Water 3"],
	},
	tentacruel: {
		species: "Tentacruel",
		prevo: "tentacool",
		eggGroups: ["Water 3"],
	},
	geodude: {
		species: "Geodude",
		eggGroups: ["Mineral"],
	},
	geodudealola: {
		species: "Geodude-Alola",
		eggGroups: ["Mineral"],
	},
	graveler: {
		species: "Graveler",
		prevo: "geodude",
		eggGroups: ["Mineral"],
	},
	graveleralola: {
		species: "Graveler-Alola",
		prevo: "geodudealola",
		eggGroups: ["Mineral"],
	},
	golem: {
		species: "Golem",
		prevo: "graveler",
		evoType: "trade",
		eggGroups: ["Mineral"],
	},
	golemalola: {
		species: "Golem-Alola",
		prevo: "graveleralola",
		evoType: "trade",
		eggGroups: ["Mineral"],
	},
	ponyta: {
		species: "Ponyta",
		eggGroups: ["Field"],
	},
	ponytagalar: {
		species: "Ponyta-Galar",
		eggGroups: ["Field"],
	},
	rapidash: {
		species: "Rapidash",
		prevo: "ponyta",
		eggGroups: ["Field"],
	},
	rapidashgalar: {
		species: "Rapidash-Galar",
		prevo: "ponytagalar",
		eggGroups: ["Field"],
	},
	slowpoke: {
		species: "Slowpoke",
		eggGroups: ["Monster", "Water 1"],
	},
	slowbro: {
		species: "Slowbro",
		prevo: "slowpoke",
		eggGroups: ["Monster", "Water 1"],
	},
	slowbromega: {
		species: "Slowbro-Mega",
		baseSpecies: "Slowbro",
		eggGroups: ["Monster", "Water 1"],
	},
	magnemite: {
		species: "Magnemite",
		eggGroups: ["Mineral"],
	},
	magneton: {
		species: "Magneton",
		prevo: "magnemite",
		eggGroups: ["Mineral"],
	},
	farfetchd: {
		species: "Farfetch'd",
		eggGroups: ["Flying", "Field"],
	},
	farfetchdgalar: {
		species: "Farfetch'd-Galar",
		eggGroups: ["Flying", "Field"],
	},
	doduo: {
		species: "Doduo",
		eggGroups: ["Flying"],
	},
	dodrio: {
		species: "Dodrio",
		prevo: "doduo",
		eggGroups: ["Flying"],
	},
	seel: {
		species: "Seel",
		eggGroups: ["Water 1", "Field"],
	},
	dewgong: {
		species: "Dewgong",
		prevo: "seel",
		eggGroups: ["Water 1", "Field"],
	},
	grimer: {
		species: "Grimer",
		eggGroups: ["Amorphous"],
	},
	grimeralola: {
		species: "Grimer-Alola",
		eggGroups: ["Amorphous"],
	},
	muk: {
		species: "Muk",
		prevo: "grimer",
		eggGroups: ["Amorphous"],
	},
	mukalola: {
		species: "Muk-Alola",
		prevo: "grimeralola",
		eggGroups: ["Amorphous"],
	},
	shellder: {
		species: "Shellder",
		eggGroups: ["Water 3"],
	},
	cloyster: {
		species: "Cloyster",
		prevo: "shellder",
		evoType: "useItem",
		evoItem: "Water Stone",
		eggGroups: ["Water 3"],
	},
	gastly: {
		species: "Gastly",
		eggGroups: ["Amorphous"],
	},
	haunter: {
		species: "Haunter",
		prevo: "gastly",
		eggGroups: ["Amorphous"],
	},
	gengar: {
		species: "Gengar",
		prevo: "haunter",
		evoType: "trade",
		eggGroups: ["Amorphous"],
	},
	gengarmega: {
		species: "Gengar-Mega",
		baseSpecies: "Gengar",
		eggGroups: ["Amorphous"],
	},
	gengargmax: {
		species: "Gengar-Gmax",
		baseSpecies: "Gengar",
		eggGroups: ["Amorphous"],
	},
	onix: {
		species: "Onix",
		eggGroups: ["Mineral"],
	},
	drowzee: {
		species: "Drowzee",
		eggGroups: ["Human-Like"],
	},
	hypno: {
		species: "Hypno",
		prevo: "drowzee",
		eggGroups: ["Human-Like"],
	},
	krabby: {
		species: "Krabby",
		eggGroups: ["Water 3"],
	},
	kingler: {
		species: "Kingler",
		prevo: "krabby",
		eggGroups: ["Water 3"],
	},
	kinglergmax: {
		species: "Kingler-Gmax",
		baseSpecies: "Kingler",
		eggGroups: ["Water 3"],
	},
	voltorb: {
		species: "Voltorb",
		eggGroups: ["Mineral"],
	},
	electrode: {
		species: "Electrode",
		prevo: "voltorb",
		eggGroups: ["Mineral"],
	},
	exeggcute: {
		species: "Exeggcute",
		eggGroups: ["Grass"],
	},
	exeggutor: {
		species: "Exeggutor",
		prevo: "exeggcute",
		evoType: "useItem",
		evoItem: "Leaf Stone",
		eggGroups: ["Grass"],
	},
	exeggutoralola: {
		species: "Exeggutor-Alola",
		prevo: "exeggcute",
		evoType: "useItem",
		evoItem: "Leaf Stone",
		eggGroups: ["Grass"],
	},
	cubone: {
		species: "Cubone",
		eggGroups: ["Monster"],
	},
	marowak: {
		species: "Marowak",
		prevo: "cubone",
		eggGroups: ["Monster"],
	},
	marowakalola: {
		species: "Marowak-Alola",
		prevo: "cubone",
		eggGroups: ["Monster"],
	},
	marowakalolatotem: {
		species: "Marowak-Alola-Totem",
		baseSpecies: "Marowak-Alola",
		eggGroups: ["Monster"],
	},
	hitmonlee: {
		species: "Hitmonlee",
		prevo: "tyrogue",
		eggGroups: ["Human-Like"],
	},
	hitmonchan: {
		species: "Hitmonchan",
		prevo: "tyrogue",
		eggGroups: ["Human-Like"],
	},
	lickitung: {
		species: "Lickitung",
		eggGroups: ["Monster"],
	},
	koffing: {
		species: "Koffing",
		eggGroups: ["Amorphous"],
	},
	weezing: {
		species: "Weezing",
		prevo: "koffing",
		eggGroups: ["Amorphous"],
	},
	weezinggalar: {
		species: "Weezing-Galar",
		prevo: "koffing",
		eggGroups: ["Amorphous"],
	},
	rhyhorn: {
		species: "Rhyhorn",
		eggGroups: ["Monster", "Field"],
	},
	rhydon: {
		species: "Rhydon",
		prevo: "rhyhorn",
		eggGroups: ["Monster", "Field"],
	},
	chansey: {
		species: "Chansey",
		prevo: "happiny",
		evoType: "levelHold",
		evoItem: "Oval Stone",
		evoCondition: "during the day",
		eggGroups: ["Fairy"],
		canHatch: true,
	},
	tangela: {
		species: "Tangela",
		eggGroups: ["Grass"],
	},
	kangaskhan: {
		species: "Kangaskhan",
		eggGroups: ["Monster"],
	},
	kangaskhanmega: {
		species: "Kangaskhan-Mega",
		baseSpecies: "Kangaskhan",
		eggGroups: ["Monster"],
	},
	horsea: {
		species: "Horsea",
		eggGroups: ["Water 1", "Dragon"],
	},
	seadra: {
		species: "Seadra",
		prevo: "horsea",
		eggGroups: ["Water 1", "Dragon"],
	},
	goldeen: {
		species: "Goldeen",
		eggGroups: ["Water 2"],
	},
	seaking: {
		species: "Seaking",
		prevo: "goldeen",
		eggGroups: ["Water 2"],
	},
	staryu: {
		species: "Staryu",
		eggGroups: ["Water 3"],
	},
	starmie: {
		species: "Starmie",
		prevo: "staryu",
		evoType: "useItem",
		evoItem: "Water Stone",
		eggGroups: ["Water 3"],
	},
	mrmime: {
		species: "Mr. Mime",
		prevo: "mimejr",
		evoType: "levelMove",
		evoMove: "Mimic",
		eggGroups: ["Human-Like"],
		canHatch: true,
	},
	mrmimegalar: {
		species: "Mr. Mime-Galar",
		prevo: "mimejr",
		evoType: "levelMove",
		evoMove: "Mimic",
		eggGroups: ["Human-Like"],
		canHatch: true,
	},
	scyther: {
		species: "Scyther",
		eggGroups: ["Bug"],
	},
	jynx: {
		species: "Jynx",
		prevo: "smoochum",
		eggGroups: ["Human-Like"],
	},
	electabuzz: {
		species: "Electabuzz",
		prevo: "elekid",
		eggGroups: ["Human-Like"],
	},
	magmar: {
		species: "Magmar",
		prevo: "magby",
		eggGroups: ["Human-Like"],
	},
	pinsir: {
		species: "Pinsir",
		eggGroups: ["Bug"],
	},
	pinsirmega: {
		species: "Pinsir-Mega",
		baseSpecies: "Pinsir",
		eggGroups: ["Bug"],
	},
	tauros: {
		species: "Tauros",
		eggGroups: ["Field"],
	},
	magikarp: {
		species: "Magikarp",
		eggGroups: ["Water 2", "Dragon"],
	},
	gyarados: {
		species: "Gyarados",
		prevo: "magikarp",
		eggGroups: ["Water 2", "Dragon"],
	},
	gyaradosmega: {
		species: "Gyarados-Mega",
		baseSpecies: "Gyarados",
		eggGroups: ["Water 2", "Dragon"],
	},
	lapras: {
		species: "Lapras",
		eggGroups: ["Monster", "Water 1"],
	},
	laprasgmax: {
		species: "Lapras-Gmax",
		baseSpecies: "Lapras",
		eggGroups: ["Monster", "Water 1"],
	},
	ditto: {
		species: "Ditto",
		eggGroups: ["Ditto"],
	},
	eevee: {
		species: "Eevee",
		eggGroups: ["Field"],
	},
	eeveestarter: {
		species: "Eevee-Starter",
		baseSpecies: "Eevee",
		eggGroups: ["Undiscovered"],
	},
	eeveegmax: {
		species: "Eevee-Gmax",
		baseSpecies: "Eevee",
		eggGroups: ["Field"],
	},
	vaporeon: {
		species: "Vaporeon",
		prevo: "eevee",
		evoType: "useItem",
		evoItem: "Water Stone",
		eggGroups: ["Field"],
	},
	jolteon: {
		species: "Jolteon",
		prevo: "eevee",
		evoType: "useItem",
		evoItem: "Thunder Stone",
		eggGroups: ["Field"],
	},
	flareon: {
		species: "Flareon",
		prevo: "eevee",
		evoType: "useItem",
		evoItem: "Fire Stone",
		eggGroups: ["Field"],
	},
	porygon: {
		species: "Porygon",
		eggGroups: ["Mineral"],
	},
	omanyte: {
		species: "Omanyte",
		eggGroups: ["Water 1", "Water 3"],
	},
	omastar: {
		species: "Omastar",
		prevo: "omanyte",
		eggGroups: ["Water 1", "Water 3"],
	},
	kabuto: {
		species: "Kabuto",
		eggGroups: ["Water 1", "Water 3"],
	},
	kabutops: {
		species: "Kabutops",
		prevo: "kabuto",
		eggGroups: ["Water 1", "Water 3"],
	},
	aerodactyl: {
		species: "Aerodactyl",
		eggGroups: ["Flying"],
	},
	aerodactylmega: {
		species: "Aerodactyl-Mega",
		baseSpecies: "Aerodactyl",
		eggGroups: ["Flying"],
	},
	snorlax: {
		species: "Snorlax",
		prevo: "munchlax",
		evoType: "levelFriendship",
		eggGroups: ["Monster"],
		canHatch: true,
	},
	snorlaxgmax: {
		species: "Snorlax-Gmax",
		baseSpecies: "Snorlax",
		eggGroups: ["Monster"],
	},
	articuno: {
		species: "Articuno",
		eggGroups: ["Undiscovered"],
	},
	zapdos: {
		species: "Zapdos",
		eggGroups: ["Undiscovered"],
	},
	moltres: {
		species: "Moltres",
		eggGroups: ["Undiscovered"],
	},
	dratini: {
		species: "Dratini",
		eggGroups: ["Water 1", "Dragon"],
	},
	dragonair: {
		species: "Dragonair",
		prevo: "dratini",
		eggGroups: ["Water 1", "Dragon"],
	},
	dragonite: {
		species: "Dragonite",
		prevo: "dragonair",
		eggGroups: ["Water 1", "Dragon"],
	},
	mewtwo: {
		species: "Mewtwo",
		eggGroups: ["Undiscovered"],
	},
	mewtwomegax: {
		species: "Mewtwo-Mega-X",
		baseSpecies: "Mewtwo",
		eggGroups: ["Undiscovered"],
	},
	mewtwomegay: {
		species: "Mewtwo-Mega-Y",
		baseSpecies: "Mewtwo",
		eggGroups: ["Undiscovered"],
	},
	mew: {
		species: "Mew",
		eggGroups: ["Undiscovered"],
	},
	chikorita: {
		species: "Chikorita",
		eggGroups: ["Monster", "Grass"],
	},
	bayleef: {
		species: "Bayleef",
		prevo: "chikorita",
		eggGroups: ["Monster", "Grass"],
	},
	meganium: {
		species: "Meganium",
		prevo: "bayleef",
		eggGroups: ["Monster", "Grass"],
	},
	cyndaquil: {
		species: "Cyndaquil",
		eggGroups: ["Field"],
	},
	quilava: {
		species: "Quilava",
		prevo: "cyndaquil",
		eggGroups: ["Field"],
	},
	typhlosion: {
		species: "Typhlosion",
		prevo: "quilava",
		eggGroups: ["Field"],
	},
	totodile: {
		species: "Totodile",
		eggGroups: ["Monster", "Water 1"],
	},
	croconaw: {
		species: "Croconaw",
		prevo: "totodile",
		eggGroups: ["Monster", "Water 1"],
	},
	feraligatr: {
		species: "Feraligatr",
		prevo: "croconaw",
		eggGroups: ["Monster", "Water 1"],
	},
	sentret: {
		species: "Sentret",
		eggGroups: ["Field"],
	},
	furret: {
		species: "Furret",
		prevo: "sentret",
		eggGroups: ["Field"],
	},
	hoothoot: {
		species: "Hoothoot",
		eggGroups: ["Flying"],
	},
	noctowl: {
		species: "Noctowl",
		prevo: "hoothoot",
		eggGroups: ["Flying"],
	},
	ledyba: {
		species: "Ledyba",
		eggGroups: ["Bug"],
	},
	ledian: {
		species: "Ledian",
		prevo: "ledyba",
		eggGroups: ["Bug"],
	},
	spinarak: {
		species: "Spinarak",
		eggGroups: ["Bug"],
	},
	ariados: {
		species: "Ariados",
		prevo: "spinarak",
		eggGroups: ["Bug"],
	},
	crobat: {
		species: "Crobat",
		prevo: "golbat",
		evoType: "levelFriendship",
		eggGroups: ["Flying"],
	},
	chinchou: {
		species: "Chinchou",
		eggGroups: ["Water 2"],
	},
	lanturn: {
		species: "Lanturn",
		prevo: "chinchou",
		eggGroups: ["Water 2"],
	},
	pichu: {
		species: "Pichu",
		eggGroups: ["Undiscovered"],
		canHatch: true,
	},
	pichuspikyeared: {
		species: "Pichu-Spiky-eared",
		baseSpecies: "Pichu",
		eggGroups: ["Undiscovered"],
	},
	cleffa: {
		species: "Cleffa",
		eggGroups: ["Undiscovered"],
		canHatch: true,
	},
	igglybuff: {
		species: "Igglybuff",
		eggGroups: ["Undiscovered"],
		canHatch: true,
	},
	togepi: {
		species: "Togepi",
		eggGroups: ["Undiscovered"],
		canHatch: true,
	},
	togetic: {
		species: "Togetic",
		prevo: "togepi",
		evoType: "levelFriendship",
		eggGroups: ["Flying", "Fairy"],
	},
	natu: {
		species: "Natu",
		eggGroups: ["Flying"],
	},
	xatu: {
		species: "Xatu",
		prevo: "natu",
		eggGroups: ["Flying"],
	},
	mareep: {
		species: "Mareep",
		eggGroups: ["Monster", "Field"],
	},
	flaaffy: {
		species: "Flaaffy",
		prevo: "mareep",
		eggGroups: ["Monster", "Field"],
	},
	ampharos: {
		species: "Ampharos",
		prevo: "flaaffy",
		eggGroups: ["Monster", "Field"],
	},
	ampharosmega: {
		species: "Ampharos-Mega",
		baseSpecies: "Ampharos",
		eggGroups: ["Monster", "Field"],
	},
	bellossom: {
		species: "Bellossom",
		prevo: "gloom",
		evoType: "useItem",
		evoItem: "Sun Stone",
		eggGroups: ["Grass"],
	},
	marill: {
		species: "Marill",
		prevo: "azurill",
		evoType: "levelFriendship",
		eggGroups: ["Water 1", "Fairy"],
		canHatch: true,
	},
	azumarill: {
		species: "Azumarill",
		prevo: "marill",
		eggGroups: ["Water 1", "Fairy"],
	},
	sudowoodo: {
		species: "Sudowoodo",
		prevo: "bonsly",
		evoType: "levelMove",
		evoMove: "Mimic",
		eggGroups: ["Mineral"],
		canHatch: true,
	},
	politoed: {
		species: "Politoed",
		prevo: "poliwhirl",
		evoType: "trade",
		eggGroups: ["Water 1"],
	},
	hoppip: {
		species: "Hoppip",
		eggGroups: ["Fairy", "Grass"],
	},
	skiploom: {
		species: "Skiploom",
		prevo: "hoppip",
		eggGroups: ["Fairy", "Grass"],
	},
	jumpluff: {
		species: "Jumpluff",
		prevo: "skiploom",
		eggGroups: ["Fairy", "Grass"],
	},
	aipom: {
		species: "Aipom",
		eggGroups: ["Field"],
	},
	sunkern: {
		species: "Sunkern",
		eggGroups: ["Grass"],
	},
	sunflora: {
		species: "Sunflora",
		prevo: "sunkern",
		evoType: "useItem",
		evoItem: "Sun Stone",
		eggGroups: ["Grass"],
	},
	yanma: {
		species: "Yanma",
		eggGroups: ["Bug"],
	},
	wooper: {
		species: "Wooper",
		eggGroups: ["Water 1", "Field"],
	},
	quagsire: {
		species: "Quagsire",
		prevo: "wooper",
		eggGroups: ["Water 1", "Field"],
	},
	espeon: {
		species: "Espeon",
		prevo: "eevee",
		evoType: "levelFriendship",
		evoCondition: "during the day",
		eggGroups: ["Field"],
	},
	umbreon: {
		species: "Umbreon",
		prevo: "eevee",
		evoType: "levelFriendship",
		evoCondition: "at night",
		eggGroups: ["Field"],
	},
	murkrow: {
		species: "Murkrow",
		eggGroups: ["Flying"],
	},
	slowking: {
		species: "Slowking",
		prevo: "slowpoke",
		evoType: "trade",
		eggGroups: ["Monster", "Water 1"],
	},
	misdreavus: {
		species: "Misdreavus",
		eggGroups: ["Amorphous"],
	},
	unown: {
		species: "Unown",
		baseForme: "A",
		eggGroups: ["Undiscovered"],
		otherForms: ["unownb", "unownc", "unownd", "unowne", "unownf", "unowng", "unownh", "unowni", "unownj", "unownk", "unownl", "unownm", "unownn", "unowno", "unownp", "unownq", "unownr", "unowns", "unownt", "unownu", "unownv", "unownw", "unownx", "unowny", "unownz", "unownexclamation", "unownquestion"],
	},
	wobbuffet: {
		species: "Wobbuffet",
		prevo: "wynaut",
		eggGroups: ["Amorphous"],
	},
	girafarig: {
		species: "Girafarig",
		eggGroups: ["Field"],
	},
	pineco: {
		species: "Pineco",
		eggGroups: ["Bug"],
	},
	forretress: {
		species: "Forretress",
		prevo: "pineco",
		eggGroups: ["Bug"],
	},
	dunsparce: {
		species: "Dunsparce",
		eggGroups: ["Field"],
	},
	gligar: {
		species: "Gligar",
		eggGroups: ["Bug"],
	},
	steelix: {
		species: "Steelix",
		prevo: "onix",
		evoType: "trade",
		eggGroups: ["Mineral"],
	},
	steelixmega: {
		species: "Steelix-Mega",
		baseSpecies: "Steelix",
		eggGroups: ["Mineral"],
	},
	snubbull: {
		species: "Snubbull",
		eggGroups: ["Field", "Fairy"],
	},
	granbull: {
		species: "Granbull",
		prevo: "snubbull",
		eggGroups: ["Field", "Fairy"],
	},
	qwilfish: {
		species: "Qwilfish",
		eggGroups: ["Water 2"],
	},
	scizor: {
		species: "Scizor",
		prevo: "scyther",
		evoType: "trade",
		eggGroups: ["Bug"],
	},
	scizormega: {
		species: "Scizor-Mega",
		baseSpecies: "Scizor",
		eggGroups: ["Bug"],
	},
	shuckle: {
		species: "Shuckle",
		eggGroups: ["Bug"],
	},
	heracross: {
		species: "Heracross",
		eggGroups: ["Bug"],
	},
	heracrossmega: {
		species: "Heracross-Mega",
		baseSpecies: "Heracross",
		eggGroups: ["Bug"],
	},
	sneasel: {
		species: "Sneasel",
		eggGroups: ["Field"],
	},
	teddiursa: {
		species: "Teddiursa",
		eggGroups: ["Field"],
	},
	ursaring: {
		species: "Ursaring",
		prevo: "teddiursa",
		eggGroups: ["Field"],
	},
	slugma: {
		species: "Slugma",
		eggGroups: ["Amorphous"],
	},
	magcargo: {
		species: "Magcargo",
		prevo: "slugma",
		eggGroups: ["Amorphous"],
	},
	swinub: {
		species: "Swinub",
		eggGroups: ["Field"],
	},
	piloswine: {
		species: "Piloswine",
		prevo: "swinub",
		eggGroups: ["Field"],
	},
	corsola: {
		species: "Corsola",
		eggGroups: ["Water 1", "Water 3"],
	},
	corsolagalar: {
		species: "Corsola-Galar",
		eggGroups: ["Water 1", "Water 3"],
	},
	remoraid: {
		species: "Remoraid",
		eggGroups: ["Water 1", "Water 2"],
	},
	octillery: {
		species: "Octillery",
		prevo: "remoraid",
		eggGroups: ["Water 1", "Water 2"],
	},
	delibird: {
		species: "Delibird",
		eggGroups: ["Water 1", "Field"],
	},
	mantine: {
		species: "Mantine",
		prevo: "mantyke",
		evoType: "levelExtra",
		evoCondition: "with a Remoraid in party",
		eggGroups: ["Water 1"],
		canHatch: true,
	},
	skarmory: {
		species: "Skarmory",
		eggGroups: ["Flying"],
	},
	houndour: {
		species: "Houndour",
		eggGroups: ["Field"],
	},
	houndoom: {
		species: "Houndoom",
		prevo: "houndour",
		eggGroups: ["Field"],
	},
	houndoommega: {
		species: "Houndoom-Mega",
		baseSpecies: "Houndoom",
		eggGroups: ["Field"],
	},
	kingdra: {
		species: "Kingdra",
		prevo: "seadra",
		evoType: "trade",
		eggGroups: ["Water 1", "Dragon"],
	},
	phanpy: {
		species: "Phanpy",
		eggGroups: ["Field"],
	},
	donphan: {
		species: "Donphan",
		prevo: "phanpy",
		eggGroups: ["Field"],
	},
	porygon2: {
		species: "Porygon2",
		prevo: "porygon",
		evoType: "trade",
		eggGroups: ["Mineral"],
	},
	stantler: {
		species: "Stantler",
		eggGroups: ["Field"],
	},
	smeargle: {
		species: "Smeargle",
		eggGroups: ["Field"],
	},
	tyrogue: {
		species: "Tyrogue",
		eggGroups: ["Undiscovered"],
		canHatch: true,
	},
	hitmontop: {
		species: "Hitmontop",
		prevo: "tyrogue",
		eggGroups: ["Human-Like"],
	},
	smoochum: {
		species: "Smoochum",
		eggGroups: ["Undiscovered"],
		canHatch: true,
	},
	elekid: {
		species: "Elekid",
		eggGroups: ["Undiscovered"],
		canHatch: true,
	},
	magby: {
		species: "Magby",
		eggGroups: ["Undiscovered"],
		canHatch: true,
	},
	miltank: {
		species: "Miltank",
		eggGroups: ["Field"],
	},
	blissey: {
		species: "Blissey",
		prevo: "chansey",
		evoType: "levelFriendship",
		eggGroups: ["Fairy"],
	},
	raikou: {
		species: "Raikou",
		eggGroups: ["Undiscovered"],
	},
	entei: {
		species: "Entei",
		eggGroups: ["Undiscovered"],
	},
	suicune: {
		species: "Suicune",
		eggGroups: ["Undiscovered"],
	},
	larvitar: {
		species: "Larvitar",
		eggGroups: ["Monster"],
	},
	pupitar: {
		species: "Pupitar",
		prevo: "larvitar",
		eggGroups: ["Monster"],
	},
	tyranitar: {
		species: "Tyranitar",
		prevo: "pupitar",
		eggGroups: ["Monster"],
	},
	tyranitarmega: {
		species: "Tyranitar-Mega",
		baseSpecies: "Tyranitar",
		eggGroups: ["Monster"],
	},
	lugia: {
		species: "Lugia",
		eggGroups: ["Undiscovered"],
	},
	hooh: {
		species: "Ho-Oh",
		eggGroups: ["Undiscovered"],
	},
	celebi: {
		species: "Celebi",
		eggGroups: ["Undiscovered"],
	},
	treecko: {
		species: "Treecko",
		eggGroups: ["Monster", "Dragon"],
	},
	grovyle: {
		species: "Grovyle",
		prevo: "treecko",
		eggGroups: ["Monster", "Dragon"],
	},
	sceptile: {
		species: "Sceptile",
		prevo: "grovyle",
		eggGroups: ["Monster", "Dragon"],
	},
	sceptilemega: {
		species: "Sceptile-Mega",
		baseSpecies: "Sceptile",
		eggGroups: ["Monster", "Dragon"],
	},
	torchic: {
		species: "Torchic",
		eggGroups: ["Field"],
	},
	combusken: {
		species: "Combusken",
		prevo: "torchic",
		eggGroups: ["Field"],
	},
	blaziken: {
		species: "Blaziken",
		prevo: "combusken",
		eggGroups: ["Field"],
	},
	blazikenmega: {
		species: "Blaziken-Mega",
		baseSpecies: "Blaziken",
		eggGroups: ["Field"],
	},
	mudkip: {
		species: "Mudkip",
		eggGroups: ["Monster", "Water 1"],
	},
	marshtomp: {
		species: "Marshtomp",
		prevo: "mudkip",
		eggGroups: ["Monster", "Water 1"],
	},
	swampert: {
		species: "Swampert",
		prevo: "marshtomp",
		eggGroups: ["Monster", "Water 1"],
	},
	swampertmega: {
		species: "Swampert-Mega",
		baseSpecies: "Swampert",
		eggGroups: ["Monster", "Water 1"],
	},
	poochyena: {
		species: "Poochyena",
		eggGroups: ["Field"],
	},
	mightyena: {
		species: "Mightyena",
		prevo: "poochyena",
		eggGroups: ["Field"],
	},
	zigzagoon: {
		species: "Zigzagoon",
		eggGroups: ["Field"],
	},
	zigzagoongalar: {
		species: "Zigzagoon-Galar",
		eggGroups: ["Field"],
	},
	linoone: {
		species: "Linoone",
		prevo: "zigzagoon",
		eggGroups: ["Field"],
	},
	linoonegalar: {
		species: "Linoone-Galar",
		prevo: "zigzagoongalar",
		eggGroups: ["Field"],
	},
	wurmple: {
		species: "Wurmple",
		eggGroups: ["Bug"],
	},
	silcoon: {
		species: "Silcoon",
		prevo: "wurmple",
		eggGroups: ["Bug"],
	},
	beautifly: {
		species: "Beautifly",
		prevo: "silcoon",
		eggGroups: ["Bug"],
	},
	cascoon: {
		species: "Cascoon",
		prevo: "wurmple",
		eggGroups: ["Bug"],
	},
	dustox: {
		species: "Dustox",
		prevo: "cascoon",
		eggGroups: ["Bug"],
	},
	lotad: {
		species: "Lotad",
		eggGroups: ["Water 1", "Grass"],
	},
	lombre: {
		species: "Lombre",
		prevo: "lotad",
		eggGroups: ["Water 1", "Grass"],
	},
	ludicolo: {
		species: "Ludicolo",
		prevo: "lombre",
		evoType: "useItem",
		evoItem: "Water Stone",
		eggGroups: ["Water 1", "Grass"],
	},
	seedot: {
		species: "Seedot",
		eggGroups: ["Field", "Grass"],
	},
	nuzleaf: {
		species: "Nuzleaf",
		prevo: "seedot",
		eggGroups: ["Field", "Grass"],
	},
	shiftry: {
		species: "Shiftry",
		prevo: "nuzleaf",
		evoType: "useItem",
		evoItem: "Leaf Stone",
		eggGroups: ["Field", "Grass"],
	},
	taillow: {
		species: "Taillow",
		eggGroups: ["Flying"],
	},
	swellow: {
		species: "Swellow",
		prevo: "taillow",
		eggGroups: ["Flying"],
	},
	wingull: {
		species: "Wingull",
		eggGroups: ["Water 1", "Flying"],
	},
	pelipper: {
		species: "Pelipper",
		prevo: "wingull",
		eggGroups: ["Water 1", "Flying"],
	},
	ralts: {
		species: "Ralts",
		eggGroups: ["Amorphous"],
	},
	kirlia: {
		species: "Kirlia",
		prevo: "ralts",
		eggGroups: ["Amorphous"],
	},
	gardevoir: {
		species: "Gardevoir",
		prevo: "kirlia",
		eggGroups: ["Amorphous"],
	},
	gardevoirmega: {
		species: "Gardevoir-Mega",
		baseSpecies: "Gardevoir",
		eggGroups: ["Amorphous"],
	},
	surskit: {
		species: "Surskit",
		eggGroups: ["Water 1", "Bug"],
	},
	masquerain: {
		species: "Masquerain",
		prevo: "surskit",
		eggGroups: ["Water 1", "Bug"],
	},
	shroomish: {
		species: "Shroomish",
		eggGroups: ["Fairy", "Grass"],
	},
	breloom: {
		species: "Breloom",
		prevo: "shroomish",
		eggGroups: ["Fairy", "Grass"],
	},
	slakoth: {
		species: "Slakoth",
		eggGroups: ["Field"],
	},
	vigoroth: {
		species: "Vigoroth",
		prevo: "slakoth",
		eggGroups: ["Field"],
	},
	slaking: {
		species: "Slaking",
		prevo: "vigoroth",
		eggGroups: ["Field"],
	},
	nincada: {
		species: "Nincada",
		eggGroups: ["Bug"],
	},
	ninjask: {
		species: "Ninjask",
		prevo: "nincada",
		eggGroups: ["Bug"],
	},
	shedinja: {
		species: "Shedinja",
		maxHP: 1,
		prevo: "nincada",
		eggGroups: ["Mineral"],
	},
	whismur: {
		species: "Whismur",
		eggGroups: ["Monster", "Field"],
	},
	loudred: {
		species: "Loudred",
		prevo: "whismur",
		eggGroups: ["Monster", "Field"],
	},
	exploud: {
		species: "Exploud",
		prevo: "loudred",
		eggGroups: ["Monster", "Field"],
	},
	makuhita: {
		species: "Makuhita",
		eggGroups: ["Human-Like"],
	},
	hariyama: {
		species: "Hariyama",
		prevo: "makuhita",
		eggGroups: ["Human-Like"],
	},
	azurill: {
		species: "Azurill",
		eggGroups: ["Undiscovered"],
		canHatch: true,
	},
	nosepass: {
		species: "Nosepass",
		eggGroups: ["Mineral"],
	},
	skitty: {
		species: "Skitty",
		eggGroups: ["Field", "Fairy"],
	},
	delcatty: {
		species: "Delcatty",
		prevo: "skitty",
		evoType: "useItem",
		evoItem: "Moon Stone",
		eggGroups: ["Field", "Fairy"],
	},
	sableye: {
		species: "Sableye",
		eggGroups: ["Human-Like"],
	},
	sableyemega: {
		species: "Sableye-Mega",
		baseSpecies: "Sableye",
		eggGroups: ["Human-Like"],
	},
	mawile: {
		species: "Mawile",
		eggGroups: ["Field", "Fairy"],
	},
	mawilemega: {
		species: "Mawile-Mega",
		baseSpecies: "Mawile",
		eggGroups: ["Field", "Fairy"],
	},
	aron: {
		species: "Aron",
		eggGroups: ["Monster"],
	},
	lairon: {
		species: "Lairon",
		prevo: "aron",
		eggGroups: ["Monster"],
	},
	aggron: {
		species: "Aggron",
		prevo: "lairon",
		eggGroups: ["Monster"],
	},
	aggronmega: {
		species: "Aggron-Mega",
		baseSpecies: "Aggron",
		eggGroups: ["Monster"],
	},
	meditite: {
		species: "Meditite",
		eggGroups: ["Human-Like"],
	},
	medicham: {
		species: "Medicham",
		prevo: "meditite",
		eggGroups: ["Human-Like"],
	},
	medichammega: {
		species: "Medicham-Mega",
		baseSpecies: "Medicham",
		eggGroups: ["Human-Like"],
	},
	electrike: {
		species: "Electrike",
		eggGroups: ["Field"],
	},
	manectric: {
		species: "Manectric",
		prevo: "electrike",
		eggGroups: ["Field"],
	},
	manectricmega: {
		species: "Manectric-Mega",
		baseSpecies: "Manectric",
		eggGroups: ["Field"],
	},
	plusle: {
		species: "Plusle",
		eggGroups: ["Fairy"],
	},
	minun: {
		species: "Minun",
		eggGroups: ["Fairy"],
	},
	volbeat: {
		species: "Volbeat",
		eggGroups: ["Bug", "Human-Like"],
	},
	illumise: {
		species: "Illumise",
		eggGroups: ["Bug", "Human-Like"],
	},
	roselia: {
		species: "Roselia",
		prevo: "budew",
		evoType: "levelFriendship",
		evoCondition: "during the day",
		eggGroups: ["Fairy", "Grass"],
		canHatch: true,
	},
	gulpin: {
		species: "Gulpin",
		eggGroups: ["Amorphous"],
	},
	swalot: {
		species: "Swalot",
		prevo: "gulpin",
		eggGroups: ["Amorphous"],
	},
	carvanha: {
		species: "Carvanha",
		eggGroups: ["Water 2"],
	},
	sharpedo: {
		species: "Sharpedo",
		prevo: "carvanha",
		eggGroups: ["Water 2"],
	},
	sharpedomega: {
		species: "Sharpedo-Mega",
		baseSpecies: "Sharpedo",
		eggGroups: ["Water 2"],
	},
	wailmer: {
		species: "Wailmer",
		eggGroups: ["Field", "Water 2"],
	},
	wailord: {
		species: "Wailord",
		prevo: "wailmer",
		eggGroups: ["Field", "Water 2"],
	},
	numel: {
		species: "Numel",
		eggGroups: ["Field"],
	},
	camerupt: {
		species: "Camerupt",
		prevo: "numel",
		eggGroups: ["Field"],
	},
	cameruptmega: {
		species: "Camerupt-Mega",
		baseSpecies: "Camerupt",
		eggGroups: ["Field"],
	},
	torkoal: {
		species: "Torkoal",
		eggGroups: ["Field"],
	},
	spoink: {
		species: "Spoink",
		eggGroups: ["Field"],
	},
	grumpig: {
		species: "Grumpig",
		prevo: "spoink",
		eggGroups: ["Field"],
	},
	spinda: {
		species: "Spinda",
		eggGroups: ["Field", "Human-Like"],
	},
	trapinch: {
		species: "Trapinch",
		eggGroups: ["Bug"],
	},
	vibrava: {
		species: "Vibrava",
		prevo: "trapinch",
		eggGroups: ["Bug"],
	},
	flygon: {
		species: "Flygon",
		prevo: "vibrava",
		eggGroups: ["Bug"],
	},
	cacnea: {
		species: "Cacnea",
		eggGroups: ["Grass", "Human-Like"],
	},
	cacturne: {
		species: "Cacturne",
		prevo: "cacnea",
		eggGroups: ["Grass", "Human-Like"],
	},
	swablu: {
		species: "Swablu",
		eggGroups: ["Flying", "Dragon"],
	},
	altaria: {
		species: "Altaria",
		prevo: "swablu",
		eggGroups: ["Flying", "Dragon"],
	},
	altariamega: {
		species: "Altaria-Mega",
		baseSpecies: "Altaria",
		eggGroups: ["Flying", "Dragon"],
	},
	zangoose: {
		species: "Zangoose",
		eggGroups: ["Field"],
	},
	seviper: {
		species: "Seviper",
		eggGroups: ["Field", "Dragon"],
	},
	lunatone: {
		species: "Lunatone",
		eggGroups: ["Mineral"],
	},
	solrock: {
		species: "Solrock",
		eggGroups: ["Mineral"],
	},
	barboach: {
		species: "Barboach",
		eggGroups: ["Water 2"],
	},
	whiscash: {
		species: "Whiscash",
		prevo: "barboach",
		eggGroups: ["Water 2"],
	},
	corphish: {
		species: "Corphish",
		eggGroups: ["Water 1", "Water 3"],
	},
	crawdaunt: {
		species: "Crawdaunt",
		prevo: "corphish",
		eggGroups: ["Water 1", "Water 3"],
	},
	baltoy: {
		species: "Baltoy",
		eggGroups: ["Mineral"],
	},
	claydol: {
		species: "Claydol",
		prevo: "baltoy",
		eggGroups: ["Mineral"],
	},
	lileep: {
		species: "Lileep",
		eggGroups: ["Water 3"],
	},
	cradily: {
		species: "Cradily",
		prevo: "lileep",
		eggGroups: ["Water 3"],
	},
	anorith: {
		species: "Anorith",
		eggGroups: ["Water 3"],
	},
	armaldo: {
		species: "Armaldo",
		prevo: "anorith",
		eggGroups: ["Water 3"],
	},
	feebas: {
		species: "Feebas",
		eggGroups: ["Water 1", "Dragon"],
	},
	milotic: {
		species: "Milotic",
		prevo: "feebas",
		evoType: "trade",
		eggGroups: ["Water 1", "Dragon"],
	},
	castform: {
		species: "Castform",
		eggGroups: ["Fairy", "Amorphous"],
	},
	castformsunny: {
		species: "Castform-Sunny",
		baseSpecies: "Castform",
		eggGroups: ["Fairy", "Amorphous"],
	},
	castformrainy: {
		species: "Castform-Rainy",
		baseSpecies: "Castform",
		eggGroups: ["Fairy", "Amorphous"],
	},
	castformsnowy: {
		species: "Castform-Snowy",
		baseSpecies: "Castform",
		eggGroups: ["Fairy", "Amorphous"],
	},
	kecleon: {
		species: "Kecleon",
		eggGroups: ["Field"],
	},
	shuppet: {
		species: "Shuppet",
		eggGroups: ["Amorphous"],
	},
	banette: {
		species: "Banette",
		prevo: "shuppet",
		eggGroups: ["Amorphous"],
	},
	banettemega: {
		species: "Banette-Mega",
		baseSpecies: "Banette",
		eggGroups: ["Amorphous"],
	},
	duskull: {
		species: "Duskull",
		eggGroups: ["Amorphous"],
	},
	dusclops: {
		species: "Dusclops",
		prevo: "duskull",
		eggGroups: ["Amorphous"],
	},
	tropius: {
		species: "Tropius",
		eggGroups: ["Monster", "Grass"],
	},
	chimecho: {
		species: "Chimecho",
		prevo: "chingling",
		evoType: "levelFriendship",
		evoCondition: "at night",
		eggGroups: ["Amorphous"],
		canHatch: true,
	},
	absol: {
		species: "Absol",
		eggGroups: ["Field"],
	},
	absolmega: {
		species: "Absol-Mega",
		baseSpecies: "Absol",
		eggGroups: ["Field"],
	},
	wynaut: {
		species: "Wynaut",
		eggGroups: ["Undiscovered"],
		canHatch: true,
	},
	snorunt: {
		species: "Snorunt",
		eggGroups: ["Fairy", "Mineral"],
	},
	glalie: {
		species: "Glalie",
		prevo: "snorunt",
		eggGroups: ["Fairy", "Mineral"],
	},
	glaliemega: {
		species: "Glalie-Mega",
		baseSpecies: "Glalie",
		eggGroups: ["Fairy", "Mineral"],
	},
	spheal: {
		species: "Spheal",
		eggGroups: ["Water 1", "Field"],
	},
	sealeo: {
		species: "Sealeo",
		prevo: "spheal",
		eggGroups: ["Water 1", "Field"],
	},
	walrein: {
		species: "Walrein",
		prevo: "sealeo",
		eggGroups: ["Water 1", "Field"],
	},
	clamperl: {
		species: "Clamperl",
		eggGroups: ["Water 1"],
	},
	huntail: {
		species: "Huntail",
		prevo: "clamperl",
		evoType: "trade",
		eggGroups: ["Water 1"],
	},
	gorebyss: {
		species: "Gorebyss",
		prevo: "clamperl",
		evoType: "trade",
		eggGroups: ["Water 1"],
	},
	relicanth: {
		species: "Relicanth",
		eggGroups: ["Water 1", "Water 2"],
	},
	luvdisc: {
		species: "Luvdisc",
		eggGroups: ["Water 2"],
	},
	bagon: {
		species: "Bagon",
		eggGroups: ["Dragon"],
	},
	shelgon: {
		species: "Shelgon",
		prevo: "bagon",
		eggGroups: ["Dragon"],
	},
	salamence: {
		species: "Salamence",
		prevo: "shelgon",
		eggGroups: ["Dragon"],
	},
	salamencemega: {
		species: "Salamence-Mega",
		baseSpecies: "Salamence",
		eggGroups: ["Dragon"],
	},
	beldum: {
		species: "Beldum",
		eggGroups: ["Mineral"],
	},
	metang: {
		species: "Metang",
		prevo: "beldum",
		eggGroups: ["Mineral"],
	},
	metagross: {
		species: "Metagross",
		prevo: "metang",
		eggGroups: ["Mineral"],
	},
	metagrossmega: {
		species: "Metagross-Mega",
		baseSpecies: "Metagross",
		eggGroups: ["Mineral"],
	},
	regirock: {
		species: "Regirock",
		eggGroups: ["Undiscovered"],
	},
	regice: {
		species: "Regice",
		eggGroups: ["Undiscovered"],
	},
	registeel: {
		species: "Registeel",
		eggGroups: ["Undiscovered"],
	},
	latias: {
		species: "Latias",
		eggGroups: ["Undiscovered"],
	},
	latiasmega: {
		species: "Latias-Mega",
		baseSpecies: "Latias",
		eggGroups: ["Undiscovered"],
	},
	latios: {
		species: "Latios",
		eggGroups: ["Undiscovered"],
	},
	latiosmega: {
		species: "Latios-Mega",
		baseSpecies: "Latios",
		eggGroups: ["Undiscovered"],
	},
	kyogre: {
		species: "Kyogre",
		eggGroups: ["Undiscovered"],
	},
	kyogreprimal: {
		species: "Kyogre-Primal",
		baseSpecies: "Kyogre",
		eggGroups: ["Undiscovered"],
	},
	groudon: {
		species: "Groudon",
		eggGroups: ["Undiscovered"],
	},
	groudonprimal: {
		species: "Groudon-Primal",
		baseSpecies: "Groudon",
		eggGroups: ["Undiscovered"],
	},
	rayquaza: {
		species: "Rayquaza",
		eggGroups: ["Undiscovered"],
	},
	rayquazamega: {
		species: "Rayquaza-Mega",
		baseSpecies: "Rayquaza",
		eggGroups: ["Undiscovered"],
	},
	jirachi: {
		species: "Jirachi",
		eggGroups: ["Undiscovered"],
	},
	deoxys: {
		species: "Deoxys",
		baseForme: "Normal",
		eggGroups: ["Undiscovered"],
	},
	deoxysattack: {
		species: "Deoxys-Attack",
		baseSpecies: "Deoxys",
		eggGroups: ["Undiscovered"],
	},
	deoxysdefense: {
		species: "Deoxys-Defense",
		baseSpecies: "Deoxys",
		eggGroups: ["Undiscovered"],
	},
	deoxysspeed: {
		species: "Deoxys-Speed",
		baseSpecies: "Deoxys",
		eggGroups: ["Undiscovered"],
	},
	turtwig: {
		species: "Turtwig",
		eggGroups: ["Monster", "Grass"],
	},
	grotle: {
		species: "Grotle",
		prevo: "turtwig",
		eggGroups: ["Monster", "Grass"],
	},
	torterra: {
		species: "Torterra",
		prevo: "grotle",
		eggGroups: ["Monster", "Grass"],
	},
	chimchar: {
		species: "Chimchar",
		eggGroups: ["Field", "Human-Like"],
	},
	monferno: {
		species: "Monferno",
		prevo: "chimchar",
		eggGroups: ["Field", "Human-Like"],
	},
	infernape: {
		species: "Infernape",
		prevo: "monferno",
		eggGroups: ["Field", "Human-Like"],
	},
	piplup: {
		species: "Piplup",
		eggGroups: ["Water 1", "Field"],
	},
	prinplup: {
		species: "Prinplup",
		prevo: "piplup",
		eggGroups: ["Water 1", "Field"],
	},
	empoleon: {
		species: "Empoleon",
		prevo: "prinplup",
		eggGroups: ["Water 1", "Field"],
	},
	starly: {
		species: "Starly",
		eggGroups: ["Flying"],
	},
	staravia: {
		species: "Staravia",
		prevo: "starly",
		eggGroups: ["Flying"],
	},
	staraptor: {
		species: "Staraptor",
		prevo: "staravia",
		eggGroups: ["Flying"],
	},
	bidoof: {
		species: "Bidoof",
		eggGroups: ["Water 1", "Field"],
	},
	bibarel: {
		species: "Bibarel",
		prevo: "bidoof",
		eggGroups: ["Water 1", "Field"],
	},
	kricketot: {
		species: "Kricketot",
		eggGroups: ["Bug"],
	},
	kricketune: {
		species: "Kricketune",
		prevo: "kricketot",
		eggGroups: ["Bug"],
	},
	shinx: {
		species: "Shinx",
		eggGroups: ["Field"],
	},
	luxio: {
		species: "Luxio",
		prevo: "shinx",
		eggGroups: ["Field"],
	},
	luxray: {
		species: "Luxray",
		prevo: "luxio",
		eggGroups: ["Field"],
	},
	budew: {
		species: "Budew",
		eggGroups: ["Undiscovered"],
		canHatch: true,
	},
	roserade: {
		species: "Roserade",
		prevo: "roselia",
		evoType: "useItem",
		evoItem: "Shiny Stone",
		eggGroups: ["Fairy", "Grass"],
	},
	cranidos: {
		species: "Cranidos",
		eggGroups: ["Monster"],
	},
	rampardos: {
		species: "Rampardos",
		prevo: "cranidos",
		eggGroups: ["Monster"],
	},
	shieldon: {
		species: "Shieldon",
		eggGroups: ["Monster"],
	},
	bastiodon: {
		species: "Bastiodon",
		prevo: "shieldon",
		eggGroups: ["Monster"],
	},
	burmy: {
		species: "Burmy",
		baseForme: "Plant",
		eggGroups: ["Bug"],
		otherForms: ["burmysandy", "burmytrash"],
	},
	wormadam: {
		species: "Wormadam",
		baseForme: "Plant",
		prevo: "burmy",
		eggGroups: ["Bug"],
	},
	wormadamsandy: {
		species: "Wormadam-Sandy",
		baseSpecies: "Wormadam",
		prevo: "burmy",
		eggGroups: ["Bug"],
	},
	wormadamtrash: {
		species: "Wormadam-Trash",
		baseSpecies: "Wormadam",
		prevo: "burmy",
		eggGroups: ["Bug"],
	},
	mothim: {
		species: "Mothim",
		prevo: "burmy",
		eggGroups: ["Bug"],
	},
	combee: {
		species: "Combee",
		eggGroups: ["Bug"],
	},
	vespiquen: {
		species: "Vespiquen",
		prevo: "combee",
		eggGroups: ["Bug"],
	},
	pachirisu: {
		species: "Pachirisu",
		eggGroups: ["Field", "Fairy"],
	},
	buizel: {
		species: "Buizel",
		eggGroups: ["Water 1", "Field"],
	},
	floatzel: {
		species: "Floatzel",
		prevo: "buizel",
		eggGroups: ["Water 1", "Field"],
	},
	cherubi: {
		species: "Cherubi",
		eggGroups: ["Fairy", "Grass"],
	},
	cherrim: {
		species: "Cherrim",
		baseForme: "Overcast",
		prevo: "cherubi",
		eggGroups: ["Fairy", "Grass"],
	},
	cherrimsunshine: {
		species: "Cherrim-Sunshine",
		baseSpecies: "Cherrim",
		prevo: "cherubi",
		eggGroups: ["Fairy", "Grass"],
	},
	shellos: {
		species: "Shellos",
		baseForme: "West",
		eggGroups: ["Water 1", "Amorphous"],
		otherForms: ["shelloseast"],
	},
	gastrodon: {
		species: "Gastrodon",
		baseForme: "West",
		prevo: "shellos",
		eggGroups: ["Water 1", "Amorphous"],
		otherForms: ["gastrodoneast"],
	},
	ambipom: {
		species: "Ambipom",
		prevo: "aipom",
		evoType: "levelMove",
		evoMove: "Double Hit",
		eggGroups: ["Field"],
	},
	drifloon: {
		species: "Drifloon",
		eggGroups: ["Amorphous"],
	},
	drifblim: {
		species: "Drifblim",
		prevo: "drifloon",
		eggGroups: ["Amorphous"],
	},
	buneary: {
		species: "Buneary",
		eggGroups: ["Field", "Human-Like"],
	},
	lopunny: {
		species: "Lopunny",
		prevo: "buneary",
		evoType: "levelFriendship",
		eggGroups: ["Field", "Human-Like"],
	},
	lopunnymega: {
		species: "Lopunny-Mega",
		baseSpecies: "Lopunny",
		eggGroups: ["Field", "Human-Like"],
	},
	mismagius: {
		species: "Mismagius",
		prevo: "misdreavus",
		evoType: "useItem",
		evoItem: "Dusk Stone",
		eggGroups: ["Amorphous"],
	},
	honchkrow: {
		species: "Honchkrow",
		prevo: "murkrow",
		evoType: "useItem",
		evoItem: "Dusk Stone",
		eggGroups: ["Flying"],
	},
	glameow: {
		species: "Glameow",
		eggGroups: ["Field"],
	},
	purugly: {
		species: "Purugly",
		prevo: "glameow",
		eggGroups: ["Field"],
	},
	chingling: {
		species: "Chingling",
		eggGroups: ["Undiscovered"],
		canHatch: true,
	},
	stunky: {
		species: "Stunky",
		eggGroups: ["Field"],
	},
	skuntank: {
		species: "Skuntank",
		prevo: "stunky",
		eggGroups: ["Field"],
	},
	bronzor: {
		species: "Bronzor",
		eggGroups: ["Mineral"],
	},
	bronzong: {
		species: "Bronzong",
		prevo: "bronzor",
		eggGroups: ["Mineral"],
	},
	bonsly: {
		species: "Bonsly",
		eggGroups: ["Undiscovered"],
		canHatch: true,
	},
	mimejr: {
		species: "Mime Jr.",
		eggGroups: ["Undiscovered"],
		canHatch: true,
	},
	happiny: {
		species: "Happiny",
		eggGroups: ["Undiscovered"],
		canHatch: true,
	},
	chatot: {
		species: "Chatot",
		eggGroups: ["Flying"],
	},
	spiritomb: {
		species: "Spiritomb",
		eggGroups: ["Amorphous"],
	},
	gible: {
		species: "Gible",
		eggGroups: ["Monster", "Dragon"],
	},
	gabite: {
		species: "Gabite",
		prevo: "gible",
		eggGroups: ["Monster", "Dragon"],
	},
	garchomp: {
		species: "Garchomp",
		prevo: "gabite",
		eggGroups: ["Monster", "Dragon"],
	},
	garchompmega: {
		species: "Garchomp-Mega",
		baseSpecies: "Garchomp",
		eggGroups: ["Monster", "Dragon"],
	},
	munchlax: {
		species: "Munchlax",
		eggGroups: ["Undiscovered"],
		canHatch: true,
	},
	riolu: {
		species: "Riolu",
		eggGroups: ["Undiscovered"],
		canHatch: true,
	},
	lucario: {
		species: "Lucario",
		prevo: "riolu",
		evoType: "levelFriendship",
		evoCondition: "during the day",
		eggGroups: ["Field", "Human-Like"],
	},
	lucariomega: {
		species: "Lucario-Mega",
		baseSpecies: "Lucario",
		eggGroups: ["Field", "Human-Like"],
	},
	hippopotas: {
		species: "Hippopotas",
		eggGroups: ["Field"],
	},
	hippowdon: {
		species: "Hippowdon",
		prevo: "hippopotas",
		eggGroups: ["Field"],
	},
	skorupi: {
		species: "Skorupi",
		eggGroups: ["Bug", "Water 3"],
	},
	drapion: {
		species: "Drapion",
		prevo: "skorupi",
		eggGroups: ["Bug", "Water 3"],
	},
	croagunk: {
		species: "Croagunk",
		eggGroups: ["Human-Like"],
	},
	toxicroak: {
		species: "Toxicroak",
		prevo: "croagunk",
		eggGroups: ["Human-Like"],
	},
	carnivine: {
		species: "Carnivine",
		eggGroups: ["Grass"],
	},
	finneon: {
		species: "Finneon",
		eggGroups: ["Water 2"],
	},
	lumineon: {
		species: "Lumineon",
		prevo: "finneon",
		eggGroups: ["Water 2"],
	},
	mantyke: {
		species: "Mantyke",
		eggGroups: ["Undiscovered"],
		canHatch: true,
	},
	snover: {
		species: "Snover",
		eggGroups: ["Monster", "Grass"],
	},
	abomasnow: {
		species: "Abomasnow",
		prevo: "snover",
		eggGroups: ["Monster", "Grass"],
	},
	abomasnowmega: {
		species: "Abomasnow-Mega",
		baseSpecies: "Abomasnow",
		eggGroups: ["Monster", "Grass"],
	},
	weavile: {
		species: "Weavile",
		prevo: "sneasel",
		evoType: "levelHold",
		evoItem: "Razor Claw",
		eggGroups: ["Field"],
	},
	magnezone: {
		species: "Magnezone",
		prevo: "magneton",
		evoType: "levelExtra",
		evoCondition: "in a special magnetic field",
		eggGroups: ["Mineral"],
	},
	lickilicky: {
		species: "Lickilicky",
		prevo: "lickitung",
		evoType: "levelMove",
		evoMove: "Rollout",
		eggGroups: ["Monster"],
	},
	rhyperior: {
		species: "Rhyperior",
		prevo: "rhydon",
		evoType: "trade",
		eggGroups: ["Monster", "Field"],
	},
	tangrowth: {
		species: "Tangrowth",
		prevo: "tangela",
		evoType: "levelMove",
		evoMove: "Ancient Power",
		eggGroups: ["Grass"],
	},
	electivire: {
		species: "Electivire",
		prevo: "electabuzz",
		evoType: "trade",
		eggGroups: ["Human-Like"],
	},
	magmortar: {
		species: "Magmortar",
		prevo: "magmar",
		evoType: "trade",
		eggGroups: ["Human-Like"],
	},
	togekiss: {
		species: "Togekiss",
		prevo: "togetic",
		evoType: "useItem",
		evoItem: "Shiny Stone",
		eggGroups: ["Flying", "Fairy"],
	},
	yanmega: {
		species: "Yanmega",
		prevo: "yanma",
		evoType: "levelMove",
		evoMove: "Ancient Power",
		eggGroups: ["Bug"],
	},
	leafeon: {
		species: "Leafeon",
		prevo: "eevee",
		evoType: "useItem",
		evoItem: "Leaf Stone",
		eggGroups: ["Field"],
	},
	glaceon: {
		species: "Glaceon",
		prevo: "eevee",
		evoType: "useItem",
		evoItem: "Ice Stone",
		eggGroups: ["Field"],
	},
	gliscor: {
		species: "Gliscor",
		prevo: "gligar",
		evoType: "levelHold",
		evoItem: "Razor Fang",
		evoCondition: "at night",
		eggGroups: ["Bug"],
	},
	mamoswine: {
		species: "Mamoswine",
		prevo: "piloswine",
		evoType: "levelMove",
		evoMove: "Ancient Power",
		eggGroups: ["Field"],
	},
	porygonz: {
		species: "Porygon-Z",
		prevo: "porygon2",
		evoType: "trade",
		eggGroups: ["Mineral"],
	},
	gallade: {
		species: "Gallade",
		prevo: "kirlia",
		evoType: "useItem",
		evoItem: "Dawn Stone",
		eggGroups: ["Amorphous"],
	},
	gallademega: {
		species: "Gallade-Mega",
		baseSpecies: "Gallade",
		eggGroups: ["Amorphous"],
	},
	probopass: {
		species: "Probopass",
		prevo: "nosepass",
		evoType: "levelExtra",
		evoCondition: "near a special magnetic field",
		eggGroups: ["Mineral"],
	},
	dusknoir: {
		species: "Dusknoir",
		prevo: "dusclops",
		evoType: "trade",
		eggGroups: ["Amorphous"],
	},
	froslass: {
		species: "Froslass",
		prevo: "snorunt",
		evoType: "useItem",
		evoItem: "Dawn Stone",
		eggGroups: ["Fairy", "Mineral"],
	},
	rotom: {
		species: "Rotom",
		eggGroups: ["Amorphous"],
	},
	rotomheat: {
		species: "Rotom-Heat",
		baseSpecies: "Rotom",
		eggGroups: ["Amorphous"],
	},
	rotomwash: {
		species: "Rotom-Wash",
		baseSpecies: "Rotom",
		eggGroups: ["Amorphous"],
	},
	rotomfrost: {
		species: "Rotom-Frost",
		baseSpecies: "Rotom",
		eggGroups: ["Amorphous"],
	},
	rotomfan: {
		species: "Rotom-Fan",
		baseSpecies: "Rotom",
		eggGroups: ["Amorphous"],
	},
	rotommow: {
		species: "Rotom-Mow",
		baseSpecies: "Rotom",
		eggGroups: ["Amorphous"],
	},
	uxie: {
		species: "Uxie",
		eggGroups: ["Undiscovered"],
	},
	mesprit: {
		species: "Mesprit",
		eggGroups: ["Undiscovered"],
	},
	azelf: {
		species: "Azelf",
		eggGroups: ["Undiscovered"],
	},
	dialga: {
		species: "Dialga",
		eggGroups: ["Undiscovered"],
	},
	palkia: {
		species: "Palkia",
		eggGroups: ["Undiscovered"],
	},
	heatran: {
		species: "Heatran",
		eggGroups: ["Undiscovered"],
	},
	regigigas: {
		species: "Regigigas",
		eggGroups: ["Undiscovered"],
	},
	giratina: {
		species: "Giratina",
		baseForme: "Altered",
		eggGroups: ["Undiscovered"],
	},
	giratinaorigin: {
		species: "Giratina-Origin",
		baseSpecies: "Giratina",
		eggGroups: ["Undiscovered"],
	},
	cresselia: {
		species: "Cresselia",
		eggGroups: ["Undiscovered"],
	},
	phione: {
		species: "Phione",
		eggGroups: ["Water 1", "Fairy"],
	},
	manaphy: {
		species: "Manaphy",
		eggGroups: ["Water 1", "Fairy"],
		canHatch: false,
	},
	darkrai: {
		species: "Darkrai",
		eggGroups: ["Undiscovered"],
	},
	shaymin: {
		species: "Shaymin",
		baseForme: "Land",
		eggGroups: ["Undiscovered"],
	},
	shayminsky: {
		species: "Shaymin-Sky",
		baseSpecies: "Shaymin",
		eggGroups: ["Undiscovered"],
	},
	arceus: {
		species: "Arceus",
		baseForme: "Normal",
		eggGroups: ["Undiscovered"],
	},
	arceusbug: {
		species: "Arceus-Bug",
		baseSpecies: "Arceus",
		eggGroups: ["Undiscovered"],
	},
	arceusdark: {
		species: "Arceus-Dark",
		baseSpecies: "Arceus",
		eggGroups: ["Undiscovered"],
	},
	arceusdragon: {
		species: "Arceus-Dragon",
		baseSpecies: "Arceus",
		eggGroups: ["Undiscovered"],
	},
	arceuselectric: {
		species: "Arceus-Electric",
		baseSpecies: "Arceus",
		eggGroups: ["Undiscovered"],
	},
	arceusfairy: {
		species: "Arceus-Fairy",
		baseSpecies: "Arceus",
		eggGroups: ["Undiscovered"],
	},
	arceusfighting: {
		species: "Arceus-Fighting",
		baseSpecies: "Arceus",
		eggGroups: ["Undiscovered"],
	},
	arceusfire: {
		species: "Arceus-Fire",
		baseSpecies: "Arceus",
		eggGroups: ["Undiscovered"],
	},
	arceusflying: {
		species: "Arceus-Flying",
		baseSpecies: "Arceus",
		eggGroups: ["Undiscovered"],
	},
	arceusghost: {
		species: "Arceus-Ghost",
		baseSpecies: "Arceus",
		eggGroups: ["Undiscovered"],
	},
	arceusgrass: {
		species: "Arceus-Grass",
		baseSpecies: "Arceus",
		eggGroups: ["Undiscovered"],
	},
	arceusground: {
		species: "Arceus-Ground",
		baseSpecies: "Arceus",
		eggGroups: ["Undiscovered"],
	},
	arceusice: {
		species: "Arceus-Ice",
		baseSpecies: "Arceus",
		eggGroups: ["Undiscovered"],
	},
	arceuspoison: {
		species: "Arceus-Poison",
		baseSpecies: "Arceus",
		eggGroups: ["Undiscovered"],
	},
	arceuspsychic: {
		species: "Arceus-Psychic",
		baseSpecies: "Arceus",
		eggGroups: ["Undiscovered"],
	},
	arceusrock: {
		species: "Arceus-Rock",
		baseSpecies: "Arceus",
		eggGroups: ["Undiscovered"],
	},
	arceussteel: {
		species: "Arceus-Steel",
		baseSpecies: "Arceus",
		eggGroups: ["Undiscovered"],
	},
	arceuswater: {
		species: "Arceus-Water",
		baseSpecies: "Arceus",
		eggGroups: ["Undiscovered"],
	},
	victini: {
		species: "Victini",
		eggGroups: ["Undiscovered"],
	},
	snivy: {
		species: "Snivy",
		eggGroups: ["Field", "Grass"],
	},
	servine: {
		species: "Servine",
		prevo: "snivy",
		eggGroups: ["Field", "Grass"],
	},
	serperior: {
		species: "Serperior",
		prevo: "servine",
		eggGroups: ["Field", "Grass"],
	},
	tepig: {
		species: "Tepig",
		eggGroups: ["Field"],
	},
	pignite: {
		species: "Pignite",
		prevo: "tepig",
		eggGroups: ["Field"],
	},
	emboar: {
		species: "Emboar",
		prevo: "pignite",
		eggGroups: ["Field"],
	},
	oshawott: {
		species: "Oshawott",
		eggGroups: ["Field"],
	},
	dewott: {
		species: "Dewott",
		prevo: "oshawott",
		eggGroups: ["Field"],
	},
	samurott: {
		species: "Samurott",
		prevo: "dewott",
		eggGroups: ["Field"],
	},
	patrat: {
		species: "Patrat",
		eggGroups: ["Field"],
	},
	watchog: {
		species: "Watchog",
		prevo: "patrat",
		eggGroups: ["Field"],
	},
	lillipup: {
		species: "Lillipup",
		eggGroups: ["Field"],
	},
	herdier: {
		species: "Herdier",
		prevo: "lillipup",
		eggGroups: ["Field"],
	},
	stoutland: {
		species: "Stoutland",
		prevo: "herdier",
		eggGroups: ["Field"],
	},
	purrloin: {
		species: "Purrloin",
		eggGroups: ["Field"],
	},
	liepard: {
		species: "Liepard",
		prevo: "purrloin",
		eggGroups: ["Field"],
	},
	pansage: {
		species: "Pansage",
		eggGroups: ["Field"],
	},
	simisage: {
		species: "Simisage",
		prevo: "pansage",
		evoType: "useItem",
		evoItem: "Leaf Stone",
		eggGroups: ["Field"],
	},
	pansear: {
		species: "Pansear",
		eggGroups: ["Field"],
	},
	simisear: {
		species: "Simisear",
		prevo: "pansear",
		evoType: "useItem",
		evoItem: "Fire Stone",
		eggGroups: ["Field"],
	},
	panpour: {
		species: "Panpour",
		eggGroups: ["Field"],
	},
	simipour: {
		species: "Simipour",
		prevo: "panpour",
		evoType: "useItem",
		evoItem: "Water Stone",
		eggGroups: ["Field"],
	},
	munna: {
		species: "Munna",
		eggGroups: ["Field"],
	},
	musharna: {
		species: "Musharna",
		prevo: "munna",
		evoType: "useItem",
		evoItem: "Moon Stone",
		eggGroups: ["Field"],
	},
	pidove: {
		species: "Pidove",
		eggGroups: ["Flying"],
	},
	tranquill: {
		species: "Tranquill",
		prevo: "pidove",
		eggGroups: ["Flying"],
	},
	unfezant: {
		species: "Unfezant",
		prevo: "tranquill",
		eggGroups: ["Flying"],
	},
	blitzle: {
		species: "Blitzle",
		eggGroups: ["Field"],
	},
	zebstrika: {
		species: "Zebstrika",
		prevo: "blitzle",
		eggGroups: ["Field"],
	},
	roggenrola: {
		species: "Roggenrola",
		eggGroups: ["Mineral"],
	},
	boldore: {
		species: "Boldore",
		prevo: "roggenrola",
		eggGroups: ["Mineral"],
	},
	gigalith: {
		species: "Gigalith",
		prevo: "boldore",
		evoType: "trade",
		eggGroups: ["Mineral"],
	},
	woobat: {
		species: "Woobat",
		eggGroups: ["Flying", "Field"],
	},
	swoobat: {
		species: "Swoobat",
		prevo: "woobat",
		evoType: "levelFriendship",
		eggGroups: ["Flying", "Field"],
	},
	drilbur: {
		species: "Drilbur",
		eggGroups: ["Field"],
	},
	excadrill: {
		species: "Excadrill",
		prevo: "drilbur",
		eggGroups: ["Field"],
	},
	audino: {
		species: "Audino",
		eggGroups: ["Fairy"],
	},
	audinomega: {
		species: "Audino-Mega",
		baseSpecies: "Audino",
		eggGroups: ["Fairy"],
	},
	timburr: {
		species: "Timburr",
		eggGroups: ["Human-Like"],
	},
	gurdurr: {
		species: "Gurdurr",
		prevo: "timburr",
		eggGroups: ["Human-Like"],
	},
	conkeldurr: {
		species: "Conkeldurr",
		prevo: "gurdurr",
		evoType: "trade",
		eggGroups: ["Human-Like"],
	},
	tympole: {
		species: "Tympole",
		eggGroups: ["Water 1"],
	},
	palpitoad: {
		species: "Palpitoad",
		prevo: "tympole",
		eggGroups: ["Water 1"],
	},
	seismitoad: {
		species: "Seismitoad",
		prevo: "palpitoad",
		eggGroups: ["Water 1"],
	},
	throh: {
		species: "Throh",
		eggGroups: ["Human-Like"],
	},
	sawk: {
		species: "Sawk",
		eggGroups: ["Human-Like"],
	},
	sewaddle: {
		species: "Sewaddle",
		eggGroups: ["Bug"],
	},
	swadloon: {
		species: "Swadloon",
		prevo: "sewaddle",
		eggGroups: ["Bug"],
	},
	leavanny: {
		species: "Leavanny",
		prevo: "swadloon",
		evoType: "levelFriendship",
		eggGroups: ["Bug"],
	},
	venipede: {
		species: "Venipede",
		eggGroups: ["Bug"],
	},
	whirlipede: {
		species: "Whirlipede",
		prevo: "venipede",
		eggGroups: ["Bug"],
	},
	scolipede: {
		species: "Scolipede",
		prevo: "whirlipede",
		eggGroups: ["Bug"],
	},
	cottonee: {
		species: "Cottonee",
		eggGroups: ["Fairy", "Grass"],
	},
	whimsicott: {
		species: "Whimsicott",
		prevo: "cottonee",
		evoType: "useItem",
		evoItem: "Sun Stone",
		eggGroups: ["Fairy", "Grass"],
	},
	petilil: {
		species: "Petilil",
		eggGroups: ["Grass"],
	},
	lilligant: {
		species: "Lilligant",
		prevo: "petilil",
		evoType: "useItem",
		evoItem: "Sun Stone",
		eggGroups: ["Grass"],
	},
	basculin: {
		species: "Basculin",
		baseForme: "Red-Striped",
		eggGroups: ["Water 2"],
	},
	basculinbluestriped: {
		species: "Basculin-Blue-Striped",
		baseSpecies: "Basculin",
		eggGroups: ["Water 2"],
	},
	sandile: {
		species: "Sandile",
		eggGroups: ["Field"],
	},
	krokorok: {
		species: "Krokorok",
		prevo: "sandile",
		eggGroups: ["Field"],
	},
	krookodile: {
		species: "Krookodile",
		prevo: "krokorok",
		eggGroups: ["Field"],
	},
	darumaka: {
		species: "Darumaka",
		eggGroups: ["Field"],
	},
	darumakagalar: {
		species: "Darumaka-Galar",
		eggGroups: ["Field"],
	},
	darmanitan: {
		species: "Darmanitan",
		baseForme: "Standard",
		prevo: "darumaka",
		eggGroups: ["Field"],
	},
	darmanitanzen: {
		species: "Darmanitan-Zen",
		baseSpecies: "Darmanitan",
		prevo: "darumaka",
		eggGroups: ["Field"],
	},
	darmanitangalar: {
		species: "Darmanitan-Galar",
		prevo: "darumakagalar",
		evoType: "useItem",
		evoItem: "Ice Stone",
		eggGroups: ["Field"],
	},
	darmanitanzengalar: {
		species: "Darmanitan-Zen-Galar",
		baseSpecies: "Darmanitan-Galar",
		prevo: "darumakagalar",
		evoType: "useItem",
		evoItem: "Ice Stone",
		eggGroups: ["Field"],
	},
	maractus: {
		species: "Maractus",
		eggGroups: ["Grass"],
	},
	dwebble: {
		species: "Dwebble",
		eggGroups: ["Bug", "Mineral"],
	},
	crustle: {
		species: "Crustle",
		prevo: "dwebble",
		eggGroups: ["Bug", "Mineral"],
	},
	scraggy: {
		species: "Scraggy",
		eggGroups: ["Field", "Dragon"],
	},
	scrafty: {
		species: "Scrafty",
		prevo: "scraggy",
		eggGroups: ["Field", "Dragon"],
	},
	sigilyph: {
		species: "Sigilyph",
		eggGroups: ["Flying"],
	},
	yamask: {
		species: "Yamask",
		eggGroups: ["Mineral", "Amorphous"],
	},
	yamaskgalar: {
		species: "Yamask-Galar",
		eggGroups: ["Mineral", "Amorphous"],
	},
	cofagrigus: {
		species: "Cofagrigus",
		prevo: "yamask",
		eggGroups: ["Mineral", "Amorphous"],
	},
	tirtouga: {
		species: "Tirtouga",
		eggGroups: ["Water 1", "Water 3"],
	},
	carracosta: {
		species: "Carracosta",
		prevo: "tirtouga",
		eggGroups: ["Water 1", "Water 3"],
	},
	archen: {
		species: "Archen",
		eggGroups: ["Flying", "Water 3"],
	},
	archeops: {
		species: "Archeops",
		prevo: "archen",
		eggGroups: ["Flying", "Water 3"],
	},
	trubbish: {
		species: "Trubbish",
		eggGroups: ["Mineral"],
	},
	garbodor: {
		species: "Garbodor",
		prevo: "trubbish",
		eggGroups: ["Mineral"],
	},
	garbodorgmax: {
		species: "Garbodor-Gmax",
		baseSpecies: "Garbodor",
		// TODO
		eggGroups: ["Mineral"],
	},
	zorua: {
		species: "Zorua",
		eggGroups: ["Field"],
	},
	zoroark: {
		species: "Zoroark",
		prevo: "zorua",
		eggGroups: ["Field"],
	},
	minccino: {
		species: "Minccino",
		eggGroups: ["Field"],
	},
	cinccino: {
		species: "Cinccino",
		prevo: "minccino",
		evoType: "useItem",
		evoItem: "Shiny Stone",
		eggGroups: ["Field"],
	},
	gothita: {
		species: "Gothita",
		eggGroups: ["Human-Like"],
	},
	gothorita: {
		species: "Gothorita",
		prevo: "gothita",
		eggGroups: ["Human-Like"],
	},
	gothitelle: {
		species: "Gothitelle",
		prevo: "gothorita",
		eggGroups: ["Human-Like"],
	},
	solosis: {
		species: "Solosis",
		eggGroups: ["Amorphous"],
	},
	duosion: {
		species: "Duosion",
		prevo: "solosis",
		eggGroups: ["Amorphous"],
	},
	reuniclus: {
		species: "Reuniclus",
		prevo: "duosion",
		eggGroups: ["Amorphous"],
	},
	ducklett: {
		species: "Ducklett",
		eggGroups: ["Water 1", "Flying"],
	},
	swanna: {
		species: "Swanna",
		prevo: "ducklett",
		eggGroups: ["Water 1", "Flying"],
	},
	vanillite: {
		species: "Vanillite",
		eggGroups: ["Mineral"],
	},
	vanillish: {
		species: "Vanillish",
		prevo: "vanillite",
		eggGroups: ["Mineral"],
	},
	vanilluxe: {
		species: "Vanilluxe",
		prevo: "vanillish",
		eggGroups: ["Mineral"],
	},
	deerling: {
		species: "Deerling",
		baseForme: "Spring",
		eggGroups: ["Field"],
		otherForms: ["deerlingsummer", "deerlingautumn", "deerlingwinter"],
	},
	sawsbuck: {
		species: "Sawsbuck",
		baseForme: "Spring",
		prevo: "deerling",
		eggGroups: ["Field"],
		otherForms: ["sawsbucksummer", "sawsbuckautumn", "sawsbuckwinter"],
	},
	emolga: {
		species: "Emolga",
		eggGroups: ["Field"],
	},
	karrablast: {
		species: "Karrablast",
		eggGroups: ["Bug"],
	},
	escavalier: {
		species: "Escavalier",
		prevo: "karrablast",
		evoType: "trade",
		eggGroups: ["Bug"],
	},
	foongus: {
		species: "Foongus",
		eggGroups: ["Grass"],
	},
	amoonguss: {
		species: "Amoonguss",
		prevo: "foongus",
		eggGroups: ["Grass"],
	},
	frillish: {
		species: "Frillish",
		eggGroups: ["Amorphous"],
	},
	jellicent: {
		species: "Jellicent",
		prevo: "frillish",
		eggGroups: ["Amorphous"],
	},
	alomomola: {
		species: "Alomomola",
		eggGroups: ["Water 1", "Water 2"],
	},
	joltik: {
		species: "Joltik",
		eggGroups: ["Bug"],
	},
	galvantula: {
		species: "Galvantula",
		prevo: "joltik",
		eggGroups: ["Bug"],
	},
	ferroseed: {
		species: "Ferroseed",
		eggGroups: ["Grass", "Mineral"],
	},
	ferrothorn: {
		species: "Ferrothorn",
		prevo: "ferroseed",
		eggGroups: ["Grass", "Mineral"],
	},
	klink: {
		species: "Klink",
		eggGroups: ["Mineral"],
	},
	klang: {
		species: "Klang",
		prevo: "klink",
		eggGroups: ["Mineral"],
	},
	klinklang: {
		species: "Klinklang",
		prevo: "klang",
		eggGroups: ["Mineral"],
	},
	tynamo: {
		species: "Tynamo",
		eggGroups: ["Amorphous"],
	},
	eelektrik: {
		species: "Eelektrik",
		prevo: "tynamo",
		eggGroups: ["Amorphous"],
	},
	eelektross: {
		species: "Eelektross",
		prevo: "eelektrik",
		evoType: "useItem",
		evoItem: "Thunder Stone",
		eggGroups: ["Amorphous"],
	},
	elgyem: {
		species: "Elgyem",
		eggGroups: ["Human-Like"],
	},
	beheeyem: {
		species: "Beheeyem",
		prevo: "elgyem",
		eggGroups: ["Human-Like"],
	},
	litwick: {
		species: "Litwick",
		eggGroups: ["Amorphous"],
	},
	lampent: {
		species: "Lampent",
		prevo: "litwick",
		eggGroups: ["Amorphous"],
	},
	chandelure: {
		species: "Chandelure",
		prevo: "lampent",
		evoType: "useItem",
		evoItem: "Dusk Stone",
		eggGroups: ["Amorphous"],
	},
	axew: {
		species: "Axew",
		eggGroups: ["Monster", "Dragon"],
	},
	fraxure: {
		species: "Fraxure",
		prevo: "axew",
		eggGroups: ["Monster", "Dragon"],
	},
	haxorus: {
		species: "Haxorus",
		prevo: "fraxure",
		eggGroups: ["Monster", "Dragon"],
	},
	cubchoo: {
		species: "Cubchoo",
		eggGroups: ["Field"],
	},
	beartic: {
		species: "Beartic",
		prevo: "cubchoo",
		eggGroups: ["Field"],
	},
	cryogonal: {
		species: "Cryogonal",
		eggGroups: ["Mineral"],
	},
	shelmet: {
		species: "Shelmet",
		eggGroups: ["Bug"],
	},
	accelgor: {
		species: "Accelgor",
		prevo: "shelmet",
		evoType: "trade",
		eggGroups: ["Bug"],
	},
	stunfisk: {
		species: "Stunfisk",
		eggGroups: ["Water 1", "Amorphous"],
	},
	stunfiskgalar: {
		species: "Stunfisk-Galar",
		eggGroups: ["Water 1", "Amorphous"],
	},
	mienfoo: {
		species: "Mienfoo",
		eggGroups: ["Field", "Human-Like"],
	},
	mienshao: {
		species: "Mienshao",
		prevo: "mienfoo",
		eggGroups: ["Field", "Human-Like"],
	},
	druddigon: {
		species: "Druddigon",
		eggGroups: ["Monster", "Dragon"],
	},
	golett: {
		species: "Golett",
		eggGroups: ["Mineral"],
	},
	golurk: {
		species: "Golurk",
		prevo: "golett",
		eggGroups: ["Mineral"],
	},
	pawniard: {
		species: "Pawniard",
		eggGroups: ["Human-Like"],
	},
	bisharp: {
		species: "Bisharp",
		prevo: "pawniard",
		eggGroups: ["Human-Like"],
	},
	bouffalant: {
		species: "Bouffalant",
		eggGroups: ["Field"],
	},
	rufflet: {
		species: "Rufflet",
		eggGroups: ["Flying"],
	},
	braviary: {
		species: "Braviary",
		prevo: "rufflet",
		eggGroups: ["Flying"],
	},
	vullaby: {
		species: "Vullaby",
		eggGroups: ["Flying"],
	},
	mandibuzz: {
		species: "Mandibuzz",
		prevo: "vullaby",
		eggGroups: ["Flying"],
	},
	heatmor: {
		species: "Heatmor",
		eggGroups: ["Field"],
	},
	durant: {
		species: "Durant",
		eggGroups: ["Bug"],
	},
	deino: {
		species: "Deino",
		eggGroups: ["Dragon"],
	},
	zweilous: {
		species: "Zweilous",
		prevo: "deino",
		eggGroups: ["Dragon"],
	},
	hydreigon: {
		species: "Hydreigon",
		prevo: "zweilous",
		eggGroups: ["Dragon"],
	},
	larvesta: {
		species: "Larvesta",
		eggGroups: ["Bug"],
	},
	volcarona: {
		species: "Volcarona",
		prevo: "larvesta",
		eggGroups: ["Bug"],
	},
	cobalion: {
		species: "Cobalion",
		eggGroups: ["Undiscovered"],
	},
	terrakion: {
		species: "Terrakion",
		eggGroups: ["Undiscovered"],
	},
	virizion: {
		species: "Virizion",
		eggGroups: ["Undiscovered"],
	},
	tornadus: {
		species: "Tornadus",
		baseForme: "Incarnate",
		eggGroups: ["Undiscovered"],
	},
	tornadustherian: {
		species: "Tornadus-Therian",
		baseSpecies: "Tornadus",
		eggGroups: ["Undiscovered"],
	},
	thundurus: {
		species: "Thundurus",
		baseForme: "Incarnate",
		eggGroups: ["Undiscovered"],
	},
	thundurustherian: {
		species: "Thundurus-Therian",
		baseSpecies: "Thundurus",
		eggGroups: ["Undiscovered"],
	},
	reshiram: {
		species: "Reshiram",
		eggGroups: ["Undiscovered"],
	},
	zekrom: {
		species: "Zekrom",
		eggGroups: ["Undiscovered"],
	},
	landorus: {
		species: "Landorus",
		baseForme: "Incarnate",
		eggGroups: ["Undiscovered"],
	},
	landorustherian: {
		species: "Landorus-Therian",
		baseSpecies: "Landorus",
		eggGroups: ["Undiscovered"],
	},
	kyurem: {
		species: "Kyurem",
		eggGroups: ["Undiscovered"],
	},
	kyuremblack: {
		species: "Kyurem-Black",
		baseSpecies: "Kyurem",
		eggGroups: ["Undiscovered"],
	},
	kyuremwhite: {
		species: "Kyurem-White",
		baseSpecies: "Kyurem",
		eggGroups: ["Undiscovered"],
	},
	keldeo: {
		species: "Keldeo",
		baseForme: "Ordinary",
		eggGroups: ["Undiscovered"],
	},
	keldeoresolute: {
		species: "Keldeo-Resolute",
		baseSpecies: "Keldeo",
		eggGroups: ["Undiscovered"],
	},
	meloetta: {
		species: "Meloetta",
		baseForme: "Aria",
		eggGroups: ["Undiscovered"],
	},
	meloettapirouette: {
		species: "Meloetta-Pirouette",
		baseSpecies: "Meloetta",
		eggGroups: ["Undiscovered"],
	},
	genesect: {
		species: "Genesect",
		eggGroups: ["Undiscovered"],
	},
	genesectdouse: {
		species: "Genesect-Douse",
		baseSpecies: "Genesect",
		eggGroups: ["Undiscovered"],
	},
	genesectshock: {
		species: "Genesect-Shock",
		baseSpecies: "Genesect",
		eggGroups: ["Undiscovered"],
	},
	genesectburn: {
		species: "Genesect-Burn",
		baseSpecies: "Genesect",
		eggGroups: ["Undiscovered"],
	},
	genesectchill: {
		species: "Genesect-Chill",
		baseSpecies: "Genesect",
		eggGroups: ["Undiscovered"],
	},
	chespin: {
		species: "Chespin",
		eggGroups: ["Field"],
	},
	quilladin: {
		species: "Quilladin",
		prevo: "chespin",
		eggGroups: ["Field"],
	},
	chesnaught: {
		species: "Chesnaught",
		prevo: "quilladin",
		eggGroups: ["Field"],
	},
	fennekin: {
		species: "Fennekin",
		eggGroups: ["Field"],
	},
	braixen: {
		species: "Braixen",
		prevo: "fennekin",
		eggGroups: ["Field"],
	},
	delphox: {
		species: "Delphox",
		prevo: "braixen",
		eggGroups: ["Field"],
	},
	froakie: {
		species: "Froakie",
		eggGroups: ["Water 1"],
	},
	frogadier: {
		species: "Frogadier",
		prevo: "froakie",
		eggGroups: ["Water 1"],
	},
	greninja: {
		species: "Greninja",
		prevo: "frogadier",
		eggGroups: ["Water 1"],
	},
	greninjaash: {
		species: "Greninja-Ash",
		baseSpecies: "Greninja",
		eggGroups: ["Undiscovered"],
	},
	bunnelby: {
		species: "Bunnelby",
		eggGroups: ["Field"],
	},
	diggersby: {
		species: "Diggersby",
		prevo: "bunnelby",
		eggGroups: ["Field"],
	},
	fletchling: {
		species: "Fletchling",
		eggGroups: ["Flying"],
	},
	fletchinder: {
		species: "Fletchinder",
		prevo: "fletchling",
		eggGroups: ["Flying"],
	},
	talonflame: {
		species: "Talonflame",
		prevo: "fletchinder",
		eggGroups: ["Flying"],
	},
	scatterbug: {
		species: "Scatterbug",
		eggGroups: ["Bug"],
	},
	spewpa: {
		species: "Spewpa",
		prevo: "scatterbug",
		eggGroups: ["Bug"],
	},
	vivillon: {
		species: "Vivillon",
		prevo: "spewpa",
		eggGroups: ["Bug"],
		otherForms: ["vivillonarchipelago", "vivilloncontinental", "vivillonelegant", "vivillongarden", "vivillonhighplains", "vivillonicysnow", "vivillonjungle", "vivillonmarine", "vivillonmodern", "vivillonmonsoon", "vivillonocean", "vivillonpolar", "vivillonriver", "vivillonsandstorm", "vivillonsavanna", "vivillonsun", "vivillontundra"],
	},
	vivillonfancy: {
		species: "Vivillon-Fancy",
		baseSpecies: "Vivillon",
		eggGroups: ["Bug"],
	},
	vivillonpokeball: {
		species: "Vivillon-Pokeball",
		baseSpecies: "Vivillon",
		eggGroups: ["Bug"],
	},
	litleo: {
		species: "Litleo",
		eggGroups: ["Field"],
	},
	pyroar: {
		species: "Pyroar",
		prevo: "litleo",
		eggGroups: ["Field"],
	},
	flabebe: {
		species: "Flabe\u0301be\u0301",
		baseForme: "Red",
		eggGroups: ["Fairy"],
		otherForms: ["flabebeblue", "flabebeorange", "flabebewhite", "flabebeyellow"],
	},
	floette: {
		species: "Floette",
		baseForme: "Red",
		prevo: "flabebe",
		eggGroups: ["Fairy"],
		otherForms: ["floetteblue", "floetteorange", "floettewhite", "floetteyellow"],
	},
	floetteeternal: {
		species: "Floette-Eternal",
		baseSpecies: "Floette",
		eggGroups: ["Undiscovered"],
	},
	florges: {
		species: "Florges",
		baseForme: "Red",
		prevo: "floette",
		evoType: "useItem",
		evoItem: "Shiny Stone",
		eggGroups: ["Fairy"],
		otherForms: ["florgesblue", "florgesorange", "florgeswhite", "florgesyellow"],
	},
	skiddo: {
		species: "Skiddo",
		eggGroups: ["Field"],
	},
	gogoat: {
		species: "Gogoat",
		prevo: "skiddo",
		eggGroups: ["Field"],
	},
	pancham: {
		species: "Pancham",
		eggGroups: ["Field", "Human-Like"],
	},
	pangoro: {
		species: "Pangoro",
		prevo: "pancham",
		eggGroups: ["Field", "Human-Like"],
	},
	furfrou: {
		species: "Furfrou",
		eggGroups: ["Field"],
		otherForms: ["furfroudandy", "furfroudebutante", "furfroudiamond", "furfrouheart", "furfroukabuki", "furfroulareine", "furfroumatron", "furfroupharaoh", "furfroustar"],
	},
	espurr: {
		species: "Espurr",
		eggGroups: ["Field"],
	},
	meowstic: {
		species: "Meowstic",
		baseForme: "M",
		prevo: "espurr",
		eggGroups: ["Field"],
	},
	meowsticf: {
		species: "Meowstic-F",
		baseSpecies: "Meowstic",
		prevo: "espurr",
		eggGroups: ["Field"],
	},
	honedge: {
		species: "Honedge",
		eggGroups: ["Mineral"],
	},
	doublade: {
		species: "Doublade",
		prevo: "honedge",
		eggGroups: ["Mineral"],
	},
	aegislash: {
		species: "Aegislash",
		baseForme: "Shield",
		prevo: "doublade",
		evoType: "useItem",
		evoItem: "Dusk Stone",
		eggGroups: ["Mineral"],
	},
	aegislashblade: {
		species: "Aegislash-Blade",
		baseSpecies: "Aegislash",
		prevo: "doublade",
		evoType: "useItem",
		evoItem: "Dusk Stone",
		eggGroups: ["Mineral"],
	},
	spritzee: {
		species: "Spritzee",
		eggGroups: ["Fairy"],
	},
	aromatisse: {
		species: "Aromatisse",
		prevo: "spritzee",
		evoType: "trade",
		eggGroups: ["Fairy"],
	},
	swirlix: {
		species: "Swirlix",
		eggGroups: ["Fairy"],
	},
	slurpuff: {
		species: "Slurpuff",
		prevo: "swirlix",
		evoType: "trade",
		eggGroups: ["Fairy"],
	},
	inkay: {
		species: "Inkay",
		eggGroups: ["Water 1", "Water 2"],
	},
	malamar: {
		species: "Malamar",
		prevo: "inkay",
		eggGroups: ["Water 1", "Water 2"],
	},
	binacle: {
		species: "Binacle",
		eggGroups: ["Water 3"],
	},
	barbaracle: {
		species: "Barbaracle",
		prevo: "binacle",
		eggGroups: ["Water 3"],
	},
	skrelp: {
		species: "Skrelp",
		eggGroups: ["Water 1", "Dragon"],
	},
	dragalge: {
		species: "Dragalge",
		prevo: "skrelp",
		eggGroups: ["Water 1", "Dragon"],
	},
	clauncher: {
		species: "Clauncher",
		eggGroups: ["Water 1", "Water 3"],
	},
	clawitzer: {
		species: "Clawitzer",
		prevo: "clauncher",
		eggGroups: ["Water 1", "Water 3"],
	},
	helioptile: {
		species: "Helioptile",
		eggGroups: ["Monster", "Dragon"],
	},
	heliolisk: {
		species: "Heliolisk",
		prevo: "helioptile",
		evoType: "useItem",
		evoItem: "Sun Stone",
		eggGroups: ["Monster", "Dragon"],
	},
	tyrunt: {
		species: "Tyrunt",
		eggGroups: ["Monster", "Dragon"],
	},
	tyrantrum: {
		species: "Tyrantrum",
		prevo: "tyrunt",
		eggGroups: ["Monster", "Dragon"],
	},
	amaura: {
		species: "Amaura",
		eggGroups: ["Monster"],
	},
	aurorus: {
		species: "Aurorus",
		prevo: "amaura",
		eggGroups: ["Monster"],
	},
	sylveon: {
		species: "Sylveon",
		prevo: "eevee",
		evoType: "levelExtra",
		evoCondition: "with a Fairy-type move and two levels of Affection",
		eggGroups: ["Field"],
	},
	hawlucha: {
		species: "Hawlucha",
		eggGroups: ["Human-Like"],
	},
	dedenne: {
		species: "Dedenne",
		eggGroups: ["Field", "Fairy"],
	},
	carbink: {
		species: "Carbink",
		eggGroups: ["Fairy", "Mineral"],
	},
	goomy: {
		species: "Goomy",
		eggGroups: ["Dragon"],
	},
	sliggoo: {
		species: "Sliggoo",
		prevo: "goomy",
		eggGroups: ["Dragon"],
	},
	goodra: {
		species: "Goodra",
		prevo: "sliggoo",
		eggGroups: ["Dragon"],
	},
	klefki: {
		species: "Klefki",
		eggGroups: ["Mineral"],
	},
	phantump: {
		species: "Phantump",
		eggGroups: ["Grass", "Amorphous"],
	},
	trevenant: {
		species: "Trevenant",
		prevo: "phantump",
		evoType: "trade",
		eggGroups: ["Grass", "Amorphous"],
	},
	pumpkaboo: {
		species: "Pumpkaboo",
		baseForme: "Average",
		eggGroups: ["Amorphous"],
	},
	pumpkaboosmall: {
		species: "Pumpkaboo-Small",
		baseSpecies: "Pumpkaboo",
		eggGroups: ["Amorphous"],
	},
	pumpkaboolarge: {
		species: "Pumpkaboo-Large",
		baseSpecies: "Pumpkaboo",
		eggGroups: ["Amorphous"],
	},
	pumpkaboosuper: {
		species: "Pumpkaboo-Super",
		baseSpecies: "Pumpkaboo",
		eggGroups: ["Amorphous"],
	},
	gourgeist: {
		species: "Gourgeist",
		baseForme: "Average",
		prevo: "pumpkaboo",
		evoType: "trade",
		eggGroups: ["Amorphous"],
	},
	gourgeistsmall: {
		species: "Gourgeist-Small",
		baseSpecies: "Gourgeist",
		prevo: "pumpkaboosmall",
		evoType: "trade",
		eggGroups: ["Amorphous"],
	},
	gourgeistlarge: {
		species: "Gourgeist-Large",
		baseSpecies: "Gourgeist",
		prevo: "pumpkaboolarge",
		evoType: "trade",
		eggGroups: ["Amorphous"],
	},
	gourgeistsuper: {
		species: "Gourgeist-Super",
		baseSpecies: "Gourgeist",
		prevo: "pumpkaboosuper",
		evoType: "trade",
		eggGroups: ["Amorphous"],
	},
	bergmite: {
		species: "Bergmite",
		eggGroups: ["Monster"],
	},
	avalugg: {
		species: "Avalugg",
		prevo: "bergmite",
		eggGroups: ["Monster"],
	},
	noibat: {
		species: "Noibat",
		eggGroups: ["Flying"],
	},
	noivern: {
		species: "Noivern",
		prevo: "noibat",
		eggGroups: ["Flying"],
	},
	xerneas: {
		species: "Xerneas",
		eggGroups: ["Undiscovered"],
	},
	yveltal: {
		species: "Yveltal",
		eggGroups: ["Undiscovered"],
	},
	zygarde: {
		species: "Zygarde",
		baseForme: "50%",
		eggGroups: ["Undiscovered"],
	},
	zygarde10: {
		species: "Zygarde-10%",
		baseSpecies: "Zygarde",
		eggGroups: ["Undiscovered"],
	},
	zygardecomplete: {
		species: "Zygarde-Complete",
		baseSpecies: "Zygarde",
		eggGroups: ["Undiscovered"],
	},
	diancie: {
		species: "Diancie",
		eggGroups: ["Undiscovered"],
	},
	dianciemega: {
		species: "Diancie-Mega",
		baseSpecies: "Diancie",
		eggGroups: ["Undiscovered"],
	},
	hoopa: {
		species: "Hoopa",
		baseForme: "Confined",
		eggGroups: ["Undiscovered"],
	},
	hoopaunbound: {
		species: "Hoopa-Unbound",
		baseSpecies: "Hoopa",
		eggGroups: ["Undiscovered"],
	},
	volcanion: {
		species: "Volcanion",
		eggGroups: ["Undiscovered"],
	},
	rowlet: {
		species: "Rowlet",
		eggGroups: ["Flying"],
	},
	dartrix: {
		species: "Dartrix",
		prevo: "rowlet",
		eggGroups: ["Flying"],
	},
	decidueye: {
		species: "Decidueye",
		prevo: "dartrix",
		eggGroups: ["Flying"],
	},
	litten: {
		species: "Litten",
		eggGroups: ["Field"],
	},
	torracat: {
		species: "Torracat",
		prevo: "litten",
		eggGroups: ["Field"],
	},
	incineroar: {
		species: "Incineroar",
		prevo: "torracat",
		eggGroups: ["Field"],
	},
	popplio: {
		species: "Popplio",
		eggGroups: ["Water 1", "Field"],
	},
	brionne: {
		species: "Brionne",
		prevo: "popplio",
		eggGroups: ["Water 1", "Field"],
	},
	primarina: {
		species: "Primarina",
		prevo: "brionne",
		eggGroups: ["Water 1", "Field"],
	},
	pikipek: {
		species: "Pikipek",
		eggGroups: ["Flying"],
	},
	trumbeak: {
		species: "Trumbeak",
		prevo: "pikipek",
		eggGroups: ["Flying"],
	},
	toucannon: {
		species: "Toucannon",
		prevo: "trumbeak",
		eggGroups: ["Flying"],
	},
	yungoos: {
		species: "Yungoos",
		eggGroups: ["Field"],
	},
	gumshoos: {
		species: "Gumshoos",
		prevo: "yungoos",
		eggGroups: ["Field"],
	},
	gumshoostotem: {
		species: "Gumshoos-Totem",
		baseSpecies: "Gumshoos",
		eggGroups: ["Field"],
	},
	grubbin: {
		species: "Grubbin",
		eggGroups: ["Bug"],
	},
	charjabug: {
		species: "Charjabug",
		prevo: "grubbin",
		eggGroups: ["Bug"],
	},
	vikavolt: {
		species: "Vikavolt",
		prevo: "charjabug",
		evoType: "useItem",
		evoCondition: "Thunder Stone",
		eggGroups: ["Bug"],
	},
	vikavolttotem: {
		species: "Vikavolt-Totem",
		baseSpecies: "Vikavolt",
		eggGroups: ["Bug"],
	},
	crabrawler: {
		species: "Crabrawler",
		eggGroups: ["Water 3"],
	},
	crabominable: {
		species: "Crabominable",
		prevo: "crabrawler",
		evoType: "levelExtra",
		evoCondition: "at Mount Lanakila",
		eggGroups: ["Water 3"],
	},
	oricorio: {
		species: "Oricorio",
		baseForme: "Baile",
		eggGroups: ["Flying"],
	},
	oricoriopompom: {
		species: "Oricorio-Pom-Pom",
		baseSpecies: "Oricorio",
		eggGroups: ["Flying"],
	},
	oricoriopau: {
		species: "Oricorio-Pa'u",
		baseSpecies: "Oricorio",
		eggGroups: ["Flying"],
	},
	oricoriosensu: {
		species: "Oricorio-Sensu",
		baseSpecies: "Oricorio",
		eggGroups: ["Flying"],
	},
	cutiefly: {
		species: "Cutiefly",
		eggGroups: ["Bug", "Fairy"],
	},
	ribombee: {
		species: "Ribombee",
		prevo: "cutiefly",
		eggGroups: ["Bug", "Fairy"],
	},
	ribombeetotem: {
		species: "Ribombee-Totem",
		baseSpecies: "Ribombee",
		eggGroups: ["Bug", "Fairy"],
	},
	rockruff: {
		species: "Rockruff",
		baseForme: "Midday",
		eggGroups: ["Field"],
	},
	lycanroc: {
		species: "Lycanroc",
		baseForme: "Midday",
		prevo: "rockruff",
		eggGroups: ["Field"],
	},
	lycanrocmidnight: {
		species: "Lycanroc-Midnight",
		baseSpecies: "Lycanroc",
		prevo: "rockruff",
		eggGroups: ["Field"],
	},
	lycanrocdusk: {
		species: "Lycanroc-Dusk",
		baseSpecies: "Lycanroc",
		prevo: "rockruff",
		eggGroups: ["Field"],
	},
	wishiwashi: {
		species: "Wishiwashi",
		baseForme: "Solo",
		eggGroups: ["Water 2"],
	},
	wishiwashischool: {
		species: "Wishiwashi-School",
		baseSpecies: "Wishiwashi",
		eggGroups: ["Water 2"],
	},
	mareanie: {
		species: "Mareanie",
		eggGroups: ["Water 1"],
	},
	toxapex: {
		species: "Toxapex",
		prevo: "mareanie",
		eggGroups: ["Water 1"],
	},
	mudbray: {
		species: "Mudbray",
		eggGroups: ["Field"],
	},
	mudsdale: {
		species: "Mudsdale",
		prevo: "mudbray",
		eggGroups: ["Field"],
	},
	dewpider: {
		species: "Dewpider",
		eggGroups: ["Water 1", "Bug"],
	},
	araquanid: {
		species: "Araquanid",
		prevo: "dewpider",
		eggGroups: ["Water 1", "Bug"],
	},
	araquanidtotem: {
		species: "Araquanid-Totem",
		baseSpecies: "Araquanid",
		eggGroups: ["Water 1", "Bug"],
	},
	fomantis: {
		species: "Fomantis",
		eggGroups: ["Grass"],
	},
	lurantis: {
		species: "Lurantis",
		prevo: "fomantis",
		eggGroups: ["Grass"],
	},
	lurantistotem: {
		species: "Lurantis-Totem",
		baseSpecies: "Lurantis",
		eggGroups: ["Grass"],
	},
	morelull: {
		species: "Morelull",
		eggGroups: ["Grass"],
	},
	shiinotic: {
		species: "Shiinotic",
		prevo: "morelull",
		eggGroups: ["Grass"],
	},
	salandit: {
		species: "Salandit",
		eggGroups: ["Monster", "Dragon"],
	},
	salazzle: {
		species: "Salazzle",
		prevo: "salandit",
		eggGroups: ["Monster", "Dragon"],
	},
	salazzletotem: {
		species: "Salazzle-Totem",
		baseSpecies: "Salazzle",
		eggGroups: ["Monster", "Dragon"],
	},
	stufful: {
		species: "Stufful",
		eggGroups: ["Field"],
	},
	bewear: {
		species: "Bewear",
		prevo: "stufful",
		eggGroups: ["Field"],
	},
	bounsweet: {
		species: "Bounsweet",
		eggGroups: ["Grass"],
	},
	steenee: {
		species: "Steenee",
		prevo: "bounsweet",
		eggGroups: ["Grass"],
	},
	tsareena: {
		species: "Tsareena",
		prevo: "steenee",
		evoType: "levelMove",
		evoMove: "Stomp",
		eggGroups: ["Grass"],
	},
	comfey: {
		species: "Comfey",
		eggGroups: ["Grass"],
	},
	oranguru: {
		species: "Oranguru",
		eggGroups: ["Field"],
	},
	passimian: {
		species: "Passimian",
		eggGroups: ["Field"],
	},
	wimpod: {
		species: "Wimpod",
		eggGroups: ["Bug", "Water 3"],
	},
	golisopod: {
		species: "Golisopod",
		prevo: "wimpod",
		eggGroups: ["Bug", "Water 3"],
	},
	sandygast: {
		species: "Sandygast",
		eggGroups: ["Amorphous"],
	},
	palossand: {
		species: "Palossand",
		prevo: "sandygast",
		eggGroups: ["Amorphous"],
	},
	pyukumuku: {
		species: "Pyukumuku",
		eggGroups: ["Water 1"],
	},
	typenull: {
		species: "Type: Null",
		eggGroups: ["Undiscovered"],
	},
	silvally: {
		species: "Silvally",
		prevo: "typenull",
		evoType: "levelFriendship",
		eggGroups: ["Undiscovered"],
	},
	silvallybug: {
		species: "Silvally-Bug",
		baseSpecies: "Silvally",
		prevo: "typenull",
		evoType: "levelFriendship",
		eggGroups: ["Undiscovered"],
	},
	silvallydark: {
		species: "Silvally-Dark",
		baseSpecies: "Silvally",
		prevo: "typenull",
		evoType: "levelFriendship",
		eggGroups: ["Undiscovered"],
	},
	silvallydragon: {
		species: "Silvally-Dragon",
		baseSpecies: "Silvally",
		prevo: "typenull",
		evoType: "levelFriendship",
		eggGroups: ["Undiscovered"],
	},
	silvallyelectric: {
		species: "Silvally-Electric",
		baseSpecies: "Silvally",
		prevo: "typenull",
		evoType: "levelFriendship",
		eggGroups: ["Undiscovered"],
	},
	silvallyfairy: {
		species: "Silvally-Fairy",
		baseSpecies: "Silvally",
		prevo: "typenull",
		evoType: "levelFriendship",
		eggGroups: ["Undiscovered"],
	},
	silvallyfighting: {
		species: "Silvally-Fighting",
		baseSpecies: "Silvally",
		prevo: "typenull",
		evoType: "levelFriendship",
		eggGroups: ["Undiscovered"],
	},
	silvallyfire: {
		species: "Silvally-Fire",
		baseSpecies: "Silvally",
		prevo: "typenull",
		evoType: "levelFriendship",
		eggGroups: ["Undiscovered"],
	},
	silvallyflying: {
		species: "Silvally-Flying",
		baseSpecies: "Silvally",
		prevo: "typenull",
		evoType: "levelFriendship",
		eggGroups: ["Undiscovered"],
	},
	silvallyghost: {
		species: "Silvally-Ghost",
		baseSpecies: "Silvally",
		prevo: "typenull",
		evoType: "levelFriendship",
		eggGroups: ["Undiscovered"],
	},
	silvallygrass: {
		species: "Silvally-Grass",
		baseSpecies: "Silvally",
		prevo: "typenull",
		evoType: "levelFriendship",
		eggGroups: ["Undiscovered"],
	},
	silvallyground: {
		species: "Silvally-Ground",
		baseSpecies: "Silvally",
		prevo: "typenull",
		evoType: "levelFriendship",
		eggGroups: ["Undiscovered"],
	},
	silvallyice: {
		species: "Silvally-Ice",
		baseSpecies: "Silvally",
		prevo: "typenull",
		evoType: "levelFriendship",
		eggGroups: ["Undiscovered"],
	},
	silvallypoison: {
		species: "Silvally-Poison",
		baseSpecies: "Silvally",
		prevo: "typenull",
		evoType: "levelFriendship",
		eggGroups: ["Undiscovered"],
	},
	silvallypsychic: {
		species: "Silvally-Psychic",
		baseSpecies: "Silvally",
		prevo: "typenull",
		evoType: "levelFriendship",
		eggGroups: ["Undiscovered"],
	},
	silvallyrock: {
		species: "Silvally-Rock",
		baseSpecies: "Silvally",
		prevo: "typenull",
		evoType: "levelFriendship",
		eggGroups: ["Undiscovered"],
	},
	silvallysteel: {
		species: "Silvally-Steel",
		baseSpecies: "Silvally",
		prevo: "typenull",
		evoType: "levelFriendship",
		eggGroups: ["Undiscovered"],
	},
	silvallywater: {
		species: "Silvally-Water",
		baseSpecies: "Silvally",
		prevo: "typenull",
		evoType: "levelFriendship",
		eggGroups: ["Undiscovered"],
	},
	minior: {
		species: "Minior",
		baseForme: "Red",
		eggGroups: ["Mineral"],
		otherForms: ["miniororange", "minioryellow", "miniorgreen", "miniorblue", "miniorindigo", "miniorviolet"],
	},
	miniormeteor: {
		species: "Minior-Meteor",
		baseSpecies: "Minior",
		eggGroups: ["Mineral"],
	},
	komala: {
		species: "Komala",
		eggGroups: ["Field"],
	},
	turtonator: {
		species: "Turtonator",
		eggGroups: ["Monster", "Dragon"],
	},
	togedemaru: {
		species: "Togedemaru",
		eggGroups: ["Field", "Fairy"],
	},
	togedemarutotem: {
		species: "Togedemaru-Totem",
		baseSpecies: "Togedemaru",
		eggGroups: ["Field", "Fairy"],
	},
	mimikyu: {
		species: "Mimikyu",
		eggGroups: ["Amorphous"],
	},
	mimikyubusted: {
		species: "Mimikyu-Busted",
		baseSpecies: "Mimikyu",
		eggGroups: ["Amorphous"],
	},
	mimikyutotem: {
		species: "Mimikyu-Totem",
		baseSpecies: "Mimikyu",
		eggGroups: ["Amorphous"],
	},
	mimikyubustedtotem: {
		species: "Mimikyu-Busted-Totem",
		baseSpecies: "Mimikyu",
		eggGroups: ["Amorphous"],
	},
	bruxish: {
		species: "Bruxish",
		eggGroups: ["Water 2"],
	},
	drampa: {
		species: "Drampa",
		eggGroups: ["Monster", "Dragon"],
	},
	dhelmise: {
		species: "Dhelmise",
		eggGroups: ["Mineral"],
	},
	jangmoo: {
		species: "Jangmo-o",
		eggGroups: ["Dragon"],
	},
	hakamoo: {
		species: "Hakamo-o",
		prevo: "jangmoo",
		eggGroups: ["Dragon"],
	},
	kommoo: {
		species: "Kommo-o",
		prevo: "hakamoo",
		eggGroups: ["Dragon"],
	},
	kommoototem: {
		species: "Kommo-o-Totem",
		baseSpecies: "Kommo-o",
		eggGroups: ["Dragon"],
	},
	tapukoko: {
		species: "Tapu Koko",
		eggGroups: ["Undiscovered"],
	},
	tapulele: {
		species: "Tapu Lele",
		eggGroups: ["Undiscovered"],
	},
	tapubulu: {
		species: "Tapu Bulu",
		eggGroups: ["Undiscovered"],
	},
	tapufini: {
		species: "Tapu Fini",
		eggGroups: ["Undiscovered"],
	},
	cosmog: {
		species: "Cosmog",
		eggGroups: ["Undiscovered"],
	},
	cosmoem: {
		species: "Cosmoem",
		prevo: "cosmog",
		eggGroups: ["Undiscovered"],
	},
	solgaleo: {
		species: "Solgaleo",
		prevo: "cosmoem",
		eggGroups: ["Undiscovered"],
	},
	lunala: {
		species: "Lunala",
		prevo: "cosmoem",
		eggGroups: ["Undiscovered"],
	},
	nihilego: {
		species: "Nihilego",
		eggGroups: ["Undiscovered"],
	},
	buzzwole: {
		species: "Buzzwole",
		eggGroups: ["Undiscovered"],
	},
	pheromosa: {
		species: "Pheromosa",
		eggGroups: ["Undiscovered"],
	},
	xurkitree: {
		species: "Xurkitree",
		eggGroups: ["Undiscovered"],
	},
	celesteela: {
		species: "Celesteela",
		eggGroups: ["Undiscovered"],
	},
	kartana: {
		species: "Kartana",
		eggGroups: ["Undiscovered"],
	},
	guzzlord: {
		species: "Guzzlord",
		eggGroups: ["Undiscovered"],
	},
	necrozma: {
		species: "Necrozma",
		eggGroups: ["Undiscovered"],
	},
	necrozmaduskmane: {
		species: "Necrozma-Dusk-Mane",
		baseSpecies: "Necrozma",
		eggGroups: ["Undiscovered"],
	},
	necrozmadawnwings: {
		species: "Necrozma-Dawn-Wings",
		baseSpecies: "Necrozma",
		eggGroups: ["Undiscovered"],
	},
	necrozmaultra: {
		species: "Necrozma-Ultra",
		baseSpecies: "Necrozma",
		eggGroups: ["Undiscovered"],
	},
	magearna: {
		species: "Magearna",
		eggGroups: ["Undiscovered"],
	},
	magearnaoriginal: {
		species: "Magearna-Original",
		baseSpecies: "Magearna",
		eggGroups: ["Undiscovered"],
	},
	marshadow: {
		species: "Marshadow",
		eggGroups: ["Undiscovered"],
	},
	poipole: {
		species: "Poipole",
		eggGroups: ["Undiscovered"],
	},
	naganadel: {
		species: "Naganadel",
		prevo: "poipole",
		evoType: "levelMove",
		evoMove: "Dragon Pulse",
		eggGroups: ["Undiscovered"],
	},
	stakataka: {
		species: "Stakataka",
		eggGroups: ["Undiscovered"],
	},
	blacephalon: {
		species: "Blacephalon",
		eggGroups: ["Undiscovered"],
	},
	zeraora: {
		species: "Zeraora",
		eggGroups: ["Undiscovered"],
	},
	meltan: {
		species: "Meltan",
		eggGroups: ["Undiscovered"],
	},
	melmetal: {
		species: "Melmetal",
		prevo: "meltan",
		eggGroups: ["Undiscovered"],
	},
	melmetalgmax: {
		species: "Melmetal-Gmax",
		baseSpecies: "Melmetal",
		// TODO
		eggGroups: ["Undiscovered"],
	},
	grookey: {
		species: "Grookey",
		eggGroups: ["Field", "Grass"],
	},
	thwackey: {
		species: "Thwackey",
		prevo: "grookey",
		eggGroups: ["Field", "Grass"],
	},
	rillaboom: {
		species: "Rillaboom",
		prevo: "thwackey",
		eggGroups: ["Field", "Grass"],
	},
	scorbunny: {
		species: "Scorbunny",
		eggGroups: ["Field", "Human-Like"],
	},
	raboot: {
		species: "Raboot",
		prevo: "scorbunny",
		eggGroups: ["Field", "Human-Like"],
	},
	cinderace: {
		species: "Cinderace",
		prevo: "raboot",
		eggGroups: ["Field", "Human-Like"],
	},
	sobble: {
		species: "Sobble",
		eggGroups: ["Water 1", "Field"],
	},
	drizzile: {
		species: "Drizzile",
		prevo: "sobble",
		eggGroups: ["Water 1", "Field"],
	},
	inteleon: {
		species: "Inteleon",
		prevo: "drizzile",
		eggGroups: ["Water 1", "Field"],
	},
	skwovet: {
		species: "Skwovet",
		eggGroups: ["Field"],
	},
	greedent: {
		species: "Greedent",
		prevo: "skwovet",
		eggGroups: ["Field"],
	},
	rookidee: {
		species: "Rookidee",
		eggGroups: ["Flying"],
	},
	corvisquire: {
		species: "Corvisquire",
		prevo: "rookidee",
		eggGroups: ["Flying"],
	},
	corviknight: {
		species: "Corviknight",
		prevo: "corvisquire",
		eggGroups: ["Flying"],
	},
	corviknightgmax: {
		species: "Corviknight-Gmax",
		baseSpecies: "Corviknight",
		eggGroups: ["Flying"],
	},
	blipbug: {
		species: "Blipbug",
		eggGroups: ["Bug"],
	},
	dottler: {
		species: "Dottler",
		prevo: "blipbug",
		eggGroups: ["Bug"],
	},
	orbeetle: {
		species: "Orbeetle",
		prevo: "dottler",
		eggGroups: ["Bug"],
	},
	orbeetlegmax: {
		species: "Orbeetle-Gmax",
		baseSpecies: "Orbeetle",
		// TODO
		eggGroups: ["Bug"],
	},
	nickit: {
		species: "Nickit",
		eggGroups: ["Field"],
	},
	thievul: {
		species: "Thievul",
		prevo: "nickit",
		eggGroups: ["Field"],
	},
	gossifleur: {
		species: "Gossifleur",
		eggGroups: ["Grass"],
	},
	eldegoss: {
		species: "Eldegoss",
		prevo: "gossifleur",
		eggGroups: ["Grass"],
	},
	wooloo: {
		species: "Wooloo",
		eggGroups: ["Field"],
	},
	dubwool: {
		species: "Dubwool",
		prevo: "wooloo",
		eggGroups: ["Field"],
	},
	chewtle: {
		species: "Chewtle",
		eggGroups: ["Monster", "Water 1"],
	},
	drednaw: {
		species: "Drednaw",
		prevo: "chewtle",
		eggGroups: ["Monster", "Water 1"],
	},
	drednawgmax: {
		species: "Drednaw-Gmax",
		baseSpecies: "Drednaw",
		eggGroups: ["Monster", "Water 1"],
	},
	yamper: {
		species: "Yamper",
		eggGroups: ["Field"],
	},
	boltund: {
		species: "Boltund",
		prevo: "yamper",
		eggGroups: ["Field"],
	},
	rolycoly: {
		species: "Rolycoly",
		eggGroups: ["Mineral"],
	},
	carkol: {
		species: "Carkol",
		prevo: "rolycoly",
		eggGroups: ["Mineral"],
	},
	coalossal: {
		species: "Coalossal",
		prevo: "carkol",
		eggGroups: ["Mineral"],
	},
	coalossalgmax: {
		species: "Coalossal-Gmax",
		baseSpecies: "Coalossal",
		// TODO
		eggGroups: ["Mineral"],
	},
	applin: {
		species: "Applin",
		eggGroups: ["Grass", "Dragon"],
	},
	flapple: {
		species: "Flapple",
		prevo: "applin",
		evoType: "useItem",
		evoItem: "Sweet Apple",
		eggGroups: ["Grass", "Dragon"],
	},
	flapplegmax: {
		species: "Flapple-Gmax",
		baseSpecies: "Flapple",
		// TODO
		eggGroups: ["Grass", "Dragon"],
	},
	appletun: {
		species: "Appletun",
		prevo: "applin",
		evoType: "useItem",
		evoItem: "Tart Apple",
		eggGroups: ["Grass", "Dragon"],
	},
	appletungmax: {
		species: "Appletun-Gmax",
		baseSpecies: "Appletun",
		// TODO
		eggGroups: ["Grass", "Dragon"],
	},
	silicobra: {
		species: "Silicobra",
		eggGroups: ["Field", "Dragon"],
	},
	sandaconda: {
		species: "Sandaconda",
		prevo: "silicobra",
		eggGroups: ["Field", "Dragon"],
	},
	sandacondagmax: {
		species: "Sandaconda-Gmax",
		baseSpecies: "Sandaconda",
		// TODO
		eggGroups: ["Field", "Dragon"],
	},
	cramorant: {
		species: "Cramorant",
		eggGroups: ["Water 1", "Flying"],
	},
	cramorantgulping: {
		species: "Cramorant-Gulping",
		baseSpecies: "Cramorant",
		eggGroups: ["Water 1", "Flying"],
	},
	cramorantgorging: {
		species: "Cramorant-Gorging",
		baseSpecies: "Cramorant",
		eggGroups: ["Water 1", "Flying"],
	},
	arrokuda: {
		species: "Arrokuda",
		eggGroups: ["Water 2"],
	},
	barraskewda: {
		species: "Barraskewda",
		prevo: "arrokuda",
		eggGroups: ["Water 2"],
	},
	toxel: {
		species: "Toxel",
		eggGroups: ["Undiscovered"],
	},
	toxtricity: {
		species: "Toxtricity",
		baseForme: "Amped",
		prevo: "toxel",
		eggGroups: ["Human-Like"],
	},
	toxtricitylowkey: {
		species: "Toxtricity-Low-Key",
		baseSpecies: "Toxtricity",
		prevo: "toxel",
		eggGroups: ["Human-Like"],
	},
	toxtricitygmax: {
		species: "Toxtricity-Gmax",
		baseSpecies: "Toxtricity",
		// TODO
		eggGroups: ["Human-Like"],
	},
	sizzlipede: {
		species: "Sizzlipede",
		eggGroups: ["Bug"],
	},
	centiskorch: {
		species: "Centiskorch",
		prevo: "sizzlipede",
		eggGroups: ["Bug"],
	},
	centiskorchgmax: {
		species: "Centiskorch-Gmax",
		baseSpecies: "Centiskorch",
		// TODO
		eggGroups: ["Bug"],
	},
	clobbopus: {
		species: "Clobbopus",
		eggGroups: ["Water 1", "Human-Like"],
	},
	grapploct: {
		species: "Grapploct",
		prevo: "clobbopus",
		evoType: "levelMove",
		// TODO: Figure out evolution move
		evoMove: "",
		eggGroups: ["Water 1", "Human-Like"],
	},
	sinistea: {
		species: "Sinistea",
		eggGroups: ["Mineral", "Amorphous"],
		otherForms: ["sinisteachipped"],
	},
	polteageist: {
		species: "Polteageist",
		prevo: "sinistea",
		evoType: "useItem",
		evoItem: "Cracked Pot",
		eggGroups: ["Mineral", "Amorphous"],
		otherForms: ["polteageistchipped"],
	},
	hatenna: {
		species: "Hatenna",
		eggGroups: ["Fairy"],
	},
	hattrem: {
		species: "Hattrem",
		prevo: "hatenna",
		eggGroups: ["Fairy"],
	},
	hatterene: {
		species: "Hatterene",
		prevo: "hattrem",
		eggGroups: ["Fairy"],
	},
	hatterenegmax: {
		species: "Hatterene-Gmax",
		baseSpecies: "Hatterene",
		// TODO
		eggGroups: ["Fairy"],
	},
	impidimp: {
		species: "Impidimp",
		eggGroups: ["Fairy", "Human-Like"],
	},
	morgrem: {
		species: "Morgrem",
		prevo: "impidimp",
		eggGroups: ["Fairy", "Human-Like"],
	},
	grimmsnarl: {
		species: "Grimmsnarl",
		prevo: "morgrem",
		eggGroups: ["Fairy", "Human-Like"],
	},
	grimmsnarlgmax: {
		species: "Grimmsnarl-Gmax",
		baseSpecies: "Grimmsnarl",
		eggGroups: ["Fairy", "Human-Like"],
	},
	obstagoon: {
		species: "Obstagoon",
		prevo: "linoonegalar",
		evoCondition: "at night",
		eggGroups: ["Field"],
	},
	perrserker: {
		species: "Perrserker",
		prevo: "meowthgalar",
		eggGroups: ["Field"],
	},
	cursola: {
		species: "Cursola",
		prevo: "corsolagalar",
		eggGroups: ["Water 1", "Water 3"],
	},
	sirfetchd: {
		species: "Sirfetch'd",
		prevo: "farfetchdgalar",
		evoType: "levelExtra",
		evoCondition: "Land 3 critical hits in 1 battle",
		eggGroups: ["Flying", "Field"],
	},
	mrrime: {
		species: "Mr. Rime",
		prevo: "mrmimegalar",
		eggGroups: ["Human-Like"],
	},
	runerigus: {
		species: "Runerigus",
		prevo: "yamaskgalar",
		eggGroups: ["Mineral", "Amorphous"],
	},
	milcery: {
		species: "Milcery",
		eggGroups: ["Fairy", "Amorphous"],
	},
	alcremie: {
		species: "Alcremie",
		prevo: "milcery",
		evoType: "levelHold",
		evoItem: "cloversweet",
		eggGroups: ["Fairy", "Amorphous"],
		otherForms: ["alcremierubycream", "alcremiematcha", "alcremiemint", "alcremielemon", "alcremiesalted", "alcremierubyswirl", "alcremiecaramel", "alcremierainbow"],
	},
	alcremiegmax: {
		species: "Alcremie-Gmax",
		baseSpecies: "Alcremie",
		eggGroups: ["Fairy", "Amorphous"],
	},
	falinks: {
		species: "Falinks",
		eggGroups: ["Fairy", "Mineral"],
	},
	pincurchin: {
		species: "Pincurchin",
		eggGroups: ["Water 1", "Amorphous"],
	},
	snom: {
		species: "Snom",
		eggGroups: ["Bug"],
	},
	frosmoth: {
		species: "Frosmoth",
		prevo: "snom",
		evoType: "levelFriendship",
		evoCondition: "at night",
		eggGroups: ["Bug"],
	},
	stonjourner: {
		species: "Stonjourner",
		eggGroups: ["Mineral"],
	},
	eiscue: {
		species: "Eiscue",
		eggGroups: ["Water 1", "Field"],
	},
	eiscuenoice: {
		species: "Eiscue-Noice",
		baseSpecies: "Eiscue",
		eggGroups: ["Water 1", "Field"],
	},
	indeedee: {
		species: "Indeedee",
		baseForme: "M",
		eggGroups: ["Fairy"],
	},
	indeedeef: {
		species: "Indeedee-F",
		baseSpecies: "Indeedee",
		eggGroups: ["Fairy"],
	},
	morpeko: {
		species: "Morpeko",
		eggGroups: ["Field", "Fairy"],
	},
	morpekohangry: {
		species: "Morpeko-Hangry",
		baseSpecies: "Morpeko",
		eggGroups: ["Field", "Fairy"],
	},
	cufant: {
		species: "Cufant",
		eggGroups: ["Field", "Mineral"],
	},
	copperajah: {
		species: "Copperajah",
		prevo: "cufant",
		eggGroups: ["Field", "Mineral"],
	},
	copperajahgmax: {
		species: "Copperajah-Gmax",
		baseSpecies: "Copperajah",
		eggGroups: ["Field", "Mineral"],
	},
	dracozolt: {
		species: "Dracozolt",
		eggGroups: ["Undiscovered"],
	},
	arctozolt: {
		species: "Arctozolt",
		eggGroups: ["Undiscovered"],
	},
	dracovish: {
		species: "Dracovish",
		eggGroups: ["Undiscovered"],
	},
	arctovish: {
		species: "Arctovish",
		eggGroups: ["Undiscovered"],
	},
	duraludon: {
		species: "Duraludon",
		eggGroups: ["Mineral", "Dragon"],
	},
	duraludongmax: {
		species: "Duraludon-Gmax",
		baseSpecies: "Duraludon",
		eggGroups: ["Mineral", "Dragon"],
	},
	dreepy: {
		species: "Dreepy",
		eggGroups: ["Amorphous", "Dragon"],
	},
	drakloak: {
		species: "Drakloak",
		prevo: "dreepy",
		eggGroups: ["Amorphous", "Dragon"],
	},
	dragapult: {
		species: "Dragapult",
		prevo: "drakloak",
		eggGroups: ["Amorphous", "Dragon"],
	},
	zacian: {
		species: "Zacian",
		eggGroups: ["Undiscovered"],
	},
	zaciancrowned: {
		species: "Zacian-Crowned",
		baseSpecies: "Zacian",
		eggGroups: ["Undiscovered"],
	},
	zamazenta: {
		species: "Zamazenta",
		eggGroups: ["Undiscovered"],
	},
	zamazentacrowned: {
		species: "Zamazenta-Crowned",
		baseSpecies: "Zamazenta",
		eggGroups: ["Undiscovered"],
	},
	eternatus: {
		species: "Eternatus",
		eggGroups: ["Undiscovered"],
	},
	missingno: {
		species: "Missingno.",
		eggGroups: ["Undiscovered"],
	},
	syclant: {
		species: "Syclant",
		prevo: "syclar",
		eggGroups: ["Bug"],
	},
	revenankh: {
		species: "Revenankh",
		eggGroups: ["Amorphous", "Human-Like"],
	},
	pyroak: {
		species: "Pyroak",
		prevo: "flarelm",
		eggGroups: ["Monster", "Dragon"],
	},
	fidgit: {
		species: "Fidgit",
		prevo: "breezi",
		eggGroups: ["Field"],
	},
	stratagem: {
		species: "Stratagem",
		prevo: "tactite",
		evoType: "trade",
		eggGroups: ["Undiscovered"],
	},
	arghonaut: {
		species: "Arghonaut",
		prevo: "privatyke",
		eggGroups: ["Water 1", "Water 3"],
	},
	kitsunoh: {
		species: "Kitsunoh",
		eggGroups: ["Field"],
	},
	cyclohm: {
		species: "Cyclohm",
		eggGroups: ["Dragon", "Monster"],
	},
	colossoil: {
		species: "Colossoil",
		eggGroups: ["Water 2", "Field"],
	},
	krilowatt: {
		species: "Krilowatt",
		eggGroups: ["Water 1", "Fairy"],
	},
	voodoom: {
		species: "Voodoom",
		prevo: "voodoll",
		eggGroups: ["Human-Like", "Field"],
	},
	tomohawk: {
		species: "Tomohawk",
		prevo: "scratchet",
		eggGroups: ["Field", "Flying"],
	},
	necturna: {
		species: "Necturna",
		prevo: "necturine",
		eggGroups: ["Grass", "Field"],
	},
	mollux: {
		species: "Mollux",
		eggGroups: ["Fairy", "Field"],
	},
	aurumoth: {
		species: "Aurumoth",
		prevo: "argalis",
		eggGroups: ["Bug"],
	},
	malaconda: {
		species: "Malaconda",
		prevo: "brattler",
		eggGroups: ["Grass", "Dragon"],
	},
	cawmodore: {
		species: "Cawmodore",
		prevo: "cawdet",
		eggGroups: ["Flying"],
	},
	volkraken: {
		species: "Volkraken",
		prevo: "volkritter",
		eggGroups: ["Water 1", "Water 2"],
	},
	plasmanta: {
		species: "Plasmanta",
		prevo: "snugglow",
		eggGroups: ["Water 1", "Water 2"],
	},
	naviathan: {
		species: "Naviathan",
		prevo: "caimanoe",
		eggGroups: ["Water 1", "Field"],
	},
	crucibelle: {
		species: "Crucibelle",
		eggGroups: ["Amorphous", "Mineral"],
	},
	crucibellemega: {
		species: "Crucibelle-Mega",
		baseSpecies: "Crucibelle",
		eggGroups: ["Amorphous", "Mineral"],
	},
	kerfluffle: {
		species: "Kerfluffle",
		prevo: "pluffle",
		evoType: "levelExtra",
		eggGroups: ["Fairy", "Human-Like"],
	},
	pajantom: {
		species: "Pajantom",
		eggGroups: ["Dragon", "Monster"],
	},
	jumbao: {
		species: "Jumbao",
		prevo: "mumbao",
		evoType: "levelExtra",
		eggGroups: ["Grass"],
	},
	caribolt: {
		species: "Caribolt",
		prevo: "electrelk",
		eggGroups: ["Field"],
	},
	smokomodo: {
		species: "Smokomodo",
		prevo: "smoguana",
		eggGroups: ["Field", "Monster"],
	},
	snaelstrom: {
		species: "Snaelstrom",
		prevo: "coribalis",
		eggGroups: ["Water 1", "Fairy"],
	},
	equilibra: {
		species: "Equilibra",
		eggGroups: ["Mineral"],
	},
	syclar: {
		species: "Syclar",
		eggGroups: ["Bug"],
	},
	embirch: {
		species: "Embirch",
		eggGroups: ["Monster", "Dragon"],
	},
	flarelm: {
		species: "Flarelm",
		prevo: "embirch",
		eggGroups: ["Monster", "Dragon"],
	},
	breezi: {
		species: "Breezi",
		eggGroups: ["Field"],
	},
	scratchet: {
		species: "Scratchet",
		eggGroups: ["Field", "Flying"],
	},
	necturine: {
		species: "Necturine",
		eggGroups: ["Grass", "Field"],
	},
	cupra: {
		species: "Cupra",
		eggGroups: ["Bug"],
	},
	argalis: {
		species: "Argalis",
		prevo: "cupra",
		eggGroups: ["Bug"],
	},
	brattler: {
		species: "Brattler",
		eggGroups: ["Grass", "Dragon"],
	},
	cawdet: {
		species: "Cawdet",
		eggGroups: ["Flying"],
	},
	volkritter: {
		species: "Volkritter",
		eggGroups: ["Water 1", "Water 2"],
	},
	snugglow: {
		species: "Snugglow",
		eggGroups: ["Water 1", "Water 2"],
	},
	floatoy: {
		species: "Floatoy",
		eggGroups: ["Water 1", "Field"],
	},
	caimanoe: {
		species: "Caimanoe",
		prevo: "floatoy",
		eggGroups: ["Water 1", "Field"],
	},
	pluffle: {
		species: "Pluffle",
		eggGroups: ["Fairy", "Human-Like"],
	},
	rebble: {
		species: "Rebble",
		eggGroups: ["Undiscovered"],
	},
	tactite: {
		species: "Tactite",
		prevo: "rebble",
		eggGroups: ["Undiscovered"],
	},
	privatyke: {
		species: "Privatyke",
		eggGroups: ["Water 1", "Water 3"],
	},
	voodoll: {
		species: "Voodoll",
		eggGroups: ["Human-Like", "Field"],
	},
	mumbao: {
		species: "Mumbao",
		eggGroups: ["Grass"],
	},
	fawnifer: {
		species: "Fawnifer",
		eggGroups: ["Field"],
	},
	electrelk: {
		species: "Electrelk",
		prevo: "fawnifer",
		eggGroups: ["Field"],
	},
	smogecko: {
		species: "Smogecko",
		eggGroups: ["Field", "Monster"],
	},
	smoguana: {
		species: "Smoguana",
		prevo: "smogecko",
		eggGroups: ["Field", "Monster"],
	},
	swirlpool: {
		species: "Swirlpool",
		eggGroups: ["Water 1", "Fairy"],
	},
	coribalis: {
		species: "Coribalis",
		prevo: "swirlpool",
		eggGroups: ["Water 1", "Fairy"],
	},
	pokestarsmeargle: {
		species: "Pokestar Smeargle",
		eggGroups: ["Field"],
	},
	pokestarufo: {
		species: "Pokestar UFO",
		eggGroups: ["Undiscovered"],
		otherForms: ["pokestarufopropu1"],
	},
	pokestarufo2: {
		species: "Pokestar UFO-2",
		baseSpecies: "Pokestar UFO",
		eggGroups: ["Undiscovered"],
	},
	pokestarbrycenman: {
		species: "Pokestar Brycen-Man",
		eggGroups: ["Undiscovered"],
		otherForms: ["pokestarbrycenmanprop"],
	},
	pokestarmt: {
		species: "Pokestar MT",
		eggGroups: ["Undiscovered"],
		otherForms: ["pokestarmtprop"],
	},
	pokestarmt2: {
		species: "Pokestar MT2",
		eggGroups: ["Undiscovered"],
		otherForms: ["pokestarmt2prop"],
	},
	pokestartransport: {
		species: "Pokestar Transport",
		eggGroups: ["Undiscovered"],
		otherForms: ["pokestartransportprop"],
	},
	pokestargiant: {
		species: "Pokestar Giant",
		eggGroups: ["Undiscovered"],
		otherForms: ["pokestargiant2", "pokestargiantpropo1", "pokestargiantpropo2"],
	},
	pokestarhumanoid: {
		species: "Pokestar Humanoid",
		eggGroups: ["Undiscovered"],
		otherForms: ["pokestarhumanoidprop"],
	},
	pokestarmonster: {
		species: "Pokestar Monster",
		eggGroups: ["Undiscovered"],
		otherForms: ["pokestarmonsterprop"],
	},
	pokestarf00: {
		species: "Pokestar F-00",
		eggGroups: ["Undiscovered"],
		otherForms: ["pokestarf00prop"],
	},
	pokestarf002: {
		species: "Pokestar F-002",
		eggGroups: ["Undiscovered"],
		otherForms: ["pokestarf002prop"],
	},
	pokestarspirit: {
		species: "Pokestar Spirit",
		eggGroups: ["Undiscovered"],
		otherForms: ["pokestarspiritprop"],
	},
	pokestarblackdoor: {
		species: "Pokestar Black Door",
		eggGroups: ["Undiscovered"],
		otherForms: ["pokestarblackdoorprop"],
	},
	pokestarwhitedoor: {
		species: "Pokestar White Door",
		eggGroups: ["Undiscovered"],
		otherForms: ["pokestarwhitedoorprop"],
	},
	pokestarblackbelt: {
		species: "Pokestar Black Belt",
		eggGroups: ["Undiscovered"],
		otherForms: ["pokestarblackbeltprop"],
	},
	pokestarufopropu2: {
		species: "Pokestar UFO-PropU2",
		baseForme: "Pokestar UFO",
		eggGroups: ["Undiscovered"],
	},
};

