---
title: "SPOJ.COM – Thuật toán bài CANDY - Candy I"
date: "2016-11-30T23:00:18.083Z"
categories: ["spoj", "Tham lam - Greedy"]
tags: ["phạm văn lâm", "spoj.com", "thuật toán", "thuật toán spoj.com", "tham lam greedy"]
keywords: "Thuật toán bài CANDY"
---

## Đề bài:

Jennifer là một giáo viên lớp một ở trường tiểu học. Cô ấy đã đi du lịch cùng với lớp của cô ngày hôm nay. Cô ấy đã lấy một gói chứa kẹo cho mỗi đứa trẻ. Không may kích thước của các gói là khác nhau. 

Jennifer sợ rằng mỗi đứa trẻ sẽ muốn có gói lớn nhất và điều đó sẽ dẫn tới cãi vã, thậm chí là đánh nhau. Cô ấy muốn tránh điều đó. Vì vậy, cô ấy quyết định rằng sẽ mở tất cả các gói kẹo ra, đếm số kẹo ở mỗi gói và chuyển số kẹo từ gói lớn hơn sang gói nhỏ hơn, sao cho các gói có cùng số kẹo. Câu hỏi là số lượng cái kẹo cô ấy phải chuyển là bao nhiêu.

### Đầu vào:

Bao gồm nhiều test case. Mỗi test case sẽ bao gồm một số N, 1 <= N <= 10000 - là số lượng kẹo. Theo sau là N số nguyên, mỗi số đều nhỏ hơn 1000, là số lượng kẹo của mỗi gói. 

Theo sau test case cuối cùng là số nguyên -1.

### Đầu ra:

Với mỗi test case in ra số lượng kẹo nhỏ nhất mà cô giáo phải di chuyển. Nếu không thể làm cho các gói kẹo có số lượng như nhau thì in ra giá trị -1.

### Ví dụ:

**Đầu vào:**

```
5
1
1
1
1
6
2
3
4
-1
```

**Đầu ra:**

```
4
-1
```

### Giải thích:

  * Test case 1: sẽ mất 4 lần di chuyển 4 viên kẹo ở gói có 6 viên sang các gói còn lại. Khi đó mỗi gói sẽ có 2 cái kẹo.
  
  * Test case 2: có 2 gói kẹo, 3 và 4 chiếc kẹo thì không thể làm cho chúng có số kẹo bằng nhau. 
  
_Các bạn có thể tham khảo link gốc đề bài và submit code tại đây: [http://www.spoj.com/problems/CANDY/](http://www.spoj.com/problems/CANDY/)_

### Phân tích:

  * Rõ ràng [thuật toán tham lam Greedy](/category/tham-lam-greedy/) là phù hợp với bài toán này. Thật vậy, để di chuyển sao cho các gói kẹo có cùng số kẹo như nhau thì khi đó số kẹo của mỗi gói phải là tổng số kẹo chia cho tổng số lượng gói và bắt buộc phải là chia hết. Nếu không chia hết thì nghĩa là không thể di chuyển được để các gói có số lượng kẹo như nhau. 
  
  * Khi đó, việc tính toán số bước di chuyển là vô cùng đơn giản.

## Lời giải:

(Các bạn nên tự mình nghĩ ra thuật toán của bài toán trước khi tham khảo code của tôi nhé. Hãy phát huy tối đa khả năng sáng tạo của bản thân. Hơn nữa code tôi viết ra cũng chưa thật sự tối ưu. Nên rất mong nhận được sự chia sẻ của các bạn.)

### Code C/C++:

`gist:completejavascript/5726f391a1a1f5e5453cc123fe0581b5`

### _Code by Phạm Văn Lâm._