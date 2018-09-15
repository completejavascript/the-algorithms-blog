---
title: "SPOJ.COM – Thuật toán bài QUE1 - Queue (Rookie)"
date: "2016-11-05T14:19:18.083Z"
categories: ["spoj", "Tham lam - Greedy"]
tags: ["phạm văn lâm", "spoj.com", "thuật toán", "thuật toán spoj.com", "tham lam greedy", "sắp xếp nhanh quick sort"]
keywords: "Thuật toán bài QUE1"
---

## Đề bài: 

Có N ngưới đang đứng ở một hàng đợi. Bạn được đưa cho chiều cao của mỗi người và số những người cao hơn và đứng trước anh ta. Bạn hãy tìm ra vị trí của mỗi người. 

### Đầu vào: 

Bắt đầu bằng số nguyên T - là số lượng test case. Sau đó là T test case. Mỗi test case bao gồm 3 dòng. Dòng đầu tiên là số nguyên N. Dòng thứ hai là N số nguyên biểu diễn chiều cao của N người. Dòng thứ ba là N số nguyên biểu diễn số người cao hơn đứng trước anh ta. 

### Đầu ra: 

In ra một dòng cho mỗi test case, bao gồm chiều cao của N người theo đúng thứ tự của vị trí đứng. 

### Ràng buộc: 

0 < T <= 100 

0 < N <= 1000 

### Ví dụ 

**Đầu vào:**

```
1
5
33 11 22 44 55
0 2 1 1 0
```

**Đầu ra:**

33 22 11 55 44

_Các bạn có thể tham khảo link gốc đề bài và submit code tại đây: [http://www.spoj.com/problems/QUE1/](http://www.spoj.com/problems/QUE1/)_ 

### Phân tích:

  * Ở đây tôi sử dụng [thuật toán tham lam Greedy](/category/tham-lam-greedy/) để giải quyết bài toán. 
  
  * Trước tiên, tôi sẽ sắp xếp dãy theo thứ tự tăng dần của độ cao. Sau khi có có dãy theo đúng thứ tự rồi, việc còn lại là tìm vị trí đúng cho từng người là vô cùng đơn giản.
  
  * Tôi sử dụng một mảng để lưu kết quả. Với mỗi người tôi sẽ duyệt từ trái sang phải và để lại số ô '-1' (tức là chưa được xếp) bằng với số người cao hơn phía trước người đang xét. 
  
  * Ví dụ với bài toán trên: 
  
    * Đầu tiên sắp xếp dãy tăng dần theo chiều cao tôi được 2 dãy như sau:

      ```
      11 22 33 44 55
      2  1  0  1  0
      ```

    * Một mảng kết quả, khởi tạo các giá trị là -1:

      ```-1 -1 -1 -1 -1```

    * Đầu tiên, xét chiều cao 11: do có 2 người cao hơn nên mảng kết quả trở thành:

      ```-1 -1 11 -1 -1 (2 số -1 phía trước là 2 người có chiều cao lớn hơn và đứng trước)```

    * Tiếp theo, xét chiều cao 22: có 1 người cao hơn nên mảng kết quả trở thành:

      ```-1 22 11 -1 -1```

    * Tương tự như vậy ta có kết quả là:

      ```33 22 11 -1 -1```

      ```33 22 11 -1 44```

      ```33 22 11 55 44```

## Lời giải: 

(Các bạn nên tự mình nghĩ ra thuật toán của bài toán trước khi tham khảo code của tôi nhé. Hãy phát huy tối đa khả năng sáng tạo của bản thân. Hơn nữa code tôi viết ra cũng chưa thật sự tối ưu. Nên rất mong nhận được sự chia sẻ của các bạn.) 

### Code C/C++: 

`gist:completejavascript/48cb4726ede67cd8966668cae468fa51`

_Code by Phạm Văn Lâm._