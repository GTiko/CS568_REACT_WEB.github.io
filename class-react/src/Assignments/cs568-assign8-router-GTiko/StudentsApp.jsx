import "./StudentsApp.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import StudentDashBoard from "./routers/StudentDashBoard";
import AddStudent from "./routers/AddStudents";
import EditStudent from "./routers/EditStudent";
import ShowStudentDetails from "./routers/ShowStudentDetail";
import ErrorPage from "./routers/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/students",
    element: <StudentDashBoard />,
  },
  {
    path: "/students/add",
    element: <AddStudent />,
  },
  {
    path: "students/edit",
    element: <EditStudent />,
  },
  {
    path: "students/:studentId",
    element: <ShowStudentDetails />,
  },
  {
    path: "/*",
    element: <ErrorPage />,
  },
]);

export default function StudentApp() {
  return (
    <div>
      <h1 style={{}}>Students Form</h1>
      <RouterProvider router={router} />
    </div>
  );
}
