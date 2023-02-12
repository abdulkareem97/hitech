// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```jsx
// export const generated = (args) => {
//   return <GetDetail {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import GetDetail from './GetDetail'

export const generated = () => {
  return <GetDetail />
}

export default {
  title: 'Components/GetDetail',
  component: GetDetail,
}
