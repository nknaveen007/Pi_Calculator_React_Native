import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MainScreen from './Screen/MainScreen';


const Stack = createStackNavigator();


const App=()=> {
  return (
    
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name='Pi' component={MainScreen}/>
     
      </Stack.Navigator>
    </NavigationContainer>
   
  );
}

const main=()=>{
  return(
   
     <App/>
  
  )
}


export default main;
