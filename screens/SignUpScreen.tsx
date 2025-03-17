import React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { PaperProvider, TextInput as PaperTextInput, Button as PaperButton } from 'react-native-paper';

const SignUp = () => {
  const { control, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: ''
    }
  });

  const onSubmit = (data: { name: string; email: string; password: string; confirmPassword: string }) => {
    console.log(data);
  };

  return (
    <PaperProvider>
      <View style={styles.container}>
        <Text style={styles.title}>My App</Text>
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <PaperTextInput
              label="Name"
              mode="outlined"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              style={styles.input}
            />
          )}
          name="name"
        />
        {errors.name && <Text style={styles.errorText}>This is required.</Text>}

        <Controller
          control={control}
          rules={{
            required: true,
            pattern: /^\S+@\S+$/i
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <PaperTextInput
              label="Email Address"
              mode="outlined"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              style={styles.input}
            />
          )}
          name="email"
        />
        {errors.email && <Text style={styles.errorText}>Please enter a valid email.</Text>}

        <Controller
          control={control}
          rules={{
            required: true,
            minLength: 8,
            pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <PaperTextInput
              label="Password"
              mode="outlined"
              secureTextEntry
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              style={styles.input}
            />
          )}
          name="password"
        />
        {errors.password && <Text style={styles.errorText}>Password must be at least 8 characters with one lowercase, one uppercase, and one number.</Text>}

        <Controller
          control={control}
          rules={{
            required: true,
            validate: value => value === control._formValues.password || 'Passwords do not match'
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <PaperTextInput
              label="Confirm Password"
              mode="outlined"
              secureTextEntry
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              style={styles.input}
            />
          )}
          name="confirmPassword"
        />
        {errors.confirmPassword && <Text style={styles.errorText}>{errors.confirmPassword.message}</Text>}

        <PaperButton mode="contained" onPress={handleSubmit(onSubmit)} style={styles.button}>
          Sign Up
        </PaperButton>

        <Text style={styles.signInText}>Have an account? Sign In</Text>
      </View>
    </PaperProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    marginBottom: 10,
  },
  button: {
    marginTop: 10,
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
  },
  signInText: {
    marginTop: 20,
    textAlign: 'center',
  },
});

export default SignUp;