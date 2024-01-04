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

});