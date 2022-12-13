import React from 'react';
import {
    fontColor,
    logoFontSize,
    bold,
    primaryColor,
    trinaryColor,
    bgColor,
} from '../../styles/variables';

import {
    Text,
    View,
    Button,
    StyleSheet,
    TextInput
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';
import Favourites from '../../common/components/Favourites';
import SearchBox from '../../common/components/SearchBox';

export type Props = {
    navigation: {
        navigate: Function,
    },
};

const HomeScreen: React.FC<Props> = ({ navigation }) => {
    return (
        <View>
            <View style={styles.header}>
                <Text style={styles.logo}>NG Hostel</Text>
                <Text style={styles.menuIcon}>
                    <Icon name="menu" size={30} color={primaryColor} />
                </Text>
            </View>
            {/* <Button
                title="Hostel Details"
                onPress={() =>
                    navigation.navigate('hostelDetails', { name: 'hostel Details' })
                }
            /> */}
            <View>
                <SearchBox />
            </View>
            <View>
                <Favourites />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    logo: {
        fontSize: logoFontSize,
        color: primaryColor,
        fontWeight: bold,
    },
    header: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
    },
    menuIcon: {
        marginTop: 5,
    },
});

export default HomeScreen;