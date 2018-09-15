---
title: "SPOJ.COM – Thuật toán bài LABYR1 - Labyrinth"
date: "2016-11-07T22:39:18.083Z"
categories: ["spoj", "Tìm kiếm theo chiều rộng - BFS"]
tags: ["phạm văn lâm", "spoj.com", "thuật toán", "thuật toán spoj.com", "Đường đi dài nhất trên đồ thị", "tìm kiếm theo chiều rộng bfs"]
keywords: "Thuật toán bài LABYR1"
---

## Đề bài:

Phía bắc của kim tự tháp chứa một mê cung rất lớn và phức tạp. Mê cung được chia thành những khối hình vuông, mỗi phần trong chúng được phủ bởi đá hoặc để trống. Có những cái móc nhỏ ở giữa mỗi khu vực trống. ACM phát hiện ra rằng 2 cái móc phải được kết nối với nhau bằng dây thừng, chạy xuyên qua những cái móc ở mỗi khu trống, trên đường nối giữa những cái được kết nối với nhau. Khi những cái thừng được gắn chặt thì một cánh cửa bí mật sẽ được mở ra. Vấn đề đặt ra là chúng ta không biết những cái móc nào để kết nối. Điều đó cũng có nghĩa là độ dài cần thiết của dây thừng cũng không biết. Nhiệm vụ của bạn là tìm ra độ dài lớn nhất có thể của dây cần thiết.

### Đầu vào:

Dòng đầu tiên là số T - số lượng test case. Mỗi test case bao gồm 2 số C và R (3 <= C,R <= 1000) là số cột và số hàng. Sau đó là R dòng, mỗi dòng bao gồm C kí tự. Những kí tự này xác định ra mê cung. Mỗi cái trong chúng là '**#'** hoặc '**.'**. Trong đó, ## miêu tả đá, còn dấu . miêu tả khu vực trống. Biết rằng chỉ có thể di chuyển giữa những khu vực kề nhau (khu vực kề nhau là khu vực có cạnh chung). Không thể di chuyển chéo và cũng không thể đi ra ngoài mê cung. 

Mê cung được thiết kế sao cho chỉ có chính xác 1 đường giữa 2 khu vực trống. Do đó, nếu như tìm thấy những cái móc thích hợp thì rất dễ để tìm ra đường đúng để nối chúng.

### Đầu ra:

Mỗi test case in ra trên 1 dòng duy nhất, theo dạng sau:

Maximum rope length is X.

Trong đó, x là độ dài đường dài nhất giữa 2 khu vực trống.

### Ví dụ:

**Đầu vào:**

```
2
3 3
###
#.#
###
7 6
#######
#.#.###
#.#.###
#.#.#.#
#.....#
#######
```

**Đầu ra:**

```
Maximum rope length is 0.
Maximum rope length is 8.
```

_Các bạn có thể tham khảo link gốc đề bài và submit code tại đây: [http://www.spoj.com/problems/LABYR1/](http://www.spoj.com/problems/LABYR1/)_

### Phân tích:

  * Bài toán sử dụng [thuật toán tìm kiếm theo chiều rộng BFS](/category/tim-kiem-theo-chieu-rong-bfs/) để giải quyết. Cụ thể là tôi sẽ áp dụng 2 lần BFS.
  
  * Lần thứ nhất tôi sử dụng BFS tại một điểm bất kì. Từ đó tìm ra được điểm có khoảng cách xa nhất so với điểm bắt đầu.
  
  * Tiếp tục sử dụng thuật toán BFS tại điểm vừa tìm được. Tôi lại tìm được điểm có khoảng cách xa nhất so với điểm bắt đầu trong trường hợp thứ hai này. Lần này, khoảng cách xa nhất chính là cái cần tìm.
  
  * Thực chất đây là thuật toán tìm đường đi dài nhất trên cây.

## Lời giải:

(Các bạn nên tự mình nghĩ ra thuật toán của bài toán trước khi tham khảo code của tôi nhé. Hãy phát huy tối đa khả năng sáng tạo của bản thân. Hơn nữa code tôi viết ra cũng chưa thật sự tối ưu. Nên rất mong nhận được sự chia sẻ của các bạn.)

### Code C/C++:

`gist:completejavascript/5aeb0298aa5385361befdd77a8459a42`

_Code by Phạm Văn Lâm._