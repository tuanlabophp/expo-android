import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TextInput,
  Button,
  Picker,
  Switch,
  Modal
} from 'react-native';
import RowItem from './row-item';

export default function App() {
  // Dinh nghia ra state va ham thay doi state
  const [status, setStatus] = useState(false);
  const [colorText, setCorlorText] = useState('black');
  const [number, setNumber] = useState(0);
  let kiemTraThayDoi = 123;


  const data = [
    {
      name: 'Nguyen Van A',
      identity: 'PH1',
      gender: 'Nam',
      active: true
    }
  ];

  // Luu noi dung ten nhap vao state
  const [inputValue, setInputValue] = useState('');
  // Luu noi dung msv vao state
  const [identityValue, setIdentityValue] = useState('');
  // Luu danh sach vao state
  const [list, setList] = useState(data);
  // Luu du lieu sau khi su dung picker
  const [pickerValue, setPickerValue] = useState(null);
  // Luu trang thai sau khi switch, mac dinh la false
  const [switchValue, setSwitchValue] = useState(false);
  // Luu trang thai an hien cua list
  const [switchList, setSwitchList] = useState(true);


  const handleSubmit = () => {
    // Lam the nao khi an submit -> inputValue & identityValue them vao danh sach
    // Tao ra item moi bang du lieu cua 2 o input
    const item = {
      identity: identityValue,
      name: inputValue,
      gender: pickerValue, // gia tri gender lay tu state pickerValue
      active: switchValue // gia tri active lay tu state switchValue
    };
    // Tao ra ds moi mang list state + item
    const newData = list.concat(item);
    // thuc hien set state cho ds moi
    setList(newData);
    // thuc hien set state gia tri mac dinh cho 2 input
    setInputValue('');
    setIdentityValue('');
  }

  // Ham xu ly xoa phan tu
  const handleDeleteRow = (identityFromRowItem) => {
    // identityFromRowItem o tham so duoc nhan gia tri tu handleDelete cua thang con
    // Nhan vao list
    // Xu ly xoa di phan tu co vi tri nao do
    const newList = list.filter((item) => item.identity != identityFromRowItem);
    // Hien thi ra danh sach
    setList(newList);
    // Khi thuc hien cap nhat state thi se duoc render lai
    // -> mang moi sau khi loc phan tu can xoa se hien thi len
  }

  // Truyen ham nay sang RowItem
  const handleShowModal(name, gender...) {
    // Hien thi modal ra
    setModalVisble(true);
    // Nhan gia tri tu RowItem, sau do set state cho phan hien thi cua modal
    setABCZIS(gia tri hien thi o modal)
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
        <Picker
          selectedValue={pickerValue}
          onValueChange={(value) => setPickerValue(value)}
        >
          <Picker.Item label='Nam'value='Nam' />
          <Picker.Item label='Nu'value='Nu' />
          <Picker.Item label='Khac'value='Khac' />
        </Picker>
        <Switch
          value={switchValue}
          onValueChange={(value) => setSwitchValue(value)}
        />
        <Button
          title='SUBMIT'
          onPress={() => handleSubmit()}
        />
        <Switch
          value={switchList}
          onValueChange={(value) => setSwitchList(value)}
        />
      </View>
      {/* Cap ngoac nhon -> xu ly logic js */}
      {
        switchList == true// Kiem tra switchList co = true k?
          ? <FlatList // Neu dung se chay code sau dau ?
            data={list}
            renderItem={({item}) =>
              <RowItem
                identity={item.identity}
                name={item.name}
                gender={item.gender}
                active={item.active}
                handleDelete={handleDeleteRow}
              />
            }
            keyExtractor={(item) => item.identity}
          />
          : null // Neu sai se chay code sau dau :
      }
      <View style={{margin: 50}}>
      <Modal
        visible={switchValue}
        transparent={false}
        style={{margin: 50}}
      >
        <View style={styles.modalView}>
          <Text>ten sv</Text>
          <Text>ten sv</Text>
          <Text>ten sv</Text>
          <Text>ten sv</Text>
          <Switch
            value={switchValue}
            onValueChange={(value) => setSwitchValue(value)}
          />
        </View>
      </Modal>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  modalView: {
    margin: 50
  },
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
