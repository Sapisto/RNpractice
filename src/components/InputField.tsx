import React, { useState } from 'react';
import { View, TextInput, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useController, Control } from 'react-hook-form';
import { Feather } from '@expo/vector-icons';

interface InputProps {
  control: Control<any>;
  name: string;
  rules?: object;
  placeholder?: string;
  secureTextEntry?: boolean;
  label?: string;
}

const CustomInput: React.FC<InputProps> = ({
  control,
  name,
  rules = {},
  placeholder,
  secureTextEntry,
  label,
}) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(!secureTextEntry);
  
  const { field, fieldState } = useController({
    control,
    name,
    rules,
  });

  return (
    <View style={styles.container}>
      {label && <Text style={styles.label}>{label}</Text>}
      <View
        style={[
          styles.inputContainer,
          fieldState.error ? styles.inputError : {}, // Conditionally apply error style
        ]}
      >
        <TextInput
          value={field.value}
          onChangeText={field.onChange}
          onBlur={field.onBlur}
          style={styles.input}
          placeholder={placeholder}
          secureTextEntry={secureTextEntry && !isPasswordVisible}
        />
        {secureTextEntry && (
          <TouchableOpacity
            style={styles.eyeIcon}
            onPress={() => setIsPasswordVisible(!isPasswordVisible)}
          >
            <Feather
              name={isPasswordVisible ? 'eye' : 'eye-off'}
              size={28}
              color="grey"
            />
          </TouchableOpacity>
        )}
      </View>
      {fieldState.error && <Text style={styles.errorText}>{fieldState.error.message}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    width: '100%',
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 5,
  },
  input: {
    flex: 1,
    height: 40,
    paddingHorizontal: 10,
  },
  eyeIcon: {
    padding: 10,
  },
  errorText: {
    color: 'red',
    fontSize: 14,
    marginTop: 5,
  },
  inputError: {
    borderColor: 'red', 
  },
});

export default CustomInput;
