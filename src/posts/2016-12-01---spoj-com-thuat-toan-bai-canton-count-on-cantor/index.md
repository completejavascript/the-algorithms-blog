---
title: "SPOJ.COM – Thuật toán bài CANTON - Count on Cantor"
date: "2016-12-01T22:00:18.083Z"
categories: ["spoj", "Tham lam - Greedy"]
tags: ["phạm văn lâm", "spoj.com", "thuật toán", "thuật toán spoj.com", "tham lam greedy"]
keywords: "Thuật toán bài CANTON"
---

## Đề bài:

Một trong những phép chứng minh nổi tiếng trong toán học hiện đại là phép chứng minh của Georg Cantor về dãy những số hữu tỷ đếm được. Cái này thực hiện bằng cách sử dụng phép đếm những số hữu tỷ được trình bày như hình sau:

```
1/1 1/2 1/3 1/4 1/5 ...
2/1 2/2 2/3 2/4
3/1 3/2 3/3
4/1 4/2
5/1
```

Trên hình trên, số hạng đầu tiên là 1/1, thứ hai là 1/2, thứ 3 là 2/1,  thứ tư là 3/1 và thứ 5 là 2/2, vân vân.

### Đầu vào:

Bắt đầu bằng số t, t <= 20, là số lượng test case. Sau đó là t test case. Mỗi test case chứa một số trên 1 dòng.

### Đầu ra:

Bạn hãy viết một chương trình để đọc danh sách các số, trong khoảng từ 1 đến 10^7 và in ra số hạng tương ứng theo cách đếm trên.

### Ví dụ:

**Đầu vào:**

```
3
3
14
7
```

**Đầu ra:**

```
TERM 3 IS 2/1
TERM 14 IS 2/4
TERM 7 IS 1/4
```

_Các bạn có thể tham khảo link gốc đề bài và submit code tại đây: [http://www.spoj.com/problems/CANTON/](http://www.spoj.com/problems/CANTON/)_

### Phân tích:

  * Tôi sẽ sử dụng [thuật toán tham lam Greedy](/category/tham-lam-greedy/) để giải bài toán.
  
  * Nếu đánh số thứ tự cho các số từ 1, và coi mỗi đường chéo là một hàng thì tôi sẽ có quy luật như sau: 
  
    ```
    1 
    2 3 
    4 5 6 
    7 8 9 10 
    ...
    ``` 
  
  * Ta chỉ xét tới số nhỏ nhất của mỗi hàng là: 1, 2, 4, 7, ... sẽ có công thức như sau: ```x1 = 1 và x_n = 1 + (n*(n-1)) / 2``` với n sẽ là chỉ số hàng.
  
  * Các bạn có thể thay thử n vào sẽ thấy công thức trên đúng. Lúc này nếu như tôi cần tìm số hạng thứ a. Tôi có thể tìm được chỉ số của hàng chứa a bằng cách cho ```1 + (n*(n-1)) / 2 = a```. Suy ra: ```n = (1 + sqrt(8a-7))/2```. Thực tế sẽ không đúng, tuy nhiên vì phép chia này là phép chia nguyên do đó kết quả cho ra là hoàn toàn đúng.
  
  * Bây giờ tôi đã có được chỉ số hàng của hàng chứa a rồi là n. Suy ra số nhỏ nhất của hàng đó là: ```1 + (n*(n-1)) / 2```
  
  * Quy luật tiếp theo có thể thấy được là trên cùng một hàng thì tổng của tử số và mẫu số là như nhau với mọi số hạng và nó chính bằng chỉ số hàng + 1.
  
  * Cụ thể tiếp theo như nào xin mời bạn xem code của tôi phía dưới nhé.

## Lời giải:

(Các bạn nên tự mình nghĩ ra thuật toán của bài toán trước khi tham khảo code của tôi nhé. Hãy phát huy tối đa khả năng sáng tạo của bản thân. Hơn nữa code tôi viết ra cũng chưa thật sự tối ưu. Nên rất mong nhận được sự chia sẻ của các bạn.)

### Code C/C++:

`gist:completejavascript/46a6f31d1848152943ec9399333e4bc0`

_Code by Phạm Văn Lâm._