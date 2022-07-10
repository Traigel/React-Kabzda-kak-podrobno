import {AccordionReducer, StateType} from "./AccordionReducer";

test('collapsed should be true', () => {
    //data
    const state: StateType = {
        collapsed: false
    }

    //action
    const newState = AccordionReducer(state, {type: 'TOGGLE-COLLAPSED'})

    //expection
    expect(newState.collapsed). toBe(true);
})

test('collapsed should be false', () => {
    const state: StateType = {
        collapsed: true
    }

    const newState = AccordionReducer(state, {type: 'TOGGLE-COLLAPSED'})

    expect(newState.collapsed). toBe(false);
})

test('collapsed should be state', () => {
    const state: StateType = {
        collapsed: false
    }

    const newState = AccordionReducer(state, {type: 'FAKETYPE'})

    expect(newState.collapsed). toBe(false);
})