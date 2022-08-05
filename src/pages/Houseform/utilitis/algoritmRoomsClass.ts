import { sizesInterface } from "../../../models/sizes";
import { inputValueInterface } from "../../../models/inputinterface";
import {sizes} from '../../../models/sizes'

interface houseSpaces {
    bedroom?: sizes
    kitchen?: sizes
    dining?: sizes
    bathroom?: sizes
} 
export default class roomsDistribution {
    spaces: sizesInterface
    inputFormHouse: inputValueInterface
    
    constructor(objsizes: sizesInterface , inputFormHouse: inputValueInterface){
        this.spaces = objsizes
        this.inputFormHouse = inputFormHouse

    }
    private  newHouseSpace:houseSpaces = {}
    private result: number = 0;
    private width: number[] = []
    
    private getTotalWidth(){
        let i: keyof typeof this.newHouseSpace ;
        for (i in this.newHouseSpace){
            if (this.newHouseSpace[i]){
                let houseSpaceItem = this.newHouseSpace[i]!
                this.width.push(houseSpaceItem.w)
            }
        }
        if (this.width.length > 0){
            this.result = this.width.reduce((acumulator, number) => acumulator + number,0)
            return this.result 
        }
    }
    private getRandomProp(obj: sizesInterface){
        let keys = Object.keys(obj)  as Array<keyof typeof obj>
        let randomIndex = keys[Math.floor(Math.random() * keys.length)];
        return {keys, randomIndex}
    }
    private getRandomSpace(){ //funciona
        let {randomIndex} = this.getRandomProp(this.spaces);
        let randomSpace = this.spaces[randomIndex][Math.round(Math.random())]
        return randomSpace
    }
    private matchSpaces(){//funciona
        let randomSpace = this.getRandomSpace();
        let {keys} = this.getRandomProp(this.spaces)
        for (let item in keys){
            if (keys[item] == randomSpace.id && !this.newHouseSpace[keys[item]]){
                this.newHouseSpace[keys[item]] = randomSpace;
            }
        }
    }
    private setLimitArea(){
        while (this.result < Number(this.inputFormHouse.width)){
            this.getTotalWidth()
            this.matchSpaces();
        }
    }
    getDistributionSpaces(){
        this.setLimitArea();
        return this.newHouseSpace
    }
}