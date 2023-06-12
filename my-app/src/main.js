import AboutPage from "./pages/About";
import HomePage from "./pages/Home";
// import Navigo from 'navigo'
import NotFoundPage from "./pages/NotFoundPage";
import ProjectPage from "./pages/Project";
import ProjectPageDetail from "./pages/ProjectDetail";
import { router, render } from "./lib";
import ProjectManagementPage from "./pages/Admin/ProjectManagement";
import AddProjectPage from "./pages/Admin/AddProject";
import UpdateProjectPage from "./pages/Admin/UpdateProject";
import LoginPage from "./pages/Admin/Login";

import "bootstrap/dist/css/bootstrap.min.css";
import "./css/index.css";

const app = document.querySelector("#app"); // tim phan tu html co id la app

// const router = new Navigo('/') // khoi tao router tu doi tuong navigo
// const render = (content, container) => {
//     return container.innerHTML = content()
// }

router.on("/", () => {
  //sử dụng phương thức on để khai báo đường dẫn đến từng page
  return render(HomePage, app); // render la kieu show du lieu ra
});
router.on("/about", () => {
  return render(AboutPage, app);
});
// router.on("/project", () => {
//   return render(ProjectPage, app);
// });
router.on("/project/:id", ({ data }) => {
  // console.log(data); // {id:1000}
  return render(() => {
    return ProjectPageDetail(data);
  }, app); //ProjectDetailPage()()
});

//Admin
router.on("/admin/project", () => {
  return render(ProjectManagementPage, app);
});

router.on("/admin/project/add", () => {
  return render(AddProjectPage, app);
});

router.on("/admin/project/update/:id", ({ data }) => {
  return render(() => {
    return UpdateProjectPage(data);
  }, app);
});

router.on("/admin/login", () => {
  return render(LoginPage, app);
});

// router.on("/admin/product/", () => {
//   return render(ProductManagement, app);
// });

router.notFound(() => {
  return render(NotFoundPage, app);
});

router.resolve(); //sử dụng phương thức resolve để thực thi
// document.querySelector("#app").innerHTML = AboutPage()
