import React from 'react';
import renderer from 'react-test-renderer';
import { LoginPage } from './index'

it('Snapshot LoginPage', ()=> {
    const tree = renderer
    .create(<LoginPage></LoginPage>)
    .toJSON();
    expect(tree).toMatchSnapshot()
})