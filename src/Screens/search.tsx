import React from "react";
import { View,Text, StyleSheet } from "react-native";

const Search =()=>{
    return(
        <View style={styles.container}>
            <Text>this is Search</Text>
        </View>
    )
}
export default Search;
const styles = StyleSheet.create({
    container:{
        alignItems:'center',
        justifyContent:'center'
    }
})