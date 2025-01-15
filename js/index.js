// Lấy thông tin từ form và đẩy vào mảng DSNV

let DSNV = [];

let dsnvJson = localStorage.getItem("DSNV");

let arrayDsnv = JSON.parse(dsnvJson); // nếu dưới local rỗng thì lấy lên null
console.log("arrayDsnv: ", arrayDsnv);

if (arrayDsnv) {
  DSNV = arrayDsnv.map((nv) => {
    return new NhanVien(
      nv.tknv,
      nv.hoTen,
      nv.email,
      nv.matKhau,
      nv.ngay,
      nv.luongCB,
      nv.chucVu,
      nv.gioLam
    );
  });

  renderDSNV(DSNV);
}

const themNV = () => {
  console.log("");

  let nhanVien = layThongTinTuForm();

  DSNV.push(nhanVien);
  console.log("DSNV: ", DSNV);

  let jsonDsnv = JSON.stringify(DSNV);

  localStorage.setItem("DSNV", jsonDsnv);
  renderDSNV(DSNV);
  // Enable nút thêm và disable nút cập nhật
  document.getElementById("btnThemNV").disabled = false;
  document.getElementById("btnCapNhat").disabled = true;

  resetForm();
};

const xoaNV = (id) => {
  console.log("id:", id);
  // dùng findIndex để tìm vị trí của nhân viên cần xóa
  let index = DSNV.findIndex((nv) => {
    return nv.tknv == id;
  });
  console.log("index:", index);
  DSNV.splice(index, 1);
  renderDSNV(DSNV);
};

const suaNV = (id) => {
  console.log("id:", id);
  // dùng findIndex để tìm nhân viên cần sửa
  let index = DSNV.findIndex((nv) => {
    return nv.tknv == id;
  });
  console.log("index:", index);
  let nhanVien = DSNV[index];
  // đẩy thông tin nhân viên lên form
  showDataForm(nhanVien);

  // chặn user sửa Email
  document.getElementById("email").disabled = true;
  // Enable nút cập nhật và disable nút thêm
  document.getElementById("btnCapNhat").disabled = false;
  document.getElementById("btnThemNV").disabled = true;
};

const capNhatNV = () => {
  // tìm  vị trí của nhân viên cần cập nhật
  let email = document.getElementById("email").value;
  let index = DSNV.findIndex((nv) => {
    return nv.email == email;
  });
  // cập nhật thông tin nhân viên tại vị trí index tìm được
  DSNV[index] = layThongTinTuForm();
  // console.log("Đã cập nhật");
  // render lại dsnv
  renderDSNV(DSNV);
  // cập nhật lại localStorage
  let jsonDsnv = JSON.stringify(DSNV);
  localStorage.setItem("DSNV", jsonDsnv);

  resetForm();
};

// Hàm tìm loại nhân viên theo từ khóa
const timNhanVienTheoTuKhoa = (tuKhoa) => {
  // Chuyển từ khóa và xếp loại về chữ thường để so sánh
  const tuKhoaThuong = tuKhoa.trim().toLowerCase();

  return DSNV.filter((nhanVien) =>
    nhanVien.xepLoai().toLowerCase().includes(tuKhoaThuong)
  );
};

// Tìm kiếm theo thời gian thực
document.getElementById("searchLoaiNhanVien").addEventListener("input", () => {
  const tuKhoa = document.getElementById("searchLoaiNhanVien").value; // Lấy từ khóa
  const ketQua = timNhanVienTheoTuKhoa(tuKhoa); // Tìm nhân viên theo từ khóa

  // Hiển thị kết quả ngay khi nhập
  if (tuKhoa.trim() !== "") {
    renderDSNV(ketQua);
  } else {
    renderDSNV(DSNV); // Hiển thị toàn bộ danh sách nếu không nhập gì
  }
});

const resetForm = () => {
  // clear tất cả input trong form
  document
    .querySelectorAll("#myModal input")
    .forEach((input) => (input.value = ""));
  document
    .querySelectorAll("#myModal select")
    .forEach((select) => (select.selectedIndex = 0));
  document
    .querySelectorAll("#myModal textarea")
    .forEach((textarea) => (textarea.value = ""));
  document
    .querySelectorAll('#myModal input[type="checkbox"]')
    .forEach((checkbox) => (checkbox.checked = false));
  document
    .querySelectorAll('#myModal input[type="radio"]')
    .forEach((radio) => (radio.checked = false));

  // gỡ readonly Email
  document.getElementById("email").disabled = false;
};
