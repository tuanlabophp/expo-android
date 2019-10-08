import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TextInput,
  Button } from 'react-native';
import RowItem from './row-item';

export default function App() {
  // Dinh nghia ra state va ham thay doi state
  const [status, setStatus] = useState(false);
  const [colorText, setCorlorText] = useState('black');
  const [number, setNumber] = useState(0);
  let kiemTraThayDoi = 123;


  const data = [
    {
      identity: 'PH1',
      name: 'Nguyen Van A',
    },
    {
      identity: 'PH2',
      name: 'Nguyen Van B',
    },
    {
      identity: 'PH3',
      name: 'Nguyen Van C',
    }
  ];

  // Luu noi dung ten nhap vao state
  const [inputValue, setInputValue] = useState('');
  // Luu noi dung msv vao state
  const [identityValue, setIdentityValue] = useState('');
  // Luu danh sach vao state
  const [list, setList] = useState(data);


  const handleSubmit = () => {
    // Lam the nao khi an submit -> inputValue & identityValue them vao danh sach
    // Tao ra item moi bang du lieu cua 2 o input
    const item = {
      identity: identityValue,
      name: inputValue
    };
    // Tao ra ds moi mang list state + item
    const newData = list.concat(item);
    // thuc hien set state cho ds moi
    setList(newData);
    // thuc hien set state gia tri mac dinh cho 2 input
    setInputValue('');
    setIdentityValue('');
  }

  return (
    <View >
      <View style={{marginTop: 20}}>
        <TextInput
          placeholder='Nhap ten'
          value={inputValue} // vua hien thi dc gia tri go tren input
          onChangeText={(text) => setInputValue(text)} // vua luu dc gtri tam thoi
        />
        <TextInput
          placeholder='Nhap msv'
          value={identityValue} // vua hien thi dc gia tri go tren input
          onChangeText={(text) => setIdentityValue(text)} // vua luu dc gtri tam thoi
        />
        <Button
          title='SUBMIT'
          onPress={() => handleSubmit()}
        />
      </View>
      <FlatList
        data={list}
        renderItem={({item}) =>
          <RowItem
            identity={item.identity}
            name={item.name}
          />
        }
        keyExtractor={(item) => item.identity}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  abc: {
    marginTop: 300,
    color: 'green',
    textAlign: 'left',
    fontSize: 30
  },
  newText: {
    marginLeft: 40
  }
});
