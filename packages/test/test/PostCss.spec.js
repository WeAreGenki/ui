/** @jest-environment jsdom */

import { shallow } from '@vue/test-utils';
import PostCss from './fixtures/PostCss';

describe('processes .vue file with PostCSS style', () => {
  it('does not error on pcss/postcss', () => {
    const wrapper = shallow(PostCss);
    expect(wrapper.classes()).toContain('testPcss');
  });
});
