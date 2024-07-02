import { StyleSheet, View, Text } from 'react-native';

const App = () => {
  return (
    <View style={styled.container}>
      <Text style={styled.text}>신기하구만~~</Text>
    </View>
  );
};

const styled = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'yellow',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: 100,
    backgroundColor: 'black',
  },
});

export default App;
