import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import {
  StyleSheet, Text, View, StatusBar,
} from 'react-native'
import Button from 'components/Button'
import { colors } from 'theme'
import useJokes from '../../slices/useJokes'

const styles = StyleSheet.create({
  root: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.lightGrayPurple,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
})

const Home = () => {
  const [data] = useState({ hits: [] })

  const {
    posts,
    actions: { getJokes },
  } = useJokes()
  useEffect(() => {
    getJokes()
  }, [])
  console.log(posts)
  return (
    <View style={styles.root}>
      <StatusBar barStyle="light-content" />
      <Text style={styles.title}>{data.value}</Text>
      <Button
        title="refresh"
        color="white"
        backgroundColor={colors.lightPurple}
        onPress={() => {}}
      />
      {posts.map((item) => (
        <Text style={styles.title}>{item.title}</Text>
      ))}
      <Text style={styles.title}>test1</Text>
      <Text style={styles.title}>{data.id}</Text>
      <Text style={styles.title}>{data.title}</Text>
      <Text style={styles.title}>{data.body}</Text>
      <Button
        title="next"
        color="white"
        backgroundColor={colors.lightPurple}
        onPress={() => {}}
      />
    </View>
  )
}

Home.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }),
}

Home.defaultProps = {
  navigation: { navigate: () => null },
}

export default Home
