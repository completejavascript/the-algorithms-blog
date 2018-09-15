---
title: "SPOJ.COM – Thuật toán bài COINS - Bytelandian gold coins"
date: "2016-10-16T21:21:18.083Z"
categories: ["spoj", "Quy hoạch động - Dynamic programming"]
tags: ["phạm văn lâm", "spoj.com", "thuật toán", "thuật toán spoj.com", "quy hoạch động dynamic programming"]
keywords: "Thuật toán bài COINS"
---

## Đề bài:

Ở Byteland, họ có một hệ thống tiền tệ rất kì lạ. 

Mỗi đồng tiền vàng của họ có một số nguyên viết trên đó. Một đồng xu n có thể được trao đổi tại ngân hàng thành 3 đồng xu n/2, n/3 và n/4\. Nhưng những số này luôn được làm tròn xuống (vì ngân hàng cần phải có lãi). 

Bạn có thể bán những đồng xu này thành tiền đô la Mỹ. Tỉ lệ trao đổi là 1:1\. Tuy nhiên, bạn không thể mua những đồng xu này. 

Bạn có một đồng vàng. Hỏi số tiền tối đa bạn có thể có được là bao nhiêu.

### Đầu vào:

Đầu vào sẽ bao gồm một vài test case (số test case <= 10). Mỗi testcase sẽ chỉ bao gồm 1 dòng là số n, 0 <= n <= 1000000000\. Đó là số được ghi trên đồng xu.

### Đầu ra:

Với mỗi test case, in ra một dòng giá trị số tiền tối đa bạn có thể có được.

### Ví dụ:

**Đầu vào:** 

12 

2 

**Đầu ra:** 

13 

2

### Giải thích:

+ Test case 1: Bạn có thể đổi 12 thành 6, 4 và 3, rồi đổi chúng thành tiền tương ứng $6 + $4 + $3 = $13. 

+ Test case 2: Nếu bạn thử đổi đồng xu 2 thành 3 đồng xu nhỏ hơn thì bạn sẽ nhận được 1, 0 và 0\. Cuối cùng bạn chỉ nhận được $1\. Do đó, trong trường hợp này, tốt nhất là bạn đổi đồng xu 2 thành $2. 

_Các bạn có thể tham khảo link gốc đề bài và submit code tại đây: [http://www.spoj.com/problems/COINS/](http://www.spoj.com/problems/COINS/)_

### Phân tích:

+ Bài toán này tôi sẽ sử dụng đệ quy để quét hết tất cả các trường hợp có thể xảy ra. Với giới hạn thời gian là 9 giây thì cách này hoàn toàn có thể thực hiện được. 

+ Nếu giới hạn thời gian nhỏ hơn thì với giá trị n tối đa là 1000000000, bắt buộc tôi phải sử dụng [thuật toán quy hoạch động - Dynamic programming](/category/quy-hoach-dong-dynamic-programming/) để lưu lại trạng thái số tiền lớn nhất thu được sau khi trao đổi ứng với mỗi số n. 

+ Ngoài ra, với giá trị n = 1000000000, thực tế là không thể khai báo mảng có độ dài như vậy. Do đó, tôi sẽ chỉ lưu lại trạng thái tới giá trị n = 10000000.

## Lời giải:

(Các bạn nên tự mình nghĩ ra thuật toán của bài toán trước khi tham khảo code của tôi nhé. Hãy phát huy tối đa khả năng sáng tạo của bản thân. Hơn nữa code tôi viết ra cũng chưa thật sự tối ưu.  Nên rất mong nhận được sự chia sẻ của các bạn.)

### Code C/C++:

#### Cách 1:

Thời gian: 5.17s - Bộ nhớ 2.7M 

`gist:completejavascript/da410d35cd4a0427b97b43b30a5e1622`

#### Cách 2:

Thời gian: 0.01s - bộ nhớ: 41M 

`gist:completejavascript/95f98d7e8ba069c270095a36064dfb9e`

_Code by Phạm Văn Lâm._
