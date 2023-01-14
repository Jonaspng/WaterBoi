import React from 'react';
import { Text, View } from 'react-native';
import IntakeButton from './IntakeButton';

const WeeklyIntake = () => {
    const days = ["Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun"]
    return (
        <View>
            <Text style={styles.headerStyle}>Weekly Intake</Text>
            <View className="flex-row justify-around bg-slate-50 border-gray-300 border rounded-md py-2 mx-2">
                {
                    days.map((idx, item) => {
                        <IntakeButton key={idx} day={item} />
                    })
                }
            </View>
        </View>
        
    );
}

const styles = ({
    headerStyle: {
        paddingHorizontal: 8,
        paddingVertical: 10,
        fontSize: 30,
        color: '#2E91EF'
    }
});

export default WeeklyIntake;