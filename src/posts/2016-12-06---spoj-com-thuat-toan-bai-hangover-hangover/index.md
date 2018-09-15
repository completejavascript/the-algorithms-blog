---
title: "SPOJ.COM – Thuật toán bài HANGOVER - Hangover"
date: "2016-12-05T19:48:18.083Z"
categories: ["spoj", "Vét cạn - Brute Force"]
tags: ["phạm văn lâm", "spoj.com", "thuật toán", "thuật toán spoj.com", "vét cạn brute force"]
keywords: "Thuật toán bài HANGOVER"
---

## Đề bài:

Bạn có thể tạo ra độ dài bao xa khi xếp những quân bài bên trên một cái bàn. Nếu bạn có một quân bài bạn có thể tạo ra độ dài tối đa là 1/2 quân bài. Giả sử rằng những quân bài vuông góc với bàn. Với 2 quân bài bạn có thể làm cho quân bài trên nhô ra so với quân bài ở dưới độ dài là 1/2 quân bài. Và quân bài dưới cùng nhô ra so với bàn 1/3 độ dài quân bài. Như vậy, tổng độ dài là 1/2 + 1/3 = 5/6 độ dài quân bài. Như vậy, bạn có thể xếp được n quân bài với độ dài nhô ra là: ```1/2 + 1/3 + 1/4 + ... + 1/(n+1))``` độ dài quân bài. 

### Đầu vào:

Bao gồm một hay nhiều test case, mỗi test case chỉ bao gồm 1 dòng, chứa 1 số thực dương c, có giá trị từ 0.01 đến 5.20\. c có chính xác 3 chữ số.

### Đầu ra:

Mỗi test case in ra trên một dòng số lượng quân bài tối thiểu để đạt được c độ dài quân bài. Đầu ra theo dạng ví dụ dưới đây.

### Ví dụ:

**Đầu vào:**

```
1.00
3.71
0.04
5.19
0.00
```

**Đầu ra:**

```
3 card(s)
61 card(s)
1 card(s)
273 card(s)
```

Các bạn có thể tham khảo link gốc đề bài và submit code tại đây: [http://www.spoj.com/problems/HANGOVER/](http://www.spoj.com/problems/HANGOVER/)

### Phân tích:

  * Với bài toán này, cách xếp con bài là không thay đổi. Do đó, tôi sẽ sử dụng một mảng để lưu lại độ dài khi xếp n con bài. Thuật toán ở đây sẽ là [thuật toán vét cạn Brute Force](/category/vet-can-brute-force/).

## Lời giải:

(Các bạn nên tự mình nghĩ ra thuật toán của bài toán trước khi tham khảo code của tôi nhé. Hãy phát huy tối đa khả năng sáng tạo của bản thân. Hơn nữa code tôi viết ra cũng chưa thật sự tối ưu. Nên rất mong nhận được sự chia sẻ của các bạn.)

### Code C/C++:

`gist:completejavascript/db07010b277a74026ca3fa2e6aa30091`

### _Code by Phạm Văn Lâm._