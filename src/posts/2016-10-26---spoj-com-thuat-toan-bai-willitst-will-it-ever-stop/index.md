---
title: "SPOJ.COM – Thuật toán bài WILLITST - Will it ever stop"
date: "2016-10-26T21:33:18.083Z"
categories: ["spoj", "Tham lam - Greedy"]
tags: ["phạm văn lâm", "spoj.com", "thuật toán", "thuật toán spoj.com", "tham lam greedy"]
keywords: "Thuật toán bài WILLITST"
---

## Đề bài:

Khi Bob đang ở trong thư viện của trường đại học Warsaw, anh ta nhìn thấy một đầu đề ở mặt chính ngôi nhà là "Will it ever stop?" và phía dưới là đoạn code huyền bí:

```
while n > 1
  if n mod 2 = 0 then
    n := n/2
  else
    n := 3*n+3
```

Hãy giúp anh ấy tìm ra lời giải đáp.

### Đầu vào:

Một dòng chứa một số n với n <= 10^14

### Đầu ra:

In ra "TAK" nếu chương trình có dừng lại, ngược lại thì in ra "NIE" 

_Các bạn có thể tham khảo link gốc đề bài và submit code tại đây: [ http://www.spoj.com/problems/WILLITST/](http://www.spoj.com/problems/WILLITST/)_

### Phân tích:

  * Ở đây, tôi sử dụng [thuật toán tham lam Greedy](/category/tham-lam-greedy/)
  * Rõ ràng vòng lặp dừng lại khi n <= 1\. Mà điều này chỉ xảy ra khi số n được biểu diễn dưới dạng 2^k, Khi đó, sau k vòng lặp kết quả sẽ được n == 1\. Và khi đó vòng lặp sẽ bị thoát.

## Lời giải:

(Các bạn nên tự mình nghĩ ra thuật toán của bài toán trước khi tham khảo code của tôi nhé. Hãy phát huy tối đa khả năng sáng tạo của bản thân. Hơn nữa code tôi viết ra cũng chưa thật sự tối ưu.  Nên rất mong nhận được sự chia sẻ của các bạn.)

### Code C/C++:

`gist:completejavascript/efec8f74182d70db11609b8b9baa0a99`

### Code Python:

`gist:completejavascript/0e2871e23dc312546610fbd43e1f6417`

_Code by Phạm Văn Lâm._