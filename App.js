import { StyleSheet, Text, View, Image } from "react-native";
import { Provider } from "react-redux";
import store from "./redux/store";
import AppNav from "./routes/AppNav";

export default function App() {
  return (
    <Provider store={store}>
      <AppNav />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "center",
  },
});
