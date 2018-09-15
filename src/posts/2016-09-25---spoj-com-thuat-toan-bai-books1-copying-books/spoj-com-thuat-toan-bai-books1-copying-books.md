---
title: "SPOJ.COM – Thuật toán bài BOOKS1 – Copying Books"
date: "2016-09-25T19:59:18.083Z"
categories: ["spoj", "Chia để trị - Divide and Conquer"]
tags: ["phạm văn lâm", "spoj.com", "thuật toán", "thuật toán spoj.com", "chia để trị divide and conquer"]
keywords: "Thuật toán bài BOOKS1"
---

## **Đề bài:**

Trước khi máy photo sách được phát minh ra, việc tạo ra một bản photo cho một quyển sách là vô cùng khó khăn. Tất cả nội dung phải được ghi chép lại bằng tay. Một người thợ được đưa cho quyển sách và anh ta phải hoàn thành nó sau một vài tháng. Một trong những người thợ nổi tiếng sống ở thế kỉ 15, và tên anh ta là Tèo. Nhưng dù sao thì công việc cũng vô cùng chán và buồn tẻ. Và chỉ có một cách để cải thiện tình hình đó là thuê những người thợ khác. 

Hồi đó, có một đoàn múa hát muốn trình diễn một vở kịch rất nổi tiếng. Kịch bản được chia ra làm nhiều cuốn. Và diễn viên cần có nhiều bản copy của chúng. Tưởng tượng rằng bạn có m cuốn sách (đánh số từ 1, 2,…, m) có số trang lần lượt là p[1], p[2], …, p[m]. Và bạn phải tạo ra bản copy của mỗi cuốn đó. Nhiệm vụ của bạn là chia m cuốn sách đó cho k người thợ, k <= m. Mỗi cuốn chỉ phép giao cho một người thợ duy nhất. Và mỗi người thợ phải nhận những cuốn sách liên tiếp nhau. Có nghĩa là tồn tại một dãy số tăng dần thoả mãn 0 = b[0] < b[1] < b[2] < … < b[k] = m sao cho người thợ thứ i lấy những cuốn sách được đánh số giữa b[i-1] + 1 và b[i]. Thời gian để tạo ra bản copy của tất cả những cuốn sách được xác định dựa trên người thợ nhận nhiều việc nhất. Vì vậy, nhiệm vụ đặt ra là tối thiểu hoá số lượng trang sách lớn nhất được giao cho mỗi người thợ. Hãy tìm ra giải pháp cho vấn đề này.

### **Đầu vào:**

Đầu vào gồm N trường hợp (N <= 200). Bắt đầu là số nguyên dương N, là số lượng trường hợp. Sau đó là các trường hợp. Mỗi cái gồm chính xác 2 dòng. Dòng đầu tiên gồm 2 số nguyên m và k, 1 <= k <= m <= 500\. Dòng thứ hai bao gồm các số p1, p2,…, pm phân cách nhau bởi dấu cách. Tất cả giá trị này đều là số dương và nhỏ hơn 10000000.

### **Đầu ra:**

Với mỗi trường hợp, in ra trên một dòng , bao gồm dãy p1, p2,…, pm được chia làm k phần. Sao cho tổng lớn nhất của mỗi phần là nhỏ nhất. Và ưu tiên cho những người thợ đầu tiên trước – nghĩa là người thợ đầu tiên làm ít hơn người thợ thứ 2, … Sử dụng dấu ‘/’ để phân cách các phần. Có 1 dấu cách duy nhất giữa 2 số liên tiếp; giữa số và ‘/’.

### **Ví dụ:**

**Đầu vào:** 

2 

9 3

100 200 300 400 500 600 700 800 900 

5 4 

100 100 100 100 100 

**Đầu ra:** 

100 200 300 400 500 / 600 700 / 800 900 

100 / 100 / 100 / 100 100 

**Giải thích:** 

+ Trường hợp thứ nhất, tổng lớn nhất của mỗi phần là 1700 

+ Trường hợp thứ hai, tổng lớn nhất mỗi phần là 200 

_Các bạn có thể tham khảo đề bài tiếng anh và submit code tại: [http://www.spoj.com/problems/BOOKS1/](http://www.spoj.com/problems/BOOKS1/)_

### **Phân tích:**

+ Với bài toán số lượng đầu vào khá lớn như này, ta sẽ không thể sử dụng thuật toán [vét cạn - Brute force](/category/vet-can-brute-force/) + Ở đây ta sẽ dùng thuật toán [chia để trị - Divide and Conquer](/category/chia-de-tri-divide-and-conquer/).

## **Lời giải:**

(Các bạn nên tự mình nghĩ ra thuật của bài toán trước khi tham khảo code của tôi nhé. Hãy phát huy tối đa khả năng sáng tạo của bản thân. Hơn nữa code tôi viết ra cũng chưa thật sự tối ưu. Nên rất mong nhận được sự chia sẻ của các bạn.)

### **Code C/C++:**

`gist:completejavascript/2f5addb15eaea55ac80b675d3b04de65`

_Code by Phạm Văn Lâm_