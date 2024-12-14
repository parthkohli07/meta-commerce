/* Libraries */
import React, { useEffect } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
/* Pages */
import Profile from "../Pages/Profile";
import Setting from "../Pages/Setting";
import Cart from "../Pages/Cart";
import Products from './Products';
/* Varibales & fucntions */
const Tab = createBottomTabNavigator();
const productName='Product';
const settingName = 'Setting';
const cartName = 'Cart';
const profileName = 'Profile';
/* main function */
export default function Home(navigation){

    return(
        <Tab.Navigator
        initialRouteName={productName}
        screenOptions={({route})=>({
            tabBarActiveTintColor:'green',
            tabBarIcon: ({focused,color,size})=>{
                let iconName;
                let rn = route.name;

                if(rn === productName){
                    iconName = focused ? 'home' : 'home-outline'
                }else if (rn === settingName) {
                    iconName = focused ? 'settings' : 'settings-outline'
                }else if (rn === cartName) {
                    iconName = focused ? 'cart' : 'cart-outline'
                }else if (rn === profileName) {
                    iconName = focused ? 'list' : 'list-outline'
                }

                return <Ionicons name={iconName} size={size} color={color}/>
            },
        })}
        >
            <Tab.Screen name="Product" component={Products} />
            <Tab.Screen name="Setting" component={Setting} />
            <Tab.Screen name="Profile" component={Profile} />
            <Tab.Screen name="Cart" component={Cart} />
        </Tab.Navigator>
    );
}