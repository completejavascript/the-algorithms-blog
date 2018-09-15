---
title: "SPOJ.COM – Thuật toán bài PRIME1 - Prime Generator"
date: "2016-11-05T16:51:18.083Z"
categories: ["spoj", "Tham lam - Greedy"]
tags: ["phạm văn lâm", "spoj.com", "thuật toán", "thuật toán spoj.com", "tham lam greedy"]
keywords: "Thuật toán bài PRIME1"
---

## Đề bài:

Peter muốn tạo ra những số nguyên tố cho một hệ thống bí mật của anh ta. Hãy giúp Peter. Nhiệm vụ của bạn là tạo ra tất cả những số nguyên tố giữa hai số cho trước.

### Đầu vào:

Bắt đầu với số T là số lượng test case, t <= 10\. Với mỗi test case, sẽ có một dòng bao gồm 2 số m và n, 1 <= m <= n <= 1000000000, n - m <= 100000, phân biệt nhau bởi dấu cách.

### Đầu ra:

Với mỗi test case, in ra tất cả những số nguyên tố p thỏa mãn m <= p <= n, mỗi số in ra trên một dòng. Mỗi test case phân biệt nhau bởi dòng trống.

### Ví dụ:

**Đầu vào:**

```
2
1 10
3 5
```

**Đầu ra:**

```
2
3
5
7

3
5
```

_Các bạn có thể tham khảo link gốc đề bài và submit code tại đây: [http://www.spoj.com/problems/PRIME1/](http://www.spoj.com/problems/PRIME1/)_

### Phân tích:

Đây là một bài toán đơn giản, có thể xếp vào loạt bài sử dụng [thuật toán tham lam Greedy](/category/tham-lam-greedy/). Đơn giản chỉ là việc duyệt các số từ số M đến số N, kiểm tra xem số nào là số nguyên tố thì in ra.

## Lời giải:

(Các bạn nên tự mình nghĩ ra thuật toán của bài toán trước khi tham khảo code của tôi nhé. Hãy phát huy tối đa khả năng sáng tạo của bản thân. Hơn nữa code tôi viết ra cũng chưa thật sự tối ưu. Nên rất mong nhận được sự chia sẻ của các bạn.)

### Code C/C++:

`gist:completejavascript/330374b8faae79219d23d31028daf919`

_Code by Phạm Văn Lâm._