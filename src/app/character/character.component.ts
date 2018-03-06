import { Component } from '@angular/core';

import { Character } from './models/character.models';
import { race } from 'q';

@Component({
  selector: 'character',
  styleUrls:['./character.component.css'],
  template: `
  <div><h1>{{ character.name | titlecase }}</h1> </div>
  <div> <b>{{ character.race }}</b> </div>
  <div> <small>{{ character.gender }}, {{ character.libido }}</small> </div>
  <div> <small>{{ character.weight }}, {{ character.skin }}</small> </div>
  <p> {{ character.char }} </p>
  <table>
      <tr>
          <th>Ideal:</th>
          <td>{{ character.ideal }}</td>
      </tr>
      <tr>
          <th>Bond:</th>
          <td>{{ character.bond }}</td>
      </tr>
      <tr>
          <th>Flaw:</th>
          <td>{{ character.flaw }}</td>
      </tr>
  </table>
  `
})
export class CharacterComponent {
    
    skintoneList = ['light','medium','dark'];
    weightList = ['skinny', 'medium weight', 'fat'];
    femaleNamesList = 'Abigail, Aemily, Emilia, Alexa, Alinea, Alina, Leena, Allyson, Allison, Alya, Aliya, Alys, Alyce, Ami, Amee, Andrea, Aendrea, Aria, Arya, Ariana, Aryana, Ariel, Arielle, Ashlene, Ashlyne, Aubree, Aubria, Bree, Audree, Audria, Dree, Aurora, Ava, Averee, Avery, Bella, Brianna, Brynn, Bryanna, Brooke, Brooklyn, Camila, Clayre, Clara, Clayra, Claire, Cloe, Cloey, Delyla, Dalia, Eliana, Elyna, Liana, Lyana, Ella, Ellie, Elli, Elyssa, Lyssie, Emma, Eva, Evylen, Faline, Genesys, Jenessa, Gina, Ginna, Janna, Grayce, Grace, Halia, Halie, Hanna, Hannah, Harper, Peria, Hazel, Azalea, Isabel, Belle, Jasmine, Jocelyn, Joyce, Celyne, Kaeli, Kathryn, Kathrinn, Cathryn, Kayla, Kym, Kymber, Layla, Laila, Lanna, Lea, Leia, Leah, Lily, Lyly, Lisbeth, Lysbeth, Luna, Loona, Madisyn, Maya, Maia, Mea, Melania, Melany, Mena, Mina, Mila, Myla, Milly, Amelia, Naomi, Nataly, Natta, Natylie, Natty, Nycole, Nicolle, Olyva, Alivia, Olivia, Penelope, Penny, Rianna, Ryanna, Ruby, Ryla, Rilie, Rylie, Samitha, Samentha, Sara, Sarah, Savanna, Scarlet, Sharlotte, Carlotta, Sophia, Stelly, Stella, Vala, Valentyna, Valea, Valerya, Valerie, Victoria, Victora, Violet, Viola, Zoe, Zoey, Zosy';
    maleNamesList = 'Aaron, Aaryn, Abram, Bram, Abyl, Abel, Adam, Aedam, Adrian, Hadrian, Aiden, Aidyn, Alyx, Alix, Andres, Andrew, Andre, Angel, Anthony, Astin, Axel, Axyl, Benjamyn, Benjamin, Braddeus, Bradyn, Brynden, Brandyn, Bryne, Bryan, Bran, Calyb, Caleb, Camryn, Cam, Carliss, Cartyr, Cartus, Chirles, Charly, Conner, Cristian, Crystan, Damien, Damyn, Daniel, Dannel, Dann, Danny, David, Davyd, Diegon, Tiagon, Domnac, Dylan, Eli, Ely, Elias, Elyas, Elijah, Elijan, Emilian, Emynwell, Emmyn, Emmon, Eric, Eryc, Ethan, Athyn, Evan, Evyn, Ezran, Ezrus, Gabreil, Gabreal, Gael, Gayl, Gavyn, Gavin, Gray, Grasyn, Haddeus, Hudsen, Handyr, Hander, Harold, Haryld, Horus, Horace, Horyce, Hoseas, Huntyr, Han, Hynry, Henro, Iaen, Ian, Isaac, Isiah, Isaias, Ivaen, Ivan, Jacoby, Jacob, Jaeden, Jayden, Jak, Jyck, Jasyn, Jason, Jax, Jaxon, Jaymes, Iamus, Jestin, Yestin, John, Jonn, Jonath, Joathyn, Jorden, Jordyn, Joseth, Joeseph, Joshen, Goshen, Josyah, Josius, Jovan, Julian, Julyan, Kevin, Kevan, Lan, Alyn, Landon, Landyn, Lenus, Linus, Leon, Leo, Lynard, Levi, Levy, Liam, Logan, Lucan, Luc, Lucas, Lucyus, Louis, Lyncon, Lincus, Mason, Masyn, Mathew, Mattius, Matt, Maximer, Maximus, Michael, Migwell, Mither, Nathyn, Nathan, Nathynel, Nathanyel, Nicholus, Nik, Noam, Nolyn, Nolan, Olver, Olliver, Osco, Oscus, Oscar, Owyn, Owen, Remus, Jaeremy, Rian, Ryan, Robett, Robb, Roman, Romyn, Ryder, Samwell, Samuel, Sebasten, Bastien, Taegus, Santus, Theodor, Theodus, Thedoras, Thomys, Tommas, Tomm, Thom, Tophyr, Cristor, Tylor, Ty, Tylus, Victor, Vyctor, Vincent, Vyncent, Vynce, Wann, Wanny, Willam, Willem, Wytt, Xander, Alexander, Xavyer, Xavy, Havy, Zachaery, Zeke, Zeek, Ezekyel';
    raceList = ['Half-Elf','Half-Orc','Human', 'Dwarf','Halfling'];
    rareRaceList = ['Elf','Gnome','Tiefling','Dragonborn'];
    genderCisList = ['cis male','cis female'];
    genderQueerList = ['trans male','trans female','nonbinary (more feminine)','nonbinary (more masculine)','nonbinary (neutral)'];
    libidoList = ['straight','gay','bisexual','asexual'];
    characteristicsList = ['Absentminded','Arrogant','Boorish','Chews something','Clumsy','Curious','Dim-witted','Fiddles and fidgets nervously','Frequently uses the wrong word','Friendly','Irritable','Prone to predictions of certain doom','Pronounced scar','Slurs words, lisps or stutters','Speaks loudly or whispers','Squints','Stares into distance','Suspicious','Uses colorful oaths and exclamations','Uses flowery speech or long words'];
    idealsList = ['Aspiration (any)','Charity (good)','Community (lawful)','Creativity (chaotic)','Discovery (any)','Fairness (lawful)','Freedom (chaotic)','Glory (any)','Greater good (good)','Greed (evil)','Honor (lawful)','Independence (chaotic)','Knowledge (neutral)','Life (good)','Live and let live (neutral)','Might (evil)','Nation (any)','People (neutral)','Power (evil)','Pedemption (any)'];
    bondsList = ['Personal goal or achievement','Family members','Colleagues or compatriots','Benefactor, patron or employer','Romantic interest','Special place','Keepsake','Valuable possession','Revenge'];
    flawsList = ['Forbidden love or romantic susceptibility','Decadence','Arrogance',"Envy of another person's possessions or station",'Overpowering greed','Prone to rage','Powerful enemy','Specific phobia','Shameful or scandalous history','Secret crime or misdeed','Possession of forbidden lore','Foolhardy bravery'];

