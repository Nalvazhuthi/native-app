import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const Contact = () => {
  return (
    <View>
      <Text>Contact</Text>
      <Link href={'/'}>Home</Link>
    </View>
  )
}

export default Contact

const styles = StyleSheet.create({})