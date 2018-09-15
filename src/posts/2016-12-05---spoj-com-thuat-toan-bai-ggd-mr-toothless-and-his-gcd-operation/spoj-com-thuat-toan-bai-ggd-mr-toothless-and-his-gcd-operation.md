---
title: "SPOJ.COM – Thuật toán bài GGD - Mr Toothless and His GCD Operatione"
date: "2016-12-05T22:46:18.083Z"
categories: ["spoj", "Chia để trị - Divide and Conquer", "Tham lam - Greedy"]
tags: ["phạm văn lâm", "spoj.com", "thuật toán", "thuật toán spoj.com", "chia để trị divide and conquer", "tham lam greedy"]
keywords: "Thuật toán bài GGD"
---

## Đề bài:

Bạn được cho một số N và bạn phải tìm ra hai số a và b sao cho GCD(a, b) (ước chung lớn nhất của a và b) là lớn nhất có thể. Trong đó **1<=a<b<=N**.

### Đầu vào:

Bắt đầu với số T (<= 100) - là số lượng test case. Mỗi test case sẽ bao gồm một số N duy nhất (**2 ≤ N ≤ 10<sup>6</sup>**).

### Đầu ra:

Với mỗi test case, in ra hai số a và b thỏa mãn. Nếu có nhiều test case thỏa mãn thì in ra cặp a và b thỏa mãn a + b là lớn nhất.

### Ví dụ:

**Đầu vào:** 

1 2 

**Đầu ra:** 

Case 1: 1 2 

Các bạn có thể tham khảo link gốc đề bài và submit code tại đây: [http://www.spoj.com/problems/GGD/](http://www.spoj.com/problems/GGD/) 

**_Problem Setter: Md Abdul Alim, Department of CSE, Bangladesh University of Business & Technology_**

### Phân tích:

  * Trước tiên tôi áp dụng [thuật toán tham lam Greedy](/category/tham-lam-greedy/) để tìm ra chìa khóa của bài toán. Tôi nhận ra rằng để ước chung lớn nhất của 2 số a và b là lớn nhất thì 2 số đó phải thỏa mãn là ```b = 2*a```. Lúc này thực chất là tôi phải tìm ra số a lớn nhất thỏa mãn ```b = 2*a```. 
  
  * Để làm được điều này một cách nhanh nhất tôi sẽ áp dụng [thuật toán chia để trị Divide and Conquer](/category/chia-de-tri-divide-and-conquer/) để giải quyết được nhanh hơn. Đối với việc áp dụng phương pháp chia để trị này thì việc đầu tiên phải xác định biên của kết quả. Rõ ràng giá trị của số a sẽ là từ 1 đến N. Việc tiếp theo chỉ là triển khai thuật toán chia để trị. Xin mời bạn theo dõi cách triển khải của tôi ở dưới đây.

## Lời giải:

(Các bạn nên tự mình nghĩ ra thuật toán của bài toán trước khi tham khảo code của tôi nhé. Hãy phát huy tối đa khả năng sáng tạo của bản thân. Hơn nữa code tôi viết ra cũng chưa thật sự tối ưu. Nên rất mong nhận được sự chia sẻ của các bạn.)

### Code C/C++:

`gist:completejavascript/eb61a42f9346ad73f7e88bf1161bb266`

_Code by Phạm Văn Lâm._