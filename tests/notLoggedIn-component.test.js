/* eslint-disable no-undef */
import { shallowMount } from '@vue/test-utils';
import NotLoggedIn from '../src/components/shared/NotLoggedInModal'; // name of your Vue component

let wrapper;

beforeEach(() => {
    wrapper = shallowMount(NotLoggedIn);
});

afterEach(() => {
    wrapper.destroy();
});

describe('Footer Component', () => {
    test('is a Vue instance', () => {
        expect(wrapper.isVueInstance).toBeTruthy();
    });
});