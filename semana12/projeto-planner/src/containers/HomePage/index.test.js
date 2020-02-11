import React from 'react';
import renderer from 'react-test-renderer';
import { HomePage } from './index'

it('Snapshot HomePage', ()=> {
    const tree = renderer
    .create(<HomePage tasks={[]} getAllTasks={()=> {}}></HomePage>)
    .toJSON();
    expect(tree).toMatchSnapshot()
})