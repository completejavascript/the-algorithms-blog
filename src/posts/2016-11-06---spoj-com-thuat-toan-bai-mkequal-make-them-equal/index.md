---
title: "SPOJ.COM – Thuật toán bài MKEQUAL - Make them equal !"
date: "2016-11-06T14:48:18.083Z"
categories: ["spoj", "Tham lam - Greedy"]
tags: ["phạm văn lâm", "spoj.com", "thuật toán", "thuật toán spoj.com", "tham lam greedy"]
keywords: "Thuật toán bài MKEQUAL"
---

## Đề bài:

Bạn có một dãy gồm N phần tử. Tại bất kì lượt di chuyển nào, bạn chọn ra 2 chỉ số i và j ( 0 <= i, j < N và i != j ) và tăng giá trị tại một chỉ số và giảm giá trị tại chỉ số còn lại. Bạn có thể thực hiện lần di chuyển này với số lần bất kì. Hỏi số phần tử lớn nhất có thể mà chúng có giá trị bằng nhau (sau bất kì số lần di chuyển nào).

### Đầu vào:

Đầu vào bao gồm số T là số lượng test case, 1 <= T <= 100\. Sau đó là T test case, mỗi cái bao gồm số N - là số lượng phần tử của mảng ở dòng đầu tiên 1 <= N <= 100000\. Dòng tiếp theo chứa N số nguyên được phân cách bởi dấu cách, có giá trị từ 0 đến 100000.

### Đầu ra:

Mỗi test case in ra trên một dòng giá trị cần tìm.

### Ví dụ:

**Đầu vào:**

```
1
4
1 2 3 4
```

**Đầu ra:**

3

_Các bạn có thể tham khảo link gốc đề bài và submit code tại đây: [http://www.spoj.com/problems/MKEQUAL/](http://www.spoj.com/problems/MKEQUAL/)_

### Phân tích:

  * Tôi sử dụng [thuật toán tham lam Greedy](/category/tham-lam-greedy/) để giải quyết bài toán.
  
  * Tôi có nhận xét là nếu như tổng của N số đó (Sum) mà chia hết cho N thì chắc chắn sẽ có cách để chuyển hết N số đó về số có giá trị (Sum / N). Do đó kết quả sẽ là N.
  
  * Ngược lại. tôi có thể chuyển N số đó thành N - 1 số có giá trị (Sum / N) và số còn lại có giá trị tùy ý. Kết quả là N - 1.
  
  * Ví dụ 1: tôi có dãy N = 4 số: 3 5 6 10
    * Tổng là Sum = 3 + 5 + 6 + 10 = 24 => Sum / N = 24 / 4 = 6\. Do đó tôi sẽ chuyển được hết 4 số này về giá trị = 6, bằng cách: 
      * Tăng 3 và giảm 10: sau 3 lần tôi được dãy:  6  5  6  7 
      * Tăng 5 và giảm 7: sau 1 lần tôi đưa được về dãy: 6 6 6 6
    * Vậy kết quả = N = 4
  
  * Ví dụ 2: dãy N = 4 số: 1 2 3 4
    * Tổng là Sum = 1 + 2 + 3 + 4 = 10 => Sum / N = 10 / 4 = 2 (chia nguyên). Do đó tôi sẽ chuyển được 4 số này về dạng là có 3 số = 2 và số còn lại có giá trị khác 2. 
      * Tăng 1, giảm 3: sau một lần tôi đã có dãy: 2 2 2 4. 
    * Kết quả = N - 1 = 3

## Lời giải:

(Các bạn nên tự mình nghĩ ra thuật toán của bài toán trước khi tham khảo code của tôi nhé. Hãy phát huy tối đa khả năng sáng tạo của bản thân. Hơn nữa code tôi viết ra cũng chưa thật sự tối ưu. Nên rất mong nhận được sự chia sẻ của các bạn.)

### Code C/C++:

`gist:completejavascript/c4f4c9277cdf00b775f7af710c9b107b`

_Code by Phạm Văn Lâm._

