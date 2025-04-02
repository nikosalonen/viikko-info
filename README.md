# Mikä viikko nyt on?

A simple, beautiful web application that shows the current week number. Built with Vue 3, TypeScript, and Vite.

## Features

- 🎨 Beautiful animated sky background with clouds and sun
- ♿ Accessibility features including ARIA labels and reduced motion support
- ⚡ Fast and lightweight
- 🔒 Security best practices
- 📱 PWA ready

## Tech Stack

- Vue 3
- TypeScript
- Vite
- Luxon (for date handling)
- CSS3 (with animations and variables)

## Prerequisites

- Node.js (v16 or higher)
- npm or yarn

## Getting Started

1. Clone the repository:

```bash
git clone https://github.com/yourusername/viikko-info.git
cd viikko-info
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Start the development server:

```bash
npm run dev
# or
yarn dev
```

4. Build for production:

```bash
npm run build
# or
yarn build
```

## Project Structure

```
viikko-info/
├── src/
│   ├── assets/        # Static assets
│   ├── components/    # Vue components
│   ├── composables/   # Reusable composables
│   └── App.vue        # Root component
├── public/            # Public assets
└── index.html         # Entry HTML file
```

## Features in Detail

### Accessibility

- ARIA labels for all interactive elements
- Support for reduced motion preferences
- Semantic HTML structure
- High contrast text

### Performance

- Optimized animations
- CSS variables for maintainability
- Efficient date calculations
- Responsive design

### Security

- Content Security Policy
- Strict referrer policy
- No external dependencies except for essential ones

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [Vue.js](https://vuejs.org/)
- [Vite](https://vitejs.dev/)
- [Luxon](https://moment.github.io/luxon/)
