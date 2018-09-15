---
title: "SPOJ.COM – Thuật toán bài KOIREP - Representatives"
date: "2016-11-07T23:04:18.083Z"
categories: ["spoj", "Tham lam - Greedy"]
tags: ["phạm văn lâm", "spoj.com", "thuật toán", "thuật toán spoj.com", "dịch cửa sổ", "sắp xếp trộn Merge Sort", "tham lam greedy"]
keywords: "Thuật toán bài KOIREP"
---

## Đề bài:

Có N lớp ở trường và mỗi lớp có M học sinh. Sắp tới có một cuộc thi chạy 100 m và người đại diện cho mỗi lớp sẽ được chọn để tham gia cuộc thi. Bạn được giao cho một nhiệm vụ là chọn ra những người đại diện này. Bởi vì, bạn không muốn cuộc đua trở nên 1 chiều, nên bạn muốn chọn người đại diện của các lớp sao cho chênh lệnh khả năng giữa người tốt nhất và người kém nhất là ít nhất. 

Ví dụ: Nếu N = 3 và M = 4\. Mỗi lớp có những học sinh với khả năng như sau: 

  * Lớp 1: {12,16,67,43} 
  * Lớp 2: {7,17,68,48} 
  * Lớp 3: {14,15,77,54} 
  
Trường hợp tốt nhất là chọn ra học sinh với khả năng 16 ở lớp 1, học sinh có khả năng 17 ở lớp 2 và học sinh có khả năng 15 ở lớp 3\. Khi đó, độ chênh lệch là: 17 - 15 = 2. 

Nhiệm vụ của bạn là hãy tìm ra độ chênh lệch nhỏ nhất có thể bởi việc chọn ra người đại diện cho mỗi lớp.

### Đầu vào:

Dòng đầu tiên là số N và M (1<=N<=1000, 1<=M<=1000). N dòng tiếp theo, mỗi dòng có M số - miêu tả khả năng của các học sinh. Khả năng của học sinh là một con số trong khoảng từ 0 đến 10^9.

### Đầu ra:

In ra độ chênh lệch nhỏ nhất cần tìm.

### Ví dụ:

**Trường hợp 1:** 

**Đầu vào:**

```
3 4
12 16 67 43
7 17 68 48
14 15 77 54
```

**Đầu ra:**

2

**Trường hợp 2:** 

**Đầu vào:**

```
4 3
10 20 30
40 50 60
70 80 90
100 110 120
```

**Đầu ra:**

70

_Các bạn có thể tham khảo link gốc đề bài và submit code tại đây: [http://www.spoj.com/problems/KOIREP/](http://www.spoj.com/problems/KOIREP/)_

### Phân tích:

  * Tôi sẽ sử dụng [thuật toán tham lam Greedy](/category/tham-lam-greedy/) để giải bài toán.
  
  * Ở đây, trước tiên tôi dùng sắp xếp trộn để sắp xếp tất cả người của các lớp theo thứ tăng dần về khả năng. 
  
  * Tiếp đến tôi sẽ dùng phương pháp cửa sổ để duyệt dãy đã sắp xếp. Cửa sổ ở đây có độ dài là n để tìm ra dãy n người thỏa mãn thuộc n lớp khác nhau. Khi đó, tôi chỉ cần tìm ra trong các trường hợp đó trường hợp có độ chênh lệnh nhỏ nhất. Đó chính là kết quả của bài toán.

## Lời giải:

(Các bạn nên tự mình nghĩ ra thuật toán của bài toán trước khi tham khảo code của tôi nhé. Hãy phát huy tối đa khả năng sáng tạo của bản thân. Hơn nữa code tôi viết ra cũng chưa thật sự tối ưu. Nên rất mong nhận được sự chia sẻ của các bạn.)

### Code C/C++:

`gist:completejavascript/423ba78d531d0ff5fb9054a3c357fd92`

_Code by Phạm Văn Lâm._