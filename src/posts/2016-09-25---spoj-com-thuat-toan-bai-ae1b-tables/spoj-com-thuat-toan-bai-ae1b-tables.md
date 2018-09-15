---
title: "SPOJ.COM – Thuật toán bài AE1B – Tables"
date: "2016-09-25T21:18:18.083Z"
categories: ["spoj", "Tham lam - Greedy"]
tags: ["phạm văn lâm", "spoj.com", "thuật toán", "thuật toán spoj.com", "tham lam greedy"]
keywords: "Thuật toán bài AE1B"
---

## **Đề bài:**

Thuận làm việc như một thợ mộc. Anh đấy đã nhận một hợp đồng để làm s cái bàn bằng gỗ thông. Mặc dù, Thuận có rất nhiều gỗ, nhưng anh ta lại bị hết sạch đinh. Vì vậy, anh ấy cần đi đến cửa hàng và mang về một vài hộp đinh. Hỏi số lượng hộp đinh tối thiểu mà Thuận cần mang về để có đủ đinh cho những chiếc bàn?

### **Đầu vào:**

Dòng đầu tiên của đầu vào bao gồm 3 số nguyên n, k và s (1 <= n, k, s <= 1000) phân cách nhau bởi 1 dấu cách. Chúng biểu diễn cho số lượng hộp đinh ở của hàng của Thuận, số lượng đinh cần để làm ra 1 cái bàn và số lượng bàn cần phải làm. Dòng thứ hai bao gồm n (có thể giống nhau) số nguyên ai (1 <= ai <= 1000) phân cách nhau bởi 1 dấu cách, trong đó ai là số lượng đinh ở hộp đinh thứ i tại của hàng.

### **Đầu ra:**

Một dòng duy nhất chứa 1 số nguyên – là số lượng hộp đinh tối thiểu mà Thuận cần phải mang về từ cửa hàng để làm s cái bàn. Giả sử là Thuận có đủ số lượng đinh để làm tất cả bàn.

### **Ví dụ:**

**Đầu vào:** 

5 6 3 

3 9 5 7 3 

**Đầu ra:** 

3 

**Giải thích:** 

Để làm 3 cái bàn, mỗi cái cần 6 đinh, tức là cần tổng là 18 cái đinh. Do đó, Thuận cần mang ít nhất là 3 cái hộp từ cửa hàng về nhà. Đáp án có thể là 3 hộp với số lượng đinh lần lượt làm (3, 7, 9) hoặc (9, 5, 7). 

_Tác giả: Jakub Lacki._ 

_Các bạn có thể tham khảo đề bài tiếng anh và submit tại đây: [http://www.spoj.com/problems/AE1B/](http://www.spoj.com/problems/AE1B/)_

### **Phân tích:**

+ Đối với bài toán này, các bạn chỉ cần suy nghĩ một cách đơn giản. Đó là mình sẽ bắt đầu chọn từ hộp đinh có số lượng đinh nhiều nhất trước. Cho đến khi đủ số lượng đinh thì khi đó, số lượng hộp đinh cần chọn sẽ là ít nhất. Có hai cách để triển khai: 

– C1: Để có thể chọn được hộp đinh nhiều đinh nhất trước, thì ta có thể sử dụng 1 vòng lặp for để tìm ra phần tử lớn nhất mà chưa được chọn, sau đó đánh dấu nó là đã chọn. Sau khi chọn được hộp nhiều đinh nhất thì ta sẽ kiểm tra xem đã đủ lượng đinh chưa. Khi đủ rồi thì dừng lại. 

– C2: Hoặc cách thứ hai là chúng ta sẽ sắp xếp các hộp đinh theo thứ tự giảm dần số lượng đinh. Sau đó, chỉ cần dùng vòng lặp for để duyệt từ đầu mảng, thì đảm bảo chọn được hộp đinh nhiều nhất trước.

## **Lời giải:**

(Các bạn nên tự mình nghĩ ra thuật toán của bài toán trước khi tham khảo code của tôi nhé. Hãy phát huy tối đa khả năng sáng tạo của bản thân. Hơn nữa code tôi viết ra cũng chưa thật sự tối ưu. Nên rất mong nhận được sự chia sẻ của các bạn.)

#### **Code C/C++:** 

**Cách 1:**

`gist:completejavascript/486b3205b678eda0303d746e032ba78e`

#### Cách 2:

`gist:completejavascript/d01fbb389657bab8dfbe52053ab22975`

_Code by Phạm Văn Lâm_