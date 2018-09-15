---
title: "SPOJ.COM – Thuật toán bài TDPRIMES - Printing some primes"
date: "2016-10-23T21:31:18.083Z"
categories: ["spoj", "Tham lam - Greedy"]
tags: ["phạm văn lâm", "spoj.com", "thuật toán", "thuật toán spoj.com", "số nguyên tố", "tham lam greedy", "thuật toán sàng"]
keywords: "Thuật toán bài TDPRIMES"
---

## Đề bài:

Yêu cầu của bài toán vô cùng đơn giản. Hãy in ra tất cả số nguyên tố nhỏ hơn 10^8.

### Đầu vào:

Không có đầu vào

### Đầu ra:

Để giúp cho bài toán có ít kết quả hơn, hãy in ra tất cả số nguyên tố thứ 1, 101, 201,...(những số chia cho 100 thì dư 1).

#### Ví dụ:

**Đầu vào:** 

**Đầu ra:** 

```
2 
547 
1229 
... 
99995257 
99996931 
99998953
``` 

_Các bạn có thể tham khảo link gốc đề bài và submit code tại đây: [http://www.spoj.com/problems/TDPRIMES/](http://www.spoj.com/problems/TDPRIMES/)_

### Phân tích:

  * Bài này tôi xếp vào loại sử dụng [thuật toán tham lam Greedy](/category/tham-lam-greedy/) 
  
  * Ở đây, nếu suy nghĩ theo cách thông thường, chắc hẳn bạn sẽ viết một hàm kiểm tra xem 1 số có phải số nguyên tố hay không. Sau đó, duyệt từ 1 cho đến 10^8 để kiểm tra từng số xem nó có phải số nguyên tố hay không. Rồi in ra những số nguyên tố thứ 1, 101, 201,... Tuy nhiên, nếu làm theo cách này chắc chắn bạn sẽ bị time limit.
  
  * Đối với bài toán này, tôi sử dụng phương pháp [sàng Eratosthenes](https://vi.wikipedia.org/wiki/S%C3%A0ng_Eratosthenes) để tìm ra các số nguyên tố. 
  
  * Để tìm các số nguyên tố nhỏ hơn hoặc bằng số tự nhiên N bằng sàng Eratosthenes, ta làm như sau:
    * Bước 1: Tạo 1 danh sách các số tự nhiên liên tiếp từ 2 đến n: (2, 3, 4,..., n). 
    * Bước 2: Giả sử tất cả các số trong danh sách đều là số nguyên tố. Trong đó, p = 2 là số nguyên tố đầu tiên. 
    * Bước 3: Tất cả các bội số của p: 2p, 3p, 4p,... sẽ bị đánh dấu vì không phải là số nguyên tố. -
    * Bước 4: Tìm các số còn lại trong danh sách mà chưa bị đánh dấu và phải lớn hơn p. Nếu không còn số nào, dừng tìm kiếm. Ngược lại, gán cho p giá trị bằng số nguyên tố tiếp theo và quay lại bước 3.

## Lời giải:

(Các bạn nên tự mình nghĩ ra thuật toán của bài toán trước khi tham khảo code của tôi nhé. Hãy phát huy tối đa khả năng sáng tạo của bản thân. Hơn nữa code tôi viết ra cũng chưa thật sự tối ưu.  Nên rất mong nhận được sự chia sẻ của các bạn.)

### Code C/C++:

`gist:completejavascript/3a4a6230b196e756a84b4af94172e26c`

_Code by Phạm Văn Lâm._