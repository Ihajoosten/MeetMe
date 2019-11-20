/* eslint-disable no-undef */
import { shallowMount } from '@vue/test-utils';
import Spinner from '../src/components/shared/Spinner'; // name of your Vue component

let wrapper;

beforeEach(() => {
    wrapper = shallowMount(Spinner);
});

afterEach(() => {
    wrapper.destroy();
});

describe('Footer Component', () => {
    test('is a Vue instance', () => {
        expect(wrapper.isVueInstance).toBeTruthy();
    });
});