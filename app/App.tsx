import { Link, router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useLayoutEffect, useState } from 'react';
import {Button, FlatList, Image, Pressable, StyleSheet, Text, View} from 'react-native';
// import { postsListJson } from './postsList';

export default function App() {
  return (
      <View style={styles.container}>
          <Image
              source={require('../assets/welcome_img.png')}
              style={styles.welcomeImage}
          />
          <Text style={styles.welcomeMainText}>Discover Your Dream Job here</Text>
          <Text style={styles.welcomeSubText}>Explore all the existing job roles based on your interest and study major</Text>

          <View style={styles.buttonContainer}>
                <Pressable style={styles.loginButton} onPress={() => router.push('/login')}>
                    <Text style={styles.loginButtonText}>Login</Text>
                </Pressable>
                <Pressable style={styles.registerButton} onPress={() => router.push('/register')}>
                    <Text style={styles.registerButtonText}>Register</Text>
                </Pressable>
          </View>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
      gap: 50,
  },
    welcomeImage: {
        width: 385,
        height: 422,
    },
    welcomeMainText: {
        width: 343,
        height: 106,
        fontSize: 35,
        fontWeight: '600',
        textAlign: 'center',
        lineHeight: 52.5,
        color: '#1F41BB',
    },
    welcomeSubText: {
        width: 323,
        height: 42,
        fontSize: 14,
        fontWeight: '400',
        textAlign: 'center',
        lineHeight: 21,
    },
    buttonContainer: {
        flex: 1,
        flexDirection: 'row',
        gap: 30,
    },
    loginButton: {
        width: 160,
        height: 60,
        borderRadius: 10,
        paddingTop: 15,
        paddingBottom: 15,
        paddingLeft: 20,
        paddingRight: 20,
        backgroundColor: '#1F41BB',
    },
    registerButton: {
        width: 160,
        height: 60,
        borderRadius: 10,
        paddingTop: 15,
        paddingBottom: 15,
        paddingLeft: 20,
        paddingRight: 20,
        backgroundColor: '#FFFFFF',
    },
    loginButtonText: {
        fontSize: 20,
        fontWeight: '600',
        textAlign: 'center',
        lineHeight: 30,
        color: '#FFFFFF',
    },
    registerButtonText: {
        fontSize: 20,
        fontWeight: '600',
        textAlign: 'center',
        lineHeight: 30,
    }
});
