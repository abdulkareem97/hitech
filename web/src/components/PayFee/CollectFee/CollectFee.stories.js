// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```jsx
// export const generated = (args) => {
//   return <CollectFee {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import CollectFee from './CollectFee'

export const generated = () => {
  return <CollectFee />
}

export default {
  title: 'Components/CollectFee',
  component: CollectFee,
}
