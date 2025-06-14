import { useHeaderHeight } from '@react-navigation/elements';
import { Icon } from '@roninoss/icons';
import { FlashList } from '@shopify/flash-list';
import { cssInterop } from 'nativewind';
import * as React from 'react';
import {
    Linking,
    useWindowDimensions,
    View,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { Text } from '@/components/nativewindui/Text';
import { useColorScheme } from '@/lib/useColorScheme';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/nativewindui/Avatar';

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
    const insets = useSafeAreaInsets();
    const dimensions = useWindowDimensions();
    const headerHeight = useHeaderHeight();
    const { colors } = useColorScheme();
    const height = dimensions.height - headerHeight - insets.bottom - insets.top;

    return (
        <View style={{ height }}>
            <View className="flex-row content-center items-center border border-red-500">
                <Avatar alt="NativewindUI Avatar">
                    <AvatarImage
                        source={{
                            uri: 'https://pbs.twimg.com/profile_images/1782428433898708992/1voyv4_A_400x400.jpg',
                        }}
                    />
                    <AvatarFallback>
                        <Text className="text-foreground">NUI</Text>
                    </AvatarFallback>
                </Avatar>
                <Text className="text-lg">Bonjour <Text variant="heading">Sébastien</Text>,</Text>
            </View>

            <View className="flex-1 items-center justify-center">
                <Text className="opacity-70">Body</Text>
            </View>
        </View>
    );
}

type ComponentItem = { name: string; component: React.FC };

function keyExtractor(item: ComponentItem) {
    return item.name;
}

function renderItemSeparator() {
    return <View className="p-2" />;
}

function renderItem({ item }: { item: ComponentItem }) {
    return (
        <Card title={item.name}>
            <item.component />
        </Card>
    );
}

function Card({ children, title }: { children: React.ReactNode; title: string }) {
    return (
        <View className="px-4">
            <View className="gap-4 rounded-xl border border-border bg-card p-4 pb-6 shadow-sm shadow-black/10 dark:shadow-none">
                <Text className="text-center text-sm font-medium tracking-wider opacity-60">{title}</Text>
                {children}
            </View>
        </View>
    );
}

const COMPONENTS: ComponentItem[] = [];
