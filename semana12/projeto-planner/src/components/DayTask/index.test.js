import React from 'react';
import renderer from 'react-test-renderer';
import { DayTask } from './index'

it('Snapshot DayTask', ()=> {
    const tree = renderer
    .create(<DayTask></DayTask>)
    .toJSON();
    expect(tree).toMatchSnapshot()
})