import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  TouchableHighlight,
  TouchableNativeFeedback,
} from 'react-native';
import Button from './src/components/Button';

const App = () => {
  return (
    <View style={styled.container}>
      <Text style={styled.text}>신기하구만~~</Text>
      <Text style={[styled.text /*isError && styled.error*/]}>
        작성이 되나요
      </Text>

      <Button
        title="1"
        onPress={() => {
          console.log('touch1');
        }}
        buttonStyle={{ width: 100, height: 100 }}
      />
      <Button
        title="2"
        onPress={() => {
          console.log('touch2');
        }}
        buttonStyle={{ width: 100, height: 100 }}
      />

      <Button
        title="3"
        onPress={() => {
          console.log('touch3');
        }}
        buttonStyle={{ width: 100, height: 100 }}
      />

      <Button
        title="4"
        onPress={() => {
          console.log('touch4');
        }}
        buttonStyle={{ width: 100, height: 100 }}
      />

      <Button
        title="5"
        onPress={() => {
          console.log('touch5');
        }}
        buttonStyle={{ width: 100, height: 100 }}
      />

      <Button
        title="6"
        onPress={() => {
          console.log('touch6');
        }}
        buttonStyle={{ width: 100, height: 100 }}
      />

      <Button
        title="7"
        onPress={() => {
          console.log('touch7');
        }}
        buttonStyle={{ width: 100, height: 100 }}
      />

      <Button
        title="8"
        onPress={() => {
          console.log('touch8');
        }}
        buttonStyle={{ width: 100, height: 100 }}
      />

      <Button
        title="9"
        onPress={() => {
          console.log('touch9');
        }}
        buttonStyle={{ width: 100, height: 100 }}
      />
    </View>
  );
};

const styled = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 30,
    fontWeight: '700',
    color: 'green',
  },
  error: {
    color: 'red',
  },
});

export default App;
