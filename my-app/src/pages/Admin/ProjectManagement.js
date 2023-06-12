import { getAll, remove } from "../../api/project";
import { useEffect, useState } from "../../lib";
import axios from "axios";

const ProjectManagementPage = () => {
  const [projects, setProject] = useState([]);
  useEffect(() => {
    getAll().then(({ data }) => setProject(data));
  }, []);

  useEffect(() => {
    const btnList = document.querySelectorAll(".btn-remove");
    for (let btn of btnList) {
      const id = btn.dataset.id;
      btn.addEventListener("click", () => {
        if (confirm('Bạn có chắc muốn xóa không')) {
          remove(id).then(() => {
          const newProjectList = projects.filter((project) => {
            return project.id != id;
          });
          setProject(newProjectList);
          })
        } 
      })
    }
  })

  return /*html*/ `

    <div class="d-flex justify-content-evenly mt-3 border-black">
        <h1>Project Management</h1>
    </div>
    
    
   
    <div>
      <a href="/admin/project/add"><button class="btn btn-warning">Add New Project</button></a>
      <table class="table table-bordered max-w-4xl mt-3">
            <thead class="table-primary">
                <tr>
                    <th>Stt</th>
                    <th>Title</th>
                    <th>Image</th>
                    <th>Price</th>
                    <th>Description</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                  ${projects
                    .map((project, index) => {
                      return `
                        <tr>
                          <td>${index + 1}</td>
                          <td>${project.title}</td>
                        
                          <td><img style="width:90%"; height:90%" src="${
                            project.img
                          }"></td>
                          <td>${project.price}</td>
                          <td>${project.description}</td>
                          <td class="m-1.5">
                              <button class="btn-remove btn btn-danger" data-id="${
                                project.id
                              }">Delete</button>
                              <a href="/admin/project/update/${
                                project.id
                              }"><button class="btn btn-primary">Update</button></a>
                          </td>
                        </tr>
                  `;
                    })
                    .join("")}
                    
            </tbody>
      </table>
    </div>
    </div>
       
  `;
};

export default ProjectManagementPage;
