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

import { Divider } from 'react-native-paper';

import {
    Text,
    View,
    StyleSheet,
    SafeAreaView,
    ScrollView,
    Image,
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';
import Favourites from '../../common/components/Favourites';
import SearchBox from '../../common/components/SearchBox';
import HostelCard from '../../common/components/HostelCard';
import BottomNav from '../../common/components/BottomNavigation';
export type Props = {
    navigation: {
        navigate: Function,
    },
};

const HomeScreen: React.FC<Props> = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.appWrapper}>
            <ScrollView
                contentInsetAdjustmentBehavior="automatic"
            >
                <View style={styles.header}>
                    <View style={styles.logo}>
                        <Image
                            source={require('../../assets/images/logo.png')}
                        />
                    </View>
                    <Text style={styles.menuIcon}>
                        <Icon name="menu" size={30} color={primaryColor} />
                    </Text>
                </View>
                <Divider bold style={styles.divider} />
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
            {false && <BottomNav />}
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    logo: {
        height: 36,
        width: 36,
    },
    divider: {
        height: 2,
    },
    appWrapper: {
        backgroundColor: colorWhite,
    },
    header: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: colorWhite,
        padding: 10,
        marginBottom: 10,
        borderBottomColor: secondaryColor,
        height: 60,
    },
    menuIcon: {
        marginTop: 10,
    },
    wrapper: {
        padding: 10,
        backgroundColor: colorWhite,
    },
    searchBox: {
        marginBottom: 40,
        marginTop: 20,
    },
    favourites: {
        marginBottom: 40,
    }
});

export default HomeScreen;