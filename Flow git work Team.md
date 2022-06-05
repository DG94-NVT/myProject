1. Clone Project on github.
2. - Trước khi Push code, cần Pull code trên Git về trước.
3. Trước khi Pull code, cần lưu các change (code) của mình
   vào stash (bản nháp)

- git add .
- git stash
- Note : Nếu đang ở nhánh phụ
  => cần : git checkout main ---- checkout về nhánh main để pull code trên git về máy (local)
- git pull (Pull về nhánh main)

4. sau khi pull về, tạo nhánh mới khi code 1 feature hay fix bug

- git check out -b feature/pagination
- git stash pop
- git add .
- git commit -m '..'
- creat pull request (add user: lead, user review ) ==> lead review if Oke => merge code
- delete branch
