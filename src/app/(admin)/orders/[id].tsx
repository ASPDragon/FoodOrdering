import {FlatList, Text, View} from 'react-native';
import { Stack, useLocalSearchParams } from 'expo-router';
import orders from "@assets/data/orders";
import OrderListItem from "@components/OrderListItem";
import OrderItemListItem from "@components/OrderItemListItem";
import {memo} from "react";

const OrderDetailsScreen = () => {
    const { id } = useLocalSearchParams();

    const order = orders.find(o => o.id.toString() === id);

    if (!order) {
        return <Text>Not found</Text>;
    }

    return (
        <View>
            <Stack.Screen options={{ title: `Order #${id}`}} />

            <FlatList
                data={order.order_items}
                renderItem={({item}) => <OrderItemListItem item={item} />}
                contentContainerStyle={{ gap: 10 }}
                ListHeaderComponent={() => <OrderListItem order={order} />}
            />
        </View>
    );
};

export default memo(OrderDetailsScreen);
