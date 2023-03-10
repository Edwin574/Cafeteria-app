import React from 'react';
import { View,Text,StyleSheet,TextInput } from 'react-native';
import COLORS from '../utility/Colors';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const CustomInput = ({label,IconName,error,onFocus=()=>{},...props}) => {
    return (
        <View style={{marginBottom:20}}>
            <Text style={styles.label}>{label}</Text>
            <View style={styles.inputContainer}>
                <MaterialCommunityIcons name={IconName} size={24} color={COLORS.black} />
                <TextInput
                    autoCorrect={false}
                    onFocus={() => { }}
                    onBlur={() => { }}
                    style={{ color: COLORS.mediumGreen, flex: 1 }}
                    {...props}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    label: {
        marginVertical: 5,
        fontSize: 14,
        color:COLORS.mediumGreen,
    },
    inputContainer:{
        height: 60,
        backgroundColor: 'transparent',
        flexDirection: 'row',
        paddingHorizontal: 15,
        borderBottomWidth: 2.5,
        borderBottomColor:COLORS.primaryGreen,
        alignItems: 'center',
        display: 'flex',
        gap:5,
    }
})
export default CustomInput;