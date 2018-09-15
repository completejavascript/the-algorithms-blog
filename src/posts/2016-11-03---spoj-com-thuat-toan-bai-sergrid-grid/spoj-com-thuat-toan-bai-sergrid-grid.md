---
title: "SPOJ.COM – Thuật toán bài SERGRID - Grid"
date: "2016-11-03T21:16:18.083Z"
categories: ["spoj", "Tìm kiếm theo chiều rộng - BFS"]
tags: ["phạm văn lâm", "spoj.com", "thuật toán", "thuật toán spoj.com", "tìm kiếm theo chiều rộng bfs"]
keywords: "Thuật toán bài SERGRID"
---

## Đề bài:

Bạn đang ở trên một cái lưới nxm nơi mà mỗi ô vuông trên lưới đó có một số trên đó. Từ một ô cho trước trên lưới có một số có giá trị k. Một lần di chuyển bao gồm chính xác k ô vuông theo 4 hướng chính. Biết bạn không thể nhảy ra khỏi lưới. Hỏi số bước nhỏ nhất để di chuyển từ ô vuông trên cùng bên trái đến ô vuông dưới cùng bên phải là bao nhiêu.

### Đầu vào:

Mỗi đầu vào sẽ bao gồm một test case duy nhất. Chú ý rằng chương trình của bạn có thể được chạy nhiều lần trên những đầu vào khác nhau. Dòng đầu tiên của đầu vào bao gồm 2 số nguyên n và m được ngăn cách bởi dấu cách (1 <= n, m <= 500), biểu thị kích thước của lưới. Đảm bảo rằng ít nhất một cạnh của lưới (tức n hoặc m) sẽ lớn hơn 1\. n dòng tiếp theo, mỗi dòng chứa m chữ số và không có dấu cách, biểu thị ma trận nxm. Mỗi chữ số có giá trị từ 0 đến 9 (bao gồm cả 2 chữ số đó). Ô vuông trên cùng bên trái của lưới tương ứng với kí tự đầu tiên, của dòng đầu tiên, của mỗi test case. Ô vuông dưới cùng bên phải tương ứng với kí tự cuối cùng, của dòng cuối cùng, của mỗi test case.

### Đầu ra:

In ra duy nhất trên 1 dòng một số - biểu diễn giá trị là số bước nhỏ nhất để di chuyển từ góc trên cùng bên trái xuống góc dưới cùng bên phải. Nếu không thì in ra -1.

### Ví dụ:

**Đầu vào:**

```
5 4 
2120 
1203 
3113 
1120 
1110
```

**Đầu ra:**

6

_Các bạn có thể tham khảo link gốc đề bài và submit code tại đây: [http://www.spoj.com/problems/SERGRID/](http://www.spoj.com/problems/SERGRID/)_

### Phân tích:

Đây là bài toán cơ bản áp dụng [thuật toán tìm kiếm theo chiều rộng BFS](/category/tim-kiem-theo-chieu-rong-bfs/). Tôi sẽ bắt đầu từ điểm đầu tiên là điểm trên cùng bên trái. Rồi đi tới các điểm kề với nó theo 4 hướng với quy tắc là số bước nhảy đúng bằng giá trị của ô đang xét hiện tại.

## Lời giải:

(Các bạn nên tự mình nghĩ ra thuật toán của bài toán trước khi tham khảo code của tôi nhé. Hãy phát huy tối đa khả năng sáng tạo của bản thân. Hơn nữa code tôi viết ra cũng chưa thật sự tối ưu. Nên rất mong nhận được sự chia sẻ của các bạn.)

### **Code C/C++:**

`gist:completejavascript/cf2c85e4e01a4e5f3ff9ef098003e620`

_Code by Phạm Văn Lâm._
