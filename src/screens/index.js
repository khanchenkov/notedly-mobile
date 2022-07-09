import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import Feed from './feed';
import Favorites from './favorites';
import MyNotes from './mynotes';
import NoteScreen from './note';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export default function() {
    return(
        <>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen
                        name="Home"
                        component={Home}
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen name="Note" component={NoteScreen} />
                </Stack.Navigator>
            </NavigationContainer>
        </>
    )
};

function Home() {
    return(
        <Tab.Navigator>
            <Tab.Screen
                name="Feed"
                component={Feed}
                options={{
                    tabBarLabel: 'Feed',
                    tabBarIcon: ({color, size = 24}) => (
                        <MaterialCommunityIcons name="home" size={size} color={color} />
                    )
                }}
            />
            <Tab.Screen
                name="My Notes"
                component={MyNotes}
                options={{
                    tabBarLabel: 'Feed',
                    tabBarIcon: ({color, size = 24}) => (
                        <MaterialCommunityIcons name="notebook" size={size} color={color} />
                    )
                }}
            />
            <Tab.Screen
                name="Favorites"
                component={Favorites}
                options={{
                    tabBarLabel: 'Feed',
                    tabBarIcon: ({color, size = 24}) => (
                        <MaterialCommunityIcons name="star" size={size} color={color} />
                    )
                }}
            />
        </Tab.Navigator>
    )
}