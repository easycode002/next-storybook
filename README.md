yarn list --pattern playwright
yarn remove playwright

<details>

<summary>How to Setup test runner</summary>

##### Setup Test runner

```bash
yarn add --dev @storybook/test-runner
```

##### Update your package.json scripts and enable the test runner.

```bash
{
  "scripts": {
    ....
    "test-storybook": "test-storybook",
    ....
  }
}
```

```bash
yarn storybook
# and
yarn test-storybook
# or
yarn test-storybook --watchAll
```

</details>

<details>

<details>How to setup coverage</details>

##### Set up the coverage addon

```bash
yarn add --dev @storybook/addon-coverage
```

##### Update your Storybook configuration (in .storybook/main.js|ts) to include the coverage addon.

```bash
import type { StorybookConfig } from '@storybook/your-framework';

const config: StorybookConfig = {
  stories: [],
  addons: [
    // Other Storybook addons
    '@storybook/addon-coverage', //👈 Registers the addon
  ],
};

export default config;
```

> [!NOTE]
> To run Coverage in storybook we have two step:
>
> - Step1 : Run storybook
> - Step2 : Run Coverage
>   Like command at above.

##### Start your Storybook with

```bash
yarn storybook
```

##### Finally, open a new terminal window and run the test-runner with

```bash
yarn test-storybook --coverage
```

</details>

Mocking network request

```bash
yarn add msw msw-storybook-addon --save-dev
```

library, which is used for animations
```bash
yarn add framer-motion
```

