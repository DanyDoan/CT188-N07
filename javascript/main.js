let jsonString = `{
    "PhongTro": [
        {
            "id": "001",
            "tieuDe": "CHO THUÊ PHÒNG TRỌ GIÁ RẺ",
            "gia": "0.8 triệu/tháng",
            "dienTich": "18m2",
            "vitri": "Hẻm 12, Đường Cách Mạng Tháng 8, Phường An Thới, Quận Bình Thủy, Cần Thơ",
            "hinhAnh": "../image/anh11.jpg",
            "giaDien": "2.900đ/kWh",
            "giaNuoc": "17.000đ/m3",
            "cachTrungTam": "4km",
            "coGac": "Không",
            "trangThai": "Còn trống",
            "chuTro": "Nguyễn Văn Anh Kiệt",
            "lienHe": "0912345678",
            "giaDacCoc": "0.5 triệu",
            "moTa": "Phòng trọ giá rẻ, an ninh tốt."
        },
        {
            "id": "002",
            "tieuDe": "CHO THUÊ PHÒNG TRỌ TIỆN NGHI",
            "gia": "2 triệu/tháng",
            "dienTich": "25m2",
            "vitri": "Hẻm 3, Đường Nguyễn Văn Cừ, Phường An Hòa, Quận Ninh Kiều, Cần Thơ",
            "hinhAnh": "../image/anh1.jpg",
            "giaDien": "3.000đ/kWh",
            "giaNuoc": "15.000đ/m3",
            "cachTrungTam": "2km",
            "coGac": "Có",
            "trangThai": "Còn trống",
            "chuTro": "Nguyễn Thị Bảo Trân",
            "lienHe": "0321945679",
            "giaDacCoc": "1 triệu",
            "moTa": "Phòng trọ rộng rãi, gần trung tâm."
        },
        {
            "id": "003",
            "tieuDe": "CHO THUÊ PHÒNG TRỌ RỘNG RÃI",
            "gia": "4 triệu/tháng",
            "dienTich": "35m2",
            "vitri": "Hẻm 51, Đường 3/2, Phường Xuân Khánh, Quận Ninh Kiều, Cần Thơ",
            "hinhAnh": "../image/anh23.jpg",
            "giaDien": "3.500đ/kWh",
            "giaNuoc": "16.000đ/m3",
            "cachTrungTam": "1km",
            "coGac": "Không",
            "trangThai": "Còn trống",
            "chuTro": "Trần Thành Trung",
            "lienHe": "0932145680",
            "giaDacCoc": "1,5 triệu",
            "moTa": "Phòng trọ rộng rãi, đầy đủ tiện nghi, cách trường Đại Học Cần Thơ 800m."
        },
        {
            "id": "004",
            "tieuDe": "CHO THUÊ NHÀ NGUYÊN CĂN",
            "gia": "6 triệu/tháng",
            "dienTich": "45m2",
            "vitri": "Đường Phạm Ngọc Hưng, Phường Phú Thứ, Quận Cái Răng, Cần Thơ",
            "hinhAnh": "../image/anh16.jpg",
            "giaDien": "3.200đ/kWh",
            "giaNuoc": "17.000đ/m3",
            "cachTrungTam": "3km",
            "coGac": "Có",
            "trangThai": "Còn trống",
            "chuTro": "Lê Thị Mỹ Duyên",
            "lienHe": "0912354781",
            "giaDacCoc": "2 triệu",
            "moTa": "Nhà nguyên căn rộng rãi, đầy đủ tiện nghi, không ngập, nằm ngoài đường chính."
        },
        {
            "id": "005",
            "tieuDe": "CHO THUÊ minihouse CAO CẤP",
            "gia": "8 triệu/tháng",
            "dienTich": "55m2",
            "vitri": "Hẻm 2, Đường Nguyễn Văn Linh, Phường Long Hòa, Quận Bình Thủy, Cần Thơ",
            "hinhAnh": "../image/anh13.jpg",
            "giaDien": "4.000đ/kWh",
            "giaNuoc": "20.000đ/m3",
            "cachTrungTam": "5km",
            "coGac": "không",
            "trangThai": "Còn trống",
            "chuTro": "Phạm Minh Tâm",
            "lienHe": "0914586692",
            "giaDacCoc": "3 triệu",
            "moTa": "minihouse cao cấp, đáp ứng mọi nhu cầu người dùng."
        },
        {
            "id": "006",
            "tieuDe": "CHO THUÊ PHÒNG TRỌ SINH VIÊN",
            "gia": "0.9 triệu/tháng",
            "dienTich": "20m2",
            "vitri": "Hẻm 15, Đường Trần Phú, Phường Xuân Khánh, Quận Ninh Kiều, Cần Thơ",
            "hinhAnh": "../image/anh35.jpg",
            "giaDien": "3.1000đ/kWh",
            "giaNuoc": "16.000đ/m3",
            "cachTrungTam": "1.5km",
            "coGac": "Không",
            "trangThai": "Còn trống",
            "chuTro": "Lê Văn Anh Tuấn",
            "lienHe": "0968315042",
            "giaDacCoc": "0.4 triệu",
            "moTa": "Phòng trọ cho sinh viên, giá rẻ, cách trường Đại Học Cần Thơ 1km."
        },
        {
            "id": "007",
            "tieuDe": "CHO THUÊ PHÒNG TRỌ giá rẻ CÓ GÁC LỬNG",
            "gia": "1.2 triệu/tháng",
            "dienTich": "22m2",
            "vitri": "Hẻm 8, Đường 30/4, Phường An Bình, Quận Ninh Kiều, Cần Thơ",
            "hinhAnh": "../image/anh3.jpg",
            "giaDien": "3.000đ/kWh",
            "giaNuoc": "18.000đ/m3",
            "cachTrungTam": "2.5km",
            "coGac": "Có",
            "trangThai": "Còn trống",
            "chuTro": "Nguyễn Minh Hồng Đào",
            "lienHe": "0977745684",
            "giaDacCoc": "0.6 triệu",
            "moTa": "Phòng trọ có gác lửng, thoáng mát, không ngập, được nuôi thú cưng."
        },
        {
            "id": "008",
            "tieuDe": "CHO THUÊ PHÒNG TRỌ TRUNG TÂM",
            "gia": "2.5 triệu/tháng",
            "dienTich": "28m2",
            "vitri": "Hẻm 9, Đường Nguyễn Đình Chiểu, Phường Hưng Lợi, Quận Ninh Kiều, Cần Thơ",
            "hinhAnh": "../image/anh30.jpg",
            "giaDien": "3.500đ/kWh",
            "giaNuoc": "17.000đ/m3",
            "cachTrungTam": "0.5km",
            "coGac": "Không",
            "trangThai": "Còn trống",
            "chuTro": "Phan Văn Hải Châu",
            "lienHe": "0957835685",
            "giaDacCoc": "1 triệu",
            "moTa": "Phòng trọ trung tâm, tiện nghi đầy đủ, gần cơ quan hành chính và trung tâm thương mại."
        },
        {
            "id": "010",
            "tieuDe": "CHO THUÊ PHÒNG TRỌ CAO CẤP",
            "gia": "5 triệu/tháng",
            "dienTich": "40m2",
            "vitri": "Hẻm 7, Đường Mậu Thân, Phường Xuân Khánh, Quận Ninh Kiều, Cần Thơ",
            "hinhAnh": "../image/anh31.jpg",
            "giaDien": "3.400đ/kWh",
            "giaNuoc": "19.000đ/m3",
            "cachTrungTam": "1.2km",
            "coGac": "Không",
            "trangThai": "Còn trống",
            "chuTro": "Võ Văn Vệ Quốc",
            "lienHe": "0912349775",
            "giaDacCoc": "2 triệu",
            "moTa": "Phòng trọ có ban công, view đẹp, gần quán ăn, siêu thị và trường học."
        },
                {
            "id": "011",
            "tieuDe": "CHO THUÊ PHÒNG TRỌ GẦN KHU ĐẠI HỌC",
            "gia": "1 triệu/tháng",
            "dienTich": "20m2",
            "vitri": "Hẻm 25, Đường Lý Tự Trọng, Phường An Khánh, Quận Ninh Kiều, Cần Thơ",
            "hinhAnh": "../image/anh26.jpg",
            "giaDien": "3.800đ/kWh",
            "giaNuoc": "17.000đ/m3",
            "cachTrungTam": "2km",
            "coGac": "Có",
            "trangThai": "Còn trống",
            "chuTro": "Nguyễn Hoàng Hiếu Nghĩa",
            "lienHe": "0912341975",
            "giaDacCoc": "0.5 triệu",
            "moTa": "Phòng trọ giá rẻ, gần trường Đại học Cần Thơ, giờ giấc tự do."
        }

    ]
}`;

        // localStorage.removeItem("DSPhongTro");
        let arr = JSON.parse(localStorage.getItem("DSPhongTro")) || [];
        
        

        let data = JSON.parse(jsonString).PhongTro;
        for (let i=0;i<arr.length;i++){
            data.push(arr[i]);
        }

        localStorage.setItem("ChiTietPhongTro", JSON.stringify(data));
        console.log(localStorage.getItem("ChiTietPhongTro"));

        

        let filteredData = data;
        let currentPage = 1;
        const itemsPerPage = 8; // Số phòng trọ trên mỗi trang

        function createBox(name, gia, vitri, hinhAnh, dienTich, id, chuTro) {
            const box = document.createElement('div');
            box.classList.add('box');
            box.value = id;
            box.onclick = () => {
                ChiTiet(box.value); // Gọi hàm ChiTiet và truyền id
            };

            const img = document.createElement('img');
            img.src = hinhAnh;
            img.alt = 'Hình phòng trọ';

            const infoDiv = document.createElement('div');

            const h4 = document.createElement('h4');
            h4.textContent = name;

            const pInfo = document.createElement('p');
            pInfo.textContent = gia + " - " + dienTich;

            const pPosition = document.createElement('p');
            pPosition.textContent = vitri;

            // tạo hộp avt-tên    favourite
            const sideBox=document.createElement('div');

            // // Thêm class vào sideBox cho dễ CSS
            // sideBox.classList.addClass('sideBox');

            // // Tạo ảnh
            // const photo= document.createElement('img');
            // photo.src="../image/proprammer.png";
            // photo.classList.addClass('owner');

            // Lấy tên chủ trọ
            const owner =document.createElement('p');
            owner.textContent= chuTro;

            // // Tạo chức năng favourite
            // const fav=document.createElement('img');
            // img.src="../image/programmer.png";
            // img.classList.addClass('favourite');

            // sideBox.appendChild(photo);
            sideBox.appendChild(owner);
            // sideBox.appendChild(fav);

            infoDiv.appendChild(h4);
            infoDiv.appendChild(pInfo);
            infoDiv.appendChild(pPosition);
            infoDiv.appendChild(sideBox);

            box.appendChild(img);
            box.appendChild(infoDiv);

            // Thêm owner và favourite
            box


            document.getElementById('danhSachTro').appendChild(box);
        }
        function ChiTiet(value) {
            localStorage.setItem("chi-tiet", value);
            window.location.href = "../html/chitiet.html";
        }
        

        function displayData(page) {
            document.getElementById('danhSachTro').innerHTML = '';
            const start = (page - 1) * itemsPerPage;
            const end = start + itemsPerPage;
            const paginatedData = filteredData.slice(start, end);

            paginatedData.forEach(phongTro => {
                createBox(phongTro.tieuDe, phongTro.gia, phongTro.vitri,
                    phongTro.hinhAnh, phongTro.dienTich, phongTro.id, phongTro.chuTro);
            });

            setupPagination();
        }
        

        function setupPagination() {
            const totalPages = Math.ceil(filteredData.length / itemsPerPage);
            const paginationDiv = document.getElementById('pagination');
            paginationDiv.innerHTML = '';

            for (let i = 1; i <= totalPages; i++) {
                const button = document.createElement('button');
                button.textContent = i;
                button.onclick = () => {
                    currentPage = i;
                    displayData(currentPage);
                };

                if (i === currentPage) {
                    button.classList.add('active');
                }

                paginationDiv.appendChild(button);
            }
        }
        
        function filterData() {
            const price1 = document.getElementById('price1').checked;
            const price2 = document.getElementById('price2').checked;
            const price3 = document.getElementById('price3').checked;
            const price4 = document.getElementById('price4').checked;
            const price5 = document.getElementById('price5').checked;
            const price6 = document.getElementById('price6').checked;

            const area0 = document.getElementById('area0').checked;
            const area1 = document.getElementById('area1').checked;
            const area2 = document.getElementById('area2').checked;
            const area3 = document.getElementById('area3').checked;
            const area4 = document.getElementById('area4').checked;

            const NinhKieu = document.getElementById('NinhKieu').checked;
            const CaiRang = document.getElementById('CaiRang').checked;
            const BinhThuy = document.getElementById('BinhThuy').checked;
            // const PhongDien = document.getElementById('PhongDien').checked;
            // const OMon = document.getElementById('OMon').checked;

            filteredData = data.filter(phongTro => {
                const price = parseFloat(phongTro.gia);
                const area = parseFloat(phongTro.dienTich);

                const matchPrice = (price1 && price < 1) ||
                    (price2 && price >= 1 && price <= 2) ||
                    (price3 && price >= 2 && price <= 3) ||
                    (price4 && price >= 3 && price <= 4) ||
                    (price5 && price >= 4 && price <= 5) ||
                    (price6 && price > 5) ||
                    (!price1 && !price2 && !price3 && !price4 && !price5 && !price6);

                const matchSize = (area0 && area > 0 && area < 20) ||
                    (area1 && area >= 20 && area <= 30) ||
                    (area2 && area >= 30 && area <= 40) ||
                    (area3 && area >= 40 && area <= 50) ||
                    (area4 && area >= 50) ||
                    (!area0 && !area1 && !area2 && !area3 && !area4);

                const matchLocation = (NinhKieu && phongTro.vitri.includes('Quận Ninh Kiều')) ||
                    (CaiRang && phongTro.vitri.includes('Quận Cái Răng')) ||
                    (BinhThuy && phongTro.vitri.includes('Quận Bình Thủy')) ||
                    // (PhongDien && phongTro.vitri.includes('Huyện Phong Điền')) ||
                    // (OMon && phongTro.vitri.includes('Quận Ô Môn')) ||
                    (!NinhKieu && !CaiRang && !BinhThuy);

                return matchPrice && matchSize && matchLocation;
            });

            currentPage = 1;
            displayData(currentPage);
        }
        function clearCheckBox() {
            const checkboxes = document.querySelectorAll('#price1, #price2, #price3,#area0, #area1, #area2, #area3,#area4,#NinhKieu, #CaiRang, #BinhThuy');
            checkboxes.forEach(checkbox => checkbox.checked = false);
        }       
        function search(event) {
            event.preventDefault(); // Ngăn form bị submit và tải lại trang
            const searchInput = document.getElementById('searchInput').value.toLowerCase();
            filteredData = data.filter(phongTro =>
                phongTro.tieuDe.toLowerCase().includes(searchInput) ||
                phongTro.gia.toLowerCase().includes(searchInput) ||
                phongTro.dienTich.toLowerCase().includes(searchInput) ||
                phongTro.vitri.toLowerCase().includes(searchInput)
            );
            currentPage = 1;
            displayData(currentPage);
        }
        
        
        displayData(currentPage);

        function handleKeyPress(event) {
            if (event.key === 'Enter') {
                search();
            }
        }


        // PHẦN ĐĂNG NHÂP VÀ ĐĂNG KÝ
        function dangnhap() {
            // localStorage.setItem("page-login",true);
            window.location.href = "../html/login.html";
        }

        function dangky() {
            localStorage.setItem("page-login", false);
            window.location.href = "../html/login.html";
        }