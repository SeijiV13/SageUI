# Contributing to SageUI

Thank you for considering contributing to SageUI! We welcome contributions from everyone.

## Development Setup

1. Fork and clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```

## Project Structure

```
src/
├── components/          # Component definitions
│   ├── buttons/
│   ├── cards/
│   ├── alerts/
│   └── ...
├── styles/             # CSS files
├── utils/              # Utility functions
└── plugin.js          # Tailwind CSS plugin

demo/                   # Demo/development environment
docs/                   # Documentation (VitePress)
```

## Creating Components

1. Create a new directory under `src/components/`
2. Add component classes and interfaces
3. Export from the main index file
4. Update the Tailwind plugin if needed
5. Add examples to the demo

## Component Guidelines

- Follow the existing naming conventions (kebab-case for CSS classes)
- Use the established color palette (sage, forest, emerald)
- Ensure accessibility (ARIA attributes, keyboard navigation)
- Write TypeScript interfaces for component props
- Include size and variant options where appropriate

## Color Palette

- **Sage (Primary)**: #22c55e - Main brand color
- **Forest (Secondary)**: #84cc16 - Secondary actions
- **Emerald (Accent)**: #10b981 - Highlights and accents
- **Status Colors**: Success, Warning, Error, Info

## Pull Request Process

1. Create a feature branch from `main`
2. Make your changes
3. Test your changes in the demo
4. Update documentation if needed
5. Submit a pull request with:
   - Clear description of changes
   - Screenshots if UI changes
   - Test instructions

## Code Style

- Use TypeScript for component logic
- Follow existing CSS class naming patterns
- Use Tailwind utilities in the plugin
- Keep components modular and reusable
- Write clear, descriptive commit messages

## Testing

Run the demo to test your changes:
```bash
npm run dev
```

Open `http://localhost:3000` to see your components in action.

## Documentation

Update the documentation in the `docs/` directory when:
- Adding new components
- Changing component APIs
- Adding new features

## Questions?

Feel free to open an issue for any questions or discussions about contributing.

Thank you for helping make SageUI better! 🌿
