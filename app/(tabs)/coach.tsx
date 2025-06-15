import { useHeaderHeight } from '@react-navigation/elements';
import { Icon } from '@roninoss/icons';
import { FlashList } from '@shopify/flash-list';
import { cssInterop } from 'nativewind';
import * as React from 'react';
import {
    useWindowDimensions,
    View,
    Platform, ScrollView, Dimensions
} from 'react-native';
import {SafeAreaProvider, useSafeAreaInsets} from 'react-native-safe-area-context';
import { Text } from '@/components/nativewindui/Text';
import { useColorScheme } from '@/lib/useColorScheme';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/nativewindui/Avatar';
import {Button} from "@/components/nativewindui/Button";
import EvilIcons from '@expo/vector-icons/EvilIcons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';

cssInterop(FlashList, {
    className: 'style',
    contentContainerClassName: 'contentContainerStyle',
});

export default function Screen() {
    return (
        <FlashList
            contentInsetAdjustmentBehavior="automatic"
            keyboardShouldPersistTaps="handled"
            data={COMPONENTS}
            estimatedItemSize={200}
            contentContainerClassName="py-4"
            keyExtractor={keyExtractor}
            ItemSeparatorComponent={renderItemSeparator}
            renderItem={renderItem}
            ListEmptyComponent={COMPONENTS.length === 0 ? ListEmptyComponent : undefined}
        />
    );
}

