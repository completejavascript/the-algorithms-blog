---
title: "SPOJ.COM – Thuật toán bài IITKWPCO - Create Collections"
date: "2016-12-07T20:26:18.083Z"
categories: ["spoj", "Tham lam - Greedy"]
tags: ["phạm văn lâm", "spoj.com", "thuật toán", "thuật toán spoj.com", "tham lam greedy"]
keywords: "Thuật toán bài IITKWPCO"
---

## Đề bài:

Little Feluda rất thích chơi. Như bạn biết, anh ấy chỉ thích chơi với những con số. Vì vậy anh ấy được đưa cho những số n. Bây giờ hãy nhóm những số đó thành nhóm gồm 2 số. Anh ấy có thể định dạng nhóm gồm 2 số nếu số nhỏ hơn bằng một nửa số lớn hơn. 

Cho trước những số n. Hãy tìm ra số lượng nhóm tối đa thỏa mãn điều kiện trên.

### Đầu vào:

T: số lượng test case (1 <= T <= 100) 

Mỗi test case: 

Dòng đầu tiên chứa số n: (1 <= n <= 100) 

Dòng tiếp theo chứa n số cách nhau bởi một dấu cách. Mỗi số sẽ thuộc từ 1 đến 10^6.

### Đầu ra:

Với mỗi test case, in ra trên một dòng kết quả tìm được.

### Ví dụ:

**Đầu vào:**

```
2
2
1 2
3 
1 2 4
```

**Đầu ra:**

```
1
1
```

Các bạn có thể tham khảo link gốc đề bài và submit code tại đây: [http://www.spoj.com/problems/IITKWPCO/](http://www.spoj.com/problems/IITKWPCO/)

### Phân tích:

  * Tôi sẽ sử dụng [thuật toán tham lam Greedy](/category/tham-lam-greedy/) để giải. Thuật toán của tôi là tôi sẽ sử dụng mảng đếm để đếm tần suất xuất hiện của các số.
  
  * Sau đó, tôi sẽ duyệt từ 0 đến số MAX (1000000). Tôi sẽ kiểm tra nếu giá trị đếm tại i và 2*i là lớn hơn 0\. Thì lúc này sẽ xuất hiện cặp đôi có dạng như đầu bài. Chỉ cần tìm ra giá trị đếm nào nhỏ hơn thì đó là số cặp đôi thỏa mãn tìm thấy. Sau đó, cập nhật lại mảng đếm và tiếp tục duyệt cho đến hết.
  
  * Xin mời bạn theo dõi cách triển khai của tôi sau đây.

## Lời giải:

(Các bạn nên tự mình nghĩ ra thuật toán của bài toán trước khi tham khảo code của tôi nhé. Hãy phát huy tối đa khả năng sáng tạo của bản thân. Hơn nữa code tôi viết ra cũng chưa thật sự tối ưu. Nên rất mong nhận được sự chia sẻ của các bạn.)

### Code C/C++:

`gist:completejavascript/6d65841078311e08a084211e5ae8f59b`

### _Code by Phạm Văn Lâm._