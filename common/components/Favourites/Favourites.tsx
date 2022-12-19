import React from 'react';

import {
    Text,
    View,
    StyleSheet,
    Image,
    ScrollView,
} from 'react-native';

import {
    titleFontSize,
    colorWhite,
    itemFontSize,
    primaryColor,
    linkColor,
} from '../../../styles/variables';

import CustomButton from '../Button';

import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';

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
                        <View style={styles.favCardWrapper}>
                            <Card key={fav.name} style={styles.container}>
                                <Card.Cover style={styles.backgroundImg} source={require('../../../assets/images/house.jpg')} />
                                <Card.Content style={styles.details}>
                                    <Text style={styles.hostleName}>{fav.name}</Text>
                                    <Text style={styles.locality}>{fav.locality}</Text>
                                </Card.Content>
                                <Card.Actions style={styles.details}>
                                    <Button
                                        onPress={() =>
                                            navigation.navigate('hostelDetails', { name: 'hostel Details' })
                                        }
                                        mode='contained'
                                    >
                                        Book
                                    </Button>
                                </Card.Actions>
                            </Card>
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
        color: linkColor,
        marginTop: 10,
    },
    container: {
        marginRight: 10,
        width: 240,
    },
    backgroundImg: {
        width: '100%',
        height: 140,
    },
    details: {
        padding: 10,
        // backgroundColor: colorWhite,
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
    favCardWrapper: {
        height: 280,
    }
});

export default Favourites;