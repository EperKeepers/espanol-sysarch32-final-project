import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Dashboard = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to the Dashboard!</Text>
      <View style={styles.cardContainer}>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Total Users</Text>
          <Text style={styles.cardValue}>1,000</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Total Orders</Text>
          <Text style={styles.cardValue}>500</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Revenue</Text>
          <Text style={styles.cardValue}>$10,000</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  cardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 2,
    width: '30%',
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  cardValue: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#007bff',
  },
});

export default Dashboard;
