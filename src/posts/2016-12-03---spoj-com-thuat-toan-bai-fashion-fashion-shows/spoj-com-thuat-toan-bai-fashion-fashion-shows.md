---
title: "SPOJ.COM – Thuật toán bài FASHION - Fashion Shows"
date: "2016-12-03T20:33:18.083Z"
categories: ["spoj", "Tham lam - Greedy"]
tags: ["phạm văn lâm", "spoj.com", "thuật toán", "thuật toán spoj.com", "tham lam greedy"]
keywords: "Thuật toán bài FASHION"
---

## Đề bài:

Một cuộc thi biểu diễn thời trang đánh giá những người tham gia dựa vào độ hot của họ. Có hai chương trình khác nhau được tổ chức, một cho đàn ông và một cho đàn bà. Thời gian của chương trình thứ 3 vẫn chưa được quyết định. 

Bây giờ kết quả của hai chương trình trước đã được công bố. Những người tham gia của hai chương trình đã hẹn nhau, tuy nhiên họ khó khăn trong việc tìm ra đối tác của mình.  Maximum Match dating serive (MMDS) đã giúp họ bằng cách kết nối họ sao cho tối đa hóa được độ hot của họ. 

Nếu một người đàn ông được đánh giá độ hot là x, và người phụ nữ là y thì giá trị của họ sẽ là x*y. Cả hai chương trình, mỗi cái bao gồm N ứng viên. MMDS đã làm xong công việc của họ. Công việc của bạn là tìm ra tổng độ hot của họ.

### Đầu vào:

Dòng đầu tiên là số lượng test case t. Sau đó là các test case. Mỗi cái bao gồm 3 dòng. Dòng đầu tiên là số nguyên N, 1 <= N <= 1000\. Dòng thứ 2 chứa N số nguyên biểu diễn mức điểm của những người đàn ông. Dòng thứ 3 gồm N số nguyên biểu diễn mức điểm của những người phụ nữ. Tất cả độ hot có giá trị từ 0 đến 10.

### Đầu ra:

Với mỗi test case, in ra một số nguyên là tổng độ hot của họ theo cách của MMDS đã làm.

### Ví dụ:

**Đầu vào:**

```
2
2
1 1
3 2
3
2 3 2
1 3 2
```

**Đầu ra:**

```
5
15
```

Các bạn có thể tham khảo link gốc đề bài và submit code tại đây: [http://www.spoj.com/problems/FASHION/](http://www.spoj.com/problems/FASHION/)

### Phân tích:

  * Bài toán này tôi nhận ra rằng, để kết quả lớn nhất thì ta phải nhân các giá trị lớn nhất với nhau. Từ đó suy ra tôi sẽ phải sắp xếp lại dãy điểm của đàn ông và phụ nữ.
  
  * Có nhiều cách sắp xếp tuy nhiên cách nhanh và đơn giản nhất là sử dụng Counting Sort (sử dụng mảng đếm tần suất). Bởi lẽ độ hot chỉ có giá trị từ 0 đến 10. 
  
  * Sau đây mời bạn theo dõi cách tôi triển khai [thuật toán tham lam Greedy](/category/tham-lam-greedy/) của mình để giải bài toán này.

## Lời giải:

(Các bạn nên tự mình nghĩ ra thuật toán của bài toán trước khi tham khảo code của tôi nhé. Hãy phát huy tối đa khả năng sáng tạo của bản thân. Hơn nữa code tôi viết ra cũng chưa thật sự tối ưu. Nên rất mong nhận được sự chia sẻ của các bạn.)

### Code C/C++:

`gist:completejavascript/74361998f50239aea489018abc6f190a`

_Code by Phạm Văn Lâm._