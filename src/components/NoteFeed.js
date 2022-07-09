import React from 'react';
import { FlatList, View, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

import Note from './Note';

const FeedView = styled.View`
    height: 100px;
    overflow: hidden;
    margin-bottom: 10px;
`;

const Separator = styled.View`
    height: 1px;
    width: 100%;
    background-color: #ced0ce
`;

const NoteFeed = props => {
    return (
        <View>
            <FlatList
                data={props.notes}
                keyExtractor={({ id }) => id.toString()}
                ItemSeparatorComponent={() => <Separator />}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        onPress={() => {
                            console.log(item.id)
                            return props.navigation.navigate('Note', {
                                id: item.id
                            })
                        }}
                    >
                        <FeedView>
                            <Note note={item} />
                        </FeedView>
                    </TouchableOpacity>
                )}
            />
        </View>
    );
};

export default NoteFeed;