import React from 'react';
import Calculator from '../containers/Calculator';
import {render, fireEvent} from '@testing-library/react';

describe('Calculator', () => {
  let container;
  beforeEach(() => {
    container = render(<Calculator/>)
  })

  it('should change running total on number enter', () => {
    const button4 = container.getByTestId('number4');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button4);
    expect(runningTotal.textContent).toEqual('4');
  })


  it('should add numbers', () => {
    const button4 = container.getByTestId('number4');
    fireEvent.click(button4);
    const add = container.getByTestId('operator-add');
    fireEvent.click(add)
    const button1 = container.getByTestId('number1');
    fireEvent.click(button1)
     
     const runningTotal = container.getByTestId('running-total');
     const equal  = container.getByTestId('operator-equals');
     fireEvent.click(equal)
     expect(runningTotal.textContent).toEqual('5');
  
  })

  it('should subtract numbers' ,() => {

    const button4 = container.getByTestId('number4');
    fireEvent.click(button4);
    const sub = container.getByTestId('operator-subtract');
    fireEvent.click(sub)
    const button1 = container.getByTestId('number1');
    fireEvent.click(button1)
     
     const runningTotal = container.getByTestId('running-total');
     const equal  = container.getByTestId('operator-equals');
     fireEvent.click(equal)
     expect(runningTotal.textContent).toEqual('3'); 

  })

  it('should be able to multiply numbers' , () => {

    const button4 = container.getByTestId('number4');
    fireEvent.click(button4);
    const multiply = container.getByTestId('operator-multiply');
    fireEvent.click(multiply)
    const button1 = container.getByTestId('number1');
    fireEvent.click(button1)
     
     const runningTotal = container.getByTestId('running-total');
     const equal  = container.getByTestId('operator-equals');
     fireEvent.click(equal)
     expect(runningTotal.textContent).toEqual('4'); 

  })

  it('should be able to divid numbers' , () => {

    const button4 = container.getByTestId('number4');
    fireEvent.click(button4);
    const divid = container.getByTestId('operator-divide');
    fireEvent.click(divid)
    const button1 = container.getByTestId('number1');
    fireEvent.click(button1)
     
     const runningTotal = container.getByTestId('running-total');
     const equal  = container.getByTestId('operator-equals');
     fireEvent.click(equal)
     expect(runningTotal.textContent).toEqual('4'); 

  });

  it('should be able to concatenate numbers' , () => {

    const button4 = container.getByTestId('number4');
    fireEvent.click(button4);
    const button1 = container.getByTestId('number1');
    fireEvent.click(button1)
    const runningTotal = container.getByTestId('running-total');
    expect(runningTotal.textContent).toEqual('41');  
  }); 

  it('should be able to chain multiple operations together', () => {

    const button4 = container.getByTestId('number4');
    fireEvent.click(button4);
    const multiply = container.getByTestId('operator-multiply');
    fireEvent.click(multiply)
    const button1 = container.getByTestId('number1');
    fireEvent.click(button1)
    fireEvent.click(multiply)
    const button7 = container.getByTestId('number7');
    fireEvent.click(button7);
    const runningTotal = container.getByTestId('running-total');
    const equal  = container.getByTestId('operator-equals');
    fireEvent.click(equal)
    expect(runningTotal.textContent).toEqual('28'); 
  });


  it('should be able to clear without effecting' ,() => { 

    const button4 = container.getByTestId('number4');
    fireEvent.click(button4);
    const sub = container.getByTestId('operator-subtract');
    fireEvent.click(sub)
    const button1 = container.getByTestId('number1');
    fireEvent.click(button1)
     
     const runningTotal = container.getByTestId('running-total');
     const equal  = container.getByTestId('operator-equals');
     fireEvent.click(equal)

     const add = container.getByTestId('operator-add');
     fireEvent.click(add) 

     const button7 = container.getByTestId('number7');
     fireEvent.click(button7);

     const clear = container.getByTestId('clear');
     fireEvent.click(clear);

     fireEvent.click(add)

     const button8 = container.getByTestId('number8');
     fireEvent.click(button8);

     fireEvent.click(equal)
     expect(runningTotal.textContent).toEqual('11'); 

    })








})



