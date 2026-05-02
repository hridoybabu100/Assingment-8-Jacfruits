**Here's a clean, modern README.md** for your **Jackfruits** project:

```markdown
# 🍈 Jackfruits

A beautiful, modern Next.js web application showcasing stunning jackfruit photography with authentication, dynamic routing, and a sleek UI.

![Jackfruits Banner](https://www.gardenia.net/wp-content/uploads/2025/05/shutterstock_2453997129.jpg)

## ✨ Features

- **Modern UI/UX** – Built with Tailwind CSS + DaisyUI + HeroUI (Radix-based components)
- **Full Authentication** – Email/password + Google OAuth using **Better Auth** + MongoDB
- **Dynamic Pages** – Home, All Jackfruits, Individual Fruit Details, Profile
- **Responsive Design** – Mobile-first, fully responsive grid layouts
- **Image Optimization** – Next.js Image component with remote image support
- **Protected Routes** – Profile and detailed pages require authentication
- **Profile Management** – Update name and avatar
- **Clean Architecture** – Organized component structure

## 🛠️ Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: React 19 + TypeScript (via jsconfig)
- **Styling**: Tailwind CSS v4 + DaisyUI + HeroUI
- **Authentication**: Better Auth + MongoDB Adapter
- **Database**: MongoDB
- **Icons**: React Icons + Gravity UI
- **Deployment Ready**: Optimized for Vercel

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- MongoDB database (local or cloud)
- Google OAuth credentials (for social login)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/jackfruits.git
   cd jackfruits
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Variables**

   Create a `.env.local` file in the root:

   ```env
   JACK_URL=mongodb+srv://<username>:<password>@cluster0.mongodb.net/jackfruits
   GOOGLE_CLIENT_ID=your_google_client_id
   GOOGLE_SECRET_ID=your_google_client_secret
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) to see the result.

## 📁 Project Structure

```
src/
├── app/
│   ├── all-jackfruits/          # All fruits listing + dynamic [id] route
│   ├── profile/                 # Protected user profile
│   ├── singin/ & singup/        # Authentication pages
│   ├── layout.js
│   └── page.js                  # Home page
├── components/
│   ├── Banner/
│   ├── Jackfruits/
│   ├── JacksFruitsCard/
│   ├── Navbar/
│   ├── Footer/
│   └── Modal/
├── lib/
│   ├── auth.js                  # Better Auth configuration
│   └── auth-client.js
└── images/
```

## 🎨 Key Pages

- **Home** – Hero banner + Featured jackfruits
- **All Jackfruits** – Grid view of all items
- **Fruit Details** – Rich individual product view with prompt, rating, and metadata
- **Profile** – User info with editable profile modal
- **Authentication** – Clean sign up & sign in with Google support

## 🔐 Authentication

- Email & Password authentication
- Google OAuth integration
- Protected routes using middleware (`/profile`, `/all-jackfruits/[id]`)
- Session management with `better-auth`

## 📸 Data Source

Jackfruit data is served from `public/data.json` containing 10 beautifully curated entries with:
- High-quality images
- Titles, descriptions, and AI prompts
- Pricing and ratings
- Categories and tags

## 🚀 Deployment

Easiest deployment is on **Vercel**:

```bash
npm run build
```

The project is already configured for Vercel with proper image remote patterns and environment variable support.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

**Made with ❤️ for beautiful jackfruit photography**

---

*Built with Next.js 16, Better Auth, Tailwind CSS, and lots of tropical vibes.*
```

---

### How to use:

1. Replace `https://github.com/yourusername/jackfruits.git` with your actual repo URL.
2. Add a nice project screenshot or banner if you want.
3. Update the license section if needed.

Would you like a shorter version or a more technical/developer-focused README?


