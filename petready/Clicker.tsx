import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Animated, Dimensions } from 'react-native';
import { Easing } from 'react-native-reanimated';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const Clicker = () => {
  const [score, setScore] = useState(0);
  const [scaleValue] = useState(new Animated.Value(1));
  const [plusOneAnimations, setPlusOneAnimations] = useState([]);

  const handlePress = () => {
    setScore(score + 1);
    animateButton();
    addPlusOneAnimation();
  };

  const animateButton = () => {
    Animated.sequence([
      Animated.timing(scaleValue, {
        toValue: 1.2,
        duration: 100,
        easing: Easing.out(Easing.quad),
        useNativeDriver: true,
      }),
      Animated.timing(scaleValue, {
        toValue: 1,
        duration: 100,
        easing: Easing.out(Easing.quad),
        useNativeDriver: true,
      }),
    ]).start();
  };

  const addPlusOneAnimation = () => {
    const newAnimation = new Animated.Value(0);
    const newPlusOne = {
      id: Math.random().toString(),
      animation: newAnimation,
      position: {
        top: screenHeight / 2 + Math.random() * 500 - 100,
        left: screenWidth / 2 + Math.random() * 500 - 100,
      },
    };
    setPlusOneAnimations([...plusOneAnimations, newPlusOne]);

    Animated.timing(newAnimation, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: true,
    }).start(() => {
      setPlusOneAnimations((animations) =>
        animations.filter((anim) => anim.id !== newPlusOne.id)
      );
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.scoreText}>Score: {score}</Text>
      <Animated.View style={{ transform: [{ scale: scaleValue }] }}>
        <TouchableOpacity style={styles.button} onPress={handlePress}>
          <Text style={styles.buttonText}>Click Me!</Text>
        </TouchableOpacity>
      </Animated.View>
      {plusOneAnimations.map(({ id, animation, position }) => (
        <Animated.Text
          key={id}
          style={[
            styles.plusOneText,
            {
              top: position.top,
              left: position.left,
              opacity: animation,
              transform: [
                {
                  translateY: animation.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, -50],
                  }),
                },
              ],
            },
          ]}
        >
          +1
        </Animated.Text>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5fcff',
  },
  scoreText: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 40,
  },
  button: {
    backgroundColor: 'red',
    width: 150,
    height: 150,
    borderRadius: 75,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  buttonText: {
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold',
  },
  plusOneText: {
    position: 'absolute',
    fontSize: 44,
    fontWeight: 'bold',
    color: 'green',
  },
});

export default Clicker;