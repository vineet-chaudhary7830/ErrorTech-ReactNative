import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Home,Portfolio,Settings,Transactions } from './Screens';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import Contact from './Screens/Contact';


const Tab = createBottomTabNavigator(); 
const screenOptions={
  tabBarShowLabel:false,
  headerShown:false,
  tabBarStyle:{
    position:'absolute',
    bottom:0,
    right:0,
    left:0,
    elevation:0,
    height:60,
    background:'#fff',
  }

}
export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={screenOptions}>
        <Tab.Screen name="Home" component={Home}
        options={{
          tabBarIcon:({focused})=>{
            return(
              <View style={{alignItems:'center',justifyContent:'center'}}>
              <Entypo name="home" size={24} color={focused?'#16247d':"#111"} />
              <Text style={{fontSize:12,color:'#16247d'}}>Home</Text>
            </View>
            )
          }
        }} />
        <Tab.Screen name="Portfolio" component={Contact} 
        options={{
          tabBarIcon:({focused})=>{
            return(
              <View style={{alignItems:'center',justifyContent:'center'}}>
              <Ionicons name="logo-whatsapp" size={24}  color={focused?'#16247d':"#111"} />
              <Text style={{fontSize:12,color:'#16247d'}}>Contact</Text>
            </View>
            )
          }
        }}/>
        <Tab.Screen name="Transactions" component={Transactions} 
        options={{
          tabBarIcon:({focused})=>{
            return(
              <View style={{alignItems:'center',justifyContent:'center'}}>
              <AntDesign name="linechart" size={24} color={focused?'#16247d':"#111"} />
              <Text style={{fontSize:12,color:'#16247d'}}>Transactions</Text>
            </View>
            )
          }
        }}/>
        <Tab.Screen name="Setting" component={Settings} 
        options={{
          tabBarIcon:({focused})=>{
            return(
              <View style={{alignItems:'center',justifyContent:'center'}}>
              <Ionicons name="settings" size={24} color="black" />
              <Text style={{fontSize:12,color:'#16247d'}}>Setting</Text>
            </View>
            )
          }
        }}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}

