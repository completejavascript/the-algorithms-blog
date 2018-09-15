---
title: "SPOJ.COM – Thuật toán bài HOTELS - Hotels Along the Croatian Coast"
date: "2016-12-07T20:41:18.083Z"
categories: ["spoj", "Tham lam - Greedy"]
tags: ["phạm văn lâm", "spoj.com", "thuật toán", "thuật toán spoj.com", "tham lam greedy"]
keywords: "Thuật toán bài HOTELS"
---

## Đề bài:

Có N khách sạn dọc theo bờ biển Adriatic. Mỗi khách sạn sẽ có một giá tiền riêng. Sroljo đã trúng sổ xố được M tiền. Bây giờ anh ấy muốn mua một dãy những khách sạn liên tiếp. Sao cho tổng giá trị của chúng là lớn nhất. Nhưng chúng không được lớn hơn M.

Bạn hãy tính giá trị lớn nhất này.

### Đầu vào:

Dòng đầu tiên của đầu vào là 2 số N và M (1 ≤ N ≤ 300 000, 1 ≤ M < 2<sup>31</sup>). Dòng tiếp theo sẽ có N số nhỏ hơn 10<sup>6</sup>. Biểu diễn giá trị của những khách sạn trên.

### Đầu ra:

In ra kết quả cần tìm (biết kết quả lớn hơn 0)

### Ví dụ 1:

**Đầu vào:**

```
5 12
2 1 3 4 5
```

**Đầu ra:**

12

### Ví dụ 2:

**Đầu vào:**

```
4 9
7 3 5 6
```

**Đầu ra:** 

8 

Các bạn có thể tham khảo link gốc đề bài và submit code tại đây: [http://www.spoj.com/problems/HOTELS/](http://www.spoj.com/problems/HOTELS/)

### Phân tích:

  * Tôi sẽ sử dụng [thuật toán tham lam Greedy](/category/tham-lam-greedy/), và thuật toán đó là thuật toán dịch cửa sổ Sliding Window. Tôi sẽ duyệt từ đầu đến cuối. Tôi sử dụng một biến trỏ vào đầu dãy, biến thứ 2 dùng để chạy từ 1 đến hết dãy. Biến thứ 2 sẽ tăng cho đến khi tổng của dãy số lớn hơn M thì dừng lại. Lúc này tôi được một giá trị là số lượng những khách sạn. Sau đó tăng con trỏ thứ nhất lên cho đến khi tổng của dãy nhỏ hơn M thì tôi lại tiếp tục tăng biến thứ 2\. Quá trình duyệt tiếp tục như vậy cho đến hết là tôi sẽ tìm được kết quả.

## Lời giải:

(Các bạn nên tự mình nghĩ ra thuật toán của bài toán trước khi tham khảo code của tôi nhé. Hãy phát huy tối đa khả năng sáng tạo của bản thân. Hơn nữa code tôi viết ra cũng chưa thật sự tối ưu. Nên rất mong nhận được sự chia sẻ của các bạn.)

### Code C/C++:

`gist:completejavascript/960ce1d979d45eb851a6b1e29f37e69a`

_Code by Phạm Văn Lâm._
