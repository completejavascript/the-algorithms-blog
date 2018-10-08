---
title: "SPOJ.COM - Thuật toán bài NABILHACKER - Hack the Password"
date: "2018-10-08T06:58:18.083Z"
categories: ["spoj", "Tham lam - Greedy"]
tags: ["phạm văn lâm", "spoj.com", "thuật toán", "thuật toán spoj.com", "tham lam greedy
", "stack"]
keywords: "Thuật toán bài NABILHACKER"
---

## Đề bài

Rất nhiều người hỏi mình về vấn đề áp dụng lập trình ở cuộc thi vào các project trong đời sống thực chất là gì? 
Điều này có vẻ không mấy thú vị. Cái mà mình thấy thực sự thú vị đó là, vào một ngày nọ, một người bạn - là hacker đã đến gặp mình. Anh ta yêu cầu mình giải quyết một bài toán về hacking của anh ấy.

Khi bạn muốn lấy cắp mật khẩu của ai đó, bạn có thể cài đặt chương trình KeyLogger trên máy tính của người đó. 
KeyLogger sẽ đưa cho bạn một string đóng vai trò là password. Nhưng có một vấn đề, đó là nó sẽ đưa cho bạn tất cả mọi thứ mà nạn nhân đã gõ, bao gồm cả phím dịch trái, dịch phải, backspace. 

Giả sử nạn nhân gõ password "generio312", nhưng dựa trên kịch bản là:

  1. Anh ta gõ "generio1"
  2. Sau đó, anh ta nhấn nút dịch trái, và nhấn 3. Lúc này password sẽ là "generio31"
  3. Rồi anh ta nhấn dịch phải, và nhấn 2. Lúc này password là "generio312"
  4. Cuối cùng anh ta nhấn "ghj" và nhấn backspace 3 lần để xoá 3 kí tự này đi. Vì vậy, password cuối cùng sẽ là "generio312".
  
Tuy nhiên, như mình đã nói, KeyLogger sẽ đưa cho bạn tất cả những gì mà anh ta gõ. Do đó, bạn sẽ nhận được string là "generio1<3>2ghj---". Trong đó, &lt; là dịch trái,  &gt; là dịch phải và - là backspace.

### Đầu vào

Tại vị trí đầu tiên của input là số T, số lượng của testcase. Sau đó, có T string s, với độ dài 1 <= |s| <= 10^6. Mỗi string sẽ bao gồm chữ cái in hoa, chữ cái in thường, dấu &lt;, dấu &gt, dấu - và các số [0, 9]

### Đầu ra

Đầu ra sẽ là một string ở mỗi dòng - tương ứng với password.

### Ví dụ

**Input:**

```
2
<<BP<A>>Cd-
ThisIsS3Cr3t
```

**Output:**

```
BAPC
ThisIsS3Cr3t
``` 

## Phân tích bài toán

Đầu tiên, khi đọc bài toán này, mình nghĩ ngay đến việc sử dụng **List**. Nhưng không phải là [Singly Linked List](https://www.geeksforgeeks.org/data-structures/linked-list/singly-linked-list/) mà mình cần có một con trỏ để xác định vị trí hiện tại - nơi mà mình sẽ thực hiện các hành động (dịch trái, dịch phải, xóa, chèn thêm 1 kí tự). 

Tuy nhiên, cách này sẽ bị lâu ở chỗ là mình cần phải tạo thêm node, xóa node, thay đổi liên kết của node. Vì vậy, mình nghĩ đến cách thứ 2 đó là sử dụng 2 stack.

Vì mình thấy cách triển khai của bài này rất giống với cách triển khai [thuật toán Undo-Redo](https://completejavascript.com/trien-khai-thuat-toan-undo-redo-trong-javascript/). 

Tư tưởng của thuật toán này là:

  * Giả sử mình có 2 stack là: stMain và stBuffer
  * Khi duyệt string input:
    * Nếu là kí tự dịch trái (&lt;): pop ở stMain rồi push vào stBuffer
    * Nếu là kí tự dịch phải (&gt;): pop ở stBuffer rồi push vào stMain
    * Nếu là kí tự backspace (-): pop ở stMain
    * Nếu là kí tự còn lại: push vào stMain
  * Sau khi duyệt hết string input: mình chỉ cần ghép stMain và stBuffer vào là được.

Kể ra có cái hình vẽ minh họa thì bạn sẽ dễ hiểu hơn mà mình lười vẽ quá, nên thôi vậy. Bạn chịu khó xem cách mình triển khai code ở phía dưới. 

Chỗ nào chưa hiểu thì bạn có thể hỏi mình bằng cách đặt bình luận phía dưới, mình sẽ cố gắng giải đáp.

## Lời giải

(Các bạn nên tự mình nghĩ ra thuật toán của bài toán trước khi tham khảo code của mình nhé. Hãy phát huy tối đa khả năng sáng tạo của bản thân. Hơn nữa code mình viết ra cũng chưa thật sự tối ưu. Nên rất mong nhận được sự chia sẻ của các bạn.)

### Cách 1: Sử dụng List (0.13s / 12M)

`gist:completejavascript/71e0e5aac4da415a669e1550ea568806`

### Cách 2: Sử dụng Stack (0.02s / 4.7M)

`gist:completejavascript/a39f06554ffecfc0db6239c7602ed5aa`

_Thân ái, Phạm Văn Lâm_