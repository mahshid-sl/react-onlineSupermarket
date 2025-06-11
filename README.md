# 🛒 React Online Supermarket

A modern, responsive Persian-language e-commerce application built with **React**. It supports product browsing, search, cart management, favorites, discount codes, and persistent storage via localStorage — all styled with Tailwind CSS and optimized for RTL layout.

---

## ✨ Features

- 🗂️ Product categorization with filtering
- 🔍 Search bar (only visible on the Products page)
- 🛒 Shopping cart with add, remove, and quantity updates
- 💖 Add/remove favorite products
- 💾 Persistent cart & favorites with **localStorage**
- 🏷️ Discount code calculation
- 🌐 SPA routing via **React Router**
- ⚙️ Global state management with **Context API + useReducer**
- 📱 Responsive design with full RTL support for Persian users

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
- [JSON Server](https://github.com/typicode/json-server)

---

## 📸 Demo Preview

###🏠Homepage
![Homepage](https://github.com/user-attachments/assets/5f91d9b6-fbc6-4b53-9e9c-b705023b69d0)

###🛍️ProductsPage
![Products Page](https://github.com/user-attachments/assets/826b0c8d-f981-4eb8-8725-9e3206e5c46e)

###💗favoritePage
![[Favorites Page](https://github.com/user-attachments/assets/e817beb5-a7f7-45f0-ac80-985e6897190d)

###🛒cartPage
![cart Page](https://github.com/user-attachments/assets/f59b715c-5594-4dbf-b2ec-5fe066913c5d)


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
# Install JSON Server globally (if not already installed)
npm install -g json-server

# Start the JSON Server in a separate terminal
json-server --watch src/data/ProductData.json --port 8000
⚠️ Make sure the file path matches your setup. The API will be available at:
http://localhost:8000/products

# Start the development server
npm run dev


📁 Project Structure

src/
├── components/      # Shared UI components
├── context/         # Cart & Favorite context providers
├── data/            # Fake product data (JSON)
├── pages/           # Page components (Home, Products, Favorites, etc.)
├── App.jsx          # Main app and routes
└── main.jsx         # Entry point



🙋‍♀️ Author
Developed by Mahshid soleiman as a React practice project.
Feel free to fork, use, or improve it!

