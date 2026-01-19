# Add some footer quotes of your own!

Thank you for your interest in contributing to `footer-quotes`! We welcome contributions that add new quotes, improve the codebase, or enhance documentation.

## How to Contribute

### Adding New Quotes

We're always looking for new culturally-relevant quotes! To add quotes:

1. **Ensure your quotes are relevant and appropriate**: To add quotes to this project, ensure that they...
    1. Are kind, funny and safe for work: consider all of the users who may use this package on their personal, product, or internal tool websites.
    2. Are not already there: if a quote you plan to add (or a very similar variation of it) is already there, your contribution won't be accepted.
    3. Are correctly categorised: follow the comments in the [quotes.ts](src/quotes.ts) file to find the right spot for your quote. That way, future contributors can find quotes much easier. If this is a new category, start with a new comment at the bottom of the [quotes.ts](src/quotes.ts) file!
2. **Edit the quotes file**: Locate [quotes.ts](src/quotes.ts) in the folder called src.
3. **Add your quotes**: Append your quotes to the array
4. **Follow the style guidelines**:
   - Use **double quotes** (`"`) for all string literals
   - Start quotes with a **lowercase letter**

Example:

```typescript
export default [
    // Severance, TV Series
  "the work is mysterious and important",
    // Formula 1, Sport
  "box box box",
    // Harry Potter, Book Saga
  "it's pronounced leviOsa, not levioSA",
];
```

### Development Process

#### 1. Fork and Clone

Begin by [forking this repository to your GitHub](https://github.com/Institute-Alterna/talent/fork). Then, on your command line:

```bash
git clone https://github.com/your-username/footer-quotes.git
cd footer-quotes
npm install
```

#### 2. Create a Branch

Create a feature branch for your changes:

```bash
git checkout -b give-your-branch-a-cool-name
```

#### 3. Make Your Changes

- **Code Style**: We use Prettier and ESLint. Format and lint before committing:

  ```bash
  npm run format
  npm run lint
  ```

- **Testing**: Run tests to ensure everything works:

  ```bash
  npm test
  ```

- **Build**: Verify the package builds successfully:
  ```bash
  npm run build
  ```

#### 4. Commit Your Changes

We use [Conventional Commits](https://www.conventionalcommits.org/) for clear version history:

- `feat: add new severance quotes`
- `fix: correct typo in existing quote`
- `docs: update installation instructions`
- `chore: update dependencies`

#### 5. Submit a Pull Request

1. Push your branch to your fork
2. Open a Pull Request against the `main` branch of **THIS repository**.
3. Fill out the PR template completely
4. Ensure all CI checks pass
5. Wait for review from maintainers

Please consider that all contributions will be **squashed and merged**, which will gather your changes and place them on a single commit. Feel free to add as many commits to your branch as you want.

### Code Quality Standards

All contributions must:

- ✅ Pass ESLint checks (`npm run lint`)
- ✅ Pass all tests (`npm test`)
- ✅ Build successfully (`npm run build`)
- ✅ Follow the code style (with Prettier)
- ✅ Include tests if new functionality is written
- ✅ Update documentation if needed

### Getting Help

Review the [README.md](README.md) for basic usage and check existing issues and PRs to see if someone else is running into the same problem as you.

Found a bug or have a suggestion?

1. Check [existing issues](https://github.com/institute-alterna/footer-quotes/issues)
2. If it's new, create an issue with:
   - Clear description
   - Steps to reproduce (for bugs)
   - Expected vs actual behaviour
   - Your environment (Node version, OS)