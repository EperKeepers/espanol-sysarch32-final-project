import React from 'react';
import { TextInput } from 'react-native';
import { lightGrey, lightWhite } from './Constants';

const Field = props => {
    return (
        <TextInput
            {...props}
            style={{
                borderRadius: 100,
                color: lightWhite,
                paddingHorizontal: 12,
                width: 310,
                height: 40,
                backgroundColor: lightGrey,
                marginRight: 5,
                marginVertical: 10
            }}
            placeholderTextColor={lightWhite}>
        </TextInput>
    );
};

export default Field;