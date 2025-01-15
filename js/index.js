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
  console.log("themNV");

  let nhanVien = layThongTinTuForm();

  DSNV.push(nhanVien);
  console.log("DSNV: ", DSNV);

  let jsonDsnv = JSON.stringify(DSnV);

  localStorage.setItem("DSNV", jsonDsnv);
  renderDSNV(DSNV);

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
  let index = DSSV.findIndex((sv) => {
    return nv.tknv == id;
  });
  console.log("index:", index);
  let nhanVien = DSSV[index];
  // đẩy thông tin nhân viên lên form
  showDataForm(nhanVien);
  // chặn user sửa tên tài khoản nhân viên
  document.getElementById("tknv").disabled = true;
};

const capNhatNV = () => {
  // tìm  vị trí của nhân viên cần cập nhật
  let tknv = document.getElementById("tknv").value;
  let index = DSNV.findIndex((sv) => {
    return nv.tknv == tknv;
  });
  // cập nhật thông tin nhân viên tại vị trí index tìm được
  DSNV[index] = layThongTinTuForm();
  // render lại dsnv
  renderDSNV(DSNV);

  resetForm();
};

const resetForm = () => {
  // clear tất cả input trong form
  document.getElementById("form").reset();
  // gỡ readonly mã sinh viên
  document.getElementById("tknv").disabled = false;
};
