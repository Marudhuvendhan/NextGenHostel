import React from 'react';

import {
    Text,
    View,
    Button,
    StyleSheet,
    TextInput
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

// export type Props = {
//     navigation: {
//         navigate: Function,
//     },
// };

const SearchBox: React.FC = () => {

    const searchHostels = () => {

    }
    
    return (
        <View>
            <View style={styles.searchSection}>
                <TextInput
                    style={styles.input}
                    placeholder="search..."
                    onChangeText={searchHostels}
                    underlineColorAndroid="transparent"
                />
                <Icon style={styles.searchIcon} name="search" size={20} color="grey" />
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
        borderColor: 'grey',
        borderWidth: 2,
        height: 50,
        borderRadius: 50,
        padding: 10,
        margin: 10,
    },
    searchIcon: {
        padding: 0,
    },
    input: {
        flex: 1,
        paddingTop: 10,
        paddingRight: 10,
        paddingBottom: 10,
        paddingLeft: 0,
        height: 50,
    },
});


export default SearchBox;