---
title: "SPOJ.COM – Thuật toán bài ALIEN – Aliens at the train"
date: "2016-09-25T21:11:18.083Z"
categories: ["spoj", "Tham lam - Greedy"]
tags: ["phạm văn lâm", "spoj.com", "thuật toán", "thuật toán spoj.com", "tham lam greedy"]
keywords: "Thuật toán bài ALIEN"
---

## **Đề bài:**

Người ngoài hành tinh đã đi đến trái đất. Và tất cả mọi thứ đang rất hài hoà, hai loài này có thể sống được với nhau. Tuy nhiên, một người ngoài hành tinh giống cái thì không muốn nhìn thấy con người trên đường đi đến trường đại học. Chú ý là người ngoài hành tinh phải sử dụng tàu giống như con người. Nhưng người ngoài hành tinh này có thể chọn bất kì một trạm để thoả mãn cô ta không nhìn thấy quá B người. Tuy nhiên, cô ta muốn đi xa nhất có thể trên tàu. Xin hãy giúp cô ta thực hiện nhiệm vụ này.

### **Đầu vào:**

Đầu tiên là số nguyên T biểu diễn số lượng test case, sau đó, dòng tiếp theo sẽ chứa 2 số nguyên At và Bt, lần lượt là số lượng trạm tàu (1 <= At <= 100000), và số lượng người tối đa mà người ngoài hành tinh muốn nhìn thấy(1 <= Bt <= 10000000). Sau đó, một dòng chứa At số nguyên phân biệt bởi dấu cách, biểu diễn số lượng người ở trạm thứ i.(Mỗi trạm sẽ không quá 100 người).

### **Đầu ra:**

Với mỗi test case, in ra một cặp gồm 2 số lần lượt là số lượng người mà người ngoài hành tinh sẽ gặp và số lượng trạm mà cô ta vượt qua.

### **Ví dụ:**

**Đầu vào:** 

1 

5 100 

20 15 30 80 100 

**Đầu ra:** 

65 3 

**Giải thích:** 

+ Nếu người ngoài hành tinh này lên trạm số 1, sau đó là số 2, 3\. Thì lúc này cô ta gặp 65 người. Nếu cô ta quyết định đi tiếp thì cô ta sẽ gặp 145 người. Do đó cô ta sẽ xuống tàu 

+ Nếu cô ta chọn bắt đầu từ trạm số 2 với 15 người, sau đó đi tiếp lên trạm số 4 thì cô ta sẽ gặp 125 người. 

+ Nhưng vì cô ta muốn gặp ít người nhất có thể và không vượt quá số người mong muốn. Nên cô ta quyết định chọn đi từ trạm 1 đến trạm 3. 

**Chú ý:** Người ngoài hành tinh có thể chọn một trạm bất kì để xuất phát, và không thể đi lùi. 

_Các bạn có thể tham khảo đề bài tiếng anh và submit tại đây: [http://www.spoj.com/problems/ALIEN/](http://www.spoj.com/problems/ALIEN/)_

### **Phân tích:**

+ Bài toán này có đặc điểm là người ngoài hành tinh chỉ đi được theo một chiều và không thể quay ngược lại. Do đó, ta có thể sử dụng phương pháp “dịch cửa sổ” (sliding-window).

## **Lời giải:**

(Các bạn nên tự mình nghĩ ra thuật toán của bài toán trước khi tham khảo code của tôi nhé. Hãy phát huy tối đa khả năng sáng tạo của bản thân. Hơn nữa code tôi viết ra cũng chưa thật sự tối ưu. Nên rất mong nhận được sự chia sẻ của các bạn.)

### **Code C/C++:**

`gist:completejavascript/d594cd46ec785a4efaaf0683fa041144`

_Code by Phạm Văn Lâm_