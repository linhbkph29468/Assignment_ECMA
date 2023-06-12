/*
-  trong Components luôn viết hoa chữ cái đầu tiên
*/
import './header.css'
import { menuList } from '../dataFake.js'
const Header = () => {
    return `
            <nav class="my-3">
                <div class="row" style="align-items: center; gap:300px">
                    <img class="col" src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg" style="max-width: 200px"/>
                    <ul class="d-flex col">
                        ${menuList.map((value) => {
        return `
                        <li class="fw-bold px-5"><a href='${value.path}'>${value.name}</a></li>
                                    `
    }).join("")}
                    </ul>
                </div>
            </nav>
            <img src="https://picsum.photos/1500/500"/>
    `
}

export default Header; // chi goi 1 lan