// YourComponent.stories.js

import React from 'react';

import  FormSuccess  from './FormSuccess';

//👇 This default export determines where your story goes in the story list
export default {
  title: 'FormSuccess',
  component: FormSuccess,
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => <FormSuccess {...args} />;

export const ThirdStory = Template.bind({});

ThirdStory.args = {
  /*👇 The args you need here will depend on your component */
  
};