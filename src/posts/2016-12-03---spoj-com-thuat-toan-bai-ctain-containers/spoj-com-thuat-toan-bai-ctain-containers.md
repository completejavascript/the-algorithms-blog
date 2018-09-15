---
title: "SPOJ.COM – Thuật toán bài CTAIN - Containers"
date: "2016-12-03T19:46:18.083Z"
categories: ["spoj", "Tìm kiếm theo chiều rộng - BFS"]
tags: ["phạm văn lâm", "spoj.com", "thuật toán", "thuật toán spoj.com", "tìm kiếm theo chiều rộng bfs"]
keywords: "Thuật toán bài CTAIN"
---

## Đề bài:

Bạn được đưa cho n thùng chứa, trong đó 1 <= n <= 4\. Lúc đầu, tất cả chúng đều đầy nước. Dung lượng tối đa của thùng thứ i là một số tự nhiên _o_<sub>_i_</sub>  thỏa mãn 1 <= _o<sub>i</sub>_ <= 49. 

Có 3 loại hành động có thể thực hiện: 

  * 1\. Đổ toàn bộ nước từ một thùng sang một thùng khác 
  * 2\. Đổ đầy một thùng với phần nước từ một thùng khác. 
  * 3\. Đổ hết nước từ một thùng xuống cống 
  
**Nhiệm vụ:** 

Viết một chương trình cho mỗi test case: 
  
  * Đọc vào số lượng thùng n, dung lượng tối đa của mỗi thùng và lượng nước được yêu cầu từ mỗi thùng.
  * Kiểm tra xem nếu tồn tại một chuỗi hành động có thể dẫn tới lượng nước yêu cầu của mỗi thùng, thì tính xem số bước nhỏ nhất để làm được việc đó. 
  * In ra kết quả. Kết quả là số bước nhỏ nhất để đạt được yêu cầu hoặc in ra "NO" nếu không thể đạt được yêu cầu.

### Đầu vào:

Một số nguyên ở dòng đầu tiên, là số lượng test case, theo sau là một dòng trắng. Cho biết là sẽ không quá 20 test case. 

Mỗi test case, dòng đầu tiên sẽ là một số nguyên dương n, với n <= 4 là số lượng thùng. Dòng tiếp theo là n số nguyên dương, là dung lượng tối đa của mỗi thùng _o_<sub>_i_</sub> , thỏa mãn 1 <= _o_<sub>_i_</sub> <= 49\. Dòng tiếp theo sẽ là n số nguyên dương _w_<sub>_i_</sub>, là lượng nước yêu cầu của mỗi thùng, thỏa mãn 0 <= _w_<sub>_i_</sub> <= _o_<sub>_i_</sub>. Tất cả số nguyên ở dòng thứ 2 và thứ 3 của mỗi test case được cách nhau bởi một dấu cách. Các test case được phân cách nhau bởi một dấu cách.

### Đầu ra:

Mỗi test case in ra một số nguyên - là số bước nhỏ nhất để đạt được yêu cầu. Ngược lại thì in ra "NO".

### Ví dụ:

**Đầu vào:**

```
2

3
3 5 5
0 0 4

2
20 25
10 16
```

**Đầu ra:**

```
6
NO
```

Các bạn có thể tham khảo link gốc đề bài và submit code tại đây: [http://www.spoj.com/problems/CTAIN/](http://www.spoj.com/problems/CTAIN/)

### Phân tích:

  * Tại một thời điểm, ta sẽ có một trạng thái ứng với lượng nước trong mỗi thùng. Bài toán cho trước trạng thái ban đầu và yêu cầu tìm ra số bước nhỏ nhất để đạt được trạng thái đích. Do đó, tôi sẽ dụng [thuật toán tìm kiếm theo chiều rộng BFS](/category/tim-kiem-theo-chieu-rong-bfs/) để giải quyết bài toán.
  
  * Vì có tối đa là 4 thùng nên tôi sẽ sử dụng mảng 4 chiều, trong đó mỗi chiều sẽ có tối đa 50 phần tử từ 0 đến 49 đại diện cho lượng nước từ 0 đến 49, để đánh dấu số bước nhỏ nhất có thể đạt được trạng thái đó. Ban đầu các giá trị của mảng sẽ được đánh dấu là MAX_INT. Sau quá trình duyệt nếu như giá trị của mảng tại trạng thái cần tìm vẫn là MAX_INT thì có nghĩa là sẽ không có cách để đạt được trạng thái đó và in ra là "NO". Ngược lại tôi sẽ in ra giá trị của mảng tại trạng thái đó.
  
  * Tại một trạng thái thì các trạng thái kề với nó sẽ có được bằng cách thực hiện 3 hành động cho trong đề bài.

## Lời giải:

(Các bạn nên tự mình nghĩ ra thuật toán của bài toán trước khi tham khảo code của tôi nhé. Hãy phát huy tối đa khả năng sáng tạo của bản thân. Hơn nữa code tôi viết ra cũng chưa thật sự tối ưu. Nên rất mong nhận được sự chia sẻ của các bạn.)

### Code C/C++:

`gist:completejavascript/cc30327bd0efa12f75a4764a1ae0b26a`

_Code by Phạm Văn Lâm._