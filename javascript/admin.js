document.getElementById('login-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Ngừng gửi form để kiểm tra thông tin đăng nhập

    // Lấy giá trị từ các trường nhập
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Kiểm tra thông tin đăng nhập (ở đây chỉ là kiểm tra cơ bản, có thể thay đổi thành kiểm tra qua backend)
    if (username === 'admin' && password === '12345') {
        localStorage.setItem("admin-login", "mothaibabonnam");
        alert('Đăng nhập thành công!');
        window.location.href = 'admin.html'; // Chuyển hướng đến trang quản trị sau khi đăng nhập thành công
    } else {
        document.getElementById('error-message').textContent = 'Tên đăng nhập hoặc mật khẩu không đúng!';
    }
});


if (localStorage.getItem("admin-login")) {
    document.getElementById("login--id").style.display = "none";
    document.getElementById("content-admin").style.display = "block";

} else {
    document.getElementById("content-admin").style.display = "none";
    document.getElementById("login--id").style.display = "block";
    // window.location.href = "main.html";
}
document.getElementById('logout').addEventListener('click', function () {
    alert('Bạn đã đăng xuất');
    localStorage.removeItem("is-login")
    localStorage.removeItem("currentUser");
    localStorage.removeItem("admin-login");
    window.location.href = 'login.html';
});


// const addRoomButton = document.querySelector('.add-room');
// addRoomButton.addEventListener('click', function() {
//     alert('Thêm phòng mới');
// });



// Truy cập đến cá kho
var currentUser = JSON.parse(localStorage.getItem('currentUser'));
var userData = JSON.parse(localStorage.getItem('userData')) || [];
var DuLieuTro = JSON.parse(localStorage.getItem("DuLieuTro")) || [];
var DSPhongTro = JSON.parse(localStorage.getItem('DSPhongTro')) || [];



let userList = document.getElementById("user-list");

userData.forEach((user, index) => {
    let tr = document.createElement("tr");
    tr.innerHTML = `
        <td>${index + 1}</td>
        <td>${user.name}</td>
        <td>${user.gender}</td>
        <td>${user.birthdate}</td>
        <td id="userEmail">${user.email}</td>
        <td>${user.phone}</td>
        <td>
            <button class="edit" value="${user.email}" onclick="checkVarUser(this.value)">Chi tiết</button>
            <button class="delete">Xóa</button>
        </td>
    `;
    userList.appendChild(tr);
})
function checkVarUser(email) {
    localStorage.setItem("userRoom", email);
    window.location.href = "admin1.html";
}

// Xóa phòng

const deleteButtons = document.querySelectorAll('.delete');
deleteButtons.forEach(button => {

    // Lấy email để tiện tra cứu và xóa người dùng
    const email = document.querySelector('#userEmail').textContent;

    button.addEventListener('click', function () {
        if (confirm('Bạn có chắc chắn muốn xóa tài khoản này?')) {
            userData.forEach((user, index) => {
                if (user.email == email) {
                    const banList = JSON.parse(localStorage.getItem('banList')) || [];
                    banList.push(user.email);
                    localStorage.setItem('banList', JSON.stringify(banList));

                    userData[index].myRent.forEach((rent, i) => {
                        DSPhongTro.some((r, j)=>{
                            if(r.id==rent.id){
                                DSPhongTro.splice(j,1);
                                return true;
                            }
                        })

                    })
                    userData.splice(index, 1);
                    localStorage.setItem('DSPhongTro', JSON.stringify(DSPhongTro));
                    localStorage.setItem('userData', JSON.stringify(userData));
                }
            })
        }

        alert("Đã xóa và chặn tài khoản này!");
        location.reload();
    });
});


