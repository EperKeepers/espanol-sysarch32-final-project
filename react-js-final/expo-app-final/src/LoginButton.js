import { View, Text, TouchableOpacity, Touchable } from 'react-native';
import React from 'react';
import { darkBlack } from './Constants';

export default function LoginButton({ bgColor, btnLabel, textColor, Press }) {
    return (
        <TouchableOpacity
            onPress={Press}
            style={{
                backgroundColor: darkBlack,
                borderRadius: 100,
                alignItems: 'center',
                width: 310,
                paddingVertical: 10,
                marginTop: -200
            }}>
            <Text style={{
                color: 'white',
                fontSize: 23,
                fontWeight: 'bold'
            }}>{btnLabel}
            </Text>
        </TouchableOpacity>
    );
}