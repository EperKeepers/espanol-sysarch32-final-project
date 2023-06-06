import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Background from './Background';
import LoginButton from './LoginButton';
import { darkBlack, lightDarkGrey } from './Constants';
import Field from './Field';

const Login = () => {
    const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

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
                        onChangeText={(text) => setEmail(text)}
                        value={email}
                    />
                    <Field placeholder="Password" secureTextEntry={true}
                        onChangeText={(text) => setPassword(text)}
                        value={password} />
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
                    <LoginButton textColor='white' bgColor={darkBlack} btnLabel="Login" Press={() => {
                        const adminEmail = "admin@gmail.com";
                        const adminPassword = "admin";

                        if (email === adminEmail && password === adminPassword) {
                            navigation.navigate('Dashboard');
                        } else {
                            alert('Incorrect email or password');
                        }
                    }} />
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
