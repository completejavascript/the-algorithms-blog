---
title: "SPOJ.COM – Thuật toán bài INVCNT - Inversion Count"
date: "2016-11-08T19:03:18.083Z"
categories: ["spoj", "Tham lam - Greedy"]
tags: ["phạm văn lâm", "spoj.com", "thuật toán", "thuật toán spoj.com", "sắp xếp trộn Merge Sort", "tham lam greedy"]
keywords: "Thuật toán bài INVCNT"
---

## Đề bài:

Cho một mảng gồm N phần tử là số nguyên dương, phân biệt ```A[0....N-1]```. Nếu i < j và ```A[i] > A[j]``` thì cặp (i, j) gọi là một cặp đảo nghịch. Cho số N và mảng A. Nhiệm vụ của bạn là tìm ra số cặp đảo nghịch.

### Đầu vào:

Dòng đầu tiên là số nguyên t - số lượng test case, theo sau là một khoảng trống. Mỗi test case bắt đầu bằng số N, N <= 200000\. Sau đó là N + 1 dòng, với dòng thứ i là phần tử ```A[i - 1], A[i - 1] <= 10^7```. Dòng thứ N + 1 là dòng trống.

### Đầu ra:

Mỗi test case in ra trên 1 dòng là số cặp đảo nghịch.

### Ví dụ:

**Đầu vào:**

```
2

3
3
1
2

5
2
3
8
6
1
```

**Đầu ra:**

```
2
5
```

### Giải thích:

  * Test case 1: có 2 cặp đảo nghịch là (3, 1) và (3, 2)
  * Test case 2: có 5 cặp đảo nghịch là (2, 1), (3, 1), (8, 6), (8, 1) và (6, 1) 
  
_Các bạn có thể tham khảo link gốc đề bài và submit code tại đây: [http://www.spoj.com/problems/INVCNT/](http://www.spoj.com/problems/INVCNT/)_

### Phân tích:

  * Tôi sẽ sử dụng [thuật toán tham lam Greedy](/category/tham-lam-greedy/) để giải bài toán. Cụ thể hơn là tôi sẽ sử dụng [thuật toán sắp xếp trộn Merge Sort](/tag/sap-xep-tron-merge-sort/) để giải quyết.
  
  * Tôi sẽ sắp xếp dãy đã cho theo thứ tự giảm dần. Và trong quá trình trộn tôi sẽ cập nhật kết quả. Nghe tới đây có vẻ khó hiểu, xin mời bạn theo dõi code dưới đây để hiểu rõ hơn.

## Lời giải:

(Các bạn nên tự mình nghĩ ra thuật toán của bài toán trước khi tham khảo code của tôi nhé. Hãy phát huy tối đa khả năng sáng tạo của bản thân. Hơn nữa code tôi viết ra cũng chưa thật sự tối ưu. Nên rất mong nhận được sự chia sẻ của các bạn.)

### Code C/C++:

`gist:completejavascript/0618995e67c850d9f8838482d09d1289`

_Code by Phạm Văn Lâm._