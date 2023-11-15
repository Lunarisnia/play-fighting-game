import {makeProject} from '@motion-canvas/core';

import example from './scenes/example?scene';
import slideOne from './scenes/slideOne?scene';
import slideTwo from './scenes/slideTwo?scene';
import slideThree from './scenes/slideThree?scene';

export default makeProject({
  scenes: [example, slideOne, slideTwo, slideThree],
});
