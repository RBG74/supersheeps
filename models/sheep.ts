import { getRandomBetweenValues } from '../utilities';

export enum SheepColors {
    White = "White", 
    Black = "Black", 
    Red = "Red", 
    Yellow = "Yellow", 
    Pink = "Pink"
}

export class Sheep 
{
    public name: string;
    public color: string;
    public size: number;
    public health: number;
    public attack: number;
    public defense: number;

    protected greetText: string;

    constructor(name: string, color: string) {
        this.name = name;
        this.color = color;
        this.size = getRandomBetweenValues(1, 100);
        this.health = getRandomBetweenValues(30, 50);
        this.attack = getRandomBetweenValues(5, 15);
        this.defense = getRandomBetweenValues(0, 5);

        this.greetText = `Hello, my name is ${this.name}`;
    }

    
    greet()
    {
        console.log(this.greetText);
    }

    takeDamage(damage: number){
        let actualDamage = damage - this.defense;
        if(actualDamage < 0) actualDamage = 0;
        console.log(`${this.name} takes ${actualDamage}`);
        this.health -= actualDamage;
    }

    dealDamage(sheep: Sheep)
    {
        console.log(`${sheep.name} attacks ${this.name}.`);
        sheep.takeDamage(this.attack);
    }

    displayTraits()
    {
        let message = `Name: ${this.name}\n`;
        message += `Color: ${this.color}\n`;
        message += `Size: ${this.size}\n`;
        message += `Health: ${this.health}\n`;
        message += `Attack: ${this.attack}\n`;
        message += `Defense: ${this.defense}`;
        console.log(message);
    }

    isAlive()
    {
        return this.health > 0;
    }
}