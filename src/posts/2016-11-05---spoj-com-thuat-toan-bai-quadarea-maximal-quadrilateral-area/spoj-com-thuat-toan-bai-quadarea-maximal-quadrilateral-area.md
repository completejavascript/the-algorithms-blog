---
title: "SPOJ.COM – Thuật toán bài QUADAREA - Maximal Quadrilateral Area"
date: "2016-11-05T14:52:18.083Z"
categories: ["spoj", "Tham lam - Greedy"]
tags: ["phạm văn lâm", "spoj.com", "thuật toán", "thuật toán spoj.com", "tham lam greedy"]
keywords: "Thuật toán bài QUADAREA"
---

## Đề bài:

Bạn đang cố gắng để xây dựng một ngôi nhà. Nhưng không may, hiện tại bạn chỉ có sẵn 4 tường với chiều dài lần lượt là a, b, c, d. Bạn muốn ngôi nhà của bạn là lớn nhất có thể. Vì vậy, bạn muốn biết diện tích lớn nhất có thể của những hình tứ giác mà bạn có thể xây từ 4 bức tường với chiều dài đó.

### Đầu vào:

Dòng đầu tiên chứa số nguyên T, 1 ≤ T ≤ 2,000, là số lượng test case. Mỗi test case chứa một dòng gồm 4 số thực: a, b, c, d, với 0 < a, b, c, d < 1,000\. Chú ý rằng luôn luôn có thể tồn tại hình tứ giác với những độ dài trên, tức là tổng của 3 cạnh luôn lớn hơn cạnh còn lại.

### Đầu ra:

Mỗi test case, in ra một dòng là một số biểu diễn diện tích lớn nhất có thể. Kết quả được làm tròn 2 chữ số thập phân.

### Ví dụ:

**Đầu vào:**

```
2
1 2 1 2
0.5 0.5 0.5 0.5
```

**Đầu ra:**

```
2.00
0.25
```

_Các bạn có thể tham khảo link gốc đề bài và submit code tại đây: [http://www.spoj.com/problems/QUADAREA/](http://www.spoj.com/problems/QUADAREA/)_

### Phân tích:

  * Theo như quan điểm của tôi thì đây thực chất là một bài toán mẹo. Do đó tôi sẽ xếp nó vào loạt bài sử dụng [thuật toán tham lam Greedy.](/category/tham-lam-greedy/)

  * Thực tế, với một hình tứ giác có 4 cạnh xác định trước. Thì dù bạn có xoay nó như thế nào đi chăng nữa thì diện tích của nó cũng sẽ không thay đổi - là một giá trị duy nhất. Do đó, bạn chỉ cần tính diện tích bình thường. Tôi áp dụng [công thức Heron](https://vi.wikipedia.org/wiki/C%C3%B4ng_th%E1%BB%A9c_Heron) để tính diện tích tứ giác lồi.

## Lời giải:

(Các bạn nên tự mình nghĩ ra thuật toán của bài toán trước khi tham khảo code của tôi nhé. Hãy phát huy tối đa khả năng sáng tạo của bản thân. Hơn nữa code tôi viết ra cũng chưa thật sự tối ưu. Nên rất mong nhận được sự chia sẻ của các bạn.)

### Code C/C++:

`gist:completejavascript/387106905a27e41731278df1d9bc6743`

_Code by Phạm Văn Lâm._