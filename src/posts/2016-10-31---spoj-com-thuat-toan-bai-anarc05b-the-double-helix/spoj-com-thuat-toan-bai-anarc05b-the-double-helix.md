---
title: "SPOJ.COM – Thuật toán bài ANARC05B - The Double HeLiX"
date: "2016-10-31T20:06:18.083Z"
categories: ["spoj", "Quy hoạch động - Dynamic programming", "Chia để trị - Divide and Conquer"]
tags: ["phạm văn lâm", "spoj.com", "thuật toán", "thuật toán spoj.com", "quy hoạch động dynamic programming", "chia để trị divide and conquer"]
keywords: "Thuật toán bài ANARC05B"
---

## Đề bài:

Cho 2 dãy số nguyên hữu hạn, tăng nghiêm ngặt. Bất kì những số nguyên nào giữa 2 dãy thì đều tạo nên điểm giao nhau giữa hai dãy. Ví dụ với 2 dãy sau, những điểm giao nhau là những điểm được in đậm: 

  * Dãy 1: 3 5 **7** 9 20 **25** 30 40 **55** 56 **57** 60 62
  * Dãy 2: 1 4 **7** 11 14 **25** 44 47 **55** **57** 100 
  
Bạn có thể di chuyển giữa hai dãy bằng cách sau: 

  * Cách 1\. Bạn bắt đầu từ điểm đầu của 1 trong 2 dãy. Rồi di chuyển về phía trước. 
  * Cách 2\. Tại điểm nối, bạn có 2 sự lựa chọn là tiếp tục di chuyển trên dãy đó, hoặc là chuyển sang dãy mới. 
  
Mục đích là tìm ra đường đi cho ra tổng các ô bạn đi là lớn nhất. Trong ví dụ trên tổng lớn nhất là 450, nó là kết quả của việc đi theo đường: 

```
3, 5, 7, 9, 20, 25, 44, 47, 55, 56, 57, 60, và 62
```

### Đầu vào:

Có nhiều testcase, mỗi cái được xác định trên 2 dòng. Mỗi dòng biểu diễn một dãy và có định dạng: 

```
n v1 v2 ... vn
``` 

Trong đó, n là độ dài của dãy, vi là phần tử thứ i của dãy. Mỗi dãy sẽ có ít nhất 1 phần tử nhưng không lớn hơn 10000\. Tất cả phần tử đều thuộc từ -10000 đến 10000 (bao gồm 2 giá trị biên). Dòng cuối cùng của đầu vào sẽ là số 0, và nó không thuộc vào các test case.

### Đầu ra:

Mỗi một test case, in ra trên một dòng giá trị lớn nhất có thể.

### Ví dụ:

**Đầu vào:**

```
13 3 5 7 9 20 25 30 40 55 56 57 60 62
11 1 4 7 11 14 25 44 47 55 57 100
4 -5 100 1000 1005
3 -12 1000 1001
0
```

**Đầu ra:**

```
450
2100
```

_Các bạn có thể tham khảo link gốc đề bài và submit code tại đây: [http://www.spoj.com/problems/ANARC05B/](http://www.spoj.com/problems/ANARC05B/)_

### Phân tích:

  * Ở đây, tôi kết hợp 2 thuật toán là: [thuật toán chia để trị  Divide and conquer](/category/chia-de-tri-divide-and-conquer/) và [thuật toán quy hoạch động Dynamic programming](/category/quy-hoach-dong-dynamic-programming/) để giải quyết bài toán.
  
  * Thuật toán chia để trị nhằm mục đích tìm ra thành phần chung nhau của 2 dãy. Ý tưởng ở đây là với mỗi số thuộc dãy 1\. Tôi sẽ sử dụng tìm kiếm nhị phân để tìm ra vị trí của nó trong dãy số 2\. Kết quả là tôi xác định được vị trí trùng nhau của các phần tử trên 2 dãy.
  
  * Thuật toán quy hoạch động là để tìm ra giá trị lớn nhất tại mỗi điểm khi đi từ đầu đến cuối dãy. Một điều chú ý ở đây là tại mỗi dãy, ở các điểm trùng nhau ta có thể đi sang nhau. Do đó, giá trị lớn nhất tại 2 điểm trùng nhau khi ta đi từ đầu dãy đến đó là bằng nhau và bằng giá trị lớn nhất của 2 phần tử ở hai dãy.

## **Lời giải:**

(Các bạn nên tự mình nghĩ ra thuật toán của bài toán trước khi tham khảo code của tôi nhé. Hãy phát huy tối đa khả năng sáng tạo của bản thân. Hơn nữa code tôi viết ra cũng chưa thật sự tối ưu.  Nên rất mong nhận được sự chia sẻ của các bạn.)

### **Code C/ C++:**

`gist:completejavascript/745cacee3cc00da823aca0f2b17a7d63`

_Code by Phạm Văn Lâm._


