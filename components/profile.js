import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faEdit } from "@fortawesome/free-solid-svg-icons";

export default function ProfileScreen({ navigation }) {
    const [streamValue, setSelectedStreamValue] = useState("JEE");
    return (
      <View style={{ flex: 1, backgroundColor: "white" }}>
        <View style={{ alignItems: 'center', marginTop: 20 }}>
          <TouchableOpacity>
             <Text style={{ fontSize: 10, alignSelf: 'center' }}>Click to replace image</Text>
            <Image
              style={{ width: 150, height: 150, borderRadius: 75 }}
              source={{
                uri:
                  'https://picsum.photos/200/300',
              }}
            />
          </TouchableOpacity>
        </View>
        <View style={{ alignItems: 'center', marginTop: 20 }}>
          <TouchableOpacity>
             <View style={{ flexDirection: 'row'}}>
                <Text style={{ fontSize: 28 }}>Rohit JG</Text>
                <FontAwesomeIcon icon={faEdit} size={21} color={"black"} style={{alignSelf: 'center', marginLeft: 5}}/>
             </View>
          </TouchableOpacity>
        </View>
        <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: 20 }}>
              <Picker mode="dropdown" dropdownIconColor="#fff" style={styles.streamPicker} selectedValue={streamValue} onValueChange={(itemValue, itemIndex) => setSelectedStreamValue(itemValue)}>
                        <Picker.Item style={styles.streamPicker} label="JEE" value="JEE" />
                        <Picker.Item style={styles.streamPicker} label="NEET" value="NEET" />
              </Picker>
        </View>
        <View style= { { borderBottomColor: 'black', borderBottomWidth: 1, marginTop: 50, marginBottom: 10 }} />
        <View>
          <Text style={{ fontSize: 38, width: "100%", textAlign: "center" }}>User Stats</Text>
          <Text style={{ fontSize: 28, width: "100%", textAlign: "left", marginTop: 20, marginLeft: 20 }}>Questions asked: 0</Text>
          <Text style={{ fontSize: 28, width: "100%", textAlign: "left", marginTop: 20, marginLeft: 20 }}>Questions reviewed: 0</Text>
          <TouchableOpacity style={{ marginTop: 50, width: "35%", alignItems: 'center', backgroundColor: 'black', alignSelf: 'center', borderRadius: 15, paddingBottom: 3 }}>
              <Text style={{ fontSize: 28, width: "100%", textAlign: "center", color: 'white' }}>History</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  const styles = StyleSheet.create({
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
  