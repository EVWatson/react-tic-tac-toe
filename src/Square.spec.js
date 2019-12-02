import React from 'react';
import { mount } from 'enzyme';
import Square from './Square';

describe('square', () => {
    it("renders with green background when it is a winning square", () => {
        // arrange

       const squareComponent = mount( 
        <Square     
            value={'X'}
            index={0}
            onClick = {()=> {}}
            winningSquare={[0, 1, 2]}
    />)

        // act
        // assert
        expect(squareComponent.find('Square').length).toBe(1);
        expect(squareComponent.find('button').prop('className')).toBe('winningSquares');
    }) 

    it("renders with a white background when it is not a winning square", () => {
        // arrange

       const squareComponent = mount( 
        <Square     
            value={'X'}
            index={0}
            onClick = {()=> {}}
            winningSquare={[]}
    />)

        // act
        // assert
        expect(squareComponent.find('Square').length).toBe(1);
        expect(squareComponent.find('button').prop('className')).toBe('square');
    }) 
});