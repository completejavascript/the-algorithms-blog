---
title: "SPOJ.COM – Thuật toán bài NKLETTER - Gửi thư"
date: "2016-10-18T21:15:18.083Z"
categories: ["spoj", "Tham lam - Greedy"]
tags: ["phạm văn lâm", "spoj.com", "thuật toán", "thuật toán spoj.com", "tham lam greedy"]
keywords: "Thuật toán bài NKLETTER"
---

## Đề bài:

Vị Giám đốc công ty XYZ cần gửi một văn bản quan trọng tới một đối tác của mình. Văn bản là một xâu S các chữ cái la tinh in thường. Để bảo mật nội dung văn bản, ông Giám đốc gửi 2 bức thư. Bức thư thứ nhất là phần đầu Sb của xâu S, bức thư thứ 2 là phần cuối Se của S. Hai bức thư Sb và Se đảm bảo đầy đủ nội dung của S, tuy nhiên có thể một phần cuối của Sb có thể được viết lặp lại trong phần đầu của Se, song số kí tự được viết lặp lại không biết trước. 

Ví dụ: với văn bản S = ’truongnguyenduquannhat’ tạo ra hai bức thư: 

Sb = truong**ngueNdu** 
           
**ngueNdu**quanNhat = Se 

Sb = ’truongnguyendu’ và Se = ’nguyenduquannhat’ 

**Yêu cầu:** Cho hai xâu Sb và Se, hãy xác định một xâu S có thể là nội dung của bức thư sao cho độ dài của xâu S là ngắn nhất.

### Đầu vào:

Dòng đầu chứa xâu Sb, dòng thứ hai chứa xâu Se. Mỗi xâu có độ dài không quá 250.

### Đầu ra:

Ghi ra độ dài của xâu S tìm được.

### Ví dụ:

**Đầu vào:** 

truongnguyendu 

nguyenduquannhat 

**Đầu ra:** 

22 

_Các bạn có thể tham khảo link gốc đề bài và submit code tại đây: [http://vn.spoj.com/problems/NKLETTER/](http://vn.spoj.com/problems/NKLETTER/)_

### Phân tích:

+ Trong bài toán này tôi sẽ sử dụng [thuật toán tham lam - Greedy](/category/tham-lam-greedy/) để giải quyết. 

+ Tử tưởng chính là tôi sẽ duyệt từ đầu đến cuối xâu SB. Với mỗi vị trí đó, tôi sẽ so sánh thành phần từ vị trí đó đến cuối xâu của xâu SB với thành phần có độ dài tương ứng tính từ đầu mảng của SE. 

+ Đến khi tôi tìm được vị trí thỏa mãn đầu tiên, thì đó chính là thành phần trùng nhau của hai xâu thỏa mãn cho xâu S có độ dài nhỏ nhất.

## Lời giải:

(Các bạn nên tự mình nghĩ ra thuật toán của bài toán trước khi tham khảo code của tôi nhé. Hãy phát huy tối đa khả năng sáng tạo của bản thân. Hơn nữa code tôi viết ra cũng chưa thật sự tối ưu.  Nên rất mong nhận được sự chia sẻ của các bạn.)

### Code C/C++:

`gist:completejavascript/64addc7a563a0c926788de6261cfca1e`

_Code by Phạm Văn Lâm._