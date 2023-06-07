import React, { useState } from 'react';
import axios from 'axios';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Background from './Background';
import LoginButton from './LoginButton';
import { darkBlack, lightDarkGrey } from './Constants';
import Field from './Field';
import { SERVER_IP_ADDRESS } from '../config';

const Login = () => {
    const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
            const response = await axios.post('http://'+SERVER_IP_ADDRESS+':3000/login', { email, password });
            console.log(response.data.message);
            alert("Successful Login");
            navigation.navigate("Dashboard");
          } catch (error) {
            if (error.response && error.response.data && error.response.data.message) {
              console.error('Error logging in:', error.response.data.message);
              alert("Failed Login: " + error.response.data.message);
            } else {
              console.error('Error logging in:', error);
              alert("Failed Login");
            }
          }          
      };

    return (
        <Background>
            <View style={{ alignItems: 'center', width: 400 }}>
                <Text style={{
                    color: 'rgb(217, 217, 217)',
                    fontSize: 60,
                    fontWeight: 'bold',
                    marginVertical: 70,
                    marginBottom: 40,
                }}>
                    Login
                </Text>
                <View style={{
                    backgroundColor: 'rgb(217, 217, 217)',
                    height: 700,
                    width: 450,
                    borderTopLeftRadius: 80,
                    borderTopRightRadius: 100,
                    paddingTop: 80,
                    alignItems: 'center',
                    marginRight: 5,
                }}>
                    <Text style={{
                        fontSize: 45,
                        color: darkBlack,
                        marginRight: 8,
                        marginTop: 10,
                        fontWeight: 'bold'
                    }}>
                        Welcome back,
                    </Text>
                    <Text style={{
                        fontSize: 45,
                        color: 'rgb(104, 83, 83)',
                        marginRight: 7,
                        fontWeight: 'bold'
                    }}>
                        EldenMates!
                    </Text>
                    <Text style={{
                        color: 'grey',
                        fontSize: 19,
                        fontWeight: 'normal',
                        marginTop: 5,
                        marginBottom: 20,
                        marginRight: 5,
                    }}>
                        Login to your account
                    </Text>
                    <Field
                        placeholder="Email / Username"
                        keyboardType={'email-address'}
                        value={email}
                        onChangeText={setEmail}
                    />
                    <Field 
                        placeholder="Password" 
                        secureTextEntry={true}
                        value={password}
                        onChangeText={setPassword}
                    />
                    <View
                        style={{
                            alignItems: 'flex-end',
                            width: '60%',
                            paddingRight: 16,
                            marginBottom: 200
                        }}>
                        <Text style={{
                            color: lightDarkGrey,
                            fontWeight: 'normal',
                            marginTop: 10,
                            marginRight: -25,
                            marginBottom: 10,
                            fontSize: 16
                        }}>
                            Forgot Password?
                        </Text>
                    </View>
                    <LoginButton textColor='white' bgColor={darkBlack} btnLabel="Login" Press={handleSubmit} />
                    <View style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: "center"
                    }}>
                        <Text style={{
                            color: 'grey',
                            fontSize: 16,
                            marginTop: 150,
                            fontWeight: "normal"
                        }}
                        >Don't have an account?
                        </Text>
                        <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
                            <Text style={{
                                color: lightDarkGrey,
                                fontWeight: 'bold',
                                marginTop: 150,
                                fontSize: 16
                            }}
                            > Register
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Background>
    );
};

export default Login;
