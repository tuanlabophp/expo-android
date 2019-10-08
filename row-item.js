import React, {useState} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

export default function RowItem({identity, name}) {
    return (
        <View style={styles.row}>
            {/* Chuyen anh va text vao trong 2 view cung cap */}
            <View>
                <Image
                    source={require('./chim.png')}
                    style={styles.chim}
                />
            </View>
            <View>
                <Text style={styles.text}>{identity}</Text>
                <Text style={styles.text}>{name}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    chim: {
        width: 70,
        height: 70,
        borderRadius: 70
    },
    row: {
        flexDirection: 'row', // dua nhung phan tu con cung cap nam ngang
        backgroundColor: 'pink',
        marginBottom: 5
    },
    text: {
        color: '#fff',
        fontSize: 50,
    }
});
