**✅ Modern & Professional README.md**

```markdown
<div>
  <img src="https://www.gardenia.net/wp-content/uploads/2025/05/shutterstock_2453997129.jpg" alt="Jackfruits Banner" width="100%" style="border-radius: 16px; margin-bottom: 20px;" />

  <h1>🍈 Jackfruits</h1>
  <p><strong>A stunning Next.js 16 showcase of jackfruit photography with beautiful UI, full authentication, and dynamic routing.</strong></p>

  <a href="https://assingment-8-jacfruits.vercel.app" target="_blank">
    <img src="https://img.shields.io/badge/Live%20Demo-View%20Site-FF4081?style=for-the-badge&logo=vercel" alt="Live Demo" />
  </a>
  <a href="#">
    <img src="https://img.shields.io/badge/Next.js-16.2.4-black?style=for-the-badge&logo=next.js" />
  </a>
  <a href="#">
    <img src="https://img.shields.io/badge/Tailwind-CSS-38B2AC?style=for-the-badge&logo=tailwindcss" />
  </a>

</div>

---

## ✨ Features

- **Modern & Elegant Design** — Built with Tailwind CSS v4, DaisyUI, and HeroUI components
- **Full Authentication** — Email/password + Google OAuth via **Better Auth** + MongoDB
- **Dynamic Routing** — Clean pages for Home, All Jackfruits, Fruit Details, and Profile
- **Protected Routes** — Profile & individual fruit pages require login
- **Profile Management** — Update name & avatar with smooth modal
- **Image Optimization** — Next.js 16 `Image` component with remote patterns
- **Real-time Elements** — Breaking news marquee + animated sections with Framer Motion
- **Toast Notifications** — Beautiful feedback using `react-toastify`
- **Fully Responsive** — Mobile-first design that looks great on all devices

---

## 🛠️ Tech Stack

| Technology           | Version    | Purpose                     |
|----------------------|------------|-----------------------------|
| **Next.js**          | 16.2.4     | React Framework             |
| **React**            | 19.2.4     | UI Library                  |
| **Tailwind CSS**     | v4         | Styling                     |
| **DaisyUI**          | ^5.5.19    | UI Components               |
| **HeroUI**           | ^3.0.3     | Beautiful Radix components  |
| **Better Auth**      | ^1.6.9     | Authentication              |
| **MongoDB**          | -          | Database                    |
| **Framer Motion**    | ^12.38.0   | Animations                  |
| **React Fast Marquee**| ^1.6.5    | Scrolling News              |

---

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- MongoDB (Atlas or local)
- Google OAuth credentials (optional)

### Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd Assingment-8-Jacfruits-main

# Install dependencies
npm install

# Create environment file
cp .env.example .env.local
```

**Add your environment variables in `.env.local`:**

```env
JACK_URL=mongodb+srv://<username>:<password>@cluster0.mongodb.net/jackfruits

GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_SECRET_ID=your_google_client_secret
```

### Run Development Server

```bash
npm run dev
```

Open [https://assingment-8-jacfruits.vercel.app/](https://assingment-8-jacfruits.vercel.app/) — Enjoy! 🎉

---

## 📁 Project Structure

```bash
src/
├── app/
│   ├── all-jackfruits/          # All fruits + [id] dynamic route
│   ├── profile/                 # Protected user profile
│   ├── singin/ & singup/        # Authentication pages
│   ├── layout.js
│   └── page.js                  # Homepage
├── components/
│   ├── Banner, Jackfruits, JacksFruitsCard, etc.
├── lib/
│   ├── auth.js                  # Better Auth server config
│   └── auth-client.js           # Client auth
public/
├── data.json                    # Jackfruit gallery
├── card.json                    # Top brands data
```

---

## 🔐 Authentication

- Email & Password
- Google OAuth
- Protected routes using middleware
- Session management powered by **Better Auth**

---

## 📸 Data Sources

- **Gallery**: `public/data.json` (10 high-quality jackfruit images with metadata)
- **Top Brands**: `public/card.json`

Each fruit includes:
- High-resolution image
- Title, price, rating
- AI-generated prompt
- Dynamic detail page

---

## 🎨 Key Pages

- **Home** — Hero banner, featured jackfruits, breaking news
- **All Jackfruits** — Responsive grid with all items
- **Fruit Details** — Rich view with image, prompt, rating & price
- **Profile** — User info with editable avatar & name
- **Auth** — Clean sign-up and sign-in pages

---

## 🚀 Deployment (Vercel Recommended)

```bash
npm run build
```

Add environment variables in Vercel Dashboard before deploying.

---

## 📜 Scripts

```json
{
  "dev": "next dev",
  "build": "next build",
  "start": "next start",
  "lint": "eslint"
}
```

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!  
Feel free to fork and submit a pull request.

---

## 📄 License

This project is open source and licensed under the **MIT License**.

---

**Made with ❤️ and tropical vibes** — Showcasing the king of fruits in the most beautiful way possible.

*Built with Next.js 16 • Better Auth • Tailwind v4 • HeroUI*

---

Would you like a **shorter version**, a **developer-focused** version, or one with **GitHub badges** and **social preview**?
```

Just replace the content of your `README.md` with this. It’s clean, modern, visually appealing, and professional. Let me know if you want any customizations!!