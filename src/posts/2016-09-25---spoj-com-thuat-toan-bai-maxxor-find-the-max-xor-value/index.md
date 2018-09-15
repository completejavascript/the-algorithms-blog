---
title: "SPOJ.COM – Thuật toán bài MAXXOR – Find the max XOR value"
date: "2016-09-25T20:44:18.083Z"
categories: ["spoj", "Tham lam - Greedy"]
tags: ["phạm văn lâm", "spoj.com", "thuật toán", "thuật toán spoj.com", "tham lam greedy"]
keywords: "Thuật toán bài MAXXOR"
---

## **Đề bài:**

Bạn được đưa cho 2 số nguyên L và R. Và bạn phải tìm ra giá trị XOR lớn nhất của hai số a và b thỏa mãn L <= a <= R và L <= b <= R.

### **Đầu vào:**

Gồm 1 dòng chứa 2 số nguyên L và R thỏa mãn L, R <= 1e9

### **Đầu ra:**

In ra một số nguyên duy nhất là kết quả. 

### **Ví dụ:**

**Đầu vào:** 

1 10 

**Đầu ra:** 

15 

_Các bạn có thể tham khảo đề bài tiếng anh và submit code tại đây: [http://www.spoj.com/problems/MAXXOR/](http://www.spoj.com/problems/MAXXOR/)_

### **Phân tích:**

+ Bài toán này nếu sử dụng thuật toán [vét cạn - brute force](/category/vet-can-brute-force/) thì rõ ràng với L, R tối đa là 10e9 thì chắc chắn sẽ bị time limit. Vì vậy tôi sẽ sử dụng thuật toán [tham lam - greedy](/category/tham-lam-greedy/) để giải quyết bài toán. 

+ Đối với phép tính XOR thì ta có kết quả như sau: 

0 XOR 0 = 0 

0 XOR 1 = 1 

1 XOR 0 = 1 

1 XOR 1 = 0 

+ Ở đây tôi xét toán tử XOR là toán tử với bit. Do đó, tôi chỉ quan tâm đến số biểu diễn dạng nhị phân. 

+ Tôi sẽ tìm ra vị trí bit mà tại vị trí đó một số có bit biểu diễn là 1 và 1 số có bit biểu diễn là 0\. Thì chắc chắn tôi sẽ tìm được 2 số a và b mà khi a XOR b sẽ cho kết quả lớn nhất. 

+ Để dễ hiểu, mời các bạn xem lại ví dụ trên. Với ví dụ trên đầu vào L = 1 và R = 10\. Số L được biểu diễn dạng nhị phân là 0001 và số R được biểu diễn dạng nhị phân là 1010\. Tôi tìm được vị trí thứ 3 (đánh dấu vị trí từ 0) thỏa mãn. Khi đó tôi tìm được 2 số a và b thỏa mãn sẽ là 0b1111 và 0b0000\. Và kết quả XOR lớn nhất sẽ là 0b1111 tức là số 15 trong hệ thập phân.

## **Lời giải:**

(Các bạn nên tự mình nghĩ ra thuật toán và lập trình trước khi tham khảo code của tôi nhé. Hãy phát huy tối đa khả năng sáng tạo của bản thân. Hơn nữa code tôi viết ra cũng chưa thật sự tối ưu. Nên rất mong nhận được sự chia sẻ của các bạn.)

### **Code C/C++:**

`gist:completejavascript/0a58220eddac44d2bf362a78077d8e4b`

_Code by Phạm Văn Lâm_
