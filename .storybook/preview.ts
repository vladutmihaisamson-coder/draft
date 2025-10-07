import type { Preview } from '@storybook/react-vite'
import '../src/styles/tokens.scss'
import '../src/styles/buttons.css'
import '../src/styles/fields.css'
import './storybook-overrides.css'

// Import Google Fonts
import '@fontsource/inter'
import '@fontsource/jetbrains-mono'

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: 'todo'
    }
  },
};

export default preview;