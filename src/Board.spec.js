import React from 'react';
import { mount } from 'enzyme';
import Board from './Board';


describe('board', () => {
    it("board renders the board successfully", () => {
        // arrange
        const current = {squares: Array(9).fill(null)};

       const boardComponent = mount( 
       <Board 
        squares={current.squares}
        onClick={() => {}}
        winningSquare={[]}
        />)
        // act
        // assert
        expect(boardComponent.find('Board').length).toBe(1);
        expect(boardComponent.find('Square').length).toBe(9);
    }) 

    it("renders X on a square", () => {
        // arrange
        const current = {squares: [null, null, null, 'X', null, null, null, null, null,]};

       const boardComponent = mount( 
       <Board 
        squares={current.squares}
        onClick={() => {}}
        winningSquare={[]}
        />)
        // act
        // assert
        expect(boardComponent.find('Square').at(3).text()).toBe('X');
    }) 
});