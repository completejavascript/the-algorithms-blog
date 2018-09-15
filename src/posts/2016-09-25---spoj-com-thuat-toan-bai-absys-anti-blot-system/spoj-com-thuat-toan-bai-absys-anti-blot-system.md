---
title: "SPOJ.COM – Thuật toán bài ABSYS – Anti-Blot System"
date: "2016-09-25T21:25:18.083Z"
categories: ["spoj", "Tham lam - Greedy"]
tags: ["phạm văn lâm", "spoj.com", "thuật toán", "thuật toán spoj.com", "tham lam greedy"]
keywords: "Thuật toán bài ABSYS"
---

## **Đề bài:**

Tám là một học sinh lớp 2 rất thông minh, chăm chỉ và giỏi về lập trình. Gần đây, bạn ấy quyết định chuyển đổi toàn bộ nội dung ở vở ghi chép thành một phiên bản “điện tử”. Tuy nhiên, Tám phát hiện ra rằng vở toán của bạn ấy bị dính đầy các vết mực. 

Do đó, Tám đã scan lại toàn bộ nội dung và chuyển tới một thiết bị – cái mà bạn ấy đã lập trình ra nó từ khi mới biết chữ (quả là một thiên tài !!!). Thiết bị này thay thế tất cả vết mực thành dòng chữ “machula”. 

**Vấn đề đặt ra ở đây là:** 

Bạn được đưa cho vở viết của Tám, được xử lý bởi thiết bị trên. Chúng bao gồm những bài toán đơn giản, được sử dụng để thực hành phép tính cộng với những số nguyên dương. Nhiệm vụ của bạn là phục hồi lại những vùng bị dính mực.

### **Đầu vào:**

Dòng đầu tiên là số tự nhiên T, xác định số lượng test case. Mỗi test case được bắt đầu bằng một dòng trống. Mỗi test case chỉ bao gồm 1 dòng, biểu diễn biểu thức dạng `"number + number = number"`, trong đó, _number_ là số nguyên dương. Một phần của biểu thức được thay thế bởi dòng chữ “machula”. Dòng chữ này luôn luôn bao phủ một chuỗi các số không có dấu cách, thậm chí là bao phủ toàn bộ số. Giả sử mỗi biểu thức chỉ có một cách duy nhất để hoàn thành.

### **Đầu ra:**

Mỗi test case, đầu ra bao gồm 1 dòng dạng `"number + number = number"`. Trong đó, tất cả các số đã được phục hồi.

### **Ví dụ:**

**Đầu vào:** 

3 

23 + 47 = machula 

3247 + 5machula2 = 3749 

machula13 + 75425 = 77038 

**Đầu ra:** 

23 + 47 = 70 

3247 + 502 = 3749 

1613 + 75425 = 77038 

**Chú ý:** với C++/C/Java sử dụng int, Pascal sử dụng longint là OK! 

_Các bạn có thể tham khảo link gốc đề bài và submit code tại đây: [http://www.spoj.com/problems/ABSYS/](http://www.spoj.com/problems/ABSYS/)_

## **Lời giải:**

(Các bạn nên tự mình nghĩ ra thuật toán của bài toán trước khi tham khảo code của tôi nhé. Hãy phát huy tối đa khả năng sáng tạo của bản thân. Hơn nữa code tôi viết ra cũng chưa thật sự tối ưu.  Nên rất mong nhận được sự chia sẻ của các bạn.)

### **Code C/C++:**

`gist:completejavascript/c057a3e85e3009b4309f829edfbb3f97`

_Code by Phạm Văn Lâm_