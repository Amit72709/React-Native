import { View, Text, SectionList, StyleSheet } from 'react-native';
import React from 'react';

const DATA = [
  {
    title: 'Main dishes',
    data: [
      { id: 1, name: 'Pizza' },
      { id: 2, name: 'Burger' },
      { id: 3, name: 'Risotto' },
    ],
  },
  {
    title: 'Fruits',
    data: [
      { id: 4, name: 'Apple' },
      { id: 5, name: 'Banana' },
      { id: 6, name: 'Orange' },
    ],
  },
  {
    title: 'Sides',
    data: [
      { id: 7, name: 'French Fries' },
      { id: 8, name: 'Onion Rings' },
      { id: 9, name: 'Fried Shrimps' },
    ],
  },
  {
    title: 'Drinks',
    data: [
      { id: 10, name: 'Water' },
      { id: 11, name: 'Coke' },
      { id: 12, name: 'Beer' },
    ],
  },
  {
    title: 'Desserts',
    data: [
      { id: 13, name: 'Cheese Cake' },
      { id: 14, name: 'Ice Cream' },
    ],
  },
];

const SectionListCompo = () => {
  const renderItems = ({ item }) => (
    <View style={styles.item}>
      <Text style={styles.itemText}>{item.name}</Text>
    </View>
  );

  const renderHeaders = ({ section }) => (
    <View style={styles.header}>
      <Text style={styles.headerText}>{section.title}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <SectionList
        sections={DATA} // ✅ correct prop name
        renderItem={renderItems}
        keyExtractor={item => item.id.toString()}
        renderSectionHeader={renderHeaders}
      />
    </View>
  );
};

export default SectionListCompo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
  header: {
    backgroundColor: '#f0f0f0',
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  item: {
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  itemText: {
    fontSize: 16,
  },
});
