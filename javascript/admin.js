document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Ngừng gửi form để kiểm tra thông tin đăng nhập
    
    // Lấy giá trị từ các trường nhập
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    // Kiểm tra thông tin đăng nhập (ở đây chỉ là kiểm tra cơ bản, có thể thay đổi thành kiểm tra qua backend)
    if (username === 'admin' && password === '12345') {
        localStorage.setItem("admin-login","mothaibabonnam");
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
document.getElementById('logout').addEventListener('click', function() {
    alert('Bạn đã đăng xuất');
    localStorage.removeItem("admin-login");
    window.location.href = 'admin.html';
});

const deleteButtons = document.querySelectorAll('.delete');
deleteButtons.forEach(button => {
    button.addEventListener('click', function() {
        if (confirm('Bạn có chắc chắn muốn xóa phòng này?')) {
            // Xử lý xóa phòng
            alert('Phòng đã được xóa');
        }
    });
});

// const addRoomButton = document.querySelector('.add-room');
// addRoomButton.addEventListener('click', function() {
//     alert('Thêm phòng mới');
// });




let arr = JSON.parse(localStorage.getItem("user-management")) || [];
console.log(arr);

let userList = document.getElementById("user-list");

for (let i = 1; i < arr.length; i++) {
    let tr = document.createElement("tr");
    let user = JSON.parse(localStorage.getItem(arr[i]+"thongTinUser") || "[]");
    tr.innerHTML = `
        <td>${i}</td>
        <td>${user.name}</td>
        <td>${user.gender}</td>
        <td>${user.birthdate}</td>
        <td>${user.email}</td>
        <td>${user.phone}</td>
        <td>
            <button class="edit" value="${arr[i]}" onclick="layID(this.value)">Chi tiết</button>
            <button class="delete">Xóa</button>
        </td>
    `;
    userList.appendChild(tr);
}
function layID(ID){
    localStorage.setItem("userRoom",ID);
    window.location.href="admin1.html";
}


