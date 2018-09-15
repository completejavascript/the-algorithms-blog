---
title: "SPOJ.COM – Thuật toán bài LASTDIG - The last digit"
date: "2016-11-06T16:06:18.083Z"
categories: ["spoj", "Tham lam - Greedy"]
tags: ["phạm văn lâm", "spoj.com", "thuật toán", "thuật toán spoj.com", "tham lam greedy"]
keywords: "Thuật toán bài LASTDIG"
---

## Đề bài:

Nestor đã làm công việc của lớp toán khoảng 3 ngày rồi. Tuy nhiên, anh ấy rất mệt vì phải làm rất nhiều công việc. Do đó, anh ấy nên chuyển giao công việc vào ngày mai. Giáo viên toán đưa cho anh ta 2 số a và b. 

Bài toàn đặt ra là tìm ra chữ số cuối cùng của phép toán a^b (a mũ b). Hãy giúp anh ấy bài toán này. Bạn được đưa cho 2 số nguyên là a (0 <= a <= 20) và b (0 <= b <= 2,147,483,000), với a và b không được cùng bằng 0.

### Đầu vào:

Dòng đầu tiên là số nguyên t, số lượng test case, t <= 30\. Sau đó là t test case, mỗi cái sẽ trên một dòng và bao gồm 2 số nguyên a, b cách nhau bằng dấu cách.

### Đầu ra:

Mỗi test case in ra trên 1 dòng là số cần tìm.

### Ví dụ:

**Đầu vào:**

```
2
3 10
6 2
```

**Đầu ra:**

```
9
6
```

_Các bạn có thể tham khảo link gốc đề bài và submit code tại đây: [http://www.spoj.com/problems/LASTDIG/](http://www.spoj.com/problems/LASTDIG/)_

### Phân tích:

  * Tôi sẽ sử dụng [thuật toán tham lam Greedy](/category/tham-lam-greedy/) để giải bài toán.
  
  * Vì đề bài yêu cầu tìm chữ số cuối cùng nên thực chất tôi chỉ cần quan tâm đến chữ số hàng đơn vị của số a, giả sử là x. Tức là nếu cần tìm chữ số cuối cùng của 13^b thì tôi sẽ tìm chữ số cuối cùng của 3^b. Kết quả là giống nhau.
  
  * Tiếp theo, tôi sẽ xử lý số b. Số b có giá trị lớn nhất là 2,147,483,000, nên tôi không thể tính trực tiếp được. Tuy nhiên nếu các bạn chịu khó viết ra lũy thừa của các số từ 1 đến 9\. Các bạn sẽ thấy rằng chữ số cuối cùng của kết quả sẽ lặp lại với chu kì bằng 4\. Nghĩa là chữ số cuối cùng của a^b = chữ số cuối cùng của a^(b + 4). Do đó, thực chất tôi chỉ cần lấy số dư của b cho 4, giả sử là y.
  
  * Vậy chữ số cuối cùng của a^b sẽ bằng chữ số cuối cùng của x^y. Cụ thể mời bạn theo dõi code bên dưới.

## Lời giải:

(Các bạn nên tự mình nghĩ ra thuật toán của bài toán trước khi tham khảo code của tôi nhé. Hãy phát huy tối đa khả năng sáng tạo của bản thân. Hơn nữa code tôi viết ra cũng chưa thật sự tối ưu. Nên rất mong nhận được sự chia sẻ của các bạn.)

### Code C/C++:

`gist:completejavascript/eb336f050d80dd1dc6dcaeed97dcd621`

_Code by Phạm Văn Lâm._