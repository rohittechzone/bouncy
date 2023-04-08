// this code is not used anywhere

import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faBars } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
    const [streamValue, setSelectedStreamValue] = useState("JEE");

    return (
        <View style={styles.header}>
            <TouchableOpacity  style={{position: 'absolute', left: 10, alignSelf: 'center'}}>
                <FontAwesomeIcon icon={faBars} size={21} color={"white"} />
            </TouchableOpacity>
            <Text style={styles.title}>Bouncy</Text>
            <Picker mode="dropdown" dropdownIconColor="#fff" style={styles.streamPicker} selectedValue={streamValue} onValueChange={(itemValue, itemIndex) => setSelectedStreamValue(itemValue)}>
                <Picker.Item style={styles.streamPicker} label="JEE" value="JEE" />
                <Picker.Item style={styles.streamPicker} label="NEET" value="NEET" />
            </Picker>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        flex: 1,
        flexDirection: 'row',
        height: 50,
        backgroundColor: 'black',
        alignContent: 'center',
        justifyContent: 'center',
    },
    title: {
        textAlign: 'center',
        alignSelf: 'center',
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold',
    },
    streamPicker: {
        width: 130,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        fontSize: 18,
        backgroundColor: '#000',
        color: '#fff',
        position: 'absolute',
        right: 0,
        marginTop: 0,
    },

});