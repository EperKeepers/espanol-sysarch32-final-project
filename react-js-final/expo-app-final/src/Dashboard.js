import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { darkBlack, lightDarkGrey } from './Constants';
import { Ionicons } from "@expo/vector-icons";


const Dashboard = (props) => {
  console.log(props);
  return (
    <View style={{ flex: 1, paddingTop: 55, backgroundColor: 'rgb(217, 217, 217)' }}>
      <Image
        style={{
          flex: 2,
          marginHorizontal: 20,
          borderBottomLeftRadius: 20,
          borderBottomRightRadius: 20,
        }}
        source={{
          uri: "https://d2ofqe7l47306o.cloudfront.net/games/1920x1080/elden-ring-10.jpg"
        }}
      />

      <View style={{ flex: 1, margin: 20 }}>
        <Text
          style={{
            fontSize: 22,
            fontWeight: "bold",
            width: 300,
            alignSelf: "center",
            textAlign: "center",
          }}
        >
          Unlock the World of Elden Ring: Harness the Power of Code to Forge Your Epic Journey
        </Text>
        <Text
          style={{ marginVertical: 20, textAlign: 'center', color: 'gray' }}
        >
          Welcome, brave tarnished, to the realm of Elden Ring! Prepare to embark on an epic journey, where the power of code will guide you through a world waiting to be unlocked.
          Embrace the challenge, forge your destiny, and let the coding magic commence!
        </Text>
        <View style={{
          flexDirection: "row",
          marginTop: 20
        }}
        >
          <TouchableOpacity
            style={{
              padding: 15,
              backgroundColor: darkBlack,
              justifyContent: 'center',
              borderRadius: 30,
              alignItems: 'center',
              margin: 5,
              flex: 1,
            }}
          >
            <Text style={{
              color: 'white',
            }}>Skip</Text>
          </TouchableOpacity>
          <TouchableOpacity
          onPress={() => {
            props.navigation.navigate('Home');
          }}
            style={{
              padding: 15,
              backgroundColor: lightDarkGrey,
              justifyContent: 'center',
              borderRadius: 30,
              marginLeft: 5,
              alignItems: 'center',
              flexDirection: 'row',
              flex: 1,
            }}
          >
            <Text style={{ color: 'white' }}>
              Next
            </Text>
            <Ionicons
              name="arrow-forward"
              style={{ marginLeft: 10 }}
              size={18}
              color="white"
            />
          </TouchableOpacity>

        </View>
      </View>
    </View>
  );
};



export default Dashboard;
