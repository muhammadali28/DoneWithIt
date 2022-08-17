import { useEffect } from 'react';
import {Notifications} from 'expo';
import * as Permissions from 'expo-permissions';
import expoPushTokenApi from '../api/expoPushToken';
import navigation from '../navigation/rootNavigation';

export default useNotification=(notificationListener)=>{

    useEffect(() => {
        registerForPushNotification();
  
        if(notificationListener) Notifications.addListener(notificationListener);
      }, []);
  
      const registerForPushNotification=async()=>{
          try {
              const permission= await Permissions.getAsync(Permissions.NOTIFICATIONS);
              if(!permission.granted) return;
      
              const token = await Notifications.getExpoPushTokenAsync();
              expoPushTokenApi.register(token);
          } catch (error) {
              console.log('error getting notification',error);
          }
      };
};