# footer-quotes

> A TypeScript library to get random, culturally-relevant quotes into footers or anywhere else as easter eggs.

## Installation

```bash
npm install @institute-alterna/footer-quotes
```

## Usage

**TypeScript**

```typescript
import { footerRandomText } from "@institute-alterna/footer-quotes";

// Returns a random string like "the work is mysterious and important"
const quote = footerRandomText();

console.log(`© ${new Date().getFullYear()} Your Org Name | ${quote}`);
```

## Features

- **Standardized Content**: Ensure every internal tool pulls from the same "Master List."
- **TypeScript Support**: Fully typed out-of-the-box.
- **Lightweight**: Zero dependencies.

## Development

To contribute new quotes or modify the code:

1. **Clone the repo**: `git clone https://github.com/institute-alterna/footer-quotes.git`
2. **Install dependencies**: `npm install`
3. **Run tests**: `npm test`
4. **Build the project**: `npm run build`

## Contributing

We'd love more random quotes! Please read our [CONTRIBUTING.md](CONTRIBUTING.md) for details on:

- How to add new quotes
- Code style guidelines (double quotes, lowercase quotes)
- Development workflow
- Pull request process

## License

This project has the [MIT License](LICENSE).
