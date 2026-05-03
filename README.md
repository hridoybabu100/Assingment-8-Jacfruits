**✅ Smart & Professional README.md**

```markdown
# 🍈 Jackfruits

A modern, beautiful Next.js 16 web application showcasing stunning jackfruit photography with full authentication, dynamic routing, and a sleek UI.

![Jackfruits Banner](https://www.gardenia.net/wp-content/uploads/2025/05/shutterstock_2453997129.jpg)

## ✨ Features

- **Modern UI/UX** – Built with Tailwind CSS v4 + DaisyUI + HeroUI (Radix-based components)
- **Full Authentication** – Email/password + Google OAuth using **Better Auth** + MongoDB
- **Dynamic Routing** – Home, All Jackfruits, Individual Fruit Details, Profile
- **Protected Routes** – Profile and fruit detail pages require authentication
- **Profile Management** – Update name and avatar with modal
- **Image Optimization** – Next.js 16 Image component with remote patterns
- **Responsive Design** – Mobile-first, fully responsive
- **Real-time Updates** – Breaking news marquee + Featured sections
- **Toast Notifications** – User feedback with `react-toastify`

## 🛠️ Tech Stack

| Technology              | Version     |
|------------------------|-------------|
| **Next.js**            | 16.2.4     |
| **React**              | 19.2.4     |
| **TypeScript**         | via jsconfig |
| **Tailwind CSS**       | v4         |
| **DaisyUI**            | ^5.5.19    |
| **HeroUI**             | ^3.0.3     |
| **Better Auth**        | ^1.6.9     |
| **MongoDB Adapter**    | ^1.6.9     |
| **Framer Motion**      | ^12.38.0   |
| **React Fast Marquee** | ^1.6.5     |

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- MongoDB (local or MongoDB Atlas)
- Google OAuth credentials (optional but recommended)

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd Assingment-8-Jacfruits-main
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Variables**

   Create `.env.local` in the root:

   ```env
   JACK_URL=mongodb+srv://<username>:<password>@cluster0.mongodb.net/jackfruits

   GOOGLE_CLIENT_ID=your_google_client_id
   GOOGLE_SECRET_ID=your_google_client_secret
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```bash
src/
├── app/
│   ├── all-jackfruits/           # All fruits + dynamic [id] route
│   ├── profile/                  # Protected profile page
│   ├── singin/ & singup/         # Authentication pages
│   ├── layout.js
│   └── page.js                   # Home
├── components/
│   ├── Banner/
│   ├── Jackfruits/
│   ├── JacksFruitsCard/
│   ├── Bannedcard/
│   ├── Modal/
│   ├── Navbar/
│   └── Footer/
├── lib/
│   ├── auth.js                   # Better Auth config
│   └── auth-client.js
├── images/
public/
├── data.json                     # Jackfruit gallery data
└── card.json                     # Top brands data
```

## 🔐 Authentication

- Email & Password authentication
- Google OAuth support
- Protected routes using middleware (`/profile`, `/all-jackfruits/[id]`)
- Session management with **Better Auth**

## 📸 Data

- **Gallery**: `public/data.json` (10 curated jackfruit images with metadata)
- **Top Brands**: `public/card.json`

Each fruit card includes:
- High-quality image
- Title, price, rating
- AI prompt description
- Dynamic detail page

## 🎨 Key Pages

- **Home** – Hero banner + Featured jackfruits + Breaking news
- **All Jackfruits** – Responsive grid with all items
- **Fruit Details** – Rich view with prompt, rating, price
- **Profile** – User info with editable modal
- **Auth** – Clean sign up & sign in

## 🚀 Deployment

Optimized for **Vercel**:

```bash
npm run build
```

Make sure to add your environment variables in Vercel dashboard.

## 📄 Scripts

```json
{
  "dev": "next dev",
  "build": "next build",
  "start": "next start",
  "lint": "eslint"
}
```

## 🤝 Contributing

Feel free to fork and submit pull requests. This project was built as an assignment but is open for improvements.

## 📜 License

This project is open source and available under the **MIT License**.

---

**Made with ❤️ for beautiful jackfruit photography**

*Built with Next.js 16, Better Auth, Tailwind CSS v4, and tropical vibes.*

---

Would you like a **shorter version** or a **developer-focused** version with architecture details?
```

**This README is clean, professional, informative, and visually appealing.** Let me know if you want any modifications!