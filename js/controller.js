const layThongTinTuForm = () => {
  let tknv = document.getElementById("tknv").value;
  let hoTen = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let matKhau = document.getElementById("password").value;
  let ngay = document.getElementById("datepicker").value;
  let luongCB = document.getElementById("luongCB").value * 1;
  let chucVu = document.getElementById("chucvu").value;
  let gioLam = document.getElementById("gioLam").value * 1;

  let nhanVien = new NhanVien(
    tknv,
    hoTen,
    email,
    matKhau,
    ngay,
    luongCB,
    chucVu,
    gioLam
  );

  return nhanVien;
};

const renderDSNV = (DSNV) => {
  let contentHtml = "";

  for (let i = 0; i < DSNV.length; i++) {
    let nhanVien = DSNV[i];

    let tr = ` <tr>
                <td>${nhanVien.tknv}</td>
                <td>${nhanVien.hoTen}</td>
                <td>${nhanVien.email}</td>
                <td>${nhanVien.ngay}</td>
                <td>${nhanVien.chucVu}</td>
                <td>${nhanVien.tinhLuong()}</td>
                <td>${nhanVien.xepLoai()}</td>
                <td>
                <button onclick="suaNV('${nhanVien.tknv}')"
                data-toggle="modal"
                data-target="#myModal" >Sửa</button>
                <button onclick="xoaNV('${nhanVien.tknv}')">Xoá</button></td>
              </tr>`;
    contentHtml += tr;
  }

  document.getElementById("tableDanhSach").innerHTML = contentHtml;
};

const showDataForm = (nv) => {
  document.getElementById("tknv").value = nv.tknv;
  document.getElementById("name").value = nv.hoTen;
  document.getElementById("email").value = nv.email;
  document.getElementById("password").value = nv.matKhau;
  document.getElementById("datepicker").value = nv.ngay;
  document.getElementById("luongCB").value = nv.luongCB;
  document.getElementById("chucvu").value = nv.chucVu;
  document.getElementById("gioLam").value = nv.gioLam;
};