function ListEmptyComponent() {
    const { colors } = useColorScheme();
    const { height: SCREEN_HEIGHT } = Dimensions.get('window');

    return (
            <View className="px-4 py-6 min-h-0" style={{ minHeight: SCREEN_HEIGHT }}>
                <View className="flex-row items-center justify-between mb-6">
                    <View className="flex-row items-center">
                        <Avatar className="w-12 h-12" alt="NativewindUI Avatar">
                            <AvatarImage
                                source={{
                                    uri: 'https://pbs.twimg.com/profile_images/1782428433898708992/1voyv4_A_400x400.jpg',
                                }}
                            />
                            <AvatarFallback>
                                <Text className="text-foreground">NUI</Text>
                            </AvatarFallback>
                        </Avatar>
                        <View className="ml-3">
                            <Text className="text-lg" variant="heading">Sébastien Parrat</Text>
                            <Text className="text-xs text-gray-500">Intermediate · Week 6</Text>
                        </View>
                    </View>
                    <View>
                        <Button variant="plain" size="icon">
                            <Icon
                                name="bell"
                                color={Platform.OS === 'ios' ? colors.primary : colors.foreground}
                                size={21}
                            />
                        </Button>
                    </View>
                </View>

                <View className="flex space-x-4 mb-6">
                    <Text className="font-bold text-lg mb-4">Today's Workout</Text>
                    <View className="bg-white rounded-xl p-4 shadow-sm mb-4 border-l-4 border-blue-500">
                        <View className="flex-row justify-between items-center mb-2">
                            <Text className="font-semibold text-lg">Upper Body Strength</Text>
                            <SimpleLineIcons className="text-gray-400" name="arrow-right" size={20} color="black" />
                        </View>
                        <View className="flex-row items-center text-sm text-gray-500 mb-3">
                            <EvilIcons className="mr-1" name="clock" size={24} color="black" />
                            <Text className="mr-4">45 min</Text>
                            <MaterialCommunityIcons className="mr-1" name="dumbbell" size={20} color="black" />
                            <Text>7 exercises</Text>
                        </View>
                        <View className="flex-row justify-between items-center">
                            <Text className="text-xs px-2 py-1 rounded-full bg-yellow-100 text-yellow-700">Medium</Text>
                            <Button className="text-xs bg-blue-600 text-white px-3 py-1 rounded-full">
                                <Text>Start</Text>
                            </Button>
                        </View>
                    </View>
                </View>

                <View className="flex space-x-4 mb-4">
                    <Text className="font-bold text-lg mb-4">Weekly performance</Text>
                    <View className="bg-white rounded-xl p-4 shadow-sm mb-4">
                        <Text className="font-semibold mb-4">Progress Overview</Text>
                        <View className="flex-row justify-between items-end h-40 mb-2" >
                            <View className="flex flex-col items-center flex-1">
                                <View className="w-5 bg-blue-500 rounded-t-md" style={{height: '65%' }}></View>
                            </View>
                            <View className="flex flex-col items-center flex-1">
                                <View className="w-5 bg-blue-500 rounded-t-md"style={{height: '70%' }}></View>
                            </View>
                            <View className="flex flex-col items-center flex-1">
                                <View className="w-5 bg-blue-500 rounded-t-md"style={{height: '68%' }}></View>
                            </View>
                            <View className="flex flex-col items-center flex-1">
                                <View className="w-5 bg-blue-500 rounded-t-md" style={{height: '75%' }}></View>
                            </View>
                            <View className="flex flex-col items-center flex-1">
                                <View className="w-5 bg-blue-500 rounded-t-md"style={{height: '80%' }}></View>
                            </View>
                            <View className="flex flex-col items-center flex-1">
                                <View className="w-5 bg-blue-500 rounded-t-md" style={{height: '78%' }}></View>
                            </View>
                            <View className="flex flex-col items-center flex-1">
                                <View className="w-5 bg-blue-500 rounded-t-md" style={{height: '85%' }}></View>
                            </View>
                        </View>
                        <View className="flex-row justify-between text-xs text-gray-500">
                            <Text>Mon</Text>
                            <Text>Tue</Text>
                            <Text>Wed</Text>
                            <Text>Thu</Text>
                            <Text>Fri</Text>
                            <Text>Sat</Text>
                            <Text>Sun</Text>
                        </View>
                    </View>
                </View>

                <View className="flex space-x-4">
                    <Text className="font-bold text-lg mb-4">Recent Workouts performance</Text>
                    <View className="bg-white rounded-xl p-4 shadow-sm mb-4 border-l-4 border-green-500">
                        <View className="flex-row justify-between items-center mb-2">
                            <Text className="font-semibold text-lg">Lower Body Focus</Text>
                            <SimpleLineIcons className="text-gray-400" name="arrow-right" size={20} color="black" />
                        </View>
                        <View className="flex-row items-center text-sm text-gray-500 mb-3">
                            <EvilIcons className="mr-1" name="clock" size={24} color="black" />
                            <Text className="mr-4">50 min</Text>
                            <MaterialCommunityIcons className="mr-1" name="dumbbell" size={20} color="black" />
                            <Text>6 exercises</Text></View>
                        <View className="flex-row justify-between items-center">
                            <Text className="text-xs px-2 py-1 rounded-full bg-red-100 text-red-700">Hard</Text>
                            <Text className="text-xs text-green-600 font-medium">Completed</Text>
                        </View>
                    </View>
                    <View className="bg-white rounded-xl p-4 shadow-sm mb-4 border-l-4 border-green-500">
                        <View className="flex-row justify-between items-center mb-2">
                            <Text className="font-semibold text-lg">Lower Body Focus</Text>
                            <SimpleLineIcons className="text-gray-400" name="arrow-right" size={20} color="black" />
                        </View>
                        <View className="flex-row items-center text-sm text-gray-500 mb-3">
                            <EvilIcons className="mr-1" name="clock" size={24} color="black" />
                            <Text className="mr-4">50 min</Text>
                            <MaterialCommunityIcons className="mr-1" name="dumbbell" size={20} color="black" />
                            <Text>6 exercises</Text></View>
                        <View className="flex-row justify-between items-center">
                            <Text className="text-xs px-2 py-1 rounded-full bg-red-100 text-red-700">Hard</Text>
                            <Text className="text-xs text-green-600 font-medium">Completed</Text>
                        </View>
                    </View>
                </View>
            </View>
    );
}

type ComponentItem = { name: string; component: React.FC };

function keyExtractor(item: ComponentItem) {
    return item.name;
}

function renderItemSeparator() {
    return <View className="p-2"/>;
}

function renderItem({item}: { item: ComponentItem }) {
    return (
        <Card title={item.name}>
            <item.component/>
        </Card>
    );
}

function Card({children, title}: { children: React.ReactNode; title: string }) {
    return (
        <View className="px-4">
            <View
                className="gap-4 rounded-xl border border-border bg-card p-4 pb-6 shadow-sm shadow-black/10 dark:shadow-none">
                <Text className="text-center text-sm font-medium tracking-wider opacity-60">{title}</Text>
                {children}
            </View>
        </View>
    );
}

const COMPONENTS: ComponentItem[] = [];
