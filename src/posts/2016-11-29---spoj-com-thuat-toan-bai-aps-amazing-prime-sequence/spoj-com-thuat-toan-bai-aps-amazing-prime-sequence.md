---
title: "SPOJ.COM – Thuật toán bài APS - Amazing Prime Sequence"
date: "2016-11-29T22:21:18.083Z"
categories: ["spoj", "Tham lam - Greedy"]
tags: ["phạm văn lâm", "spoj.com", "thuật toán", "thuật toán spoj.com", "tham lam greedy"]
keywords: "Thuật toán bài APS"
---

## Đề bài:

Bablu rất yêu thích với những dãy số. Sau khi học về dãy số Fibonaci ở lớp 9, anh ấy đã rất ấn tượng với nó và đã thiết kế ra một dãy số cho riêng mình theo quy luật sau: 

```
a[0] = a[1] = 0; 
Với n > 1 thì a[n] = a[n-1] + f(n) với f(n) là thừa số nguyên tố nhỏ nhất của n. 
```

Bablu cũng rất yêu thích lập trình. Vì vậy, anh ta đã viết ra một chương trình để tìm ra ```a[n]```. Nhưng bởi vì anh ấy mới học lớp 9 nên anh ấy không giỏi về lập trình. Do đó, anh ấy nhờ bạn giúp đỡ. Nhiệm vụ của bạn là phải tìm ra số ```a[n]``` của dãy trên.

### Đầu vào:

Sẽ có nhiều test case. Dòng đầu tiên là số T - số lượng test case, T <= 100\. T dòng tiếp theo chứa 1 số nguyên duy nhất N thỏa mãn 1 < N < 10^7.

### Đầu ra:

Mỗi test case, in ra số ```a[N]```.

### Ví dụ:

**Đầu vào:**

```
3
2
3
4
```

**Đầu ra:**

```
2
5
7
```

### Giải thích:
  
Dãy số sẽ như sau: 

```  
a[0] = a[1] = 0; 
a[2] = a[1] + f[2] = 0 + 2 = 2; vì thừa số nguyên tố nhỏ nhất của 2 là 2. 
a[3] = a[2] + f[3] = 2 + 3 = 5; vì thừa số nguyên tố nhỏ nhất của 3 là 3. 
a[4] = a[3] + f[4] = 5 + 2 = 7; vì thừa số nguyên tố nhỏ nhất của 3 là 2. 
```

_Các bạn có thể tham khảo link gốc đề bài và submit code tại đây:[ http://www.spoj.com/problems/APS/](http://www.spoj.com/problems/APS/)_

### Phân tích:

  * Ta sẽ sử dụng [thuật toán tham lam](/category/tham-lam-greedy/) để giải quyết bài toán. Với bài toán này, ta không thể tính lại dãy số với mỗi test case được. Vì như vậy sẽ dẫn đến time limit.
  
  * Vì dãy số chỉ có một nên ta sẽ sinh ra dãy số 1 lần. Rồi sau đó, với mỗi giá trị của N ta sẽ in ra ```a[N]```.
  
  * Ta sẽ sử dụng một mảng để đánh dấu xem số i có phải là số nguyên tố hay không. Đồng thời lưu lại thừa số nguyên tố nhỏ nhất của i. Giả sử dùng mảng ```a[]```. Khi đó nếu ```a[i] = 0``` thì số i là số nguyên tố, ```a[i] = k``` thì số i không phải là số nguyên tố và thừa số nguyên tố nhỏ nhất của i là k.
  
  * Sau đó, tôi sẽ dùng một mảng để lưu dãy số cần tìm, giả sử là dãy ```r[]```. Khi đó với mỗi số i: nếu ```a[i]``` không là số nguyên tố thì ```r[i] = r[i - 1] + a[i]```. nếu ```a[i]``` là số nguyên tố thì ```r[i] = r[i - 1] + i``` (vì thừa số nguyên tố nhỏ nhất của một số nguyên tố là chính nó).

## Lời giải:

(Các bạn nên tự mình nghĩ ra thuật toán của bài toán trước khi tham khảo code của tôi nhé. Hãy phát huy tối đa khả năng sáng tạo của bản thân. Hơn nữa code tôi viết ra cũng chưa thật sự tối ưu. Nên rất mong nhận được sự chia sẻ của các bạn.)

### Code C/C++:

`gist:completejavascript/dd2db8c36b2a3cc4578c24f17d812768`

### _Code by Phạm Văn Lâm._