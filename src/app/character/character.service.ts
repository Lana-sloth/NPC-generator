export class CharacterService {

    constructor(){}
    
    getLists(a: string): string[] {
        switch (a) {
            case 'skin': return ['light','medium','dark'];
            case 'weight': return ['skinny', 'medium weight', 'fat'];
            
            case 'humanFemaleNames': 
                let hfNames = 'Abigail, Aemily, Emilia, Alexa, Alinea, Alina, Leena, Allyson, Allison, Alya, Aliya, Alys, Alyce, Ami, Amee, Andrea, Aendrea, Aria, Arya, Ariana, Aryana, Ariel, Arielle, Ashlene, Ashlyne, Aubree, Aubria, Bree, Audree, Audria, Dree, Aurora, Ava, Averee, Avery, Bella, Brianna, Brynn, Bryanna, Brooke, Brooklyn, Camila, Clayre, Clara, Clayra, Claire, Cloe, Cloey, Delyla, Dalia, Eliana, Elyna, Liana, Lyana, Ella, Ellie, Elli, Elyssa, Lyssie, Emma, Eva, Evylen, Faline, Genesys, Jenessa, Gina, Ginna, Janna, Grayce, Grace, Halia, Halie, Hanna, Hannah, Harper, Peria, Hazel, Azalea, Isabel, Belle, Jasmine, Jocelyn, Joyce, Celyne, Kaeli, Kathryn, Kathrinn, Cathryn, Kayla, Kym, Kymber, Layla, Laila, Lanna, Lea, Leia, Leah, Lily, Lyly, Lisbeth, Lysbeth, Luna, Loona, Madisyn, Maya, Maia, Mea, Melania, Melany, Mena, Mina, Mila, Myla, Milly, Amelia, Naomi, Nataly, Natta, Natylie, Natty, Nycole, Nicolle, Olyva, Alivia, Olivia, Penelope, Penny, Rianna, Ryanna, Ruby, Ryla, Rilie, Rylie, Samitha, Samentha, Sara, Sarah, Savanna, Scarlet, Sharlotte, Carlotta, Sophia, Stelly, Stella, Vala, Valentyna, Valea, Valerya, Valerie, Victoria, Victora, Violet, Viola, Zoe, Zoey, Zosy';
                return hfNames.split(', ');

            case 'humanMaleNames': 
                let hmNames = 'Aaron, Aaryn, Abram, Bram, Abyl, Abel, Adam, Aedam, Adrian, Hadrian, Aiden, Aidyn, Alyx, Alix, Andres, Andrew, Andre, Angel, Anthony, Astin, Axel, Axyl, Benjamyn, Benjamin, Braddeus, Bradyn, Brynden, Brandyn, Bryne, Bryan, Bran, Calyb, Caleb, Camryn, Cam, Carliss, Cartyr, Cartus, Chirles, Charly, Conner, Cristian, Crystan, Damien, Damyn, Daniel, Dannel, Dann, Danny, David, Davyd, Diegon, Tiagon, Domnac, Dylan, Eli, Ely, Elias, Elyas, Elijah, Elijan, Emilian, Emynwell, Emmyn, Emmon, Eric, Eryc, Ethan, Athyn, Evan, Evyn, Ezran, Ezrus, Gabreil, Gabreal, Gael, Gayl, Gavyn, Gavin, Gray, Grasyn, Haddeus, Hudsen, Handyr, Hander, Harold, Haryld, Horus, Horace, Horyce, Hoseas, Huntyr, Han, Hynry, Henro, Iaen, Ian, Isaac, Isiah, Isaias, Ivaen, Ivan, Jacoby, Jacob, Jaeden, Jayden, Jak, Jyck, Jasyn, Jason, Jax, Jaxon, Jaymes, Iamus, Jestin, Yestin, John, Jonn, Jonath, Joathyn, Jorden, Jordyn, Joseth, Joeseph, Joshen, Goshen, Josyah, Josius, Jovan, Julian, Julyan, Kevin, Kevan, Lan, Alyn, Landon, Landyn, Lenus, Linus, Leon, Leo, Lynard, Levi, Levy, Liam, Logan, Lucan, Luc, Lucas, Lucyus, Louis, Lyncon, Lincus, Mason, Masyn, Mathew, Mattius, Matt, Maximer, Maximus, Michael, Migwell, Mither, Nathyn, Nathan, Nathynel, Nathanyel, Nicholus, Nik, Noam, Nolyn, Nolan, Olver, Olliver, Osco, Oscus, Oscar, Owyn, Owen, Remus, Jaeremy, Rian, Ryan, Robett, Robb, Roman, Romyn, Ryder, Samwell, Samuel, Sebasten, Bastien, Taegus, Santus, Theodor, Theodus, Thedoras, Thomys, Tommas, Tomm, Thom, Tophyr, Cristor, Tylor, Ty, Tylus, Victor, Vyctor, Vincent, Vyncent, Vynce, Wann, Wanny, Willam, Willem, Wytt, Xander, Alexander, Xavyer, Xavy, Havy, Zachaery, Zeke, Zeek, Ezekyel';
                return hmNames.split(', ');

            case 'elfMaleNames': 
                let emNames = 'Aerlyn, Aiaruen, Alwyn, Amlaith, Amyr, Aneiryn, Aravar, Aravilar, Arcalinte, Arden, Ardis, Artigol, Arundel, Arwaine, Benrodyr, Berethani, Bethal, Brisaine, Britomar, Caedrus, Caendun, Calahir, Carados, Carrick, Cathbar, Celedor, Charivar, Corbesont, Deruwyn, Dolartu, Dydd, Ehangwyn, Elenwyd, Elferin, Emerwen, Emrys, Enuren, Ethren, Evaryan, Faelar, Fallon, Florimel, Gennal, Guiomart, Heilyn, Jaheel, Jelanen, Jelenneth, Karasin, Kessa, Killian, Kyrian, Laith, Lareth, Laurl, Lavayn, Lorrim, Malmagor, Marlys, Melias, Morgan, Mourn, Myrdivar, Myrrath, Narwain, Nyatar, Nym, Olmas, Olwain, Oreth, Orlpar, Panwyr, Parwyn, Pelltar, Peren, Raede, Raniel, Remaelde, Rentar, Respen, Reuel, Rhaine, Rhistel, Rianneth, Rinya, Roedyn, Runir, Saevel, Selcar, Seledra, Selwyn, Shay, Silevran, Soveliss, Taeghen, Taleraed, Tarbenay, Taratar, Taulured, Telmar, Terari, Thaniel, Thaedras, Twyll, Uel, Veasse, Verraine, Yslar, Zelmar';
                return emNames.split(', ');

            case 'elfFemaleNames': 
                let efNames = 'Amra, Anwyn, Arlanna, Arwyl, Auruewyn, Branwyn, Caeradwyn, Caercarwyn, Cea, Cerene, Damaera, Felwyn, Hacathra, Imizel, Jastra, Jelifer, Jhaumrithe, Jocelyn, Maeve, Maidel, Melimae, Merissa, Mialee, Moenna, Ninafer, Parlee, Quamara, Rahasia, Seriade, Shanna, Sharlea, Silenna, Talindra, Vadania, Venye, Vestele, Wendelain, Ysberyl';
                return efNames.split(', ');

            case 'orcMaleNames': 
                let omNames = 'Agar, Akaros, Arrakk, Augh, Besk, Bruegar, Dahk, Durth, Derkk, Devdas, Dgul, Drood, Druuk, Eagol, Edals, Fang, Ekk, Gar, Garlak, Ghorn, Gnarsh(t), Gobar, Gogar, Gothog, Gremog, Grimslade, Grinkel, Gronz, Grumbar, Gugal, Guzud, Hargul, Harl, Harll, Hogar, Honzu, Hoog, Hool, Hordar, Horrach, Hoygh, Huagh, Jhanzur, Jutor, Jzets, Kalip, Karash, Kesk, Kol, Korgul, Krell, Krusk, Lagazi, Lorzak, Lubash, Lugh, Mimerk, Mord, Murook, Nizam, Nogu, Nyarl, Omotar, Ohr, Ohtar, Orngart, Ordich, Orrusk, Oth, Raorr, Rendar, Rheen, Sark, Scrag, Sorgh, Taing, Tanglar, Tarak, Targ, Tawar, Thar, Tharag, Thog, Thoin, Toemor, Tomph, Toop, Trood, Tulmak, Tzens, Ubada, Udhgar, Ugarth, Ugurth, Ungar, Ungvar, Urzad, Vaath, Vanchu, Vtam, Whudu, Wogg, Wogar, Wrnach, Wung, Wykks, Xar, Xtec, Yark, Yazar, Yetto, Yurk, Zarx, Zotl, Zuboko';
                return omNames.split(', ');

            case 'orcFemaleNames': 
                let ofNames = 'Betharra, Bree, Creske, Edarreske, Duvaega, Franch, Fukel, Gaaki, Grai, Grigri, Gynk, Huru, Neske, Ootah, Orgaega, Parih, Puyet, Puyetto, Tupacu, Varra, Yeskarra';
                return ofNames.split(', ');

            case 'race': return ['Half-Elf','Half-Orc','Human', 'Dwarf','Halfling'];
            case 'rareRace': return ['Elf','Gnome','Tiefling','Dragonborn'];
            case 'genderCis': return ['cis male','cis female'];
            case 'genderQueer': return ['trans male','trans female','nonbinary (more feminine)','nonbinary (more masculine)','nonbinary (neutral)'];
            case 'libido': return ['straight','gay','bisexual','asexual'];
            case 'characteristic': return ['Absentminded','Arrogant','Boorish','Chews something','Clumsy','Curious','Dim-witted','Fiddles and fidgets nervously','Frequently uses the wrong word','Friendly','Irritable','Prone to predictions of certain doom','Pronounced scar','Slurs words, lisps or stutters','Speaks loudly or whispers','Squints','Stares into distance','Suspicious','Uses colorful oaths and exclamations','Uses flowery speech or long words'];
            case 'ideal': return ['Aspiration (any)','Charity (good)','Community (lawful)','Creativity (chaotic)','Discovery (any)','Fairness (lawful)','Freedom (chaotic)','Glory (any)','Greater good (good)','Greed (evil)','Honor (lawful)','Independence (chaotic)','Knowledge (neutral)','Life (good)','Live and let live (neutral)','Might (evil)','Nation (any)','People (neutral)','Power (evil)','Pedemption (any)'];
            case 'bond': return ['Personal goal or achievement','Family members','Colleagues or compatriots','Benefactor, patron or employer','Romantic interest','Special place','Keepsake','Valuable possession','Revenge'];
            case 'flaw': return ['Forbidden love or romantic susceptibility','Decadence','Arrogance',"Envy of another person's possessions or station",'Overpowering greed','Prone to rage','Powerful enemy','Specific phobia','Shameful or scandalous history','Secret crime or misdeed','Possession of forbidden lore','Foolhardy bravery'];            
            default: return [];
        }
    }
}
