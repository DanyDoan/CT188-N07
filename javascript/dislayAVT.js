if (localStorage.getItem("user-information")){
    let userAvatar =document.getElementById("userAvatar");
    userAvatar.src = "../image/avata/"+localStorage.getItem(localStorage.getItem("user-information")+"AVT-image-user")+".png";
} else {
    let userAvatar =document.getElementById("userAvatar");
    userAvatar.src = "../image/user.png";
}