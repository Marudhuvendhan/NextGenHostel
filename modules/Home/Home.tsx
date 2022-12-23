import React, { useRef, useEffect } from 'react';
import {
    primaryColor,
    secondaryColor,
    colorWhite,
} from '../../styles/variables';

import { Divider, useTheme, Avatar } from 'react-native-paper';


import {
    Text,
    View,
    StyleSheet,
    SafeAreaView,
    ScrollView,
    Animated,
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';
import Favourites from '../../common/components/Favourites';
import SearchBox from '../../common/components/SearchBox';
import HostelCard from '../../common/components/HostelCard';
import BottomNav from '../../common/components/BottomNavigation';
import Menu from '../../common/components/Menu';
export type Props = {
    navigation: {
        navigate: Function,
    },
};

const HomeScreen: React.FC<Props> = ({ navigation }) => {
    const theme = useTheme();
    const [isShow, setShowDrawer] = React.useState(false);

    const fadeAnim = useRef(new Animated.Value(0)).current;


    useEffect(() => {
        Animated.timing(fadeAnim, {
            toValue: isShow ? 350 : 0,
            duration: 500,
            useNativeDriver: false,
        }).start();
    }, [isShow]);

    return (
        <SafeAreaView style={styles.appWrapper}>
            <ScrollView
                contentInsetAdjustmentBehavior="automatic"
            >
                <View style={{ ...styles.header, backgroundColor: theme.colors.primary }}>
                    <View style={styles.menuIcon}>
                        <Icon
                            name="menu"
                            size={30}
                            color={colorWhite}
                            onPress={() => setShowDrawer(!isShow)}
                        />
                    </View>
                    <View>
                        <Text style={styles.title}>Lavendar Leisure</Text>
                    </View>
                    <Avatar.Icon style={styles.avatar} size={50} icon="account-circle-outline" />
                </View>

                <Divider bold style={styles.divider} />
                <Animated.View style={{ height: fadeAnim }}>
                    <Menu collapsed={isShow} />
                </Animated.View>
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
    title: {
        color: colorWhite,
        fontSize: 20,
        paddingTop: 15,
        fontStyle: 'italic',
    },
    avatar: {
        marginTop: 7,
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
        backgroundColor: primaryColor,
        //paddingTop: 10,
        paddingLeft: 10,
        paddingBottom: 10,
        // marginBottom: 10,
        borderBottomColor: secondaryColor,
        height: 60,
    },
    menuIcon: {
        marginTop: 15,
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