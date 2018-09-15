---
title: "SPOJ.COM – Thuật toán bài FCTRL - Factorial"
date: "2016-12-04T16:36:18.083Z"
categories: ["spoj", "Tham lam - Greedy"]
tags: ["phạm văn lâm", "spoj.com", "thuật toán", "thuật toán spoj.com", "tham lam greedy"]
keywords: "Thuật toán bài FCTRL"
---

## Đề bài:

Thành phần quan trọng nhất của mạng GSM là _Base Transceiver Station (BTS)._ Những thiết bị này xác định một vùng gọi là cells và mỗi điện thoại kết nối với BTS với cường độ tín hiệu mạnh nhất. Dĩ nhiên những BTS này cần được chú ý và những nhà chuyên môn cần kiểm tra chúng định kì. 

Những chuyên gia ACM gần đây đã đối mặt với một vấn đề thú vị. Cho trước một tập những BTS cần thăm, họ cần phải tìm ra đường đi ngắn nhất để thăm tất cả những điểm đó và quay về điểm trung tâm. Những lập trình viên đã dành vài tháng để nghiên cứu về vấn đề này và chưa có kết quả. Họ không thể tìm ra giải pháp nào đủ nhanh. Sau một thời gian dài, một lập trình viên đã tìm ra vấn đề này ở một hội nghị. Không may anh ta nhận ra rằng vấn đề này được gọi là "Travelling Salesman Problem" và nó khó để giải quyết. Nếu chúng ta có N BTS để thăm, chúng ta có thể thăm chúng theo thứ tự ngẫu nhiên, cho kết quả là N!. Cái này được gọi là giai thừa và có thể được tính là tích ```1*2*3*4...N```. Kết quả có thể là rất cao dù cho số N là tương đối nhỏ. 

Các lập trình viên hiểu rằng không có cơ hội nào để giải quyết bài toán này. Nhưng bởi vì họ đã nhận được trợ cấp nghiên cứu của chính phủ, do đó họ phải tiếp tục nghiên cứu và đưa ra ít nhất một vài kết quả. Vì vậy họ đã bắt đầu nghiên cứu cách thức hoạt động của hàm tính giai thừa. 

Ví dụ, họ định nghĩa một hàm Z. Với bất kì số nguyên dương N nào, Z(N) là những số 0 ở cuối của kết quả dạng thập phân của N!. Họ nhận ra rằng kết quả này sẽ không giảm . Nếu có 2 số <var>N</var><sub>1</sub><<var>N</var><sub>2</sub>, thì <var>Z</var>(<var>N</var><sub>1</sub>) <= <var>Z</var>(<var>N</var><sub>2</sub>). Nó là bởi vì họ sẽ không thể làm mất đi những số 0 bởi việc nhân với bất kì số nguyên dương nào. Chúng ta chỉ có thể có thêm một hoặc nhiều số 0 mới. Hàm Z khá là thú vị, vì vậy chúng ta cần có một chương trình để tính nó một cách hiệu quả nhất.

### Đầu vào:

Bắt đầu bằng số nguyên T, T <= 10000, là số lượng test case. Sau đó là T số nguyên theo sau, mỗi số ở một dòng, có giá trị từ 1 đến 1000000000.

### Đầu ra:

Với mỗi test case, in ra kết quả là một số nguyên không âm, là kết quả của Z(N).

### Ví dụ:

**Đầu vào:**

```
6
3
60
100
1024
23456
8735373
```

**Đầu ra:**

```
0
14
24
253
5861
2183837
```

Các bạn có thể tham khảo link gốc đề bài và submit code tại đây: [http://www.spoj.com/problems/FCTRL/](http://www.spoj.com/problems/FCTRL/)

### Phân tích:

  * Bài này đầu vào cho số N tối đa là 1000000000\. Do đó tôi không thể tính toán trực tiếp được. Bài này tôi sẽ sử dụng [thuật toán tham lam greedy](/category/tham-lam-greedy/) để giải quyết.
  
  * Tôi nhận ra rằng là ```5 * 2 = 10```. Nghĩa là số N tăng lên 5 đơn vị thì tôi sẽ có thêm một số 0. 
  
    ```
    5! = 120 => Z(5) = 1 
    10! = 3628800 => Z(10) = 2 
    15! = 1307674368000 => Z(15) = 3 ...
    ```
  
  * Từ đó tôi triển khai được thuật toán tham lam như sau đây. Mời các bạn theo dõi.

## Lời giải:

(Các bạn nên tự mình nghĩ ra thuật toán của bài toán trước khi tham khảo code của tôi nhé. Hãy phát huy tối đa khả năng sáng tạo của bản thân. Hơn nữa code tôi viết ra cũng chưa thật sự tối ưu. Nên rất mong nhận được sự chia sẻ của các bạn.)

### Code C/C++:

`gist:completejavascript/ca409c5e279a07d1d53c983700392a4e`

_Code by Phạm Văn Lâm._