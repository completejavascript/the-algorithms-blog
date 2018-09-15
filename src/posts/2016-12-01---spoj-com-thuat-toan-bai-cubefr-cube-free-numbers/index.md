---
title: "SPOJ.COM – Thuật toán bài CUBEFR - Cube Free Numbers"
date: "2016-12-01T22:24:18.083Z"
categories: ["spoj", "Tham lam - Greedy"]
tags: ["phạm văn lâm", "spoj.com", "thuật toán", "thuật toán spoj.com", "tham lam greedy", "thuật toán sàng"]
keywords: "Thuật toán bài CUBEFR"
---

## Đề bài:

"Cube free number" là một số mà không có số chia nào của nó là số dạng lập phương (số dạng lập phương ví dụ như ```8 (2*2*2))```, ```27(3*3*3)```. Do đó những số cube free number là 1, 2, 3, 4, 5, 6, 7, 9, 10,  11, 12, 13, 14, 15, 17, 18,...(ta xem xét 1 như là số cube free number). 8, 16, 24, 27, 32 không phải 8, 16, 24, 27, 32\. Trong đó, vị trí của 1 trong dãy là 1, vị trí của 2 là 2, vị trí của 3 là 3, vị trí của 10 là 9\. Cho trước một số dương, bạn hãy cho biết xem nó có phải là cube free number hay không, và nếu có thì chỉ ra vị trí của nó trong dãy.

### Đầu vào:

Dòng đầu tiên là là số T, số lượng test case, 1 <= T <= 100000\. Sau đó là T dòng. Mỗi dòng là một số nguyên dương n, 1 <= n <= 1000000.

### Đầu ra:

Với mỗi test case, in ra một dòng dạng "Case I:", trong đó i là chỉ số của test case. Sau đó nếu nó không phải là cube free number thì in ra "Not Cube Free". Ngược lại thì in ra vị trí của nó trong dãy.

### Ví dụ:

**Đầu vào:**

```
10
1
2
3
4
5
6
7
8
9
10
```

**Đầu ra:**

```
Case 1: 1
Case 2: 2
Case 3: 3
Case 4: 4
Case 5: 5
Case 6: 6
Case 7: 7
Case 8: Not Cube Free
Case 9: 8
Case 10: 9
```

Các bạn có thể tham khảo link gốc đề bài và submit code tại đây: [http://www.spoj.com/problems/CUBEFR/](http://www.spoj.com/problems/CUBEFR/)

### Phân tích:

  * Tôi sẽ sử dụng [thuật toán tham lam Greedy](/category/tham-lam-greedy/) để giải bài toán. Cụ thể hơn là sử dụng thuật toán sàng. Bởi lẽ dãy số chỉ có một, nên tôi sẽ sinh ra dãy số một lần duy nhất.
  
  * Trước tiên, dùng một mảng đánh dấu, khởi tạo giá trị bằng 0\. Duyệt các số i từ 2 đến 100, khi đó số dạng lập phương từ số đó là ```k = i*i*i```. Suy ra số ```1*k, 2*k, 3*k, ...``` sẽ không phải là cube free number và được đánh dấu -1\. Ở đây, tôi chỉ xét đến 100 vì ```100*100*100 = 1000000```, là đủ đến giá trị lớn nhất của n. 
  
  * Sau khi đánh dấu những số không phải cube free number, tôi sẽ duyệt một lượt nữa để đếm vị trí của những số cube free number và lưu luôn vào mảng đánh dấu trên.

## Lời giải:

(Các bạn nên tự mình nghĩ ra thuật toán của bài toán trước khi tham khảo code của tôi nhé. Hãy phát huy tối đa khả năng sáng tạo của bản thân. Hơn nữa code tôi viết ra cũng chưa thật sự tối ưu. Nên rất mong nhận được sự chia sẻ của các bạn.)

### Code C/C++:

`gist:completejavascript/6d73c1229673c3ea44fc1b93e40cf7f6`

_Code by Phạm Văn Lâm._