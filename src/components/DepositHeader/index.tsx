import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { colors } from "../../utils/colors";

const DepositHeader: React.FC = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.deposit}>
        <Text style={styles.depositText}>
          Instant Deposit With  Pay
        </Text>
      </TouchableOpacity>
    </View>

  );
};

const styles = StyleSheet.create({
  container: { 
    paddingHorizontal: 16, 
    paddingTop: 100,    
    height: 150,
},
  deposit: {
   backgroundColor: 'white',
    borderRadius: 12,
    padding: 15,
    alignItems: 'center',

  },
  depositText: {
    color: 'black', 
    fontSize: 16, 
    fontWeight: '600' 
  },
  applePill: {
    backgroundColor: colors.textPrimary,
    borderRadius: 12,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
});

export default DepositHeader;
