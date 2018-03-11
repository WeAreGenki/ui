/** @jest-environment jsdom */

import { mount } from '@vue/test-utils';
import NoScript from './fixtures/NoScript';

describe('NoScript', () => {
  it('renders', () => {
    const wrapper = mount(NoScript);
    expect(wrapper.contains('footer')); // eslint-disable-line jest/valid-expect
  });
});
