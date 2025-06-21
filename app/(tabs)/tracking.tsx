import {useHeaderHeight} from '@react-navigation/elements';
import {Icon} from '@roninoss/icons';
import {FlashList} from '@shopify/flash-list';
import {cssInterop} from 'nativewind';
import * as React from 'react';
import {
    useWindowDimensions,
    View,
    Platform, ScrollView, Dimensions
} from 'react-native';
import {SafeAreaProvider, useSafeAreaInsets} from 'react-native-safe-area-context';
import {Text} from '@/components/nativewindui/Text';
import {useColorScheme} from '@/lib/useColorScheme';
import {Avatar, AvatarFallback, AvatarImage} from '@/components/nativewindui/Avatar';
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
    const {height: SCREEN_HEIGHT} = Dimensions.get('window');

    return (
        <View className="px-4 py-6 min-h-0" style={{minHeight: SCREEN_HEIGHT}}>
            <Text className="text-xl font-bold mb-6" data-id="element-279">Performance Tracking</Text>
            <View className="bg-white rounded-xl p-4 shadow-sm mb-6" data-id="element-280">
                <Text className="font-semibold mb-4" data-id="element-281">Bench Press Progress</Text>
                <View className="h-48 flex-row items-end" data-id="element-282">
                    <View className="flex-1 flex-row items-end justify-around h-full" data-id="element-283">
                        <View className="flex-col items-center w-8" data-id="element-284">
                            <View className="w-full bg-blue-500 rounded-t-sm" data-id="element-285"
                                  style={{height: '65%'}}></View>
                            <Text className="text-xs mt-1 text-gray-600" data-id="element-286">65</Text></View>
                        <View className="flex-col items-center w-8" data-id="element-284">
                            <View className="w-full bg-blue-500 rounded-t-sm" data-id="element-285"
                                  style={{height: '70%'}}></View>
                            <Text className="text-xs mt-1 text-gray-600" data-id="element-286">70</Text></View>
                        <View className="flex-col items-center w-8" data-id="element-284">
                            <View className="w-full bg-blue-500 rounded-t-sm" data-id="element-285"
                                  style={{height: '72.5%'}}></View>
                            <Text className="text-xs mt-1 text-gray-600" data-id="element-286">72.5</Text></View>
                        <View className="flex-col items-center w-8" data-id="element-284">
                            <View className="w-full bg-blue-500 rounded-t-sm" data-id="element-285"
                                  style={{height: '75%'}}></View>
                            <Text className="text-xs mt-1 text-gray-600" data-id="element-286">75</Text></View>
                        <View className="flex-col items-center w-8" data-id="element-284">
                            <View className="w-full bg-blue-500 rounded-t-sm" data-id="element-285"
                                  style={{height: '75%'}}></View>
                            <Text className="text-xs mt-1 text-gray-600" data-id="element-286">75</Text></View>
                        <View className="flex-col items-center w-8" data-id="element-284">
                            <View className="w-full bg-blue-500 rounded-t-sm" data-id="element-285"
                                  style={{height: '77.5%'}}></View>
                            <Text className="text-xs mt-1 text-gray-600" data-id="element-286">77.5</Text></View>
                        <View className="flex-col items-center w-8" data-id="element-284">
                            <View className="w-full bg-blue-500 rounded-t-sm" data-id="element-285"
                                  style={{height: '80%'}}></View>
                            <Text className="text-xs mt-1 text-gray-600" data-id="element-286">80</Text></View>
                    </View>
                </View>
                <View className="flex-row justify-between text-xs text-gray-500 mt-1" data-id="element-287"><Text
                    data-id="element-288">Week 1</Text><Text data-id="element-289"></Text><Text
                    data-id="element-290"></Text><Text data-id="element-291">Week 4</Text><Text
                    data-id="element-292"></Text><Text data-id="element-293"></Text><Text
                    data-id="element-294">Week 7</Text></View>
            </View>
            <Text className="font-semibold mb-4" data-id="element-295">Recent Exercise History</Text>
            <View className="bg-white rounded-xl p-4 shadow-sm mb-3" data-id="element-296">
                <View className="flex-row justify-between items-center" data-id="element-297"><Text
                    className="font-medium"
                    data-id="element-298"><Text>Bench</Text>
                    Press</Text><Text className="font-bold" data-id="element-299">80 kg</Text></View>
                <View className="flex-row justify-between items-center mt-2" data-id="element-300"><Text
                    className="text-sm text-gray-500" data-id="element-301">Last session</Text>
                    <View className="flex-row items-center text-green-600" data-id="element-302">

                        <Text className="text-sm" data-id="element-305">+2.5 kg</Text></View>
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
