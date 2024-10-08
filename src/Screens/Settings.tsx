/* eslint-disable react/react-in-jsx-scope */
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Dropdown } from 'react-native-element-dropdown';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useTranslation } from "react-i18next";

const Settings =()=>{
    const data = [
        { label: 'English', value: 'en' },
        { label: 'French', value: 'fr' },
      ];
      const [value, setValue] = useState('');
      const {t,i18n} = useTranslation();
      const changeLang =(value)=>{
           i18n.changeLanguage(value);
      }
    return(
        <Dropdown
        style={styles.dropdown}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        data={data}
        search
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder="Select item"
        searchPlaceholder="Search..."
        value={value}
        onChange={item => {
          setValue(item.value);
          console.log('item : ',item.value);
          changeLang(item.value);
        }}
      />
    )
}

export default Settings;

const styles = StyleSheet.create({
    dropdown: {
      margin: 16,
      height: 50,
      borderBottomColor: 'gray',
      borderBottomWidth: 0.5,
    },
    icon: {
      marginRight: 5,
    },
    placeholderStyle: {
      fontSize: 16,
    },
    selectedTextStyle: {
      fontSize: 16,
    },
    iconStyle: {
      width: 20,
      height: 20,
    },
    inputSearchStyle: {
      height: 40,
      fontSize: 16,
    },
  });