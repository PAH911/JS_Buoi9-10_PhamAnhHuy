class NhanVien {
  constructor(
    _tknv,
    _hoTen,
    _email,
    _matKhau,
    _ngay,
    _luongCB,
    _chucVu,
    _gioLam
  ) {
    this.tknv = _tknv;
    this.hoTen = _hoTen;
    this.email = _email;
    this.matKhau = _matKhau;
    this.ngay = _ngay;
    this.luongCB = _luongCB;
    this.chucVu = _chucVu;
    this.gioLam = _gioLam;
  }

  tinhLuong() {
    if (this.chucVu === "Sếp") {
      return this.luongCB * 3;
    } else if (this.chucVu === "Trưởng phòng") {
      return this.luongCB * 2;
    } else if (this.chucVu === "Nhân viên") {
      return this.luongCB;
    }
  }

  xepLoai() {
    if (this.gioLam >= 192) {
      return "Xuất sắc";
    } else if (this.gioLam >= 176) {
      return "Giỏi";
    } else if (this.gioLam >= 160) {
      return "Khá";
    } else {
      return "Trung bình";
    }
  }
}
