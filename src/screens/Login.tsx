import React, { useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import CustomInput from "../components/InputField";
import Button from "../components/Button";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { StackParamList } from "../Navigation/StackNavigator";
import { LoadingContext } from "../context/LoadingContext";

const loginSchema = yup.object().shape({
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup
    .string()
    .min(8, "Password must be at least 8 characters long")
    .required("Password is required"),
});

interface LoginData {
  email: string;
  password: string;
}

type LoginScreenProp = NativeStackNavigationProp<StackParamList, "Login">;

const Login: React.FC = () => {
  const navigation = useNavigation<LoginScreenProp>();
  const {showLoading, hideLoading} = useContext(LoadingContext)

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<LoginData>({
    resolver: yupResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (data: LoginData) => {
    console.log(data);
    showLoading();

    setTimeout(() => {
      hideLoading();
      reset();
      navigation.navigate("Dashboard");
    }, 2000);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Welcome back!</Text>
      <Image
        source={require("../../assets/getStarted.jpg")}
        style={styles.image}
        resizeMode="contain"
      />
      <CustomInput control={control} name="email" placeholder="Email" />
      <CustomInput
        control={control}
        name="password"
        placeholder="Password"
        secureTextEntry
      />
      <Button title="Sign in" onPress={handleSubmit(onSubmit)} />
      <View style={styles.footer}>
        <Text style={styles.footerText}>Don't have an account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate("Register")}>
          <Text style={styles.signUpText}> Sign Up</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5F5F5",
    paddingHorizontal: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20,
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
  signUpText: {
    fontSize: 14,
    color: "#3498db",
    fontWeight: "bold",
  },
});

export default Login;
