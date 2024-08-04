import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, Alert, TextInput } from 'react-native'; // Import from react-native instead
import { TextInput as PaperInput } from 'react-native-paper'; // If you want to use react-native-paper's TextInput

const questions = [
  { id: '1', question: 'What is the capital of France?', answer: 'Paris' },
  { id: '2', question: 'What is 2 + 2?', answer: '4' },
  { id: '3', question: 'What is the color of the sky?', answer: 'blue' },
];

export default function QuizScreen() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswer, setUserAnswer] = useState('');
  const [feedback, setFeedback] = useState('');

  const handleSubmit = () => {
    const correctAnswer = questions[currentQuestionIndex].answer.toLowerCase();
    if (userAnswer.toLowerCase() === correctAnswer) {
      setFeedback('Correct!');
    } else {
      setFeedback('Incorrect, try again.');
    }

    // Move to the next question or end the quiz
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setUserAnswer('');
    } else {
      Alert.alert('Quiz Finished', 'You have completed the quiz!');
      setCurrentQuestionIndex(0); // Reset for demo purposes
      setUserAnswer('');
      setFeedback('');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.question}>
        {questions[currentQuestionIndex].question}
      </Text>
      <TextInput
        style={styles.input} 
        placeholder="Your Answer"
        value={userAnswer}
        onChangeText={setUserAnswer}
      />
      <Button title="Submit" onPress={handleSubmit} />
      {feedback ? <Text style={styles.feedback}>{feedback}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  question: {
    fontSize: 18,
    marginBottom: 10,
  },
  input: {
    marginBottom: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 4,
    padding: 8,
  },
  feedback: {
    fontSize: 16,
    marginTop: 10,
    fontWeight: 'bold',
  },
});
