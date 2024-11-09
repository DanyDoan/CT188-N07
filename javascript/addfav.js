allInOne();

// Chuyển page sẽ gọi lại hàm
const paginationBtn=document.querySelectorAll('#pagination')
for(let changePage of paginationBtn){
    changePage.addEventListener('click',()=>
    allInOne())
}

// Dùng filter sẽ gọi lại hàm
const filter=document.querySelector('#enterFilter');
filter.addEventListener('click',()=>
    allInOne()
)

// Dùng chức năng tìm kiếm (search) sẽ gọi lại hàm
const searching=document.querySelector('#searching');
searching.addEventListener('click',()=>
    allInOne()
)



// Hàm like/unlike lưu trạng thái like
function allInOne(){
// Create an array to store rent information
if(window.localStorage.getItem(localStorage.getItem("user-information")+"array")===null)
    var array=[];
else
    var array=JSON.parse(localStorage.getItem(localStorage.getItem("user-information")+"array"));


// Lấy icon trái tim
const getFav= document.querySelectorAll('.favorite');

// Lưu giữ yêu thích
favStatus();


// Bắt sự kiện click vào biểu tượng trái tim (yêu thích)
for(let fav of getFav){
    
    fav.addEventListener('click',function(e){

        // Chặn hiệu ứng bubling
        e.stopPropagation();

        // Lấy địa chỉ
        const address=fav.parentElement.parentElement.parentElement.children[1].children[2].innerHTML;        

        // Check đã thêm
        if(array.length!=0){
            let exist=0;
            for(let checkExist of array){
                if (checkExist.address===address){
                    exist=1;
                    break;
                }
            }
            // Nếu đã like rồi thì unlike
            if(exist===1)
                removeLiked(fav);
            // Nếu chưa thì add vào like
            else
                addFav(fav);
        }
        else
            addFav(fav);
    })
}

// Hàm add vào yêu thích
function addFav(fav){
        // Đổi icon
        fav.src="../image/heart1.png";


        // Lấy hộp chứa thông tin
        const box=fav.parentElement.parentElement.parentElement;

        // Lấy thông tin cần thiết
        const name=box.children[1].children[0];
        const price=box.children[1].children[1];
        const address=box.children[1].children[2];     

        // Đẩy thông tin vào object
        const temp={
            name: name.innerHTML,
            price: price.innerHTML,
            address: address.innerHTML
        }
        // Đẩy object vào mảng
        array.push(temp);
        window.localStorage.setItem(localStorage.getItem("user-information")+"array",JSON.stringify(array));




        // Hiệu ứng thêm =)))
        function createHeart(){
            const heart=document.createElement('div');
            heart.classList.add('heart');
            return heart;
        }

        function floatingHeart(){
            const heart=createHeart();

            const positionX=Math.floor(Math.random()*100);
            const positionY=Math.floor(Math.random()*100);
            heart.style.left=positionX+'%';
            heart.style.top=positionY+'%';
            document.body.appendChild(heart);

            setTimeout(() => {
            heart.remove()}, 2000);
        }
        for(let i=0; i<3; i++)      
            floatingHeart()
}

// Hàm gỡ yêu thích
function removeLiked(fav){

    // Gỡ icon
    fav.src="../image/heart0.png";

    // lấy địa chỉ
    const address=fav.parentElement.parentElement.parentElement.children[1].children[2].innerHTML;        


    // Lấy địa chỉ
    for(let i=0; i<array.length; i++){
        if(array[i].address===address){
            array.splice(i,1);
            break;
        }
        else;
    }
    window.localStorage.setItem(localStorage.getItem("user-information")+"array",JSON.stringify(array));
    // window.location.reload();
}

// Lưu trạng thái thích/ không thích
function favStatus(){

    for(let doubleCheck of getFav){
        // Lấy địa chỉ
        const address=doubleCheck.parentElement.parentElement.parentElement.children[1].children[2].innerHTML;  
        for(let i=0; i<array.length; i++){
            if(array[i].address===address)
                doubleCheck.src="../image/heart1.png";
            else;
        }
    }
}

}