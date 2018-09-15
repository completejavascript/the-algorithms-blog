---
title: "SPOJ.COM – Thuật toán bài RENT - Rent your airplane and make money"
date: "2016-11-22T21:14:18.083Z"
categories: ["spoj", "Chia để trị - Divide and Conquer", "Quy hoạch động - Dynamic programming", "Tham lam - Greedy"]
tags: ["phạm văn lâm", "spoj.com", "thuật toán", "thuật toán spoj.com", "chia để trị divide and conquer", "tham lam greedy", "quay lui có điều kiện backtracking"]
keywords: "Thuật toán bài RENT"
---

## Đề bài:

"ABEAS Corp." là một công ty rất nhỏ sở hữu duy nhất một chiếc máy bay. Khách hàng của "ABEAS Corp." là những công ty lớn - những công ty đã thuê để điều tiết khi lượng hàng hóa quá tải. Khách hàng gửi những đơn hàng bao gồm thời gian và giá mà khách hàng sẵn sàng trả cho việc thuê máy bay trong thời gian đó. Tất cả những đơn hàng đã được biết trước. Dĩ nhiên không phải tất cả các đơn hàng đều được chấp nhận, và một vài cái sẽ bị từ chối. Eugene LAWLER, "ABEAS Corp." muốn đạt được lợi nhuận cao nhất. 

Bạn được yêu cầu tính toán giải pháp tối ưu này. 

**Một ví dụ nhỏ:** 

Xem xét một trường hợp đó là có 4 đơn hàng như sau:

  * Đơn hàng 1: (Thời gian bắt đầu 0, thời gian sử dụng 5, giá 10) 
  * Đơn hàng 2: (Thời gian bắt đầu 3, thời gian sử dụng 7, giá 8) 
  * Đơn hàng 3: (Thời gian bắt đầu 5, thời gian sử dụng 9, giá 7) 
  * Đơn hàng 4: (Thời gian bắt đầu 6, thời gian sử dụng 9, giá 8) 
  
Giải pháp tối ưu là bỏ đi đơn hàng 2 và 3, khi đó lợi nhuận sẽ là 10 + 8 = 18\. Chú ý rằng, giải pháp chọn lựa đơn hàng 1 và 3 cũng thỏa mãn về mặt thời gian. Tuy nhiên, lợi nhuận chỉ là 10 + 7 = 17.

### Đầu vào:

Dòng đầu tiên là số T, số lượng test case, T <= 30\. Dòng đầu của mỗi test case là số n, n <= 10000\. Tiếp theo là n dòng, mỗi dòng là một đơn hàng, bao gồm 3 số nguyên, lần lượt là thời gian bắt đầu (st), thời gian sử dụng (d) và giá (p), với điều kiện là 0 <= st, d <= 1000000 và 0 <= p < 100000.

### Đầu ra:

Với mỗi test case, in ra số cần tìm.

### Ví dụ:

**Đầu vào:**

```
1
4
0 5 10
3 7 14
5 9 7
6 9 8
```

**Đầu ra:**

18

_Các bạn có thể tham khảo link gốc đề bài và submit code tại đây: [http://www.spoj.com/problems/RENT/](http://www.spoj.com/problems/RENT/)_

### Phân tích:

  * Ở đây tôi sử dụng kết hợp [thuật toán tham lam Greedy](/category/tham-lam-greedy/), [thuật toán chia để trị Divide and conquer](/category/chia-de-tri-divide-and-conquer/) và [thuật toán quy hoạch động Dynamic programming](/category/quy-hoach-dong-dynamic-programming/).
  
  * Trong đó, thuật toán tham lam thể hiện ở chỗ đó là đầu tiên tôi sẽ sử dụng thuật toán sắp xếp nhanh quick sort để sắp xếp các đơn hàng theo thời gian kết thúc tăng dần.
  
  * Tiếp theo, thuật toán quy hoạch động thể hiện ở chỗ đó là tôi dùng một mảng, trong đó ```Memo[i]``` để lưu lại số tiến lớn nhất thu được khi chỉ chọn các đơn hàng từ 1 đến i. Như vậy rõ ràng kết quả cần tìm là Memo[N]. 
  
  * Trường hợp cơ sở ở đây là ```Memo[i] = Price[i]``` - tức là chỉ chọn 1 đơn hàng thứ i.
  
  * Ta có công thức quy hoạch động là ```Memo[i] = Max{Memo[i], Memo[i - 1], Price[i] + Memo[k]}```
  
  * Trong đó: ```Memo[i - 1]``` ứng với trường hợp không chọn đơn hàng thứ i; ```Price[i] + Memo[k]``` ứng với trường hợp chọn đơn hàng thứ i, và k là số lớn nhất thỏa mãn thời gian kết thúc tại k < thời gian bắt đầu tại i - đảm bảo thời gian không bị chồng lên nhau.
  
  * Để tìm ra số k nhanh nhất tôi sử dụng thuật toán chia để trị hay tìm kiếm nhị phân.

## Lời giải:

(Các bạn nên tự mình nghĩ ra thuật toán của bài toán trước khi tham khảo code của tôi nhé. Hãy phát huy tối đa khả năng sáng tạo của bản thân. Hơn nữa code tôi viết ra cũng chưa thật sự tối ưu. Nên rất mong nhận được sự chia sẻ của các bạn.)

### Code C/C++:

`gist:completejavascript/acc8dc4e20e5ac884d34868667efbad9`

_Code by Phạm Văn Lâm._