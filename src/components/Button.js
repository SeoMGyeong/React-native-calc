import { Pressable, StyleSheet, Text } from 'react-native';
import PropTypes from 'prop-types';

const Button = ({ title, buttonStyle, onPress }) => {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.button,
        pressed && { backgroundColor: '#3f3f46' },
        buttonStyle,
      ]}
      onPressOut={onPress}
    >
      <Text style={styles.title}>{title}</Text>
    </Pressable>
  );
};

Button.propTypes = {
  title: PropTypes.string.isRequired,
  buttonStyle: PropTypes.object,
  onPress: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#71717a',
  },
  title: {
    color: '#ffffff',
    fontSize: 50,
  },
});

export default Button;
