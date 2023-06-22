import { Link } from "react-router-dom";
import { useTitleChange } from "../components/useTitleChange";

export const PageNotFound = () => {
  useTitleChange("Page Not Found");

  console.log(document.title);
  return (
    <main className="grid items-center">
      <section className="text-center text-gray-900 dark:text-white ">
        <h2 className="text-7xl font-semibold">404 Opps!</h2>
        <p className="text-2xl my-7">Page not found...</p>
        <Link to="/">
          <button className="py-2 px-4 bg-green-600 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75">
            Back to home
          </button>
        </Link>
      </section>
    </main>
  );
};
