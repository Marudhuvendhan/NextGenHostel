import React from 'react';

import {
    Text,
    View,
    Button,
    StyleSheet,
    Image,
    ScrollView,
} from 'react-native';

import {
    titleFontSize,
    colorWhite,
    itemFontSize,
    primaryColor,
} from '../../../styles/variables';

import CustomButton from '../Button';

import Icon from 'react-native-vector-icons/MaterialIcons';

export type Props = {
    navigation: {
        navigate: Function,
    },
};

const data = [
    {
        name: 'Hostel name 1',
        locality: 'Perungudi',
    },
    {
        name: 'Hostel name 2',
        locality: 'Thuraipakkam',
    },
    {
        name: 'Hostel name 3',
        locality: 'Siruseri',
    }
];

const Favourites: React.FC<Props> = ({ navigation }) => {
    return (
        <View>
            <View style={styles.header}>
                <Text style={styles.title}>My Favourites</Text>
                <Text
                    onPress={() =>
                        navigation.navigate('hostelDetails', { name: 'hostel Details' })
                    }
                    style={styles.moreLink}
                >
                    More
                </Text>
            </View>
            <ScrollView style={styles.favouriteList} horizontal showsHorizontalScrollIndicator={false}>
                {data.map(fav => {
                    return (
                        <View style={styles.container} key={fav.name}>
                            <Image
                                style={styles.backgroundImg}
                                source={require('../../../assets/images/house.jpg')}
                            />
                            <View style={styles.details}>
                                <Text style={styles.hostleName}>{fav.name}</Text>
                                <Text style={styles.locality}>{fav.locality}</Text>
                                <CustomButton
                                    title="Book"
                                    onPress={() =>
                                        navigation.navigate('hostelDetails', { name: 'hostel Details' })
                                    }
                                />
                            </View>
                        </View>
                    );
                })}
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    title: {
        fontSize: titleFontSize,
        marginBottom: 20,
    },
    header: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    moreLink: {
        color: primaryColor,
        marginTop: 10,
    },
    container: {
        flex: 1,
        flexDirection: 'column',
        marginRight: 10,
        width: 240,
        borderColor: 'grey',
        borderWidth: 1,
    },
    backgroundImg: {
        width: '100%',
        height: 140,
    },
    details: {
        padding: 10,
        backgroundColor: colorWhite,
    },
    favouriteList: {

    },
    hostleName: {
        fontSize: itemFontSize,
        fontWeight: '600',
        textAlign: 'center',
    },
    locality: {
        textAlign: 'center',
        marginBottom: 10,
    },
    customBtn: {},
});

export default Favourites;