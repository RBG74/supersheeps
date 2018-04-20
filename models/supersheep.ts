import { getRandomBetweenValues } from '../utilities';
import { Sheep } from './sheep';

export class SuperSheep extends Sheep
{
    constructor(name: string, color: string) {
        super(name, color);
        this.defense += getRandomBetweenValues(3, 6);
        this.attack += getRandomBetweenValues(1, 3);
    }

    greet()
    {
        console.log(this.greetText + " and I am a SuperSheep");
    }
}