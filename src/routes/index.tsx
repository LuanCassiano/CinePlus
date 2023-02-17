import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../screens/Home';

type RootStackParamList = {
    home: undefined;
}

declare global {
    namespace ReactNavigation {
        interface RootParamList extends RootStackParamList { }
    }
}

const Stack = createStackNavigator();

export default function RootNavigator() {
    return (
        <Stack.Navigator
            screenOptions={{
                header: props => <></>
            }}
        >
            <Stack.Screen name="home" component={HomeScreen} />
        </Stack.Navigator>
    )
}
