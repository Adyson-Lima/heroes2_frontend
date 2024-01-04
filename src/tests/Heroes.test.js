import {render , screen} from '@testing-library/react';
import Heroes from '../pages/Heroes';
import { BrowserRouter } from 'react-router-dom';

describe('Testes da tela Heroes', () => {

  beforeEach(() => {
    render(
      <BrowserRouter>
        <Heroes/>
      </BrowserRouter>
    );
  });

  it('Existe card em Heroes?', () => {
    expect(screen.getByTestId('mycard')).toBeInTheDocument();
  });

  it('Existe Link novo em Heroes?', () => {
    expect(screen.getByTestId('mylink')).toBeInTheDocument();
  });

  it('Existe tabela em Heroes?', () => {
    expect(screen.getByTestId('mytable')).toBeInTheDocument();
  });

  it('Existe botão editar em Heroes?', () => {
    expect(screen.getByTestId('mybtn1')).toBeInTheDocument();
  });

  it('Existe botão excluir em Heroes?', () => {
    expect(screen.getByTestId('mybtn2')).toBeInTheDocument();
  });

});