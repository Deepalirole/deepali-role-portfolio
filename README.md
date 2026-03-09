# AI/ML Engineer Portfolio Website

A modern, responsive portfolio website built with React (Vite) and Tailwind CSS for an AI/ML Engineer.
https://deepali-role.vercel.app/
## 🚀 Features

- **Modern Dark Theme**: Professional design optimized for AI/ML portfolios
- **Responsive Design**: Fully responsive on mobile, tablet, and desktop
- **Smooth Scrolling**: Seamless navigation between sections
- **Interactive Components**: Hover effects and animations
- **Clean Code**: Well-structured, maintainable React components
- **SEO Optimized**: Proper meta tags and semantic HTML

## 🛠️ Tech Stack

- **Frontend**: React 18 (functional components)
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Icons**: React Icons
- **Deployment**: Ready for Vercel, Netlify, or GitHub Pages

## 📁 Project Structure

```
src/
├── components/
│   ├── Hero.jsx          # Hero section with name, title, and CTAs
│   ├── About.jsx         # Professional introduction
│   ├── TechStack.jsx     # Skills and technologies
│   ├── Projects.jsx      # Project showcase
│   ├── Experience.jsx    # Work experience
│   ├── Metrics.jsx       # ML statistics and achievements
│   ├── Contact.jsx       # Contact information and form
│   ├── Navbar.jsx        # Navigation with smooth scrolling
│   └── Footer.jsx        # Footer with links
├── assets/
│   └── images/           # Image assets
├── App.jsx               # Main app component
├── main.jsx              # React entry point
└── index.css             # Global styles and Tailwind imports
```

## 🎨 Sections

### 1. Hero Section
- Name and professional title
- Short description
- Call-to-action buttons
- Social media links

### 2. About Section
- Professional introduction
- Core focus areas
- Personal background

### 3. Tech Stack Section
- Skills displayed as modern cards
- Progress bars for proficiency levels
- Categorized technologies

### 4. Projects Section
- Project cards with descriptions
- Tech stack tags
- GitHub links
- Featured project highlights

### 5. Experience Section
- Internship details
- Key achievements
- Company information

### 6. Metrics Section
- Statistics dashboard
- Technical proficiency progress
- Achievements and certifications

### 7. Contact Section
- Contact information
- Contact form
- Social media links

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd ai-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Building for Production

```bash
npm run build
```

The build files will be in the `dist` directory.

## 🎯 Customization

### Editing Content

All content is easily editable in the respective component files:

- **Personal Info**: Edit `Hero.jsx` and `About.jsx`
- **Skills**: Update `TechStack.jsx`
- **Projects**: Modify the projects array in `Projects.jsx`
- **Experience**: Update `Experience.jsx`
- **Contact**: Change contact details in `Contact.jsx`

### Styling

The theme uses Tailwind CSS with a dark color scheme. You can customize:

- **Colors**: Modify `tailwind.config.js`
- **Components**: Update component-specific styles
- **Global Styles**: Edit `src/index.css`

### Adding New Sections

1. Create a new component in `src/components/`
2. Import and add it to `App.jsx`
3. Add navigation link in `Navbar.jsx`

## 📱 Responsive Design

- **Mobile**: 320px and up
- **Tablet**: 768px and up
- **Desktop**: 1024px and up
- **Large Desktop**: 1280px and up

## 🎨 Design Features

- **Dark Theme**: Professional gray-based color scheme
- **Gradient Accents**: Blue-to-purple gradients for highlights
- **Card Hover Effects**: Smooth scaling and shadow transitions
- **Smooth Scrolling**: JavaScript-powered navigation
- **Typography**: Clean, readable font hierarchy

## 🚀 Deployment

### Vercel
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Netlify
1. Build the project: `npm run build`
2. Upload the `dist` folder to Netlify

### GitHub Pages
1. Build the project
2. Deploy the `dist` folder to GitHub Pages

## 📧 Contact

For any questions or collaboration opportunities:

- **Email**: deepalirole2004@gmail.com
- **GitHub**: https://github.com/deepalirole
- **LinkedIn**: https://linkedin.com/in/deepalirole

## 📄 License

This project is open source and available under the MIT License.

---

**Built with ❤️ using React, Vite, and Tailwind CSS**
