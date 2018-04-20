import { Sheep } from './sheep';
import { SuperSheep } from './supersheep';
import { getRandomBetweenValues } from '../utilities';

export class Tournament
{
    public sheeps: Sheep[];
    constructor(...sheeps: Sheep[])
    {
        this.sheeps = sheeps;
    }

    start()
    {
        console.log("The tournament is starting!");
        let sheepNb = this.sheeps.length;
        while(this.sheeps.length > 1)
        {
            for(let sheep of this.sheeps)
            {
                let targetIndex: number;
                let target: Sheep = sheep;
                while(target == sheep)
                {
                    targetIndex = getRandomBetweenValues(0, sheepNb-1);
                    target = this.sheeps[targetIndex];
                }
                sheep.dealDamage(target);
                if(target.isAlive() == false)
                {
                    this.sheeps.splice(targetIndex, 1);
                    sheepNb --;
                }
            }
        }
        let winner = this.sheeps[0];
        console.log(`The winner is ${winner.name}`);
    }
}