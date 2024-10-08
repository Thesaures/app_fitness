import { Control, Controller, FieldErrors, FieldValues, useForm } from "react-hook-form";
import { Text, TextInput, View } from "react-native"
import Icon from "react-native-vector-icons/MaterialIcons";
import styles from "./styles";
import { FC } from "react";
type input ={
    icon:string;
    name:string;
    placeHolder:string;
    control:Control<FieldValues, any>;
    password?:boolean;
    rules:any;
}

const InputFields:FC<input> =({icon,name,placeHolder,control,password,rules})=>{
    // const {icon,name,placeHolder,control} =prop;
    return(
        
        
            
            <Controller
            name={name}
            control={control}
            render={({field:{onBlur,onChange,value},fieldState:{error}})=>
                <>
                    <View style = {[styles.name,
                    {borderColor:error?"red":'black',borderWidth:3}
                    ]}>
                    <Icon name={icon} size={22}/>
                    <TextInput 
                    style = {styles.textIput} 
                    placeholder={placeHolder} 
                    placeholderTextColor={'grey'} 
                    onChangeText={onChange}
                    value={value}
                    secureTextEntry={password}
                    />  
                    </View>
                    {error ? <Text style={styles.error}>{error.message}</Text>:<Text/>}
                </>
            
            }
            rules={rules}
            />    
    )
}
export default InputFields;