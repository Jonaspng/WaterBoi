import React from 'react';
import { Text, View } from 'react-native';
import { Card } from 'react-native-paper';
import IntakeButton from './IntakeButton';

const WeeklyIntake = (props) => {
    const { data } = props;
    const days = [{ d: "Mon", isGold: true }, { d: "Tues", isGold: true }, { d: "Wed", isGold: false }, { d: "Thurs", isGold: false }, { d: "Fri", isGold: false }, { d: "Sat", isGold: true }, { d: "Sun", isGold: false }]
    return (
        <View>
            <Text className="mx-2 py-2 text-2xl font-bold">Weekly Stats</Text>
            <Card className="py-2 mx-2">
                <View className="flex-row justify-around py-2 mx-2">
                    {
                        days.map((item, idx) => {
                            return (
                                <IntakeButton key={idx} day={item.d} isGold={item.isGold} />
                            )
                        })
                    }
                </View>
            </Card>
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