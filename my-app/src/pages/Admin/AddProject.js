import { add } from "../../api/project";
import { router } from "../../lib";
import { useEffect } from "../../lib";

const AddProjectPage = () => {
  useEffect(() => {
    const addForm = document.querySelector("#add-form");
    addForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const newProject = {
        title: document.querySelector("#title").value,
        img: document.querySelector("#img").value,
        price: document.querySelector("#price").value,
        description: document.querySelector("#description").value,
        // "img": document.querySelector("#img").value,
      };

      add(newProject).then(() => {
        router.navigate("/admin/project");
      });
    });
  });
  return /*html*/ `
        <div class="d-flex justify-content-evenly mt-3 border-black">
            <h1>Add Project</h1>
        </div>  
        <br>
        
        <form action="" id="add-form" class=" grid grid-cols-1 mt-2.5 max-w-xl container ">
        
            <input class="form-control" type="text" placeholder=" Tiêu đề" id="title"/>
            <br>
            <input class="form-control" type="link" placeholder=" Hình ảnh" id="img"/>
            <br>
            <input class="form-control" type="text" placeholder=" Giá" id="price"/>
            <br>
            <input class="form-control" type="text" placeholder=" Mô tả" id="description"/>
            <br>
            <button class="btn btn-outline-primary">Add New Project</button>
        </form>
    `;
};

export default AddProjectPage;
