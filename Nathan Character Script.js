var iFileName = "Nathan Character Script.js;"

// Add Hakuma and Variants
RaceList["hakuma"] = {
	regExpSearch : /hakuma/i,
	name : "Hakuma - Basic",
	sortname : "Hakuma, Jigokuan",
	source : ["HOTA", 32],
	plural : "Hakuma",
	size : 3,
	speed : { walk : { spd : 30, enc : 20 } },
	languageProfs : ["Oriental", "Oni"],
	vision : [["Darkvision", 60]],
	skills : ["Perception"],
	age : "Hakuma age slightly faster than their base humanoid race and their maximum lifespan is somewhat reduced",
	height : " are of the same height as typical for their humanoid race",
	weight : " are of the same weight as typical for their humanoid race",
	scorestxt : "Hakuma: +1 Constitution and +1 to Charisma;",
	scores : [0, 1, 0, 0, 0, 1],
	trait : "Hakuma (+1 Constitution and +1 to Charisma)" + desc([
	"Darkvision (1st level): You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light.",
	"Taint Resistance (1st level): You have advantage on saving throws against all Taint effects..",
	]),
};
AddRacialVariant("hakuma", "brute", {
	regExpSearch : /Hakuma brute/i,
	name : "Hakuma Brute",
	source : ["HOTA", 32],
	trait : "Hakuma Brute (+1 to your Strength)\n   Fire Resistance. You have resistance to fire damage.",
});
AddRacialVariant("hakuma", "warped", {
	regExpSearch : /hakuma warped/i,
	name : "Hakuma Warped",
	source : ["HOTA", 32],
	trait : "Warped Hakuma (+1 to your Charisma)\n   Jigokuan Legacy: You know the chill touch cantrip\n  3rd level: Invisibility; 5th level: 		Darkness.\n   Both spells can be used once per long rest. Charisma is my spellcasting ability for these.",
	abilitySave : 6,
	spellcastingAbility : 6,
	spellcastingBonus : {
		name : "Jigokuan Legacy (level 1)",
		spells : ["chill touch"],
		selection : ["chill touch"],
		atwill : true,
    },
	features : {
		"invisibility" : {
			name : "Invisibility",
			minlevel : 3,
			usages : 1,
			recovery : "long rest",
			tooltip : " (Jigokuan Legacy)",
			action : ["action", ""],
			spellcastingBonus : {
				name : "Jigokuan Legacy (level 3)",
				spells : ["invisibility"],
				selection : ["invisibility"],
				oncelr : true,
			},
		},
		"darkness" : {
			name : "Darkness",
			minlevel : 5,
			usages : 1,
			recovery : "long rest",
			tooltip : " (Jigokuan Legacy)",
			action : ["action", ""],
			spellcastingBonus : {
				name : "Jigokuan Legacy (level 5)",
				spells : ["darkness"],
				selection : ["darkness"],
				oncelr : true,
			},
		},
	},
});
AddRacialVariant("hakuma", "tiefling", {
	regExpSearch : /hakuma tiefling/i,
	name : "Hakuma / Tiefling",
	source : ["HOTA", 32],
    scorestxt : "",
	scores : [0, 0, 0, 0, 0, 2],
	trait : "Hakuma/Tiefling Combo (+2 to your Charisma and +1 to one other ability score of my choice)\n   Jigokuan/Infernal Legacy: You know the chill touch and thaumaturgy cantrip.\n   At 3rd level I gain: Icingdeath’s Frost and Burning Hands (level 2).\n   At 5th level i can cast the Darkness spell once per long rest.\n   These spells do not count against my number of cantrips/spells known.\n   Charisma is my spellcasting ability for these.",
	abilitySave : 6,
	spellcastingAbility : 6,
    	spellcastingBonus : [{
		name : "Infernal Legacy",
		spells : ["chill touch"],
		selection : ["chill touch"],
		firstCol : 'atwill',
        }, {
        name : "Infernal Legacy",
        spells : ["thaumaturgy"],
        selection : ["thaumaturgy"],
        firstCol : 'atwill',
        }],
        features : {
		"icingdeath’s frost" : {
			name : "Phoenix Frost",
			minlevel : 3,
			usages : 1,
			recovery : "long rest",
			tooltip : " (Jigokuan Legacy)",
			action : ["action", ""],
			spellcastingBonus : {
				name : "Phoenix Frost (level 2)",
				spells : ["icingdeath’s frost"],
				selection : ["icingdeath’s frost"],
				oncelr : true,
				},
			},
		"burning hands" : {
			name : "Phoenix Hands",
			minlevel : 3,
			usages : 1,
			recovery : "long rest",
			tooltip : " (Tiefling Legacy)",
			action : ["action", ""],
			spellcastingBonus : {
				name : "Phoenix Hands (level 2)",
				spells : ["burning hands"],
				selection : ["burning hands"],
				oncelr : true,
				},
			},
		"darkness" : {
			name : "Darkness",
			minlevel : 5,
			usages : 1,
			recovery : "long rest",
			tooltip : " (Jigokuan Legacy)",
			action : ["action", ""],
			spellcastingBonus : {
				name : "Jigokuan Legacy (level 5)",
				spells : ["darkness"],
				selection : ["darkness"],
				oncelr : true,
			},
		},
	},
});
// New Spell Icingdeath's Frost
SpellsList["icingdeath's frost"] = {
	name : "Icingdeath's Frost",
	classes : ["warlock", "wizard"],
	source : ["UA:DO", 2],
	level : 2,
	school : "Evoc",
	time : "1 a",
	range : "Self",
	components : "S,M\u2020",
	compMaterial : "A vial of water",
	duration : "Instantaneous",
	save : "Con",
	description : "15-ft cone centered on you 3d8+1d8/SL Cold dmg \u0026 spd 0; save half and no speed reduction.",
	descriptionMetric : "6+1,5-m/SL rad on corpse all crea 3d12 Poison & 3d12 Necrotic dmg; save half; see B (100gp cons.)",
	descriptionFull : "A burst of icy cold energy emanates from you in a 30-foot cone. Each creature in that area must make a Constitution saving throw. On a failed save, a creature takes 3d8 cold damage and is covered in ice for 1 minute or until a creature uses its action to break the ice off itself or another creature. A creature covered in ice has its speed reduced to 0. On a successful save, a creature takes half as much damage with no additional effects." + AtHigherLevels + "When you cast this spell using a spell slot of 3rd level or higher, increase the cold damage by 1d8 for each slot level above 2nd."
};
// Add 3 Warlock Pact Boon Options from Heroes of the Orient
var AddWarlockPactBoon = function(boonName, boonObj) {
	var warInv = ClassList.warlock.features["pact boon"];
	if (!warInv || (warInv.choices.indexOf(boonName) !== -1 && warInv[boonName.toLowerCase()].source && boonObj.source && warInv[boonName.toLowerCase()].source.toSource() === boonObj.source.toSource())) return; // the exact same thing is being added again, so skip it
	var useName = boonName;
	var suffix = 1;
	while (warInv.choices.indexOf(useName) !== -1) {
		suffix += 1;
		useName = boonName + " [" + suffix + "]";
	};
	warInv.choices.push(useName);
	warInv[useName.toLowerCase()] = boonObj;
};
AddWarlockPactBoon("pact of the immaterial", {
	name : "Pact of the Immaterial",
	source : ["MAH", 58],
	description : "\n   " + "(action)-become incorporeal til end of my turn. While incorporeal, I can move through other creatures/objects as if they were difficult terrain. I take 5 (1d10) force damage if I end my turn inside a creature/object and ejected into the nearest empty space",
	usages : ["", "", 1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6],
	recovery : "long rest",
	action : ["action", " (become incoporial-end/turn)"]
});
AddWarlockPactBoon("pact of the invoker", {
	name : "Pact of the Invoker",
	source : ["MAH", 58],
	description : "\n   " + "I learn a 1st level wizard spell-counts as warlock spell for me-doesn’t count against my # spells known. I cast the spell once w/o spell slot. 1/long rest-cast spell at higher level by spending a spell slot as normal. @5th lv. I learn an additional invocation, and again @ 11th lv, and @ 17th lv; These invocations don’t count towards my max invocations known",
	usages : 1,
	recovery : "long rest",
	spellcastingBonus : {
		name : "Pact of the Invoker",
		class : "wizard",
		level : [1, 1],
		oncelr : true,
		atwill : true
	},
}),
AddWarlockPactBoon("pact of the swift", {
	name : "Pact of the Swift",
	source : ["MAH", 58],
	description : "\n   " + "My initiative roll always = my Cha score (losing ties, inc vs. Lair Actions)",
	addMod : {
		type : "skill", field : "Init", mod : "Cha-Dex", text : "I use my Charisma modifier for initiative rolls instead of Dexterity."
	},
});
// Add Warlock Invocations from Heroes of the Orient
AddWarlockInvocation("Collared Chains (prereq: level 15 warlock, Pact of the Chain)", {
	name : "Collared Chains",
	source : ["MAH", 60],
	description : "\n   " + "I can have up to two familiars of different types simultaneously",
	prereqeval : "classes.known.warlock.level >= 15 && What('Class Features Remember').indexOf('warlock,pact boon,pact of the chain') !== -1"
});
AddWarlockInvocation("Death’s Refusal (prereq: level 9 warlock)", {
	name : "Death’s Refusal",
	source : ["MAH", 60],
	description : "\n   " + "Once per long rest, I can cast revivify",
	spellcastingBonus : {
		name : "Death’s Refusal",
		spells : ["revivify"],
		selection : ["revivify"],
		oncelr : true
	},
	prereqeval : "classes.known.warlock.level >= 9"
});
AddWarlockInvocation("Eldritch Materials (prereq: level 15 warlock, Pact of the Blade)", {
	name : "Eldritch Materials",
	source : ["MAH", 60],
	description : "\n   " + "1 hr ritual w/my pact wpn, that fails if I'm disturbed-gains prop. of adamantine, jade, kirinwood, or mithral-if it can be made of these, or the ritual will fail",
	prereqeval : "classes.known.warlock.level >= 15 && What('Class Features Remember').indexOf('warlock,pact boon,pact of the blade') !== -1"
});
AddWarlockInvocation("Eldritch Eyes", {
	name : "Eldritch Eyes",
	source : ["MAH", 60],
	description : "\n   " + "My vision rg. inc 30 ft; I see up to 1 mile away w/no difficulty, able to discern even fine details as though looking at something no more than 100 ft away" + "\n   " + "Prereq: blindsight/darkvision/devil’s sight/tremorsense/truesight"
}),
AddWarlockInvocation("Fey Haste (prereq: the Archfey patron)", {
	name : "Fey Haste",
	source : ["MAH", 60],
	description : "\n   " + "If a hostile creature comes in 10 ft of me-(reaction)-move up to my speed.",
	action : ["reaction", " (move upto my spd)"],
	prereqeval : "(/\\barchfey\\b/).test(classes.known.warlock.subclass)"
});
AddWarlockInvocation("Fire Lance (prereq: level 5 warlock, the Great Phoenix patron)", {
	name : "Fire Lance",
	source : ["MAH", 60],
	description : "\n   " + "Learn fire bolt sp. at will, w/o sp. slots, doesn't count toward # known" + "\n   " + "When I cast fire bolt-(bonus)-cast it again if targets same",
	action : ["bonus action", " (2nd bolt vs same cre)"],
	spellcastingBonus : {
		name : "Fire Lance",
		spells : ["fire bolt"],
		selection : ["fire bolt"],
		atwill : true
	},
	prereqeval : "(/great phoenix/).test(classes.known.warlock.subclass) && classes.known.warlock.level >= 5",
});
AddWarlockInvocation("Fists from Beyond (prereq: level 5 warlock, Seishin Mystic patron)", {
	name : "Fists from Beyond",
	source : ["MAH", 60],
	description : "\n   " + "I can attack twice w/my unarmed strikes, instead of once. Unarmed Strikes do d6, instead of d4" + "\n   " + "prereq: Martial Spirits invocation",
	prereqeval : "(/seishin mystic/).test(classes.known.warlock.subclass) && classes.known.warlock.level >= 5",
});
AddWarlockInvocation("Forced Fate (prereq: level 5 warlock, the Great Old One patron)", {
	name : "Forced Fate",
	source : ["MAH", 60],
	description : "\n   " + "Fail a save:-(Reaction)-spend a warlock spell slot to succeed on the save instead",
	usages : 1,
	action : ["reaction", " (spend slot to save)"],
	recovery : "short rest",
	prereqeval : "(/great old one/).test(classes.known.warlock.subclass) && classes.known.warlock.level >= 5",
});
AddWarlockInvocation("Fulmination (prereq: level 5 warlock, the Great Wyrm patron)", {
	name : "Fulmination",
	source : ["MAH", 60],
	description : "\n   " + "Casting thunderous smite w/a spell slot of 2nd level/higher, dmg inc 2d6/slot above 1st",
	prereqeval : "(/great wyrm/).test(classes.known.warlock.subclass) && classes.known.warlock.level >= 5",
});
AddWarlockInvocation("Fulmination (prereq: level 5 warlock, the Great Wyrm patron)", {
	name : "Fulmination",
	source : ["MAH", 60],
	description : "\n   " + "Casting thunderous smite w/a spell slot of 2nd level/higher, dmg inc 2d6/slot above 1st",
	prereqeval : "(/great wyrm/).test(classes.known.warlock.subclass) && classes.known.warlock.level >= 5",
});
AddWarlockInvocation("Grand Invoker (prereq: level 15 warlock, Pact of the Invoker)", {
	name : "Grand Invoker",
	source : ["MAH", 60],
	description : "\n   " + "After a long rest, I can replace 1 known invocation with an unknown one",
	prereqeval : "classes.known.warlock.level >= 15 && What('Class Features Remember').indexOf('warlock,pact boon,pact of the invoker') !== -1",
});
AddWarlockInvocation("Gravity Well (prereq: level 15 warlock)", {
	name : "Gravity Well",
	source : ["MAH", 60],
	description : "\n   " + "I can cast reverse gravity once using a spell slot",
	spellcastingBonus : {
		name : "Gravity Well",
		spells : ["reverse gravity"],
		selection : ["reverse gravity"],
		oncelr : true
	},
	prereqeval : "classes.known.warlock.level >= 15",
});
AddWarlockInvocation("Illogical Initiative (prereq: level 15 warlock, Pact of the Swift)", {
	name : "Illogical Initiative",
	source : ["MAH", 60],
	description : "\n   " + "I add my proficiency bonus to my initiative",
	prereqeval : "classes.known.warlock.level >= 15 && What('Class Features Remember').indexOf('warlock,pact boon,pact of the swift') !== -1"
});
AddWarlockInvocation("Impervious Shell (prereq: level 5 warlock, the Great Turtle patron)", {
	name : "Impervious Shell",
	source : ["MAH", 60],
	description : "\n   " + "I take dmg-(Reaction)-cast shield w/o a spell slot. dont prevent this dmg",
	action:["reaction", " (cast shield)"],
	spellcastingBonus : {
		name : "Impervious Shell",
		spells : ["shield"],
		selection : ["sheld"],
		atwill : true
	},
	prereqeval : "(/great turtle/).test(classes.known.warlock.subclass) && classes.known.warlock.level >= 5"
});
AddWarlockInvocation("Incorporeal Mind (prereq: level 5 warlock, Pact of the Immaterial)", {
	name : "Incorporeal Mind",
	source : ["MAH", 60],
	description : "\n   " + "Once incorporeal, effects blinding/charming/deafening/frightening me are removed.",
	prereqeval : "What('Class Features Remember').indexOf('warlock,pact boon,pact of the immaterial') !== -1 && classes.known.warlock.level >= 5"
});
AddWarlockInvocation("Limited Magic Immunity (prereq: level 5 warlock, the Great Sylvan patron)", {
	name : "Limited Magic Immunity",
	source : ["MAH", 60],
	description : "\n   " + "I'm immune to spells of 2nd lv./lower. Cantrips affect me as normal.",
	savetxt : {
		immune : ["spells of 2nd level or lower"],
	},
	prereqeval : "(/great sylvan/).test(classes.known.warlock.subclass) && classes.known.warlock.level >= 5"
});
AddWarlockInvocation("Martial Spirit (prereq: Seishin Mystic patron)", {
	name : "Martial Spirit",
	source : ["MAH", 60],
	description : "\n   " + "I can use Cha for unarmed strikes atk/dmg rolls; d4 for dmg ",
	prereqeval : "(/seishin mystic/).test(classes.known.warlock.subclass)"
});
AddWarlockInvocation("Master Escapist (prereq: level 15 warlock, Pact of the Immaterial)", {
	name : "Master Escapist",
	source : ["MAH", 60],
	description : "\n   " + "(Action)-I become incorporeal (even incapacitated-Unless paralyzed/petrified)" + "\n   " + "The incapacitating effect's removed",
	prereqeval : "classes.known.warlock.level >= 15 && What('Class Features Remember').indexOf('warlock,pact boon,pact of the immaterial') !== -1"
});
AddWarlockInvocation("Otherworldly Armor (prereq: level 15 warlock)", {
	name : "Otherworldly Armor",
	source : ["MAH", 60],
	description : "\n   " + "I gain a +1 bonus to AC and saving throws.",
	prereqeval : "classes.known.warlock.level >= 15"
});
AddWarlockInvocation("Stolen Pact Magic (prereq: level 12 warlock, Pact of the Invoker)", {
	name : "Stolen Pact Magic",
	source : ["MAH", 60],
	description : "\n   " + "1/long rest, I gain an additional warlock spell slot",
	prereqeval : "classes.known.warlock.level >= 12 && What('Class Features Remember').indexOf('warlock,pact boon,pact of the invoker') !== -1"
});
AddWarlockInvocation("Thermal Flux (prereq: level 15 warlock, Seishin Mystic patron)", {
	name : "Thermal Flux",
	source : ["MAH", 60],
	description : "\n   " + " Hit w/eldritch blast/unarmed strike-(bonus)-cast cone of cold/heat metal w/sp.slot" + "\n   " + "Spell must be centered on creature I hit; I have adv on Con saves to maintain concentration on the heat metal spell, as I'm assisted by my patron.",
	action:["bonus action", " (cast a spell*)"],
	spellcastingBonus : {
	    name : "Thermal Flux",
			spells : ["cone of cold", "heat metal"],
	    selection : ["cone of cold", "heat metal"]
	},
	prereqeval : "(/seishin mystic/).test(classes.known.warlock.subclass) && classes.known.warlock.level >= 15"
});
AddWarlockInvocation("Thundercrack (prereq: level 15 warlock, the Great Wyrm patron)", {
	name : "Thundercrack",
	source : ["MAH", 60],
	description : "\n   " + "When I deal dmg w/thunderous smite, my target has disadv on its saves vs. it.",
	prereqeval : "(/great wyrm/).test(classes.known.warlock.subclass) && classes.known.warlock.level >= 15"
});
AddWarlockInvocation("Tie Breaker (prereq: level 5 warlock, Pact of the Swift)", {
	name : "Tie Breaker",
	source : ["MAH", 60],
	description : "\n   " + "I win all initiative ties.",
	prereqeval : "classes.known.warlock.level >= 5 && What('Class Features Remember').indexOf('warlock,pact boon,pact of the swift') !== -1"
});

