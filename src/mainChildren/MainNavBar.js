import React, { useContext, useEffect, useState } from 'react';
import {
    View,
} from 'react-native';
import { Menu } from '../components/shared/Footer';
import { Feed } from '../components/screens/FeedScreen';
import { Responses } from '../components/screens/ResponsesScreen';
import { Matches } from '../components/screens/MatchesScreen';
import { Header, HotNewToggle, SchoolToggle } from '../components/shared/Header';
import ScreenNames from '../utility/ScreenNames';
import ViewProfile from '../components/screens/ProfileScreen';
import { BottomTabHeaderProps, createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { MapPage } from '../components/map/map';
import { CoreColors } from '../styles/colors';
import messaging from '@react-native-firebase/messaging';
import { NavigationContext } from '@react-navigation/native';
import { showMessage } from 'react-native-flash-message';
import Notification from '../components/notification/notification';
import { BarInsetsContext } from '../utility/BarInsets';
import { BaseStyles } from '../styles/core';
import { updateUserTrackingData } from '../../reducers/userTrackingData';
import { useAppDispatch } from '../../store/hooks';

export function TabManager() {
    const [viewing, setViewing] = useState(false)
    const [notification, setNotification] = useState(<></>)
    const [footerHeight, setFooterHeight] = useState(BaseStyles.doublePadding)

    const navigation = useContext(NavigationContext)
    const dispatch = useAppDispatch()
    
    messaging().onNotificationOpenedApp(async remoteMessage => {
        dispatch(updateUserTrackingData({ ["OpenAppFromNotification"+ Date.now().toString()]: {time:Date.now(), type:remoteMessage.data.type, text:remoteMessage.notification.title }}))
        if (remoteMessage.data.type == "response") {
            navigation.navigate(ScreenNames.Responses)
        }
        if (remoteMessage.data.type == "connection") {
            navigation.navigate(ScreenNames.Feed)
        }
        if (remoteMessage.data.type == "match") {
            navigation.navigate(ScreenNames.Matches)
        }
    })

    const inAppNotification = async () => {
        const authStatus = await messaging().requestPermission();
        const enabled =
            authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
            authStatus === messaging.AuthorizationStatus.PROVISIONAL;

        // if messaging is disabled, return an empty unsubscribe callback
        if (enabled) {

            messaging().onMessage(async remoteMessage => {

                function close() {
                    console.log("close")
                    setNotification(<></>)
                    setViewing(false)
                }
                showMessage({
                    message: remoteMessage.notification.title,
                    description: remoteMessage.notification.body,
                    type: 'success',
                    titleStyle: { color: remoteMessage.data.text != null ? remoteMessage.data.text : CoreColors.Black },
                    textStyle: { color: remoteMessage.data.text != null ? remoteMessage.data.text : CoreColors.Black },
                    color: remoteMessage.data.color != null ? remoteMessage.data.color : CoreColors.LightBlue,
                    backgroundColor: remoteMessage.data.color != null ? remoteMessage.data.color : CoreColors.LightBlue,
                    duration: 4000,
                    
                    onPress: () => {
                        dispatch(updateUserTrackingData({ ["ClickInAppNotification"+ Date.now().toString()]: {time:Date.now(), type:remoteMessage.data.type, text:remoteMessage.notification.title }}))
                        if (remoteMessage.data.type == "response") {
                            navigation.navigate(ScreenNames.Responses)
                        }
                        if (remoteMessage.data.type == "match") {
                            navigation.navigate(ScreenNames.Matches)
                        }
                        else {

                            let noti = <Notification data={(remoteMessage.data)} onClose={close}></Notification>
                            setNotification(noti)
                            setViewing(true)

                        }
                    }
                })
            })
        }
    }

    const Tab = createBottomTabNavigator()

    useEffect(() => {
        inAppNotification()
    }, [])

    const header = (props: BottomTabHeaderProps) => {

        const title = props.route.name === ScreenNames.Feed || props.route.name === ScreenNames.Map? '' : props.route.name
        let children = null 
        if (props.route.name === ScreenNames.Feed){
                children = <><HotNewToggle /></>
        } 
        else if (props.route.name === ScreenNames.Map){
            children = <><SchoolToggle/></>
        }


        return (
            <Header text={title}>
                {children}
            </Header>
        )
    }
    const Map = ()=>{
return(<MapPage></MapPage>)
    }
    return (
        <View style={{ height: '100%' }}>
            {viewing ? notification : null}
            <BarInsetsContext.Provider value={{ footerInset: footerHeight }}>
                <Tab.Navigator
                    screenOptions={{ header: (props: BottomTabHeaderProps) => header(props), headerTransparent: true, headerBackgroundContainerStyle: { backgroundColor: 'transparent' } }}
                    sceneContainerStyle={{ backgroundColor: CoreColors.LightestGrayTransparency }}
                    tabBar={(props) => <Menu {...props} setHeight={setFooterHeight} />}
                    initialRouteName={ScreenNames.Feed}
                >
                    <Tab.Screen name={ScreenNames.Map} component={Map} />
                    <Tab.Screen name={ScreenNames.Feed} component={Feed} />
                    <Tab.Screen name={ScreenNames.Responses} component={Responses} />
                    <Tab.Screen name={ScreenNames.Matches} component={Matches} />
                    <Tab.Screen name={ScreenNames.Profile} component={ViewProfile} />
                </Tab.Navigator >
            </BarInsetsContext.Provider>
        </View >
    );
}