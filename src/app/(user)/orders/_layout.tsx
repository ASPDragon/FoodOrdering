import {Stack} from "expo-router";

export default function ordersLayout() {
    return (
        <Stack>
            <Stack.Screen name="index" options={{ title: 'Orders' }} />
        </Stack>
    );
}
