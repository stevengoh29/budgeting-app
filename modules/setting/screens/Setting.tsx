import { View, Text, ScrollView, Switch } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ThemedText } from '@/components/base/ThemedText'
import { useColorScheme } from '@/hooks/useColorScheme.web'
import { Ionicons, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons'
import { BlurView } from 'expo-blur'

const Setting = () => {
    const color = useColorScheme()

    return (
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingHorizontal: 16, gap: 20, backgroundColor: 'white', flex: 1 }}>
            <View style={{ gap: 8 }}>
                <ThemedText variant='bold' size='lg'>Accounts</ThemedText>
                <View style={{ padding: 8, backgroundColor: '#D8D8D8', borderRadius: 4, flexDirection: 'row', justifyContent: 'space-between', gap: 8, alignItems: 'center' }}>
                    <Ionicons name='person-circle' size={48} />
                    <ThemedText style={{ flex: 1 }}>No account connected.</ThemedText>
                    <Ionicons name='chevron-forward' size={24} />
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8, borderBottomColor: 'black', borderBottomWidth: 1, paddingVertical: 8 }}>
                    <Ionicons name='list' size={20} />
                    <ThemedText style={{ flex: 1 }}>Budget Listing</ThemedText>
                    <Ionicons name='chevron-forward' size={16} />
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8, borderBottomColor: 'black', borderBottomWidth: 1, paddingVertical: 8 }}>
                    <MaterialIcons name='category' size={20} />
                    <ThemedText style={{ flex: 1 }}>Category Listing</ThemedText>
                    <Ionicons name='chevron-forward' size={16} />
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8, borderBottomColor: 'black', borderBottomWidth: 1, paddingVertical: 8 }}>
                    <Ionicons name='wallet' size={20} />
                    <ThemedText style={{ flex: 1 }}>Wallet Listing</ThemedText>
                    <Ionicons name='chevron-forward' size={16} />
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8, borderBottomColor: 'black', borderBottomWidth: 1, paddingVertical: 8 }}>
                    <Ionicons name='card' size={20} />
                    <ThemedText style={{ flex: 1 }}>Currency</ThemedText>
                    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 4 }}>
                        <ThemedText size='sm'>IDR</ThemedText>
                        <Ionicons name='chevron-forward' size={16} />
                    </View>
                </View>
            </View>
            <View style={{ gap: 8 }}>
                <ThemedText variant='bold' size='lg'>Preferences</ThemedText>
                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8, borderBottomColor: 'black', borderBottomWidth: 1, paddingVertical: 8 }}>
                    <MaterialCommunityIcons name='theme-light-dark' size={20} />
                    <ThemedText style={{ flex: 1 }}>Toggle Color Mode</ThemedText>
                    <Switch style={{ height: 24 }} />
                </View>
            </View>
            <ThemedText size='xs' style={{ textAlign: 'center', color: 'gray' }}>Version 1.0.0</ThemedText>
        </ScrollView >
    )
}

export default Setting