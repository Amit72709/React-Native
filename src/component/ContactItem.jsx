import { View, Text } from 'react-native';
import React from 'react';
import styles from '../screen/contact/styles';


const ContactItem = ({ name, email }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.email}>{email}</Text>
    </View>
  );
};

export default ContactItem;
