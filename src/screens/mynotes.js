import React from 'react';
import {Button, Text, View} from 'react-native';

const MyNotes = () => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>My notes</Text>
            {/*<Button*/}
            {/*    title="Keep reading"*/}
            {/*    onPress={() => props.navigation.navigate('Note')}*/}
            {/*/>*/}
        </View>
    );
};

export default MyNotes;