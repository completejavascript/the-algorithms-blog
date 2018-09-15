---
title: "SPOJ.COM – Thuật toán bài AFS – Amazing Factor Sequence"
date: "2016-09-25T20:11:18.083Z"
categories: ["spoj", "Quy hoạch động - Dynamic programming"]
tags: ["phạm văn lâm", "spoj.com", "thuật toán", "thuật toán spoj.com", "quy hoạch động dynamic programming"]
keywords: "Thuật toán bài AFS"
---

## **Đề bài:**

Thái là bạn cùng lớp với Học – người rất giỏi về lập trình và đã tạo ra dãy số nguyên tố rất hay. Thái cảm thấy ghen tị với Học nên quyết định tạo nên dãy số cho riêng mình. Bởi vì anh ấy không quá sáng tạo, nên đã tạo ra một dãy với định nghĩa tương tự như của Học, chỉ khác ở f(n), cụ thể là: 

* a[0] = a[1] = 0; 

* Với n > 1, a[n] = a[n-1] + f(n), trong đó, f(n) là tổng các số nguyên dương ở tập S 

* Với S = {x | x < n và n % x = 0}

Bây giờ, Học đã yêu cầu Thái lập trình để tìm ra f(n) – như Thái đã định nghĩa. Do đó, Thái mong muốn sự giúp đỡ của bạn bởi vì anh ta không biết về lập trình. Nhiệm vụ của bạn đơn giản là tìm a[n] với số n cho trước (n < 10^6)

### **Đầu vào:**

Bạn được cho nhiều test case. Dòng đầu tiên bao gồm số T (T <= 100), tổng số test case. T dòng tiếp theo chứa một số nguyên dương duy nhất N với 1 < N < 10^6.

### **Đầu ra:**

Mỗi test case, in ra một dòng duy nhất là số a[n], được định nghĩa như trên.

### **Ví dụ:**

**Đầu vào:** 

3 

3 

4 

5 

**Đầu ra:** 

2 

5 

6 

**Giải thích:** 

f(2) = 1 {1} 

f(3) = 1 {1} 

f(4) = 3 {1, 2} 

f(5) = 1 {1} 

**Do đó:** 

a[2] = a[1] + f[2] = 0 + 1 = 1; 

a[3] = a[2] + f[3] = 1 + 1 = 2; 

a[4] = a[3] + f[4] = 2 + 3 = 5; 

a[5] = a[4] + f[5] = 5 + 1 = 6; 

_Các bạn có thể tham khảo đề bài tiếng anh và submit tại đây: [http://www.spoj.com/problems/AFS/](http://www.spoj.com/problems/AFS/)_

### **Phân tích:**

+ Ở đây ta có thể áp dụng đúng công thức để tính cho mỗi test case. Tuy nhiên, như vậy sẽ dẫn đến việc phải lập lại quá trình tính toán rất nhiều. Điều này sẽ dẫn đến time limit. 

+ Khi đó thuật toán ta phải dùng là thuật toán [quy hoạch động - Dynamic programming](/category/quy-hoach-dong-dynamic-programming/). Đối với những bài toán kiểu này, ta sẽ tính toán một lần và lưu kết quả đó vào một mảng. Như vậy, ta chỉ cần tính toán một lần. Và với mỗi test case chỉ in ra kết quả.

## **Lời giải:**

(Các bạn nên tự mình nghĩ ra thuật toán của bài toán trước khi tham khảo code của tôi nhé. Hãy phát huy tối đa khả năng sáng tạo của bản thân. Hơn nữa code tôi viết ra cũng chưa thật sự tối ưu. Nên rất mong nhận được sự chia sẻ của các bạn.)

### **Code C/C++:**

`gist:completejavascript/f2e88ca80ec0490d8d710bcf7f5abc3a`

_Code by Phạm Văn Lâm_

