import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

const LoginScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <ScrollView>
          <Text style={styles.appTitle}>App Title</Text>
          <View>
            <View style={styles.inputContainer}>
              <TextInput placeholder="Username" style={styles.input} />
            </View>
            <View style={styles.inputContainer}>
              <TextInput
                placeholder="Password"
                style={styles.input}
                secureTextEntry={true}
              />
            </View>
          </View>
          <View>
            <TouchableOpacity>
              <View style={styles.loginButtonContainer}>
                <Text style={styles.loginButtonText}>Login</Text>
              </View>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
  },
  appTitle: {
    fontWeight: 'bold',
    fontSize: 40,
    color: '#272727',
    textAlign: 'center',
    marginBottom: 16,
  },
  inputContainer: {
    borderWidth: 1,
    borderColor: '#272727',
    borderRadius: 16,
    padding: 2,
    marginBottom: 6,
  },
  input: {
    borderColor: '#5d5d5d',
    width: '100%',
    textAlign: 'center',
    fontSize: 20,
  },
  loginButtonText: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  loginButtonContainer: {
    borderRadius: 16,
    padding: 16,
    backgroundColor: 'green',
    marginTop: 16,
  },
});

export default LoginScreen;
