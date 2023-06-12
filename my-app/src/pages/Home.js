import Header from '../components/header';
import { projectList } from '../dataFake'


const HomePage = () => {
    // console.log(projectList);
    return `
        ${Header()}

        <main>
        <div>
            ${projectList.map(function (post) {
        return `
                        
                    `
    }).join("")}
            </div>
        </main>
        <footer></footer>
        
    `
}

export default HomePage