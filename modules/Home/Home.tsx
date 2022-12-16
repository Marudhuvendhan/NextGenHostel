import React from 'react';
import {
    fontColor,
    logoFontSize,
    bold,
    primaryColor,
    trinaryColor,
    bgColor,
    secondaryColor,
    colorWhite,
} from '../../styles/variables';

import {
    Text,
    View,
    StyleSheet,
    SafeAreaView,
    ScrollView,
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';
import Favourites from '../../common/components/Favourites';
import SearchBox from '../../common/components/SearchBox';
import HostelCard from '../../common/components/HostelCard';
export type Props = {
    navigation: {
        navigate: Function,
    },
};

const HomeScreen: React.FC<Props> = ({ navigation }) => {
    return (
        <SafeAreaView>
             <ScrollView
                contentInsetAdjustmentBehavior="automatic"
            >
            <View style={styles.header}>
                <Text style={styles.logo}>NextGen Hostels</Text>
                <Text style={styles.menuIcon}>
                    <Icon name="menu" size={30} color={primaryColor} />
                </Text>
            </View>
            <View style={styles.wrapper}>
                <View style={styles.searchBox}>
                    <SearchBox />
                </View>
                <View style={styles.favourites}>
                    <Favourites navigation={navigation} />
                </View>
                <HostelCard navigation={navigation} />
            </View>
            </ScrollView>
        </SafeAreaView>
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
        marginBottom: 40,
        backgroundColor: colorWhite,
        padding: 10,
        borderBottomColor: secondaryColor,
    },
    menuIcon: {
        marginTop: 5,
    },
    wrapper: {
        padding: 10,
        backgroundColor: colorWhite,
    },
    searchBox: {
        marginBottom: 40,
    },
    favourites: {
        marginBottom: 40,
    }
});

export default HomeScreen;