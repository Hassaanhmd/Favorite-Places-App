import { FlatList } from 'react-native';

function PLacesList({ places }) {
  return <FlatList data={places} keyExtractor={(item) => item.id} />;
}

export default PLacesList;
