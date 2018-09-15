---
title: "SPOJ.COM – Thuật toán bài ONP - Transform the Expression"
date: "2016-11-05T22:07:18.083Z"
categories: ["spoj", "Tham lam - Greedy"]
tags: ["phạm văn lâm", "spoj.com", "thuật toán", "thuật toán spoj.com", "tham lam greedy"]
keywords: "Thuật toán bài ONP"
---

## Đề bài:

Biến đổi biểu thức đại số sau thành dạng "kí pháp nghịch đảo Ba Lan" (RPN  : Reverse Polish Notation). Hay nói cách khác là biến đổi biểu thức từ dạng trung tố thành dạng hậu tố. Trong đó, các toán tử hai ngôi: +, -, *, /, ^ (có độ ưu tiên từ thấp nhất lên cao nhất), dấu ngoặc (), toán hạng chỉ bao gồm chữ cái a, b, c,...z. Giả sử rằng chỉ có một dạng RPN, không có trường hợp kiểu như a*b*c.

### Đầu vào:

_T_ \[số lượng biểu thức <= **100**\] 

_Biểu thức_ \[độ dài <= **400**\] 

\[Những biểu thức khác\] Thành phần ở trong dấu \[\] không xuất hiện ở đầu vào.

### Đầu ra:

Các biểu thức dạng RPN, mỗi cái trên một dòng.

### Ví dụ:

**Đầu vào:**

```
3
(a+(b*c))
((a+b)*(z+x))
((a+t)*((b+(a+c))^(c+d)))
```

**Đầu ra:**

```
abc*+
ab+zx+*
at+bac++cd+^*
```

_Các bạn có thể tham khảo link gốc đề bài và submit code tại đây: [http://www.spoj.com/problems/ONP/](http://www.spoj.com/problems/ONP/)_

### Phân tích:

  * Đây là bài toán cơ bản, có thể xếp vào bài toán sử dụng [thuật toán tham lam Greedy](/category/tham-lam-greedy/).
  
  * Thuật toán biến đổi biểu thức trung tố thành dạng hậu tố sử dụng Stack là:
    * **Nếu là toán hạng:** cho ra output.
    * **Nếu là dấu mở ngoặc “(“:** cho vào stack
    * **Nếu là dấu đóng ngoặc “)”:** lấy các toán tử trong stack ra và cho vào output cho đến khi gặp dấu mở ngoặc “(“. (Dấu mở ngoặc cũng phải được đưa ra khỏi stack)
    * **Nếu là toán tử:**
      * Chừng nào ở đỉnh stack là toán tử và toán tử đó có độ ưu tiên **lớn hơn hoặc bằng** toán tử hiện tại thì lấy toán tử đó ra khỏi stack và cho ra output.
      * Đưa toán tử hiện tại vào stack Sau khi duyệt hết biểu thức trung tố, nếu trong stack còn phần tử thì lấy các thành phần trong đó ra và cho lần lượt vào output. _(Tham khảo tại: [YinYang's Programming Blog](https://yinyangit.wordpress.com/2011/01/26/algorithm-chuy%E1%BB%83n-bi%E1%BB%83u-th%E1%BB%A9c-trung-t%E1%BB%91-sang-ti%E1%BB%81n-t%E1%BB%91-va-h%E1%BA%ADu-t%E1%BB%91-b%E1%BA%B1ng-stack/))_

## Lời giải:

(Các bạn nên tự mình nghĩ ra thuật toán của bài toán trước khi tham khảo code của tôi nhé. Hãy phát huy tối đa khả năng sáng tạo của bản thân. Hơn nữa code tôi viết ra cũng chưa thật sự tối ưu. Nên rất mong nhận được sự chia sẻ của các bạn.)

### Code C/C++:

`gist:completejavascript/e3d7a94c31cdc8a32ae362de1c1001bc`

_Code by Phạm Văn Lâm._