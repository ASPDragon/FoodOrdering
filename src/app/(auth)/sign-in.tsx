import { StyleSheet, Text, TextInput, View } from 'react-native';
import React, { useState } from 'react';
import Button from '@components/Button';
import Colors from '../../constants/Colors';
import { Link, Stack } from 'expo-router';

const SignInScreen = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    return (
        <View style={styles.container}>
            <Stack.Screen options={{title: 'Sign in'}}/>

            <Text style={styles.label}>Email</Text>
            <TextInput
                value={email}
                onChangeText={setEmail}
                placeholder="jon.doe@gmail.com"
                style={styles.input}
            />

            <Text style={styles.label}>Password</Text>
            <TextInput
                value={password}
                onChangeText={setPassword}
                placeholder=""
                secureTextEntry
                style={styles.input}
            />
            <Button text='Sign in'/>
            <Link href={'/sign-up'} style={styles.textButton}>
                Create an account
            </Link>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
    },

    label: {
        color: 'gray',
    },

    input: {
        borderColor: 'gray',
        padding: 10,
        borderRadius: 5,
        marginTop: 5,
        marginBottom: 20,
        backgroundColor: 'white'
    },

    textButton: {
        alignSelf: 'center',
        fontWeight: 'bold',
        color: Colors.light.tint,
        marginVertical: 10,
    }
})

export default SignInScreen;
