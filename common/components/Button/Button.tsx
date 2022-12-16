import React from 'react';

import {
    Button,
    View,
} from 'react-native';

import {
    secondaryColor,
} from '../../../styles/variables';

export type ButtonProps = {
    title: any,
    onPress?: () => void ,
};

const CustomButton: React.FC<ButtonProps> = (props) => {
    return (
        <View>
            <Button
                color={secondaryColor}
                {...props}
            />
        </View>
    );
};

export default CustomButton;