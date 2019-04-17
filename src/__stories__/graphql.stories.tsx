
import React from 'react';
import { getComponent } from '@bluebase/core';
import storiesOf from '@bluebase/storybook-addon';

const GraphqlQuery = getComponent('Query');

storiesOf('BlueBase', module)
	.add('Query Testing', () => (
       <GraphqlQuery />
         
	));