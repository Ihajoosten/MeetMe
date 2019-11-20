/* eslint-disable no-undef */
import { shallowMount } from '@vue/test-utils';
import HomeTop from '../src/components/shared/HomeTop'; // name of your Vue component

let wrapper;

beforeEach(() => {
    wrapper = shallowMount(HomeTop);
});

afterEach(() => {
    wrapper.destroy();
});

describe('Footer Component', () => {
    test('is a Vue instance', () => {
        expect(wrapper.isVueInstance).toBeTruthy();
    });
});