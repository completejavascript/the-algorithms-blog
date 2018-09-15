---
title: "SPOJ.COM – Thuật toán bài NUMPATH - Gutibazi"
date: "2016-11-05T22:35:18.083Z"
categories: ["spoj", "Vét cạn - Brute Force"]
tags: ["phạm văn lâm", "spoj.com", "thuật toán", "thuật toán spoj.com", "vét cạn brute force"]
keywords: "Thuật toán bài NUMPATH"
---

## Đề bài:

Xunayed rất là mạnh mẽ. Anh ấy đã phát hiện ra rằng bạn của anh ta là Nurulla - người giống với anh trai mình, đã làm một việc không có khí phách với anh ta. Xunayed có thể tha thứ bất cứ điều gì, nhưng việc làm điều không có khí phách với anh ta là không thể tha thứ được. Nhưng để dạy cho Nurulla một bài học, Xunayed đầu tiên phải đến chỗ Nurulla qua một vài đường. Vì vậy, vấn đề xảy ra ở đây là những con đường thuộc về một người rất quyền lực tên là Rizvi và tất cả mọi người phải xin phép người này để có thể đi qua được những con đường. Rizvi sẽ cho phép Xunayed nếu như Xunayed giải quyết được một điều bí ẩn. 

Đường đi là một vài lưới 2 chiều. Xunayed hiện tại đang đứng ở vị trí ô trên cùng bên trái (1, 1) - là điểm bắt đầu. Nurulla đang đứng ở ô dưới cùng bên phải - là điểm đích. Biết Xunayed chỉ có thể đi xuống, hay sang phải. Hỏi có bao nhiêu đường mà Xunayed có thể tiếp cận Nurulla. 

Hãy giải quyết bài toán này để giúp Xunayed đòi lại quyền công bằng.

### Đầu vào:

Bắt đầu với số nguyên T (T <= 50) là số lượng test case. Mỗi test case sẽ gồm một dòng chứa 2 số nguyên R, C (1 <= R, C <= 7), trong đó, R là số lượng hàng, C là số lượng cột.

### Đầu ra:

Với mỗi test case, in ra số nguyên là số đường mà Xunayed có thể tiếp cận Nurulla.

### Ví dụ:

**Đầu vào:**

```
2
1 1
2 2
```

**Đầu ra:**

```
1
2
```

_Các bạn có thể tham khảo link gốc đề bài và submit code tại đây: [http://www.spoj.com/problems/NUMPATH/](http://www.spoj.com/problems/NUMPATH/)_

### Phân tích:

+ Bài toán này tôi sẽ dùng [thuật toán vét cạn Brute force](/category/vet-can-brute-force/), được triển khai bằng đệ quy để duyệt hết tất cả các trường hợp. Điểm bắt đầu là (0, 0) và điểm đích là (R-1,C-1). Tại mỗi điểm chỉ có thể đi xuống, hoặc sang bên phải.

## Lời giải:

(Các bạn nên tự mình nghĩ ra thuật toán của bài toán trước khi tham khảo code của tôi nhé. Hãy phát huy tối đa khả năng sáng tạo của bản thân. Hơn nữa code tôi viết ra cũng chưa thật sự tối ưu. Nên rất mong nhận được sự chia sẻ của các bạn.)

### Code C/C++:

`gist:completejavascript/ccde13f040b60ac7db007bc13f762f89`

_Code by Phạm Văn Lâm._