import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home";
import ListedBooks from "../pages/ListedBooks";
import PagesRead from "../pages/PagesRead";
import ErrorPage from "../pages/ErrorPage";
import BookDetails from "../pages/BookDetails";
import JoinHub from "../pages/JoinHub";
import SearchBooks from "../pages/SearchBooks";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/listedBooks",
        element: <ListedBooks />,
      },
      {
        path: "/pagesRead",
        element: <PagesRead />,
      },
      {
        path: "/bookDetails/:bookId",
        element: <BookDetails />,
      },
      {
        path: "/searchBooks",
        element: <SearchBooks />,
      },
      {
        path: "/joinHub",
        element: <JoinHub />,
      },
    ],
  },
]);

export default router;
