import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import EmptyMsg from "../components/EmptyMsg";
import PaidItems from "../components/PaidItems";

const Payment = () => {
  const payments = useSelector((state) => state.payment.payments);
  if (payments.length > 0) {
    return (
      <FlatList
        data={payments}
        renderItem={({ item }) => (
          <PaidItems
            totalPrice={item.total}
            date={item.date}
            courseDetails={item}
          />
        )}
      />
    );
  }
  return <EmptyMsg text="Pad d'achats a afficher" />;
};

export default Payment;

const styles = StyleSheet.create({});
