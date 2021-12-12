import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import {
  Text,
  View,
  FlatList,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from 'react-native'
import useJokes from 'modules/posts/useJokes'
import styles from './Home.styles'

const Item = ({
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
  // const [] = useState({ hits: [] })

  const {
    posts,
    actions: { getPosts },
  } = useJokes()
  useEffect(() => {
    getPosts()
  }, [])

  const renderItem = ({ item }) => (
    <Item
      title={item.title}
      id={item.id}
      thumbnailUrl={item.thumbnailUrl}
      navigation={navigation}
    />
  )
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={posts}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
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
