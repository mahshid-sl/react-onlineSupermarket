# 🛒 React Online Supermarket

A modern, responsive Persian-language e-commerce application built with **React**. It supports product browsing, search, cart management, favorites, discount codes, and persistent storage via localStorage — all styled with Tailwind CSS and optimized for RTL layout.

---

## ✨ Features

- 🗂️ Product categorization with filter by category
- 🔍 Search bar (visible only on the Products page)
- 🛒 Shopping cart with add, remove, quantity change
- 💖 Add/remove favorites
- 💾 Data persistence via **localStorage**
- 🏷️ Discount code calculation
- 🌐 SPA routing with **React Router**
- ⚙️ Global state management via **Context API + useReducer**
- 📱 Responsive design with RTL support (for Persian layout)

---

## 🛠️ Built With

- [React](https://reactjs.org/)
- [React Router](https://reactrouter.com/)
- [Context API + useReducer](https://reactjs.org/docs/hooks-reference.html#usereducer)
- [Tailwind CSS](https://tailwindcss.com/)
- [React Icons](https://react-icons.github.io/react-icons/)
- [React Hot Toast](https://react-hot-toast.com/)
- [Vite](https://vitejs.dev/)
- [LocalStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)

---

## 📸 Demo Preview

> Add a screenshot or screen recording here  
> *(Tip: You can use [Loom](https://www.loom.com/) or a GitHub issue image link)*

---

## 🚀 Getting Started

To run the project locally:

```bash
# Clone the repository
git clone https://github.com/mahshid-sl/react-onlineSupermarket.git

# Navigate to the project directory
cd react-onlineSupermarket

# Install dependencies
npm install

#Set Up the API
npm install -g json-server
Ensure the ProductData.json file is in the project root (or specify its path, e.g., src/data/ProductData.json if in a subfolder).

#Start the JSON server in a separate terminal:
json-server --watch src/data/ProductData.json --port 8000
The API will be available at http://localhost:8000. Make sure the port (8000) does not conflict with the development server.

# Start the development server
npm run dev
