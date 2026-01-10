# Storybook Tools

A collection of tools and helpers for Storybook-related projects.

## Packages

This monorepo contains the following packages:

| Package | Description | Version |
|---------|-------------|---------|
| [@glrodasz/storybook-tools-styles](./packages/storybook-tools-styles) | CSS module utilities and class helpers | [![npm](https://img.shields.io/npm/v/@glrodasz/storybook-tools-styles)](https://www.npmjs.com/package/@glrodasz/storybook-tools-styles) |
| [@glrodasz/storybook-tools-helpers](./packages/storybook-tools-helpers) | Storybook template and arg type helpers | [![npm](https://img.shields.io/npm/v/@glrodasz/storybook-tools-helpers)](https://www.npmjs.com/package/@glrodasz/storybook-tools-helpers) |

## Requirements

- Node.js >= 22.0.0
- Yarn 1.x

## Getting Started

### Installation

```bash
# Clone the repository
git clone https://github.com/glrodasz/storybook-tools.git
cd storybook-tools

# Install dependencies
yarn install
```

### Development

```bash
# Build all packages
yarn build

# Run tests
yarn test

# Run linting
yarn lint

# Fix linting issues
yarn lint:fix

# Format code
yarn format

# Check formatting
yarn format:check
```

## Project Structure

```
storybook-tools/
├── .github/workflows/     # GitHub Actions (CI & Release)
├── .husky/                # Git hooks
├── packages/
│   ├── storybook-tools-styles/    # CSS utilities package
│   └── storybook-tools-helpers/   # Storybook helpers package
├── turbo.json             # Turborepo configuration
├── .releaserc.json        # Semantic release configuration
└── package.json           # Root package.json
```

## Contributing

### Commit Convention

This project uses [Conventional Commits](https://www.conventionalcommits.org/). Please use the following format for commit messages:

```
type(scope): description

# Examples
feat: add new helper function
fix(styles): correct CSS module resolution
docs: update README
chore: update dependencies
```

#### Commit Types

| Type | Description | Version Bump |
|------|-------------|--------------|
| `feat` | New feature | Minor |
| `fix` | Bug fix | Patch |
| `docs` | Documentation only | None |
| `style` | Code style changes | None |
| `refactor` | Code refactoring | None |
| `perf` | Performance improvements | Patch |
| `test` | Adding tests | None |
| `chore` | Maintenance tasks | None |
| `feat!` or `BREAKING CHANGE` | Breaking change | Major |

### Making Commits

Use Commitizen for interactive commits:

```bash
yarn commit
```

Or commit directly following the conventional commit format:

```bash
git commit -m "feat: add new feature"
```

### Pre-commit Hooks

The following checks run automatically on commit:

- **lint-staged**: Runs ESLint and Prettier on staged files
- **commitlint**: Validates commit message format

## Releasing

Releases are automated via [semantic-release](https://semantic-release.gitbook.io/) and GitHub Actions.

### How it works

1. Push/merge to `master` or `main` branch
2. CI runs lint, tests, and build
3. semantic-release analyzes commits since last release
4. If releasable commits exist:
   - Version is bumped based on commit types
   - CHANGELOG.md is updated
   - Packages are published to npm
   - GitHub release is created

### Manual Release (if needed)

```bash
yarn release
```

> **Note**: Requires `GITHUB_TOKEN` and `NPM_TOKEN` environment variables.

## Tech Stack

- **Build**: [tsup](https://tsup.egoist.dev/)
- **Testing**: [Vitest](https://vitest.dev/)
- **Linting**: [ESLint](https://eslint.org/) with TypeScript support
- **Formatting**: [Prettier](https://prettier.io/)
- **Monorepo**: [Yarn Workspaces](https://classic.yarnpkg.com/en/docs/workspaces/) + [Turborepo](https://turbo.build/)
- **Commits**: [Commitizen](https://commitizen-tools.github.io/commitizen/) + [Commitlint](https://commitlint.js.org/)
- **Releases**: [semantic-release](https://semantic-release.gitbook.io/) + [multi-semantic-release](https://github.com/dhoulb/multi-semantic-release)
- **CI/CD**: [GitHub Actions](https://github.com/features/actions)

## License

MIT