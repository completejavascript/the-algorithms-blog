---
title: "SPOJ.COM – Thuật toán bài ADDREV – Adding Reversed Numbers"
date: "2016-09-25T21:21:18.083Z"
categories: ["spoj", "Tham lam - Greedy"]
tags: ["phạm văn lâm", "spoj.com", "thuật toán", "thuật toán spoj.com", "tham lam greedy"]
keywords: "Thuật toán bài ADDREV"
---

## **Đề bài:**

Những diễn viên hài cổ của Malidinesia (ACM) thích thú với hài kịch hơn là bi kịch. Không may là hầu hết những tác phẩm kịch cổ đều là bi kịch. Vì vậy, người cố vấn kịch của ACM đã quyết định biến một vài vở bi kịch thành hài kịch. Tất nhiên, công việc này rất là khó bởi vì ý nghĩa cơ bản của vở kịch phải được giữ nguyên vẹn, mặc dù mọi thứ gần như thay đổi hoàn toàn. Ví dụ về số: nếu bất kì số nào xuất hiện ở bi kịch thì phải được đảo nghịch trước khi được chấp nhận thành hài kịch. 

**Số đảo nghịch** là một số được viết bằng các chữ số Ả Rập nhưng các chữ số được viết theo thứ tự ngược lại. Số thứ nhất trở thành số cuối cùng và ngược lại. Ví dụ, nếu nhân vật chính có 1245 quả dâu tây ở vở bi kịch, thì bây giờ anh ấy có 5421 quả dâu tây. Chú ý rằng là không được phép có số nào mà chữ số ‘0’ ở đầu. Có nghĩa là, nếu ta có một số 1200, thì số đảo nghịch của nó sẽ là 21\. Cũng chú ý rằng là tất cả số đảo nghịch không có số 0 ở cuối. 

ACM phải tính toán với các số đảo nghịch. Nhiệm vụ của bạn là phải xây dựng thuật toán để cộng 2 số đảo nghịch và in ra tổng của chúng được đảo nghịch. Dĩ nhiên, kết quả không phải duy nhất bởi vì 1 số có thể là đảo nghịch của nhiều số. Ví dụ số 21 có thể là đảo nghịch của 12, hoặc 120, hoặc 1200,… Vì vậy, chúng ta giả sử là không có số 0 nào bị mất đi trong quá trình đảo nghịch (do đó nếu số đảo nghịch là 21 thì suy ra số gốc phải là 12)

### **Đầu vào:**

Đầu vào bao gồm N trường hợp (N cỡ 10000). Dòng đầu tiên của đầu vào bao gồm 1 số nguyên dương duy nhất N. Sau đó, sẽ là các trường hợp. Mỗi trường hợp sẽ bao gồm một dòng với 2 số nguyên dương phân biệt bởi dấu cách. Chúng là các số đảo nghịch cần phải cộng.

### **Đầu ra:**

Với mỗi đầu ra, in ra chính xác 1 dòng với 1 số nguyên duy nhất – là số đảo nghịch của tổng 2 số. Chú ý là đầu ra không được phép có số 0 ở đầu.

### **Ví dụ:**

**Đầu vào:** 

3 

24 1 

4358 754 

305 794 

**Đầu ra:** 

34 

1998 

1 

_Các bạn có thể tham khảo link gốc đề bài và submit code tại đây: [http://www.spoj.com/problems/ADDREV/](http://www.spoj.com/problems/ADDREV/)_

## **Lời giải:**

(Các bạn nên tự mình nghĩ ra thuật toán của bài toán trước khi tham khảo code của tôi nhé. Hãy phát huy tối đa khả năng sáng tạo của bản thân. Hơn nữa code tôi viết ra cũng chưa thật sự tối ưu.  Nên rất mong nhận được sự chia sẻ của các bạn.)

### **Code C/C++:**

`gist:completejavascript/75288d491f81e95771e6d0bdbd7b4900`

_Code by Phạm Văn Lâm_
