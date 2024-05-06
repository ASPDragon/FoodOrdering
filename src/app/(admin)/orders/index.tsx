import { Text, FlatList } from 'react-native';
import orders from "@assets/data/orders";
import OrderListItem from "@components/OrderListItem";
import { memo } from 'react';

const OrdersScreen = () => {
    return (
        <FlatList data={orders}
                  renderItem={({ item }) => <OrderListItem order={item} />}
                  contentContainerStyle={{ gap: 10, padding: 10 }}
        />
    );
}

export default memo(OrdersScreen);
