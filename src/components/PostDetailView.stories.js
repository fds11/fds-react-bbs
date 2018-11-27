import React from 'react';

import { storiesOf } from '@storybook/react';

import PostDetailView from './PostDetailView';

storiesOf('PostDetailView', module)
  .add('default', () => <PostDetailView />)
  .add('with content', () => <PostDetailView title="제목" body="내용" />)
  .add('작성자로 로그인 한 경우', () => (
    <PostDetailView title="제목" body="내용" userId={0} />
  ));
