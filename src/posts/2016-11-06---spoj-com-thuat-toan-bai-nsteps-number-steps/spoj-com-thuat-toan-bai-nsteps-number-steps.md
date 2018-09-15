---
title: "SPOJ.COM – Thuật toán bài NSTEPS - Number Steps"
date: "2016-11-06T10:58:18.083Z"
categories: ["spoj", "Tham lam - Greedy"]
tags: ["phạm văn lâm", "spoj.com", "thuật toán", "thuật toán spoj.com", "tham lam greedy"]
keywords: "Thuật toán bài NSTEPS"
---

## Đề bài:

Bắt đầu từ điểm có tọa độ (0,0) trên mặt phẳng. Chúng tôi đã viết sẵn những số nguyên không âm 0, 1, 2,.. như hình dưới. Ví dụ: 1, 2, 3 lần lượt được viết ở các điểm (1, 1), (2,0) và (3,1), và cách viết này sẽ được tiếp tục. 

Bạn hãy viết một chương trình đọc vào tọa độ (x, y) và viết ra số tương ứng với tọa độ đó (nếu có). Biết giá trị của tọa độ x, y đều thuộc từ 0 đến 10000.

### Đầu vào:

Dòng đầu tiên của đầu vào là số N - số lượng test case. N dòng tiếp theo, mỗi dòng sẽ gồm 2 số tương ứng là tọa độ x, y của một điểm.

### Đầu ra:

Với mỗi test case, in ra trên một dòng một số là số tương ứng với tọa độ đó nếu có. Ngược lại thì in ra No Number.

### Ví dụ:

**Đầu vào:**

```
3
4 2
6 6
3 4
```

**Đầu ra:**

```
6
12
No Number
```

_Các bạn có thể tham khảo link gốc đề bài và submit code tại đây: [http://www.spoj.com/problems/NSTEPS/](http://www.spoj.com/problems/NSTEPS/)_

### Phân tích:

  * Bài này sử dụng [thuật toán tham lam Greedy](/category/tham-lam-greedy/) để giải quyết. 
  
  * Trước tiên, bạn có thể thấy rằng các số sẽ nằm trên 2 đường thẳng có phương trình là y = x và y = x - 2\. Do đó, khi đọc vào một điểm (x, y), nếu như điểm đó không thuộc một trong hai đường trên thì có nghĩa là sẽ không có số. Ngược lại, chắc chắn sẽ có số.
  
  * Tiếp theo, vì các điểm thuộc 2 phương trình y = x và y = x - 2 nên tọa độ của chúng sẽ cùng chẵn hoặc cùng lẻ. Hơn nữa, tôi phát hiện ra một quy luật đó là:
  
    * Nếu x, y chẵn thì giá trị số = x + y.
    * Nếu x, y lẻ thì giá trị số = x + y - 1.

## Lời giải:

(Các bạn nên tự mình nghĩ ra thuật toán của bài toán trước khi tham khảo code của tôi nhé. Hãy phát huy tối đa khả năng sáng tạo của bản thân. Hơn nữa code tôi viết ra cũng chưa thật sự tối ưu. Nên rất mong nhận được sự chia sẻ của các bạn.)

### Code C/C++:

`gist:completejavascript/fb41a6d81d4a9a01388e7701a3b283fe`

_Code by Phạm Văn Lâm._


