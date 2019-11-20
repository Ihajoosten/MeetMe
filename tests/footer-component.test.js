/* eslint-disable no-undef */
import { shallowMount } from '@vue/test-utils';
import Footer from '../src/components/shared/Footer'; // name of your Vue component

let wrapper;

beforeEach(() => {
    wrapper = shallowMount(Footer);
});

afterEach(() => {
    wrapper.destroy();
});

describe('Footer Component', () => {
    test('is a Vue instance', () => {
        expect(wrapper.isVueInstance).toBeTruthy();
    });
});