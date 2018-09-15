---
title: "SPOJ.COM – Thuật toán bài NDCCARD - Các lá bài Blackjack"
date: "2016-10-20T21:40:18.083Z"
categories: ["spoj", "Chia để trị - Divide and Conquer"]
tags: ["phạm văn lâm", "spoj.com", "thuật toán", "thuật toán spoj.com", "chia để trị divide and conquer", "sắp xếp trộn Merge Sort"]
keywords: "Thuật toán bài NDCCARD"
---

## Đề bài:

Blackjack là trò chơi đánh bài khá phổ biến, mục tiêu là có được những lá bài mà tổng của nó là lớn nhất nhưng không vượt quá 21\. Lấy ý tưởng từ trò chơi này các bạn <span style="color: #0000ff;">khaihanhdk</span> <span style="color: #0000ff;">huytion156</span> <span style="color: #0000ff;">thanhdat01234</span> đã sáng tạo ra một phiên bản mới của trò chơi cho riêng mình. 

Trong phiên bản trò chơi mới này các bạn đã viết lên mỗi lá bài một số nguyên dương. Người tham gia trò chơi được cung cấp một tập gồm N lá bài và một số nguyên dương M. Nhiệm vụ của người chơi là phải chọn ra 3 lá bài từ tập lá bài đã cho sao cho tổng các số trên 3 lá bài đã chọn là lớn nhất và không vượt quá M. 

**Yêu cầu:**  Bạn hãy tìm kết quả tốt nhất có thể có của trò chơi trên.

### Đầu vào:

Dòng đầu ghi số nguyên dương N, M (N <= 10000 , M <= 500000). Dòng sau ghi N số nguyên dương đôi một khác nhau là các số được ghi trên N lá bài ( 1 ≤ a[i] ≤ 10000).

### Đầu ra:

Ghi trên một dòng duy nhất là kết quả bài toán. Test luôn đảm bảo có kết quả.

### Ví dụ:

**Đầu vào:** 

```
6 20 
7 9 6 2 1 5
``` 

**Đầu ra:** 

20 

**Giải thích**: 

Chọn các lá bài mang số 9 , 6 , 5 ta có 9+6+5 = 20 <= M 

_Các bạn có thể tham khảo link gốc đề bài và submit code tại đây: [http://www.spoj.com/problems/NDCCARD/](http://www.spoj.com/problems/NDCCARD/)_

### Phân tích:

  * Yêu cầu tìm ra 3 số có tổng không vượt quá M. Do đó, trong quá trình nhập đầu vào, tôi sẽ loại bỏ luôn những số > M.

  * Ở đây, tôi sẽ dùng thuật toán sắp xếp trộn Merge Sort để sắp xếp dãy đầu vào theo thứ tự tăng dần. 
  
  * Sau đó, tôi sẽ duyệt dãy sau khi sắp xếp. Với mỗi cặp 2 số ```a[i1][j1]``` và ```a[i2][j2]```, tôi sẽ sử dụng [thuật toán chia để trị - Divide and Conquer](/category/chia-de-tri-divide-and-conquer/) để tìm ra số lớn nhất thỏa mãn tổng 3 số không vượt quá M. Sau khi duyệt hết tất cả các trường hợp, tôi sẽ tìm được kết quả.

## Lời giải:

(Các bạn nên tự mình nghĩ ra thuật toán của bài toán trước khi tham khảo code của tôi nhé. Hãy phát huy tối đa khả năng sáng tạo của bản thân. Hơn nữa code tôi viết ra cũng chưa thật sự tối ưu. Nên rất mong nhận được sự chia sẻ của các bạn.)

### **Code C/C++:**

`gist:completejavascript/8d0373a3fec75bdcd8386d9f7a17e0bb`

_Code by Phạm Văn Lâm._