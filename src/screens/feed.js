import { Text } from 'react-native';
import { useQuery, gql } from '@apollo/client';
import NoteFeed from "../components/NoteFeed";
import Loading from '../components/Loading';

const GET_NOTES = gql`
    query notes {
        notes {
            id
            created
            content
            favorite_count
            author {
                username
                id
                avatar
            }
        }
    }
`;

const Feed = props => {
    const { loading, error, data } = useQuery(GET_NOTES);

    if (loading) return <Loading />;
    if (error) return <Text>Error loading notes</Text>;
    return <NoteFeed notes={data.notes} navigation={props.navigation}/>;
};

export default Feed;