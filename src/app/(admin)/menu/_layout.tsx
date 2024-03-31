import { Link, Stack } from "expo-router";
import { Pressable } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Colors from "@/constants/Colors";
import React from "react";

export default function MenuStack () {
    return (
        <Stack screenOptions={{
            headerRight: () => (
                <Link href={"/cart"} asChild>
                    <Pressable>
                        {({ pressed }) => (
                            <FontAwesome
                                name="shopping-cart"
                                size={25}
                                color={Colors.light.tint}
                                style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                            />
                        )}
                    </Pressable>
                </Link>
            ),
        }}>
            <Stack.Screen name="index" options={{ title: 'Menu', headerTitleAlign: 'center' }} />
        </Stack>
    );
}