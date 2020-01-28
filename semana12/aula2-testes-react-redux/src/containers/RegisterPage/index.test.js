import React from 'react';
import renderer from 'react-test-renderer';
import { RegisterPage } from './index'

it('Snapshot RegisterPage', ()=> {
    const tree = renderer
    .create(<RegisterPage></RegisterPage>)
    .toJSON();
    expect(tree).toMatchSnapshot()
})