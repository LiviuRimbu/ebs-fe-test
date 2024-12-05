#  React Product Catalog Project

This is a simple Product Catalog application  built with **React**, leveraging **Tailwind CSS Framework** and **shadcn/ui component library** to create a responsive and modern design. The application fetches and displays products from [Fake Store API](https://fakestoreapi.com/) and allows users to browse, filter, and manage a shopping cart seamlessly.

---

##  Key Features
- Responsive design built with **Tailwind CSS** and **shadcn/ui** for frequently used components.
- Products fetched dynamically from [Fake Store API](https://fakestoreapi.com/).
- **Category Navigation**: Dynamically generated pages for each category.
- **Sorting Options**: Sort products by price (ascending or descending) on each page.
- **Shopping Cart**:
    - Managed with **React Context API** (`useContext` hook) for efficient state management.
    - Accessible via a modal window for a better user experience.
    - Add, remove, and clear items from the cart with dedicated buttons.
- **Multilingual Support**: Integrated with **react-i18next** to support English, Romanian, and Russian languages.
- Deployed live on **Vercel** for easy access.

##  Approach and Key Decisions

### Approach
- The project was designed to prioritize **user experience**.
- Used **Tailwind CSS** for rapid styling and responsive design.
- Leveraged **shadcn/ui** for consistent and reusable components.

### Key Decisions
1. **Separate Pages for Each Category**
    - This decision was made to streamline the user experience by allowing users to focus on a single category at a time.
2. **Multilingual Support**:
    - Integrated **react-i18next** to offer a seamless language-switching experience for English, Romanian, and Russian users, ensuring accessibility for a wider audience.
4. **Deployment on Vercel**:
    - Chose **Vercel** for its speed and ease of use, ensuring the application is readily accessible and deployable with minimal effort.


##  Live Demo
Check out the live application [here](https://ebs-fe-test.vercel.app/).

---

##  Installation and Setup

Follow these steps to run the project on your local system:
 
1 Clone the repository
Use the following command to clone the project:

git clone https://github.com/LiviuRimbu/ebs-fe-test.git

2 Install all required dependencies using npm or yarn:

npm install
or
yarn install

3 Start the development server

npm start
or
yarn start


##    Tech Stack
React: Frontend framework
Tailwind CSS: Utility-first CSS framework for styling
shadcn/ui: Component library for reusable and responsive components
react-i18next: Library for internationalization (i18n)
Fake Store API: Source for dynamic product data
Vercel: Deployment platform