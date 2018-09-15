---
title: "SPOJ.COM – Thuật toán bài SUMPRO - SUM OF PRODUCT"
date: "2016-10-28T21:47:18.083Z"
categories: ["spoj", "Tham lam - Greedy"]
tags: ["phạm văn lâm", "spoj.com", "thuật toán", "thuật toán spoj.com", "tham lam greedy"]
keywords: "Thuật toán bài SUMPRO"
---

## Đề bài:

Cho trước 1 số N, tìm ra tổng của tất cả các tích x*y trong đó N/x = y (phép chia nguyên). Bởi vì tổng có thể rất lớn, nên chia kết quả cho 1000000007.

### Đầu vào:

Dòng đầu tiên của đầu vào là một số nguyên T, là số test case. Các dòng tiếp theo, mỗi dòng bao gồm 1 số nguyên N.

### Đầu ra:

Với mỗi test case in ra kết quả tương ứng.

### Ví dụ:

**Đầu vào:**

```
3
2
4
6
```

**Đầu ra:**

```
4
15
33
```

### Ràng buộc:

1 <= T <= 500 

1 <= N <= 10<sup>9</sup>

### **Giải thích ví dụ:**

**Ví dụ 1:**

```
2 / 1 = 2
2 / 2 = 1
Answer = 1 * 2 + 2 * 1 = 4
```

**Ví dụ 2:**

```
4 / 1 = 4
4 / 2 = 2
4 / 3 = 1
4 / 4 = 1
Answer = 1 * 4 + 2 * 2 + 3 * 1 + 4 * 1 = 15
```

**Ví dụ 3:**

```
6 / 1 = 6
6 / 2 = 3
6 / 3 = 2
6 / 4 = 1
6 / 5 = 1
6 / 6 = 1
Answer = 1 * 6 + 2 * 3 + 3 * 2 + 4 * 1 + 5 * 1 + 6 * 1 = 33
```

_Các bạn có thể tham khảo link gốc đề bài và submit code tại đây: [ http://www.spoj.com/problems/SUMPRO/](http://www.spoj.com/problems/SUMPRO/)_

### Phân tích:

  * Nếu làm thông thường, chắc chắn các bạn sẽ bị time limit. Ở đây, tôi áp dụng [thuật toán tham lam Greedy,](/category/tham-lam-greedy/) sẽ giúp giải quyết bài toán nhanh hơn. 
  
  * Các bạn để ý rằng: với các số chia từ 1 đến sqrt(n) (căn bậc hai của n) thì giá trị thương số chỉ là 1 giá trị duy nhất, không bị lặp lại. Tuy nhiên, từ đó trở đi, giá trị thương số sẽ bị lặp lại. 
    * Trong ví dụ 3, ta có thể tính kết quả theo cách khác là: 
  
      ```
      Answer = 1 * 6 + 2 * 3 + 3*2 + (4 + 5 + 6) * 1 = 33
      ```
    
    * Trong đó có một cụm số liên tiếp tăng dần là 4 + 5 + 6
    
  * Nếu tính toán với số n lớn hơn thì trong kết quả sẽ chứa nhiều cụm số liên tiếp hơn. Mà áp dụng công thức đối với cấp số cộng ta có: ```a[1] + a[2] + ... + a[n] = (a[n] - a[1] + 1) * (a[n] + a[1]) / 2``` với công sai d = 1. Ví dụ: ```1 + 2 + 3 + 4 + 5 = (5 - 1 + 1) * (5 + 1) / 2 = 15```
  
  * Như vậy, thời gian chạy bài toán sẽ nhanh hơn rất nhiều.

## Lời giải:

(Các bạn nên tự mình nghĩ ra thuật toán của bài toán trước khi tham khảo code của tôi nhé. Hãy phát huy tối đa khả năng sáng tạo của bản thân. Hơn nữa code tôi viết ra cũng chưa thật sự tối ưu.  Nên rất mong nhận được sự chia sẻ của các bạn.)

### Code C/C++:

`gist:completejavascript/397ef221d725b3ae764fea31b41cb514`

_Code by Phạm Văn Lâm._