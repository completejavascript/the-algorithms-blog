---
title: "SPOJ.COM – Thuật toán bài BROKEN - Broken Keyboard"
date: "2016-11-29T23:08:18.083Z"
categories: ["spoj", "Tham lam - Greedy"]
tags: ["phạm văn lâm", "spoj.com", "thuật toán", "thuật toán spoj.com", "tham lam greedy"]
keywords: "Thuật toán bài BROKEN"
---

## Đề bài:

Bàn phím của Bruce Force bị hỏng, chỉ một vài phím là vẫn còn hoạt động. Bruce đã nhận ra rằng anh ấy vẫn có thể viết chữ bằng việc thay đổi cách bố trí của các phím mỗi khi anh ấy cần nhập chữ cái mà hiện tại nó không thuộc m chữ cái còn hoạt động. 

Bạn được đưa cho một dòng chữ mà Bruce muốn gõ. Và anh ấy yêu cầu bạn để nói cho anh ấy biết số lượng tối đa của những kí tự liên tiếp trong dòng chữ mà có thể được gõ mà không phải thay đổi cách bố trí của các kí tự trên bàn phím. Để đơn giản, chúng ta giả sử rằng mỗi phím trên bàn phím chỉ đại diện cho một chữ cái và không thể gõ chữ cái khác bằng việc gõ tổ hợp phím. Điều này có nghĩa là Bruce muốn biết độ dài lớn nhất của xâu con của dòng chữ cho ban đầu - cái mà bao gồm tối đa m kí tự khác nhau.

### Đầu vào:

Bao gồm nhiều test case, mỗi test case bao gồm 2 dòng. Dòng đầu tiên bao gồm số nguyên m (_1 ≤ m ≤ 128_), xác định số phím trên bàn phím còn hoạt động. Dòng thứ 2 của mỗi test case chứa dòng chữ mà Bruce muốn gõ. Giả sử rằng độ dài của dòng chữ không vượt quá 1000000 kí tự. Chú ý rằng dòng chữ đầu vào có thể chứa nhiều dấu cách, và dấu cách được xử lí giống như những kí tự khác. 

Test case cuối cùng theo sau bởi một dòng chứa số 0.

### Đầu ra:

Mỗi test case in ra trên một dòng độ dài lớn nhất cần tìm.

### Ví dụ:

**Đầu vào:**

```
5
This can't be solved by brute force.
1
Mississippi
0
```

**Đầu ra:**

```
7
2
```

### Giải thích:

  * Test case thứ nhất: xâu con thỏa mãn là: "_by_bru" ('_' biểu diễn dấu cách)
  * Test case thứ hai: xâu con thỏa mãn là: "ss" 
  
_Các bạn có thể tham khảo link gốc đề bài và submit code tại đây: [http://www.spoj.com/problems/BROKEN/](http://www.spoj.com/problems/BROKEN/)_

### Phân tích:

  * Tôi sẽ sử dụng [thuật toán tham lam Greedy](/category/tham-lam-greedy/) để giải bài toán.
  
  * Ở đây tôi sẽ sử dụng 2 biến để đánh dấu vị trí bắt đầu và vị trí đang xét hiện tại. Xâu con đang xét chính là xâu con từ vị trí bắt đầu đến vị trí hiện tại. Và tôi sẽ duyệt từ đầu cho đến cuối của dãy.
  
  * Đồng thời tôi sử dụng một mảng đếm số lượng các kí tự hiện tại. Từ đó tôi tính được số kí tự khác nhau của xâu con. Trong quá trình duyệt tôi sẽ tìm được xâu con có độ dài lớn nhất.
  
  * Cụ thể mời bạn xem code phía dưới để hiểu rõ hơn về thuật toán tham lam của tôi.

## Lời giải:

(Các bạn nên tự mình nghĩ ra thuật toán của bài toán trước khi tham khảo code của tôi nhé. Hãy phát huy tối đa khả năng sáng tạo của bản thân. Hơn nữa code tôi viết ra cũng chưa thật sự tối ưu. Nên rất mong nhận được sự chia sẻ của các bạn.)

### Code C/C++:

`gist:completejavascript/ccb38cb8e4b535e3e90c99f8034f2a19`

### _Code by Phạm Văn Lâm._