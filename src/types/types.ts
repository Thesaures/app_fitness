import { SvgProps } from "react-native-svg";

export type card ={
    index:number;
    header:string;
    number:number;
    time:number;
    Svg:React.FC<SvgProps>;
}
export type waterMeasure={
    start:string;
    end:string;
    measure:number;
}
export type singleSet={
    Svg:React.FC<SvgProps>;
    name:string;
    set:string;
}
export type equip ={
    name:string;
    Svg:React.FC<SvgProps>;
}
export type exercises ={
    id:string;
    set:singleSet[]
}
export type step ={
    id:string;
    heading:string;
    discription:string
}
export type singleData ={
    data:string;
}
