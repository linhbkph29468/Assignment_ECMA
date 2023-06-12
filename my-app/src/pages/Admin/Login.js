import { login } from "../../api/user";
import { useEffect, useState } from "../../lib";
const LoginPage = {
  render() {
    return `
            <form id="formLogin">
                <input type="email" id="email" placeholder="your email" class="border border-black"/>
                <input type="password" id="password" placeholder="your password" class="border border-black"/>
                <button>Đăng nhập</button>
            </form>

        `;
  },
  afterRender() {
    const formLogin = document.querySelector("#formLogin");
    formLogin.addEventListener("submit", async (e) => {
      e.preventDefault();
      try {
        const { data } = await login({
          email: document.querySelector("#email").value,
          password: document.querySelector("#password").value,
        });
        if (data) {
          console.log(data.user);
          // Lưu thông tin user vào localStorage
          localStorage.setItem("user", JSON.stringify(data.user));
          toastr.success("Đăng nhập thành công, chuyển trang sau 2s");
          setTimeout(() => {
            document.location.href = "/";
          }, 2000);
        }
      } catch (error) {
        toastr.error(error.response.data);
      }
    });
  },
};
export default LoginPage;
