---
title: "SPOJ.COM – Thuật toán bài ONEZERO – Ones and zeros"
date: "2016-09-25T05:05:18.083Z"
categories: ["spoj", "Tìm kiếm theo chiều rộng - BFS", "Đồ thị và cây - Graph and Tree"]
tags: ["phạm văn lâm", "spoj.com", "thuật toán", "thuật toán spoj.com", "tìm kiếm theo chiều rộng bfs", "đồ thị và cây graph and tree"]
keywords: "Thuật toán bài ONEZERO"
---

## **Đề bài:**

Ta cần tìm 1 số dương mà dạng biểu diễn của nó trong hệ thập phân bao gồm chỉ toàn số 0, 1 và có ít nhất một số 1, ví dụ: 101\. Nếu một số mà không có dạng như vậy thì ta có thể nhân nó với một vài số nguyên dương khác để được một số như vậy.

### **Đầu vào:**

Cho một số K là số lượng test case (K cỡ 1000), mỗi test case bao gồm K dòng. Mỗi dòng là một số nguyên n, 1 <= n <= 20000.

### **Đầu ra:**

Với mỗi một test case, tìm số nguyên dương nhỏ nhất là bội số của n thoả mãn là nó chỉ bao gồm toàn số 0, 1 và bắt đầu bằng số 1.

### **Ví dụ:**

**Đầu vào:** 

3 

17 

11011 

17 

**Đầu ra:** 

11101 

11011 

11101 

_Các bạn có thể tham khảo đề bài tiếng anh và submit code tại: [http://www.spoj.com/problems/ONEZERO/](http://www.spoj.com/problems/ONEZERO/)_

### **Phân tích:**

+ Nếu đầu vào là 1 thì suy ra luôn đầu ra là 1 + Ở bài toán này ta sẽ dùng thuật toán [tìm kiếm theo chiều rộng - BFS](/category/tim-kiem-theo-chieu-rong-bfs/). Với trạng thái đầu tiên là số 1. + Với chú ý là: Nếu trạng thái hiện tại là số x, thì 2 trạng thái kề với nó là 10*x và 10*x + 1\. Khi đó, đảm bảo rằng các số sẽ chỉ toàn 0 và 1.

## **Lời giải:**

(Các bạn nên tự mình nghĩ ra thuật toán của bài toán trước khi tham khảo code của tôi nhé. Hãy phát huy tối đa khả năng sáng tạo của bản thân. Hơn nữa code tôi viết ra cũng chưa thật sự tối ưu. Nên rất mong nhận được sự chia sẻ của các bạn.)

### **Code C/C++:**

`gist:completejavascript/341ad3279afa2d9b874381deaebd34f5`

_Code by Phạm Văn Lâm_