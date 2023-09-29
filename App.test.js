import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import App from './App';

describe('App', () => {
  it('deve adicionar um item à lista de compras', () => {
    const { getByPlaceholderText, getByText, queryByText } = render(<App />);
    
    // Verifica se o item específico não está na lista
    expect(queryByText('Maçã')).toBeNull();

    // Digita um item de compra no campo de texto
    fireEvent.changeText(getByPlaceholderText('Digite o item de compra'), 'Maçã');
    
    // Clica no botão para adicionar o item
    fireEvent.press(getByText('Adicionar item'));

    // Verifica se o item foi adicionado à lista
    expect(queryByText('Maçã')).not.toBeNull();
  });
});
