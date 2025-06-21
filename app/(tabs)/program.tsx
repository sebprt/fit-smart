import {FlashList} from '@shopify/flash-list';
import {cssInterop} from 'nativewind';
import * as React from 'react';
import {
    View,
    Dimensions,
} from 'react-native';
import {Text} from '@/components/nativewindui/Text';
import {Button} from "@/components/nativewindui/Button";
import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import EvilIcons from "@expo/vector-icons/EvilIcons";
import SimpleLineIcons from "@expo/vector-icons/SimpleLineIcons";

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
    const {height: SCREEN_HEIGHT} = Dimensions.get('window');

    return (
        <View className="px-4 py-6 min-h-0" style={{minHeight: SCREEN_HEIGHT}}>
            <View className="flex-row items-center justify-between mb-6">
                <Text className="text-xl font-bold" variant="heading">My Program</Text>
                <Text className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
                    Upper/Lower Split
                </Text>
            </View>
            <View className="flex-row items-center justify-between mb-6">
                <Button className="w-8 h-8 flex-row items-center justify-center bg-white rounded-full shadow-sm">
                    <AntDesign name="leftcircleo" size={24} color="black"/>
                </Button>
                <View className="flex items-center">
                    <Text className="font-medium">Week 6</Text>
                </View>
                <Button className="w-8 h-8 flex-row items-center justify-center bg-white rounded-full shadow-sm">
                    <AntDesign name="rightcircleo" size={24} color="black"/>
                </Button>
            </View>
            <View className="bg-white rounded-xl p-4 shadow-sm mb-6">
                <View className="flex-row mb-4">
                    <Text className="flex-1 h-8 align-middle text-center text-sm font-medium">
                        M
                    </Text>
                    <Text className="flex-1 h-8 align-middle text-center text-sm font-medium">
                        T
                    </Text>
                    <Text className="flex-1 h-8 align-middle text-center text-sm font-medium">
                        W
                    </Text>
                    <Text
                        className="flex-1 h-8 align-middle text-center text-sm font-medium bg-blue-100 text-blue-700 rounded-full">
                        T
                    </Text>
                    <Text className="flex-1 h-8 align-middle text-center text-sm font-medium">
                        F
                    </Text>
                    <Text className="flex-1 h-8 align-middle text-center text-sm font-medium">
                        S
                    </Text>
                    <Text className="flex-1 h-8 align-middle text-center text-sm font-medium">
                        S
                    </Text>
                </View>
                <View className="flex-row">
                    <Text className="flex-1 text-xs text-center text-gray-500">
                        Rest
                    </Text>
                    <Text className="flex-1 text-xs text-center text-gray-500">
                        Upper
                    </Text>
                    <Text className="flex-1 text-xs text-center text-gray-500">
                        Lower
                    </Text>
                    <Text className="flex-1 text-xs text-center text-gray-500">
                        Upper
                    </Text>
                    <Text className="flex-1 text-xs text-center text-gray-500">
                        Lower
                    </Text>
                    <Text className="flex-1 text-xs text-center text-gray-500">
                        Rest
                    </Text>
                    <Text className="flex-1 text-xs text-center text-gray-500">
                        Active
                    </Text>
                </View>
            </View>
            <Text className="font-bold text-lg mb-4" data-id="element-265">Thursday - Upper Body</Text>
            <View className="bg-white rounded-xl p-4 shadow-sm mb-4 border-l-4 border-blue-500" data-id="element-100">
                <View className="flex-row justify-between items-center mb-2" data-id="element-101">
                    <Text className="font-semibold text-lg" data-id="element-102">Upper Body Strength</Text>
                    <SimpleLineIcons className="text-gray-400" name="arrow-right" size={20} color="black"/>
                </View>
                <View className="flex-row items-center text-sm text-gray-500 mb-3" data-id="element-104">
                    <EvilIcons className="mr-1" name="clock" size={24} color="black"/>
                    <Text className="mr-4" data-id="element-106">45 min</Text>
                    <MaterialCommunityIcons className="mr-1" name="dumbbell" size={20} color="black"/>
                    <Text data-id="element-108">7 exercises</Text></View>
                <View className="flex-row justify-between items-center" data-id="element-109">
                    <Text
                        className="text-xs px-2 py-1 rounded-full bg-yellow-100 text-yellow-700"
                        data-id="element-110">Medium</Text>
                    <Button className="text-xs bg-blue-600 text-white px-3 py-1 rounded-full"
                            data-id="element-112">
                        <Text>Start</Text>
                    </Button>
                </View>
            </View>
            <View className="bg-white rounded-xl p-4 shadow-sm mt-4" data-id="element-267">
                <Text className="font-semibold mb-3" data-id="element-268">Exercises</Text>
                <View className="py-3 border-b border-gray-100 last:border-0" data-id="element-269">
                    <View className="flex-row justify-between" data-id="element-270">
                        <View data-id="element-271">
                            <Text className="font-medium" data-id="element-272">Bench Press</Text>
                            <Text className="text-sm text-gray-500" data-id="element-273">4 sets × 8 reps</Text>
                        </View>
                        <Text className="text-blue-600 text-sm" data-id="element-274">
                            Details
                        </Text>
                    </View>
                </View>
                <View className="py-3 border-b border-gray-100 last:border-0" data-id="element-269">
                    <View className="flex-row justify-between" data-id="element-270">
                        <View data-id="element-271">
                            <Text className="font-medium" data-id="element-272">Bent Over Rows</Text>
                            <Text className="text-sm text-gray-500" data-id="element-273">4 sets × 10 reps</Text>
                        </View>
                        <Text className="text-blue-600 text-sm" data-id="element-274">
                            Details
                        </Text>
                    </View>
                </View>
                <View className="py-3 border-b border-gray-100 last:border-0" data-id="element-269">
                    <View className="flex-row justify-between" data-id="element-270">
                        <View data-id="element-271">
                            <Text className="font-medium" data-id="element-272">Overhead Press</Text>
                            <Text className="text-sm text-gray-500" data-id="element-273">3 sets × 10 reps</Text>
                        </View>
                         <Text className="text-blue-600 text-sm" data-id="element-274">
                            Details
                        </Text>
                    </View>
                </View>
                <View className="py-3 border-b border-gray-100 last:border-0" data-id="element-269">
                    <View className="flex-row justify-between" data-id="element-270">
                        <View data-id="element-271">
                            <Text className="font-medium" data-id="element-272">Lat Pulldowns</Text>
                            <Text className="text-sm text-gray-500" data-id="element-273">3 sets × 12 reps</Text>
                        </View>
                         <Text className="text-blue-600 text-sm" data-id="element-274">
                            Details
                        </Text>
                    </View>
                </View>
                <View className="py-3 border-b border-gray-100 last:border-0" data-id="element-269">
                    <View className="flex-row justify-between" data-id="element-270">
                        <View data-id="element-271">
                            <Text className="font-medium" data-id="element-272">Bicep Curls</Text>
                            <Text className="text-sm text-gray-500" data-id="element-273">3 sets × 12 reps</Text>
                        </View>
                         <Text className="text-blue-600 text-sm" data-id="element-274">
                            Details
                        </Text>
                    </View>
                </View>
                <View className="py-3 border-b border-gray-100 last:border-0" data-id="element-269">
                    <View className="flex-row justify-between" data-id="element-270">
                        <View data-id="element-271">
                            <Text className="font-medium" data-id="element-272">Tricep Pushdowns</Text>
                            <Text className="text-sm text-gray-500" data-id="element-273">3 sets × 12 reps</Text>
                        </View>
                         <Text className="text-blue-600 text-sm" data-id="element-274">
                            Details
                        </Text>
                    </View>
                </View>
                <View className="py-3 border-b border-gray-100 last:border-0" data-id="element-269">
                    <View className="flex-row justify-between" data-id="element-270">
                        <View data-id="element-271">
                            <Text className="font-medium" data-id="element-272">Face Pulls</Text>
                            <Text className="text-sm text-gray-500" data-id="element-273">3 sets × 15 reps</Text>
                        </View>
                         <Text className="text-blue-600 text-sm" data-id="element-274">
                            Details
                        </Text>
                    </View>
                </View>
                <Text className="w-full mt-3 text-center text-blue-600 text-sm font-medium" data-id="element-275">
                    Edit Workout
                </Text>
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
