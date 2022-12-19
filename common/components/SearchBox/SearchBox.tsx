import React from 'react';

import {
    Text,
    View,
    Button,
    StyleSheet,
    TextInput
} from 'react-native';
import { Searchbar } from 'react-native-paper';

import Icon from 'react-native-vector-icons/MaterialIcons';

// export type Props = {
//     navigation: {
//         navigate: Function,
//     },
// };

const SearchBox: React.FC = () => {

    const [searchQuery, setSearchQuery] = React.useState('');

    const onChangeSearch = (query: string) => setSearchQuery(query);

    return (
        <View>
            <View style={styles.searchSection}>
                <Searchbar
                    placeholder="Search"
                    onChangeText={onChangeSearch}
                    value={searchQuery}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    searchSection: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#fff',
        height: 50,
        margin: 10,
    },
});


export default SearchBox;