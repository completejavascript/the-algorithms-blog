---
title: "SPOJ.COM - Thuật toán bài SDITSAVL - AVL Tree"
date: "2017-06-07T18:05:18.083Z"
categories: ["spoj", "Đồ thị và cây - Graph and Tree"]
tags: ["phạm văn lâm", "spoj.com", "thuật toán", "thuật toán spoj.com", "cây AVL", "cây cân bằng", "đồ thị và cây graph and tree"]
keywords: "Thuật toán bài SDITSAVL"
---

## Đề bài

Bài toán này là bài toán mở rộng (với một chút thay đổi) từ bài toán: [SDITSBST](http://www.spoj.com/problems/SDITSBST/). Trong bài toán này, bạn được đưa cho 2 loại query: 

  * 1\. Chèn một số nguyên x vào list 
  * 2\. Cho số x. 
  
Hãy tìm số k biểu diễn chỉ số của số x trong list nếu như list được sắp xếp theo thứ tự tăng dần. Chú ý rằng: bài toán này chỉ số bắt đầu tính từ 1.

Như tên bài toán đã gợi ý, chúng ta sẽ sử dụng cây nhị phân cân bằng, một trong những ví dụ của cây nhị phân cân bằng là cây AVL

### Đầu vào

Dòng đầu tiên là số nguyên Q: biểu diễn số query. Q dòng tiếp theo sẽ biểu diễn 1 trong 2 loại query với định dạng như sau: 

1 x: chèn số nguyên x vào list 

2 x: tìm chỉ số k của số nguyên x nếu như list được sắp xếp theo thứ tự tăng dần

### Đầu ra

Với mỗi query loại 2, in ra kết quả số nguyên k nếu như số nguyên x tồn tại trong list. Ngược lại in ra dòng "Data tidak ada".

### Ví dụ

**Input:** 

```
10 
1 100 
1 74 
2 100 
2 70 
1 152 
1 21 
1 33 
2 100 
2 21 
2 1 
```

**Output:** 

```
2 
Data tidak ada 
4 
1 
Data tidak ada
```

### Giải thích

Cho đến query thứ 3, list bao gồm {74, 100}. Vì vậy, bạn phải in ra 2 - chỉ số của số 100 trong list. Đến query thứ 4, list vẫn không thay đổi, vì 70 không có trong list nên kết quả sẽ là "Data tidak ada".

Đến 3 query cuối cùng, list bao gồm {21, 33, 74, 100, 152}. Vì vậy, kết quả cho query thứ 8, 9, 10 lần lượt là 4, 1, "Data tidak ada".

### Ràng buộc

1 ≤ Q ≤ 200000 

1 ≤ x ≤ 10<sup>6 </sup> 

Đảm bảo rằng tất cả số nguyên chèn vào list là phân biệt.

### Chú ý

Không đảm bảo rằng input sẽ là cây cân bằng. Bạn phải tự cân bằng cây. 

Các bạn có thể tham khảo link gốc đề bài và submit code tại đây: [http://www.spoj.com/problems/SDITSAVL/](http://www.spoj.com/problems/SDITSAVL/)

### Phân tích

Bài này không có gì phải băn khoăn về cách giải, vì chúng ta sẽ dùng [cây](/category/do-thi-va-cay-graph-and-tree/) AVL. Vấn đề ở đây là cách cấu trúc mỗi node trong cây. Sau đây là cấu trúc mà tôi đã làm: 

```
struct Node { 
  int x, height, numLeft, numRight; 
  Node *left, *right; 
}; 
```

**Trong đó:**

  * x: giá trị của số nguyên chèn vào
  * height: độ cao của node. Node lá sẽ có độ cao là 1\. Độ cao của node cha là giá trị lớn nhất của độ cao hai node con.
  * numLeft: số node con, cháu,.. bên trái một node
  * numRight: số node con, cháu... bên phải một node

## Lời giải:

(Các bạn nên tự mình nghĩ ra thuật toán của bài toán trước khi tham khảo code của tôi nhé. Hãy phát huy tối đa khả năng sáng tạo của bản thân. Hơn nữa code tôi viết ra cũng chưa thật sự tối ưu. Nên rất mong nhận được sự chia sẻ của các bạn.) 

`gist:completejavascript/b92b3c524d3d7754bc939f2534f4b835`

_Thân ái, Phạm Văn Lâm_