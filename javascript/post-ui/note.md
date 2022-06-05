- Project use Vite js for build.
- Use axios for module Api (xem cac config trong file postApi.js)

* setup axios
* pre-Request config (trong postApi.js)
* Interceptors (la cac ham giup có thể xu ly cac cong viec truoc khi gui request hoặc response ) - va ap dung cho tat ca cac Request va reponse (xem trong file axiosClient.js)
* handle API error :
  Note: Goi API di kem voi try catch de handle loi.

* handle loi trong file catch, main.js va trong response interceptor

* Tree shaking : "Tree shaking" là một tối ưu hóa hiệu suất bắt buộc phải có khi đóng gói JavaScript. Nói một cách đơn giản, Tree shaking có nghĩa là xóa code mà không sử dụng đến, hay gọi là code thừa
  => ví dụ đơn giản là : trong 1 module js gồm nhiều hàm, ta chỉ sử dụng 1,2,3 ... hàm, nếu import cả module gây ra thừa.
  => vì vậy sử dụng : name import, export(chỉ import hàm cần sử dụng) thay vì import, export defaut (import cả module)
  => vd: trong api/cityApi

* the <template> trong html : <template> => chứa mã HTML sẽ không được hiển thị ra bởi trình duyệt cho đến khi nó được chỉ định thêm vào tài liệu bởi JavaScript.

* add folder utils : tong hop cac ham lam nhiem vu nao do.

* Use day.js : hien thi thoi gian creat, update cac bai post
  => trong các api tra ve tu backend cho cac bai post, se có key ve time: update, creat bai post.
  => thoi gian o dang minisecond (ms). ta can chuyen ve dang thoi gian thong thuong.

* su dung anh mac dinh khi anh luu trong db bi loi hoac link anh sai.
  => trong home or post.js

* creat func truncate text: de gioi han text hien thi bang js
  => trong file utils/common.js

* Optional chaining (?.) trong js
  => Optional chaining trong Javascript kí hiệu là (?.), dùng để dừng lại quá trình xử lý nếu giá trị trước ?. có kiểu dữ liệu là undefined hoặc null.
  vd : value?.prop => ket qua : value.prop nếu value khác undefined và null. + Ngược lại, nếu value bằng undefined hoặc null thì trả về giá trị undefined.
  => Chú ý: optional chaining trong JavaScript ?. chỉ kiểm tra điều kiện của một giá trị đứng trước nó.
