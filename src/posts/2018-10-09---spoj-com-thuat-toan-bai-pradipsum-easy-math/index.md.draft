---
title: "SPOJ.COM - Thuật toán bài PRADIPSUM - Easy Math"
date: "2018-10-17T06:58:18.083Z"
categories: ["spoj", "Tham lam - Greedy"]
tags: ["phạm văn lâm", "spoj.com", "thuật toán", "thuật toán spoj.com", "tham lam greedy"]
keywords: "Thuật toán bài PRADIPSUM"
---

## Đề bài

Zoro là một học sinh tiểu học. Cậu ta thích giải toán. Một ngày nọ, Zoro thử giải một bài toán. Nhưng cậu ta không thể giải quyết nó một cách hiệu quả bởi vì mới học tiểu học. Vì bạn là một lập trình viên, nên cậu ta muốn nhờ bạn giúp đỡ bài toán này. Và vấn đề ở đây là tính tổng của các số liên tiếp.

**Ví dụ**: Nếu số thứ nhất là 2 và số tiếp theo là 5, thì kết quả sẽ là: ```2 + 3 + 4 + 5 = 14```. 

### Đầu vào

Mỗi dòng chứa 2 số a và b. Đầu vào kết thúc bởi kí tự kết thúc file.

### Đầu ra

In ra tổng của các số liên tiếp giữa a và b (bao gồm cả 2 số đó).

### Ràng buộc

-10^8  ≤ (a , b) ≤ 10^8

### Ví dụ

**Input:**

```
2 5
5 10
```

**Output:**

```
14
45
```

## Phân tích bài toán

Bài này yêu cầu tính tổng của 2 số a và b. Dĩ nhiên bạn có thể sử dụng một vòng lặp for để duyệt và tính tổng các số. Lúc này, độ phức tạp sẽ là: 10^8. Nên thời gian chạy chắc chắn sẽ dưới 2 giấy.

Tuy nhiên, để nhanh hơn thì mình có thể sử dụng công thức tính [tổng của cấp số cộng](https://vi.wikipedia.org/wiki/C%E1%BA%A5p_s%E1%BB%91_c%E1%BB%99ng):

```
T(n) = n * (a(1) + a(n)) / 2
```

Trong đó: (giả sử a < b)

  * *n* là số lượng các số => ```n = b - a + 1```
  * *a(1)* là số đầu tiên => ```a(1) = a```
  * *a(n)* là số cuối cùng => ```a(n) = b```

Đến đây thì bạn đã có thể tính ra kết quả được rồi.

Tuy nhiên, có 2 vấn đề mà bạn cần phải biết để giải quyết bài toán này:

  * Giá trị của a và b chưa biết trước nên có thể a < b hoặc ngược lại a > b.
  * Vì đầu bài không cho trước số lượng test case nên cách tốt nhất để quét hết các trường hợp là sử dụng ```cin >> a >> b```. Nếu còn test case thì kết quả của phép nhập này là true, ngược lại là false.

Qua phân tích như vậy, mình sẽ triển khai code như sau.

## Lời giải

(Các bạn nên tự mình nghĩ ra thuật toán của bài toán trước khi tham khảo code của mình nhé. Hãy phát huy tối đa khả năng sáng tạo của bản thân. Hơn nữa code mình viết ra cũng chưa thật sự tối ưu. Nên rất mong nhận được sự chia sẻ của các bạn.)

`gist:completejavascript/0b05c37ae33f445f80f0e613050c4c8a`

_Thân ái, Phạm Văn Lâm_