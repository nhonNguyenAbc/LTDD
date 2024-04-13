import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

const Home = () => {
  const [bmiResult, setBmiResult] = useState(null);
  const [height, setHeight] = React.useState('');
  const [weight, setWeight] = React.useState('');
  const countBmi = () => {
    const bmi = (parseFloat(weight) / (parseFloat(height) / 100) ** 2).toFixed(
      2,
    );
    let result = '';
    if (bmi < 18.5) {
      result = 'Thiếu cân';
    } else if (bmi >= 18.5 && bmi <= 24.9) {
      result = 'Khỏe mạnh';
    } else if (bmi >= 25 && bmi <= 29.9) {
      result = 'Thừa cân';
    } else if (bmi >= 30 && bmi <= 34.9) {
      result = 'Béo phì';
    } else if (bmi >= 35) {
      result = 'Cực kỳ béo phì';
    }
    setBmiResult({bmi, result});
    setHeight('');
    setWeight('');
  };
  const validateForm = () => {
    countBmi();
  };
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{'Weight (KG)'}</Text>
      <TextInput
        style={styles.input}
        onChangeText={setWeight}
        value={weight}
        placeholder="0"
        keyboardType="numeric"
      />
      <View style={{height: 20}} />
      <Text style={styles.text}>{'Height (CM)'}</Text>
      <TextInput
        style={styles.input}
        onChangeText={setHeight}
        value={height}
        placeholder="0"
        keyboardType="numeric"
      />
      {bmiResult && (
        <View style={styles.resultContainer}>
          <Text style={styles.resultLabel}>BMI:</Text>
          <Text style={styles.resultText}>{bmiResult.bmi}</Text>
          <Text style={styles.resultLabel}>Result:</Text>
          <Text style={styles.resultText}>{bmiResult.result}</Text>
        </View>
      )}
      <TouchableOpacity style={styles.submitButton} onPress={validateForm}>
        <Text style={styles.submitButtonText}>Calculate BMI</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'column',
  },
  input: {
    height: 40,
    borderWidth: 1,
    padding: 10,
  },
  text: {
    fontFamily: 'Roboto',
    color: 'black',
    fontSize: 25,
    fontWeight: 'bold',
  },
  submitButton: {
    backgroundColor: '#289df6',
    borderRadius: 10,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  submitButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  resultContainer: {
    marginTop: 20,
  },
  resultLabel: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  resultText: {
    fontSize: 16,
    marginBottom: 20,
  },
});

export default Home;
