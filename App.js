import React, {useState} from 'react';
import { StyleSheet, View, Button, Text, Image, TouchableOpacity, StatusBar } from 'react-native';
import Home from './components/home'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { Picker } from '@react-native-picker/picker';
import ProfileScreen from './components/profile';

function HomeScreen({ navigation }) {
  return (
    <View style={styles.screen}>
      <StatusBar hidden={true} />
      <Home style={styles.home}/>
    </View>
  );
}

function HistoryScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}

// function ProfileScreen({ navigation }) {
//   const [streamValue, setSelectedStreamValue] = useState("JEE");
//   return (
//     <View style={{ flex: 1 }}>
//       <View style={{ alignItems: 'center', marginTop: 20 }}>
//         <TouchableOpacity>
//           <Image
//             style={{ width: 150, height: 150, borderRadius: 75 }}
//             source={{
//               uri:
//                 'https://reactnative.dev/img/tiny_logo.png',
//             }}
//           />
//           <Text style={{ fontSize: 18 }}>Edit Image</Text>
//         </TouchableOpacity>
//       </View>
//       <View style={{ alignItems: 'center', marginTop: 20 }}>
//         <TouchableOpacity>
//           <Text style={{ fontSize: 28 }}>Rohit JG</Text>
//           <Text style={{ fontSize: 14 }}>Edit Name</Text>
//         </TouchableOpacity>
//       </View>
//       <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: 20 }}>
//             <Picker mode="dropdown" dropdownIconColor="#fff" style={styles.streamPicker} selectedValue={streamValue} onValueChange={(itemValue, itemIndex) => setSelectedStreamValue(itemValue)}>
//                       <Picker.Item style={styles.streamPicker} label="JEE" value="JEE" />
//                       <Picker.Item style={styles.streamPicker} label="NEET" value="NEET" />
//             </Picker>
//       </View>
//     </View>
//   );
// }

const Drawer = createDrawerNavigator();

export default function App() {
  const [streamValue, setSelectedStreamValue] = useState("JEE");
  return (
    <NavigationContainer>
      <Drawer.Navigator useLegacyImplementation initialRouteName="Home" >
      <Drawer.Screen name="Profile" component={ProfileScreen} options={{
          drawerLabel: () => (
            <View style={{flex: 1, flexDirection: 'row'}}>
            <Image
              style={{
                width: 50,
                height: 50,
                borderRadius: 100 / 2,
              }}
              source={{ uri: 'https://picsum.photos/200/300' }}
            />
            <View style={{flex: 1, flexDirection: 'column', marginLeft: 10, justifyContent: 'center'}}>
              <Text style={{fontSize: 18}}>
                Rohit JG
              </Text>
              <Text>
                JEE
              </Text>
              </View>
            </View>
          ),
          headerTitle: "Profile",
          headerStyle: {
            backgroundColor: '#000',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontSize: 24,
            color: '#fff',
          },
          headerTitleAlign: 'center',
        }}/>
        <Drawer.Screen options={{
          headerTitle: "Bouncy",
          headerRight: () => (
            <Picker mode="dropdown" dropdownIconColor="#fff" style={[styles.streamPicker, {position: 'absolute', right: 0, marginTop: 0}]} selectedValue={streamValue} onValueChange={(itemValue, itemIndex) => setSelectedStreamValue(itemValue)}>
                <Picker.Item style={styles.streamPicker} label="JEE" value="JEE" />
                <Picker.Item style={styles.streamPicker} label="NEET" value="NEET" />
            </Picker>
          ),
          headerStyle: {
            backgroundColor: '#000',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontSize: 24,
            color: '#fff',
          },
          headerTitleAlign: 'center',
        }} name="Home" component={HomeScreen} />
        <Drawer.Screen name="History" component={HistoryScreen} options={{
          headerTitle: "History",
          headerStyle: {
            backgroundColor: '#000',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontSize: 24,
            color: '#fff',
          },
          headerTitleAlign: 'center',
        }}/>
      </Drawer.Navigator>
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  screen: {
    height: '100%',
    width: '100%',
    backgroundColor: '#fff',
  },
  home:{
    flex: 1,
    flexGrow: 1
  },
  streamPicker: {
    width: 130,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    fontSize: 16,
    backgroundColor: '#000',
    color: '#fff',
},

});
