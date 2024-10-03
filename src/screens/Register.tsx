import React from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigation } from "@react-navigation/native";
import Button from "../components/Button";
import CustomInput from "../components/InputField";
import { StackParamList } from "../Navigation/StackNavigator";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

type RegisterScreenProp = NativeStackNavigationProp<StackParamList, 'Register'>;

const schemaValidation = yup.object().shape({
  firstName: yup.string().required("First Name is required"),
  lastName: yup.string().required("Last Name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords must match")
    .required("Confirm password is required"),
});

interface RegisterFormData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const Register: React.FC = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schemaValidation),
    defaultValues: {
      firstName: '',
      lastName:'',
      email: '',
      password: '',
      confirmPassword: '',
    },
  });

  const navigation = useNavigation<RegisterScreenProp>();

  const onSubmit = (data: RegisterFormData) => {
    console.log(data);
    // Handle successful registration here
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Welcome onboard</Text>
      <Text style={styles.subHeader}>Let's help you meet your tasks</Text>

      <CustomInput 
        control={control}
        name="firstName"
        placeholder="First Name"
      />
      <CustomInput 
        control={control}
        name="lastName"
        placeholder="Last Name"
      />
      <CustomInput 
        control={control}
        name="email"
        placeholder="Email"
      />
      <CustomInput 
        control={control}
        name="password"
        placeholder="Password"
        secureTextEntry
      />
      <CustomInput 
        control={control}
        name="confirmPassword"
        placeholder="Confirm Password"
        secureTextEntry
      />

      <Button title="Register" onPress={handleSubmit(onSubmit)} />
      <View style={styles.footer}>
        <Text style={styles.footerText}>Already have an account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={styles.signInText}> Sign In</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5F5F5",
    paddingHorizontal: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  subHeader: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: "center",
  },
  footer: {
    flexDirection: "row",
    marginTop: 20,
    justifyContent: "center",
  },
  footerText: {
    fontSize: 14,
    color: "grey",
  },
  signInText: {
    fontSize: 14,
    color: "#3498db",
    fontWeight: "bold",
  },
});

export default Register;
