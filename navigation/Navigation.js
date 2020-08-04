import React from 'react'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { createDrawerNavigator } from 'react-navigation-drawer'
import { Platform } from 'react-native'
import Colors from '../constant/Colors'
import TeacherListScreen from '../screens/users/TeacherListScreen'
import FilterTeachersScreen from '../screens/users/FilterTeachersScreen'
import TeacherDetailScreen from '../screens/users/TeacherDetailScreen'


const defaultNavigationOptions = {
    headerStyle: {
        backgroundColor: Platform.OS === 'android' ? Colors.primary : 'white'
    },
    headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primary
}

const FilterNavigation = createStackNavigator({
    FilterNavigation: FilterTeachersScreen,
    TeacherList:TeacherListScreen,
    TeacherDetail:TeacherDetailScreen
}, {
    defaultNavigationOptions: defaultNavigationOptions
}
)

export default createAppContainer(FilterNavigation)