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

import { RUPEE_SYMBOL } from '../../constants';

export type Props = {
  navigation: {
    navigate: Function,
  },
};

const data = [
  {
    name: 'Hostel name 1',
    locality: 'Perungudi',
    price: 100,
  },
  {
    name: 'Hostel name 2',
    locality: 'Thuraipakkam',
    price: 200,
  },
  {
    name: 'Hostel name 3',
    locality: 'Siruseri',
    price: 300,
  },
  {
    name: 'Hostel name 4',
    locality: 'Thuraipakkam',
    price: 1000,
  },
  {
    name: 'Hostel name 5',
    locality: 'Siruseri',
    price: 3000,
  }
];

const HostelCard: React.FC<Props> = ({ navigation }) => {
  return (
    <View>
      <View style={styles.header}>
        <Text style={styles.title}>Top Reviewed</Text>
        <Text
          onPress={() =>
            navigation.navigate('hostelDetails', { name: 'hostel Details' })
          }
          style={styles.moreLink}
        >
          More
        </Text>
      </View>
      <ScrollView style={styles.favouriteList} showsVerticalScrollIndicator={false}>
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
                <Text style={styles.locality}>
                  <Text>{RUPEE_SYMBOL}</Text>
                  {fav.price}
                  /day
                </Text>
                <Text style={styles.viewLink}>
                  <Text
                    onPress={() =>
                      navigation.navigate('hostelDetails', { name: 'hostel Details' })
                    }
                  >
                    Explore
                  </Text>
                </Text>
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
    flexDirection: 'row',
    alignItems: 'stretch',
    borderColor: 'grey',
    borderWidth: 1,
    marginBottom: 20,
    height: 120,
  },
  backgroundImg: {
    width: 120,
    height: 120,
    flexGrow: 1,
  },
  details: {
    padding: 10,
    backgroundColor: colorWhite,
    flexGrow: 4,
  },
  favouriteList: {

  },
  hostleName: {
    fontSize: itemFontSize,
    fontWeight: '600',
  },
  locality: {
    marginBottom: 5,
  },
  customBtn: {},
  viewLink: {
    textAlign: 'right',
    paddingRight: 10,
    color: primaryColor,
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 8,
    paddingVertical: 5,
    paddingHorizontal: 5,
    width: '100%',
    marginVertical: 5,
  },
  shadowProp: {
    shadowColor: '#171717',
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 20,
  },
});

export default HostelCard;