import {
  StyleSheet, 
  View
} from 'react-native';
import Form from './components/Form';
import Title from './components/Title';

export default function App() {
  return (
    <View style={styles.container}>
      <Title />
      <Form />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2A2A2A',
    paddingTop: 80,
  },
});
