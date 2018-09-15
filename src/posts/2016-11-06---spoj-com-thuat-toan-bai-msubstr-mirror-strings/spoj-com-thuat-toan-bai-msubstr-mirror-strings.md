---
title: "SPOJ.COM – Thuật toán bài MSUBSTR - Mirror Strings !!!"
date: "2016-11-06T11:31:18.083Z"
categories: ["spoj", "Tham lam - Greedy"]
tags: ["phạm văn lâm", "spoj.com", "thuật toán", "thuật toán spoj.com", "tham lam greedy"]
keywords: "Thuật toán bài MSUBSTR"
---

## Đề bài:

Như chúng ta đã biết Utkarsh rất giỏi giải quyết những bài toán liên quan đến số. Lần này, Arpit đã suy nghĩ một cách khôn ngoan và đã đưa cho Utkarsh một bài toán liên quan đến xâu (string). Arpit đã đưa cho Utkarsh một xâu kí tự và thách thức Utkarsh tìm ra xâu con (substring) dài nhất mà xâu phản chiếu (mirror string) giống với nó, và số lượng những substring này. Bây giờ, Utkarsh  rất bận nên anh ấy nhờ bạn giúp đỡ giải quyết bài toán này. 

Ví dụ về mirror string: cho xâu "lalit" thì xâu phản chiếu là "tilal".

### Đầu vào:

Có T test case, t <= 200\. Sau đó là T dòng, mỗi dòng chứa những kí tự viết thường từ a-z có độ dài l (1 <= l <= 3000)

### Đầu ra:

Mỗi test case được in ra trên 1 dòng, bao gồm 2 số nguyên lần lượt là độ dài substring dài nhất thỏa mãn, và số lượng substring loại này.

### Ví dụ:

**Đầu vào:** 

```
3 
lalit 
abedcdetr 
abcde
```

**Đầu ra:**

3 1 5 1 1 5 

_Các bạn có thể tham khảo link gốc đề bài và submit code tại đây: [http://www.spoj.com/problems/MSUBSTR/](http://www.spoj.com/problems/MSUBSTR/)_

### Phân tích:

  * Bài này sử dụng [thuật toán tham lam Greedy](/category/tham-lam-greedy/) để giải quyết.
  
  * Vì đề bài yêu cầu tìm ra substring có độ dài dài nhất thỏa mãn là mirror string, nên tôi sẽ kiểm tra tất cả những substring có độ dài bằng độ dài của string ban đầu trước, sau đó giảm dần một đơn vị.
  
  * Cứ kiểm tra như vậy cho đến khi gặp substring nào thỏa mãn, thì đó là substring dài nhất. Tiếp tục với độ dài substring như vậy để đếm số lượng substring thỏa mãn. Sau đó, thoát luôn mà không cần phải xét tiếp với những độ dài nhỏ hơn.

## Lời giải:

(Các bạn nên tự mình nghĩ ra thuật toán của bài toán trước khi tham khảo code của tôi nhé. Hãy phát huy tối đa khả năng sáng tạo của bản thân. Hơn nữa code tôi viết ra cũng chưa thật sự tối ưu. Nên rất mong nhận được sự chia sẻ của các bạn.)

### Code C/C++:

`gist:completejavascript/39290d009ac77d74bd19997b31f2c8f7`

_Code by Phạm Văn Lâm._