// Add 1 Warlock Patron Subclass from Heroes of the Orient
AddSubClass("warlock", "the Great Phoenix", {
	regExpSearch : /^(?=.*warlock)(?=.*phoenix).*$/i,
	subname : "the Great Phoenix",
	source : ["Homebrew", 0],
	languageProfs : ["Celestial", 1],
	spellcastingExtra : ["control flames","produce flame","burning hands","heat metal","continual flame","scorching ray","fireball","revivify","fire shield","death ward","immolation","reincarnate"],
	features : {
		"subclassfeature1" : {
			name : "Blessing of the Phoenix",
			source : ["Homebrew", 0],
			minlevel : 1,
			description : "\n   " + "Your Patron has ignited your soul with a mote of its own eternal life force. You learn the cantrip Produce Flame. Additionaly you gain the Eldritch Blast (Fiery Blast) cantrip, if you don't have already know it. When you cast Eldritch Blast you can choose to have its bolts deal fire damage (Fiery Blast) rather then force damage ",
            spellcastingBonus : {
				name : "Fiery Blast",
				spells : ["eldritch blast"],
				selection : ["eldritch blast"],
                firstCol : 'atwill'
		},
    },
		"subclassfeature1.1" : {
			name : "Flame Ignite",
			source : ["Homebrew", 0],
			minlevel : 1,
			description : "\n   " + "You gain the ability to start fires with a touch. As an action, you can magically ignite a flammable object you touch with your hand —an object such as a torch, a piece of tinder, or the hem of drapes.",
		},
		"subclassfeature6" : {
			name : "Firebird's Vengeance",
			source : ["Homebrew", 0],
			minlevel : 6,
			description : "\n   " + "When a creature you can see within 60 feet deals damage to you or a friendly creature, you can use your reaction to force the attacker to make a Dex save. It takes Fire damage equal to 2d10 + Your Warlock level on a failed save, or half as much damage on a succesful one. You can't use this again until you finish a short or long rest.",
			action : ["reaction", ""]
		},
		"subclassfeature10" : {
			name : "Phoenix Protection",
			source : ["Homebrew", 0],
			minlevel : 10,
			description : "\n   " + "Your patron has given you the ability to use the phoenix power of regeneration." + "\n   " + "-You can call upon your patron's power to heal itself. As an action on your turn, you can magically gain hitpoints equal to half your hit point maximum." + "\n   " + "-All diseases and poisons are cured as well. Once you use this feature, you can't use it again until you take a long rest." + "\n   " + "-For the rest of the battle you can regenerate hit points equal to 1d8 + your spellcasting bonus.",
			action : ["action", ""]
		},
		"subclassfeature14" : {
			name : "Phoenix Inferno",
			source : ["Homebrew", 0],
			minlevel : 14,
			description : "\n   " + "See Additional Notes page.",
			toNotesPage : [{
			name : "Phoneix Inferno",
			note : "\n   " + "Beginning at 14th level, when you deal fire damage to a creature, you can call the great power of the phoenix itself to engulf the creature with an inferno of fire." + "\n   " + "-The creature takes 5d10 fire damage, and you regain 5d10 hitpoints as the embers of this flame restore your body." + "\n   " + "-You can use this feature twice per day.",
			}],
		},
	},
});