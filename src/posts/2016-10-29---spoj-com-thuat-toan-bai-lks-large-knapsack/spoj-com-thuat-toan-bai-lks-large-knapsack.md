---
title: "SPOJ.COM – Thuật toán bài LKS - Large Knapsack"
date: "2016-10-29T21:25:18.083Z"
categories: ["spoj", "Quy hoạch động - Dynamic programming"]
tags: ["phạm văn lâm", "spoj.com", "thuật toán", "thuật toán spoj.com", "quy hoạch động dynamic programming"]
keywords: "Thuật toán bài LKS"
---

## Đề bài:

Bài toán knapsack hay rucksack là một bài toán trong combinatorial optimization: Cho một tập gồm những phần tử. mỗi phần tử bao gồm trọng lượng và giá trị. Xác định số lượng mỗi phần tử được chọn sao cho tổng trọng lượng nhỏ hơn hoặc bằng với giới hạn cho trước và tổng giá trị là lớn nhất có thể.

## Đầu vào:

Dòng đầu tiên bao gồm 2 số nguyên K và N, trong đó K là kích thước giới hạn của cái túi (knapsack) và N là số lượng phần tử. N dòng tiếp theo trong đó dòng thứ i là phần tử thứ i với giá trị v<sub>i</sub> và trọng lượng w<sub>i</sub>.

### Đầu ra:

In ra số nguyên duy nhất, là giá trị lớn nhất có thể của chiếc túi. (Tất cả các phép toán đảm bảo trong phạm vi của số nguyên có dấu 32 bit)

### Ví dụ:

### Đầu vào:

```
10 3
7 3
8 8
4 6
```

### Đầu ra:

11

### Giới hạn:

K <= 2000000

N <= 500

V<sub>i</sub> <= 10^7

W<sub>i</sub> <= 10^7

_Các bạn có thể tham khảo link gốc đề bài và submit code tại đây: [http://www.spoj.com/problems/LKS/](http://www.spoj.com/problems/LKS/)_

### Phân tích:

  * Đây là bái toán Knapsack 0/1 cơ bản. Nghĩa là mỗi đồ vật sẽ có thể được chọn hay không được chọn. Và nếu được chọn thì không giới hạn số lần chọn. Thuật toán được sử dụng ở đây là [thuật toán quy hoạch động Dynamic Programming](/category/quy-hoach-dong-dynamic-programming/) 

  * Bình thường thì tôi sẽ sử dụng một mảng hai chiều kích thước NxK, là ```MaxCost[N][K]```. Trong đó, ```MaxCost[i][j]``` là giá trị lớn nhất thu được với việc chọn đồ vật từ 1 đến i và trọng lượng không vượt quá j. 

  * Nhưng do số lượng đầu vào khá lớn nên tôi không thể sử dụng một mảng 2 chiều NxK được. Tuy nhiên, nếu các bạn để ý rằng giá trị tại hàng thứ i chỉ phụ thuộc vào hàng trước đó i - 1 (thuật toán các bạn sẽ thấy rõ hơn ở dưới). Nên tôi chỉ cần một mảng 2 chiều 2xK, trong đó một hàng dùng để lưu giá trị hàng thứ i - 1 và một hàng lưu giá trị hàng i. Sau khi tính được hàng i, tôi lại hoán đổi vai trò của hai hàng cho nhau. Cứ như vậy, tôi sẽ tính được giá trị của hàng thứ N.

## **Lời giải:**

(Các bạn nên tự mình nghĩ ra thuật toán của bài toán trước khi tham khảo code của tôi nhé. Hãy phát huy tối đa khả năng sáng tạo của bản thân. Hơn nữa code tôi viết ra cũng chưa thật sự tối ưu.  Nên rất mong nhận được sự chia sẻ của các bạn.)

### **Code C/ C++:**

`gist:completejavascript/9b95e982470aafaa75c69048d7477c17`

_Code by Phạm Văn Lâm._