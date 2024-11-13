This document serves as an assessment for a job application with Skite Social. The provided source code includes the frontend only but incorporates an API for data creation from the Admin Panel to the End-User.

Developed by Bhaktiaji Ilham.

I. Tech Stack:
- ReactJS
- Next.js
- Tailwind CSS
- GSAP
- SwiperJS
- Lenis
- Lottie

II. Getting Started:
- First, run the development server: npm run dev
- Open http://localhost:3000 in your browser to view the application.
- To make changes for the End-User, navigate to the /src/components folder.
- To make changes for the Admin, navigate to the /src/components/AdminPanel folder.
- For updates or additions to the User frontend, go to the /src/app folder.
- For updates or additions to the Admin Panel frontend, go to the /src/app/ dashboard folder.

III. Deployment:
- The deployment link to Vercel: https://skite-social-assesment-bhaktiaji-ilham-mabruri-81nri37t7.vercel.app/

IV. Others:
- Sliced from Figma design references: https://www.figma.com/file/GF3khMtrgYsrxRjLVwuoWA/FE-test?type=design&node-id=0%3A1&mode=design&t=Zgq5WCFRRmKldnvv-1 
- End-User path :
http://localhost:3000 (Home).

http://localhost:3000/ordersummary (Invoice).

http://localhost:3000/productsummary (Product Detail).

- Admin path :
http://localhost:3000/dashboard (Dashboard Panel).

http://localhost:3000/dashboard/products (Add Products Panel, which is implemented through the API to create products in the ProductSummary page on the End-User path).