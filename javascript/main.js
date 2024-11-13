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
            "id": "009",
            "tieuDe": "CHO THUÊ PHÒNG TRỌ MỚI XÂY",
            "gia": "3 triệu/tháng",
            "dienTich": "30m2",
            "vitri": "Hẻm 4, Đường Hùng Vương, Phường An Cư, Quận Ninh Kiều, Cần Thơ",
            "hinhAnh": "../image/anh27.jpg",
            "giaDien": "3.300đ/kWh",
            "giaNuoc": "18.500đ/m3",
            "cachTrungTam": "1km",
            "coGac": "Có",
            "trangThai": "Còn trống",
            "chuTro": "Đặng Thị Mỹ Trinh",
            "lienHe": "0912347996",
            "giaDacCoc": "1.5 triệu",
            "moTa": "Phòng trọ mới xây, sạch sẽ, yên tĩnh, khu vực an ninh tốt."
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
        },
        {
            "id": "012",
            "tieuDe": "CHO THUÊ PHÒNG TRỌ SẠCH SẼ, THOÁNG MÁT",
            "gia": "1.5 triệu/tháng",
            "dienTich": "22m2",
            "vitri": "Hẻm 10, Đường Nguyễn Văn Trỗi, Phường Tân An, Quận Ninh Kiều, Cần Thơ",
            "hinhAnh": "../image/anh32.jpg",
            "giaDien": "3.1000đ/kWh",
            "giaNuoc": "15.000đ/m3",
            "cachTrungTam": "1.8km",
            "coGac": "Không",
            "trangThai": "Còn trống",
            "chuTro": "Trần Đại Danh",
            "lienHe": "0195419750",
            "giaDacCoc": "0.7 triệu",
            "moTa": "Phòng trọ sạch sẽ, thoáng mát, gần trường học và chợ."
        },
        {
            "id": "013",
            "tieuDe": "CHO THUÊ PHÒNG TRỌ GIÁ RẺ CHO SINH VIÊN",
            "gia": "0.8 triệu/tháng",
            "dienTich": "18m2",
            "vitri": "Hẻm 5, Đường Võ Văn Kiệt, Phường Trà Nóc, Quận Bình Thủy, Cần Thơ",
            "hinhAnh": "../image/anh34.jpg",
            "giaDien": "3.200đ/kWh",
            "giaNuoc": "16.000đ/m3",
            "cachTrungTam": "3.5km",
            "coGac": "Có",
            "trangThai": "Còn trống",
            "chuTro": "Ngô Minh Tú",
            "lienHe": "0932830576",
            "giaDacCoc": "0.3 triệu",
            "moTa": "Phòng trọ giá rẻ, phù hợp với người lao động."
        },
        {
            "id": "014",
            "tieuDe": "CHO THUÊ PHÒNG TRỌ KHU ĐÔ THỊ MỚI",
            "gia": "2.2 triệu/tháng",
            "dienTich": "26m2",
            "vitri": "Hẻm 14, Đường Nguyễn Văn Linh, Phường Long Tuyền, Quận Bình Thủy, Cần Thơ",
            "hinhAnh": "../image/anh21.jpg",
            "giaDien": "3.600đ/kWh",
            "giaNuoc": "18.000đ/m3",
            "cachTrungTam": "2.2km",
            "coGac": "Không",
            "trangThai": "Còn trống",
            "chuTro": "Võ Hoàng Kim Liên",
            "lienHe": "0955545691",
            "giaDacCoc": "0.9 triệu",
            "moTa": "Phòng trọ khu đô thị mới, tiện nghi đầy đủ, giờ giấc tự do."
        },
        {
            "id": "015",
            "tieuDe": "CHO THUÊ PHÒNG TRỌ TẠI THỚI LAI",
            "gia": "1.3 triệu/tháng",
            "dienTich": "24m2",
            "vitri": "Đường Võ Thị Điệp, Thị Trấn Thới Lai, Huyện Thới Lai, Cần Thơ",
            "hinhAnh": "../image/anh9.jpg",
            "giaDien": "3.000đ/kWh",
            "giaNuoc": "15.500đ/m3",
            "cachTrungTam": "10km",
            "coGac": "Có",
            "trangThai": "Còn trống",
            "chuTro": "Lê Nguyễn Bảo Ngân",
            "lienHe": "0968745692",
            "giaDacCoc": "0.6 triệu",
            "moTa": "Phòng trọ giá rẻ, yên tĩnh, phù hợp với người lao động."
        },
        {
            "id": "016",
            "tieuDe": "CHO THUÊ NHÀ NGUYÊN CĂN TIỆN NGHI",
            "gia": "6.5 triệu/tháng",
            "dienTich": "50m2",
            "vitri": "Đường Nguyễn Văn Linh, Phường Hưng Thạnh, Quận Cái Răng, Cần Thơ",
            "hinhAnh": "../image/anh2.jpg",
            "giaDien": "3.700đ/kWh",
            "giaNuoc": "18.500đ/m3",
            "cachTrungTam": "4.5km",
            "coGac": "Có",
            "trangThai": "Còn trống",
            "chuTro": "Nguyễn Hữu Thịnh",
            "lienHe": "0973045693",
            "giaDacCoc": "2 triệu",
            "moTa": "Nhà nguyên căn tiện nghi, giao thông thuận tiện, gần chợ, phù hợp cho gia đình."
        },
        {
            "id": "017",
            "tieuDe": "CHO THUÊ PHÒNG TRỌ KHU YÊN TĨNH",
            "gia": "1.1 triệu/tháng",
            "dienTich": "19m2",
            "vitri": "Hẻm 3, Đường Lê Lợi, Phường Long Tuyền, Quận Bình Thủy, Cần Thơ",
            "hinhAnh": "../image/anh19.jpg",
            "giaDien": "3.300đ/kWh",
            "giaNuoc": "17.000đ/m3",
            "cachTrungTam": "3km",
            "coGac": "Không",
            "trangThai": "Còn trống",
            "chuTro": "Nguyễn Bảo Nguyên",
            "lienHe": "0911935694",
            "giaDacCoc": "0.5 triệu",
            "moTa": "Phòng trọ khu yên tĩnh, gần trung tâm y tế và trường tiểu học Bình Thủy."
        },
        {
            "id": "018",
            "tieuDe": "CHO THUÊ PHÒNG TRỌ RỘNG RÃI",
            "gia": "3 triệu/tháng",
            "dienTich": "30m2",
            "vitri": " Đường Châu Văn Liêm, Phường Châu Văn Liêm, Quận Ô Môn, Cần Thơ",
            "hinhAnh": "../image/anh25.jpg",
            "giaDien": "3.200đ/kWh",
            "giaNuoc": "16.500đ/m3",
            "cachTrungTam": "8km",
            "coGac": "Có",
            "trangThai": "Còn trống",
            "chuTro": "Thạch Ngọc Cường",
            "lienHe": "0821345695",
            "giaDacCoc": "1 triệu",
            "moTa": "Phòng trọ rộng rãi, thoáng mát, gần UBND quận Ô Môn ."
        },
        {
            "id": "019",
            "tieuDe": "CHO THUÊ PHÒNG TRỌ CHO NGƯỜI LAO ĐỘNG",
            "gia": "0.9 triệu/tháng",
            "dienTich": "18m2",
            "vitri": " Đường Tây Đô, Huyện Phong Điền, Cần Thơ",
            "hinhAnh": "../image/anh28.jpg",
            "giaDien": "3.000đ/kWh",
            "giaNuoc": "14.000đ/m3",
            "cachTrungTam": "16km",
            "coGac": "Có",
            "trangThai": "Còn trống",
            "chuTro": "Dương Gia Bảo",
            "lienHe": "07912345695",
            "giaDacCoc": "0.5 triệu",
            "moTa": "Phòng trọ rộng rãi, thoáng mát, gần chợ Phong Điền."
        },
        {
            "id": "020",
            "tieuDe": "CHO THUÊ PHÒNG TRỌ CAO CẤP",
            "gia": "6 triệu/tháng",
            "dienTich": "45m2",
            "vitri": " Đường Lý Tự Trọng, Phường AN Cư, Quận Ninh Kiều, Cần Thơ",
            "hinhAnh": "../image/anh5.jpg",
            "giaDien": "3.200đ/kWh",
            "giaNuoc": "16.700đ/m3",
            "cachTrungTam": "1km",
            "coGac": "Có",
            "trangThai": "Còn trống",
            "chuTro": "Thanh Trần Bảo Nguyên",
            "lienHe": "0945695123",
            "giaDacCoc": "3 triệu",
            "moTa": "Phòng trọ rộng rãi, đầy đủ mọi tiện nghi, gần trung tâm thành phố, gần trung tâm thương mại, an ninh tốt."
        },
        {
            "id": "021",
            "tieuDe": "CHO THUÊ NHÀ NGUYÊN CĂN RỘNG RÃI",
            "gia": "8 triệu/tháng",
            "dienTich": "52m2",
            "vitri": " Đường Nam Kỳ Khởi Nghĩa, Phường Tân An, Quận Ninh Kiều, Cần Thơ",
            "hinhAnh":"../image/anh33.jpg",
            "giaDien": "3.200đ/kWh",
            "giaNuoc": "18.500đ/m3",
            "cachTrungTam": "800m",
            "coGac": "Có",
            "trangThai": "Còn trống",
            "chuTro": "Bùi Nguyễn Trung Dân",
            "lienHe": "0905678910",
            "giaDacCoc": "4  triệu",
            "moTa": "Nhà đầy đủ nội thất, gần các cơ sở y tế và trường học, an ninh tốt."
        },
        {
            "id": "022",
            "tieuDe": "CHO THUÊ CĂN HỘ CAO CẤP",
            "gia": "7,5triệu/tháng",
            "dienTich": "45m2",
            "vitri": " Đường 30/4, Phường Xuân Khánh, Quận Ninh Kiều, Cần Thơ",
            "hinhAnh": "../image/anh8.jpg",
            "giaDien": "4.500đ/kWh",
            "giaNuoc": "19.000đ/m3",
            "cachTrungTam": "1.2km",
            "coGac": "Có",
            "trangThai": "Còn trống",
            "chuTro": "Lý Thanh Cường",
            "lienHe": "0978044235",
            "giaDacCoc": "3 triệu",
            "moTa": "Căn hộ đầy đủ nội thất, tiện nghi, yên tĩnh, hàng xóm thân thiện, gần trung tâm thương mại, cách trường Đại Học Cần Thơ 1.5km."
        },
        {
            "id": "023",
            "tieuDe": "CHO THUÊ PHÒNG TRỌ GẦN TRƯỜNG ĐẠI HỌC ",
            "gia": "1.5 triệu/tháng",
            "dienTich": "20m2",
            "vitri": "Hẻm liên tổ 9-10, Đường Nguyễn Văn Cừ, Phường An Khánh, Quận Ninh Kiều, Cần Thơ",
            "hinhAnh": "../image/anh20.png",
            "giaDien": "3.200đ/kWh",
            "giaNuoc": "17.000đ/m3",
            "cachTrungTam": "5km",
            "coGac": "Có",
            "trangThai": "Còn trống",
            "chuTro": "Nguyễn Bảo Ngọc Châu",
            "lienHe": "0932145688",
            "giaDacCoc": "0.9 triệu",
            "moTa": "Phòng trọ giá rẻ, cách trường Đại Học Y Dược Cần Thơ 700m."
        },
        {
            "id": "024",
            "tieuDe": "CHO THUÊ PHÒNG TRỌ SẠCH SẼ, THOÁNG MÁT",
            "gia": "3 triệu/tháng",
            "dienTich": "20m2",
            "vitri": " Đường Nguyễn Trần Nam Phú, Phường An Khánh, Quận Ninh Kiều, Cần Thơ",
            "hinhAnh": "../image/anh18.jpg",
            "giaDien": "3.000đ/kWh",
            "giaNuoc": "15.000đ/m3",
            "cachTrungTam": "4.8km",
            "coGac": "Không",
            "trangThai": "Còn trống",
            "chuTro": "Dương Bảo Nhật Minh",
            "lienHe": "0945689213",
            "giaDacCoc": "1 triệu",
            "moTa": "Phòng trọ sạch sẽ,giờ giấc tự do, được nuôi thú cưng, cách trường Đại Học Y Dược Cần Thơ 400m."
        },
        {
            "id": "025",
            "tieuDe": "CHO THUÊ PHÒNG TRỌ BÌNH DÂN",
            "gia": "0.8 triệu/tháng",
            "dienTich": "18m2",
            "vitri": "Đường Lê Hồng Phong, Phường Trà Nóc, Quận Bình Thủy, Cần Thơ",
            "hinhAnh":"../image/anh36.jpg",
            "giaDien": "3.200đ/kWh",
            "giaNuoc": "16.000đ/m3",
            "cachTrungTam": "3.5km",
            "coGac": "Có",
            "trangThai": "Còn trống",
            "chuTro": "Lý Thị Tuyết Vân",
            "lienHe": "0341295690",
            "giaDacCoc": "0.4 triệu",
            "moTa": "Phòng trọ giá rẻ,gần khu công nghiệp Trà Nóc."
        },
        {
            "id": "026",
            "tieuDe": "CHO THUÊ PHÒNG TRỌ CHO NGƯỜI LAO ĐỘNG, GẦN KHU CÔNG NGHIỆP",
            "gia": "1.8 triệu/tháng",
            "dienTich": "24m2",
            "vitri": "Hẻm 10, Đường Nguyễn Thông, Phường Long Hòa, Quận Bình Thủy, Cần Thơ",
            "hinhAnh": "../image/anh17.jpg",
            "giaDien": "3.500đ/kWh",
            "giaNuoc": "18.000đ/m3",
            "cachTrungTam": "4km",
            "coGac": "Không",
            "trangThai": "Còn trống",
            "chuTro": "Trần Nguyễn Minh Hoàng",
            "lienHe": "0969145123",
            "giaDacCoc": "0.5 triệu",
            "moTa": "Phòng trọ gần khu công nghiệp Trà Nóc, phù hợp người đi làm."
        },
        {
            "id": "027",
            "tieuDe": "CHO THUÊ PHÒNG TRỌ NGOẠI Ô ",
            "gia": "1.3 triệu/tháng",
            "dienTich": "19m2",
            "vitri": "Đường Nguyễn Văn Cừ, Phường An Bình, Quận Ninh Kiều, Cần Thơ",
            "hinhAnh": "../image/anh15.jpg",
            "giaDien": "2.900đ/kWh",
            "giaNuoc": "15.000đ/m3",
            "cachTrungTam": "9.2km",
            "coGac": "Có",
            "trangThai": "Còn trống",
            "chuTro": "Nguyễn Thị Minh Nhi",
            "lienHe": "0932145688",
            "giaDacCoc": "0.9 triệu",
            "moTa": "Phòng trọ giá rẻ, cách trường Đại Học Nam Cần Thơ 300m."
        },
        {
            "id": "028",
            "tieuDe": "CHO THUÊ PHÒNG TRỌ BÌNH DÂN",
            "gia": "0.8 triệu/tháng",
            "dienTich": "20m2",
            "vitri": " Đường Xuân Hồng, Phường An Bình, Quận Bình Thủy, Cần Thơ",
            "hinhAnh": "../image/anh37.jpg",
            "giaDien": "3.1000đ/kWh",
            "giaNuoc": "15.000đ/m3",
            "cachTrungTam": "8km",
            "coGac": "Không",
            "trangThai": "Còn trống",
            "chuTro": "Lê Ngọc Minh Tuấn",
            "lienHe": "0949567143",
            "giaDacCoc": "0.4 triệu",
            "moTa": "Phòng trọ sạch sẽ,giờ giấc tự do,yên tĩnh,cách bệnh viện nhi đồng Cần Thơ 200m."
        },
        {
            "id": "029",
            "tieuDe": "CHO THUÊ PHÒNG TRỌ SINH VIEN",
            "gia": "1.4 triệu/tháng",
            "dienTich": "18m2",
            "vitri": "Hẻm 311, Đường Nguyễn Văn Cừ, Phường An Hòa, Quận Ninh Kiều, Cần Thơ",
            "hinhAnh":"../image/anh4.jpg" ,
            "giaDien": "3.500đ/kWh",
            "giaNuoc": "16.500đ/m3",
            "cachTrungTam": "3km",
            "coGac": "Có",
            "trangThai": "Còn trống",
            "chuTro": "Phạm Quang Vinh",
            "lienHe": "0942345690",
            "giaDacCoc": "0.4 triệu",
            "moTa": "Phòng trọ giá rẻ, Giao Thông tiện lợi cho sinh viên, Cách Trường Đại Học Công Nghệ và Kỹ Thuật Cần Thơ 150m ."
        },
        {
            "id": "030",
            "tieuDe": "CHO THUÊ PHÒNG TRỌ TIỆN NGHI, AN NINH TỐT",
            "gia": "2.5tr triệu/tháng",
            "dienTich": "31m2",
            "vitri": "Đường Phạm Hùng, Phường Lê Bình, Quận Cái Răng, Cần Thơ",
            "hinhAnh":"../image/anh24.jpg" ,
            "giaDien": "3.200đ/kWh",
            "giaNuoc": "15.500đ/m3",
            "cachTrungTam": "5km",
            "coGac": "Không",
            "trangThai": "Còn trống",
            "chuTro": "Trần Gia Minh",
            "lienHe": "0912389135",
            "giaDacCoc": "0.7 triệu",
            "moTa": "Phòng trọ nằm trên trục đường chính vào quận Ninh Kiều Cần Thơ, nằm đối diện công an quận Cái Răng."
        },
        {
            "id": "031",
            "tieuDe": "CHO THUÊ PHÒNG TRỌ TẠI THỊ TRẤN THỚI LAI",
            "gia": "1 triệu/tháng",
            "dienTich": "18m2",
            "vitri": "Lộ Bà Đầm, Thị Trấn Thới Lai, Huyện Thới Lai, Cần Thơ",
            "hinhAnh": "../image/anh7.jpg",
            "giaDien": "2.8000đ/kWh",
            "giaNuoc": "15.500đ/m3",
            "cachTrungTam": "10km",
            "coGac": "Có",
            "trangThai": "Còn trống",
            "chuTro": "Đỗ Tú Tài",
            "lienHe": "0966345692",
            "giaDacCoc": "0.6 triệu",
            "moTa": "Phòng trọ giá rẻ, yên tĩnh, phù hợp với người lao động, đối diện UBND Thị Trấn Thới Lai."
        },
        {
            "id": "032",
            "tieuDe": "CHO THUÊ PHÒNG TRỌ QUẬN Ô MÔN",
            "gia": "2.5 triệu/tháng",
            "dienTich": "25m2",
            "vitri": " Đường Kim Đông, Phường Châu Văn Liêm, Quận Ô Môn, Cần Thơ",
            "hinhAnh": "../image/anh29.jpg",
            "giaDien": "3.200đ/kWh",
            "giaNuoc": "16.000đ/m3",
            "cachTrungTam": "8km",
            "coGac": "Có",
            "trangThai": "Còn trống",
            "chuTro": "Danh Võ Trạng Nguyên",
            "lienHe": "0821345695",
            "giaDacCoc": "1 triệu",
            "moTa": "Phòng trọ rộng rãi, thoáng mát, yên tĩnh, gần Chợ Ô Môn ."
        }

    ]
}`;




       // localStorage.removeItem("DSPhongTro");

       
        let arr = JSON.parse(localStorage.getItem("DSPhongTro")) || [];
        
        

        let data = JSON.parse(jsonString).PhongTro;
        localStorage.setItem('DuLieuTro',JSON.parse(jsonString).PhongTro)
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

            const anhTro = document.createElement('img');
            anhTro.src = hinhAnh;
            anhTro.alt = 'Hình phòng trọ';

            const infoDiv = document.createElement('div');
            infoDiv.classList.add('inforDiv')

            const h4 = document.createElement('h4');
            h4.textContent = name;

            const pInfo = document.createElement('p');
            pInfo.textContent = gia + " - " + dienTich;

            const pPosition = document.createElement('p');
            pPosition.textContent = vitri;

            // tạo hộp avt-tên    favourite
            const sideBox=document.createElement('div');

            // // Thêm class vào sideBox cho dễ CSS
            sideBox.classList.add('sideBox');
        

            // Tạo ảnh
            const photo= document.createElement('img');
            photo.src="../image/user.png";
            photo.classList.add('ownerPhoto');

            // Lấy tên chủ trọ
            const owner =document.createElement('p');
            owner.textContent= chuTro;
            owner.classList.add('ownerName');

            // Tạo chức năng favorite
            const fav=document.createElement('img');
            fav.src="../image/heart0.png";
            fav.classList.add('favorite');
            sideBox.appendChild(photo);
            sideBox.appendChild(owner);
            sideBox.appendChild(fav);

            infoDiv.appendChild(h4);
            infoDiv.appendChild(pInfo);
            infoDiv.appendChild(pPosition);
            infoDiv.appendChild(sideBox);

            box.appendChild(anhTro);
            box.appendChild(infoDiv);

            // Thêm owner và favorite
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
            const PhongDien = document.getElementById('PhongDien').checked;
            const OMon = document.getElementById('OMon').checked;

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
                    (PhongDien && phongTro.vitri.includes('Huyện Phong Điền')) ||
                    (OMon && phongTro.vitri.includes('Quận Ô Môn')) ||
                    (!NinhKieu && !CaiRang && !BinhThuy && !OMon && !PhongDien);

                return matchPrice && matchSize && matchLocation;
            });

            currentPage = 1;
            displayData(currentPage);
        }
        function clearCheckBox() {
            const checkboxes = document.querySelectorAll('#price1, #price2, #price3,#price4,#price5,#price6,#area0, #area1, #area2, #area3,#area4,#NinhKieu, #CaiRang, #BinhThuy, #OMon, #PhongDien');
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

        function dangky(e) {
            localStorage.setItem("page-login", false);
            window.location.href = "../html/login.html";
        }


