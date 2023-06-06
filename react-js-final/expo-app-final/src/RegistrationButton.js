import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { lightDarkGrey } from './Constants';

export default function RegistrationButton({ bgColor, btnLabel, textColor, Press, style }) {
    const buttonStyle = {
        backgroundColor: lightDarkGrey,
        borderRadius: 100,
        alignItems: 'center',
        width: 310,
        paddingVertical: 10,
        ...style, // Merge the custom style
    };

    const labelStyle = {
        color: 'white',
        fontSize: 23,
        fontWeight: 'bold',
    };

    return (
        <TouchableOpacity onPress={Press} style={buttonStyle}>
            <Text style={labelStyle}>{btnLabel}</Text>
        </TouchableOpacity>
    );
}
