---
title: "SPOJ.COM – Thuật toán bài TOANDFRO - To and Fro"
date: "2016-10-26T21:47:18.083Z"
categories: ["spoj", "Tham lam - Greedy"]
tags: ["phạm văn lâm", "spoj.com", "thuật toán", "thuật toán spoj.com", "tham lam greedy"]
keywords: "Thuật toán bài TOANDFRO"
---

## Đề bài:

Mo và Larry đã nghĩ ra cách để mã hoá tin nhắn. Đầu tiên họ bí mật về số lượng cột và viết tin nhắn (chỉ bao gồm các chữ cái) theo từng cột từ trên xuống theo số cột đó, và chèn thêm các kí tự ngẫu nhiên để tạo ra một mảng hình chữ nhật của các chữ cái.  Ví dụ: nếu tin nhắn là “There’s no place like home on a snowy night” và họ có 5 cột. Thì Mo sẽ viết nó xuống thành: 

```
t o i o y 
h p k n n 
e l e a i 
r a h s g 
e c o n h 
s e m o t 
n l e w x
``` 

**Chú ý rằng:** Mo chỉ viết chữ cái, và ở dạng chữ thường. Ở ví dụ này, Mo sử dụng kí tự 'x' để điền thêm vào tin nhắn để tạo ra mảng kí tự hình chữ nhật. Sau đó Mo gửi tin nhắn đó cho Larry bằng cách viết các chữ này theo mỗi hàng. Lần lượt từ trái sang phải rồi từ phải sang trái. Do đó, tin nhắn trên sẽ thành: 

```
toioynnkpheleaigshareconhtomesnlewx
``` 

Nhiệm vụ của bạn là khôi phục lại lá thư gốc cho Larry (kèm theo các chữ cái được thêm vào)

### Đầu vào:

Bao gồm nhiều test case. Mỗi test case bao gồm 2 dòng. Dòng đầu tiên bao gồm số nguyên từ 2 đến 20, xác định số cột. Dòng tiếp theo là một chuỗi kí tự tối đa là 200 chữ cái thường. Cuối cùng của đầu vào là một dòng chứa số 0.

### Đầu ra:

Mỗi đầu ra chứa 1 dòng, là tin nhắn gốc của MO, trong đó không chứa dấu cách. 

_Các bạn có thể tham khảo link gốc đề bài và submit code tại đây: [http://www.spoj.com/problems/TOANDFRO/](http://www.spoj.com/problems/TOANDFRO/)_

### **Phân tích:**

  * Bài toán này không cần phải sử dụng thuật toán gì phức tạp. Do đó, tôi xếp nó vào dạng [thuật toán tham lam Greedy](/category/tham-lam-greedy/) 
  * Tôi sẽ làm bài toán này hoàn toàn dựa theo yêu cầu bài toán. Tức là đề bài nói sao thì tôi làm vậy.

## Lời giải:

(Các bạn nên tự mình nghĩ ra thuật toán của bài toán trước khi tham khảo code của tôi nhé. Hãy phát huy tối đa khả năng sáng tạo của bản thân. Hơn nữa code tôi viết ra cũng chưa thật sự tối ưu.  Nên rất mong nhận được sự chia sẻ của các bạn.)

### Code C/C++:

`gist:completejavascript/b265bbf83ab14883a7a2d52ac10f3008`

### Code Python:

`gist:completejavascript/f6e2f1634af16a391930f3f3db992854`

_Code by Phạm Văn Lâm._