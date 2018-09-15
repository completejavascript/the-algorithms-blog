---
title: "SPOJ.COM – Thuật toán bài CODFURY - Megatron and his rage"
date: "2016-12-01T22:24:18.083Z"
categories: ["spoj", "Tham lam - Greedy"]
tags: ["phạm văn lâm", "spoj.com", "thuật toán", "thuật toán spoj.com", "tham lam greedy", "dịch cửa sổ"]
keywords: "Thuật toán bài CODFURY"
---

## Đề bài:

Bị làm tức điên lên sau thất bại bởi cuộc tấn công của Decepticons, Megatron đã quyết định phá hủy tất cả những hành tinh trên đường trở về trái đất từ Cybertron. Có nhiều hành tinh giữa trái đất và Cybertron. Mỗi hành tinh có một vài con robot canh giữ trên đó. Bởi vì Megatron còn rất ít đạn dược nên anh ta muốn tấn công với ít robot nhất có thể. Biết anh ta không thể tấn công quá M robot. 

Bạn hãy tìm ra số lớn nhất của những hành tinh mà anh ta có thể phá hủy trên hành trình của mình. 

Chú ý: Megatron có thể bắt đầu cuộc tấn công từ bất kì một hành tinh nào. Và anh ta chỉ có thể di chuyển đến hành tinh bên cạnh hành tinh hiện tại anh ta đang ở đó.

### Đầu vào:

Đầu tiên là số T, là số lượng test case, T <= 20\. Sau đó là T test case. Mỗi test case bắt đầu bằng một dòng chứa 2 số nguyên P và M. Trong đó, P là số lượng hành tinh và M là số lượng hành tinh tối đa mà anh ta có thể phá hủy. Với P <= 50000 và M <= 1000000\. Sau đó là một dòng chứa P số nguyên phân biệt nhau bởi dấu cách, miêu tả số lượng robot trên mỗi hành tinh, giá trị này <= 1000.

### Đầu ra:

Đầu ra sẽ bao gồm T cặp số nguyên, một cặp trên một dòng xác định số lượng robot mà Megatron sẽ đánh và số hành tinh anh ta phá hủy.

### Ví dụ:

**Đầu vào:**

```
1
4 50
20 5 23 45
```

**Đầu ra:**

```
48 3
```

### Giải thích:

  * Megatron bắt đầu từ hành tinh số 1, sau đó là hành tinh số 2, 3\. Tại điểm này anh ta đã đánh được 48 robot. Lúc này anh ta đã phá hủy được 3 hành tinh rồi.
  
  * Megatron có thể bắt đầu từ hành tinh số 2 sau đó đến hành tinh số 3, 4\. Tuy nhiên lúc này anh ta phải đánh 73 robot. Tuy nhiên anh ta muốn đánh số robot ít nhất nên anh ta sẽ chọn đánh từ hành tinh số 1 đến 2, 3. 
  
Các bạn có thể tham khảo link gốc đề bài và submit code tại đây: [http://www.spoj.com/problems/CODFURY/](http://www.spoj.com/problems/CODFURY/)

### Phân tích:

  * Bài toán này sử dụng [thuật toán tham lam Greedy](/category/tham-lam-greedy/) để giải. Cụ thể hơn là sử dụng phương pháp dịch cửa sổ. Cửa sổ ở đây có kích thước là M. Và ta sẽ dịch từ đầu đến cuối, rồi tìm ra trường hợp nào cho tổng robot là nhỏ nhất.

## Lời giải:

(Các bạn nên tự mình nghĩ ra thuật toán của bài toán trước khi tham khảo code của tôi nhé. Hãy phát huy tối đa khả năng sáng tạo của bản thân. Hơn nữa code tôi viết ra cũng chưa thật sự tối ưu. Nên rất mong nhận được sự chia sẻ của các bạn.)

### Code C/C++:

`gist:completejavascript/a1888bcf33259880e97456a6d4f06a57`

### _Code by Phạm Văn Lâm._