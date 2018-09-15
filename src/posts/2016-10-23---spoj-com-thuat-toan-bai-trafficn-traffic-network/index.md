---
title: "SPOJ.COM – Thuật toán bài TRAFFICN - Traffic Network"
date: "2016-10-23T20:44:18.083Z"
categories: ["spoj", "Thuật toán Dijkstra"]
tags: ["phạm văn lâm", "spoj.com", "thuật toán", "thuật toán spoj.com", "danh sách liên kết", "đường đi ngắn nhất", "hàng đợi vun đống", "thuật toán Dijkstra"]
keywords: "Thuật toán bài TRAFFICN"
---

## Đề bài:

Mạng lưới giao thông thành phố gồm n nút được đánh số từ 1 đến n và m đường một chiều nối các cặp nút. Để giảm được độ dài của đường đi ngắn nhất giữa hai nút trọng yếu s và t khác nhau, một danh sách gồm k đường hai chiều được đề xuất để xem xét xây dựng. 

Nhiệm vụ của bạn là viết một chương trình để chọn ra một đường trong danh sách đề xuất trên để xây dựng sao cho độ dài đường đi ngắn nhất giữa s và t là nhỏ nhất.

### Đầu vào:

Dữ liệu vào gồm nhiều bộ dữ liệu tương ứng với nhiều test. Dòng đầu tiên chứa một số nguyên dương không lớn hơn 20 là số lượng các bộ dữ liệu. Các dòng tiếp theo chứa các bộ dữ liệu. 

Với mỗi bộ dữ liệu, dòng đầu tiên chứa năm số nguyên dương n (n ≤ 10 000), m (m ≤ 100 000), k (k < 300), s (1 ≤ s ≤ n), t (1 ≤ t ≤ n) cách nhau bởi dấu trống. 

Dòng thứ i trong m dòng tiếp theo chứa ba số nguyên dương di, ci, li cách nhau bởi dấu trống, trong đó li là độ dài ( 0< li ≤ 1000) của đường một chiều thứ i từ nút di đến nút ci. 

Dòng thứ j trong k dòng tiếp theo chứa ba số nguyên dương uj, vj và qj (qj ≤ 1000) cách nhau bởi dấu trống, trong đó qj là độ dài của đường hai chiều được đề xuất thứ j nối giữa hai nút uj và vj.

### Đầu ra:

Với mỗi bộ dữ liệu, ghi ra trên một dòng độ dài nhỏ nhất có thể của đường đi ngắn nhất giữa hai nút trọng yếu sau khi xây dựng xong một đường hai chiều từ danh sách đề xuất. Trường hợp không có đường đi từ s đến t, ghi -1.

### Ví dụ:

**Đầu vào:** 

```
1 
4 5 3 1 4 
1 2 13
2 3 19 
3 1 25 
3 4 17 
4 1 18 
1 3 23 
2 3 5 
2 4 25 
```

**Đầu ra:** 

35 

_Các bạn có thể tham khảo link gốc đề bài và submit code tại đây:         [http://www.spoj.com/problems/TRAFFICN/en/](http://www.spoj.com/problems/TRAFFICN/en/)_

### Phân tích:

  * Trong bài toán này tôi sẽ sử dụng [thuật toán Dijkstra](/category/thuat-toan-dijkstra/) để tìm đường đi ngắn nhất từ điểm s tới tất cả các điểm còn lại và tìm đường đi ngắn nhất từ tất cả các điểm còn lại đến điểm t. 
  
  * Sau đó tôi sẽ duyệt các con đường trong k con đường dự kiến cần thay thế. Giả sử 1 con đường từ a đến b và khoảng cách của nó là c. Khi đó, đường đi ngắn nhất của a và b sẽ bằng: **Min{kc(s, a) + c + kc(b, t), kc(s, b) + c + kc(a, t)}** 
  
  * Trong đó: 
    * kc(s, a) là khoảng cách đường đi ngắn nhất từ s tới a (tương tự với b) 
    * kc(b, t) là khoảng cách đường đi ngắn nhất từ b tới t (tương tự với a). 
    
  * Sau khi duyệt hết k con đường ta sẽ tìm được giá trị cần tính. 
  
  * **Chú ý:** 
    * ở đây, do số lượng điểm và số con đường rất lớn nên ta không thể dùng ma trận kề được. Ở đây, tôi dùng danh sách liên kết. 
    * Đối với thuật toán Dijkstra, nếu muốn sử dụng thư viện, bạn có thể sử dụng thư viện hàng đợi ưu tiên (trong c++ hàng đợi ưu tiên là priority_queue nằm trong thư viện ```<queue>```). Ở đây, tôi sẽ triển khai (implement) lại hàng đợi ưu tiên sử dụng kỹ thuật vun đống. Nếu bạn sử dụng cách khác thì khả năng time limit là vô cùng cao.

## **Lời giải:**

(Các bạn nên tự mình nghĩ ra thuật toán của bài toán trước khi tham khảo code của tôi nhé. Hãy phát huy tối đa khả năng sáng tạo của bản thân. Hơn nữa code tôi viết ra cũng chưa thật sự tối ưu.  Nên rất mong nhận được sự chia sẻ của các bạn.)

### Code C/C++:

`gist:completejavascript/f1ffe45db11f0c9ca89a69ac9818e30c`

_Code by Phạm Văn Lâm._