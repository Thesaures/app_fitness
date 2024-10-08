import { equip, singleSet,exercises,step } from "../types/types";
import One from '../../assets/images/imOne.svg';
import Two from '../../assets/images/imTwo.svg';
import Three from '../../assets/images/imThree.svg';
import Four from '../../assets/images/imFive.svg';
import Five from '../../assets/images/imFive.svg';
import Six from '../../assets/images/imSix.svg'; 
import Dumbell from '../../assets/images/dumbell.svg';
import Bottle from '../../assets/images/bottle.svg';
import Rope from '../../assets/images/rope.svg';
import { singleData } from "../types/types";
export const SYMBOL_REGEX = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
export const CAPITAL_REGEX = /[A-Z]/;
export const NUMBER_REGEX = /[0-9]/;
export const USERNAME_REGEX = /[!@#$%^&*()_+\-=\[\]{};':"\\|,<>\/?]/;
export const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
export const CHECK_USERNAME = /^[A-Za-z]+ [A-Za-z]+$/;

const set:singleSet[] = [
    {
       Svg:One,
       name:'Warm Up',
       set:'05:00'
    },
    {
        Svg:Two,
        name:'Jumping Jack',
        set:'12x'
     },
     {
        Svg:Three,
        name:'Skipping',
        set:'15x'
     },
     {
        Svg:Four,
        name:'Squats',
        set:'20x'
     },
     {
        Svg:Five,
        name:'Arm Raises',
        set:'00:53'
     },
     {
        Svg:Six,
        name:'Rest And Drink',
        set:'02:00'
     },

]
 
export const sets:exercises[]=[
    {
        id:'1',
        set:set
    },
    {
        id:'2',
        set:set
    },
]
export const data:equip[]=[
    {
        name:'Dumbell',
        Svg:Dumbell
    },
    {
        name:'Rope',
        Svg:Rope
    },
    {
        name:'Bottle',
        Svg:Bottle
    },
    {
        name:'Bottle',
        Svg:Bottle
    },
]

export const steps:step[]=[
    {
        id:'01',
        heading:'Spread Your Arms',
        discription:'To make the gestures feel more relaxed, stretch your arms as you start this movement. No bending of hands.'
    },
    {
        id:'02',
        heading:'Rest at The Toe',
        discription:'The basis of this movement is jumping. Now, what needs to be considered is that you have to use the tips of your feet'
    },
    {
        id:'03',
        heading:'Adjust Foot Movement',
        discription:'Jumping Jack is not just an ordinary jump. But, you also have to pay close attention to leg movements.'
    },
    {
        id:'04',
        heading:'Clapping Both Hands',
        discription:'This cannot be taken lightly. You see, without realizing it, the clapping of your hands helps you to keep your rhythm while doing the Jumping Jack'
    }
]

export const carousalData:singleData[] =[
    {data:'One'},
    {data:'Two'},
    {data:'Three'},
    {data:'Four'},
    {data:'Five'},
    {data:'Six'},
    {data:'Seven'},
    {data:'Eight'},
    {data:'Nine'},
    {data:'Ten'},
    {data:'Eleven'},
    {data:'Twelve'},
]