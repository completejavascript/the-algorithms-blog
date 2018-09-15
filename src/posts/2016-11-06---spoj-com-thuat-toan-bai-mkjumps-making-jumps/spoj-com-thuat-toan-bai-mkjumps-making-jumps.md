---
title: "SPOJ.COM – Thuật toán bài MKJUMPS - Making Jumps"
date: "2016-11-06T14:21:18.083Z"
categories: ["spoj", "Quay lui có điều kiện - Backtracking"]
tags: ["phạm văn lâm", "spoj.com", "thuật toán", "thuật toán spoj.com", "quay lui có điều kiện backtracking"]
keywords: "Thuật toán bài MKJUMPS"
---

## Đề bài:

Quân mã là một quân cờ được sử dụng trong trò chơi đánh cờ. Bàn cờ là một mảng gồm những phần tử hình vuông. Mỗi khi quân mã di chuyển. Vị trí di chuyển đến là hai hàng và một cột hay hai cột và một hàng tính từ vị trí xuất phát. Vì vậy, một con mã bắt đầu từ vị trí hàng r, cột c - được kí hiệu là (r, c), có thể di chuyển đến các vị trí (r-2,c-1), (r-2,c+1), (r-1,c-2), (r-1,c+2), (r+1,c-2), (r+1,c+2), (r+2,c-1) hoặc (r+2,c+1). Dĩ nhiên con mã sẽ không thể di chuyển tới vị trí không nằm trên bàn cờ. 

Giả sử bàn cờ không phải hình vuông, nhưng thay vào đó là có những hàng, với số lượng cột ở bên phải của phần tử đầu tiên. Hỏi có bao nhiêu vị trí mà với vị trí ban đầu của con mã là ở trên cùng bên trái - đánh dấu *, sẽ không bao giờ đi tới với bất kì số lần di chuyển nào, với điều kiện không được nghỉ trên một ô nào nhiều hơn một lần. 

Nếu cần thiết, quân mã không được phép di chuyển tới những vùng nằm ngoài của bàn cờ mà nó chỉ đi được tới những ô bên trong bàn cờ.

### Đầu vào:

Có nhiều test case. Mỗi test case bắt đầu với số nguyên n, trong khoảng từ 1 đến 10 - xác định số lượng hàng. Sau đó là n cặp số nguyên, mỗi cặp tương ứng với một hàng. Trong đó, số nguyên đầu tiên xác định số ô vuông bị bỏ qua ở đầu của hàng và số nguyên thứ hai là số ô vuông của hàng đó. Test case cuối cùng theo sau bởi số 0. 

Ví dụ cho trường hợp ở hình vẽ trên: 

```
7 0 3 0 3 0 4 0 4 1 3 1 7 4 4
```

Số hàng, số cột tối đa là 10\. Do đó mọi cấu hình của bàn cờ sẽ đều phải nằm trong hình vuông 10x10.

### Đầu ra:

Với mỗi đầu ra, in ra chỉ số test case, và số lượng hình vuông không được thăm theo ví dụ mẫu sau đây.

### Ví dụ:

**Đầu vào:**

```
7 0 3 0 3 0 4 0 4 1 3 1 7 4 4
3 0 3 0 3 0 3
2 0 1 2 1
0
```

**Đầu ra:**

```
Case 1, 4 squares can not be reached.
Case 2, 1 square can not be reached.
Case 3, 0 squares can not be reached.
```

_Các bạn có thể tham khảo link gốc đề bài và submit code tại đây: [http://www.spoj.com/problems/MKJUMPS/](http://www.spoj.com/problems/MKJUMPS/)_

### Phân tích:

  * Bài toán này tôi sẽ sử dụng [thuật toán quay lui có điều kiện Backtracking](/category/quay-lui-co-dieu-kien-backtracking/) để duyệt hết tất cả các cách đi. Với chú ý đó là quân mã có thể đi 8 cách khác nhau tính từ 1 ô. Và mỗi ô chỉ được đi qua một lần.
  
  * Một chú ý khi in ra kết quả. Đó là nếu chỉ có một ô không được đi qua thì in "...square..." (số ít), còn lại thì phải in "...squares..." (số nhiều).

## Lời giải:

(Các bạn nên tự mình nghĩ ra thuật toán của bài toán trước khi tham khảo code của tôi nhé. Hãy phát huy tối đa khả năng sáng tạo của bản thân. Hơn nữa code tôi viết ra cũng chưa thật sự tối ưu. Nên rất mong nhận được sự chia sẻ của các bạn.)

### Code C/C++:

`gist:completejavascript/fd0eacb84aa4f43788f2a318c5eaaecd`

_Code by Phạm Văn Lâm._