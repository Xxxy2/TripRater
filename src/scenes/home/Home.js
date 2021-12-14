import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import {
  Text,
  View,
  VirtualizedList,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from 'react-native'
import useJokes from 'modules/posts/useJokes'

import styles from './Home.styles'

const INITIAL_NUMBER_ITEMS_TO_RENDER = 9

const ListItem = ({
  title, thumbnailUrl, id, navigation,
}) => (
  <TouchableOpacity
    onPress={() => {
      navigation.navigate('Details', {
        from: 'Home',
        homeId: id,
        homeTitle: title,
      })
    }}
    style={[styles.item]}
  >
    <View style={styles.item}>
      <Text style={styles.title}>{id}</Text>
      <Image source={{ uri: thumbnailUrl }} style={{ width: 50, height: 50 }} />
      <Text style={styles.title}>{title}</Text>
    </View>
  </TouchableOpacity>
)

const Home = ({ navigation }) => {
  const {
    posts,
    actions: { getPosts },
  } = useJokes()

  useEffect(() => {
    getPosts()
  }, [])

  return (
    <SafeAreaView style={styles.container}>
      <VirtualizedList
        data={posts}
        initialNumToRender={INITIAL_NUMBER_ITEMS_TO_RENDER}
        renderItem={({ item }) => (
          <ListItem
            id={item.id}
            title={item.title}
            thumbnailUrl={item.thumbnailUrl}
            navigation={navigation}
          />
        )}
        keyExtractor={(item) => item.id}
        getItemCount={(data) => data.length}
        getItem={(data, index) => {
          const currentItem = data[index]

          return {
            id: currentItem.id,
            title: currentItem.title,
            thumbnailUrl: currentItem.thumbnailUrl,
          }
        }}
      />
    </SafeAreaView>
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
