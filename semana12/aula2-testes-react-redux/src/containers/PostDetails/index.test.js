import React from 'react';
import renderer from 'react-test-renderer';
import { PostsDetails } from './index'

it('Snapshot PostsDetails', ()=> {
    const tree = renderer
    .create(<PostsDetails postsDetails={{}}></PostsDetails>)
    .toJSON();
    expect(tree).toMatchSnapshot()
})