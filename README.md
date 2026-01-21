# Muhammad Abdullah - Portfolio

[![Portfolio](https://img.shields.io/badge/Portfolio-Live-success?style=for-the-badge)](https://abdullahfalak007.vercel.app/)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-blue?style=for-the-badge&logo=linkedin)](https://linkedin.com/in/abdullahfalak007)
[![GitHub](https://img.shields.io/badge/GitHub-Follow-black?style=for-the-badge&logo=github)](https://github.com/Abdullahfalak007)

> **Full Stack Developer | Associate Software Engineer**  
> Passionate Full Stack Developer with MERN stack expertise and hands-on experience building scalable web/mobile apps and AI-powered solutions.

## 🚀 Live Demo

Visit my portfolio: **[abdullahfalak007.vercel.app](https://abdullahfalak007.vercel.app/)**

## 👨‍💻 About Me

I'm a Full Stack Developer specializing in building exceptional digital experiences. Currently working as an Associate Software Engineer at StrategistsHub, where I develop scalable web applications with cutting-edge technologies.

### 💼 Current Role

- **Associate Software Engineer** at StrategistsHub (Jul 2025 - Present)
- Developing enterprise solutions with Next.js, Node.js, PostgreSQL, and MongoDB
- Implementing data visualizations (D3.js), video conferencing (Agora), Stripe payment integrations
- Building AI voice/chat assistants using ElevenLabs and Groq for interactive applications

## 🛠️ Tech Stack

### Frontend

- **Frameworks:** React.js, Next.js
- **Languages:** JavaScript (ES6+), TypeScript
- **Styling:** Tailwind CSS, Material UI, Daisy UI, Bootstrap, CSS3, HTML5
- **State Management:** Redux Toolkit
- **Data Visualization:** D3.js

### Backend

- **Runtime & Frameworks:** Node.js, Express.js, FastAPI
- **APIs:** RESTful APIs, Webhooks
- **Authentication:** JWT, OAuth, Google Login
- **Integrations:** Stripe (Payments), Agora (Video Streaming)
- **Languages:** Python

### Databases

- MongoDB
- PostgreSQL
- Firebase

### AI & Tools

- **AI Technologies:** ElevenLabs (AI Voice), Groq AI, AI Assistants, Chatbots
- **Version Control:** Git, GitHub, GitLab, Bitbucket

---

## 🤖 AI Assistant Integration

This portfolio features an intelligent AI assistant with **Chat** and **Voice** modes!

### 🎯 Features

✅ **Dual Mode Interface**

- Chat Mode: Text-based conversation with rich formatting
- Voice Mode: Real-time speech-to-speech interaction

✅ **Smart Technology Stack**

- ElevenLabs Conversational AI (primary)
- Groq AI with Llama 3.3 70B (fallback)
- Web Speech API for voice input (unlimited & free)
- Custom knowledge base about skills and services

✅ **Rich Text Formatting**

- **Bold** and _italic_ text
- `Inline code` formatting
- Clickable links with icons
- Bullet and numbered lists
- Proper line spacing

✅ **Professional UI**

- Responsive design
- Smooth animations with Framer Motion
- Mode toggle (Chat/Voice)
- Color-coded status indicators
- Floating assistant button

### 🔑 Setup Instructions

#### 1. Environment Variables

Create a `.env` file in the project root:

```env
# Required - Groq AI (Free tier: 30 req/min, 6000/day)
GROQ_API_KEY=your_groq_api_key_here

# Optional - ElevenLabs (Free tier: 10k characters/month)
ELEVENLABS_API_KEY=your_elevenlabs_api_key_here
ELEVENLABS_AGENT_ID=your_agent_id_here
```

#### 2. Get API Keys

**Groq API Key** (Required - FREE):

1. Visit: https://console.groq.com/
2. Sign up with Google/GitHub
3. Go to "API Keys" → "Create API Key"
4. Copy and add to `.env`

**ElevenLabs API Key** (Optional - for enhanced voice):

1. Visit: https://elevenlabs.io/
2. Sign up for free account
3. Go to Profile → "API Key"
4. Copy and add to `.env`

#### 3. Configure ElevenLabs Agent (Optional)

If using ElevenLabs, configure your agent with:

**System Prompt:**

```
You are Abdullah Falak's AI assistant - a friendly, conversational helper who represents him professionally.

Key information:
- Full-stack developer with 2+ years experience
- Specializes in MERN stack (MongoDB, Express, React, Node.js)
- Currently at StrategistsHub as Associate Software Engineer
- Expert in Next.js, React, AI integration, video conferencing (Agora), payments (Stripe)
- Services: Full-stack web development, AI integration, video conferencing, payment gateways, mobile apps
- Contact: Upwork, Fiverr, portfolio contact form, LinkedIn

Keep responses conversational, friendly, and concise (2-4 sentences).
```

**Voice Selection:**

- Recommended: **Adam** (professional male) or **Rachel** (professional female)

### 🧪 Testing the Assistant

1. Start development server:

```bash
npm run dev
```

2. Click the floating AI assistant button (bottom-right)

3. Try Chat Mode:

   - "What services do you offer?"
   - "Tell me about your experience"
   - "How can I hire you?"

4. Try Voice Mode:
   - Click the Voice toggle
   - Click "Tap to Speak"
   - Ask questions naturally
   - Listen to AI responses

### 📁 AI Assistant Files

**Components:**

- `src/components/AIAssistant.tsx` - Main assistant interface
- `src/components/AIAssistantButton.tsx` - Floating button
- `src/components/FormattedMessage.tsx` - Rich text formatting

**API Routes:**

- `src/app/api/ai-chat/route.ts` - Groq AI endpoint
- `src/app/api/elevenlabs-conversation/route.ts` - ElevenLabs endpoint
- `src/app/api/elevenlabs-tts/route.ts` - Text-to-speech endpoint
- `src/app/api/text-to-speech/route.ts` - Fallback TTS

**Configuration:**

- `src/constants/knowledgeBase.ts` - Custom knowledge about Abdullah

### 💰 Cost Breakdown

**Completely FREE Option:**

- Groq AI: 30 requests/minute (FREE)
- Web Speech API: Unlimited (FREE)
- **Total: $0/month** ✅

**With ElevenLabs (Optional):**

- ElevenLabs: 10,000 characters/month (FREE)
- Groq AI: Fallback (FREE)
- **Total: $0/month** ✅

Perfect for portfolio use!

### 🚀 Deployment to Vercel

1. Add environment variables in Vercel:

   - Project Settings → Environment Variables
   - Add `GROQ_API_KEY`
   - Add `ELEVENLABS_API_KEY` (optional)
   - Add `ELEVENLABS_AGENT_ID` (optional)

2. Deploy:

```bash
git add .
git commit -m "Add AI assistant"
git push
```

3. Vercel auto-deploys! 🎉

### 🎨 Customization

**Update Knowledge Base:**
Edit `src/constants/knowledgeBase.ts` to modify:

- Services offered
- Pricing information
- Project highlights
- Contact preferences

**Change Voice Settings:**
In `AIAssistant.tsx`, modify voice parameters for Web Speech API fallback

**Styling:**
Uses your Tailwind theme:

- `bg-gradient-primary` - Main gradient
- `bg-gradient-hero` - Secondary gradient
- Fully responsive and mobile-friendly

---

## 📂 Featured Projects

### 🍽️ [Dine With Foody](https://dinewithfoody.vercel.app/)

Multi-role restaurant management system with Super Admin, Restaurant Owner, Employee, and User roles.

- **Tech Stack:** Next.js, MongoDB
- **Duration:** Jul 2025 - Sep 2025
- [GitHub](https://github.com/Abdullahfalak007/dinewithfoody)

### 💼 [HR Management System](https://hrmanagementbyabdullah.vercel.app/)

Comprehensive HR platform with employee management and analytics.

- **Tech Stack:** Next.js, FastAPI, MongoDB, Prisma
- **Duration:** Mar 2024 - May 2024
- [GitHub](https://github.com/Abdullahfalak007/Techloset-HR-Management.git)

### 💬 [TeChat - Android Chatting App](https://drive.google.com/file/d/1PB4nJtZRwq1VkrwGOdwO3qIe_5RqIUOs/view?usp=sharing)

Real-time chat application for Android devices.

- **Tech Stack:** React Native, Firebase
- **Duration:** Mar 2024
- [GitHub](https://github.com/Abdullahfalak007/Techloset-TeChat-App.git)

### 🍳 [Delícias à Mesa - Recipe Finder](https://recipe-app-drab-seven.vercel.app/)

Recipe discovery application with REST API integration.

- **Tech Stack:** React, REST APIs
- **Duration:** Feb 2024
- [GitHub](https://github.com/Abdullahfalak007/Recipe-App.git)

## 🎓 Education

**Bachelor of Computer Science** - CGPA: 3.60  
Riphah International University, Faisalabad (2019 - 2023)

## 📜 Certifications

- **Mobile App Development** - E-rozgar (Jan 2024 - Apr 2024)
- **Web and Mobile App Development** - SMIT (Dec 2023 - Dec 2024)
- **React Native** - NAVTTC (Feb 2024 - Mar 2024)
- **IELTS** - Band 7.0 (C1 Level) (Nov 2023)
- **Techloset Bootcamp Completion** (Feb 2024 - May 2024)

## 💻 Installation & Setup

### Prerequisites

- Node.js & npm installed - [Install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

### Getting Started

```bash
# Clone the repository
git clone https://github.com/Abdullahfalak007/muhammad-abdu-showcase.git

# Navigate to project directory
cd muhammad-abdu-showcase

# Install dependencies
npm install

# Create .env file and add API keys (see AI Assistant Setup above)

# Start development server
npm run dev

# Build for production
npm run build
```

The development server will start at `http://localhost:3000`

## 🏗️ Built With

- **Framework:** Next.js 14 with App Router
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **UI Components:** shadcn/ui
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **AI:** Groq AI, ElevenLabs
- **Deployment:** Vercel

## 📱 Features

- ✨ Modern and responsive design
- 🎨 Dark/Light theme toggle
- 🎭 Smooth animations and transitions
- 🤖 AI Assistant with chat and voice modes
- 📊 Interactive project showcase
- 🎓 Experience timeline
- 🏆 Certificate gallery
- 📧 Contact form
- 📱 Mobile-friendly navigation

## 🐛 Troubleshooting

### AI Assistant Issues

**"Invalid API key" error:**

- Verify `GROQ_API_KEY` is in `.env`
- Restart dev server after adding variables
- Check key starts with `gsk_`

**Voice not working:**

- Grant microphone permission in browser
- Use Chrome/Edge/Safari (Firefox has limited support)
- Check console for errors
- Falls back to Web Speech API automatically

**Assistant not responding:**

- Check API keys are correct
- Verify internet connection
- Check browser console for errors
- Try clearing browser cache

### General Issues

**Build errors:**

```bash
# Clear cache and reinstall
rm -rf node_modules .next
npm install
npm run dev
```

**Port already in use:**

```bash
# Kill process on port 3000
npx kill-port 3000
npm run dev
```

## 📫 Contact

- **Email:** abdullahfalak007@gmail.com
- **Phone:** +92 343 3690525
- **Portfolio:** [abdullahfalak007.vercel.app](https://abdullahfalak007.vercel.app/)
- **LinkedIn:** [linkedin.com/in/abdullahfalak007](https://linkedin.com/in/abdullahfalak007)
- **GitHub:** [github.com/Abdullahfalak007](https://github.com/Abdullahfalak007)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Icons by [Lucide](https://lucide.dev/)
- UI components by [shadcn/ui](https://ui.shadcn.com/)
- Animations by [Framer Motion](https://www.framer.com/motion/)
- AI by [Groq](https://groq.com/) and [ElevenLabs](https://elevenlabs.io/)

---

<div align="center">
  <p>Built with ❤️ by Muhammad Abdullah</p>
  <p>⭐ Star this repo if you like it!</p>
  <p>🤖 Try the AI assistant on the live site!</p>
</div>
