---
title: "SPOJ.COM – Thuật toán bài ABA12C – Buying Apples"
date: "2016-09-25T20:30:18.083Z"
categories: ["spoj", "Quy hoạch động - Dynamic programming"]
tags: ["phạm văn lâm", "spoj.com", "thuật toán", "thuật toán spoj.com", "quy hoạch động dynamic programming"]
keywords: "Thuật toán bài ABA12C"
---

## **Đề bài:**

Mạnh đã đến siêu thị để mua chính xác ‘k’ Kg táo cho ‘n’ người bạn của anh ta. Tuy nhiên siêu thị này rất kì lạ. Giá của các sản phẩm rất là khác nhau. Do đó, Mạnh đã đi đến khu vực bán táo để hỏi về giá của chúng. Người bán hàng đưa cho anh ta một cái bảng giá. Và Mạnh nhận thấy rằng giá của táo không được tính dựa trên 1 Kg. Táo được đóng gói trong bao bì, mỗi cái chứa ‘x’ Kg táo, x > 0 và ‘x’ là số nguyên. Một gói ‘x’ Kg táo có giá là ‘y’ VNĐ. Vì vậy có một tấm bảng được đặt trên bàn với số ‘y’ là giá của của một gói ‘x’ Kg táo. Nếu ‘y’ là -1 thì nó có nghĩa là gói đó sẽ không được bán. Với những thông tin như vậy, Mạnh quyết định mua tối đa ‘n’ gói cho ‘n’ người bạn của anh ấy. Nói cách khác là Mạnh không được phép mua nhiều hơn ‘n’ gói táo. 

Mạnh rất quý bạn của anh ấy nên không muốn làm thất vọng họ. Bây giờ, anh ấy sẽ nói cho bạn biết về số lượng những người bạn. Và bạn phải nói cho anh ấy biết về số lượng tiền tối thiểu mà Mạnh phải bỏ ra.

### **Đầu vào:**

Dòng đầu tiên là số lượng test cases, C. Mỗi test case sẽ gồm 2 dòng. Dòng đầu tiên chứa số N và K, lần lượt là số lượng bạn của anh ấy và lượng táo (Kg) mà Mạnh muốn mua. Dòng thứ hai bao gồm K số nguyên phân biệt với nhau bởi dấu cách. Trong đó, số nguyên thứ i là giá của gói ‘i’ Kg. Và giá trị -1 có nghĩa là gói tương ứng sẽ không được bán. (i được tính từ 1) 

**Ràng buộc:** 

0 < N <= 100 

0 < K <= 100 

0 < Giá tiền <= 1000

### **Đầu ra:**

Đầu ra cho mỗi test case là một dòng chứa số lượng tiền mà Mạnh phải bỏ ra. In ra -1 nếu như Mạnh không thể làm hài lòng bạn anh ấy.

### **Ví dụ:**

**Đầu vào:** 

2 

3 5 

-1 -1 4 5 -1 

5 5 

1 2 3 4 5 

**Đầu ra:** 

-1 
5 

_Các bạn có thể tham khảo link gốc đề bài và submit code tại đây: [http://www.spoj.com/problems/ABA12C/](http://www.spoj.com/problems/ABA12C/)_ 

**Giải thích:** 

1) Có N = 3 người bạn, K = 5 Kg táo cần mua. Tiếp theo là giá của 5 gói (1, 2, 3, 4, 5) Kg. Tuy nhiên gói 1, 2 và 5 Kg không bán. Do đó chỉ còn gói 3 và 4 Kg. Nên Mạnh không thể mua chính xác 5 Kg táo. Vì vậy, anh ấy không thể làm hài lòng những người bạn. 

2) Có N = 5 người bạn, K = 5 Kg táo cần mua. Giá của các gói 1, 2, 3, 4, 5 Kg tương ứng là 1, 2, 3, 4, 5\. Mạnh có thể mua 5 gói 1 Kg. Vì vậy số tiền nhỏ nhất mà Mạnh cần bỏ ra là 5.

### **Phân tích:**

– Đầu vào N, K có giá trị lớn nhất là 100\. Nếu bạn giải quyết bài toán sử dụng phương pháp vét cạn. Thì ở đây, mỗi gói sẽ có hai khả năng là được chọn hoặc không. 

=> Độ phức tạp của thuật toán trong trường hợp xấu nhất là 2^100 (thực tế độ phức tạp tính ra là 1000000000 thì thời gian chạy sẽ xấp xỉ 1 giây). Do đó, dùng vét cạn sẽ bị time limit. 

– Với những bài toán dạng này, ta sẽ sử dụng phương pháp quy hoạch động. 

Với chú ý ở đây là: `MinMoney[i] = Min{MinMoney[i], MinMoney[j] + Price[i - j]}` 

với: 

– MinMoney[i], MinMoney[j] là số tiền nhỏ nhất để mua đúng i , j kg 

– Price[i – j] là giá của gói ‘i – j’ kg.

## **Lời giải:**

(Các bạn nên tự mình nghĩ ra thuật toán của bài toán trước khi tham khảo code của tôi nhé. Hãy phát huy tối đa khả năng sáng tạo của bản thân. Hơn nữa code tôi viết ra cũng chưa thật sự tối ưu.  Nên rất mong nhận được sự chia sẻ của các bạn.)

### **Code C/ C++:**

`gist:completejavascript/f1d8c151d139f4c76d565eb5e3f587cb`

### Code Python:

`gist:completejavascript/560e15a3c510308540d56a5cf9ec8ee0`

_Code by Phạm Văn Lâm_