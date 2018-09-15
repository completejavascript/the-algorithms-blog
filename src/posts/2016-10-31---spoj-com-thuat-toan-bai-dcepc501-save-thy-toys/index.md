---
title: "SPOJ.COM – Thuật toán bài DCEPC501 - Save Thy Toys"
date: "2016-10-31T19:48:18.083Z"
categories: ["spoj", "Quy hoạch động - Dynamic programming"]
tags: ["phạm văn lâm", "spoj.com", "thuật toán", "thuật toán spoj.com", "quy hoạch động dynamic programming", "dãy con chung dài nhất LCS"]
keywords: "Thuật toán bài DCEPC501"
---

# Đầu bài:

Leonard rất yêu thích việc mua sắm những đồ chơi khoa học viễn tưởng hiếm và đắt. Anh ta giữ chúng theo một dãy theo thứ tự ngày mua và để trong một cái tủ. Vì vậy, Sheldon sẽ không bao giờ lấy được đồ chơi của anh ta. Nhưng vì một lần không may mắn, Leonard đã thu Sheldon trong một vụ cá cược. Và Sheldon đã yêu cầu Leonard chia sẻ đồ chơi. Bởi vì, Leonard không muốn mất nhiều tiền nên anh ta đã quyết định dựa trên một chiến lược để giảm thiểu sự mất mát xuống thấp nhất. 

Leonard bắt đầu chọn từ đồ chơi đầu tiên ở trong tủ, sẽ lấy một số đồ chơi, gọi là 'x' đồ chơi. Sheldon sau đó sẽ chọn 'x' đồ chơi (chú ý là Sheldon sẽ chọn số đồ chơi bằng với Leonard, trừ khi số đồ chơi còn lại nhỏ hơn 'x'). Việc này sẽ tiếp tục cho đến khi không còn lại đồ chơi nào nữa. 

Bạn được đưa cho một dãy của đồ chơi với giá của chúng. Hãy giúp Leonard lấy được đồ chơi với số tiền lớn nhất có thể. Leonard chỉ có thể chọn 1, 2 hay 3 đồ chơi ('x' có giá trị 1, 2 hay 3)

## Đầu vào:

Dòng đầu tiên là T, số lượng testcase. Mỗi testcase chứa N ở dòng đầu tiên. Dòng thứ 2 là N số nguyên là giá tiền của các đồ chơi.

## Đầu ra:

In ra 1 số nguyên trên một dòng cho mỗi test case là tổng số tiền lớn nhất của các đồ chơi mà Leonard chọn.

## Ràng buộc:

1 <= T <= 10 

1 <= N <= 100000 

1 <= Giá của đồ chơi <= 1000000

## Ví dụ:

**Đầu vào:**

```
2
4
5 4 3 2
6
10 8 7 11 15 20
```

**Đầu ra:**

```
12
53
```

## Giải thích:

  * Ở test case 1: Leonard chọn 3 đồ chơi trong lần đầu tiên của anh ta là: 5, 4, 3\. Do đó, Sheldon không còn lựa chọn nào khác nên phải chọn 2\. Khi đó, Leonard thu được tổng số tiền lớn nhất là 5 + 4 + 3 = 12 
  
  * Ở test case 2: Leonard chọn 10 và 8\. Sau đó, Sheldon chọn 7 và 11\. Cuối cùng Leonard chọn 15 và 20\. Do đó, số tiền lớn nhất mà Leonard thu được là: 10 + 8 + 15 + 20 = 53 
  
_Các bạn có thể tham khảo link gốc đề bài và submit code tại đây: [http://www.spoj.com/problems/DCEPC501/](http://www.spoj.com/problems/DCEPC501/)_

## Phân tích:

  * Ở đây, tôi sử dụng [thuật toán quy hoạch động Dynamic programming](/category/quy-hoach-dong-dynamic-programming/) để giải quyết bài toán. Và cách triển khai là kiểu bottom-up (tức là sử dụng vòng lặp). Có một vài điều cần chú ý ở đây là:

    * Leonard sẽ có 3 cách lựa chọn là: chọn 1, 2 hoặc 3 vật. 
    * Kết quả có thể rất lớn nên phải sử dụng kiểu **long long** (64 bit) để lưu kết quả

# **Lời giải:**

(Các bạn nên tự mình nghĩ ra thuật toán của bài toán trước khi tham khảo code của tôi nhé. Hãy phát huy tối đa khả năng sáng tạo của bản thân. Hơn nữa code tôi viết ra cũng chưa thật sự tối ưu.  Nên rất mong nhận được sự chia sẻ của các bạn.)

## **Code C/ C++:**

`gist:completejavascript/d76f876204464629ac5a6996e24d48f9`

_Code by Phạm Văn Lâm._