    getGender: string = this.genderGen()
    
    character: Character = {
        gender: this.getGender,
        name: this.nameGen(this.getGender),
        race: this.raceGen(),
        libido: this.libidoGen(),
        char: this.charGen(),
        ideal: this.idealGen(),
        bond: this.bondGen(),
        flaw: this.flawGen(),
        skin: this.skinGen(),
        weight: this.weightGen()
    }

    randomNum(num): number {
        return Math.floor(Math.random() * (num - 0))
    }
    skinGen(): string {
        let skintone = this.skintoneList;
        let random = this.randomNum(skintone.length - 1);
        return skintone[random] + ' skin color';
    }
    weightGen(): string {
        let weight = this.weightList;
        let random = this.randomNum(weight.length - 1);
        return weight[random];
    }
    nameGen(gender: string){
        let femaleNames = this.femaleNamesList;
        let maleNames = this.maleNamesList;
        let list;

        if (gender == 'cis male') list = maleNames;
        else if (gender == 'cis female') list = femaleNames;
        else {
            let random = this.randomNum(100);
            if (random < 50) list = femaleNames;
            else list = maleNames;
        }
        
        let namesList = list.split(', ');
        let random = this.randomNum(namesList.length - 1);

        return namesList[random];
    }
    raceGen(): string {
        let random = this.randomNum(20) + 1;
        let race = this.raceList;
        let rareRace = this.rareRaceList;
        let x;
        switch(random){
            case 1:
            case 2: 
                return race[0];
            case 3: 
                return race[1];
            case 4:
            case 5: 
            case 6:
            case 7:
            case 8:
            case 9:
                return race[2];
            case 10: 
            case 11:
            case 12:
            case 13:
            case 14:
                return race[3];
            case 15: 
            case 16:
            case 17:
            case 18:
            case 19:
                return race[4];
            case 20:
                random = this.randomNum(4);
                return rareRace[random];
            default:
                return race[2];
        }
    }
    genderGen(): string {
        let genderCis = this.genderCisList;
        let genderQueer = this.genderQueerList;
        let randomGender = this.randomNum(100);
        if (randomGender < 25) return genderCis[0];
        else if (randomGender >= 25 && randomGender < 50) return genderCis[1];
        else {
            randomGender = this.randomNum(4);
            return genderQueer[randomGender];
        }
    }
    libidoGen(): string {
        let libido = this.libidoList;
        let random = this.randomNum(libido.length - 1);
        return libido[random];
    }
    charGen(): string {
        let characteristic = this.characteristicsList;
        let random = this.randomNum(characteristic.length - 1);
        return characteristic[random];
    }
    idealGen(): string {
        let ideals = this.idealsList;
        let random = this.randomNum(ideals.length - 1);
        return ideals[random];
    }
    bondGen(): string {
        let bonds = this.bondsList;
        let random = this.randomNum(bonds.length - 1);
        return bonds[random];
    }
    flawGen(): string {
        let flaws = this.flawsList;
        let random = this.randomNum(flaws.length - 1);
        return flaws[random];
    }
}
