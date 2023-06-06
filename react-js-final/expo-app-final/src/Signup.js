import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Background from './Background';
import RegistrationButton from './RegistrationButton';
import { darkGreen, lightDarkGrey } from './Constants';
import Field from './Field';

const Signup = (props) => {
  return (
    <Background>
      <View style={{ alignItems: 'center', width: 400 }}>
        <Text
          style={{
            color: 'rgb(217, 217, 217)',
            fontSize: 64,
            fontWeight: 'bold',
            marginTop: 80,
          }}>
          Register
        </Text>
        <Text
          style={{
            color: 'rgb(217, 217, 217)',
            fontSize: 19,
            fontWeight: 'normal',
            marginBottom: 20,
          }}>
          Create a new account
        </Text>
        <View
          style={{
            backgroundColor: 'rgb(217, 217, 217)',
            height: 700,
            width: 450,
            borderTopLeftRadius: 80,
            borderTopRightRadius: 100,
            paddingTop: 80,
            alignItems: 'center',
            marginRight: 5,
          }}>
          <Field placeholder="First Name" />
          <Field placeholder="Last Name" />
          <Field placeholder="Email / Username" keyboardType="email-address" />
          <Field placeholder="Contact Number" keyboardType="numeric" />
          <Field placeholder="Password" secureTextEntry={true} />
          <Field placeholder="Confirm Password" secureTextEntry={true} />
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              width: '78%',
              paddingRight: 16,
              marginTop: 100,
            }}>
            <Text
              style={{
                color: 'grey',
                marginLeft: 50,
                marginTop: 30,
                fontSize: 16,
              }}>
              By signing in, you agree to our{' '}
            </Text>
            <Text
              style={{
                color: lightDarkGrey,
                marginTop: 30,
                fontWeight: 'bold',
                fontSize: 16,
              }}>
              Terms &amp;
            </Text>
          </View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              width: '78%',
              paddingRight: 16,
              marginBottom: 10,
            }}>
            <Text
              style={{
                color: lightDarkGrey,
                fontWeight: 'bold',
                marginLeft: 10,
                marginTop: 2,
                fontSize: 16,
              }}>
              Conditions
            </Text>
            <Text
              style={{
                color: 'grey',
                marginLeft: 50,
                marginLeft: 5,
                fontSize: 16,
                marginTop: 2,
              }}>
              and {' '}
            </Text>
            <Text
              style={{
                color: lightDarkGrey,
                fontWeight: 'bold',
                marginTop: 2,
                fontSize: 16,
              }}>
              Privacy Policy
            </Text>
          </View>
          <RegistrationButton
            textColor="white"
            style={{ marginTop: -160 }}
            bgColor={darkGreen}
            btnLabel="Signup"
            Press={() => {
              alert('Account created');
              props.navigation.navigate('Login');
            }}
          />
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
            }}>
            <Text
              style={{
                color: 'grey',
                fontSize: 16,
                marginTop: 10,
                fontWeight: 'normal'
              }}>
              Already have an account?{' '}
            </Text>
            <TouchableOpacity
              onPress={() => props.navigation.navigate('Login')}>
              <Text
                style={{
                  color: lightDarkGrey,
                  fontWeight: 'bold',
                  marginTop: 10,
                  fontSize: 16
                }}>
                Login
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Background>
  );
};

export default Signup;
