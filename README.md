# My Lead Agency

A modern lead generation agency website built with Next.js.

## 🏗️ Project Structure

```
my-lead-agency/
├── components/       # Reusable UI components
│   ├── Header.js
│   ├── Footer.js
│   └── LeadForm.js
├── pages/            # Next.js pages
│   ├── api/          # API routes for backend features
│   │   ├── submit-lead.js    # Lead submission endpoint
│   │   ├── send-email.js     # Email sending endpoint
│   │   └── track-call.js     # Call tracking endpoint
│   ├── [...city]/    # Multi-city dynamic pages
│   │   └── index.js
│   ├── _app.js
│   ├── _document.js
│   └── index.js
├── public/           # Static assets like images and logos
├── styles/           # Global CSS/SCSS
│   ├── globals.css
│   ├── Home.module.css
│   └── City.module.css
├── utils/            # Utility functions
│   ├── emailService.js    # Email service integration
│   └── callTracking.js    # Call tracking utilities
├── package.json      # Dependencies
└── README.md         # Documentation
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/parkerbroemmer/Lead-Gen-agency.git
cd Lead-Gen-agency
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables (create `.env.local`):
```bash
# Email Configuration
DEFAULT_FROM_EMAIL=noreply@myleadagency.com
ADMIN_EMAIL=admin@myleadagency.com

# Email Service (e.g., SendGrid)
# SENDGRID_API_KEY=your_sendgrid_api_key

# Call Tracking Service
# CALL_TRACKING_API_KEY=your_call_tracking_api_key
```

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📦 Features

### Multi-City Landing Pages
- Dynamic routing for city-specific pages
- URL structure: `/[city-name]` or `/[state]/[city-name]`
- Automatic city name formatting and display
- Example: `/new-york`, `/california/los-angeles`

### Lead Management
- Lead submission form component
- API endpoint for processing leads
- Email notifications for new leads
- Form validation and error handling

### Email Integration
- Utility functions for sending emails
- Welcome email automation
- Admin notifications
- Easy integration with email service providers (SendGrid, AWS SES, etc.)

### Call Tracking
- Call tracking utilities
- Dynamic phone number assignment
- Call analytics and reporting
- Phone number formatting

### Reusable Components
- **Header**: Navigation component with logo and menu
- **Footer**: Footer with links and contact information
- **LeadForm**: Contact form with validation

## 🛠️ Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

### Adding New Cities

To add support for new cities, no code changes are needed! The dynamic routing in `pages/[...city]/index.js` automatically handles all city URLs.

Example URLs:
- `/miami` - Single-level city page
- `/florida/miami` - State and city page
- `/texas/dallas/downtown` - Multi-level geographic targeting

### Customizing Styles

- Global styles: Edit `styles/globals.css`
- Component styles: Edit corresponding `.module.css` files
- Add new style modules for new components

### API Routes

API routes are located in `pages/api/`:

- **POST /api/submit-lead** - Submit a new lead
  ```json
  {
    "name": "John Doe",
    "email": "john@example.com",
    "phone": "555-123-4567",
    "city": "New York",
    "message": "Interested in your services"
  }
  ```

- **POST /api/send-email** - Send an email
  ```json
  {
    "to": "recipient@example.com",
    "subject": "Subject",
    "body": "Email body"
  }
  ```

- **POST /api/track-call** - Track a phone call
  ```json
  {
    "callId": "call_123",
    "phoneNumber": "555-123-4567",
    "duration": 180,
    "city": "New York"
  }
  ```

## 🔧 Configuration

### Email Service Integration

To integrate with an email service provider:

1. Install the provider's SDK:
```bash
npm install @sendgrid/mail
```

2. Update `utils/emailService.js` with your provider's code
3. Add API keys to `.env.local`

### Call Tracking Integration

To integrate with a call tracking service:

1. Install the provider's SDK
2. Update `utils/callTracking.js` with your provider's code
3. Add API keys to `.env.local`

## 📝 Environment Variables

Create a `.env.local` file in the root directory:

```bash
# Email
DEFAULT_FROM_EMAIL=noreply@myleadagency.com
ADMIN_EMAIL=admin@myleadagency.com

# Email Service Provider (example: SendGrid)
SENDGRID_API_KEY=your_api_key_here

# Call Tracking Service
CALL_TRACKING_API_KEY=your_api_key_here
```

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project in Vercel
3. Configure environment variables
4. Deploy

### Other Platforms

The application can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Heroku
- Digital Ocean

## 📄 License

MIT License - feel free to use this project for your lead generation business.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📧 Contact

For questions or support, contact us at info@myleadagency.com