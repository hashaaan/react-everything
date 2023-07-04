import React, {useState} from 'react';
import {Button, Text, View, StyleSheet} from 'react-native';

type Props = {
  text: string;
};

const Counter: React.FC<Props> = ({text}) => {
  const [count, setCount] = useState<number>(0);

  const handleButtonClick = () => {
    setCount(count + 1);
  };

  return (
    <View style={styles.container}>
      <Text>You clicked the button {count} times</Text>
      <Button title="Click me!" onPress={() => handleButtonClick()} />
      <Text>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
});

export default Counter;
