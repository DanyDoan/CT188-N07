

// Truy cập đến cá kho
const currentUser = JSON.parse(localStorage.getItem('currentUser')) || [];
const userData = JSON.parse(localStorage.getItem('userData')) || [];
const duLieuTro = JSON.parse(localStorage.getItem('DuLieuTro')) || [];
const DSPhongTro = JSON.parse(localStorage.getItem('DSPhongTro')) || [];

allInOne();

    // // Chuyển page sẽ gọi lại hàm
    const paginationBtn = document.querySelectorAll('#pagination')
    for (let changePage of paginationBtn) {
        changePage.addEventListener('click', () =>
            allInOne())
    }

    // // Dùng filter sẽ gọi lại hàm
    const filter = document.querySelector('#enterFilter');
    filter.addEventListener('click', () =>
        allInOne()
    )

    // // Dùng chức năng tìm kiếm (search) sẽ gọi lại hàm
    const searching = document.querySelector('#searching');
    searching.addEventListener('click', () =>
        allInOne()
    )

// Hàm like/unlike lưu trạng thái like
function allInOne() {


    // Lấy icon trái tim
    const getFav = document.querySelectorAll('.favorite');
    const identifyCode =document.querySelectorAll('.identifyeCode');
   
   
    // Lưu giữ yêu thích
    favStatus(getFav);

    // Bắt sự kiện click vào biểu tượng trái tim (yêu thích)
    for (let fav of getFav) {
        fav.addEventListener('click', function (e) {
            // Chặn hiệu ứng bubling
            e.stopPropagation();
            // Lấy mã định danh (identify code);
            const code = fav.parentElement.parentElement.parentElement.children[2].innerHTML;
            // Check đã thêm
            if (currentUser.favRent.length != 0) {

                let exist=currentUser.favRent.some(rent => {
                    if(rent.id==code){
                        return true
                    }
                })
                // Nếu đã like rồi thì unlike
                if (exist){
                    removeLiked(fav,code);
                }
                // Nếu chưa thì add vào like
                else{
                    addFav(fav,code);
                }
            }
            else{
                addFav(fav,code);
            }
        })
    }

    // Hàm add vào yêu thích
    function addFav(fav,code) {
        // Đổi icon
        fav.src = "../image/heart1.png";
        var target;
        duLieuTro.forEach(element =>{
            if(element.id==code)
                target=element;
        })

        // Đẩy thông tin vào object
        const temp = {
            id: target.id,
            name: target.tieuDe,
            price: target.gia,
            address: target.vitri,
        }

        // Đẩy object vào mảng
        currentUser.favRent.push(temp);
        userData.forEach((user, index) =>{
            if(user.email==currentUser.email)
                userData[index]=currentUser;
        })
        window.localStorage.setItem('currentUser',JSON.stringify(currentUser));
        window.localStorage.setItem('userData',JSON.stringify(userData));

        // Hiệu ứng thêm =)))
        function createHeart() {
            const heart = document.createElement('div');
            heart.classList.add('heart');
            return heart;
        }
        function floatingHeart() {
            const heart = createHeart();

            const positionX = Math.floor(Math.random() * 100);
            const positionY = Math.floor(Math.random() * 100);
            heart.style.left = positionX + '%';
            heart.style.top = positionY + '%';
            document.body.appendChild(heart);

            setTimeout(() => {
                heart.remove()
            }, 2000);
        }

        for (let i = 0; i < 3; i++)
            floatingHeart()
    }

    // Hàm gỡ yêu thích
    function removeLiked(fav,code) {

        // Gỡ icon
        fav.src = "../image/heart0.png";

        for (let i = 0; i < currentUser.favRent.length; i++) {
            if (currentUser.favRent[i].id === code) {
                currentUser.favRent.splice(i, 1);
                break;
            }
            else;
        }
        userData.forEach((user, index) =>{
            if(user.email==currentUser.email)
                userData[index]=currentUser;
        })
        window.localStorage.setItem('currentUser',JSON.stringify(currentUser));
        window.localStorage.setItem('userData',JSON.stringify(userData));
        // window.location.reload();
    }

    // Lưu trạng thái thích/ không thích
    function favStatus(getFav) {

        for (let doubleCheck of getFav) {
            // Lấy mã định danh (identify code);
            const code = doubleCheck.parentElement.parentElement.parentElement.children[2].innerHTML;
            for (let i = 0; i < currentUser.favRent.length; i++) {
                if (currentUser.favRent[i].id === code)
                    doubleCheck.src = "../image/heart1.png";
                else;
            }
        }
    }

}
