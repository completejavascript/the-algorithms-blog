---
title: "SPOJ.COM – Thuật toán bài ADFRUITS - Advanced Fruits"
date: "2016-10-29T21:43:18.083Z"
categories: ["spoj", "Quy hoạch động - Dynamic programming"]
tags: ["phạm văn lâm", "spoj.com", "thuật toán", "thuật toán spoj.com", "quy hoạch động dynamic programming", "dãy con chung dài nhất LCS"]
keywords: "Thuật toán bài ADFRUITS"
---

## Đề bài:

Công ty "21st Century Fruits" đã sáng tạo ra những loại nước hoa quả mới bằng cách chuyển gen từ một loại sang một loại khác. Hầu hết các lần là thất bại Nhưng đôi khi một loại nước hoa quả mới sẽ được tạo ra bằng cách trộn chúng lại với nhau. 

Một chủ đề lớn được đưa ra thảo luận đó là "Phát minh mới này sẽ được gọi là gì?" Kết hợp giữa apple và pear sẽ được gọi là apple-pear. Dĩ nhiên, gọi như vậy nghe không hay ho lắm. Ông chủ công ty mới ra quyết định đó là sử dụng một chuỗi ngắn nhất chứa cả tên của cả hai loại. Ví dụ: "applear" bao gồm "apple" và "pear" (APPLEar và apPlEAR), và không có một xâu nào ngắn hơn thoả mãn tính chất trên. 

Tổ hợp của "cranberry" và "boysenberry" là "boysecranberry" hay "craboysenberry" Nhiệm vụ của bạn là viết ra một chương trình để tính ra tên có độ dài nhỏ nhất là tổ hợp của 2 loại quả ban đầu.

### Đầu vào:

Mỗi dòng bao gồm 2 xâu là tên của 2 loại quả ban đầu. Tất cả tên có độ dài tối đa là 100 và chỉ chứa kí tự là chữ cái. Kết thúc đầu vào là kí hiệu kết thúc file.

### Đầu ra:

Mỗi test case, in ra tên nhỏ nhất của kết quả trên một dòng. Nếu có nhiều kết quả thì chỉ cần in ra một cái bất kỳ.

### Ví dụ:

**Đầu vào:**

```
apple peach
ananas banana
pear peach
```

**Đầu ra:**

```
appleach
bananas
pearch
```

_Các bạn có thể tham khảo link gốc đề bài và submit code tại đây: [http://www.spoj.com/problems/ADFRUITS/](http://www.spoj.com/problems/ADFRUITS/)_

### Phân tích:

  * Ở đây tôi sử dụng [thuật toán quy hoạch động Dynamic programming](/category/quy-hoach-dong-dynamic-programming/) để tìm ra dãy con chung dài nhất của hai cái tên.
  
  * Sau khi đã có dãy con chung dài nhất của của hai dãy rồi thì tôi chỉ việc in ra kết quả theo thứ tự thỏa mãn bài toán.

## **Lời giải:**

(Các bạn nên tự mình nghĩ ra thuật toán của bài toán trước khi tham khảo code của tôi nhé. Hãy phát huy tối đa khả năng sáng tạo của bản thân. Hơn nữa code tôi viết ra cũng chưa thật sự tối ưu.  Nên rất mong nhận được sự chia sẻ của các bạn.)

### **Code C/ C++:**

`gist:completejavascript/4b19ac496598912289f19445e46950e9`

_Code by Phạm Văn Lâm._