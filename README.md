# Netflix-Style Portfolio

A modern, interactive portfolio website built with Next.js, featuring a Netflix-inspired design with personalized content for different viewer personas (recruiters, clients, collaborators).

## Features

- 🎬 Netflix-style interface with smooth animations
- 👥 Multiple viewer personas (Recruiter, Client, Collaborator)
- 🎵 Interactive audio elements
- 📱 Fully responsive design
- 🎨 Modern UI with Tailwind CSS and shadcn/ui
- ⚡ Built with Next.js 15 and React 19

## Live Demo

Visit the live site: [https://bharghavakumarpurru.github.io/Portfolio.github.io](https://bharghavakumarpurru.github.io/Portfolio.github.io)

## Local Development

1. Clone the repository:
\`\`\`bash
git clone https://github.com/BharghavaKumarPurru/Portfolio.github.io.git
cd Portfolio.github.io
\`\`\`

2. Install dependencies:
\`\`\`bash
npm install
\`\`\`

3. Run the development server:
\`\`\`bash
npm run dev
\`\`\`

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deployment

This project is automatically deployed to GitHub Pages using GitHub Actions. Every push to the `main` branch triggers a new deployment.

### Manual Deployment

To deploy manually:

\`\`\`bash
npm run build
npm run deploy
\`\`\`

## Project Structure

\`\`\`
├── app/                    # Next.js app directory
├── components/            # Reusable React components
├── lib/                   # Utility functions and configurations
├── public/               # Static assets
├── styles/               # Global styles
└── .github/workflows/    # GitHub Actions workflows
\`\`\`

## Technologies Used

- **Framework**: Next.js 15
- **Styling**: Tailwind CSS, shadcn/ui
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Deployment**: GitHub Pages
- **CI/CD**: GitHub Actions

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
