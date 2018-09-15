---
title: "SPOJ.COM – Thuật toán bài BOKAM143SOU – Checking cubes"
date: "2016-09-25T06:42:18.083Z"
categories: ["spoj", "Quay lui có điều kiện - Backtracking"]
tags: ["phạm văn lâm", "spoj.com", "thuật toán", "thuật toán spoj.com", "quay lui có điều kiện backtracking"]
keywords: "Thuật toán bài BOKAM143SOU"
---

## **Đề bài:**

Cho một số nguyên N. Tìm ra số lượng cách để biểu diễn số N thành tổng của tối đa 5 số lập phương.

### **Đầu vào:**

1 dòng chứa số N, với 1 <= N <= 12500.

### **Đầu ra:**

In ra kết quả về số lượng cách. 

**Ví dụ:** 

**Đầu vào:** 

64 

**Đầu ra:** 

2 

**Giải thích:** 

+ Cách 1: 64 = 27 + 27 + 8 + 1 + 1 + Cách 2: 64 = 64 + 0  + 0 + 0 + 0 

_Các bạn có thể tham khảo đề bài tiếng anh và submit code tại: [http://www.spoj.com/problems/BOKAM143SOU/](http://www.spoj.com/problems/BOKAM143SOU/)_

### **Phân tích:**

+ Trước tiên ta sẽ tìm tất cả những số lập phương không lớn hơn N + Sau đó kiểm tra tất cả các trường hợp có thể + Có nhiều cách triển khai, tuy nhiên ở đây tôi triển khai theo thuật toán [quay lui có điều kiện - Backtracking](/category/quay-lui-co-dieu-kien-backtracking/)

## **Lời giải:**

(Các bạn nên tự mình nghĩ ra thuật toán của bài toán trước khi tham khảo code của tôi nhé. Hãy phát huy tối đa khả năng sáng tạo của bản thân. Hơn nữa code tôi viết ra cũng chưa thật sự tối ưu. Nên rất mong nhận được sự chia sẻ của các bạn.)

### **Code C/C++:**

`gist:completejavascript/a8bcc9045a3918d9060463be6911ae75`

_Code by Phạm Văn Lâm_

