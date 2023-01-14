import React from 'react';
import { Image, TouchableOpacity, Text } from 'react-native';

import TrophyIcon from '../../assets/trophy.png';

const IntakeButton = (props) => {
    return (
        <TouchableOpacity className="flex items-center">
            <Image source={TrophyIcon} className="h-10 w-10 m-1 rounded-none"></Image>
            <Text className="font-bold">{props.day}</Text>
        </TouchableOpacity>
        
    )
}

export default IntakeButton;