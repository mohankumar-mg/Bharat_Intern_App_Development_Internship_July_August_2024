import React, { useState } from 'react';
import { SafeAreaView, View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';


export default function AppScreen() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (task.trim() !== '') {
      setTasks([...tasks, { key: Date.now().toString(), text: task, completed: false }]);
      setTask('');
    }
  };

  const toggleCompleteTask = (taskKey) => {
    setTasks(tasks.map(task => 
      task.key === taskKey ? { ...task, completed: !task.completed } : task
    ));
  };

  const deleteTask = (taskKey) => {
    setTasks(tasks.filter(task => task.key !== taskKey));
  };

  const renderItem = ({ item }) => (
    <View style={styles.taskContainer}>
      <TouchableOpacity onPress={() => toggleCompleteTask(item.key)}>
        <Ionicons 
          name={item.completed ? 'checkbox' : 'square-outline'} 
          size={24} 
          color="black" 
          style={styles.icon} 
        />
      </TouchableOpacity>
      <Text style={[styles.taskText, item.completed && styles.completedTaskText]}>
        {item.text}
      </Text>
      <TouchableOpacity onPress={() => deleteTask(item.key)}>
        <Ionicons 
          name="trash-bin-outline" 
          size={24} 
          color="red" 
          style={styles.icon} 
        />
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput 
            style={styles.input} 
            placeholder="Add a new task" 
            value={task} 
            onChangeText={setTask} 
          />
          <TouchableOpacity onPress={addTask} style={styles.addButton}>
            <Text style={styles.addButtonText}>Add</Text>
          </TouchableOpacity>
        </View>
        <FlatList 
          data={tasks} 
          renderItem={renderItem} 
          keyExtractor={item => item.key} 
        />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F3E5AB',
  },
  inputContainer: {
    flexDirection: 'row',
    marginBottom: 20,
    marginTop: 20
  },
  input: {
    flex: 1,
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
  },
  addButton: {
    marginLeft: 10,
    backgroundColor: '#007BFF',
    paddingHorizontal: 10,
    paddingVertical: 15,
    borderRadius: 5,
  },
  addButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  taskContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  taskText: {
    flex: 1,
    fontSize: 16,
  },
  completedTaskText: {
    textDecorationLine: 'line-through',
    color: '#ccc',
  },
  icon: {
    marginHorizontal: 10,
  },
});
