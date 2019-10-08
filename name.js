import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
// import {userName}

// C1: Khai bao 1 component
function Name({text, number, name}) {
    // props = {text: '', number: '', name:''};
    // thay vi truyen props thi co the truyen nhu tren
    return (
        <View style={styles.margin}>
            <Text>Text tu App truyen sang: {text}</Text>
            <Text>Number tu App truyen sang: {number}</Text>
            <Text>Name tu App truyen sang: {name}</Text>
            <Text>Nguyen Duc Anh Tuan</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    margin: {
        marginTop: 30
    }
});

export default Name;

// C2:
// export default function Name() {

// }
