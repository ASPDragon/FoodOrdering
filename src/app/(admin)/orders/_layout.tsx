import {Stack} from "expo-router";

export default function ordersLayout() {
    return (
        <Stack>
            <Stack.Screen name="list" options={{ headerShown: false }} />
        </Stack>
    );
}
