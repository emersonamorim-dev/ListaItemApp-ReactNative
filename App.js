import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity } from 'react-native';
import { SwipeListView } from 'react-native-swipe-list-view';

export default function App() {
  const [compras, setCompras] = useState([]);
  const [itemCompra, setItemCompra] = useState('');

  const adicionarCompra = () => {
    setCompras([...compras, { id: Date.now().toString(), nome: itemCompra }]);
    setItemCompra('');
  };

  const removerCompra = (id) => {
    setCompras(compras.filter((compra) => compra.id !== id));
  };

  const renderCompra = ({ item }) => (
    <View style={styles.item}>
      <Text style={styles.itemText}>{item.nome}</Text>
    </View>
  );

  const renderHiddenItem = ({ item }) => (
    <View style={styles.hiddenItem}>
      <TouchableOpacity style={styles.deleteButton} onPress={() => removerCompra(item.id)}>
        <Text style={styles.deleteButtonText}>Delete</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lista de Compras</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite o item de compra"
        value={itemCompra}
        onChangeText={setItemCompra}
      />
      <Button title="Adicionar item" onPress={adicionarCompra} />
      <SwipeListView
        style={styles.list}
        data={compras}
        keyExtractor={(item) => item.id}
        renderItem={renderCompra}
        renderHiddenItem={renderHiddenItem}
        rightOpenValue={-75}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 30,
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#777',
    padding: 8,
    margin: 10,
    width: '90%',
  },
  list: {
    width: '100%',
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    width: '100%',
    borderColor: 'gray',
    borderBottomWidth: 1,
    backgroundColor: 'white',
  },
  itemText: {
    flex: 1,
  },
  hiddenItem: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    padding: 10,
    width: '100%',
    borderColor: 'gray',
    borderBottomWidth: 1,
    backgroundColor: 'white',
  },
  deleteButton: {
    width: 75,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
    opacity: 0,
  },
  deleteButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});



