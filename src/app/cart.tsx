import { View, Text, Platform, FlatList, StyleSheet } from 'react-native';
import { StatusBar } from "expo-status-bar";
import { useCart } from "@/providers/CartProvider";
import CartListItem from "@components/CartListItem";
import Button from "@components/Button";
import {Styles} from "@expo/config-plugins/build/android";
import {container} from "ansi-fragments";

const CartScreen = () => {
    const { items, total } = useCart();

    return (
        <View style={styles.container}>
            <FlatList
                data={items}
                renderItem={({item}) => <CartListItem cartItem={item} />}
                contentContainerStyle={{ gap: 10 }}
            />
            
            <Text style={styles.total}>
                Total: ${total}
            </Text>
            <Button text="Checkout" />
            
            <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
        </View>
    );
}

export default CartScreen;

const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
    total: {
        marginTop: 20,
        fontSize: 20,
        fontWeight: '500',
    }
});