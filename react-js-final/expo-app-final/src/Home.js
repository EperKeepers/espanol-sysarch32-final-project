import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import Background from './Background';
import LoginButton from './LoginButton';
import RegistrationButton from './RegistrationButton';
import { darkBlack } from './Constants';


const Home = (props) => {
    return (
        <Background>
            <View style={{ marginHorizontal: 40, marginVertical: 200 }}>
            <Text style={{ color: 'white', fontSize: 40 }}>Embrace the </Text>
            <Text style={{ color: 'white', fontSize: 40 }}>Elden Code, where</Text>
            <Text style={{ color: 'white', fontSize: 40 }}>worlds intertwine</Text>
            <Text style={{ color: 'white', fontSize: 40 }}>and algorithms</Text>
            <Text style={{ color: 'white', fontSize: 40, marginBottom: 220 }}>ignite.</Text>
            <LoginButton bgColor={darkBlack} textColor='white' btnLabel="Login" Press={() => props.navigation.navigate("Login")} />
            <RegistrationButton bgColor= 'white' textColor={darkBlack} style={{ marginTop: 15}} btnLabel="Sign up" Press={() => props.navigation.navigate("Signup")} />
            </View>
        </Background>
    );
}

const styles = StyleSheet.create({})

export default Home;