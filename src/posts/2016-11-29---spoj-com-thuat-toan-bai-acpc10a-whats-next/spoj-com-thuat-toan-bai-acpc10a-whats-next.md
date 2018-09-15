---
title: "SPOJ.COM – Thuật toán bài ACPC10A - What’s Next"
date: "2016-11-29T21:49:18.083Z"
categories: ["spoj", "Tham lam - Greedy"]
tags: ["phạm văn lâm", "spoj.com", "thuật toán", "thuật toán spoj.com", "cấp số cộng AP", "tham lam greedy", "cấp số nhân GP"]
keywords: "Thuật toán bài ACPC10A"
---

## Đề bài:

Theo Wikipedia, cấp số cộng (arithmetic progression - AP) là một dãy số mà độ chênh lệch giữa hai số liên tiếp của các phần tử trong dãy là như nhau. Ví dụ, dãy số sau là một cấp số cộng: 3, 5, 7, 9, 11, 13,... với độ chênh lệch là 2, gọi là **công sai** của cấp số cộng. Trong bài toán này, ta giới hạn công sai sẽ là một số nguyên khác 0. 

Mặt khác, cấp số nhân (geometric progression - GP) là dãy số mà số sau có được bằng cách lấy số đằng trước nhân với một số nguyên khác 0, số đó gọi là công bội. Ví dụ, dãy sau là một cấp số nhân: 2, 6, 18, 54,... với công bội là 3\. Trong bài toán này, ta cũng giới hạn công bội là số nguyên khác 0. 

Cho 3 số liên tiếp của dãy số, bạn hãy xác định xem dãy số đó là cấp số cộng hay cấp số nhân và số tiếp theo là gì.

### Đầu vào:

Chương trình của bạn sẽ được kiểm tra với một hay nhiều test case. Mỗi test case sẽ xác định trên 1 dòng với 3 số a1, a2, a3 thỏa mãn -10000 < a1, a2, a3 < 10000 và các số là khác nhau. Test case cuối cùng theo sau bởi 3 số 0.

### Đầu ra:

Với mỗi test case in ra kết quả dạng: XX v Trong đó, XX là AP hoặc GP tương ứng với dãy cho ban đầu là cấp số cộng hay cấp số nhân và v là số tiếp theo. Tất cả đầu vào đảm bảo thuộc AP hoặc GP.

### Ví dụ:

**Đầu vào:**

```
4 7 10
2 6 18
0 0 0
```

**Đầu ra:**

```
AP 13
GP 54
```

### Giải thích:

  * Test case 1 là cấp cố cộng với công sai là 3
  * Test case 2 là cấp số nhân với công bội là 3 
  
_Các bạn có thể tham khảo link gốc đề bài và submit code tại đây:[ http://www.spoj.com/problems/ACPC10A/](http://www.spoj.com/problems/ACPC10A/)_

### Phân tích:

  * Bài toán này thuộc [thuật toán tham lam Greedy](/category/tham-lam-greedy/)
  * Vì đầu vào đảm bảo thuộc 2 loại AP hoặc GP nên tôi xét xem trường hợp nào thỏa mãn thì nhận. Còn việc tìm số tiếp theo thì hoàn toàn đơn giản là dựa vào định nghĩa của AP và GP.

## Lời giải:

(Các bạn nên tự mình nghĩ ra thuật toán của bài toán trước khi tham khảo code của tôi nhé. Hãy phát huy tối đa khả năng sáng tạo của bản thân. Hơn nữa code tôi viết ra cũng chưa thật sự tối ưu. Nên rất mong nhận được sự chia sẻ của các bạn.)

### Code C/C++:

`gist:completejavascript/2cd310ad154d8ae20b600113bb4efba2`

### _Code by Phạm Văn Lâm._