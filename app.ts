import { Sheep, SheepColors } from './models/sheep';
import { SuperSheep } from './models/supersheep';
import { Tournament } from './models/tournament';



let jacquie: Sheep = new SuperSheep("Jacquie", SheepColors.White);
let michel: Sheep = new SuperSheep("Michel", SheepColors.Pink);
let paul: Sheep = new Sheep("Paul", SheepColors.Black);
let victor: Sheep = new Sheep("Victor", SheepColors.Red);
let hugo: Sheep = new Sheep("Hugo", SheepColors.Yellow);

let tourney: Tournament = new Tournament(jacquie, michel, paul, victor, hugo);
tourney.start();