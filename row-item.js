import React, {useState} from 'react';
import {View,
    Text,
    StyleSheet,
    Image,
    Button,
    TouchableOpacity,
    Alert
} from 'react-native';

const showAlert = (ma, hamXoa) => {
    // ma = identity truyen o ben duoi
    // hamXoa = handleDelete truyen o ben duoi
    // hamXoa(ma) <=> handleDelete(identity) <=> handleDeleteRow(identityFromRowItem)
    // showAlert         RowItem                    App
    return Alert.alert(
        'Delete?',
        `Ban xoa item co identity ${ma} khong?`,
        [
            {
                text: 'Cancel',
                onPress: () => hamXoa(ma)
            },
            {
                text: 'Ok',
                onPress: () => hamXoa(ma)
            }
        ],
        {cancelable: true} // disable viec press ben ngoai alert de cancel
    );
}

export default function RowItem({ identity, name, handleDelete, gender, active}) {
    return (
        <View style={styles.row}>
            {/* Chuyen anh va text vao trong 2 view cung cap */}
            <View>
                <TouchableOpacity onPress={() => { handleDelete(identity) }}>
                    <Image
                        source={require('./chim.png')}
                        style={styles.chim}
                    />
                </TouchableOpacity>
            </View>
            <View>
                <Text style={styles.text}>{identity}</Text>
                <Text style={styles.text}>{name}</Text>
                <Text style={styles.text}>{gender}</Text>
                <Text style={styles.text}>{active ? 'True' : 'False'}</Text>
            </View>
            <View>
                <Button
                    title={`Delete ${identity}?`}
                    onPress={() => showAlert(identity, handleDelete)}
                />
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
        fontSize: 30,
    }
});
