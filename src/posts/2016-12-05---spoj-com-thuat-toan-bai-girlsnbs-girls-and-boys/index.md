---
title: "SPOJ.COM – Thuật toán bài GIRLSNBS - Girls and Boys"
date: "2016-12-05T05:12:18.083Z"
categories: ["spoj", "Tham lam - Greedy"]
tags: ["phạm văn lâm", "spoj.com", "thuật toán", "thuật toán spoj.com", "tham lam greedy"]
keywords: "Thuật toán bài GIRLSNBS"
---

## Đề bài:

Có G học sinh nữ và B học sinh nam trong một lớp để tốt nghiệp. Bạn cần phải sắp xếp họ theo một hàng duy nhất cho buổi lễ tốt nghiệp. Để gây ấn tượng hơn về sự đa dạng, bạn muốn tránh có quá nhiều học sinh nam hay quá nhiều học sinh nữ ngồi liên tiếp. Bạn quyết định sắp xếp để giảm thiểu sự đều đặn về giới tính. Sự đều đặn về giới tính ở đây là số lượng học sinh có cùng giới tính xuất hiện liên tiếp. 

Cho trước G và B, hãy tính giá trị nhỏ nhất của sự đều đặn về giới tính trong tất cả các trường hợp có thể sắp xếp.

### Đầu vào:

Mỗi test case sẽ cho trên một dòng. Mỗi dòng bao gồm 2 số nguyên G và B biểu diễn số lượng con gái và con trai trong một lớp. Trong đó, 0 ≤ G, B ≤ 1000\. Và kết thúc của đầu vào là 2 số -1.

### Đầu ra:

Với mỗi test case, in ra một dòng với một số nguyên duy nhất biểu diễn giá trị cần tìm.

### Ví dụ:

**Đầu vào:**

```
10 10
5 1
0 1000
-1 -1
```

**Đầu ra:**

```
1
3
1000
```

Các bạn có thể tham khảo link gốc đề bài và submit code tại đây: [http://www.spoj.com/problems/GIRLSNBS/](http://www.spoj.com/problems/GIRLSNBS/)

### Phân tích:

  * Rõ ràng bài này tôi sẽ áp dụng [thuật toán tham lam Greedy](/category/tham-lam-greedy/) để giải. Có lẽ bạn cũng nhận ra rằng để giảm thiểu sự đều đặn về giới tính thì ta phải sắp xếp các học sinh theo cách so le con trai và con gái ra một cách đều đặn.
  
  * Ví dụ như tôi có 6 con trai (B) và 2 con gái (G): khi đó cách sắp xếp tối ưu là: B B G B B G B B => Kết quả là 2
  
  * Tiếp theo, nếu như tôi có 7 con trai và 2 con gái thì sao. Khi đó kết quả tối ưu là: B B G B B G B B B => Kết quả là 3.
  
  * Đọc đến đây có lẽ bạn đã phát hiện ra quy luật rồi phải không. Xin mời bạn theo dõi code của tôi dưới đây để hiểu rõ hơn nhé.

## Lời giải:

(Các bạn nên tự mình nghĩ ra thuật toán của bài toán trước khi tham khảo code của tôi nhé. Hãy phát huy tối đa khả năng sáng tạo của bản thân. Hơn nữa code tôi viết ra cũng chưa thật sự tối ưu. Nên rất mong nhận được sự chia sẻ của các bạn.)

### Code C/C++:

`gist:completejavascript/d77cb947b1267bc15b51707e1b3f3f02`

_Code by Phạm Văn Lâm._