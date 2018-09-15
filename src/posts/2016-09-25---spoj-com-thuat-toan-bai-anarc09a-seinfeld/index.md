---
title: "SPOJ.COM – Thuật toán bài ANARC09A – Seinfeld"
date: "2016-09-25T20:55:18.083Z"
categories: ["spoj", "Tham lam - Greedy"]
tags: ["phạm văn lâm", "spoj.com", "thuật toán", "thuật toán spoj.com", "tham lam greedy"]
keywords: "Thuật toán bài ANARC09A"
---

## **Đề bài:**

Tôi đã viết những câu chuyện được nhiều năm rồi, một vài trong số đó thì khá là ngớ ngẩn, chỉ là biến những vấn đề đơn giản trở nên phức tạp, và những vấn đề phức tạp trở nên đơn giản. Nhưng, điều đó không dành cho vấn đề sau. 

Bạn được đưa cho một chuỗi kí tự, không có dấu cách và được tạo bởi toàn những dấu ngoặc đóng và mở. Nhiệm vụ của bạn là tìm ra số bước tối thiểu để làm cho chuỗi kí tự này trở nên hợp lệ. Sự hợp lệ được định nghĩa như sau: 

1\. Chuỗi kí tự rỗng được gọi là hợp lệ 

2\. Nếu S hợp lệ thì, {S} cũng hợp lệ 

3\. Nếu S, T hợp lệ, thì kết hợp lại là ST cũng hợp lệ.

Tất cả những chuỗi sau là hợp lệ: {}, {}{} và {{}{}}. Nhưng những cái sau đây thì không hợp lệ: }{, {{}{, và {}{ 

Một bước được định nghĩa là một lần thay thế dấu mở ngoặc thành đóng ngoặc hoặc ngược lại.

### **Đầu vào:**

Gồm 1 hay nhiều test case. Mỗi test case được miêu tả trên 1 dòng. Dòng này không chứa dấu cách và chỉ chứa dấu mở ngoặc và đóng ngoặc. Có tối đa 2000 kí tự và tất cả đều có độ dài chẵn. Dòng cuối cùng của đầu vào được tạo bởi 1 hay nhiều dấu ‘-‘.

### **Đầu ra:**

Mỗi test case, in ra theo mẫu: 

k. N 

Trong đó, k là số thứ tự test case (bắt đầu từ 1), và N là số bước tối thiểu để chuyển chuỗi đã cho thành chuỗi hợp lệ.

### **Ví dụ:**

**Đầu vào:** 

}{ 
  
{}{}{} 

{{{} 

— 

**Đầu ra:** 

1\. 2 

2\. 0 

3\. 1 

_Các bạn có thể tham khảo đề bài tiếng anh và submit tại đây: [http://www.spoj.com/problems/ANARC09A/](http://www.spoj.com/problems/ANARC09A/)_

### **Phân tích:**

+ Ở đây ta sẽ sử dụng stack để loại bỏ những cặp hợp lệ. Bằng cách là lần lượt cho từng kí tự vào stack, nếu kí tự ở đỉnh stack là { mà kí tự cho thêm vào là } thì khi đó ta sẽ cho kí tự ở đỉnh stack ra ngoài. Vì chúng là cặp hợp lệ. 

+ Sau đó, ta sẽ xử lí đối với những kí tự còn lại trong stack để tính ra số bước cần thiết. 

+ Ở đây, tôi không dùng thư viện có sẵn. Tôi sử dụng mảng cùng với một biến để lưu độ dài mảng. Và sẽ thao tác với nó giống như stack. 

+ **Ví dụ:** 

`int stack[MAX], leng = 0;` 

– Muốn push 1 phần tử x vào stack, tôi sẽ xử lí như sau: `stack[leng] = x; leng++;` 

– Muốn pop phần tử ở stack ra thì tôi sẽ xử lí như sau: `leng--;`

## **Lời giải:**

(Các bạn nên tự mình nghĩ ra thuật toán của bài toán trước khi tham khảo code của tôi nhé. Hãy phát huy tối đa khả năng sáng tạo của bản thân. Hơn nữa code tôi viết ra cũng chưa thật sự tối ưu. Nên rất mong nhận được sự chia sẻ của các bạn.)

### **Code C/C++:**

`gist:completejavascript/80dd8e97a3205af76259dd66bf6d66d6`

_Code by Phạm Văn Lâm_

