// YourComponent.stories.js

import React from 'react';

import  FormSignUp  from './FormSignUp';
import {renderOptionsData as data} from '../utils';

import useForm from './useForm';
import validate from './validateInfo';

//👇 This default export determines where your story goes in the story list
export default {
  title: 'FormSignUp',
  component: FormSignUp,
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => <FormSignUp {...args} />;

export const SecondStory = Template.bind({});

SecondStory.args = {
  /*👇 The args you need here will depend on your component */
  data
};