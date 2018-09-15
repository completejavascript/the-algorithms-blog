---
title: "SPOJ.COM – Thuật toán bài PIZZALOC - Pizza Location"
date: "2016-10-17T21:04:18.083Z"
categories: ["spoj", "Quay lui có điều kiện - Backtracking"]
tags: ["phạm văn lâm", "spoj.com", "thuật toán", "thuật toán spoj.com", "quay lui có điều kiện backtracking"]
keywords: "Thuật toán bài PIZZALOC"
---

## Đề bài:

Picko muốn mở một số cửa hàng pizza tại 1 số địa điểm. Bánh pizza sẽ cung cấp cho mọi khách hàng nằm trong hình tròn bán kính R với tâm là các địa điểm được chọn. 

Xác định số khách hàng lớn nhất có thể phục vụ.

### Input

Dòng đầu là hai số K, R : số nhà hàng có thể được mở và bán kính phục vụ của mỗi nhà hàng,1 ≤ K ≤ 10, 1 ≤ R ≤ 500. 

Dòng thứ hai là M, số địa điểm có thể đặt nhà hàng, K ≤ M ≤ 20. 

M dòng tiếp theo, mỗi dòng là 2 số nguyên X và Y, -1000 ≤ X,Y ≤ 1000. 

Dòng tiếp theo là N, số khu nhà, 1 ≤ N ≤ 100. 

Mỗi dòng trong N dòng tiếp theo là 3 số nguyên X, Y , S, là tọa độ và số người ở khu nhà đó, -1000 ≤ X,Y ≤ 1000, 1 ≤ S ≤ 100. 

Khu nhà nằm trong bán kính của nhà hàng nếu khoảng cách giữa chúng <= R. Không có 2 khu nhà tại cùng 1 địa điểm.

### Output

Ghi ra số người tối đa có thể được phục vụ.

### Ví dụ:

**pizza.in** 

2 2 

3

1 0

4 0 

7 0 

4 

0 0 1

3 0 7

5 0 9 

8 0 1 

**pizza.out** 

18 

**pizza.in** 

2 2 

3 

-2 0 

0 1 

3 0 

8 

-3 1 1 

-3 0 1 

-3 -1 1 

-2 -1 1 

0 0 3 

0 2 1 

2 1 3 

4 0 2 

**pizza.out** 

12 

_Các bạn có thể tham khảo link gốc đề bài và submit code tại đây: [http://www.spoj.com/problems/PIZZALOC/vn/](http://www.spoj.com/problems/PIZZALOC/vn/)_

### Phân tích:

+ Trong bài toán này, ta sẽ phải xây K nhà hàng trong M vị trí. Ở đây, thực chất là ta sẽ phải liệt kê ra tổ hợp chập K của M phần tử trường hợp. 

+ Với mỗi trường hợp, ta sẽ kiểm tra xem mỗi ngôi nhà có được phục vụ bởi nhà hàng nào hay không. 

+ Tôi sẽ triển khai bài toán sử dụng [thuật toán quay lui có điều kiện - Backtracking](/category/quay-lui-co-dieu-kien-backtracking/). 

+ Một điều chú ý là: với mỗi vị trí có thể đặt nhà hàng, tôi sẽ kiểm tra xem tại vị trí đó, nếu như tôi đặt nhà hàng thì nó sẽ phục vụ được cho những ngôi nhà nào. Kết quả tôi sẽ lưu được vào một mảng. Điều này sẽ tránh bị time limit.

## Lời giải:

(Các bạn nên tự mình nghĩ ra thuật toán của bài toán trước khi tham khảo code của tôi nhé. Hãy phát huy tối đa khả năng sáng tạo của bản thân. Hơn nữa code tôi viết ra cũng chưa thật sự tối ưu.  Nên rất mong nhận được sự chia sẻ của các bạn.)

### Code C/C++:

`gist:completejavascript/077fcf5993c982517690a69b7c2b0b9f`

_Code by Phạm Văn Lâm._